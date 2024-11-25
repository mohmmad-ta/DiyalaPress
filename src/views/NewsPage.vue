<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";
import {onMounted, onUnmounted, ref} from "vue";
import { useDataStore } from '@/stores/StoreData.js'
const store = useDataStore()

const config = {
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
const breakpoints = {
  1: {
    itemsToShow: 2.4,
  },
  700: {
    itemsToShow: 3,
  },
  1000: {
    itemsToShow: 3.5,
  },
  1500: {
    itemsToShow: 5.3,
  },
}
const scrollComponent = ref(null);
const page1 =ref(1)
onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (e)=>{
  let element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    store.scrollStatus = false
    page1.value += 1;
    store.getIndexNews(page1.value)
  }
}
</script>

<template>
  <main class="py-14 container" ref="scrollComponent">
    <div class="flex gap-4 mt-10 justify-center flex-wrap w-full">
      <div v-for="News in store.allNews" :key="News.id">
        <CardNews :News="News" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 1s;
}
</style>