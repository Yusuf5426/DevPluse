<template>
  <footer class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-300 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 mt-10 sm:mt-16 lg:mt-20 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5 sm:opacity-10">
      <div class="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-500/20 rounded-full blur-xl sm:blur-2xl lg:blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/20 rounded-full blur-xl sm:blur-2xl lg:blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
        
        <!-- Brand Section -->
        <div class="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start mb-4 sm:mb-6">
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
              <i class="fas fa-code text-white text-sm sm:text-xl"></i>
            </div>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Dev<span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Pulse</span>
            </h2>
          </div>
          <p class="text-xs sm:text-sm leading-relaxed text-gray-400 mb-4 sm:mb-6 max-w-sm mx-auto sm:mx-0">
            Your all-in-one platform for modern web solutions. Building the future, one line of code at a time.
          </p>
        </div>

        <!-- Quick Links - Horizontal Scroll on Mobile -->
        <div class="text-center sm:text-left">
          <h3 class="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
            <i class="fas fa-link text-blue-400 mr-2 text-sm sm:text-base"></i>
            Quick Links
          </h3>
          <div class="sm:hidden overflow-x-auto pb-2 scrollbar-hide">
            <div class="space-x-4 min-w-max">
              <a href="#" class="text-sm hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block whitespace-nowrap">
                <i class="fas fa-home w-3 mr-2"></i>Home
              </a>
              <a href="#features" class="text-sm hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block whitespace-nowrap">
                <i class="fas fa-star w-3 mr-2"></i>Features
              </a>
              <a href="#about" class="text-sm hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block whitespace-nowrap">
                <i class="fas fa-info-circle w-3 mr-2"></i>About
              </a>
              <a href="#contact" class="text-sm hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block whitespace-nowrap">
                <i class="fas fa-envelope w-3 mr-2"></i>Contact
              </a>
            </div>
          </div>
          <ul class="hidden sm:block space-y-2 sm:space-y-3">
            <li><a href="#" class="text-sm sm:text-base hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-home w-3 sm:w-4 mr-2"></i>Home
            </a></li>
            <li><a href="#features" class="text-sm sm:text-base hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-star w-3 sm:w-4 mr-2"></i>Features
            </a></li>
            <li><a href="#about" class="text-sm sm:text-base hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-info-circle w-3 sm:w-4 mr-2"></i>About
            </a></li>
            <li><a href="#contact" class="text-sm sm:text-base hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-envelope w-3 sm:w-4 mr-2"></i>Contact
            </a></li>
            <li class="hidden sm:block"><a href="#pricing" class="text-sm sm:text-base hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-tag w-3 sm:w-4 mr-2"></i>Pricing
            </a></li>
          </ul>
        </div>

        <!-- Services - Horizontal Scroll on Mobile -->
        <div class="text-center sm:text-left">
          <h3 class="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
            <i class="fas fa-cogs text-purple-400 mr-2 text-sm sm:text-base"></i>
            Services
          </h3>
          <div class="sm:hidden overflow-x-auto pb-2 scrollbar-hide">
            <div class="space-x-4 min-w-max">
              <a href="#" class="text-sm hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block whitespace-nowrap">
                <i class="fas fa-laptop-code w-3 mr-2"></i>Web Dev
              </a>
              <a href="#" class="text-sm hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block whitespace-nowrap">
                <i class="fas fa-mobile-alt w-3 mr-2"></i>Mobile Apps
              </a>
              <a href="#" class="text-sm hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block whitespace-nowrap">
                <i class="fas fa-cloud w-3 mr-2"></i>Cloud
              </a>
            </div>
          </div>
          <ul class="hidden sm:block space-y-2 sm:space-y-3">
            <li><a href="#" class="text-sm sm:text-base hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-laptop-code w-3 sm:w-4 mr-2"></i>Web Development
            </a></li>
            <li><a href="#" class="text-sm sm:text-base hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-mobile-alt w-3 sm:w-4 mr-2"></i>Mobile Apps
            </a></li>
            <li><a href="#" class="text-sm sm:text-base hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-cloud w-3 sm:w-4 mr-2"></i>Cloud Solutions
            </a></li>
            <li class="hidden sm:block"><a href="#" class="text-sm sm:text-base hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-robot w-3 sm:w-4 mr-2"></i>AI Integration
            </a></li>
            <li class="hidden lg:block"><a href="#" class="text-sm sm:text-base hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block">
              <i class="fas fa-shield-alt w-3 sm:w-4 mr-2"></i>Security
            </a></li>
          </ul>
        </div>

        <!-- Newsletter & Contact -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h3 class="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
            <i class="fas fa-bell text-green-400 mr-2 text-sm sm:text-base"></i>
            Stay Connected
          </h3>
          <p class="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 text-center sm:text-left">
            Get updates & exclusive offers.
          </p>
          
          <!-- Newsletter Form -->
          <form @submit.prevent="handleSubscribe" class="mb-6 sm:mb-8">
            <div class="flex flex-col gap-3">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                :disabled="isSubscribing"
                class="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 text-sm sm:text-base"
              >
                <i class="fas fa-paper-plane text-xs sm:text-sm"></i>
                {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
              </button>
            </div>
          </form>

          <!-- Contact Info - Condensed for mobile -->
          <div class="space-y-2 sm:space-y-3 text-center sm:text-left">
            <div class="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-gray-400">
              <i class="fas fa-envelope text-blue-400 w-4 sm:w-5 mr-2 sm:mr-3"></i>
              <a href="mailto:technicalyusuf.yt@gmail.com" class="hover:text-blue-400 transition-colors ">
                technicalyusuf.yt@gmail.com
              </a>
            </div>
            <div class="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-gray-400">
              <i class="fas fa-map-marker-alt text-red-400 w-4 sm:w-5 mr-2 sm:mr-3"></i>
              <span>Lucknow, Kanpur, Mankapur, India</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section - Responsive layout -->
      <!-- <div class="border-t border-gray-700/50 pt-1 sm:pt-10 lg:pt-12 mb-8 sm:mb-10 lg:mb-12">
        <h3 class="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 text-center">
          <i class="fas fa-users text-blue-400 mr-2"></i>
          Meet Our Team
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> -->
          <!-- Team Members -->
          <!-- <div v-for="member in teamMembers" :key="member.name" class="text-center group">
            <div class="relative mb-3 sm:mb-4 inline-block">
              <div class="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold text-white mx-auto transform transition-transform duration-300 group-hover:scale-110">
                {{ member.initials }}
              </div>
              <div class="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-green-400 rounded-full border-2 border-gray-900"></div>
            </div>
            <h4 class="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{{ member.name }}</h4>
            <p class="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{{ member.role }}</p> -->
            
            <!-- Social Links -->
            <!-- <div class="flex justify-center gap-2 sm:gap-3">
              <a :href="member.github" target="_blank" 
                 class="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300 group-hover:text-blue-400"
                 :aria-label="`${member.name} GitHub`">
                <i class="fab fa-github text-xs sm:text-sm"></i>
              </a>
              <a :href="member.linkedin" target="_blank"
                 class="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group-hover:text-blue-400"
                 :aria-label="`${member.name} LinkedIn`">
                <i class="fab fa-linkedin text-xs sm:text-sm"></i>
              </a>
              <a :href="member.instagram" target="_blank"
                 class="w-7 sm:w-8 h-7 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 group-hover:text-pink-400"
                 :aria-label="`${member.name} Instagram`">
                <i class="fab fa-instagram text-xs sm:text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Bottom Section -->
      <div class="border-t border-gray-700/50 pt-6 sm:pt-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <!-- Copyright -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <p class="text-xs sm:text-sm text-gray-500">
              © {{ currentYear }} DevPulse. All rights reserved.
            </p>
            <p class="text-xs sm:text-sm text-blue-400 mt-1">
              Made with ❤️ in India
            </p>
          </div>

          <!-- Legal Links - Responsive wrapping -->
          <div class="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm order-1 lg:order-2">
            <a href="/privacypolicy" class="text-gray-400 hover:text-blue-400 transition-colors whitespace-nowrap">Privacy</a>
            <a href="/termsconditions" class="text-gray-400 hover:text-blue-400 transition-colors whitespace-nowrap">Terms</a>
            </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button - Responsive positioning -->
    <button 
      @click="scrollToTop"
      v-show="showBackToTop"
      class="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 text-sm sm:text-base"
      aria-label="Back to top"
    >
      <i class="fas fa-chevron-up"></i>
    </button>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Reactive data
const email = ref('')
const isSubscribing = ref(false)
const showBackToTop = ref(false)

// Computed properties
const currentYear = computed(() => new Date().getFullYear())

// Team members data
const teamMembers = ref([
  {
    name: 'Yusuf Khan',
    role: 'Full Stack Developer',
    initials: 'YK',
    github: 'https://github.com/yusufkhan',
    linkedin: 'https://linkedin.com/in/yusufkhan',
    instagram: 'https://instagram.com/yusufkhan'
  },
  {
    name: 'Sandeep Verma',
    role: 'UI/UX Designer',
    initials: 'SV',
    github: 'https://github.com/sandeepverma',
    linkedin: 'https://linkedin.com/in/sandeepverma',
    instagram: 'https://instagram.com/sandeepverma'
  },
  {
    name: 'Devesh',
    role: 'Backend Developer',
    initials: 'DV',
    github: 'https://github.com/devesh',
    linkedin: 'https://linkedin.com/in/devesh',
    instagram: 'https://instagram.com/devesh'
  }
])

// Methods
const handleSubscribe = async () => {
  if (!email.value) return
  
  isSubscribing.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    console.log('Subscribed successfully!')
    email.value = ''
    
    // You can add toast notification here
    showToast('Successfully subscribed to newsletter!')
  } catch (error) {
    console.error('Subscription failed:', error)
    showToast('Subscription failed. Please try again.', 'error')
  } finally {
    isSubscribing.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const showToast = (message, type = 'success') => {
  // Implement toast notification
  console.log(`${type}: ${message}`)
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  console.log('Responsive footer component mounted')
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Enhanced responsive styles */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Hide scrollbar for horizontal scroll containers */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}

/* Mobile-first animations */
@media (min-width: 640px) {
  .group:hover .transform {
    transform: scale(1.05);
  }
}

/* Touch-friendly hover states for mobile */
@media (hover: none) and (pointer: coarse) {
  .hover\:scale-105:hover {
    transform: none;
  }
  
  .hover\:translate-x-1:hover {
    transform: none;
  }
}

/* Focus styles for accessibility */
button:focus,
input:focus,
a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Improved readability on small screens */
@media (max-width: 639px) {
  .text-gradient {
    -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.3);
  }
}

/* Loading animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced mobile scrolling */
@supports (-webkit-overflow-scrolling: touch) {
  .overflow-scroll {
    -webkit-overflow-scrolling: touch;
  }
}
</style>