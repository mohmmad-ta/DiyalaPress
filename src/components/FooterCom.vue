<script setup>

</script>

<template>
  <footer class="w-full text-center pt-8 pb-2 bg-primary-950">
    <div class="flex items-center container justify-between">
      <div class="flex gap-2 items-center text-sm">
        <a href="https://www.facebook.com/agencynews1/">
          <i class="fa-brands text-xl bg-inputColor-950 py-0.5 px-2.5 rounded-full text-white hover:text-main-50 duration-150 fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/diyalapress/">
          <i class="fa-brands text-xl bg-inputColor-950 py-0.5 px-2 rounded-full text-white hover:text-main-50 duration-150 fa-instagram"></i>
        </a>
      </div>
      <h2 class="font-bold text-main-50 mb-4 text-2xl">{{ $t('footer_title') }}</h2>
    </div>
    <RouterLink to="/admin">
      <p class="text-secondary-950 text-sm">diyala press</p>
    </RouterLink>
  </footer>
</template>