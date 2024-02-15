<template>
  <div class="flex h-[115px] font-raleway text-pretty group overflow-hidden">
    <img
      :src="imageSource"
      alt=""
      class="w-[85px] h-[115px] group-hover:scale-110 transition-all duration-200 ease-linear"
    />
    <div
      class="w-[250px] h-[115px] p-3 flex flex-col justify-between bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
    >
      <div>
        <h1 class="text-xs font-bold capitalize">{{ transformString(title) }}</h1>
        <p class="text-base leading-snug font-medium capitalize h-[48px] line-clamp-2">
          {{ subtitle }}
        </p>
      </div>
      <div>
        <p class="text-xs font-medium capitalize">{{ category }} : {{ transformString(status) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Source'
    },
    subtitle: {
      type: String,
      default: 'Solo Lvl'
    },
    category: {
      type: String,
      default: 'Manga'
    },
    status: {
      type: String,
      default: 'Finished'
    }
  },
  methods: {
    transformString(str) {
      return str.replace(/[_-]/g, ' ')
    }
  }
}
</script>
