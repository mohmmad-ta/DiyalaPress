<script setup>
const s = defineProps({
  News: {
    type: Object
  },
})
</script>

<template>
  <div class="w-72 relative shadow-md shadow-secondary-100 overflow-hidden text-right bg-white border-2 border-secondary-100 p-2 rounded h-80">
    <img class="rounded h-44 w-full" :src="'https://api.diyalapress.com/'+News.image" :alt="News.image">
    <h2 class="text-main-50 font-bold text-xl overflow-hidden max-h-6 my-1">{{News.title.length > 30 ? News.title.slice(0, 30) + "..." : News.title}}</h2>
    <p class="text-primary-950 h-[75px] overflow-hidden">{{News.content}}</p>
    <span class="text-secondary-950 text-sm">{{News.created_at}}</span>
  </div>
</template>
