<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">О магазине</h1>
    <p class="text-lg mb-4 text-gray-300">{{ aboutText }}</p>
    <ul class="list-disc pl-6 text-gray-300">
      <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutText:
        'Мы - современный магазин одежды, предлагающий качественные и стильные вещи для всех возрастов.',
      features: ['Широкий ассортимент', 'Быстрая доставка', 'Доступные цены', 'Гарантия качества'],
    }
  },
}
</script>

<style scoped></style>
