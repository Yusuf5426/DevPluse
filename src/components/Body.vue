<template>
    <main class="pt-10 overflow-hidden">
        <!-- Hero Section with Enhanced Animations -->
        <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <!-- FIXED: Enhanced Animated Background - WITH POINTER-EVENTS-NONE -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <!-- Enhanced Gradient Orbs -->
                <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-morph-1 pointer-events-none"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-morph-2 pointer-events-none"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse-slow pointer-events-none"></div>
                
                <!-- Grid Background -->
                <div class="absolute inset-0 bg-grid opacity-5 animate-grid-move pointer-events-none"></div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                <div class="max-w-4xl mx-auto">
                    <!-- Enhanced Badge -->
                    <div class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-slideInDown animate-shimmer border border-blue-200/50 backdrop-blur-sm">
                        <i class="fas fa-rocket text-xs animate-bounce-gentle"></i>
                        <span class="animate-typewriter">Welcome to the Future of Development</span>
                        <i class="fas fa-sparkles text-xs animate-sparkle"></i>
                    </div>

                    <!-- Enhanced Main Heading with Glitch Effect -->
                    <div class="relative mb-6">
                        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 animate-slideInUp glitch-container">
                            <span class="glitch-text" data-text="Build Amazing">Build Amazing</span>
                            <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-x glitch-text" data-text="Digital Experiences">
                                Digital Experiences
                            </span>
                        </h1>
                        <!-- Animated underline -->
                        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-expand pointer-events-none"></div>
                    </div>

                    <!-- Enhanced Description -->
                    <div class="relative mb-8">
                        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slideInUp animation-delay-200">
                            <span class="typing-text">From AI-powered applications to stunning mobile apps, we create cutting-edge solutions that transform your ideas into reality.</span>
                        </p>
                    </div>

                    <!-- ✅ FIXED: Enhanced CTA Buttons - MOBILE CLICK WORKING -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slideInUp animation-delay-400 relative z-50">
                        <router-link 
                            to="/join"
                            class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl active:scale-95 overflow-hidden animate-button-glow inline-flex items-center gap-3 z-50 cursor-pointer"
                            style="touch-action: manipulation; -webkit-tap-highlight-color: rgba(0,0,0,0); user-select: none;"
                        >
                            <!-- Liquid Background Effect -->
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-liquid pointer-events-none"></div>
                            
                            <!-- Button Content -->
                            <span class="relative flex items-center gap-3 z-10">
                                <i class="fas fa-play animate-spin-slow group-hover:animate-bounce"></i>
                                <span class="animate-text-wave">Join Our Team Free</span>
                                <i class="fas fa-arrow-right transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"></i>
                            </span>
                            
                            <!-- Shimmer Effect -->
                            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        </router-link>
                    </div>

                    <!-- Enhanced Stats with Counter Animation -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-slideInUp animation-delay-600">
                        <div class="text-center group cursor-pointer">
                            <div class="relative mb-2">
                                <div class="text-2xl sm:text-3xl font-bold text-gray-900 counter" data-target="100">0</div>
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl sm:text-3xl font-bold counter" data-target="100">0</div>
                                <span class="text-xl">+</span>
                            </div>
                            <div class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Projects Delivered</div>
                            <div class="w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
                        </div>
                        
                        <div class="text-center group cursor-pointer">
                            <div class="relative mb-2">
                                <div class="text-2xl sm:text-3xl font-bold text-gray-900 counter" data-target="50">0</div>
                                <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl sm:text-3xl font-bold counter" data-target="50">0</div>
                                <span class="text-xl">+</span>
                            </div>
                            <div class="text-sm text-gray-600 group-hover:text-green-600 transition-colors">Happy Clients</div>
                            <div class="w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
                        </div>
                        
                        <div class="text-center group cursor-pointer">
                            <div class="relative mb-2">
                                <div class="text-2xl sm:text-3xl font-bold text-gray-900 counter" data-target="99">0</div>
                                <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl sm:text-3xl font-bold counter" data-target="99">0</div>
                                <span class="text-xl">%</span>
                            </div>
                            <div class="text-sm text-gray-600 group-hover:text-purple-600 transition-colors">Satisfaction Rate</div>
                            <div class="w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
                        </div>
                        
                        <div class="text-center group cursor-pointer">
                            <div class="relative mb-2">
                                <div class="text-2xl sm:text-3xl font-bold text-gray-900">24</div>
                                <div class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl sm:text-3xl font-bold">24</div>
                                <span class="text-xl">/7</span>
                            </div>
                            <div class="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">Support</div>
                            <div class="w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Enhanced Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow pointer-events-none">
                <div class="relative">
                    <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-pulse-ring">
                        <div class="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full animate-scroll-dot mt-2"></div>
                    </div>
                    <div class="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 animate-fade-in-out">Scroll</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="features" class="py-20 bg-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-5 pointer-events-none">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 animate-gradient-shift pointer-events-none"></div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        <span class="inline-block">Our</span>
                        <span class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expertise</span>
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Specialized in cutting-edge technologies that power tomorrow's digital world
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- AI Voice Assistants Card -->
                    <div class="group relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500">
                                <i class="fas fa-robot text-white text-2xl"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                AI Voice Assistants
                            </h3>
                            
                            <p class="text-gray-600 mb-6">
                                Advanced AI-powered voice assistants with natural language processing, memory systems, and real-time data integration.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>Speech Recognition & TTS</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>Memory & Learning Systems</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>API Integration</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Mobile Apps Card -->
                    <div class="group relative p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500">
                                <i class="fas fa-mobile-alt text-white text-2xl"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                                Mobile Apps
                            </h3>
                            
                            <p class="text-gray-600 mb-6">
                                Cross-platform mobile applications using React Native and Flutter with Firebase backend integration.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>React Native & Flutter</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>Firebase Integration</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>Real-time Features</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Web Applications Card -->
                    <div class="group relative p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500">
                                <i class="fas fa-code text-white text-2xl"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                                Web Applications
                            </h3>
                            
                            <p class="text-gray-600 mb-6">
                                Modern web applications with Vue.js, React, and Node.js featuring responsive design and optimal performance.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>Vue.js & React</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>Tailwind CSS</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <i class="fas fa-check text-green-500"></i>
                                    <span>Responsive Design</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                
                const countersInView = entry.target.querySelectorAll('.counter');
                countersInView.forEach(counter => {
                    if (counter.getAttribute('data-target')) {
                        animateCounter(counter);
                    }
                });
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
</script>

<style scoped>
.bg-grid {
    background-image: 
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
}

@keyframes morph-1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(50px, 50px) scale(1.2); }
}

@keyframes morph-2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-50px, -50px) scale(1.1); }
}

@keyframes pulse-slow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes grid-move {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

@keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes gradient-shift {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(20px); }
}

@keyframes expand {
    0% { width: 0; opacity: 0; }
    100% { width: 128px; opacity: 1; }
}

@keyframes slideInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
    50% { opacity: 0.5; transform: scale(1.2) rotate(180deg); }
}

@keyframes button-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.7); }
}

@keyframes liquid {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

@keyframes text-wave {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

@keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes pulse-ring {
    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
    100% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
}

@keyframes scroll-dot {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(20px); }
}

@keyframes fade-in-out {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

@keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.animate-morph-1 { animation: morph-1 20s ease-in-out infinite; }
.animate-morph-2 { animation: morph-2 25s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-grid-move { animation: grid-move 20s linear infinite; }
.animate-gradient-x { 
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
}
.animate-gradient-shift { animation: gradient-shift 10s ease-in-out infinite; }
.animate-expand { animation: expand 1s ease-out forwards; animation-delay: 0.5s; }
.animate-slideInDown { animation: slideInDown 1s ease-out; }
.animate-slideInUp { animation: slideInUp 1s ease-out; }
.animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
.animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
.animate-button-glow { animation: button-glow 2s ease-in-out infinite; }
.animate-liquid { animation: liquid 8s ease-in-out infinite; }
.animate-text-wave { animation: text-wave 2s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.animate-pulse-ring { animation: pulse-ring 2s ease-out infinite; }
.animate-scroll-dot { animation: scroll-dot 2s ease-out infinite; }
.animate-fade-in-out { animation: fade-in-out 2s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 3s linear infinite; }

.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }

.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.animate-visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 640px) {
    .animate-morph-1,
    .animate-morph-2 {
        animation-duration: 15s;
    }
    
    .bg-grid {
        background-size: 30px 30px;
    }
}

@media (hover: none) and (pointer: coarse) {
    .hover\\:scale-110:hover {
        transform: scale(1.05);
    }
}
</style>