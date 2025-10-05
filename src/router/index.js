import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Join from '@/views/Join.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsConditions from '@/views/TermsConditions.vue'
import About from '@/views/About.vue'
import Pricing from '@/views/Pricing.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/privacypolicy',
    name: 'Privacypolicy',
    component: PrivacyPolicy
  },
  {
    path: '/termsconditions',
    name: 'Termsconditions',
    component: TermsConditions
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing 
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Error handling
router.onError((error) => {
  console.error('Router Error:', error)
})

export default router
