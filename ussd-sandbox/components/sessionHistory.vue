<template>
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
</template>