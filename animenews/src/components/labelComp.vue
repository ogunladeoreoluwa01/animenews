<template>
  <div class="flex flex-col mb-6 w-full">
    <div class="w-full flex justify-between">
      <h1 class="text-xl text-zinc-900 dark:text-zinc-50 font-bold font-raleway capitalize">
        {{ title }}
      </h1>
      <router-link
        v-if="shouldshow"
        :to="{ name: 'Animesearch', params: { search: SearchValue } }"
        class="text-sm text-zinc-500 dark:text-zinc-200 font-medium font-raleway capitalize hover:dark:text-zinc-50 hover:text-zinc-800 hover:font-semibold transition-all duration-300 ease-linear"
      >
        view all</router-link
      >
    </div>

    <span class="w-full h-[2px] bg-zinc-300 relative dark:bg-zinc-500">
      <span class="w-[50px] h-[2px] bg-zinc-950 dark:bg-zinc-50 absolute left-0"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'bitch i said what' // Provide a default value
    },
    SearchValue: {
      type: String,
      default: 'top-100'
    },
    shouldshow: {
      type: Boolean,
      default: true
    }
  }
}
</script>
