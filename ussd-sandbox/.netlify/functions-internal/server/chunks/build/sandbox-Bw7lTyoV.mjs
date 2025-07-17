import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$5 = {
  __name: "sideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarOpen = ref(true);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["fixed left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-50", { "w-48 xl:w-48 2xl:w-48": sidebarOpen.value, "w-0 -translate-x-full": !sidebarOpen.value }]
      }, _attrs))} data-v-c5bd1b67><div class="h-full flex flex-col" data-v-c5bd1b67><div class="flex items-center justify-between p-4 border-b border-gray-800" data-v-c5bd1b67><div class="flex items-center space-x-3" data-v-c5bd1b67><div class="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center" data-v-c5bd1b67><span class="text-white font-bold" data-v-c5bd1b67>U</span></div><h1 class="text-xl font-bold" data-v-c5bd1b67>USSD Tools</h1></div><button class="p-2 text-gray-400 hover:text-white lg:hidden" data-v-c5bd1b67><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c5bd1b67><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-c5bd1b67></path></svg></button></div><nav class="flex-1 pt-4 overflow-y-auto" data-v-c5bd1b67><div class="px-4 mb-4" data-v-c5bd1b67><h2 class="text-xs uppercase text-gray-500 font-medium tracking-wider" data-v-c5bd1b67>Main</h2></div><a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white" data-v-c5bd1b67><div class="flex items-center space-x-3" data-v-c5bd1b67><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c5bd1b67><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-c5bd1b67></path></svg><span data-v-c5bd1b67>Dashboard</span></div></a><a href="#" class="block py-2 px-4 bg-gray-800 text-white" data-v-c5bd1b67><div class="flex items-center space-x-3" data-v-c5bd1b67><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c5bd1b67><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-v-c5bd1b67></path></svg><span data-v-c5bd1b67>USSD Simulator</span></div></a><a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white" data-v-c5bd1b67><div class="flex items-center space-x-3" data-v-c5bd1b67><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c5bd1b67><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-c5bd1b67></path></svg><span data-v-c5bd1b67>Analytics</span></div></a><div class="px-4 mb-4 mt-6" data-v-c5bd1b67><h2 class="text-xs uppercase text-gray-500 font-medium tracking-wider" data-v-c5bd1b67>Configuration</h2></div><a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white" data-v-c5bd1b67><div class="flex items-center space-x-3" data-v-c5bd1b67><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c5bd1b67><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-c5bd1b67></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-c5bd1b67></path></svg><span data-v-c5bd1b67>Settings</span></div></a><a href="#" class="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white" data-v-c5bd1b67><div class="flex items-center space-x-3" data-v-c5bd1b67><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-c5bd1b67><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" data-v-c5bd1b67></path></svg><span data-v-c5bd1b67>API Configuration</span></div></a></nav><div class="p-4 border-t border-gray-800" data-v-c5bd1b67><div class="flex items-center space-x-3" data-v-c5bd1b67><div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center" data-v-c5bd1b67><span class="text-white font-semibold" data-v-c5bd1b67>AU</span></div><div data-v-c5bd1b67><h3 class="text-sm font-medium" data-v-c5bd1b67>Admin User</h3><p class="text-xs text-gray-400" data-v-c5bd1b67>admin@example.com</p></div></div></div></div></aside>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/sideBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c5bd1b67"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({
    class: ["fixed top-0 right-0 z-40 bg-gray-700 shadow-sm transition-all duration-300 ease-in-out", {
      "lg:w-[calc(100%-16rem)] xl:w-[calc(100%-18rem)] 2xl:w-[calc(100%-20rem)]": _ctx.sidebarOpen,
      "lg:w-full": !_ctx.sidebarOpen
    }]
  }, _attrs))} data-v-ffdf10a5><div class="mx-auto flex items-center justify-between px-4 py-3 lg:px-6 xl:px-8 2xl:px-10" data-v-ffdf10a5><div class="flex items-center space-x-2 lg:space-x-4" data-v-ffdf10a5><button class="p-2 rounded-md text-gray-700 hover:bg-gray-100 lg:hidden" data-v-ffdf10a5><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ffdf10a5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-ffdf10a5></path></svg></button><button class="hidden lg:block p-2 rounded-md text-gray-700 hover:bg-gray-100" data-v-ffdf10a5><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ffdf10a5>`);
  if (_ctx.sidebarOpen) {
    _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" data-v-ffdf10a5></path>`);
  } else {
    _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" data-v-ffdf10a5></path>`);
  }
  _push(`</svg></button><div class="hidden md:flex items-center space-x-2 text-sm lg:text-base" data-v-ffdf10a5><span class="text-gray-500" data-v-ffdf10a5>Dashboard</span><span class="text-gray-300" data-v-ffdf10a5>/</span><span class="text-gray-700 font-medium" data-v-ffdf10a5>USSD Simulator</span></div></div><div class="flex items-center space-x-2 lg:space-x-4" data-v-ffdf10a5><div class="relative hidden md:block" data-v-ffdf10a5><input type="text" placeholder="Search..." class="pl-10 pr-4 py-2 w-64 lg:w-72 xl:w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" data-v-ffdf10a5><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-v-ffdf10a5><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ffdf10a5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-ffdf10a5></path></svg></div></div><button class="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative" data-v-ffdf10a5><svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ffdf10a5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" data-v-ffdf10a5></path></svg><span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" data-v-ffdf10a5></span></button><div class="relative" data-v-ffdf10a5><button class="flex items-center space-x-2 focus:outline-none" data-v-ffdf10a5><div class="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-purple-600 flex items-center justify-center" data-v-ffdf10a5><span class="text-white text-sm lg:text-base font-semibold" data-v-ffdf10a5>AU</span></div><span class="hidden md:inline-block text-sm lg:text-base font-medium text-gray-700" data-v-ffdf10a5>Admin User</span><svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ffdf10a5><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-ffdf10a5></path></svg></button>`);
  if (_ctx.userMenuOpen) {
    _push(`<div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 dropdown" data-v-ffdf10a5><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-v-ffdf10a5>Your Profile</a><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-v-ffdf10a5>Settings</a><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-v-ffdf10a5>Sign out</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></header>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Navbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ffdf10a5"]]);
const _sfc_main$3 = {
  __name: "phoneSimulator",
  __ssrInlineRender: true,
  setup(__props) {
    const userInput = ref("");
    const sessionOutput = ref("");
    ref(0);
    const buttons = [
      { label: "1", sub: "\u2709\uFE0F" },
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
      { label: "#", sub: "" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-2 border-gray-900 shadow-2xl rounded-lg pt-8" }, _attrs))} data-v-2afb0ce3><div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl ring-1 ring-gray-600 overflow-hidden max-w-xs mx-auto p-1" data-v-2afb0ce3><div class="bg-black text-white px-6 py-2 flex justify-between items-center" data-v-2afb0ce3><span class="text-xs" data-v-2afb0ce3>10:30</span><div class="w-16 h-6 bg-black rounded-full mx-auto relative flex items-center" data-v-2afb0ce3><div class="w-2 h-2 bg-gray-600 rounded-full absolute left-1.5" data-v-2afb0ce3></div><div class="w-12 h-1 bg-gray-600 rounded-full absolute left-4" data-v-2afb0ce3></div></div><div class="flex gap-[2px]" data-v-2afb0ce3><div class="w-1 h-1 bg-white rounded-sm" data-v-2afb0ce3></div><div class="w-1 h-2 bg-white rounded-sm" data-v-2afb0ce3></div><div class="w-1 h-3 bg-white rounded-sm" data-v-2afb0ce3></div><div class="w-1 h-4 bg-white rounded-sm" data-v-2afb0ce3></div></div><div class="flex space-x-1" data-v-2afb0ce3><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" data-v-2afb0ce3><path d="M12 18v-6m0 0V6m0 6h6m-6 0H6" data-v-2afb0ce3></path></svg><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" data-v-2afb0ce3><path d="M13 10V3L4 14h7v7l9-11h-7z" data-v-2afb0ce3></path></svg></div></div><div class="bg-gray-100 p-2 h-96 flex flex-col" data-v-2afb0ce3><div class="bg-gray-200 text-center rounded-t-lg" data-v-2afb0ce3><span class="text-sm font-semibold" data-v-2afb0ce3>Welcome to USSD Simulator</span></div><div class="flex-1 bg-white p-4 text-center flex flex-col justify-between" data-v-2afb0ce3><div class="text-left flex-1" data-v-2afb0ce3>`);
      if (sessionOutput.value) {
        _push(`<div data-v-2afb0ce3>${ssrInterpolate(sessionOutput.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-gray-200 p-2 text-center rounded-t-lg" data-v-2afb0ce3><span class="text-sm font-semibold" data-v-2afb0ce3>${ssrInterpolate(userInput.value)}</span></div></div><div class="bg-gray-700 p-4 grid grid-cols-3 gap-2" data-v-2afb0ce3><!--[-->`);
      ssrRenderList(buttons, (btn) => {
        _push(`<div class="cursor-pointer text-white text-center hover:bg-gray-600 rounded-md" data-v-2afb0ce3><div data-v-2afb0ce3>${ssrInterpolate(btn.label)}</div><div class="text-xs font-light text-grey-300" data-v-2afb0ce3>${ssrInterpolate(btn.sub)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-between items-center mt-2 pr-4 pl-4" data-v-2afb0ce3><button class="text-purple-300 opacity-50" data-v-2afb0ce3><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-2afb0ce3><path d="M17 10.5V6c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z" data-v-2afb0ce3></path></svg></button><button class="bg-purple-500 p-2 rounded-full hover:bg-purple-600 active:translate-y-0.5 active:scale-95 transition transform duration-100" data-v-2afb0ce3><svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16" data-v-2afb0ce3><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.21 1.11z" data-v-2afb0ce3></path></svg></button><button class="text-white hover:text-purple-300 transition-colors" data-v-2afb0ce3><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-2afb0ce3><path d="M22 6H12l-1.41 1.41L8.17 10l2.42 2.59L12 14h10V6zm-3 5l-1.41 1.41L16.17 11l1.42-1.41L19 11z" data-v-2afb0ce3></path></svg></button></div><div class="bg-black px-4 py-2 flex justify-center" data-v-2afb0ce3><div class="w-24 h-1 bg-gray-600 rounded-full" data-v-2afb0ce3></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/phoneSimulator.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Simulator = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2afb0ce3"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-sm border border-gray-200" }, _attrs))}><div class="px-4 py-3 border-b border-gray-200"><h2 class="font-semibold text-lg">Configuration</h2></div><div class="p-4 space-y-4"><div><label for="ussd-code" class="block text-sm font-medium text-gray-700 mb-1">USSD Code</label><div class="mt-1 relative rounded-md shadow-sm"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500 sm:text-sm">*</span></div><input type="text" id="ussd-code" class="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="123*1#"><div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><span class="text-gray-500 sm:text-sm">#</span></div></div></div><div><label for="phone-number" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label><input type="text" id="phone-number" class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="+1234567890"></div><div><label for="network" class="block text-sm font-medium text-gray-700 mb-1">Type</label><select id="network" class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"><option>GET</option><option>POST</option></select></div><div><label for="api-endpoint" class="block text-sm font-medium text-gray-700 mb-1">API Endpoint</label><input type="text" id="api-endpoint" class="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="https://api.example.com/ussd"></div><div class="flex space-x-3 pt-2"><button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"> Save Endpoint </button><button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"> Clear </button></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apiConfiguration.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Configuration = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-sm border border-gray-200" }, _attrs))}><div class="px-4 py-3 border-b border-gray-200 flex justify-between items-center"><h2 class="font-semibold text-lg">Session History</h2><button class="text-sm text-purple-600 hover:text-purple-800"> Clear All </button></div><div class="p-4"><div class="overflow-hidden bg-gray-50 border border-gray-200 rounded-md"><div class="px-4 py-2 border-b border-gray-200 bg-gray-100"><div class="flex justify-between items-center"><span class="text-sm font-medium text-gray-600">*123*1#</span><span class="text-xs text-gray-500">10:25 AM</span></div></div><div class="p-4 space-y-4"><div class="space-y-2"><div class="bg-gray-200 rounded-lg p-3 text-sm inline-block max-w-[80%]"> Welcome to Mobile Banking <br>1. Check Balance <br>2. Send Money <br>3. Buy Airtime <br>4. Pay Bills </div><div class="flex justify-between items-center"><div class="bg-purple-100 rounded-lg p-3 text-sm inline-block max-w-[80%] ml-auto"> 1 </div></div><div class="bg-gray-200 rounded-lg p-3 text-sm inline-block max-w-[80%]"> Your current balance is $1,245.67 <br>0. Back to Main Menu <br>9. Exit </div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sessionHistory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SessionHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "sandbox",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarOpen = ref(true);
    ref(false);
    ref(0);
    ref("");
    ref("");
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container flex-col" }, _attrs))} data-v-bc0a4ae8>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<div class="mt-16 mb-" data-v-bc0a4ae8>`);
      _push(ssrRenderComponent(Sidebar, {
        isOpen: sidebarOpen.value,
        onToggle: _ctx.toggleSidebar
      }, null, _parent));
      _push(`</div><main class="${ssrRenderClass([{
        "lg:ml-64 xl:ml-72 2xl:ml-80": sidebarOpen.value,
        "ml-0": !sidebarOpen.value
      }, "transition-all duration-300 ease-in-out pt-16"])}" data-v-bc0a4ae8><div class="px-4 py-6 lg:px-6 xl:px-8 2xl:px-10 max-w-7xl mx-auto" data-v-bc0a4ae8><div class="mb-6" data-v-bc0a4ae8><h1 class="text-2xl font-bold text-gray-900" data-v-bc0a4ae8>USSD Simulator</h1><p class="text-gray-500 mt-1" data-v-bc0a4ae8> Test your USSD flows with this interactive simulator. </p></div><div class="grid grid-cols-1 lg:grid-cols-5 gap-6" data-v-bc0a4ae8><div class="lg:col-span-3 space-y-6" data-v-bc0a4ae8>`);
      _push(ssrRenderComponent(Configuration, null, null, _parent));
      _push(ssrRenderComponent(SessionHistory, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Simulator, null, null, _parent));
      _push(`</div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sandbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc0a4ae8"]]);

export { MainPage as default };
//# sourceMappingURL=sandbox-Bw7lTyoV.mjs.map
