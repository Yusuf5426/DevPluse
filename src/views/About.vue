<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            About <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevPulse</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 leading-relaxed animate-slide-up">
            Empowering businesses with cutting-edge digital solutions. From stunning websites to powerful mobile apps, 
            we transform your vision into reality.
          </p>
        </div>
      </div>

      <!-- Animated Background Elements -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 bg-white/50 backdrop-blur-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We <span class="text-blue-600">Build</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Full-spectrum development services tailored to your business needs
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i :class="service.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/privacypolicy"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Check Our Pricing</span>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span class="text-purple-600">Team</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            The brilliant minds behind DevPulse's success
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div 
            v-for="(member, index) in teamMembers" 
            :key="index"
            class="group relative"
          >
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div class="bg-white rounded-2xl p-8 h-full transform transition-all duration-300 group-hover:scale-[0.98]">
                <!-- Profile Image Placeholder -->
                <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  {{ member.initials }}
                </div>
                
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
                  <p class="text-blue-600 font-semibold mb-4">{{ member.role }}</p>
                  <p class="text-gray-600 leading-relaxed mb-6">{{ member.expertise }}</p>
                  
                  <!-- Social Links -->
                  <div class="flex justify-center gap-4">
                    <a 
                      v-for="social in member.socials" 
                      :key="social.platform"
                      :href="social.link"
                      class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i :class="social.icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Stats -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="text-white"
          >
            <div class="text-4xl sm:text-5xl font-bold mb-2">{{ stat.number }}</div>
            <div class="text-blue-100 text-sm sm:text-base">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p class="text-gray-600 text-lg mb-8">
            Let's bring your ideas to life with our expert team
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <i class="fas fa-envelope"></i>
              <span>Get In Touch</span>
            </router-link>
            <router-link 
              to="/privacypolicy"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <i class="fas fa-tag"></i>
              <span>View Pricing</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.'
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Game Development',
    description: 'Engaging and interactive games with stunning graphics and smooth gameplay mechanics.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Websites',
    description: 'Responsive and modern websites that deliver exceptional performance and user engagement.'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Landing Pages',
    description: 'High-converting landing pages optimized for lead generation and brand visibility.'
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-commerce',
    description: 'Complete e-commerce solutions with secure payment integration and inventory management.'
  },
  {
    icon: 'fas fa-code',
    title: 'Custom Development',
    description: 'Tailored software solutions built specifically for your unique business requirements.'
  }
])

const teamMembers = ref([
  {
    name: 'Yusuf Khan',
    role: 'Founder',
    initials: 'YK',
    expertise: 'Full Stack Developer & Backend Expert. Specializes in building scalable applications and robust server architectures.',
    socials: [
      { platform: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' },
      { platform: 'github', icon: 'fab fa-github', link: '#' },
      { platform: 'twitter', icon: 'fab fa-twitter', link: '#' }
    ]
  },
  {
    name: 'Devesh',
    role: 'Co-Founder',
    initials: 'DV',
    expertise: 'UI/UX Designer. Creates beautiful, intuitive interfaces that users love with pixel-perfect designs.',
    socials: [
      { platform: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' },
      { platform: 'dribbble', icon: 'fab fa-dribbble', link: '#' },
      { platform: 'behance', icon: 'fab fa-behance', link: '#' }
    ]
  },
  {
    name: 'Sandeep Verma',
    role: 'Founder',
    initials: 'SV',
    expertise: 'WordPress & Tailwind CSS Expert. Builds lightning-fast, SEO-optimized websites with modern styling.',
    socials: [
      { platform: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' },
      { platform: 'github', icon: 'fab fa-github', link: '#' },
      { platform: 'wordpress', icon: 'fab fa-wordpress', link: '#' }
    ]
  }
])

const stats = ref([
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '3', label: 'Team Members' },
  { number: '24/7', label: 'Support Available' }
])
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.2s backwards;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>