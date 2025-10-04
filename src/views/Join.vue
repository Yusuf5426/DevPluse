<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
    <!-- Background Animation -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-2xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-12 animate-slideInDown">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <i class="fas fa-users"></i>
            <span>Join Our Developer Team</span>
            <i class="fas fa-rocket"></i>
          </div>
          
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Build the
            <span class="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Future Together?
            </span>
          </h1>
          
          <p class="text-lg text-gray-600 max-w-xl mx-auto">
            Join our innovative team and work on cutting-edge projects. We're looking for passionate developers who want to make a difference.
          </p>
        </div>

        <!-- Form Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 sm:p-10 animate-slideInUp animation-delay-200">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Personal Information -->
            <div class="space-y-6">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <i class="fas fa-user text-blue-600"></i>
                Personal Information
              </h2>
              
              <!-- Name Fields -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="form-group">
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    :class="[
                      'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                      errors.firstName ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                    ]"
                    placeholder="Enter your first name"
                    required
                  />
                  <span v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</span>
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    :class="[
                      'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                      errors.lastName ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                    ]"
                    placeholder="Enter your last name"
                    required
                  />
                  <span v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</span>
                </div>
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    errors.email ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  ]"
                  placeholder="your.email@example.com"
                  required
                />
                <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
              </div>

              <!-- Phone -->
              <div class="form-group">
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    errors.phone ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  ]"
                  placeholder="+91 9876543210"
                  required
                />
                <span v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</span>
              </div>
            </div>

            <!-- Professional Information -->
            <div class="space-y-6 pt-6 border-t border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <i class="fas fa-briefcase text-purple-600"></i>
                Professional Information
              </h2>

              <!-- Position -->
              <div class="form-group">
                <label for="position" class="block text-sm font-medium text-gray-700 mb-2">
                  Position Applied For *
                </label>
                <select
                  id="position"
                  v-model="form.position"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    errors.position ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  ]"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="frontend-developer">Frontend Developer</option>
                  <option value="backend-developer">Backend Developer</option>
                  <option value="fullstack-developer">Full Stack Developer</option>
                  <option value="mobile-developer">Mobile Developer</option>
                  <option value="ai-developer">AI/ML Developer</option>
                  <option value="game-developer">Game Developer</option>
                  <option value="devops-engineer">DevOps Engineer</option>
                  <option value="ui-ux-designer">UI/UX Designer</option>
                </select>
                <span v-if="errors.position" class="text-red-500 text-sm mt-1">{{ errors.position }}</span>
              </div>

              <!-- Experience -->
              <div class="form-group">
                <label for="experience" class="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  v-model="form.experience"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    errors.experience ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  ]"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years (Fresher)</option>
                  <option value="1-3">1-3 years (Junior)</option>
                  <option value="3-5">3-5 years (Mid-level)</option>
                  <option value="5-8">5-8 years (Senior)</option>
                  <option value="8+">8+ years (Expert)</option>
                </select>
                <span v-if="errors.experience" class="text-red-500 text-sm mt-1">{{ errors.experience }}</span>
              </div>

              <!-- Skills -->
              <div class="form-group">
                <label for="skills" class="block text-sm font-medium text-gray-700 mb-2">
                  Technical Skills *
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                  <div v-for="skill in availableSkills" :key="skill" class="flex items-center">
                    <input
                      type="checkbox"
                      :id="skill"
                      :value="skill"
                      v-model="form.skills"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label :for="skill" class="ml-2 text-sm text-gray-700">{{ skill }}</label>
                  </div>
                </div>
                <span v-if="errors.skills" class="text-red-500 text-sm mt-1">{{ errors.skills }}</span>
              </div>

              <!-- Portfolio URL -->
              <div class="form-group">
                <label for="portfolio" class="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio/GitHub URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  v-model="form.portfolio"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
                  placeholder="https://github.com/yourusername"
                />
              </div>

              <!-- Resume Upload -->
              <div class="form-group">
                <label for="resume" class="block text-sm font-medium text-gray-700 mb-2">
                  Resume (PDF)
                </label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
                  <input
                    type="file"
                    id="resume"
                    @change="handleFileUpload"
                    accept=".pdf"
                    class="hidden"
                  />
                  <label for="resume" class="cursor-pointer">
                    <div v-if="!form.resume" class="space-y-2">
                      <i class="fas fa-cloud-upload-alt text-3xl text-gray-400"></i>
                      <div class="text-gray-600">
                        <span class="font-medium text-blue-600 hover:text-blue-500">Click to upload</span>
                        or drag and drop your resume
                      </div>
                      <p class="text-xs text-gray-500">PDF up to 10MB</p>
                    </div>
                    <div v-else class="space-y-2">
                      <i class="fas fa-file-pdf text-3xl text-green-500"></i>
                      <div class="text-green-600 font-medium">{{ form.resume.name }}</div>
                      <p class="text-xs text-gray-500">{{ formatFileSize(form.resume.size) }}</p>
                    </div>
                  </label>
                </div>
                <span v-if="errors.resume" class="text-red-500 text-sm mt-1">{{ errors.resume }}</span>
              </div>
            </div>

            <!-- Additional Information -->
            <div class="space-y-6 pt-6 border-t border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <i class="fas fa-comment-dots text-green-600"></i>
                Additional Information
              </h2>

              <!-- Cover Letter -->
              <div class="form-group">
                <label for="coverLetter" class="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Why do you want to join us? *
                </label>
                <textarea
                  id="coverLetter"
                  v-model="form.coverLetter"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none',
                    errors.coverLetter ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  ]"
                  rows="5"
                  placeholder="Tell us why you want to join our team and what makes you a great fit..."
                  required
                ></textarea>
                <div class="flex justify-between items-center mt-1">
                  <span v-if="errors.coverLetter" class="text-red-500 text-sm">{{ errors.coverLetter }}</span>
                  <span class="text-xs text-gray-500 ml-auto">{{ form.coverLetter.length }}/500</span>
                </div>
              </div>

              <!-- Availability -->
              <div class="form-group">
                <label for="availability" class="block text-sm font-medium text-gray-700 mb-2">
                  When can you start? *
                </label>
                <select
                  id="availability"
                  v-model="form.availability"
                  :class="[
                    'w-full px-4 py-3 border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    errors.availability ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
                  ]"
                  required
                >
                  <option value="">Select availability</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-week">Within 1 week</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
                <span v-if="errors.availability" class="text-red-500 text-sm mt-1">{{ errors.availability }}</span>
              </div>

              <!-- Work Preference -->
              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-3">
                  Work Preference *
                </label>
                <div class="space-y-2">
                  <div v-for="preference in workPreferences" :key="preference.value" class="flex items-center">
                    <input
                      type="radio"
                      :id="preference.value"
                      :value="preference.value"
                      v-model="form.workPreference"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label :for="preference.value" class="ml-2 text-sm text-gray-700">
                      {{ preference.label }}
                    </label>
                  </div>
                </div>
                <span v-if="errors.workPreference" class="text-red-500 text-sm mt-1">{{ errors.workPreference }}</span>
              </div>
            </div>

            <!-- Terms and Conditions -->
            <div class="pt-6 border-t border-gray-200">
              <div class="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  v-model="form.agreedToTerms"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  required
                />
                <label for="terms" class="text-sm text-gray-700">
                  I agree to the 
                  <a href="#" class="text-blue-600 hover:text-blue-700 underline">Terms and Conditions</a>
                  and 
                  <a href="#" class="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>
                  *
                </label>
              </div>
              <span v-if="errors.agreedToTerms" class="text-red-500 text-sm mt-1">{{ errors.agreedToTerms }}</span>
            </div>

            <!-- Submit Button -->
            <div class="pt-6">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
              >
                <!-- Button Content -->
                <span v-if="!isSubmitting" class="relative flex items-center justify-center gap-3 z-10">
                  <i class="fas fa-paper-plane"></i>
                  <span>Submit Application</span>
                  <i class="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                </span>
                
                <!-- Loading State -->
                <span v-else class="relative flex items-center justify-center gap-3 z-10">
                  <i class="fas fa-spinner animate-spin"></i>
                  <span>Submitting Application...</span>
                </span>
                
                <!-- Animated Background -->
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Shimmer Effect -->
                <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </form>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="submitMessage" class="mt-6 animate-slideInUp">
          <div :class="[
            'p-4 rounded-lg border',
            submitSuccess 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          ]">
            <div class="flex items-center gap-2">
              <i :class="submitSuccess ? 'fas fa-check-circle text-green-500' : 'fas fa-exclamation-circle text-red-500'"></i>
              <span class="font-medium">{{ submitMessage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { db, storage } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

// Form data
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  skills: [],
  portfolio: '',
  resume: null,
  coverLetter: '',
  availability: '',
  workPreference: '',
  agreedToTerms: false
})

// Form state
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const errors = ref({})

// Options
const availableSkills = [
  'JavaScript', 'Python', 'Vue.js', 'React', 'Node.js', 'TypeScript',
  'HTML/CSS', 'PHP', 'Java', 'C++', 'Firebase', 'Supabase',
  'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Figma'
]

const workPreferences = [
  { value: 'remote', label: 'Remote' },
  { value: 'office', label: 'Office' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'flexible', label: 'Flexible' }
]

// Methods
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    if (file.type !== 'application/pdf') {
      errors.value.resume = 'Please upload a PDF file'
      return
    }
    if (file.size > 10 * 1024 * 1024) { // 10MB
      errors.value.resume = 'File size should be less than 10MB'
      return
    }
    form.resume = file
    delete errors.value.resume
  }
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const validateForm = () => {
  errors.value = {}
  
  // Required field validation
  if (!form.firstName.trim()) errors.value.firstName = 'First name is required'
  if (!form.lastName.trim()) errors.value.lastName = 'Last name is required'
  if (!form.email.trim()) errors.value.email = 'Email is required'
  if (!form.phone.trim()) errors.value.phone = 'Phone number is required'
  if (!form.position) errors.value.position = 'Position is required'
  if (!form.experience) errors.value.experience = 'Experience is required'
  if (form.skills.length === 0) errors.value.skills = 'Please select at least one skill'
  if (!form.resume) errors.value.resume = 'Resume is required'
  if (!form.coverLetter.trim()) errors.value.coverLetter = 'Cover letter is required'
  if (!form.availability) errors.value.availability = 'Availability is required'
  if (!form.workPreference) errors.value.workPreference = 'Work preference is required'
  if (!form.agreedToTerms) errors.value.agreedToTerms = 'You must agree to terms and conditions'
  
  // Email validation
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  
  // Phone validation
  if (form.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(form.phone.replace(/\s/g, ''))) {
    errors.value.phone = 'Please enter a valid phone number'
  }
  
  // Cover letter length validation
  if (form.coverLetter && form.coverLetter.length > 500) {
    errors.value.coverLetter = 'Cover letter should be less than 500 characters'
  }
  
  return Object.keys(errors.value).length === 0
}

const uploadResume = async (file) => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `resumes/${fileName}`
    
    // Create a reference to the file location
    const fileRef = storageRef(storage, filePath)
    
    // Upload the file
    const snapshot = await uploadBytes(fileRef, file)
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    return {
      path: filePath,
      url: downloadURL
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

const handleSubmit = async () => {
  if (!validateForm()) {
    submitMessage.value = 'Please fix the errors above'
    submitSuccess.value = false
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Upload resume to Firebase Storage
    let resumeData = null
    if (form.resume) {
      resumeData = await uploadResume(form.resume)
    }

    // Prepare data for Firestore
    const applicationData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      position: form.position,
      experience: form.experience,
      skills: form.skills,
      portfolio: form.portfolio || null,
      resumePath: resumeData?.path || null,
      resumeURL: resumeData?.url || null,
      coverLetter: form.coverLetter,
      availability: form.availability,
      workPreference: form.workPreference,
      createdAt: serverTimestamp()
    }

    // Add document to Firestore
    const docRef = await addDoc(collection(db, 'job_applications'), applicationData)

    // Success
    submitMessage.value = 'Application submitted successfully! We will get back to you soon.'
    submitSuccess.value = true
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (Array.isArray(form[key])) {
        form[key] = []
      } else if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
    form.resume = null

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })

  } catch (error) {
    console.error('Error submitting application:', error)
    submitMessage.value = 'Error submitting application. Please try again.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Form Animation */
.form-group {
  opacity: 0;
  animation: slideInUp 0.6s ease-out forwards;
}

.form-group:nth-child(1) { animation-delay: 0.1s; }
.form-group:nth-child(2) { animation-delay: 0.2s; }
.form-group:nth-child(3) { animation-delay: 0.3s; }
.form-group:nth-child(4) { animation-delay: 0.4s; }
.form-group:nth-child(5) { animation-delay: 0.5s; }

/* Enhanced Input Styles */
input:focus, select:focus, textarea:focus {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Checkbox and Radio Styles */
input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

/* File Upload Hover Effect */
.border-dashed:hover {
  background-color: rgba(59, 130, 246, 0.05);
}

/* Animation Keyframes */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.animate-slideInUp {
  animation: slideInUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slideInDown {
  animation: slideInDown 0.6s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

/* Responsive Design */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
