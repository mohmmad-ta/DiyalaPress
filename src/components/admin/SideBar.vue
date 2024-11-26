<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

const store = useAdminStore();
const logout = ()=>{
  localStorage.setItem("token", null);
  localStorage.setItem("role", null);
  router.push('/')
}
</script>

<template>
  <main :class="store.slidOpen === true ? 'right-0' : 'right-[-20rem]'" class="duration-200  z-50 fixed w-80 right-0 top-0 h-screen bg-white py-2">
    <div class="w-full flex justify-center">
      <img class="w-14 h-14" src="/p2.png" alt="">
    </div>
    <div class="text-primary-950 font-bold h-fit grid gap-3 p-10 text-right duration-100">
      <h1 class="text-secondary-500 font-light text-sm">Dashboards</h1>
      <button @click="store.dashStep = 1" :class="store.dashStep === 1 ? 'text-main-50' : 'text-secondary-950 hover:text-primary-950'" class="text-right duration-150" type="button">الاخبار <i class="fa-solid fa-newspaper"></i></button>
      <button @click="store.dashStep = 2" :class="store.dashStep === 2 ? 'text-main-50' : 'text-secondary-950 hover:text-primary-950'" class="text-right duration-150" type="button">التواصل <i class="fa-regular fa-envelope"></i></button>
    </div>
    <div class="h-fit w-full px-10 absolute bottom-8">
      <button @click="logout" class="text-right duration-150 w-full p-2 mt-2 text-secondary-950 bg-secondary-100 text-sm hover:bg-red-100 hover:text-red-700 rounded" type="button">log out <i class="mx-0.5  fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
  </main>
</template>