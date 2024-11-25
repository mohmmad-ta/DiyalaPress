<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {ref} from "vue";
import axios from "axios";
const store = useAdminStore()

const formData = ref({
  title : "",
  content : "",
  sendNoifyForGuest : false,
  image: null,
})
const handleFileUpload = (event)=> {
  formData.value.image = event.target.files[0]; // Capture the image file
}

const postCreateNews = async ()=>{
  const dataPost = new FormData();
  dataPost.append('title', formData.value.title);
  dataPost.append('content', formData.value.content);
  dataPost.append('sendNoifyForGuest', formData.value.sendNoifyForGuest);
  dataPost.append('image', formData.value.image);
  const res = await axios.post(`api/news`, dataPost, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
const postUpdateNews = async (id)=>{
  const dataPost = new FormData();
  dataPost.append('title', store.newsData.title);
  dataPost.append('content', store.newsData.content);
  dataPost.append('sendNoifyForGuest', store.newsData.sendNoifyForGuest);
  dataPost.append('image', store.newsData.image);
  const res = await axios.post(`api/news/${id}`, dataPost, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  store.allNews[store.alert.number] = res.data
}

const News = async () =>{
  if (store.form_status === "post"){
    await postCreateNews()
    store.openForm = 0
  }else if(store.form_status === "put"){
    await postUpdateNews(store.alert.id)
    store.openForm = 0
  }
}

</script>

<template>
  <div class="w-[30rem] overflow-hidden justify-center">
    <h2 class="text-secondary-950 w-full text-center">Product</h2>
    <hr class="w-full">
    <form class="text-right">

      <label class="text-secondary-950">title</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="formData.title" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>
      <label class="text-secondary-950">content</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <textarea v-model="formData.content" type="text" class="scrollbar-hide outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"></textarea>
      </div>


      <div class="flex justify-end gap-2 mt-4 text-sm">
        <p class="text-secondary-950 w-full">sendNoifyForGuest</p>
        <input v-model="formData.sendNoifyForGuest" type="checkbox" class="outline-none text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>


      <div class="mt-3">
        <h2 class="mb-1">image</h2>
        <input class="w-full" type="file" @change="handleFileUpload">
      </div>

      <div class="flex justify-center pt-8 pb-4 items-center gap-4">
        <button @click="store.openForm = 0" type="button" class="w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded">close</button>
        <button @click="News()" type="button" class="w-3/4 bg-main-50 py-1.5 font-bold text-white rounded">add to card</button>
      </div>
    </form>
  </div>
</template>