<template>
  <div class="flex h-[115px] font-raleway text-pretty">
    <img :src="imageSource" alt="" class="w-[85px] h-[115px]" />
    <div class="w-[250px] h-[115px] p-3 flex flex-col justify-between bg-zinc-100">
      <div>
        <p class="text-base leading-snug font-medium capitalize h-[48px] line-clamp-2">
          {{ CharacterName }}
        </p>
      </div>
      <div>
        <p class="text-xs font-medium capitalize">{{ role }}</p>
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
    CharacterName: {
      type: String,
      default: 'Source'
    },
    role: {
      type: String,
      default: 'Solo Lvl'
    }
  }
}
</script>
