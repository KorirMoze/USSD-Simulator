<template>
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
                    >Type</label
                  >
                  <select
                    id="network"
                    class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>GET</option>
                    <option>POST</option>

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
                    Save Endpoint
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

</template>
<script setup>
</script>