<template>
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
          <div class="w-2 h-2 bg-gray-600 rounded-full absolute left-1.5"></div>
          <div class="w-12 h-1 bg-gray-600 rounded-full absolute left-4"></div>
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
        <div class="bg-gray-200 text-center rounded-t-lg">
          <span class="text-sm font-semibold">Welcome to USSD Simulator</span>
        </div>

        <!-- Screen Content -->
        <div
          class="flex-1 bg-white p-4 text-center flex flex-col justify-between"
        >
          <div class="text-left flex-1">
            <div v-if="sessionOutput">{{ sessionOutput }}</div>
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
          class="cursor-pointer text-white text-center hover:bg-gray-600 rounded-md"
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
          class="bg-purple-500 p-2 rounded-full hover:bg-purple-600 active:translate-y-0.5 active:scale-95 transition transform duration-100"
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
</template>
<script setup>
import { ref, onMounted } from "vue";

const userInput = ref("");
const sessionOutput = ref("");
const windowWidth = ref(0); // default to 0

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
const remove = () => {
  userInput.value = userInput.value.slice(0, -1);
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