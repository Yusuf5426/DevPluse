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
          <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div class="text-xl sm:text-2xl lg:text-3xl font-bold">
          <span class="text-gray-800 transition-colors duration-300 group-hover:text-blue-600">Dev</span>
          <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Pulse</span>
        </div>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex items-center gap-2">
        <li v-for="item in menuItems" :key="item.name">
          <router-link 
            :to="item.path"
            :class="[
              'relative px-4 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 transform hover:scale-105',
              'hover:text-blue-600 hover:bg-blue-50 active:scale-95',
              $route.path === item.path ? 'text-blue-600 bg-blue-50' : ''
            ]"
          >
            {{ item.name }}
            <span 
              class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              :class="$route.path === item.path ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </router-link>
        </li>
      </ul>

      <!-- Hamburger Button -->
      <button
        class="lg:hidden relative w-12 h-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:bg-gray-100 active:scale-95 flex items-center justify-center z-[60]"
        @click="toggleMenu"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        type="button"
      >
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
  </header>

  <!-- Mobile Menu - Header के बाहर -->
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      v-if="isOpen"
      class="lg:hidden fixed top-[72px] left-0 w-full bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-200/50 z-[55] max-h-[calc(100vh-72px)] overflow-y-auto"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 pointer-events-none"></div>
      
      <div class="relative z-10 px-4 sm:px-6 py-6">
        <!-- Mobile Navigation Links -->
        <ul class="space-y-2">
          <li 
            v-for="(item, index) in menuItems" 
            :key="item.name"
            :style="{ animationDelay: `${index * 50}ms` }"
            class="animate-fade-in"
          >
            <router-link 
              :to="item.path"
              :class="[
                'flex items-center gap-3 px-4 py-4 rounded-xl font-medium text-gray-700 transition-all duration-300',
                'hover:text-blue-600 hover:bg-white/80 hover:shadow-md active:scale-[0.98]',
                $route.path === item.path ? 'text-blue-600 bg-white/80 shadow-md' : ''
              ]"
              @click="handleMobileItemClick"
            >
              <i :class="item.icon" class="text-lg w-5 flex-shrink-0"></i>
              <span class="flex-1">{{ item.name }}</span>
              <i class="fas fa-chevron-right text-xs opacity-50"></i>
            </router-link>
          </li>
        </ul>

        <!-- Mobile Contact Info -->
        <div class="mt-6 pt-6 border-t border-gray-200/50">
          <div class="flex items-center justify-center gap-4 text-sm text-gray-500 flex-wrap">
            <a 
              href="tel:+" 
              class="flex items-center gap-2 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
              @click="closeMenu"
            >
              <i class="fas fa-phone"></i>
              <span class="hidden sm:inline">Call Us[Not Available]</span>
            </a>
            <a 
              href="mailto:technicalyusuf.pc@gmail.com" 
              class="flex items-center gap-2 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
              @click="closeMenu"
            >
              <i class="fas fa-envelope"></i>
              <span class="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <!-- Backdrop Overlay -->
  <transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-200"
  >
    <div
      v-if="isOpen"
      class="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
      @click="closeMenu"
    ></div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const scrolled = ref(false)
const scrollY = ref(0)

const menuItems = ref([
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'Features', path: '/features', icon: 'fas fa-star' },
  { name: 'About', path: '/about', icon: 'fas fa-info-circle' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' },
  { name: 'Pricing', path: '/pricing', icon: 'fas fa-tag' }
])

const scrollProgress = computed(() => {
  const winScroll = scrollY.value
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  return height > 0 ? Math.min((winScroll / height) * 100, 100) : 0
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  updateBodyScroll()
}

const closeMenu = () => {
  isOpen.value = false
  updateBodyScroll()
}

const updateBodyScroll = () => {
  if (isOpen.value) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}

const handleMobileItemClick = () => {
  setTimeout(() => {
    closeMenu()
  }, 150)
}

const goHome = () => {
  router.push('/')
  closeMenu()
}

const handleScroll = () => {
  scrollY.value = window.scrollY
  scrolled.value = window.scrollY > 50
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleEscape)
  
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && isOpen.value) {
      closeMenu()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
  opacity: 0;
}
</style>