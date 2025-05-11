<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Каталог товаров</h1>
    <div
      v-if="store.products && store.products.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      <div
        v-for="product in store.products"
        :key="product.id"
        class="bg-gray-800 p-4 rounded shadow-md"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 class="text-xl font-semibold text-white">{{ product.title }}</h2>
        <p class="text-gray-300">Цена: ${{ product.price }}</p>
        <p class="text-gray-400">Категория: {{ product.category }}</p>
      </div>
    </div>
    <p v-else class="text-gray-300">Загрузка...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/store/store'

const store = useProductStore()

onMounted(() => {
  store.fetchProducts()
})
</script>

<style scoped></style>
