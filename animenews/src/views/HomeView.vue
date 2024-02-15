<template>
  <section class="app">
    <section
      class="mb-10 w-[1440px] h-[770px] bg-hero-pattern-black bg-no-repeat bg-cover bg-center flex justify-center items-center scale-95"
    >
      <caroselComp />
    </section>
    <section class="my-10 px-20">
      <labelComp title="Who are we" :shouldshow="show" />
      <AboutUsComp />
    </section>
    <section class="my-10 px-20">
      <labelComp title="popular this season" SearchValue="season" />
      <div
        v-if="popularload"
        class="flex justify-start items-center gap-2 opacity-0 animate-fade-in"
      >
        <cardloader v-for="index in 5" :key="index" />
      </div>
      <div v-else class="flex justify-start items-center gap-2 opacity-0 animate-fade-in">
        <cardcompHover
          v-for="(anime, index) in season"
          :key="index + anime.id"
          :headingText="anime.title.userPreferred"
          :altText="anime.title.userPreferred"
          :imageSrc="anime.coverImage.large"
          :itemBackgroundColor="anime.coverImage.color"
          :genres="anime.genres"
          :status="anime.status"
          @click="navigateToAnime(anime.id)"
        />
      </div>
    </section>
    <section class="my-10 px-20">
      <labelComp title="Upcoming this season" SearchValue="next_season" />
      <div v-if="seasonload" class="flex justify-start items-center gap-2">
        <cardloader v-for="index in 5" :key="index" />
      </div>
      <div v-else class="flex justify-start items-center gap-2 opacity-0 animate-fade-in">
        <cardcompHover
          v-for="(anime, index) in nextSeason"
          :key="index + anime.id"
          :headingText="anime.title.userPreferred"
          :altText="anime.title.userPreferred"
          :imageSrc="anime.coverImage.large"
          :itemBackgroundColor="anime.coverImage.color"
          :genres="anime.genres"
          :status="anime.status"
          @click="navigateToAnime(anime.id)"
        />
      </div>
    </section>
    <section class="my-10 px-20">
      <labelComp title="all time popular" SearchValue="popular" />
      <div v-if="nextSeasonload" class="flex justify-start items-center gap-2">
        <cardloader v-for="index in 5" :key="index" />
      </div>
      <div v-else class="flex justify-start items-center gap-2 opacity-0 animate-fade-in">
        <cardcompHover
          v-for="(anime, index) in popular"
          :key="index + anime.id"
          :headingText="anime.title.userPreferred"
          :altText="anime.title.userPreferred"
          :imageSrc="anime.coverImage.large"
          :itemBackgroundColor="anime.coverImage.color"
          :genres="anime.genres"
          :status="anime.status"
          @click="navigateToAnime(anime.id)"
        />
      </div>
    </section>
    <section class="my-10 px-20">
      <labelComp title="top 100 Anime" />
      <div
        v-if="topload"
        class="flex flex-col items-center justify-start gap-5 opacity-0 animate-fade-in"
      >
        <topAnime v-for="index in 10" :key="index" />
      </div>
      <div v-else class="flex flex-col items-center justify-start gap-5 opacity-0 animate-fade-in">
        <div
          class="flex w-[1280px] h-[80px] p-[10px] bg-slat-50 font-raleway bg-zinc-200 dark:bg-zinc-800 opacity-0 animate-fade-in"
          v-for="(anime, index) in top"
          :key="index + anime.id"
        >
          <div class="w-[48px] h-[60px] flex justify-center items-center">
            <h1
              class="text-3xl font-bold text-zinc-500 opacity-80 dark:opacity-100"
              :style="{ color: anime.coverImage.color }"
            >
              #{{ index + 1 }}
            </h1>
          </div>
          <div class="w-[48px] h-[60px]"></div>
          <router-link :to="{ name: 'anime', params: { id: anime.id } }"
            ><img
              :src="anime.coverImage.large"
              :alt="anime.title.userPreferred"
              class="w-[48px] h-[60px]"
              :style="{ backgroundColor: anime.coverImage.color }"
          /></router-link>

          <div class="pt-[8px] pb-[4px] px-2 flex">
            <div class="w-[700px] flex flex-col items-start gap-1">
              <router-link
                :to="{ name: 'anime', params: { id: anime.id } }"
                class="font-semibold capitalize text-sm text-zinc-900 dark:text-zinc-100"
                >{{ anime.title.userPreferred }}</router-link
              >
              <ul class="flex flex-row gap-1">
                <li
                  v-for="(genre, genreIndex) in anime.genres"
                  :key="genreIndex"
                  class="text-xs font-bold py-1 px-2 rounded-full text-white"
                  :style="{ backgroundColor: anime.coverImage.color }"
                >
                  <router-link :to="{ name: 'Animegener', params: { tag: genre } }">{{
                    genre
                  }}</router-link>
                </li>
              </ul>
            </div>

            <div class="w-[130px]"></div>
            <div class="w-[130px] text-xs font-bold capitalize flex flex-col p-1">
              <h1 class="font-bold capitalize text-sm text-zinc-900 dark:text-zinc-100">
                {{ anime.format }} {{ anime.format === 'TV' ? 'Show' : '' }}
              </h1>
              <p
                class="text-xs text-zinc-500 dark:text-zinc-600 font-medium font-raleway capitalize"
              >
                {{
                  anime.format !== 'TV'
                    ? formatDuration(anime.duration)
                    : anime.episodes + ' Episodes'
                }}
              </p>
            </div>
            <div class="w-[130px] text-xs font-bold capitalize flex flex-col p-1">
              <h1 class="font-bold capitalize text-sm text-zinc-900 dark:text-zinc-100">
                {{ anime.season }} {{ anime.seasonYear }}
              </h1>
              <p
                class="text-xs text-zinc-500 dark:text-zinc-600 font-medium font-raleway capitalize"
              >
                {{ anime.status }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import cardcompHover from '@/components/cardcompHover.vue'
import cardloader from '@/components/cardLoaderComp.vue'
import caroselComp from '@/components/caroselComp.vue'
import labelComp from '@/components/labelComp.vue'
import topAnime from '@/components/topAnimeCardLoader.vue'
import AboutUsComp from '@/components/AboutUsComp.vue'

export default {
  components: {
    caroselComp,
    labelComp,
    cardloader,
    topAnime,
    AboutUsComp,
    cardcompHover
  },
  data() {
    return {
      retries: 3,
      trending: [],
      season: [],
      nextSeason: [],
      popular: [],
      top: [],
      show: false,
      seasonload: true,
      nextSeasonload: true,
      popularload: true,
      topload: true,
      CALL: undefined
    }
  },
  methods: {
    navigateToAnime(animeId) {
      this.$router.push({ name: 'anime', params: { id: animeId } })
    },
    formatDuration(duration) {
      const hours = Math.floor(duration / 60)
      const minutes = duration % 60

      const hoursText = hours > 0 ? hours + 'h' : ''
      const minutesText = minutes > 0 ? minutes + 'm' : ''

      return `${hoursText} ${minutesText}`
    },
    fetchData() {
      const url = 'https://graphql.anilist.co/query'
      const query = `
        query($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int ,$isAdult: Boolean) {
          trending: Page(page: 1, perPage: 2) {
            media(sort: TRENDING_DESC, type: ANIME, isAdult: $isAdult) {
              ...media
            }
          }
          season: Page(page: 1, perPage: 5) {
            media(season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC, type: ANIME, isAdult: $isAdult) {
              ...media
            }
          }
          nextSeason: Page(page: 1, perPage: 5) {
            media(season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, type: ANIME, isAdult: $isAdult) {
              ...media
            }
          }
          popular: Page(page: 1, perPage: 5) {
            media(sort: POPULARITY_DESC, type: ANIME, isAdult: $isAdult) {
              ...media
            }
          }
          top: Page(page: 1, perPage: 10) {
            media(sort: SCORE_DESC, type: ANIME, isAdult: $isAdult) {
              ...media
            }
          }
        }

        fragment media on Media {
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
          mediaListEntry {
            id
            status
          }
          nextAiringEpisode {
            airingAt
            timeUntilAiring
            episode
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
      `

      const variables = {
        type: 'ANIME',
        season: 'WINTER',
        seasonYear: 2024,
        nextSeason: 'SPRING',
        nextYear: 2024,
        isAdult: false
      }

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client: '15430',
          client_secret: '0LDTy3O2LhkXP7UdgcRWH3OkD7Vr2df1daKZAmau',
          query: query,
          variables: variables
        })
      })
        .then((response) => response.json())
        .then((data) => {
          // Assign data to respective variables
          this.trending = data.data.trending.media
          this.season = data.data.season.media
          this.nextSeason = data.data.nextSeason.media
          this.popular = data.data.popular.media
          this.top = data.data.top.media
          console.log(this.trending)

          // Set loading flags to false with a delay
          setTimeout(() => {
            this.seasonload = false
          }, 600)

          setTimeout(() => {
            this.nextSeasonload = false
          }, 650)

          setTimeout(() => {
            this.popularload = false
          }, 700)

          setTimeout(() => {
            this.topload = false
          }, 750)
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
            }, 500)
          } else {
            console.error('Retry limit exceeded')
            // Handle the case when retry limit is exceeded
          }
        })
    }
  },
  mounted() {
    this.fetchData()
    window.scrollTo(0, 0) // Call fetchData method when the component is mounted
  },
  watch: {
    $route() {}
  }
}
</script>
