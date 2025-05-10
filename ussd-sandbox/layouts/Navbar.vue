<template>
     <!-- Header -->
    <header
      class="fixed top-0 right-0 z-40  bg-gray-700 shadow-sm transition-all duration-300 ease-in-out"
      :class="{
        'lg:w-[calc(100%-16rem)] xl:w-[calc(100%-18rem)] 2xl:w-[calc(100%-20rem)]': sidebarOpen,
        'lg:w-full': !sidebarOpen
      }"
    >
      <div class="mx-auto flex items-center justify-between px-4 py-3 lg:px-6 xl:px-8 2xl:px-10">
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

</template>
<script setup>
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