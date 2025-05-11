<template>
  <header class="bg-gray-800 text-white p-4 shadow-md">
    <nav class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold">Магазин одежды</RouterLink>
      <div class="space-x-4">
        <RouterLink to="/" class="hover:text-gray-300">Главная</RouterLink>
        <RouterLink to="/catalog" class="hover:text-gray-300">Каталог</RouterLink>
        <RouterLink to="/contact" class="hover:text-gray-300">Контакты</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped></style>
