<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";
import { useDataStore } from '@/stores/StoreData.js'
import {ref} from "vue";
const store = useDataStore()

</script>

<template>
  <main class="mb-6">
    <header class="justify-center h-80 pt-10 flex items-center w-full relative">
      <div class="w-full absolute items-end top-0 left-0 h-full z-10 blur-sm bg-gradient-to-b from-main-200 to-main-500"></div>
      <div class="container gap-4 items-center h-full relative top-0 left-0 z-20 flex flex-wrap md:flex-nowrap">
        <h2 class="text-white font-bold mb-4 text-center w-full text-3xl md:text-5xl">About us</h2>
      </div>
    </header>
    <div class="container justify-center flex flex-wrap lg:flex-nowrap gap-2 py-14">
      <div class="bg-primary-950 mb-10 w-full lg:w-96 h-fit px-3 py-10 text-center rounded-md">
        <h2 class="text-main-50 font-bold text-4xl">Lorem ipsum dolor sit amet</h2>
        <p class="text-secondary-950 my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad enim exercitationem, laborum molestiae quo saepe sint. Aliquid delectus harum, ipsum maiores maxime odio placeat possimus praesentium reprehenderit soluta totam.</p>
        <RouterLink to="/problem">
          <button type="button" class="border-main-50 border-2 rounded py-1 px-3 duration-150 hover:bg-main-50 text-white">add</button>
        </RouterLink>
      </div>
    </div>

  </main>
</template>