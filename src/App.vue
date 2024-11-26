<script setup>
import {RouterView, useRoute} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import FooterCom from "@/components/FooterCom.vue";
const route = useRoute();
</script>

<template>
  <NavBar v-show="route.path.slice(1,6) !== 'admin'" />
  <RouterView />
  <FooterCom v-show="route.path.slice(1,6) !== 'admin'" />
</template>
