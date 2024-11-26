<script setup>
import { useDataStore } from '@/stores/StoreData.js'
const store = useDataStore()
import { useRoute} from "vue-router";
import axios from "axios";
import {onMounted, ref} from "vue";
const route = useRoute();
const showData = ref({
  title: "",
  content: "",
  image: "",
  created_at: "",
});

const getShowNews = async (id)=>{
  if (route.path.slice(1,9) === 'showNews'){
    const {data} = await axios.get(`api/frontend/news/${route.params.id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log(data.data)
    showData.value = data.data
  }else {
    return 0
  }
}
onMounted(async ()=>{await getShowNews()})
window.onpopstate = async (event)=> {
  if (event.state) {
    await getShowNews()
  }
};
</script>

<template>
  <div dir="rtl" class="container gap-4 block md:flex py-20 text-right">
    <div class="w-full min-h-screen">
      <div class="flex justify-start">
        <img class="rounded h-96" :src="'https://api.diyalapress.com/'+showData.image" :alt="showData.image">
      </div>
      <h2 class="text-main-50 font-bold text-2xl overflow-hidden my-1">{{showData.title}}</h2>
      <hr>
      <span class="text-secondary-950 text-sm">{{showData.created_at}}</span>
      <p class="text-primary-950 text-lg h-[75px] my-2 overflow-hidden">{{showData.content}}</p>
    </div>
    <div class="max-h-screen w-96">
      <div @click="getShowNews" v-for="News in store.sliderNews" :key="News.id">
        <RouterLink  :to="{ name: 'showNews', params: { id: News.id } }">
          <div class="w-80 mb-2 gap-3 relative flex justify-between shadow-md shadow-secondary-100 overflow-hidden text-right bg-secondary-100 p-2 rounded h-36">
            <img class="rounded h-full w-20" :src="'https://api.diyalapress.com/'+News.image" alt="">
            <div class="w-full py-1">
              <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 mb-1">{{News.title}}</h2>
              <p class="text-secondary-950 text-sm h-[75px] overflow-hidden">{{News.title}}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>