<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Детали товара</h1>
    <div v-if="product" class="bg-gray-800 p-4 rounded shadow-md">
      <h2 class="text-2xl font-semibold text-white">{{ product.name }}</h2>
      <p class="text-xl text-gray-300 mb-2">{{ product.price }} руб.</p>
      <p class="text-gray-400 mb-4">{{ product.description }}</p>
      <p class="text-gray-300"><strong>Категория:</strong> {{ product.category }}</p>
      <RouterLink to="/catalog" class="text-blue-400 hover:text-blue-300"
        >Вернуться в каталог</RouterLink
      >
    </div>
    <div v-else>
      <p class="text-gray-300">Товар не найден.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  // Имитация получения данных о товаре
  const products = [
    {
      id: 1,
      name: 'Футболка классическая',
      price: 1500,
      description: 'Хлопковая футболка в базовых цветах.',
      category: 'Футболки',
    },
    {
      id: 2,
      name: 'Джинсы slim fit',
      price: 3500,
      description: 'Удобные джинсы с современным кроем.',
      category: 'Джинсы',
    },
    {
      id: 3,
      name: 'Куртка зимняя',
      price: 7500,
      description: 'Теплая куртка для холодной погоды.',
      category: 'Куртки',
    },
  ]
  product.value = products.find((p) => p.id === parseInt(route.params.id))
})
</script>

<style scoped></style>
