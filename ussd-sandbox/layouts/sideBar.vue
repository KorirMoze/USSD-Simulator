<template>
      <!-- Sidebar -->
    <aside 
      class="fixed  left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-50"
      :class="{ 'w-48 xl:w-48 2xl:w-48': sidebarOpen, 'w-0 -translate-x-full': !sidebarOpen }"
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

</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sidebarOpen = ref(true)
const windowWidth = ref(0) // default to 0

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value

  if (windowWidth.value < 1024 && sidebarOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}
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