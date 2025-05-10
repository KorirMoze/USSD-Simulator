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

          <!-- Right Column (2/5) - Mobile Emulator -->
          <div class="lg:col-span-2 border-gray-900 shadow-2xl rounded-lg pt-8">
            <!-- Phone Emulator -->
            <div
              class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl ring-1 ring-gray-600 overflow-hidden max-w-xs mx-auto p-1"
            >
              <!-- Phone Top Bar -->
              <div
                class="bg-black text-white px-6 py-2 flex justify-between items-center"
              >
                <span class="text-xs">10:30</span>
                <div
                  class="w-16 h-6 bg-black rounded-full mx-auto relative flex items-center"
                >
                  <div
                    class="w-2 h-2 bg-gray-600 rounded-full absolute left-1.5"
                  ></div>
                  <div
                    class="w-12 h-1 bg-gray-600 rounded-full absolute left-4"
                  ></div>
                </div>
                <!-- Network Signal Bars -->
                <div class="flex gap-[2px]">
                  <div class="w-1 h-1 bg-white rounded-sm"></div>
                  <div class="w-1 h-2 bg-white rounded-sm"></div>
                  <div class="w-1 h-3 bg-white rounded-sm"></div>
                  <div class="w-1 h-4 bg-white rounded-sm"></div>
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
              <div class="bg-gray-100 p-2 h-96 flex flex-col">
                <!-- Screen Header -->
                <div class="bg-gray-200  text-center rounded-t-lg">
                  <span class="text-sm font-semibold">USSD</span>
                </div>

                <!-- Screen Content -->
                <div
                  class="flex-1 bg-white p-4 text-center flex flex-col justify-between"
                >
                  <div class="text-left flex-1">
                    <p class="text-sm font-medium mb-2">
                      Welcome to USSD Simulator
                    </p>
                    <div v-if="sessionOutput">{{ sessionOutput }}</div>

                    {{ userInput }}
                  </div>
                </div>
      
                                <div class="bg-gray-200 p-2 text-center rounded-t-lg">
                  <span class="text-sm font-semibold">{{ userInput }}</span>
                </div>
              </div>
              <!-- Dial Pad -->
              <div class="bg-gray-700 p-4 grid grid-cols-3 gap-2">
                <div
                  v-for="btn in buttons"
                  :key="btn.label"
                  @click="append(btn.label)"
                  class="cursor-pointer text-white text-center"
                >
                  <div>{{ btn.label }}</div>
                  <div class="text-xs font-light text-grey-300">
                    {{ btn.sub }}
                  </div>
                </div>
              </div>
              <!-- Action Buttons -->
              <div class="flex justify-between items-center mt-2 pr-4 pl-4">
                <button class="text-purple-300 opacity-50">
                  <!-- Video call icon (disabled) -->
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17 10.5V6c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z"
                    />
                  </svg>
                </button>

                <button
                  @click="sendRequest"
                  class="bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <!-- Call Button -->
                  <svg
                    class="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.21 1.11z"
                    />
                  </svg>
                </button>

                <button
                  @click="remove"
                  class="text-white hover:text-purple-300 transition-colors"
                >
                  <!-- Backspace -->
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M22 6H12l-1.41 1.41L8.17 10l2.42 2.59L12 14h10V6zm-3 5l-1.41 1.41L16.17 11l1.42-1.41L19 11z"
                    />
                  </svg>
                </button>
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
import { ref, watch, onMounted, onUnmounted } from "vue";
import Sidebar from "../layouts/sideBar.vue";
import Navbar from "../layouts/Navbar.vue";

// State
const sidebarOpen = ref(true);
const userMenuOpen = ref(false);
const windowWidth = ref(0); // default to 0
const userInput = ref("");
const sessionOutput = ref("");
const ussdCode = ref("");
const phoneNumber = ref("");
const network = ref("");
const apiEndpoint = ref("");

const buttons = [
  { label: "1", sub: "✉️" },
  { label: "2", sub: "ABC" },
  { label: "3", sub: "DEF" },
  { label: "4", sub: "GHI" },
  { label: "5", sub: "JKL" },
  { label: "6", sub: "MNO" },
  { label: "7", sub: "PQRS" },
  { label: "8", sub: "TUV" },
  { label: "9", sub: "WXYZ" },
  { label: "*", sub: "" },
  { label: "0", sub: "+" },
  { label: "#", sub: "" },
];

const append = (val) => {
  userInput.value += val;
};

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

const remove = () => {
  userInput.value = userInput.value.slice(0, -1);
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

const sendRequest = async () => {
  if (!apiEndpoint.value || !ussdCode.value || !phoneNumber.value) {
    sessionOutput.value = "Missing required fields.";
    return;
  }

  try {
    const response = await fetch(apiEndpoint.value, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ussdCode: ussdCode.value,
        phoneNumber: phoneNumber.value,
        network: network.value,
        input: userInput.value,
      }),
    });

    const data = await response.json();
    sessionOutput.value = data.message || "No response received.";
    userInput.value = "";
  } catch (error) {
    sessionOutput.value = `Request failed: ${error.message}`;
  }
};
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
