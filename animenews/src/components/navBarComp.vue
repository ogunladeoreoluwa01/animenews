<template>
  <nav class="app mx-20 py-3 flex justify-between items-center z-50">
    <router-link to="/" class="font-semibold w-fit px-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="35" viewBox="0 0 512 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          fill="#313131"
          d="M0 80c0 26.5 21.5 48 48 48H64v64h64V128h96v64h64V128h96v64h64V128h16c26.5 0 48-21.5 48-48V13.4C512 6 506 0 498.6 0c-1.7 0-3.4 .3-5 1l-49 19.6C425.7 28.1 405.5 32 385.2 32H126.8c-20.4 0-40.5-3.9-59.4-11.4L18.4 1c-1.6-.6-3.3-1-5-1C6 0 0 6 0 13.4V80zM64 288V480c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384V480c0 17.7 14.3 32 32 32s32-14.3 32-32V288h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64z"
        />
      </svg>
    </router-link>

    <div class="flex items-center gap-6">
      <div class="flex gap-4 font-raleway items-center">
        <router-link to="/" class="font-semibold w-fit px-1"> Home </router-link>
        <router-link
          :to="{ name: 'Animesearch', params: { search: 'trending' } }"
          class="font-semibold w-fit px-1"
        >
          Anime</router-link
        >
        <router-link
          :to="{ name: 'Mangasearch', params: { search: 'trending' } }"
          class="font-semibold w-fit px-1"
        >
          Manga</router-link
        >
        <router-link to="/about" class="font-semibold w-fit px-1"> Blog</router-link>
      </div>
      <div class="flex gap-2">
        <buttonComp buttonText="Sign Up" @click="goToSignUp" />
        <buttonComp state="white " buttonText="Login" @click="goToLogin" />
      </div>
    </div>
  </nav>
</template>
<script>
import buttonComp from './buttonComp.vue'
export default {
  components: { buttonComp },
  methods: {
    goToSignUp() {
      this.$router.push('/signup')
    },
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
nav a.router-link-exact-active {
  @apply text-black  font-extrabold;
}

nav a.router-link-exact-active:hover {
  @apply text-black font-extrabold;
}

nav a:first-of-type {
  border: 0;
}
nav a {
  @apply text-zinc-700 transition-all duration-200 ease-in;
}
nav a:hover {
  @apply text-zinc-900;
}
</style>
