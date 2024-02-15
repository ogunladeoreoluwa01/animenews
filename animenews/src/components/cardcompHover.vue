<template>
  <div class="relative group w-[250px]">
    <div
      v-if="checkCondition()"
      class="rounded-full text-zinc-50 absolute text-base top-[-10px] left-[-10px] w-[2.85rem] h-[2.85rem] justify-center items-center z-10 font-semibold font-raleway flex bg-black shadow-zinc-800 shadow-md"
      :style="{ backgroundColor: itemBackgroundColor }"
    >
      #{{ index + 1 }}
    </div>
    <div class="flex flex-col items-start gap-[0.1rem]">
      <div
        class="w-[250px] h-[350px] overflow-hidden rounded-t-md"
        :style="{ backgroundColor: itemBackgroundColor }"
      >
        <img
          :src="imageSrc"
          :alt="altText"
          class="w-[250px] h-[350px] hover:grayscale-0 hover:scale-125 grayscale-[45%] transition-all duration-200 ease-linear object-cover rounded-t-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
        />
      </div>
      <span
        class="w-[250px] h-[35px] truncate leading-none text-base text-zinc-900 dark:text-zinc-50 font-bold font-raleway capitalize"
      >
        {{ headingText }}
      </span>
    </div>
    <div
      class="w-[300px] min-h-[200px] absolute rounded-md flex-col z-40 gap-2 shadow-lg bg-white dark:text-zinc-50 dark:bg-zinc-800 p-4 group-hover:flex hidden top-[35%] -translate-y-1/2 -right-2 translate-x-full transition-all duration-300 ease-linear animate-fade-in"
    >
      <h1 class="font-semibold capitalize text-base" :style="{ color: itemBackgroundColor }">
        {{ headingText }}
      </h1>
      <h1 class="text-base font-semibold capitalize">
        {{ transformString(status) }}
      </h1>
      <h1 class="font-semibold capitalize text-base" :style="{ color: itemBackgroundColor }">
        {{ format }} {{ format === 'TV' ? 'Show' : '' }}
      </h1>

      <h1 class="text-base font-semibold capitalize">{{ episodes }} episodes</h1>
      <ul class="flex flex-row gap-1 flex-wrap">
        <li
          v-for="(genre, genreIndex) in genres"
          :key="genreIndex"
          class="text-xs font-bold py-1 px-2 rounded-full text-white bg-black"
          :style="{ backgroundColor: itemBackgroundColor }"
        >
          {{ genre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkCondition() {
      return (
        this.index <= 99 &&
        (this.search === 'trending' || this.search === 'popular' || this.search === 'top-100')
      )
    },
    transformString(str) {
      return str.replace(/[_-]/g, ' ')
    }
  },
  props: {
    index: {
      type: Number,
      default: 2,
      reqiured: false
    },
    search: {
      type: String,
      default: 'hello',
      reqiured: false
    },
    status: {
      type: String,
      default: 'airing'
    },
    genres: {
      type: Array,
      default: () => []
    },
    episodes: {
      type: String,
      default: '02'
    },
    format: {
      type: String,
      default: 'TV'
    },
    itemBackgroundColor: {
      type: String,
      default: 'red'
    },
    imageSrc: {
      type: String,
      default: 'https://i.pinimg.com/736x/dd/e8/3e/dde83e1a3738b62cc2b517278ea195ee.jpg'
    },
    altText: {
      type: String,
      default: ''
    },
    headingText: {
      type: String,
      default: 'Default Name'
    }
  }
}
</script>
