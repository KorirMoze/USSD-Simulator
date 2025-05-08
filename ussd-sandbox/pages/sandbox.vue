<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center space-y-6 px-4">
      <div class="relative w-[390px] h-[800px] bg-black rounded-[2.5rem] border-[6px] border-gray-700 shadow-2xl overflow-hidden">
        <!-- Punch-hole camera -->
        <div class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black w-6 h-6 rounded-full z-10 border-2 border-gray-800"></div>
        
        <!-- Main container with centered content -->
        <div class="h-full flex flex-col items-center justify-center p-8">
          <!-- Display Area -->
          <div class="w-full text-center text-2xl font-mono py-4 mb-8 h-48 overflow-y-auto">
            <div v-if="sessionOutput" class="whitespace-pre-line">{{ sessionOutput }}</div>
            <div v-else class="text-gray-400">{{ welcomeMessage }}</div>
          </div>
  
          <!-- User Input Display -->
          <div class="w-64 text-center border-b border-gray-600 text-3xl tracking-wider font-mono py-2 mb-8">
            {{ userInput }}
          </div>
      
          <!-- Dial Pad -->
          <div class="grid grid-cols-3 gap-6 w-64 text-center text-2xl font-bold mb-8">
            <div v-for="btn in buttons" :key="btn.label" @click="append(btn.label)" class="cursor-pointer">
              <div>{{ btn.label }}</div>
              <div class="text-xs font-light text-purple-300">{{ btn.sub }}</div>
            </div>
          </div>
      
          <!-- Action Buttons -->
          <div class="flex justify-between items-center w-64 mt-4">
            <!-- Video Call Icon -->
            <button class="text-purple-300 opacity-50">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V6c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z"/>
              </svg>
            </button>
      
            <!-- Call Button -->
            <button @click="makeCall" class="bg-purple-500 p-4 rounded-full">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.21 1.11z"/>
              </svg>
            </button>
      
            <!-- Backspace Icon -->
            <button @click="remove" class="text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 6H12l-1.41 1.41L8.17 10l2.42 2.59L12 14h10V6zm-3 5l-1.41 1.41L16.17 11l1.42-1.41L19 11z"/>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Toast Notification -->
        <div v-if="showToast" class="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          {{ toastMessage }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Reactive properties
  const sessionId = ref(Date.now().toString())
  const userInput = ref('')
  const welcomeMessage = ref('Dial *123# to begin.')
  const sessionOutput = ref('')
  const showToast = ref(false)
  const toastMessage = ref('')
  
  // Button layout with sublabels
  const buttons = [
    { label: '1', sub: '✉️' },
    { label: '2', sub: 'ABC' },
    { label: '3', sub: 'DEF' },
    { label: '4', sub: 'GHI' },
    { label: '5', sub: 'JKL' },
    { label: '6', sub: 'MNO' },
    { label: '7', sub: 'PQRS' },
    { label: '8', sub: 'TUV' },
    { label: '9', sub: 'WXYZ' },
    { label: '*', sub: '' },
    { label: '0', sub: '+' },
    { label: '#', sub: '' }
  ]
  
  // Append numbers/letters to the input string
  const append = (val) => {
    if (welcomeMessage.value) {
      welcomeMessage.value = '' // Clear welcome message when user starts typing
    }
    userInput.value += val
  }
  
  // Remove the last character from the input string
  const remove = () => {
    userInput.value = userInput.value.slice(0, -1)
  }
  
  // Display a toast notification
  const displayToast = (message) => {
    toastMessage.value = message
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 2000)
  }
  
  // Process the USSD call
  const makeCall = () => {
    if (!userInput.value) return
    
    displayToast('Processing request...')
    
    // Simulate API response
    let response = { message: '' }
    
    if (userInput.value === '*123#') {
      response.message = 'Welcome to Mobile Banking\n1. Check Balance\n2. Send Money\n3. Buy Airtime\n4. Pay Bills\n0. Exit'
    } else if (userInput.value === '1') {
      response.message = 'Your balance is $1,250.00\n0. Back'
    } else if (userInput.value === '2') {
      response.message = 'Send Money\n1. To Mobile Number\n2. To Bank Account\n0. Back'
    } else if (userInput.value === '3') {
      response.message = 'Buy Airtime\n1. For Self\n2. For Others\n0. Back'
    } else if (userInput.value === '4') {
      response.message = 'Pay Bills\n1. Electricity\n2. Water\n3. TV Subscription\n0. Back'
    } else if (userInput.value === '0') {
      response.message = 'Thank you for using our service!'
    } else {
      response.message = 'Invalid option. Please try again.'
    }
    
    sessionOutput.value = response.message
    userInput.value = ''
  }
  </script>
  
  <style scoped>
  /* Custom styles for the dialer UI */
  .min-h-screen {
    background-color: #000;
  }
  
  .w-64 {
    width: 16rem;
  }
  
  .text-center {
    text-align: center;
  }
  
  .font-mono {
    font-family: 'Courier New', monospace;
  }
  
  .text-4xl {
    font-size: 2.25rem;
  }
  
  .text-3xl {
    font-size: 1.875rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .text-purple-300 {
    color: #c3b0ff;
  }
  
  .bg-purple-500 {
    background-color: #7f5af0;
  }
  
  .bg-black {
    background-color: #000;
  }
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  .text-white {
    color: #fff;
  }
  
  .text-gray-400 {
    color: #9ca3af;
  }
  
  .text-xs {
    font-size: 0.75rem;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  
  .mb-8 {
    margin-bottom: 2rem;
  }
  
  .border-b {
    border-bottom-width: 1px;
  }
  
  .border-gray-600 {
    border-color: #4b5563;
  }
  
  .w-8 {
    width: 2rem;
  }
  
  .h-8 {
    height: 2rem;
  }
  
  .w-6 {
    width: 1.5rem;
  }
  
  .h-6 {
    height: 1.5rem;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .rounded-full {
    border-radius: 9999px;
  }
  
  .grid {
    display: grid;
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .gap-6 {
    gap: 1.5rem;
  }
  
  .flex {
    display: flex;
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .h-full {
    height: 100%;
  }
  
  .p-8 {
    padding: 2rem;
  }
  
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  

  .shadow-2xl {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
  
  .overflow-hidden {
    overflow: hidden;
  }
  
  .z-10 {
    z-index: 10;
  }
  
  .border-2 {
    border-width: 2px;
  }
  
  .rounded-full {
    border-radius: 9999px;
  }
  
  .tracking-wider {
    letter-spacing: 0.05em;
  }
  
  .whitespace-pre-line {
    white-space: pre-line;
  }
  
  .h-48 {
    height: 12rem;
  }
  
  .overflow-y-auto {
    overflow-y: auto;
  }
  
  .opacity-50 {
    opacity: 0.5;
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .bottom-20 {
    bottom: 5rem;
  }
  </style>