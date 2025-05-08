<template>
    <aside
      class="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transition-all duration-300 ease-in-out"
      :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
    >
      <!-- Sidebar Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-800">
        <div class="flex items-center space-x-2">
          <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066
                     c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572
                     c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573
                     c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065
                     c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066
                     c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572
                     c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573
                     c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-lg font-semibold">USSD Simulator</span>
        </div>
        <button @click="toggleSidebar" class="p-1 rounded-md hover:bg-gray-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
  
      <!-- Navigation Links -->
      <nav class="p-4">
        <ul class="space-y-2">
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink
              :to="item.path"
              class="flex items-center px-4 py-3 rounded-lg transition-colors duration-200"
              :class="{
                'bg-purple-800 text-white': isActive(item.path),
                'hover:bg-gray-800 text-gray-300': !isActive(item.path)
              }"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
              </svg>
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
  
      <!-- Sidebar Footer -->
      <div class="absolute bottom-0 w-full p-4 border-t border-gray-800">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
            <span class="text-lg font-semibold">U</span>
          </div>
          <div>
            <p class="font-medium">Admin User</p>
            <p class="text-xs text-gray-400">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  
    <!-- Overlay -->
    <div v-if="isOpen"
         @click="toggleSidebar"
         class="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden">
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'nuxt/app' // ✅ Nuxt-specific composable
  
  const route = useRoute()
  const isOpen = ref(true)
  
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Simulator', path: '/simulator', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Templates', path: '/templates', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'History', path: '/history', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Settings', path: '/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
  ]
  
  const isActive = (path) => route.path === path
  </script>
  
  <style scoped>
  aside {
    will-change: transform;
  }
  </style>
  