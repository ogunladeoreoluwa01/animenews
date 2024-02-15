<template>
  <section class="app flex mb-10 flex-col gap-3">
    <section class="flex items-center w-full justify-between">
      <div class="flex">
        <div class="relative">
          <input
            id="Search"
            name="Search"
            type="text"
            v-model="searchQuery"
            class="w-[30rem] border-b border-zinc-700 dark:border-zinc-200 py-1 focus:border-b-2 focus:border-zinc-950 dark:focus:border-zinc-50 transition-colors focus:outline-none peer bg-inherit duration-200 ease-in-out indent-16"
          />
          <label
            for="Search"
            class="absolute text-zinc-700 dark:text-zinc-200 font-raleway font-medium left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-zinc-950 dark:peer-focus:text-zinc-50 duration-200 ease-in-out"
            >Search:</label
          >
        </div>
      </div>
      <div class="flex gap-8 items-center">
        <div class="flex items-center justify-center font-raleway font-medium">
          <div class="relative text-lg w-40">
            <button
              class="flex items-center justify-between px-1 py-1 w-full border-b rounded-sm transition-all duration-200 ease-in-out"
              @click="isGenresExpanded = !isGenresExpanded"
              @blur="isGenresExpanded = false"
              :class="
                isGenresExpanded
                  ? ' border-zinc-950 border-b-2 dark:border-zinc-50'
                  : ' border-zinc-700 dark:border-zinc-200'
              "
            >
              <span
                class="capitalize text-base"
                :class="
                  isGenresExpanded
                    ? ' text-zinc-950 dark:text-zinc-50'
                    : ' text-zinc-700 dark:text-zinc-200'
                "
                >geners</span
              >
              <svg
                fill="none"
                viewBox="0 0 512 512"
                stroke="currentColor"
                class="h-4 w-4 transform transition-all duration-200 ease-in-out"
                :class="
                  isGenresExpanded
                    ? 'rotate-180 text-zinc-950 dark:text-zinc-50'
                    : 'rotate-0 text-zinc-700 dark:text-zinc-200'
                "
              >
                <path
                  fill="currentColor"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
            <transition
              enter-active-class="transform transition duration-500 ease-custom"
              enter-class="-translate-y-1/2 scale-y-0 opacity-0"
              enter-to-class="translate-y-0 scale-y-100 opacity-100"
              leave-active-class="transform transition duration-300 ease-custom"
              leave-class="translate-y-0 scale-y-100 opacity-100"
              leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
            >
              <ul
                v-show="isGenresExpanded"
                class="max-h-[31rem] absolute left-0 right-0 mb-4 bg-zinc-50 divide-y rounded-sm shadow-xl my-3 border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-950 overflow-scroll"
              >
                <li
                  v-for="(genre, index) in genres"
                  :key="index"
                  @click.prevent="addGenre(genre)"
                  class="capitalize cursor-pointer px-3 py-1 transition-colors duration-300 border-none hover:bg-zinc-200 text-base text-zinc-700 ease-in-out dark:text-zinc-50 dark:hover:bg-zinc-800"
                >
                  <!-- <router-link :to="{ name: 'Animegener', params: { tag: genre } }"></router-link> -->
                  {{ genre }}
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <div class="flex items-center justify-center font-raleway font-medium">
          <div class="relative text-lg w-40">
            <button
              class="flex items-center justify-between px-1 py-1 w-full border-b rounded-sm transition-all duration-200 ease-in-out"
              @click="isTagExpanded = !isTagExpanded"
              @blur="isTagExpanded = false"
              :class="
                isTagExpanded
                  ? ' border-zinc-950 border-b-2 dark:border-zinc-50'
                  : ' border-zinc-700 dark:border-zinc-200'
              "
            >
              <span
                class="capitalize text-base"
                :class="
                  isTagExpanded
                    ? ' text-zinc-950 dark:text-zinc-50'
                    : ' text-zinc-700 dark:text-zinc-200'
                "
                >Tags</span
              >
              <svg
                fill="none"
                viewBox="0 0 512 512"
                stroke="currentColor"
                class="h-4 w-4 transform transition-all duration-200 ease-in-out"
                :class="
                  isTagExpanded
                    ? 'rotate-180 text-zinc-950 dark:text-zinc-50'
                    : 'rotate-0 text-zinc-700 dark:text-zinc-200'
                "
              >
                <path
                  fill="currentColor"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
            <transition
              enter-active-class="transform transition duration-500 ease-custom"
              enter-class="-translate-y-1/2 scale-y-0 opacity-0"
              enter-to-class="translate-y-0 scale-y-100 opacity-100"
              leave-active-class="transform transition duration-300 ease-custom"
              leave-class="translate-y-0 scale-y-100 opacity-100"
              leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
            >
              <ul
                v-show="isTagExpanded"
                class="max-h-[31rem] absolute left-0 right-0 mb-4 bg-zinc-50 divide-y rounded-sm shadow-xl my-3 border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-950 overflow-scroll"
              >
                <li
                  v-for="(tag, index) in tags"
                  :key="index"
                  @click.prevent="addTag(tag.name)"
                  class="capitalize cursor-pointer px-3 py-1 transition-colors duration-300 border-none hover:bg-zinc-200 text-base text-zinc-700 ease-in-out dark:text-zinc-50 dark:hover:bg-zinc-800"
                >
                  <!-- <router-link :to="{ name: 'Animegener', params: { tag: tag.name } }"></router-link> -->
                  {{ tag.name }}
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <div class="flex items-center justify-center font-raleway font-medium">
          <div class="relative text-lg w-40">
            <button
              class="flex items-center justify-between px-1 py-1 w-full border-b rounded-sm transition-all duration-200 ease-in-out"
              @click="isSeasonExpanded = !isSeasonExpanded"
              @blur="isSeasonExpanded = false"
              :class="
                isSeasonExpanded
                  ? ' border-zinc-950 border-b-2 dark:border-zinc-50'
                  : ' border-zinc-700 dark:border-zinc-200'
              "
            >
              <span
                class="capitalize text-base"
                :class="
                  isSeasonExpanded
                    ? ' text-zinc-950 dark:text-zinc-50'
                    : ' text-zinc-700 dark:text-zinc-200'
                "
                >country</span
              >
              <svg
                fill="none"
                viewBox="0 0 512 512"
                stroke="currentColor"
                class="h-4 w-4 transform transition-all duration-200 ease-in-out"
                :class="
                  isSeasonExpanded
                    ? 'rotate-180 text-zinc-950 dark:text-zinc-50'
                    : 'rotate-0 text-zinc-700 dark:text-zinc-200'
                "
              >
                <path
                  fill="currentColor"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
            <transition
              enter-active-class="transform transition duration-500 ease-custom"
              enter-class="-translate-y-1/2 scale-y-0 opacity-0"
              enter-to-class="translate-y-0 scale-y-100 opacity-100"
              leave-active-class="transform transition duration-300 ease-custom"
              leave-class="translate-y-0 scale-y-100 opacity-100"
              leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
            >
              <ul
                v-show="isSeasonExpanded"
                class="max-h-[31rem] absolute left-0 right-0 mb-4 bg-zinc-50 divide-y rounded-sm shadow-xl my-3 border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-950 overflow-scroll"
              >
                <li
                  v-for="(season, index) in seasons"
                  :key="index"
                  @click.prevent="addSeason(season)"
                  class="capitalize cursor-pointer px-3 py-1 transition-colors duration-300 border-none hover:bg-zinc-200 text-base text-zinc-700 ease-in-out dark:text-zinc-50 dark:hover:bg-zinc-800"
                >
                  {{ season }}
                  <!-- <router-link :to="{ name: 'Animegener', params: { tag: season } }"></router-link> -->
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <div class="flex items-center justify-center font-raleway font-medium">
          <div class="relative text-lg w-40">
            <button
              class="flex items-center justify-between px-1 py-1 w-full border-b rounded-sm transition-all duration-200 ease-in-out"
              @click="isYearExpanded = !isYearExpanded"
              @blur="isYearExpanded = false"
              :class="
                isYearExpanded
                  ? ' border-zinc-950 border-b-2 dark:border-zinc-50'
                  : ' border-zinc-700 dark:border-zinc-200'
              "
            >
              <span
                class="capitalize text-base"
                :class="
                  isYearExpanded
                    ? ' text-zinc-950 dark:text-zinc-50'
                    : ' text-zinc-700 dark:text-zinc-200'
                "
                >Year</span
              >
              <svg
                fill="none"
                viewBox="0 0 512 512"
                stroke="currentColor"
                class="h-4 w-4 transform transition-all duration-200 ease-in-out"
                :class="
                  isYearExpanded
                    ? 'rotate-180 text-zinc-950 dark:text-zinc-50'
                    : 'rotate-0 text-zinc-700 dark:text-zinc-200'
                "
              >
                <path
                  fill="currentColor"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
            <transition
              enter-active-class="transform transition duration-500 ease-custom"
              enter-class="-translate-y-1/2 scale-y-0 opacity-0"
              enter-to-class="translate-y-0 scale-y-100 opacity-100"
              leave-active-class="transform transition duration-300 ease-custom"
              leave-class="translate-y-0 scale-y-100 opacity-100"
              leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
            >
              <ul
                v-show="isYearExpanded"
                class="max-h-[31rem] absolute left-0 right-0 mb-4 bg-zinc-50 divide-y rounded-sm shadow-xl my-3 border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-950 overflow-scroll"
              >
                <li
                  v-for="(years, index) in year"
                  :key="index"
                  @click.prevent="addYear(years)"
                  class="capitalize cursor-pointer px-3 py-1 transition-colors duration-300 border-none hover:bg-zinc-200 text-base text-zinc-700 ease-in-out dark:text-zinc-50 dark:hover:bg-zinc-800"
                >
                  {{ years }}
                  <!-- <router-link :to="{ name: 'Animegener', params: { tag: years } }"></router-link> -->
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section class="flex items-center gap-2 justify-between dark:text-zinc-50">
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" class="">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          fill="currentColor"
          d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
        />
      </svg>
      <div class="flex gap-2 w-[100rem] items-center group">
        <div class="h-[25px] flex items-center gap-1">
          <span
            v-for="(gener, index) in genresQuery"
            :key="index"
            @click="removeGenre(gener)"
            class="hover:text-zinc-200 hover:dark:text-zinc-950 text-zinc-50 dark:text-zinc-50 hover:line-through decoration-zinc-50 dark:decoration-zinc-950 bg-zinc-950 dark:bg-zinc-50 cursor-pointer capitalize text-base font-semibold pl-1 pr-3 rounded-sm transition-all duration-300 ease-in-out"
            >{{ gener }}</span
          >
          <span
            v-for="(tags, index) in tagsQuery"
            :key="index"
            @click="removeTag(tags)"
            class="hover:text-zinc-200 hover:dark:text-zinc-950 text-zinc-50 dark:text-zinc-950 hover:line-through decoration-zinc-50 dark:decoration-zinc-950 bg-zinc-950 dark:bg-zinc-50 cursor-pointer capitalize text-base font-semibold pl-1 pr-3 rounded-sm transition-all duration-300 ease-in-out"
            >{{ tags }}</span
          >
          <span
            v-if="yearQuery"
            @click="removeyear()"
            class="hover:text-zinc-200 hover:dark:text-zinc-950 text-zinc-50 dark:text-zinc-950 hover:line-through decoration-zinc-50 dark:decoration-zinc-950 bg-zinc-950 dark:bg-zinc-50 cursor-pointer capitalize text-base font-semibold pl-1 pr-3 rounded-sm transition-all duration-300 ease-in-out"
            >{{ yearQuery }}</span
          >
          <span
            v-if="seasonQuery"
            @click="removeSeason()"
            class="hover:text-zinc-200 hover:dark:text-zinc-950 text-zinc-50 dark:text-zinc-950 hover:line-through decoration-zinc-50 dark:decoration-zinc-950 bg-zinc-950 dark:bg-zinc-50 cursor-pointer capitalize text-base font-semibold pl-1 pr-3 rounded-sm transition-all duration-300 ease-in-out"
            >{{ seasonQuery }}</span
          >
          <span
            v-if="searchQuery"
            @click="removeSearch()"
            class="hover:text-zinc-200 hover:dark:text-zinc-950 text-zinc-50 dark:text-zinc-950 hover:line-through decoration-zinc-50 dark:decoration-zinc-950 bg-zinc-950 dark:bg-zinc-50 cursor-pointer capitalize text-base font-semibold pl-1 pr-2 rounded-sm transition-all duration-300 ease-in-out"
            >{{ searchQuery }}</span
          >
        </div>
        <span
          @click="clearQueries()"
          class="hidden group-hover:inline-block text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 hover:dark:text-zinc-50 cursor-pointer capitalize text-base font-semibold pl-1 pr-3 rounded-sm transition-all duration-200 ease-in-out"
          >clear All</span
        >
      </div>
    </section>
    <div class="flex items-center justify-start font-raleway font-medium">
      <div class="relative text-lg w-40">
        <button
          class="flex items-center justify-between px-1 py-1 w-full border-b rounded-sm transition-all duration-200 ease-in-out"
          @click="isSortExanded = !isSortExanded"
          @blur="isSortExanded = false"
          :class="
            isSortExanded
              ? ' border-zinc-950 border-b-2 dark:border-zinc-50'
              : ' border-zinc-700 dark:border-zinc-200'
          "
        >
          <span
            class="capitalize text-base"
            :class="
              isSortExanded
                ? ' text-zinc-950 dark:text-zinc-50'
                : ' text-zinc-700 dark:text-zinc-200'
            "
            >{{ sortOption }}</span
          >
          <svg
            fill="none"
            viewBox="0 0 512 512"
            stroke="currentColor"
            class="h-4 w-4 transform transition-all duration-200 ease-in-out"
            :class="
              isSortExanded
                ? 'rotate-180 text-zinc-950 translate-x-[-0.25rem] dark:text-zinc-50'
                : 'rotate-0 text-zinc-700 dark:text-zinc-200'
            "
          >
            <path
              fill="currentColor"
              d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
            />
          </svg>
        </button>
        <transition
          enter-active-class="transform transition duration-500 ease-custom"
          enter-class="-translate-y-1/2 scale-y-0 opacity-0"
          enter-to-class="translate-y-0 scale-y-100 opacity-100"
          leave-active-class="transform transition duration-300 ease-custom"
          leave-class="translate-y-0 scale-y-100 opacity-100"
          leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
          <ul
            v-show="isSortExanded"
            class="max-h-[31rem] absolute left-0 right-0 mb-4 bg-zinc-50 divide-y rounded-sm shadow-xl my-3 border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-950 overflow-scroll"
          >
            <li
              v-for="(option, index) in sort"
              :key="index"
              @click.prevent="setSortOptions(option)"
              class="capitalize cursor-pointer px-3 py-1 transition-colors duration-300 border-none hover:bg-zinc-200 text-base text-zinc-700 ease-in-out dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              {{ option }}
              <!-- <router-link :to="{ name: 'Animegener', params: { tag: years } }"></router-link> -->
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isGenresExpanded: false,
      isTagExpanded: false,
      isSeasonExpanded: false,
      isYearExpanded: false,
      isSortExanded: false,
      selectedOption: '1x',

      genres: [],
      tags: [],
      seasons: ['japan', 'south korea', 'china', 'Taiwan'],
      year: [],
      sort: ['trending', 'popular', 'title', 'top-100', 'date added', 'release date', 'all manga'],

      sortOption: this.$route.params.search,
      searchQuery: '',
      tagsQuery: [],
      genresQuery: [],
      yearQuery: '',
      seasonQuery: '',
      retries: 3
    }
  },
  watch: {
    searchQuery(newSearchQuery) {
      console.log('Search Query:', newSearchQuery)
    },
    tagsQuery(newTagsQuery) {
      console.log('Tags Query:', newTagsQuery)
    },
    genresQuery(newGenresQuery) {
      console.log('Genres Query:', newGenresQuery)
    },
    yearQuery(newYearQuery) {
      console.log('Year Query:', newYearQuery)
    },
    seasonQuery(newSeasonQuery) {
      console.log('Season Query:', newSeasonQuery)
    }
  },
  methods: {
    addYear(year) {
      this.yearQuery = year
    },
    addSeason(season) {
      this.seasonQuery = season
    },
    addTag(tagName) {
      if (!this.tagsQuery.includes(tagName)) {
        this.tagsQuery.push(tagName)
      }
    },
    removeTag(tags) {
      this.tagsQuery = this.tagsQuery.filter((t) => t !== tags)
    },
    addGenre(genre) {
      if (!this.tagsQuery.includes(genre)) {
        this.tagsQuery.push(genre)
      }
    },
    removeGenre(genre) {
      this.genresQuery = this.genresQuery.filter((g) => g !== genre)
    },
    removeyear() {
      this.yearQuery = ''
    },
    removeSeason() {
      this.seasonQuery = ''
    },
    removeSearch() {
      this.searchQuery = ''
    },
    clearQueries() {
      this.searchQuery = ''
      this.tagsQuery = []
      this.genresQuery = []
      this.yearQuery = ''
      this.seasonQuery = ''
    },
    setGenres() {
      this.isGenresExpanded = false
    },
    setTag() {
      this.isTagExpanded = false
    },
    setSeason() {
      this.isSeasonExpanded = false
    },
    setYear() {
      this.isYearExpanded = false
    },
    setSort() {
      this.isSortExanded = false
    },
    setSortOptions(option) {
      this.sortOption = option

      this.$router.push({ name: 'Mangasearch', params: { search: option } })
      console.log(this.sortOption)
    },
    populateYearArray() {
      const currentYear = new Date().getFullYear()
      for (let year = currentYear; year >= 1944; year--) {
        this.year.push(year)
      }
    },
    fetchTagsData() {
      const url = 'https://graphql.anilist.co/query'
      const query = `query{genres:GenreCollection tags:MediaTagCollection{name description category isAdult}}`

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client: '15430',
          client_secret: '0LDTy3O2LhkXP7UdgcRWH3OkD7Vr2df1daKZAmau',
          query: query
        })
      })
        .then((response) => response.json())
        .then((data) => {
          this.genres = data.data.genres
          this.tags = data.data.tags
          console.log(this.tags)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)

          if (this.retries > 0) {
            console.log(`Retrying... Attempts left: ${this.retries}`)
            // Decrease the retry count
            this.retries--

            // Call fetchData again after a delay
            setTimeout(() => {
              this.fetchData()
            }, 2000)
          } else {
            console.error('Retry limit exceeded')
            // Handle the case when retry limit is exceeded
          }
        })
    }
  },

  mounted() {
    this.fetchTagsData(), this.populateYearArray()
  }
}
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
