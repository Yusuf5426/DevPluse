<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p class="text-lg sm:text-xl text-gray-600">
            Choose the perfect plan for your project. No hidden fees, no surprises.
          </p>
        </div>

        <!-- Pricing Toggle -->
        <div class="flex justify-center items-center gap-4 mb-12">
          <span :class="['font-semibold transition-colors', !isAnnual ? 'text-blue-600' : 'text-gray-500']">
            One-Time Payment
          </span>
          <button
            @click="isAnnual = !isAnnual"
            :class="[
              'relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              isAnnual ? 'bg-blue-600' : 'bg-gray-300'
            ]"
          >
            <span
              :class="[
                'inline-block h-6 w-6 transform rounded-full bg-white transition-transform',
                isAnnual ? 'translate-x-9' : 'translate-x-1'
              ]"
            />
          </button>
          <span :class="['font-semibold transition-colors', isAnnual ? 'text-blue-600' : 'text-gray-500']">
            Maintenance Plans
            <span class="ml-2 inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
              Save 20%
            </span>
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pb-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div 
            v-for="(plan, index) in pricingPlans" 
            :key="index"
            :class="[
              'relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105',
              plan.popular ? 'ring-2 ring-blue-600 lg:scale-105' : ''
            ]"
          >
            <!-- Popular Badge -->
            <div 
              v-if="plan.popular"
              class="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl"
            >
              MOST POPULAR
            </div>

            <div class="p-8">
              <!-- Icon -->
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i :class="plan.icon" class="text-white text-2xl"></i>
              </div>

              <!-- Plan Name -->
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
              <p class="text-gray-600 mb-6">{{ plan.description }}</p>

              <!-- Price -->
              <div class="mb-8">
                <div class="flex items-baseline gap-2">
                  <span class="text-4xl font-bold text-gray-900">
                    ₹{{ isAnnual ? plan.yearlyPrice : plan.price }}
                  </span>
                  <span class="text-gray-500">
                    {{ isAnnual ? '/month' : '' }}
                  </span>
                </div>
                <p v-if="!isAnnual" class="text-sm text-gray-500 mt-2">{{ plan.priceNote }}</p>
                <p v-else class="text-sm text-green-600 mt-2">
                  Billed ₹{{ plan.yearlyPrice * 12 }}/year + Free Updates
                </p>
              </div>

              <!-- Features -->
              <ul class="space-y-4 mb-8">
                <li 
                  v-for="(feature, idx) in plan.features" 
                  :key="idx"
                  class="flex items-start gap-3"
                >
                  <i 
                    :class="[
                      'fas fa-check-circle text-lg flex-shrink-0 mt-0.5',
                      feature.included ? 'text-green-500' : 'text-gray-300'
                    ]"
                  ></i>
                  <span :class="feature.included ? 'text-gray-700' : 'text-gray-400'">
                    {{ feature.text }}
                  </span>
                </li>
              </ul>

              <!-- CTA Button -->
              <router-link
                to="/contact"
                :class="[
                  'block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105',
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                ]"
              >
                Get Started
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-16 bg-white/50 backdrop-blur-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Additional <span class="text-blue-600">Services</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Need something specific? We offer custom solutions tailored to your needs
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div 
            v-for="(service, index) in additionalServices" 
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <i :class="service.icon" class="text-white text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ service.name }}</h3>
            <p class="text-2xl font-bold text-blue-600 mb-2">{{ service.price }}</p>
            <p class="text-sm text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span class="text-purple-600">Questions</span>
          </h2>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <i 
                :class="[
                  'fas fa-chevron-down transition-transform duration-300',
                  activeFaq === index ? 'rotate-180' : ''
                ]"
              ></i>
            </button>
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-show="activeFaq === index" class="px-6 pb-5">
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl text-white">
          <h2 class="text-3xl sm:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p class="text-lg mb-8 text-blue-100">
            Our team is here to help you choose the right plan for your project
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <i class="fas fa-phone"></i>
              <span>Contact Us</span>
            </router-link>
            <a 
              href="https://wa.me/91"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <i class="fab fa-whatsapp"></i>
              <span>WhatsApp Us[Not Available]</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isAnnual = ref(false)
const activeFaq = ref(null)

const pricingPlans = ref([
  {
    name: 'Basic App',
    description: 'Perfect for simple mobile applications',
    icon: 'fas fa-mobile-alt',
    price: '15,000',
    yearlyPrice: '1,500',
    priceNote: 'One-time development cost',
    popular: false,
    features: [
      { text: '5-7 App Screens', included: true },
      { text: 'Android APK', included: true },
      { text: 'Basic UI/UX Design', included: true },
      { text: 'Firebase Integration', included: true },
      { text: 'Source Code Provided', included: true },
      { text: 'Play Store Upload', included: false },
      { text: 'iOS App', included: false },
      { text: '3 Months Free Support', included: false }
    ]
  },
  {
    name: 'Professional',
    description: 'Best for complete business solutions',
    icon: 'fas fa-rocket',
    price: '35,000',
    yearlyPrice: '3,500',
    priceNote: 'One-time development cost',
    popular: true,
    features: [
      { text: '10-15 App Screens', included: true },
      { text: 'Android + iOS Apps', included: true },
      { text: 'Premium UI/UX Design', included: true },
      { text: 'Backend API Integration', included: true },
      { text: 'Admin Panel Dashboard', included: true },
      { text: 'Play Store + App Store Upload', included: true },
      { text: 'Source Code Provided', included: true },
      { text: '6 Months Free Support', included: true }
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications',
    icon: 'fas fa-building',
    price: '75,000',
    yearlyPrice: '7,500',
    priceNote: 'Starting from',
    popular: false,
    features: [
      { text: 'Unlimited Screens', included: true },
      { text: 'Android + iOS + Web', included: true },
      { text: 'Custom UI/UX Design', included: true },
      { text: 'Advanced Backend System', included: true },
      { text: 'Payment Gateway Integration', included: true },
      { text: 'Push Notifications', included: true },
      { text: 'Analytics Dashboard', included: true },
      { text: '1 Year Free Support + Updates', included: true }
    ]
  }
])

const additionalServices = ref([
  {
    name: 'Landing Page',
    price: '₹5,000',
    icon: 'fas fa-file-alt',
    description: 'Single page with CTA'
  },
  {
    name: 'E-commerce Website',
    price: '₹25,000+',
    icon: 'fas fa-shopping-cart',
    description: 'Full online store setup'
  },
  {
    name: 'Game Development',
    price: '₹20,000+',
    icon: 'fas fa-gamepad',
    description: '2D/3D mobile games'
  },
  {
    name: 'WordPress Site',
    price: '₹8,000',
    icon: 'fab fa-wordpress',
    description: 'Custom theme + plugins'
  }
])
const faqs = ref([
  {
    question: 'Is it necessary to take a maintenance plan?',
    answer: 'No, the maintenance plan is optional. If you want regular updates, bug fixes, and priority support, then you should take this plan. The one-time payment only covers development costs.'
  },
  {
    question: 'Will I get the source code?',
    answer: 'Yes, complete source code is provided in all plans. You can host the code on your own server and modify it in the future.'
  },
  {
    question: 'How long will development take?',
    answer: 'Basic App: 2-3 weeks, Professional: 4-6 weeks, Enterprise: 8-12 weeks. The timeline depends on project complexity.'
  },
  {
    question: 'What is the payment process?',
    answer: '50% advance payment at the start of the project and 50% at the time of final delivery. We accept UPI, Bank Transfer, and PayPal.'
  },
  {
    question: 'What is included in free support?',
    answer: 'Bug fixes, minor updates, technical assistance, and app store related help. Major feature additions and design changes will be charged separately.'
  },
  {
    question: 'Will I get help with Play Store/App Store upload?',
    answer: 'In Professional and Enterprise plans, we provide complete assistance with the upload process, including app optimization and store listing.'
  }
])

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}
</style>