<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Dynamic Content Based on Route -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>
