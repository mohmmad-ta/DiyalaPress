<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";
import { useDataStore } from '@/stores/StoreData.js'
import {ref} from "vue";
const store = useDataStore()

</script>

<template>
  <main class="">
    <header class="justify-center h-80 pt-10 flex items-center w-full relative">
      <div class="w-full absolute items-end top-0 left-0 h-full z-10 blur-sm bg-gradient-to-b from-main-200 to-main-500"></div>
      <div class="container gap-4 items-center h-full relative top-0 left-0 z-20 flex flex-wrap md:flex-nowrap">
        <h2 class="text-white font-bold mb-4 text-center w-full text-3xl md:text-5xl">{{ $t('about-us-title') }}</h2>
      </div>
    </header>
    <div class="container justify-center text-right gap-2 py-14">
      <h2 class="text-main-50 font-bold text-4xl">{{ $t('about-us-title2') }}</h2>
      <hr class="my-5">
      <div class="flex gap-6 flex-wrap md:flex-nowrap">
        <img class="w-96" src="/p1.png" alt="">
        <p class="text-secondary-950 text-xl my-3 font-semibold">{{ $t('about-us-content') }}</p>
      </div>
    </div>

  </main>
</template>