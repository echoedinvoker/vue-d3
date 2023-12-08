import { defineStore } from "pinia";
import { ref } from "vue";


export const useD3Store = defineStore('d3', () => {
  const requestCount = ref(0)

  const mockApi = () => {
    const responses = [
      ['rect'],
      ['rect', 'circle'],
      ['rect', 'circle', 'circle'],
      ['rect', 'circle', 'circle', 'rect'],
      ['rect', 'circle', 'circle'],
      ['rect', 'circle'],
      ['rect'],
      []
    ]

    const response = responses[requestCount.value % responses.length]
    requestCount.value += 1
    return new Promise(resolve => {
      setTimeout(() => resolve(response), 1000)
    })
  }

  return {
    mockApi
  }
})
