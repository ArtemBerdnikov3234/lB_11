<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Связаться с нами</h1>
    <div class="max-w-md mx-auto">
      <div class="mb-4">
        <label class="block text-lg mb-2" for="name">Имя</label>
        <input v-model="form.name" type="text" id="name" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block text-lg mb-2" for="email">Email</label>
        <input v-model="form.email" type="email" id="email" class="w-full p-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block text-lg mb-2" for="message">Сообщение</label>
        <textarea v-model="form.message" id="message" class="w-full p-2 border rounded"></textarea>
      </div>
      <button
        @click="submitForm"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Отправить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    submitForm() {
      console.log('Форма отправлена:', this.form)
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    },
  },
}
</script>

<style scoped></style>
