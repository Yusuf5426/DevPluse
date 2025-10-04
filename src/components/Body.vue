<template>
    <main class="pt-10 overflow-hidden">
        <!-- Hero Section with Enhanced Animations -->
        <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <!-- Enhanced Animated Background -->
            <div class="absolute inset-0 overflow-hidden">
                <!-- Enhanced Gradient Orbs -->
                <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-morph-1"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-morph-2"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
                
                <!-- Grid Background -->
                <div class="absolute inset-0 bg-grid opacity-5 animate-grid-move"></div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
                        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-expand"></div>
                    </div>

                    <!-- Enhanced Description with Typing Animation -->
                    <div class="relative mb-8">
                        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-slideInUp animation-delay-200">
                            <span class="typing-text">From AI-powered applications to stunning mobile apps, we create cutting-edge solutions that transform your ideas into reality.</span>
                        </p>
                    </div>

                    <!-- Enhanced CTA Buttons with Router Link -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slideInUp animation-delay-400">
                        <router-link 
                            to="/join"
                            class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl active:scale-95 overflow-hidden animate-button-glow inline-flex items-center gap-3"
                        >
                            <!-- Liquid Background Effect -->
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-liquid"></div>
                            
                            <!-- Button Content -->
                            <span class="relative flex items-center gap-3 z-10">
                                <i class="fas fa-play animate-spin-slow group-hover:animate-bounce"></i>
                                <span class="animate-text-wave">Join Our Team Free</span>
                                <i class="fas fa-arrow-right transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"></i>
                            </span>
                            
                            <!-- Shimmer Effect -->
                            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
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
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div class="relative">
                    <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-pulse-ring">
                        <div class="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full animate-scroll-dot mt-2"></div>
                    </div>
                    <div class="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 animate-fade-in-out">Scroll</div>
                </div>
            </div>
        </section>

        <!-- Enhanced Services Section -->
        <section id="features" class="py-20 bg-white relative overflow-hidden">
            <!-- Animated Background Pattern -->
            <div class="absolute inset-0 opacity-5">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 animate-gradient-shift"></div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16 animate-on-scroll">
                    <div class="inline-block mb-4">
                        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-text-reveal">
                            <span class="inline-block animate-slide-in-left">Our</span>
                            <span class="inline-block animate-slide-in-right animation-delay-200 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
                        </h2>
                    </div>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up animation-delay-400">
                        Specialized in cutting-edge technologies that power tomorrow's digital world
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Enhanced Service Cards -->
                    <div class="service-card group relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-on-scroll overflow-hidden">
                        <!-- Card Background Animation -->
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <!-- Floating Icons -->
                        <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                            <i class="fas fa-brain text-4xl text-blue-500 animate-float-gentle"></i>
                        </div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-pulse">
                                <i class="fas fa-robot text-white text-2xl group-hover:animate-bounce"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                AI Voice Assistants
                            </h3>
                            
                            <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                Advanced AI-powered voice assistants with natural language processing, memory systems, and real-time data integration.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.1s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Speech Recognition & TTS</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.2s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Memory & Learning Systems</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.3s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">API Integration</span>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Hover Effect Border -->
                        <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500"></div>
                    </div>

                    <!-- Mobile Development Card -->
                    <div class="service-card group relative p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                            <i class="fas fa-mobile-alt text-4xl text-green-500 animate-float-gentle animation-delay-200"></i>
                        </div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-icon-pulse">
                                <i class="fas fa-mobile-alt text-white text-2xl group-hover:animate-wiggle"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                                Mobile Apps
                            </h3>
                            
                            <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                Cross-platform mobile applications using React Native and Flutter with Firebase backend integration.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.1s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">React Native & Flutter</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.2s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Firebase Integration</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.3s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Real-time Features</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300 transition-all duration-500"></div>
                    </div>

                    <!-- Web Development Card -->
                    <div class="service-card group relative p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                            <i class="fas fa-code text-4xl text-purple-500 animate-float-gentle animation-delay-400"></i>
                        </div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-pulse">
                                <i class="fas fa-code text-white text-2xl group-hover:animate-pulse"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                                Web Applications
                            </h3>
                            
                            <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                Modern web applications with Vue.js, React, and Node.js featuring responsive design and optimal performance.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.1s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Vue.js & React</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.2s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Tailwind CSS</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.3s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Responsive Design</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300 transition-all duration-500"></div>
                    </div>

                    <!-- Python Development Card -->
                    <div class="service-card group relative p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-icon-pulse">
                                <i class="fab fa-python text-white text-2xl group-hover:animate-spin-slow"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                                Python Solutions
                            </h3>
                            
                            <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                Backend systems, API development, and automation scripts using Python with virtual environments.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.1s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">API Development</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.2s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Automation Scripts</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.3s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Data Processing</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-300 transition-all duration-500"></div>
                    </div>

                    <!-- Game Development Card -->
                    <div class="service-card group relative p-8 bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-red-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-pulse">
                                <i class="fas fa-gamepad text-white text-2xl group-hover:animate-wiggle"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                                Game Development
                            </h3>
                            
                            <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                3D games and interactive experiences using Three.js, HTML5, and Godot engine with stunning visuals.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.1s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Three.js & WebGL</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.2s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Godot Engine</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.3s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">3D Graphics</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-300 transition-all duration-500"></div>
                    </div>

                    <!-- Cloud Solutions Card -->
                    <div class="service-card group relative p-8 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 animate-on-scroll overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-teal-100 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-pulse">
                                <i class="fas fa-cloud text-white text-2xl group-hover:animate-float"></i>
                            </div>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                                Cloud Integration
                            </h3>
                            
                            <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                Firebase, Supabase, and cloud-based solutions for scalable applications with real-time capabilities.
                            </p>
                            
                            <ul class="space-y-2 text-sm text-gray-500">
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.1s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Firebase & Supabase</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.2s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Real-time Database</span>
                                </li>
                                <li class="flex items-center gap-2 animate-slide-in-feature" style="animation-delay: 0.3s">
                                    <i class="fas fa-check text-green-500 animate-check-pop"></i>
                                    <span class="group-hover:text-gray-700 transition-colors">Authentication</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-300 transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Enhanced Portfolio Section -->
        <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            <!-- Animated Background -->
            <div class="absolute inset-0">
                <div class="absolute top-0 left-0 w-full h-full bg-grid opacity-5 animate-grid-move-reverse"></div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-text-reveal">
                        <span class="inline-block animate-slide-in-left">Featured</span>
                        <span class="inline-block animate-slide-in-right animation-delay-200 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up animation-delay-400">
                        Real projects that showcase our expertise and innovation
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Enhanced FRIDAY AI Assistant Card -->
                    <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-on-scroll">
                        <!-- 3D Tilt Effect Container -->
                        <div class="project-card-inner">
                            <!-- Animated Header -->
                            <div class="relative h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 flex items-center justify-center overflow-hidden">
                                <!-- Floating Particles in Header -->
                                <div class="absolute inset-0">
                                    <div v-for="i in 8" :key="i" 
                                         :class="`absolute w-2 h-2 bg-white/20 rounded-full animate-float-particles`"
                                         :style="{
                                             top: `${Math.random() * 100}%`,
                                             left: `${Math.random() * 100}%`,
                                             animationDelay: `${i * 0.5}s`
                                         }"></div>
                                </div>
                                
                                <div class="text-center text-white relative z-10">
                                    <div class="relative mb-4">
                                        <i class="fas fa-robot text-6xl mb-4 animate-robot-glow group-hover:animate-robot-dance"></i>
                                        <!-- Robot Eyes -->
                                        <div class="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                            <div class="w-2 h-2 bg-cyan-400 rounded-full animate-blink"></div>
                                            <div class="w-2 h-2 bg-cyan-400 rounded-full animate-blink animation-delay-200"></div>
                                        </div>
                                    </div>
                                    <h3 class="text-2xl font-bold animate-text-glow">FRIDAY AI Assistant</h3>
                                </div>
                            </div>
                            
                            <div class="p-8 relative">
                                <!-- Animated Content -->
                                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    Voice-Powered AI Assistant
                                </h3>
                                
                                <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                    Advanced AI assistant with speech recognition, memory systems, and real-time data integration. Features multiple TTS engines with fallback systems.
                                </p>
                                
                                <!-- Animated Tags -->
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm animate-tag-float hover:animate-tag-bounce transition-all duration-300 cursor-pointer">Python</span>
                                    <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm animate-tag-float animation-delay-100 hover:animate-tag-bounce transition-all duration-300 cursor-pointer">AI/ML</span>
                                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm animate-tag-float animation-delay-200 hover:animate-tag-bounce transition-all duration-300 cursor-pointer">TTS</span>
                                    <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm animate-tag-float animation-delay-300 hover:animate-tag-bounce transition-all duration-300 cursor-pointer">APIs</span>
                                </div>
                                
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-4 text-sm text-gray-500">
                                        <span class="flex items-center gap-1 animate-feature-highlight">
                                            <i class="fas fa-star text-yellow-500 animate-star-twinkle"></i>
                                            Advanced AI
                                        </span>
                                        <span class="flex items-center gap-1 animate-feature-highlight animation-delay-200">
                                            <i class="fas fa-microphone text-blue-500 animate-microphone-pulse"></i>
                                            Voice Control
                                        </span>
                                    </div>
                                    <button class="text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300 flex items-center gap-1">
                                        View Details
                                        <i class="fas fa-arrow-right group-hover:animate-bounce-x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Enhanced Mobile APK Store Card -->
                    <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 animate-on-scroll">
                        <div class="project-card-inner">
                            <div class="relative h-64 bg-gradient-to-br from-green-500 via-teal-600 to-green-700 flex items-center justify-center overflow-hidden">
                                <!-- Mobile Screen Animation -->
                                <div class="absolute inset-0">
                                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-48 border-4 border-white/20 rounded-xl">
                                        <div class="w-full h-2 bg-white/30 rounded-t-lg"></div>
                                        <div class="p-2 space-y-1">
                                            <div class="h-1 bg-white/40 rounded animate-loading-bar"></div>
                                            <div class="h-1 bg-white/30 rounded animate-loading-bar animation-delay-200"></div>
                                            <div class="h-1 bg-white/20 rounded animate-loading-bar animation-delay-400"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="text-center text-white relative z-10">
                                    <i class="fas fa-mobile-alt text-6xl mb-4 animate-mobile-wave group-hover:animate-mobile-shake"></i>
                                    <h3 class="text-2xl font-bold animate-text-glow">APK Store App</h3>
                                </div>
                            </div>
                            
                            <div class="p-8 relative">
                                <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                                    Mobile App Store
                                </h3>
                                
                                <p class="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                    Complete APK store application with React Native and Firebase backend. Features app browsing, downloads, and user management.
                                </p>
                                
                                <div class="flex flex-wrap gap-2 mb-6">
                                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm animate-tag-float hover:animate-tag-bounce transition-all duration-300 cursor-pointer">React Native</span>
                                    <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm animate-tag-float animation-delay-100 hover:animate-tag-bounce transition-all duration-300 cursor-pointer">Firebase</span>
                                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm animate-tag-float animation-delay-200 hover:animate-tag-bounce transition-all duration-300 cursor-pointer">Mobile</span>
                                    <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm animate-tag-float animation-delay-300 hover:animate-tag-bounce transition-all duration-300 cursor-pointer">Real-time</span>
                                </div>
                                
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-4 text-sm text-gray-500">
                                        <span class="flex items-center gap-1 animate-feature-highlight">
                                            <i class="fas fa-download text-green-500 animate-download-bounce"></i>
                                            APK Store
                                        </span>
                                        <span class="flex items-center gap-1 animate-feature-highlight animation-delay-200">
                                            <i class="fas fa-users text-blue-500 animate-users-wave"></i>
                                            Multi-user
                                        </span>
                                    </div>
                                    <button class="text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300 flex items-center gap-1">
                                        View Details
                                        <i class="fas fa-arrow-right group-hover:animate-bounce-x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

// Enhanced scroll animations with intersection observer
onMounted(() => {
    // Counter animation
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter')
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'))
            let current = 0
            const increment = target / 100
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment
                    counter.textContent = Math.ceil(current)
                    requestAnimationFrame(updateCounter)
                } else {
                    counter.textContent = target
                }
            }
            updateCounter()
        })
    }

    // Enhanced intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in')
                
                // Trigger counter animation for stats section
                if (entry.target.classList.contains('counter')) {
                    animateCounters()
                }
                
                // Stagger animation for service cards
                if (entry.target.classList.contains('service-card')) {
                    const cards = entry.target.parentElement.querySelectorAll('.service-card')
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in')
                        }, index * 100)
                    })
                }
            }
        })
    }, { 
        threshold: 0.1,
        rootMargin: '50px'
    })

    // Observe elements
    document.querySelectorAll('.animate-on-scroll, .service-card, .counter').forEach(el => {
        observer.observe(el)
    })

    // Typewriter effect for badge
    const typewriterText = document.querySelector('.animate-typewriter')
    if (typewriterText) {
        const text = typewriterText.textContent
        typewriterText.textContent = ''
        let i = 0
        const typeWriter = () => {
            if (i < text.length) {
                typewriterText.textContent += text.charAt(i)
                i++
                setTimeout(typeWriter, 50)
            }
        }
        setTimeout(typeWriter, 1000)
    }

    // Glitch effect for headings
    const glitchElements = document.querySelectorAll('.glitch-text')
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('animate-glitch')
            setTimeout(() => {
                el.classList.remove('animate-glitch')
            }, 500)
        })
    })

    // Parallax effect for background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset
        const parallaxElements = document.querySelectorAll('.animate-float, .animate-float-delayed')
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1)
            el.style.transform = `translateY(${scrolled * speed}px)`
        })
    })
})
</script>

<style scoped>
/* Advanced CSS Animations */

/* Particle Animation */
.floating-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    border-radius: 50%;
    animation: floatParticle var(--duration) linear infinite;
    animation-delay: var(--delay);
}

@keyframes floatParticle {
    0% {
        transform: translateY(100vh) translateX(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) translateX(50px);
        opacity: 0;
    }
}

/* Enhanced Morphing Animations */
@keyframes morph-1 {
    0%, 100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        transform: translate(-50%, -50%) rotate(180deg);
    }
}

@keyframes morph-2 {
    0%, 100% {
        border-radius: 40% 60% 60% 40% / 60% 30% 60% 70%;
        transform: translate(50%, 50%) rotate(0deg);
    }
    50% {
        border-radius: 60% 40% 30% 70% / 40% 70% 60% 30%;
        transform: translate(50%, 50%) rotate(-180deg);
    }
}

.animate-morph-1 {
    animation: morph-1 15s ease-in-out infinite;
}

.animate-morph-2 {
    animation: morph-2 20s ease-in-out infinite;
}

/* Grid Background */
.bg-grid {
    background-image: 
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
}

@keyframes grid-move {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

@keyframes grid-move-reverse {
    0% { background-position: 50px 50px; }
    100% { background-position: 0 0; }
}

.animate-grid-move {
    animation: grid-move 20s linear infinite;
}

.animate-grid-move-reverse {
    animation: grid-move-reverse 25s linear infinite;
}

/* Glitch Effect */
.glitch-container {
    position: relative;
}

.glitch-text {
    position: relative;
    color: hsl(258, 100%, 51%)df5;
}

/* Enhanced Button Animations */
@keyframes button-glow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    50% {
        box-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
    }
}

@keyframes liquid {
    0%, 100% {
        border-radius: 15px;
    }
    50% {
        border-radius: 25px;
    }
}

.animate-button-glow {
    animation: button-glow 3s ease-in-out infinite;
}

.animate-liquid {
    animation: liquid 2s ease-in-out infinite;
}

/* Text Animations */
@keyframes text-wave {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-2px); }
    75% { transform: translateY(2px); }
}

.animate-text-wave {
    animation: text-wave 2s ease-in-out infinite;
}

@keyframes gradient-x {
    0%, 100% {
        background-size: 200% 200%;
        background-position: left center;
    }
    50% {
        background-size: 200% 200%;
        background-position: right center;
    }
}

.animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite;
}

/* Counter Animations */
@keyframes expand {
    0% { width: 0; }
    100% { width: 8rem; }
}

.animate-expand {
    animation: expand 1.5s ease-out 2s both;
}

/* Enhanced Scroll Indicator */
@keyframes scroll-dot {
    0% { opacity: 0; transform: translateY(-10px); }
    50% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(10px); }
}

@keyframes pulse-ring {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
}

.animate-scroll-dot {
    animation: scroll-dot 2s ease-in-out infinite;
}

.animate-pulse-ring {
    animation: pulse-ring 2s ease-in-out infinite;
}

/* Service Card Animations */
@keyframes icon-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes check-pop {
    0% { transform: scale(0); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes slide-in-feature {
    0% {
        opacity: 0;
        transform: translateX(-20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-icon-pulse {
    animation: icon-pulse 3s ease-in-out infinite;
}

.animate-check-pop {
    animation: check-pop 0.6s ease-out;
}

.animate-slide-in-feature {
    animation: slide-in-feature 0.6s ease-out both;
}

/* Project Card Animations */
@keyframes robot-glow {
    0%, 100% { 
        text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
    }
    50% { 
        text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
        filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
    }
}

@keyframes robot-dance {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(5deg); }
    75% { transform: translateY(-5px) rotate(-5deg); }
}

@keyframes blink {
    0%, 90%, 100% { opacity: 1; }
    95% { opacity: 0.3; }
}

@keyframes text-glow {
    0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
    50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
}

.animate-robot-glow {
    animation: robot-glow 3s ease-in-out infinite;
}

.animate-robot-dance {
    animation: robot-dance 1s ease-in-out;
}

.animate-blink {
    animation: blink 3s ease-in-out infinite;
}

.animate-text-glow {
    animation: text-glow 2s ease-in-out infinite;
}

/* Tag Animations */
@keyframes tag-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

@keyframes tag-bounce {
    0%, 20%, 60%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    80% { transform: translateY(-5px); }
}

.animate-tag-float {
    animation: tag-float 2s ease-in-out infinite;
}

.animate-tag-bounce {
    animation: tag-bounce 0.6s ease-in-out;
}

/* Feature Highlight Animations */
@keyframes star-twinkle {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
}

@keyframes microphone-pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes bounce-x {
    0%, 20%, 60%, 100% { transform: translateX(0); }
    40% { transform: translateX(5px); }
    80% { transform: translateX(3px); }
}

@keyframes download-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

@keyframes users-wave {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.animate-star-twinkle {
    animation: star-twinkle 2s ease-in-out infinite;
}

.animate-microphone-pulse {
    animation: microphone-pulse 1.5s ease-in-out infinite;
}

.animate-bounce-x {
    animation: bounce-x 0.6s ease-in-out;
}

.animate-download-bounce {
    animation: download-bounce 1s ease-in-out infinite;
}

.animate-users-wave {
    animation: users-wave 2s ease-in-out infinite;
}

/* Mobile Specific Animations */
@keyframes mobile-wave {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-2px) rotate(-1deg); }
    75% { transform: translateY(-2px) rotate(1deg); }
}

@keyframes mobile-shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
}

@keyframes loading-bar {
    0% { width: 0%; opacity: 0.3; }
    50% { width: 100%; opacity: 1; }
    100% { width: 0%; opacity: 0.3; }
}

@keyframes float-particles {
    0%, 100% { 
        transform: translateY(0) translateX(0); 
        opacity: 0.3; 
    }
    50% { 
        transform: translateY(-20px) translateX(10px); 
        opacity: 1; 
    }
}

.animate-mobile-wave {
    animation: mobile-wave 3s ease-in-out infinite;
}

.animate-mobile-shake {
    animation: mobile-shake 0.5s ease-in-out;
}

.animate-loading-bar {
    animation: loading-bar 2s ease-in-out infinite;
}

.animate-float-particles {
    animation: float-particles 4s ease-in-out infinite;
}

/* Utility Animation Classes */
.animate-bounce-gentle {
    animation: bounce 3s ease-in-out infinite;
}

.animate-sparkle {
    animation: sparkle 1.5s ease-in-out infinite;
}

.animate-spin-slow {
    animation: spin 3s linear infinite;
}

.animate-wiggle {
    animation: wiggle 0.5s ease-in-out;
}

.animate-float-gentle {
    animation: float 4s ease-in-out infinite;
}

.animate-pulse-slow {
    animation: pulse 4s ease-in-out infinite;
}

.animate-bounce-slow {
    animation: bounce 3s ease-in-out infinite;
}

.animate-fade-in-out {
    animation: fadeInOut 3s ease-in-out infinite;
}

@keyframes sparkle {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
    50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
}

@keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-3deg); }
    75% { transform: rotate(3deg); }
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

/* Scroll Reveal Animations */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
}

.animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Text Reveal Animations */
@keyframes slide-in-left {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-in-right {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

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

.animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out both;
}

.animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out both;
}

.animate-fade-up {
    animation: fade-up 0.8s ease-out both;
}

.animate-slideInUp {
    animation: slideInUp 0.6s ease-out forwards;
    opacity: 0;
}

.animate-slideInDown {
    animation: slideInDown 0.6s ease-out forwards;
    opacity: 0;
}

/* Animation Delays */
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }

/* Shimmer Effect */
@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

.animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    background-size: 200% 100%;
    animation: shimmer 2s ease-in-out infinite;
}

/* Router Link Active Styles */
.router-link-active {
    background: linear-gradient(135deg, #2563eb, #7c3aed) !important;
}

.router-link-exact-active {
    background: linear-gradient(135deg, #1d4ed8, #6d28d9) !important;
}

/* Responsive Design */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Performance Optimizations */
.animate-morph-1,
.animate-morph-2,
.floating-particles,
.animate-float,
.animate-float-delayed {
    will-change: transform;
}

.service-card,
.project-card-inner {
    backface-visibility: hidden;
    transform-style: preserve-3d;
}
</style>
