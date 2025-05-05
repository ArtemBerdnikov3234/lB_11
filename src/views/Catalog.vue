<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Каталог товаров</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="bg-gray-800 p-4 rounded shadow-md">
        <h2 class="text-xl font-semibold text-white">{{ product.name }}</h2>
        <p class="text-gray-300">{{ product.price }} руб.</p>
        <p class="text-gray-400">{{ product.description }}</p>
        <RouterLink :to="`/catalog/${product.id}`" class="text-blue-400 hover:text-blue-300">
          Подробнее
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Футболка классическая',
    price: 1500,
    description: 'Хлопковая футболка в базовых цветах.',
  },
  {
    id: 2,
    name: 'Джинсы slim fit',
    price: 3500,
    description: 'Удобные джинсы с современным кроем.',
  },
  {
    id: 3,
    name: 'Куртка зимняя',
    price: 7500,
    description: 'Теплая куртка для холодной погоды.',
  },
])
</script>

<style scoped></style>
