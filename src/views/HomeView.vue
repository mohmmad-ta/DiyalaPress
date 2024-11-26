<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";
import { useDataStore } from '@/stores/StoreData.js'
import {ref} from "vue";
const store = useDataStore()

const config = {
  autoplay: 6000,
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
const items = [
  {
    image: "/a1.jpg",
    title: "1Lorem ipsum dolor sit amet, consectetur adipisicing .",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum illo pariatur provident quisquam ratione repudiandae! Amet enim hic, labore maiores necessitatibus nihil placeat? Aliquam molestiae quia quisquam suscipit voluptatem.",
  },{
    image: "/a2.jpg",
    title: "2Lorem ipsum dolor sit amet, consectetur adipisicing .",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum illo pariatur provident quisquam ratione repudiandae! Amet enim hic, labore maiores necessitatibus nihil placeat? Aliquam molestiae quia quisquam suscipit voluptatem.",
  },{
    image: "/a3.jpg",
    title: "3Lorem ipsum dolor sit amet, consectetur adipisicing .",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum illo pariatur provident quisquam ratione repudiandae! Amet enim hic, labore maiores necessitatibus nihil placeat? Aliquam molestiae quia quisquam suscipit voluptatem.",
  },{
    image: "/a4.jpg",
    title: "4Lorem ipsum dolor sit amet, consectetur adipisicing .",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum illo pariatur provident quisquam ratione repudiandae! Amet enim hic, labore maiores necessitatibus nihil placeat? Aliquam molestiae quia quisquam suscipit voluptatem.",
  },
]
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
          <Slide v-for="(item, index) in items" :key="index">
            <div class="relative ci">
              <img class="w-full blur-sm h-full" :src="item.image" alt="">
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="w-full absolute items-end top-0 left-0 h-full z-10 blur-sm bg-gradient-to-b from-main-200 to-main-500"></div>
      <div class="container gap-4 items-center h-full relative top-0 left-0 z-20 flex flex-wrap md:flex-nowrap">
        <div class="w-full z-50">
          <div class="w-full h-96 mt-10 md:mt-0  rounded">
            <Carousel class="overflow-hidden" :transition="700" v-bind="config" ref="carouselRef" v-model="currentSlide">
              <Slide v-for="(item, index) in items" :key="index">
                <div class="relative ci2">
                  <Transition name="slide-fade">
                    <img class="w-full h-96 rounded" :src="item.image" alt="">
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
              <h2 class="text-white font-bold mb-4 text-3xl md:text-5xl">{{items[currentSlide].title}}</h2>
              <p class="text-lg md:text-xl text-white my-5">{{items[currentSlide].content}}</p>
              <button type="button" class="px-4 py-1.5 border-2 border-main-100 duration-150 hover:bg-main-100 font-bold hover:text-white rounded text-main-100">show</button>
            </div>
          </Transition>
        </div>
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
      <div class="flex gap-4 justify-center flex-wrap w-full">
        <div v-for="News in store.allNews" :key="News.id">
          <RouterLink :to="{ name: 'showNews', params: { id: News.id } }">
            <CardNews :News="News" />
          </RouterLink>
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