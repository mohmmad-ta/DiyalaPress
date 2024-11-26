<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
const store = useAdminStore();

const open = (index) => {
  store.openForm = store.dashStep
  store.contactUsData = store.allContactUs[index]
}
</script>

<template>
  <div class=" h-full w-full bg-white p-2.5 rounded">
    <table class="table-fixed w-full">
      <thead class="border-b-2 border-secondary-100 text-secondary-950 text-sm font-bold">
      <tr>
        <th class="p-2 tableHid">تاريخ</th>
        <th class="p-2">الوصف</th>
        <th class="p-2">الرقم</th>
        <th class="p-2">الاسم</th>
        <th class="p-2 tableHid">التسلسل</th>
      </tr>
      </thead>
      <tbody class="text-center text-primary-950">
      <tr class="cursor-pointer" @click="open(index)" :class="index % 2 !== 0 ? 'bg-secondary-100' : 'bg-none'" v-for="(Contact, index) in store.allContactUs" :key="index">
        <td class="tableHid">{{ Contact.created_at }}</td>
        <td>{{ Contact.message.length > 20 ? Contact.message.slice(0,20) + " ... " : Contact.message }}</td>
        <td class="py-3">{{ Contact.mobile }}</td>
        <td class="py-3">{{ Contact.name }}</td>
        <td class="tableHid">{{ index + 1 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>