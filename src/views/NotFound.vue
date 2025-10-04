<!-- src/views/NotFound.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white px-4 overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl animate-blob"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 text-center">
      <!-- Best Animated Robot Icon -->
      <div class="mb-8 flex justify-center">
        <div class="relative animate-robot-hover">
          <svg class="w-28 h-28 md:w-36 md:h-36" viewBox="0 0 120 120" fill="none">
            <!-- Robot Head -->
            <rect x="30" y="20" width="60" height="45" rx="8" fill="currentColor" class="opacity-90 animate-head-tilt"/>
            
            <!-- Antenna -->
            <line x1="60" y1="20" x2="60" y2="10" stroke="currentColor" stroke-width="2" class="animate-antenna-wave"/>
            <circle cx="60" cy="8" r="3" fill="#00ff88" class="animate-signal-pulse"/>
            
            <!-- Eyes -->
            <circle cx="45" cy="35" r="6" fill="#00ff88" class="animate-eye-blink" style="animation-delay: 0s"/>
            <circle cx="75" cy="35" r="6" fill="#ff6b6b" class="animate-eye-blink" style="animation-delay: 0.5s"/>
            
            <!-- Eye pupils -->
            <circle cx="45" cy="35" r="2" fill="white" class="animate-pupil-move"/>
            <circle cx="75" cy="35" r="2" fill="white" class="animate-pupil-move"/>
            
            <!-- Mouth -->
            <rect x="50" y="50" width="20" height="8" rx="4" fill="currentColor" class="opacity-75 animate-mouth-talk"/>
            
            <!-- Body -->
            <rect x="35" y="65" width="50" height="40" rx="6" fill="currentColor" class="opacity-85"/>
            
            <!-- Chest Panel -->
            <rect x="45" y="75" width="30" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" class="animate-panel-glow"/>
            
            <!-- Status LEDs -->
            <circle cx="50" cy="80" r="2" fill="#00ff88" class="animate-led-flash" style="animation-delay: 0s"/>
            <circle cx="60" cy="80" r="2" fill="#ffaa00" class="animate-led-flash" style="animation-delay: 0.3s"/>
            <circle cx="70" cy="80" r="2" fill="#ff6b6b" class="animate-led-flash" style="animation-delay: 0.6s"/>
            
            <!-- Arms -->
            <rect x="20" y="70" width="15" height="25" rx="4" fill="currentColor" class="opacity-80 animate-arm-left"/>
            <rect x="85" y="70" width="15" height="25" rx="4" fill="currentColor" class="opacity-80 animate-arm-right"/>
            
            <!-- Glitch Effects -->
            <rect x="30" y="20" width="60" height="45" rx="8" fill="none" stroke="#00ff88" stroke-width="1" class="animate-glitch-outline" opacity="0"/>
            
            <!-- Data Stream -->
            <g class="animate-data-stream">
              <text x="40" y="115" font-family="monospace" font-size="6" fill="currentColor" opacity="0.6">01001</text>
              <text x="65" y="115" font-family="monospace" font-size="6" fill="currentColor" opacity="0.4">11010</text>
            </g>
          </svg>
          
          <!-- Holographic Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg animate-hologram"></div>
        </div>
      </div>

      <!-- Animated 404 with Glitch -->
      <h1 class="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-lg animate-fade-in-up relative">
        <span class="inline-block animate-bounce" style="animation-delay: 0ms">4</span>
        <span class="inline-block animate-bounce animate-glitch-number" style="animation-delay: 150ms">0</span>
        <span class="inline-block animate-bounce" style="animation-delay: 300ms">4</span>
        <div class="absolute inset-0 text-cyan-400 animate-number-glitch opacity-0">404</div>
      </h1>
      
      <!-- Error Message -->
      <div class="relative mb-8">
        <p class="text-xl md:text-2xl text-center drop-shadow-md font-medium animate-fade-in">
          <span class="animate-typewriter">System Error: Page Not Found</span>
        </p>
      </div>
      
      <!-- Futuristic Button -->
      <router-link 
        to="/" 
        class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group border border-cyan-400/30"
      >
        <span class="relative z-10 flex items-center gap-3">
          <!-- Rocket Icon -->
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L13 8H7L10 2Z"/>
            <path d="M7 9H13L11 14H9L7 9Z"/>
          </svg>
          <span class="animate-text-glow">Return to Base</span>
        </span>
        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="absolute inset-0 animate-button-scan"></div>
      </router-link>
    </div>
    
    <!-- Matrix Rain Effect -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="matrix-rain"></div>
    </div>
  </div>
</template>

<script setup>
// Optional: Add any necessary imports or logic here
</script>

<style scoped>
/* Robot Animations */
@keyframes robot-hover {
  0% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(-1deg); }
  50% { transform: translateY(-8px) rotate(0deg); }
  75% { transform: translateY(-3px) rotate(1deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes head-tilt {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
}

@keyframes antenna-wave {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
}

@keyframes signal-pulse {
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
  100% { opacity: 0.5; transform: scale(1); }
}

@keyframes eye-blink {
  0%, 90%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.1); }
}

@keyframes pupil-move {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  75% { transform: translateX(1px); }
}

@keyframes mouth-talk {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.2); }
}

@keyframes panel-glow {
  0%, 100% { stroke: currentColor; opacity: 0.5; }
  50% { stroke: #00ff88; opacity: 1; }
}

@keyframes led-flash {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@keyframes arm-left {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-15deg); }
}

@keyframes arm-right {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(15deg); }
}

@keyframes glitch-outline {
  0% { opacity: 0; transform: translate(0); }
  10% { opacity: 1; transform: translate(-2px, 2px); }
  20% { opacity: 0; transform: translate(2px, -2px); }
  30% { opacity: 1; transform: translate(-1px, -1px); }
  40% { opacity: 0; transform: translate(1px, 2px); }
  50% { opacity: 1; transform: translate(-2px, -2px); }
  100% { opacity: 0; transform: translate(0); }
}

@keyframes data-stream {
  0% { transform: translateY(0); opacity: 0.6; }
  100% { transform: translateY(-10px); opacity: 0; }
}

@keyframes hologram {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes glitch-number {
  0%, 100% { transform: translate(0); }
  10% { transform: translate(-2px, 2px); }
  20% { transform: translate(2px, -2px); }
  30% { transform: translate(-1px, -1px); }
  40% { transform: translate(1px, 2px); }
}

@keyframes number-glitch {
  0% { opacity: 0; }
  10% { opacity: 1; transform: translate(3px, -3px); }
  15% { opacity: 0; }
  20% { opacity: 1; transform: translate(-2px, 3px); }
  25% { opacity: 0; }
}

@keyframes typewriter {
  0% { width: 0; }
  100% { width: 100%; }
}

@keyframes text-glow {
  0%, 100% { text-shadow: 0 0 5px currentColor; }
  50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
}

@keyframes button-scan {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateX(100%); opacity: 0; }
}

/* Previous animations */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

/* Animation classes */
.animate-robot-hover { animation: robot-hover 4s ease-in-out infinite; }
.animate-head-tilt { animation: head-tilt 3s ease-in-out infinite; }
.animate-antenna-wave { animation: antenna-wave 2s ease-in-out infinite; }
.animate-signal-pulse { animation: signal-pulse 1.5s ease-in-out infinite; }
.animate-eye-blink { animation: eye-blink 3s ease-in-out infinite; }
.animate-pupil-move { animation: pupil-move 4s ease-in-out infinite; }
.animate-mouth-talk { animation: mouth-talk 1s ease-in-out infinite; }
.animate-panel-glow { animation: panel-glow 2s ease-in-out infinite; }
.animate-led-flash { animation: led-flash 1s ease-in-out infinite; }
.animate-arm-left { animation: arm-left 2.5s ease-in-out infinite; }
.animate-arm-right { animation: arm-right 2.5s ease-in-out infinite; }
.animate-glitch-outline { animation: glitch-outline 5s linear infinite; }
.animate-data-stream { animation: data-stream 3s linear infinite; }
.animate-hologram { animation: hologram 3s linear infinite; }
.animate-glitch-number { animation: glitch-number 2s infinite; }
.animate-number-glitch { animation: number-glitch 2s infinite; }
.animate-typewriter { animation: typewriter 2s steps(25) forwards; }
.animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
.animate-button-scan { animation: button-scan 3s linear infinite; }

.animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards; }
.animate-fade-in { animation: fade-in-up 0.8s 0.2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards; opacity: 0; }
.animate-float { animation: float 3s infinite ease-in; }
.animate-blob { animation: blob 15s infinite; }

/* Matrix Rain Effect */
.matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 255, 136, 0.1));
  opacity: 0.1;
}

.matrix-rain::before {
  content: "01001110001110100101110010111001";
  position: absolute;
  color: #00ff88;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  animation: matrix-fall 10s linear infinite;
}

@keyframes matrix-fall {
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
}
</style>
