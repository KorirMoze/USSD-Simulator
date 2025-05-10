<template>
  <div class="app-container">
    <Sidebar />

    <div class="mt-16 mb-">
      <Navbar />
    </div>
    <!-- Main Content -->
    <main
      class="transition-all duration-300 ease-in-out pt-16"
      :class="{
        'lg:ml-64 xl:ml-72 2xl:ml-80': sidebarOpen,
        'ml-0': !sidebarOpen,
      }"
    >
      <div class="px-4 py-6 lg:px-6 xl:px-8 2xl:px-10 max-w-7xl mx-auto">
        <!-- Content Header -->
        <div class="mb-6">
          <h1 class="text-2xl font-bold text-gray-900">USSD Simulator</h1>
          <p class="text-gray-500 mt-1">
            Test your USSD flows with this interactive simulator.
          </p>
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
                  <label
                    for="ussd-code"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >USSD Code</label
                  >
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                      <span class="text-gray-500 sm:text-sm">*</span>
                    </div>
                    <input
                      type="text"
                      id="ussd-code"
                      class="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="123*1#"
                    />
                    <div
                      class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                    >
                      <span class="text-gray-500 sm:text-sm">#</span>
                    </div>
                  </div>
                </div>

                <!-- Phone Number Input -->
                <div>
                  <label
                    for="phone-number"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Phone Number</label
                  >
                  <input
                    type="text"
                    id="phone-number"
                    class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="+1234567890"
                  />
                </div>

                <!-- Network Select -->
                <div>
                  <label
                    for="network"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Network</label
                  >
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
                  <label
                    for="api-endpoint"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >API Endpoint</label
                  >
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
              <div
                class="px-4 py-3 border-b border-gray-200 flex justify-between items-center"
              >
                <h2 class="font-semibold text-lg">Session History</h2>
                <button class="text-sm text-purple-600 hover:text-purple-800">
                  Clear All
                </button>
              </div>
              <div class="p-4">
                <div
                  class="overflow-hidden bg-gray-50 border border-gray-200 rounded-md"
                >
                  <div class="px-4 py-2 border-b border-gray-200 bg-gray-100">
                    <div class="flex justify-between items-center">
                      <span class="text-sm font-medium text-gray-600"
                        >*123*1#</span
                      >
                      <span class="text-xs text-gray-500">10:25 AM</span>
                    </div>
                  </div>
                  <div class="p-4 space-y-4">
                    <div class="space-y-2">
                      <div
                        class="bg-gray-200 rounded-lg p-3 text-sm inline-block max-w-[80%]"
                      >
                        Welcome to Mobile Banking
                        <br />1. Check Balance <br />2. Send Money <br />3. Buy
                        Airtime <br />4. Pay Bills
                      </div>
                      <div class="flex justify-between items-center">
                        <div
                          class="bg-purple-100 rounded-lg p-3 text-sm inline-block max-w-[80%] ml-auto"
                        >
                          1
                        </div>
                      </div>
                      <div
                        class="bg-gray-200 rounded-lg p-3 text-sm inline-block max-w-[80%]"
                      >
                        Your current balance is $1,245.67
                        <br />0. Back to Main Menu <br />9. Exit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<Simulator /> 

        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import Sidebar from "../layouts/sideBar.vue";
import Navbar from "../layouts/Navbar.vue";
import Simulator from "../components/phoneSimulator.vue";

// State
const sidebarOpen = ref(true);
const userMenuOpen = ref(false);
const windowWidth = ref(0); // default to 0

const ussdCode = ref("");
const phoneNumber = ref("");
const network = ref("");
const apiEndpoint = ref("");





// Toggle user menu
const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value;
};

// Close user menu when clicking outside
const handleClickOutside = (event) => {
  const userMenuButton = document.querySelector("button");
  const userMenu = document.querySelector(".dropdown");

  if (
    userMenuOpen.value &&
    userMenuButton &&
    userMenu &&
    !userMenuButton.contains(event.target) &&
    !userMenu.contains(event.target)
  ) {
    userMenuOpen.value = false;
  }
};


// Update window width on resize
const handleResize = () => {
  windowWidth.value = window.innerWidth;

  if (windowWidth.value < 1024) {
    if (sidebarOpen.value) sidebarOpen.value = false;
    if (userMenuOpen.value) userMenuOpen.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  windowWidth.value = window.innerWidth; // ← safe here
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("resize", handleResize);

  if (windowWidth.value < 1024) {
    sidebarOpen.value = false;
  }
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleResize);
  document.body.style.overflow = "";
});

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
