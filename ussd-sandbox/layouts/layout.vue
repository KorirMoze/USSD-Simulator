<template>
  <div class="app-container">
    <!-- Sidebar -->
    <aside 
      class="fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-50"
      :class="{ 'w-64 xl:w-72 2xl:w-80': sidebarOpen, 'w-0 -translate-x-full': !sidebarOpen }"
    >
      <!-- Sidebar Content -->
      <div class="h-full flex flex-col">
        <!-- Logo -->
        <div class="flex items-center justify-between p-4 border-b border-gray-800">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
              <span class="text-white font-bold">U</span>
            </div>
            <h1 class="text-xl font-bold">USSD Tools</h1>
          </div>
          <button @click="toggleSidebar" class="p-2 text-gray-400 hover:text-white lg:hidden">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Navigation Links -->
        <nav class="flex-1 pt-4 overflow-y-auto">
          <div class="px-4 mb-4">
            <h2 class="text-xs uppercase text-gray-500 font-medium tracking-wider">Main</h2>
          </div>
          <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </div>
          </a>
          <a href="#" class="block py-2 px-4 bg-gray-800 text-white">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>USSD Simulator</span>
            </div>
          </a>
          <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Analytics</span>
            </div>
          </a>
          
          <div class="px-4 mb-4 mt-6">
            <h2 class="text-xs uppercase text-gray-500 font-medium tracking-wider">Configuration</h2>
          </div>
          <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </div>
          </a>
          <a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span>API Configuration</span>
            </div>
          </a>
        </nav>
        
        <!-- User Info -->
        <div class="p-4 border-t border-gray-800">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
              <span class="text-white font-semibold">AU</span>
            </div>
            <div>
              <h3 class="text-sm font-medium">Admin User</h3>
              <p class="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Header -->
    <header
      class="fixed top-0 right-0 z-40 w-full bg-white shadow-sm transition-all duration-300 ease-in-out"
      :class="{
        'lg:w-[calc(100%-16rem)] xl:w-[calc(100%-18rem)] 2xl:w-[calc(100%-20rem)]': sidebarOpen,
        'lg:w-full': !sidebarOpen
      }"
    >
      <div class="w-full mx-auto flex items-center justify-between px-4 py-3 lg:px-6 xl:px-8 2xl:px-10">
        <!-- Left Section - Hamburger Menu and Breadcrumbs -->
        <div class="flex items-center space-x-2 lg:space-x-4">
          <!-- Hamburger Menu (visible on mobile and when sidebar is closed on desktop) -->
          <button
            @click="toggleSidebar"
            class="p-2 rounded-md text-gray-700 hover:bg-gray-100 lg:hidden"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Toggle Sidebar Button (visible only on desktop) -->
          <button
            @click="toggleSidebar"
            class="hidden lg:block p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="sidebarOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Breadcrumbs -->
          <div class="hidden md:flex items-center space-x-2 text-sm lg:text-base">
            <span class="text-gray-500">Dashboard</span>
            <span class="text-gray-300">/</span>
            <span class="text-gray-700 font-medium">USSD Simulator</span>
          </div>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-2 lg:space-x-4">
          <!-- Search Bar -->
          <div class="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              class="pl-10 pr-4 py-2 w-64 lg:w-72 xl:w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Notifications -->
          <button class="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative">
            <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- User Menu -->
          <div class="relative">
            <button @click="toggleUserMenu" class="flex items-center space-x-2 focus:outline-none">
              <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-purple-600 flex items-center justify-center">
                <span class="text-white text-sm lg:text-base font-semibold">AU</span>
              </div>
              <span class="hidden md:inline-block text-sm lg:text-base font-medium text-gray-700">Admin User</span>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="userMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 dropdown"
            >
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main 
      class="transition-all duration-300 ease-in-out pt-16"
      :class="{
        'lg:ml-64 xl:ml-72 2xl:ml-80': sidebarOpen,
        'ml-0': !sidebarOpen
      }"
    >
      <div class="px-4 py-6 lg:px-6 xl:px-8 2xl:px-10 max-w-7xl mx-auto">
        <!-- Content Header -->
        <div class="mb-6">
          <h1 class="text-2xl font-bold text-gray-900">USSD Simulator</h1>
          <p class="text-gray-500 mt-1">Test your USSD flows with this interactive simulator.</p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <!-- Left Column (3/5) - Config and History -->
          <div class="lg:col-span-3 space-y-6">
            <!-- Configuration Section -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200">
              <div class="px-4 py-3 border-b border-gray-200">
                <h2 class="font-semibold text-lg">Configuration</h2>
              </div>
              <div class="p-4 space-y-4">
                <!-- USSD Code Input -->
                <div>
                  <label for="ussd-code" class="block text-sm font-medium text-gray-700 mb-1">USSD Code</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span class="text-gray-500 sm:text-sm">*</span>
                    </div>
                    <input
                      type="text"
                      id="ussd-code"
                      class="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="123*1#"
                    />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span class="text-gray-500 sm:text-sm">#</span>
                    </div>
                  </div>
                </div>
                
                <!-- Phone Number Input -->
                <div>
                  <label for="phone-number" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    id="phone-number"
                    class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="+1234567890"
                  />
                </div>
                
                <!-- Network Select -->
                <div>
                  <label for="network" class="block text-sm font-medium text-gray-700 mb-1">Network</label>
                  <select
                    id="network"
                    class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Vodafone</option>
                    <option>MTN</option>
                    <option>Airtel</option>
                    <option>T-Mobile</option>
                  </select>
                </div>
                
                <!-- API Endpoint Input -->
                <div>
                  <label for="api-endpoint" class="block text-sm font-medium text-gray-700 mb-1">API Endpoint</label>
                  <input
                    type="text"
                    id="api-endpoint"
                    class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="https://api.example.com/ussd"
                  />
                </div>
                
                <!-- Buttons -->
                <div class="flex space-x-3 pt-2">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Start Session
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            
            <!-- History Section -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200">
              <div class="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h2 class="font-semibold text-lg">Session History</h2>
                <button class="text-sm text-purple-600 hover:text-purple-800">Clear All</button>
              </div>
              <div class="p-4">
                <div class="overflow-hidden bg-gray-50 border border-gray-200 rounded-md">
                  <div class="px-4 py-2 border-b border-gray-200 bg-gray-100">
                    <div class="flex justify-between items-center">
                      <span class="text-sm font-medium text-gray-600">*123*1#</span>
                      <span class="text-xs text-gray-500">10:25 AM</span>
                    </div>
                  </div>
                  <div class="p-4 space-y-4">
                    <div class="space-y-2">
                      <div class="bg-gray-200 rounded-lg p-3 text-sm inline-block max-w-[80%]">
                        Welcome to Mobile Banking
                        <br>1. Check Balance
                        <br>2. Send Money
                        <br>3. Buy Airtime
                        <br>4. Pay Bills
                      </div>
                      <div class="flex justify-between items-center">
                        <div class="bg-purple-100 rounded-lg p-3 text-sm inline-block max-w-[80%] ml-auto">
                          1
                        </div>
                      </div>
                      <div class="bg-gray-200 rounded-lg p-3 text-sm inline-block max-w-[80%]">
                        Your current balance is $1,245.67
                        <br>0. Back to Main Menu
                        <br>9. Exit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Column (2/5) - Mobile Emulator -->
          <div class="lg:col-span-2">
            <!-- Phone Emulator -->
            <div class="bg-gray-800 rounded-3xl shadow-lg overflow-hidden max-w-xs mx-auto">
              <!-- Phone Top Bar -->
              <div class="bg-black text-white px-6 py-2 flex justify-between items-center">
                <span class="text-xs">10:30</span>
                <div class="w-16 h-6 bg-black rounded-full mx-auto relative flex items-center">
                  <div class="w-2 h-2 bg-gray-600 rounded-full absolute left-1.5"></div>
                  <div class="w-12 h-1 bg-gray-600 rounded-full absolute left-4"></div>
                </div>
                <div class="flex space-x-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 18v-6m0 0V6m0 6h6m-6 0H6"></path>
                  </svg>
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              
              <!-- Phone Screen -->
              <div class="bg-gray-100 p-4 h-96 flex flex-col">
                <!-- Screen Header -->
                <div class="bg-gray-200 p-2 text-center rounded-t-lg">
                  <span class="text-sm font-semibold">USSD</span>
                </div>
                
                <!-- Screen Content -->
                <div class="flex-1 bg-white p-4 text-center flex flex-col justify-between">
                  <div class="text-left flex-1">
                    <p class="text-sm font-medium mb-2">Welcome to Mobile Banking</p>
                    <p class="text-sm">1. Check Balance</p>
                    <p class="text-sm">2. Send Money</p>
                    <p class="text-sm">3. Buy Airtime</p>
                    <p class="text-sm">4. Pay Bills</p>
                  </div>
                  
                  <!-- Input Field -->
                  <div>
                    <input
                      type="text"
                      class="w-full border border-gray-400 p-2 text-center text-sm rounded"
                      placeholder="Enter response"
                    />
                  </div>
                </div>
                
                <!-- Screen Footer -->
                <div class="bg-gray-200 p-2 flex justify-between items-center rounded-b-lg">
                  <button class="px-3 py-1 bg-red-500 text-white text-xs rounded">Cancel</button>
                  <button class="px-3 py-1 bg-green-500 text-white text-xs rounded">Send</button>
                </div>
              </div>
              
              <!-- Phone Keypad -->
              <div class="bg-gray-700 p-4 grid grid-cols-3 gap-2">
                <button class="bg-gray-600 text-white p-2 rounded text-center">1</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">2</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">3</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">4</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">5</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">6</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">7</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">8</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">9</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">*</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">0</button>
                <button class="bg-gray-600 text-white p-2 rounded text-center">#</button>
              </div>
              
              <!-- Phone Bottom Bar -->
              <div class="bg-black px-4 py-2 flex justify-center">
                <div class="w-24 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

// State
const sidebarOpen = ref(true)
const userMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

// Toggle sidebar
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  
  // Automatically close sidebar on small screens
  if (windowWidth.value < 1024 && sidebarOpen.value) {
    document.body.style.overflow = 'hidden'  // Prevent scrolling when sidebar is open on mobile
  } else {
    document.body.style.overflow = ''
  }
}

// Toggle user menu
const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value
}

// Close user menu when clicking outside
const handleClickOutside = (event) => {
  const userMenuButton = document.querySelector('button')
  const userMenu = document.querySelector('.dropdown')
  
  if (userMenuOpen.value && 
      userMenuButton && 
      userMenu && 
      !userMenuButton.contains(event.target) && 
      !userMenu.contains(event.target)) {
    userMenuOpen.value = false
  }
}

// Update window width on resize
const handleResize = () => {
  windowWidth.value = window.innerWidth
  
  // Auto-close sidebars/menus on small screens
  if (windowWidth.value < 1024) {
    if (sidebarOpen.value) {
      sidebarOpen.value = false
    }
    if (userMenuOpen.value) {
      userMenuOpen.value = false
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
  
  // Initialize based on screen size
  if (windowWidth.value < 1024) {
    sidebarOpen.value = false
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Transition Effects */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Better UX on large screens */
@media (min-width: 2560px) {
  .app-container {
    max-width: 2560px;
    margin-left: auto;
    margin-right: auto;
  }
}

/* Prevent content from stretching too wide on large screens */
main {
  min-height: calc(100vh - 64px);
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* Prevent USSD emulator from overscaling on larger screens */
@media (min-width: 1536px) {
  .phone-container {
    transform-origin: top center;
    margin: 0 auto;
  }
}
</style>