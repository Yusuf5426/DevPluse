<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-4">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
        <p class="mt-2 text-gray-600">Sending message...</p>
      </div>
      
      <form v-else @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-gray-700 font-medium mb-2">Name</label>
          <input 
            v-model="form.name" 
            type="text" 
            required 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label class="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            required 
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label class="block text-gray-700 font-medium mb-2">Message</label>
          <textarea 
            v-model="form.message" 
            required 
            rows="4"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          :disabled="loading || !isFormValid"
          class="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
      
      <!-- Success Message -->
      <div v-if="successMsg" class="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          {{ successMsg }}
        </div>
      </div>
      
      <!-- Error Message -->
      <div v-if="errorMsg" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
          </svg>
          {{ errorMsg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ref as dbRef, push, serverTimestamp } from 'firebase/database'
import { rtdb } from '../lib/firebase.js' // ✅ Import rtdb instead of db

// Reactive form data
const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

// Form validation
const isFormValid = computed(() => {
  return form.value.name.trim() && 
         form.value.email.trim() && 
         form.value.message.trim()
})

// Clear messages after timeout
const clearMessages = () => {
  setTimeout(() => {
    successMsg.value = ''
    errorMsg.value = ''
  }, 5000)
}

// Submit form function
const submitForm = async () => {
  if (!isFormValid.value) {
    errorMsg.value = 'Please fill all fields'
    clearMessages()
    return
  }

  loading.value = true
  errorMsg.value = ''
  successMsg.value = ''

  try {
    console.log('Attempting to send message...') // Debug log
    
    const contactRef = dbRef(rtdb, 'contacts') // ✅ Use rtdb instead of db
    const messageData = {
      name: form.value.name.trim(),
      email: form.value.email.trim(), 
      message: form.value.message.trim(),
      timestamp: serverTimestamp(),
      status: 'new',
      id: Date.now() // Unique ID
    }
    
    console.log('Sending data:', messageData) // Debug log
    
    await push(contactRef, messageData)
    
    console.log('Message sent successfully!') // Debug log
    
    // Success response
    successMsg.value = '✅ Message sent successfully! We\'ll get back to you soon.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      message: ''
    }
    
    clearMessages()
    
  } catch (error) {
    console.error('Firebase Error:', error) // Debug log
    
    // Handle specific Firebase errors
    if (error.code === 'PERMISSION_DENIED') {
      errorMsg.value = '⚠️ Permission denied. Please check Firebase rules.'
    } else if (error.code === 'NETWORK_ERROR') {
      errorMsg.value = '📡 Network error. Please check your connection.'
    } else {
      errorMsg.value = `❌ Failed to send message: ${error.message}`
    }
    
    clearMessages()
  } finally {
    loading.value = false
  }
}
</script>
