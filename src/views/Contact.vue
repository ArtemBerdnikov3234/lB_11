<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Связаться с нами</h1>
    <div class="max-w-md mx-auto bg-gray-800 p-6 rounded shadow-md">
      <div class="mb-4">
        <label class="block text-lg mb-2 text-gray-300" for="name">Имя</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
          placeholder="Введите ваше имя"
        />
      </div>
      <div class="mb-4">
        <label class="block text-lg mb-2 text-gray-300" for="message">Сообщение</label>
        <textarea
          v-model="form.message"
          id="message"
          class="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
          placeholder="Ваше сообщение"
        ></textarea>
      </div>
      <button @click="submitForm" class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
        Отправить
      </button>
      <p v-if="formStatus" class="text-gray-300 mt-4">{{ formStatus }}</p>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/store/store'

export default {
  data() {
    return {
      form: {
        name: '',
        message: '',
      },
      formStatus: '',
    }
  },
  methods: {
    async submitForm() {
      const store = useProductStore()
      try {
        await store.sendMessage({
          title: this.form.name,
          body: this.form.message,
          userId: 1,
        })
        this.formStatus = 'Сообщение успешно отправлено!'
        this.form.name = ''
        this.form.message = ''
      } catch (error) {
        this.formStatus = 'Ошибка при отправке сообщения.'
      }
    },
  },
}
</script>

<style scoped></style>
