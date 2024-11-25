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
  <div class="container gap-4 block md:flex py-20 text-right">
    <div class="mt-10 w-96">
      <div v-for="i in 1" :key="i">
        <div class="w-80 mb-2 gap-3 relative flex justify-between shadow-md shadow-secondary-100 overflow-hidden text-right bg-secondary-100 p-2 rounded h-36">
          <div class="w-full py-1">
            <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 mb-1">Aspernatur eligendi libero officia</h2>
            <p class="text-secondary-950 text-sm h-[75px] overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi libero officia repellendus veniam. Accusantium alias atque beatae cum distinctio enim impedit non, odit placeat quia, repellat repudiandae? Eius, illum.</p>
          </div>
          <div class="absolute rounded bg-main-50 text-white font-bold bottom-0 left-0 px-3 py-0.5 ">عاجل</div>
          <img class="rounded h-full w-20" src="/a1.jpeg" alt="">
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-end">
        <img class="rounded h-96" :src="showData.image" :alt="showData.image">
      </div>
      <h2 class="text-main-50 font-bold text-2xl overflow-hidden my-1">{{showData.title}}</h2>
      <hr>
      <span class="text-secondary-950 text-sm">{{showData.created_at}}</span>
      <p class="text-primary-950 text-lg h-[75px] my-2 overflow-hidden">{{showData.content}}</p>
    </div>
  </div>
</template>