<template>
  <div class="min-h-screen flex flex-col bg-black text-white">
    <Header />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
