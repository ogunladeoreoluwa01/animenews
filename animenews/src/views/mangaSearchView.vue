<template>
  <section class="app">
    <div
      class="text-3xl text-zinc-800 font-raleway font-extrabold capitalize dark:text-zinc-50 my-8"
    >
      <h1>{{ $route.params.search }}</h1>
    </div>
    <filterBarComp class="sticky z-30" />
    <section class="mt-6 flex flex-wrap gap-6">
      <div class="flex flex-wrap gap-6">
        <div v-if="isLoading" class="flex flex-wrap gap-6">
          <cardcompHover
            v-for="(anime, index) in animeInfo"
            :key="index + anime.id"
            :headingText="anime.title.userPreferred"
            :altText="anime.title.userPreferred"
            :imageSrc="anime.coverImage.large"
            :itemBackgroundColor="anime.coverImage.color"
            :genres="anime.genres"
            :status="anime.status"
            :index="index"
            :format="anime.format"
            :search="search"
            @click="navigateToAnime(anime.id)"
          />

          <div class="flex flex-wrap gap-6" v-if="ismore">
            <cardloader v-for="index in 20" :key="index" class="opacity-0 animate-fade-in" />
          </div>
        </div>

        <div v-else class="flex flex-wrap gap-6">
          <cardloader v-for="index in 20" :key="index" class="opacity-0 animate-fade-in" />
        </div>
      </div>
    </section>

    <div class="text-xl text-zinc-800 font-raleway font-medium capitalize dark:text-zinc-50 mt-8">
      <h1 v-if="hasNextPage">keep scrolling ..</h1>
      <h v-else>
        Kudos, fellow otaku! You've reached the end of our catalog. But fret not, there's more
        excitement awaiting your discovery. Keep the anime flame burning! ✨
      </h>
    </div>

    <button
      title="To the top"
      class="group cursor-pointer w-14 h-14 p-4 fixed rounded-full bg-transparent border-2 dark:border-zinc-400 dark:hover:border-zinc-100 border-zinc-950 hover:border-zinc-900 dark:hover:bg-zinc-700 hover:bg-zinc-300 flex justify-center items-center right-[5%] bottom-[5%] z-40 outline-none duration-300 transition-all ease-linear"
      @click="tothetop()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="32.5"
        viewBox="0 0 320 512"
        class="dark:text-zinc-400 text-zinc-950 group-hover:text-zinc-900 group-hover:rotate-[360deg] dark:group-hover:text-zinc-100 group-active:duration-0 duration-300 transition-all ease-linear"
      >
        <path
          fill="currentColor"
          d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
        />
      </svg>
    </button>
  </section>
</template>

<script>
import cardcompHover from '@/components/cardcompHover.vue'
import filterBarComp from '../components/filterBarCompManga.vue'
import cardloader from '@/components/cardLoaderComp.vue'
export default {
  components: { filterBarComp, cardcompHover, cardloader },
  data() {
    return {
      sort: [],
      page: 1,
      totalPages: 0,
      animeInfo: [],
      isLoading: false,
      retries: 3,
      ismore: false,
      search: this.$route.params.search,
      isThereContent: true,
      hasNextPage: null
    }
  },

  methods: {
    tothetop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    navigateToAnime(animeId) {
      this.$router.push({ name: 'manga', params: { id: animeId } })
    },
    handleScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight
      if (bottomOfWindow && this.hasNextPage === true) {
        this.loadmore()
        this.isThereContent = false
      }
    },
    loadmore() {
      this.page++
      this.ismore = true
      setTimeout(() => {
        this.fetchData()
      }, 500)
    },
    RouteCheck() {
      const routeCheck = this.$route.params.search
      if (routeCheck === 'all manga') {
        this.sort = ['ID_DESC', 'POPULARITY_DESC']
        console.log(this.sort)
        this.isLoading = false
        setTimeout(() => {
          this.fetchData()
        }, 500)
        // Your API call logic for "all anime"
      }
      if (routeCheck === 'trending') {
        this.sort = ['TRENDING_DESC', 'POPULARITY_DESC']
        console.log(this.sort)
        this.isLoading = false
        setTimeout(() => {
          this.fetchData()
        }, 500)
        // Your API call logic for "trending"
      }
      if (routeCheck === 'popular') {
        this.sort = ['POPULARITY_DESC']
        console.log(this.sort)
        this.isLoading = false
        setTimeout(() => {
          this.fetchData()
        }, 500)
        // Your API call logic for "popular"
      }
      if (routeCheck === 'title') {
        this.sort = ['TITLE_ENGLISH']
        console.log(this.sort)
        this.isLoading = false
        setTimeout(() => {
          this.fetchData()
        }, 500)
        // Your API call logic for "title"
      }
      if (routeCheck === 'top-100') {
        this.sort = ['SCORE_DESC']
        console.log(this.sort)
        this.isLoading = false
        setTimeout(() => {
          this.fetchData()
        }, 500)
        // Your API call logic for "average score"
      }
      if (routeCheck === 'date added') {
        this.sort = ['ID_DESC']
        console.log(this.sort)
        this.isLoading = false
        setTimeout(() => {
          this.fetchData()
        }, 500)
        // Your API call logic for "date added"
      }
      if (routeCheck === 'release date') {
        this.sort = ['START_DATE_DESC']
        console.log(this.sort)
        this.isLoading = false
        setTimeout(() => {
          this.fetchData()
        }, 500)
        // Your API call logic for "release date"
      }
    },

    fetchData() {
      const url = 'https://graphql.anilist.co/query'
      const query = `
      query ($page: Int, $type: MediaType, $isAdult: Boolean, $sort: [MediaSort]) {
        Page(page: $page, perPage: 20){pageInfo{total perPage currentPage lastPage hasNextPage }
          media(sort: $sort, type: $type, isAdult: $isAdult) {
            id
            title {
              userPreferred
            }
            coverImage {
              extraLarge
              large
              color
            }
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            bannerImage
            season
            seasonYear
            description
            type
            format
            status(version: 2)
            episodes
            duration
            chapters
            volumes
            genres
            isAdult
            averageScore
            popularity
            nextAiringEpisode {
              airingAt
              timeUntilAiring
              episode
            }
            mediaListEntry {
              id
              status
            }
            studios(isMain: true) {
              edges {
                isMain
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `

      const variables = {
        page: this.page,
        type: 'MANGA',
        isAdult: false,
        sort: this.sort
      }

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      })
        .then((response) => response.json())
        .then((data) => {
          this.animeInfo = [...this.animeInfo, ...data.data.Page.media]
          this.hasNextPage = data.data.Page.pageInfo.hasNextPage
          console.log(data)

          setTimeout(() => {
            this.isLoading = true
          }, 1000)
          setTimeout(() => {
            this.ismore = false
          }, 500)
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
    this.RouteCheck(), window.addEventListener('scroll', this.handleScroll), window.scrollTo(0, 0)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    $route() {
      window.scrollTo(0, 0) // Force scroll to top of the page
      this.RouteCheck() // Perform router check
      setTimeout(() => {
        this.fetchData() // First API call
        location.reload() // Force reload
      }, 500)
    }
  }
}
</script>
<style>
.zindex {
  z-index: 999;
}
</style>
