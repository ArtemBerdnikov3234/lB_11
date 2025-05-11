import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    formData: null,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        this.products = data.filter((product) => product.category.includes('clothing'))
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    },
    async sendMessage(formData) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(formData),
        })
        const result = await response.json()
        this.formData = result
        return result
      } catch (error) {
        console.error('Ошибка при отправке сообщения:', error)
        throw error
      }
    },
  },
})
