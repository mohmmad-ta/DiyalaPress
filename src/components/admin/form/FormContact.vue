<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {ref} from "vue";
import axios from "axios";
const store = useAdminStore()

</script>

<template>
  <div class="w-full overflow-hidden justify-center">
    <form class="text-right">


      <label class="text-secondary-950">title</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.contactUsData.mobile" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>

      <label class="text-secondary-950">content</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <textarea v-model="store.contactUsData.message" type="text" class="scrollbar-hide outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"></textarea>
      </div>

    </form>
  </div>
</template>