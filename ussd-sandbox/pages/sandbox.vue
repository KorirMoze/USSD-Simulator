<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-4">
      <div class="relative w-80 h-[640px] bg-gray-800 rounded-3xl border-8 border-gray-700 shadow-2xl overflow-hidden">
        <!-- Status bar -->
        <div class="absolute top-0 w-full h-6 bg-black flex justify-between items-center px-6 z-10 text-white text-xs">
          <div>12:30</div>
          <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-white"></div>
            <div class="w-3 h-3 rounded-full bg-white"></div>
            <div class="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>
  
        <!-- Screen -->
        <div class="absolute top-6 inset-x-0 bottom-0 bg-gray-100 p-4 flex flex-col space-y-4">
          <!-- Samsung header -->
          <div class="flex justify-between items-center">
            <div class="text-lg font-bold text-blue-600">Samsung USSD</div>
            <div class="flex space-x-1">
              <div class="w-4 h-4 rounded-full bg-blue-600"></div>
              <div class="w-4 h-4 rounded-full bg-blue-400"></div>
            </div>
          </div>
  
          <!-- Display Area -->
          <div class="bg-white rounded-lg p-4 h-1/2 overflow-y-auto text-sm font-mono shadow-md border border-gray-300 flex-grow">
            <pre class="whitespace-pre-wrap">{{ sessionOutput }}</pre>
          </div>
  
          <!-- Input display -->
          <div class="bg-white p-3 rounded-lg border border-gray-300 shadow-sm text-center font-mono">
            {{ userInput || 'Enter USSD code' }}
          </div>
  
          <!-- Keypad -->
          <div class="grid grid-cols-3 gap-3 mt-2">
            <button
              v-for="btn in dialPad"
              :key="btn"
              @click="handleButtonClick(btn)"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg text-xl font-bold shadow-sm border border-gray-300 active:bg-gray-400 transition-colors"
            >
              {{ btn }}
            </button>
          </div>
  
          <!-- Action Buttons -->
          <div class="flex justify-between mt-2">
            <button 
              @click="sendInput"
              class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm w-1/2 mr-2 active:bg-green-700 transition-colors"
            >
              Send
            </button>
            <button 
              @click="resetSession"
              class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm w-1/2 ml-2 active:bg-red-700 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
  
        <!-- Navigation bar -->
        <div class="absolute bottom-0 w-full h-1 bg-gray-300"></div>
  
        <!-- Toast notification -->
        <div v-if="showToast" class="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm opacity-90 transition-opacity">
          {{ toastMessage }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sessionId: Date.now().toString(),
        userInput: '',
        sessionOutput: 'Dial *123# to begin.',
        showToast: false,
        toastMessage: '',
        dialPad: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'],
      }
    },
    methods: {
      handleButtonClick(value) {
        this.userInput += value;
      },
      displayToast(message) {
        this.toastMessage = message;
        this.showToast = true;
        setTimeout(() => this.showToast = false, 2000);
      },
      sendInput() {
        if (!this.userInput) return;
  
        let response = { message: 'Processing...' };
  
        if (this.userInput === '*123#') {
          response.message = 'Welcome to Mobile Banking\n1. Check Balance\n2. Send Money\n3. Buy Airtime\n4. Pay Bills\n0. Exit';
        } else if (this.userInput === '1') {
          response.message = 'Your balance is $1,250.00\n0. Back';
        } else if (this.userInput === '2') {
          response.message = 'Send Money\n1. To Mobile Number\n2. To Bank Account\n0. Back';
        } else if (this.userInput === '3') {
          response.message = 'Buy Airtime\n1. For Self\n2. For Others\n0. Back';
        } else if (this.userInput === '4') {
          response.message = 'Pay Bills\n1. Electricity\n2. Water\n3. TV Subscription\n0. Back';
        } else if (this.userInput === '0') {
          response.message = 'Thank you for using our service!';
        } else {
          response.message = 'Invalid option. Please try again.';
        }
  
        this.sessionOutput = response.message;
        this.userInput = '';
        this.displayToast('Request sent');
      },
      resetSession() {
        this.sessionId = Date.now().toString();
        this.userInput = '';
        this.sessionOutput = 'Dial *123# to begin.';
        this.displayToast('Session reset');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  