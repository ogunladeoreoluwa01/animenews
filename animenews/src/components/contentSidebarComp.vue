<template>
  <section>
    <section class="bg-zinc-100 w-[208px] min-h-[400px] p-4 flex flex-col gap-3 font-raleway">
      <div v-if="aired !== undefined">
        <h1 class="text-base font-semibold capitalize">Aired</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="format !== undefined">
        <h1 class="text-base font-semibold capitalize">Format</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="episodes !== undefined">
        <h1 class="text-base font-semibold capitalize">Episodes</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="duration !== undefined">
        <h1 class="text-base font-semibold capitalize">Duration</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="status !== undefined">
        <h1 class="text-base font-semibold capitalize">Status</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="releaseDate !== undefined">
        <h1 class="text-base font-semibold capitalize">Release Date</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="season !== undefined">
        <h1 class="text-base font-semibold capitalize">Season</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="studios !== undefined">
        <h1 class="text-base font-semibold capitalize">Studios</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="producers !== undefined">
        <h1 class="text-base font-semibold capitalize">Producers</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="source !== undefined">
        <h1 class="text-base font-semibold capitalize">Source</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="hashtag !== undefined">
        <h1 class="text-base font-semibold capitalize">Hashtag</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="romaji !== undefined">
        <h1 class="text-base font-semibold capitalize">Romaji</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="english !== undefined">
        <h1 class="text-base font-semibold capitalize">English</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="native !== undefined">
        <h1 class="text-base font-semibold capitalize">Native</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
      <div v-if="synonyms !== undefined">
        <h1 class="text-base font-semibold capitalize">Synonyms</h1>
        <p class="text-sm font-normal capitalize mt-2"></p>
      </div>
    </section>
  </section>
</template>
