<template>
    <div class="max-w-md mx-auto p-4 space-y-4">
      <h1 class="text-xl font-bold">USSD Sandbox</h1>
      <div class="bg-gray-100 p-4 rounded shadow">
        <pre>{{ sessionOutput }}</pre>
      </div>
      <input
        v-model="userInput"
        class="border p-2 w-full"
        @keyup.enter="sendInput"
        placeholder="Enter response (e.g. 1, 2, text...)"
      />
      <button @click="sendInput" class="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useFetch } from '#app'
  
  const sessionId = ref(Date.now().toString())
  const userInput = ref('')
  const sessionOutput = ref('Dial *123# to begin.')
  
  const sendInput = async () => {
    const response = await $fetch('http://localhost:8000/api/ussd', {
      method: 'POST',
      body: {
        sessionId: sessionId.value,
        phoneNumber: '+256700000001',
        userInput: userInput.value,
      },
    })
  
    sessionOutput.value = response.message
    userInput.value = ''
  }
  </script>
  