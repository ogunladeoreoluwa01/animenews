<template>
  <div class="flex flex-col items-start gap-[0.1rem]">
    <div class="w-[130px] h-[180px] overflow-hidden rounded-t-md">
      <img
        :src="imageSrc"
        :alt="altText"
        class="w-[130px] h-[180px] hover:grayscale-0 hover:scale-125 grayscale-[45%] transition-all duration-200 ease-linear object-cover rounded-t-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
      />
    </div>
    <span
      class="w-[130px] h-[27px] leading-none line-clamp-1 text-ellipsis text-sm text-zinc-900 dark:text-zinc-50 font-semiold font-raleway capitalize"
    >
      {{ headingText }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
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
