<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
        : 'bg-white shadow-md'
    ]"
  >
    <!-- Progress Bar -->
    <div 
      class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
      :style="{ width: scrollProgress + '%' }"
    ></div>

    <nav class="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <!-- Logo with Animation -->
      <div 
        class="flex items-center space-x-3 group cursor-pointer"
        @click="goHome"
      >
        <div class="relative">
          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <i class="fas fa-code text-white text-sm sm:text-lg"></i>
          </div>
          <!-- Floating notification dot -->
          <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div class="text-xl sm:text-2xl lg:text-3xl font-bold">
          <span class="text-gray-800 transition-colors duration-300 group-hover:text-blue-600">Dev</span>
          <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Pulse</span>
        </div>
      </div>

      <!-- Desktop Menu with Router Links -->
      <ul class="hidden lg:flex items-center gap-2">
        <li v-for="(item, index) in menuItems" :key="item.name">
          <router-link 
            :to="item.path"
            :class="[
              'relative px-4 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 transform hover:scale-105',
              'hover:text-blue-600 hover:bg-blue-50 active:scale-95',
              $route.name === item.name ? 'text-blue-600 bg-blue-50' : ''
            ]"
            @click="setActiveItem(item.name)"
            @mouseenter="startHoverEffect($event)"
            @mouseleave="endHoverEffect($event)"
          >
            {{ item.name }}
            <!-- Animated underline -->
            <span 
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              :class="$route.name === item.name ? 'w-full' : 'group-hover:w-full'"
            ></span>
            <!-- Hover background effect -->
            <span class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 transition-opacity duration-300"></span>
          </router-link>
        </li>
      </ul>

      <!-- Enhanced Hamburger Menu -->
      <button
        class="lg:hidden relative w-12 h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:bg-gray-100 active:scale-95 flex items-center justify-center touch-manipulation"
        @click="toggleMenu"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        type="button"
      >
        <!-- Hamburger Animation Container -->
        <div class="w-6 h-6 relative flex flex-col justify-center items-center">
          <span
            :class="[
              'block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out absolute',
              isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out absolute',
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out absolute',
              isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            ]"
          ></span>
        </div>
      </button>
    </nav>

    <!-- Enhanced Mobile Menu -->
    <transition
      name="mobile-menu"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/50"
        @click.stop
      >
        <!-- Mobile menu background pattern -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        
        <div class="relative z-10 px-4 sm:px-6 py-6">
          <!-- Mobile Navigation Links -->
          <ul class="space-y-1">
            <li v-for="(item, index) in menuItems" :key="item.name">
              <router-link 
                :to="item.path"
                :class="[
                  'flex items-center gap-3 px-4 py-4 rounded-xl font-medium text-gray-700 transition-all duration-300 transform hover:scale-102',
                  'hover:text-blue-600 hover:bg-white/80 hover:shadow-md active:scale-98 touch-manipulation',
                  $route.name === item.name ? 'text-blue-600 bg-white/80 shadow-md' : ''
                ]"
                @click="handleMobileItemClick(item.name)"
                :style="{ animationDelay: `${index * 50}ms` }"
                class="animate-slideInUp"
              >
                <i :class="item.icon" class="text-lg w-5 flex-shrink-0"></i>
                <span class="flex-1">{{ item.name }}</span>
                <i class="fas fa-chevron-right text-xs opacity-50"></i>
              </router-link>
            </li>
          </ul>

          <!-- Mobile Contact Info -->
          <div class="mt-6 pt-6 border-t border-gray-200/50">
            <div class="flex items-center justify-center gap-8 text-sm text-gray-500">
              <a 
                href="tel:+1234567890" 
                class="flex items-center gap-2 hover:text-blue-600 transition-colors touch-manipulation py-2 px-4 rounded-lg hover:bg-blue-50"
                @click="closeMenu"
              >
                <i class="fas fa-phone"></i>
                <span>Call Us [Not Available]</span>
              </a>
              <a 
                href="mailto:technicalyusuf.pc@gmail.com" 
                class="flex items-center gap-2 hover:text-blue-600 transition-colors touch-manipulation py-2 px-4 rounded-lg hover:bg-blue-50"
                @click="closeMenu"
              >
                <i class="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Mobile Overlay -->
    <transition
      name="overlay"
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
    >
      <div
        v-if="isOpen"
        class="lg:hidden fixed inset-0 z-40"
        @click="closeMenu"
        @touchstart.passive="closeMenu"
      ></div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router' // ✅ Import router

// Router composition
const router = useRouter()
const route = useRoute()

// Reactive state
const isOpen = ref(false)
const scrolled = ref(false)
const scrollY = ref(0)

// Menu items with paths - ✅ Updated with proper paths
const menuItems = ref([
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Features', path: '/features', icon: 'fas fa-star' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }, // ✅ This will work now
  { name: 'Pricing', path: '/privacypolicy', icon: 'fas fa-tag' }
])

// Touch handling for hamburger menu
const touchStartTime = ref(0)
const touchThreshold = 300

// Computed properties
const scrollProgress = computed(() => {
  const winScroll = scrollY.value
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  return Math.min((winScroll / height) * 100, 100)
})

// Methods
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  } else {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
}

const handleTouchStart = (event) => {
  touchStartTime.value = Date.now()
}

const handleTouchEnd = (event) => {
  const touchDuration = Date.now() - touchStartTime.value
  if (touchDuration < touchThreshold) {
    event.preventDefault()
    toggleMenu()
  }
}

const handleMobileItemClick = (itemName) => {
  closeMenu()
  // Navigation will be handled by router-link automatically
}

const setActiveItem = (itemName) => {
  // Active state will be handled by $route.name automatically
}

const goHome = () => {
  router.push('/') // ✅ Programmatic navigation
  closeMenu()
}

const handleScroll = () => {
  scrollY.value = window.scrollY
  scrolled.value = window.scrollY > 50
}

const startHoverEffect = (event) => {
  const span = event.target.querySelector('span:last-child')
  if (span) {
    span.style.opacity = '1'
  }
}

const endHoverEffect = (event) => {
  const span = event.target.querySelector('span:last-child')
  if (span) {
    span.style.opacity = '0'
  }
}

const handleDocumentClick = (event) => {
  const header = event.target.closest('header')
  if (!header && isOpen.value) {
    closeMenu()
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleDocumentClick)
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen.value) {
      closeMenu()
    }
  })

  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      if (isOpen.value) {
        closeMenu()
      }
    }, 100)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleDocumentClick)
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
})
</script>

