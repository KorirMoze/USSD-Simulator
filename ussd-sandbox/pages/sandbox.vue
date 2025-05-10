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
            <Configuration />
            <!-- History Section -->
            <SessionHistory />
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
import Configuration from "../components/apiConfiguration.vue";
import SessionHistory from "../components/sessionHistory.vue";

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
function handleResize() {
  windowWidth.value = window.innerWidth;

  if (windowWidth.value < 1024) {
    if (sidebarOpen.value) sidebarOpen.value = false;
    if (userMenuOpen.value) userMenuOpen.value = false;
  }
}

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
