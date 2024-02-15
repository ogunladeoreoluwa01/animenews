<template>
  <div class="flex items-end justify-end w-full ml-10 mr-10 group">
    <div class="flex items-end gap-1 w-fit self-start" v-if="trending.length > 0">
      <ul
        :key="trending[currentIndex].id"
        class="w-[450px] self-center flex justify-start gap-2 flex-col"
      >
        <li class="text-white text-3xl font-raleway animate-fade-in">
          {{ trending[currentIndex].title.userPreferred }}
        </li>
        <li
          class="text-white text-lg font-raleway animate-fade-in h-[80px] line-clamp-3 text-ellipsis"
          v-html="trending[currentIndex].description"
        ></li>
        <li class="mt-7">
          <button
            class="py-2 px-6 flex gap-3 rounded-md text-center justify-center items-center transition-all duration-200 ease-in hover:-translate-y-[1px] font-semibold bg-white hover:bg-black hover:text-white"
            @click="redirectToAnime"
          >
            Check it out
          </button>
        </li>
      </ul>

      <div
        :key="trending[currentIndex].id + 'image'"
        class="relative w-[700px] h-[785px] flex items-center justify-center slide-in-right"
      >
        <img
          :src="trending[currentIndex].coverImage.extraLarge"
          :alt="trending[currentIndex].title.userPreferred"
          class="clip w-full h-full object-cover object-center scale-105"
        />
        <div
          class="clip absolute inset-0 bg-zinc-900 opacity-10 scale-105 group-hover:scale-105 transition-all duration-200 ease-linear"
        ></div>
      </div>
    </div>
    <ul
      class="text-zinc-400 text-base flex flex-col gap-1 font-raleway font-medium w-[200px] truncate text-pretty mb-7"
    >
      <li
        v-for="(name, index) in trending"
        :key="index"
        @click="changeIndex(index)"
        :class="{
          'cursor-pointer w-[200px] truncate': true,
          'text-white font-semibold': currentIndex === index
        }"
      >
        {{ name.title.userPreferred }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trending: [],
      currentIndex: 0,
      timer: null,
      retries: 3
    }
  },

  methods: {
    redirectToAnime() {
      const animeId = this.trending[this.currentIndex].id
      this.$router.push({ path: `/anime/${animeId}` })
    },
    fetchData() {
      const url = 'https://graphql.anilist.co/query'
      const query = `
        query($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int,$isAdult: Boolean) {
          trending: Page(page: 1, perPage: 5) {
            media(sort: TRENDING_DESC, type: ANIME, isAdult: $isAdult) {
              ...media
            }
          }
          season: Page(page: 1, perPage: 8) {
            media(season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC, type: ANIME, isAdult: $isAdult) {
              ...media
            }
          }
          nextSeason: Page(page: 1, perPage: 8) {
            media(season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, type: ANIME,isAdult: $isAdult) {
              ...media
            }
          }
          popular: Page(page: 1, perPage: 8) {
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
          console.log(data)
          // Assign data to respective variables
          this.trending = data.data.trending.media
          console.log(this.trending)
        })
        .then(() => {
          // Start the timer after data is fetched and assigned
          this.startTimer()
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
            }, 600)
          } else {
            console.error('Retry limit exceeded')
            // Handle the case when retry limit is exceeded
          }
        })
    },

    startTimer() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.trending.length
      }, 5000) // Change index every 2 seconds (adjust as needed)
    },
    changeIndex(index) {
      this.currentIndex = index
      clearInterval(this.timer)
      this.startTimer() // Restart the timer
    }
  },

  mounted() {
    this.fetchData() // Call fetchData method when the component is mounted
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}
.slide-in-right {
  -webkit-animation: slide-in-right 1.5s linear both;
  animation: slide-in-right 1.5s linear both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
