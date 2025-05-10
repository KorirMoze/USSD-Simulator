<template>
    <div class="mt-16 mb-">
      <Navbar />
    </div>
  
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4">
        <Sidebar :isOpen="sidebarOpen" @toggle="toggleSidebar" />
        <div class="relative w-[390px] h-[800px] bg-black rounded-[2.5rem] border-[6px] border-gray-700 shadow-2xl overflow-hidden">
        <!-- Punch-hole camera -->
        <div class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black w-6 h-6 rounded-full z-10 border-2 border-gray-800"></div>
  
        <!-- Status Bar -->
        <div class="absolute top-4 w-full px-6 flex justify-between items-center text-sm text-gray-300 font-mono z-20">
          <div>{{ currentTime }}</div>
          <div class="flex items-center gap-1">

            <div class="flex items-center gap-3">
    <!-- Network Signal Bars -->
    <div class="flex gap-[2px]">
      <div class="w-1 h-1 bg-white rounded-sm"></div>
      <div class="w-1 h-2 bg-white rounded-sm"></div>
      <div class="w-1 h-3 bg-white rounded-sm"></div>
      <div class="w-1 h-4 bg-white rounded-sm"></div>
    </div>

    <!-- Battery Icon -->
    <div class="relative w-6 h-3 border border-white rounded-sm">
      <div class="absolute right-[-3px] top-[5px] w-[2px] h-[6px] bg-white rounded-sm"></div>
      <div class="bg-white h-full w-3/4"></div> <!-- Battery level -->
    </div>
  </div>
          </div>
        </div>
        <!-- Main container -->
        <div class="h-full flex flex-col items-center justify-center p-8 pt-20">
          <!-- Display Area -->
          <div class="w-full text-center text-2xl font-mono py-4 mb-8 h-48 overflow-y-auto whitespace-pre-line">
            <div v-if="sessionOutput">{{ sessionOutput }}</div>
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
            <button class="text-purple-300 opacity-50">
              <!-- Video call icon (disabled) -->
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V6c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z" />
              </svg>
            </button>
  
            <button @click="makeCall" class="bg-purple-500 p-4 rounded-full hover:bg-purple-600 transition-colors">
              <!-- Call Button -->
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.21 1.11z" />
              </svg>
            </button>
  
            <button @click="remove" class="text-white hover:text-purple-300 transition-colors">
              <!-- Backspace -->
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 6H12l-1.41 1.41L8.17 10l2.42 2.59L12 14h10V6zm-3 5l-1.41 1.41L16.17 11l1.42-1.41L19 11z" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Toast Notification -->
        <transition name="fade">
          <div v-if="showToast"
            class="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
            {{ toastMessage }}
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Sidebar from '../layouts/sideBar.vue'
  import Navbar from '../layouts/Navbar.vue'
  
  const sessionId = ref(Date.now().toString())
  const userInput = ref('')
  const welcomeMessage = ref('Dial *123# to begin.')
  const sessionOutput = ref('')
  const showToast = ref(false)
  const toastMessage = ref('')
  const currentTime = ref('')
  
  // Format current time as HH:MM
  const updateTime = () => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    currentTime.value = `${hours}:${minutes}`
  }
  
  onMounted(() => {
    updateTime()
    setInterval(updateTime, 60000) // Update every minute
  })
  
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
  
  const append = (val) => {
    if (welcomeMessage.value) welcomeMessage.value = ''
    userInput.value += val
  }
  
  const remove = () => {
    userInput.value = userInput.value.slice(0, -1)
  }
  
  const displayToast = (message) => {
    toastMessage.value = message
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 2000)
  }
  
  const makeCall = () => {
    if (!userInput.value) return
    displayToast('Processing request...')
  
    let response = { message: '' }
  
    switch (userInput.value) {
      case '*123#':
        response.message = 'Welcome to Mobile Banking\n1. Check Balance\n2. Send Money\n3. Buy Airtime\n4. Pay Bills\n0. Exit'
        break
      case '1':
        response.message = 'Your balance is $1,250.00\n0. Back'
        break
      case '2':
        response.message = 'Send Money\n1. To Mobile Number\n2. To Bank Account\n0. Back'
        break
      case '3':
        response.message = 'Buy Airtime\n1. For Self\n2. For Others\n0. Back'
        break
      case '4':
        response.message = 'Pay Bills\n1. Electricity\n2. Water\n3. TV Subscription\n0. Back'
        break
      case '0':
        response.message = 'Thank you for using our service!'
        break
      default:
        response.message = 'Invalid option. Please try again.'
    }
  
    sessionOutput.value = response.message
    userInput.value = ''
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 2px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
  </style>
  