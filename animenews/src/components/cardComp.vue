<template>
  <div>

 
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
      class="w-[250px] h-[35px] leading-none text-base text-zinc-900 dark:text-zinc-50 font-bold font-raleway capitalize"
    >
      {{ headingText }}
    </span>
  </div>
  
</div>
</template>

<script>
export default {
  props: {
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
