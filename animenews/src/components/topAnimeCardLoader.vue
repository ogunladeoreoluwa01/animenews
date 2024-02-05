<template>
  <div class="flex w-[1280px] h-[80px] p-[10px] bg-zinc-100 font-raleway animate-pulse rounded-md">
    <div class="w-[48px] h-[60px] flex justify-center items-center"></div>
    <div class="w-[48px] h-[60px] bg-zinc-200 rounded-sm"></div>

    <div class="pt-[8px] pb-[4px] px-2 flex">
      <div
        class="w-[700px] flex ml-5 flex-col h-[20px] rounded-md items-start gap-1 bg-zinc-200"
      ></div>

      <div class="w-[130px]"></div>
      <div
        class="w-[130px] h-[20px] mr-4 rounded-md text-xs font-bold capitalize flex flex-col items-start p-1 bg-zinc-200"
      ></div>
      <div
        class="w-[100px] h-[20px] rounded-md text-xs font-bold capitalize flex flex-col items-start p-1 bg-zinc-200"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagColor: 'red'
    }
  }
}
</script>
