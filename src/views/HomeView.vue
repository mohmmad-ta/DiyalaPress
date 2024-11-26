<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";
import { useDataStore } from '@/stores/StoreData.js'
import {ref} from "vue";
import ContactUs from "@/components/ContactUs.vue";
const store = useDataStore()

const config = {
  autoplay: 6000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};

const carouselRef = ref();
const currentSlide = ref(0);

const next = () => carouselRef.value.next();
const prev = () => carouselRef.value.prev();
</script>

<template>
  <main class="my-6">
    <header class="min-h-screen pt-10 flex items-center w-full relative">
      <div class="absolute z-10 top-0 left-0 w-full blur-sm h-full">
        <Carousel class="overflow-hidden" :transition="700" v-bind="config" ref="carouselRef" v-model="currentSlide">
          <Slide v-for="(item, index) in store.sliderNews" :key="index">
            <div class="relative ci">
              <img class="w-full blur-sm h-full" :src="'https://api.diyalapress.com/'+item.image" alt="">
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="w-full absolute items-end top-0 left-0 h-full z-10 blur-sm bg-gradient-to-b from-main-200 to-main-500"></div>
      <div class="container gap-4 items-center h-full relative top-0 left-0 z-20 flex flex-wrap md:flex-nowrap">
        <div class="w-full z-50">
          <div class="w-full h-96 mt-10 md:mt-0  rounded">
            <Carousel class="overflow-hidden" :transition="700" v-bind="config" ref="carouselRef" v-model="currentSlide">
              <Slide v-for="(item, index) in store.sliderNews" :key="index">
                <div class="relative ci2">
                  <Transition name="slide-fade">
                    <img class="w-full h-96 rounded" :src="'https://api.diyalapress.com/'+item.image" alt="">
                  </Transition>
                </div>
              </Slide>
            </Carousel>
            <div class="flex w-full py-4 gap-4 justify-center items-center">
              <i @click="prev" class="fa-solid cursor-pointer text-white bg-primary-500 py-1 px-3 duration-150 hover:text-main-50 rounded-full text-2xl fa-chevron-left"></i>
              <i @click="next" class="fa-solid cursor-pointer text-white bg-primary-500 py-1 px-3 duration-150 hover:text-main-50 rounded-full text-2xl fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="w-full px-0 py-10 md:p-10 text-right h-fit">
          <Transition name="slide-fade">
            <div>
              <h2 class="text-white font-bold mb-4 text-3xl md:text-5xl">{{store.sliderNews[currentSlide].title}}</h2>
              <p class="text-lg md:text-xl text-zinc-300 my-5">{{store.sliderNews[currentSlide].content}}</p>
              <RouterLink :to="{ name: 'showNews', params: { id: store.sliderNews[currentSlide].id } }">
                <button type="button" class="px-4 py-1.5 border-2 border-primary-950 duration-150 hover:bg-primary-950 font-bold hover:text-white rounded text-xl text-primary-950">{{ $t('home_header_btn') }}</button>
              </RouterLink>
            </div>
          </Transition>
        </div>
      </div>
    </header>
    <div class="container py-14">
      <div class="flex gap-4 justify-center flex-wrap w-full">
        <div v-for="News in store.allNews" :key="News.id">
          <RouterLink :to="{ name: 'showNews', params: { id: News.id } }">
            <CardNews :News="News" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-primary-950 mb-10 w-full h-fit px-3 py-10 text-center rounded-md">
        <h2 class="text-main-50 font-bold text-4xl">{{ $t('contact_logo') }}</h2>
        <div class="flex flex-wrap md:flex-nowrap gap-6 container items-center">
          <p class="text-secondary-950 text-lg md:text-2xl text-right font-semibold my-3">{{ $t('contact_description_title') }}</p>
          <ContactUs />
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.ci{
  width: 100% !important;
  height: 100vh !important;
}
.ci2{
  width: 100% !important;
}

</style>