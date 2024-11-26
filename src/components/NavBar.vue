<script setup>
import { useDataStore } from '@/stores/StoreData.js'
import Search from "@/components/Search.vue";
const store = useDataStore()
</script>

<template>
  <header class="z-40 fixed top-0 left-0 w-full h-16 bg-white shadow-md shadow-secondary-50 overflow-hidden">
    <div class="container">
      <div class="flex items-center justify-end gap-8 h-16">
        <nav class="flex items-center gap-3 font-semibold text-lg text-secondary-950">
          <RouterLink to="/aboutUs" class="hover:text-primary-950 duration-150">
            about us
          </RouterLink>
          <RouterLink to="/news" class="hover:text-primary-950 duration-150">
            news
          </RouterLink>
          <RouterLink to="/" class="hover:text-primary-950 duration-150">
            home
          </RouterLink>
        </nav>
        <div class="flex gap-2 items-center">
          <h1 class="font-bold text-main-50 hidden md:block text-xl">DIYALA PRESS</h1>
          <img class="w-14 h-14" src="/p2.png" alt="">
        </div>
      </div>
    </div>
  </header>
  <Transition>
    <div v-if="store.openForm !== 0" class="fixed justify-center pt-20 flex top-0 left-0 z-50 w-full min-h-screen">
      <div @click="store.openForm = 0" class="w-full cursor-pointer absolute top-0 z-50 left-0 h-full bg-primary-300 backdrop-blur-sm"></div>
      <div class="bg-white duration-150 justify-center min-w-96 z-50 p-4 rounded h-fit">
        <Search v-if="store.openForm === 10" />
      </div>
    </div>
  </Transition>
</template>