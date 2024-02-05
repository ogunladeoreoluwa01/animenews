<script>
import { RouterLink, RouterView } from 'vue-router'
import navBarComp from './components/navBarComp.vue'
import FooterComp from './components/FooterComp.vue'
export default {
  components: { navBarComp, RouterLink, RouterView, FooterComp }
}
</script>

<template>
  <header class="bg-white">
    <navBarComp />
  </header>
  <RouterView />
  <FooterComp />
</template>
