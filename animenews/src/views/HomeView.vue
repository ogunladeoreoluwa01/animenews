<template>
  <section class="app">
    <div
      class="w-[1440px] h-[800px] bg-hero-pattern-black bg-no-repeat bg-cover flex justify-center items-center"
    >
      <caroselComp />
    </div>
  </section>
</template>

<script>
import caroselComp from '@/components/caroselComp.vue'
export default {
  components: { caroselComp },
  data() {
    return {
      trending: [],
      season: [],
      nextSeason: [],
      popular: [],
      top: []
    }
  },
  methods: {
    fetchData() {
      const url = 'https://graphql.anilist.co/query'
      const query = `
        query($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int) {
          trending: Page(page: 1, perPage: 5) {
            media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
              ...media
            }
          }
          season: Page(page: 1, perPage: 8) {
            media(season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
              ...media
            }
          }
          nextSeason: Page(page: 1, perPage: 8) {
            media(season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
              ...media
            }
          }
          popular: Page(page: 1, perPage: 8) {
            media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
              ...media
            }
          }
          top: Page(page: 1, perPage: 10) {
            media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
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
        nextYear: 2024
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
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  },
  mounted() {
    this.fetchData() // Call fetchData method when the component is mounted
  }
}
</script>
