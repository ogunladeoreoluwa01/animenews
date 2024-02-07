<template>
  <section class="">
    <viewloaderComp v-if="loaders" />
    <div v-else class="opacity-0 animate-fade-in">
      <div class="w-dvw h-[400px] bg-gradient-to-tl from-cyan-50 via-current to-neutral-900">
        <img :src="animeinfo.bannerImage" :alt="preferedName" class="w-dvw h-[400px]" />
      </div>
      <div class="h-fit min-h-[300px] app relative flex gap-8 justify-center">
        <img
          :src="dispImg"
          :alt="preferedName"
          class="w-[250px] h-[350px] absolute top-[-40%] left-0"
        />
        <div class="w-[900px] mt-6 ml-[80px]">
          <div class="">
            <h1 class="font-semibold text-3xl font-raleway">{{ preferedName }}</h1>
            <p
              class="my-4 text-lg leading-6 font-normal font-open-sans"
              v-html="animeinfo.description"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <section class="app flex gap-6">
      <div class="flex flex-col">
        <contentsideloader v-if="loaders" />
        <div v-else class="w-[208px] flex flex-col gap-3">
          <section class="bg-zinc-100 w-[208px] min-h-[400px] p-4 flex flex-col gap-3 font-raleway">
            <div
              v-if="
                animeinfo.nextAiringEpisode !== null && animeinfo.nextAiringEpisode.length !== 0
              "
              class="text-slate-700"
            >
              <h1 class="text-base font-semibold capitalize">Aired</h1>
              <p class="text-sm font-normal capitalize">
                Ep
                <span class="font-semibold">{{ animeinfo.nextAiringEpisode.episode }} :</span>&nbsp;
                <span class="font-semibold">{{ days }} </span>&nbsp;
                <span class="font-semibold">{{ hours }} </span>&nbsp;
                <span class="font-semibold">{{ minutes }} </span>&nbsp;
              </p>
            </div>
            <div v-if="animeinfo.format !== undefined">
              <h1 class="text-base font-semibold capitalize">Format</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.format }}</p>
            </div>
            <div v-if="animeinfo.episodes !== undefined">
              <h1 class="text-base font-semibold capitalize">Episodes</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.episodes }}</p>
            </div>
            <div v-if="animeinfo.duration !== undefined">
              <h1 class="text-base font-semibold capitalize">episode Duration</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.duration }} mins</p>
            </div>
            <div v-if="animeinfo.status !== undefined">
              <h1 class="text-base font-semibold capitalize">Status</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.status }}</p>
            </div>
            <div v-if="animeinfo.startDate !== undefined && animeinfo.startDate.length !== 0">
              <h1 class="text-base font-semibold capitalize">Start date</h1>
              <p class="text-sm font-normal capitalize">
                {{ formattedStartMonth }},{{ animeinfo.startDate.day }},{{
                  animeinfo.startDate.year
                }}
              </p>
            </div>
            <div v-if="animeinfo.endDate !== undefined && animeinfo.endDate.length !== 0">
              <h1 class="text-base font-semibold capitalize">Release Date</h1>
              <p class="text-sm font-normal capitalize">
                {{ formattedEndMonth }},{{ animeinfo.endDate.day }},{{ animeinfo.endDate.year }}
              </p>
            </div>
            <div v-if="animeinfo.season !== undefined">
              <h1 class="text-base font-semibold capitalize">Season</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.season }}</p>
            </div>
            <div v-if="animeinfo.studios !== undefined && animeinfo.studios.length !== 0">
              <h1 class="text-base font-semibold capitalize">Studios</h1>
              <p class="text-sm font-normal capitalize">
                {{ firstStudio }}
              </p>
            </div>
            <div v-if="animeinfo.studios !== undefined && animeinfo.studios.length !== 0">
              <h1 class="text-base font-semibold capitalize">Producers</h1>
              <p
                class="text-sm font-normal capitalize"
                v-for="(studio, index) in studioNames.slice(1)"
                :key="index"
              >
                {{ studio }}
              </p>
            </div>
            <div v-if="animeinfo.source !== undefined">
              <h1 class="text-base font-semibold capitalize">Source</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.source }}</p>
            </div>
            <div v-if="animeinfo.hashtag !== undefined">
              <h1 class="text-base font-semibold capitalize">Hashtag</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.hashtag }}</p>
            </div>
            <div v-if="animeinfo.title.romaji !== undefined">
              <h1 class="text-base font-semibold capitalize">Romaji</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.title.romaji }}</p>
            </div>
            <div v-if="animeinfo.title.english !== undefined">
              <h1 class="text-base font-semibold capitalize">English</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.title.english }}</p>
            </div>
            <div v-if="animeinfo.title.native !== undefined">
              <h1 class="text-base font-semibold capitalize">Native</h1>
              <p class="text-sm font-normal capitalize">{{ animeinfo.title.native }}</p>
            </div>
            <div v-if="animeinfo.synonyms !== undefined && animeinfo.synonyms.length !== 0">
              <h1 class="text-base font-semibold capitalize">Synonyms</h1>
              <p class="text-sm font-normal capitalize">
                <span v-for="(synonym, index) in animeinfo.synonyms" :key="index">
                  {{ synonym }}
                  <br v-if="index !== animeinfo.synonyms.length - 1" />
                </span>
              </p>
            </div>
          </section>
          <div class="">
            <h1 class="text-base font-semibold capitalize">geners</h1>

            <ul class="flex flex-wrap gap-1">
              <li
                v-for="(genre, genreIndex) in animeinfo.genres"
                :key="genreIndex"
                :style="{ backgroundColor: getRandomColor() }"
                class="text-sm font-bold py-1 px-3 rounded-full text-white w-fit bg-zinc-500 hover:bg-zinc-950 transition-all duration-200 ease-linear"
              >
                <router-link :to="{ name: 'Animegener', params: { tag: genre } }">
                  {{ genre }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="">
            <h1 class="text-base font-semibold capitalize">Tags</h1>

            <ul class="flex flex-col gap-2">
              <li
                v-for="(tags, tagIndex) in animeinfo.tags"
                :key="tagIndex"
                :style="{ backgroundColor: getRandomColor() }"
                class="py-1 px-2 bg-zinc-500 hover:bg-zinc-950 transition-all duration-200 ease-linear text-white rounded-sm capitalize font-medium"
              >
                <router-link :to="{ name: 'Animegener', params: { tag: tags.name } }">
                  {{ tags.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section class=" ">
        <section class="my-10 px-20">
          <labelComp title="recommended" :shouldshow="show" />
          <div v-if="loaders" class="flex justify-start items-center gap-2">
            <contentloader v-for="index in 5" :key="index" />
          </div>
          <div v-else class="flex justify-start items-center gap-5 flex-wrap">
            <router-link
              v-for="(anime, index) in reccomendation"
              :key="index"
              :to="{ name: 'anime', params: { id: anime.mediaRecommendation.id } }"
              @click="handleRouterLinkClick"
            >
              <contentCardComp
                :headingText="anime.mediaRecommendation.title.userPreferred"
                :altText="anime.mediaRecommendation.title.userPreferred"
                :imageSrc="anime.mediaRecommendation.coverImage.large"
              />
            </router-link>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
import contentsideloader from '@/components/contentSideLoader.vue'
import contentSidebar from '@/components/contentSidebarComp.vue'
import viewloaderComp from '@/components/viewloaderComp.vue'
import labelComp from '@/components/labelComp.vue'
import contentloader from '@/components/contentLoader.vue'
import contentCardComp from '@/components/contentCardComp.vue'
export default {
  components: {
    labelComp,
    contentCardComp,
    contentloader,
    viewloaderComp,
    contentSidebar,
    contentsideloader
  },
  data() {
    return {
      show: false,
      animeinfo: [],
      preferedName: '',
      dispImg: '',
      relations: [],
      loaders: true,
      reccomendation: [],
      staffInfo: [],
      characterInfo: [],
      currentIndex: 0,
      timer: null,
      colors: [
        '#F87171',
        '#FBBF24',
        '#FACC15',
        '#A3E635',
        '#6EE7B7',
        '#93C5FD',
        '#FBCFE8',
        '#FCD34D',
        '#6EE7B7',
        '#4ADE80',
        '#60A5FA',
        '#7F9CF5',
        '#A5B4FC',
        '#C7D2FE',
        '#FDE68A',
        '#FCA5A5',
        '#EAB308',
        '#B91C1C',
        '#DB2777',
        '#EA885B',
        '#F59E0B',
        '#F87171',
        '#FBBF24',
        '#FACC15',
        '#A3E635',
        '#6EE7B7',
        '#93C5FD',
        '#FBCFE8',
        '#FCD34D',
        '#6EE7B7',
        '#4ADE80',
        '#60A5FA',
        '#7F9CF5',
        '#A5B4FC',
        '#C7D2FE',
        '#FDE68A',
        '#FCA5A5',
        '#EAB308',
        '#B91C1C',
        '#DB2777',
        '#EA885B',
        '#F59E0B',
        '#F87171',
        '#FBBF24',
        '#FACC15',
        '#A3E635',
        '#6EE7B7',
        '#93C5FD',
        '#FBCFE8',
        '#FCD34D',
        '#6EE7B7',
        '#4ADE80',
        '#60A5FA',
        '#7F9CF5',
        '#A5B4FC',
        '#C7D2FE',
        '#FDE68A',
        '#FCA5A5',
        '#EAB308',
        '#B91C1C',
        '#DB2777',
        '#EA885B',
        '#F59E0B',
        '#F87171',
        '#FBBF24',
        '#FACC15',
        '#A3E635',
        '#6EE7B7',
        '#93C5FD',
        '#FBCFE8',
        '#FCD34D',
        '#6EE7B7',
        '#4ADE80',
        '#60A5FA',
        '#7F9CF5',
        '#A5B4FC',
        '#C7D2FE',
        '#FDE68A',
        '#FCA5A5',
        '#EAB308',
        '#B91C1C',
        '#DB2777',
        '#EA885B',
        '#F59E0B',
        '#F87171',
        '#FBBF24',
        '#FACC15',
        '#A3E635',
        '#6EE7B7',
        '#93C5FD',
        '#FBCFE8',
        '#FCD34D',
        '#6EE7B7',
        '#4ADE80',
        '#60A5FA',
        '#7F9CF5',
        '#A5B4FC',
        '#C7D2FE',
        '#FDE68A',
        '#FCA5A5',
        '#EAB308',
        '#B91C1C',
        '#DB2777',
        '#EA885B',
        '#F59E0B'
      ]
    }
  },
  computed: {
    firstStudio() {
      if (this.animeinfo.studios.edges.length > 0) {
        return this.animeinfo.studios.edges[0].node.name
      } else {
        return null
      }
    },
    studioNames() {
      return this.animeinfo.studios.edges.map((edge) => edge.node.name)
    },
    formattedStartMonth() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      const monthIndex = this.animeinfo.startDate.month - 1
      return months[monthIndex]
    },
    formattedEndMonth() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      const monthIndex = this.animeinfo.endDate.month - 1
      return months[monthIndex]
    },
    days() {
      return Math.floor(this.animeinfo.nextAiringEpisode.timeUntilAiring / (24 * 60 * 60)) + 'd'
    },
    hours() {
      return (
        Math.floor(
          (this.animeinfo.nextAiringEpisode.timeUntilAiring % (24 * 60 * 60)) / (60 * 60)
        ) + 'h'
      )
    },
    minutes() {
      return Math.floor((this.animeinfo.nextAiringEpisode.timeUntilAiring % (60 * 60)) / 60) + 'm'
    }
  },

  methods: {
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    },
    //   fetchOtherData() {
    //     const staffQuery = `query media($id: Int, $page: Int) {
    //   Media(id: $id) {
    //     id
    //     staff(page: $page, sort: [RELEVANCE, ID]) {
    //       pageInfo {
    //         total
    //         perPage
    //         currentPage
    //         lastPage
    //         hasNextPage
    //       }
    //       edges {
    //         id
    //         role
    //         node {
    //           id
    //           name {
    //             userPreferred
    //           }
    //           image {
    //             large
    //           }
    //         }
    //       }
    //     }
    //   }
    // }`

    //     // Variables for staff query
    //     const staffVariables = {
    //       id: this.$route.params.id,
    //       page: 1
    //     }

    //     // Query for fetching character information
    //     const characterQuery = `query media($id: Int, $page: Int) {
    //   Media(id: $id) {
    //     id
    //     characters(page: $page, sort: [ROLE, RELEVANCE, ID]) {
    //       pageInfo {
    //         total
    //         perPage
    //         currentPage
    //         lastPage
    //         hasNextPage
    //       }
    //       edges {
    //         id
    //         role
    //         name
    //         voiceActorRoles(sort: [RELEVANCE, ID]) {
    //           roleNotes
    //           dubGroup
    //           voiceActor {
    //             id
    //             name {
    //               userPreferred
    //             }
    //             language
    //             image {
    //               large
    //             }
    //           }
    //         }
    //         node {
    //           id
    //           name {
    //             userPreferred
    //           }
    //           image {
    //             large
    //           }
    //         }
    //       }
    //     }
    //   }
    // }`

    //     // Variables for character query
    //     const characterVariables = {
    //       id: this.$route.params.id,
    //       page: 1
    //     }

    //     const url = 'https://graphql.anilist.co/'

    //     // Fetch staff data
    //     fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         query: staffQuery,
    //         variables: staffVariables
    //       })
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         this.staffInfo = data.data.Media.staff
    //         console.log(this.staffInfo)
    //         // Handle staff data as needed
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching staff data:', error)
    //       })

    //     // Fetch character data
    //     fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         query: characterQuery,
    //         variables: characterVariables
    //       })
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         this.characterInfo = data.data.Media.characters
    //         console.log(this.characterInfo)
    //         // Handle character data as needed
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching character data:', error)
    //       })
    //   },
    fetchData() {
      const id = this.$route.params.id
      const url = 'https://graphql.anilist.co/'
      const query = `query media($id: Int, $type: MediaType, $isAdult: Boolean) {
    Media(id: $id, type: $type, isAdult: $isAdult) {
      id
      title {
        userPreferred
        romaji
        english
        native
      }
      coverImage {
        extraLarge
        large
      }
      bannerImage
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
      description
      season
      seasonYear
      type
      format
      status(version: 2)
      episodes
      duration
      chapters
      volumes
      genres
      synonyms
      source(version: 3)
      isAdult
      isLocked
      meanScore
      averageScore
      popularity
      favourites
      isFavouriteBlocked
      hashtag
      countryOfOrigin
      isLicensed
      isFavourite
      isRecommendationBlocked
      isReviewBlocked
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      relations {
        edges {
          id
          relationType(version: 2)
          node {
            id
            title {
              userPreferred
            }
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              large
            }
          }
        }
      }
      characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
        edges {
          id
          role
          name
          voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
            id
            name {
              userPreferred
            }
            language
            image {
              large
            }
          }
          node {
            id
            name {
              userPreferred
            }
            image {
              large
            }
          }
        }
      }
      staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
        edges {
          id
          role
          node {
            id
            name {
              userPreferred
            }
            language
            image {
              large
            }
          }
        }
      }
      studios {
        edges {
          isMain
          node {
            id
            name
          }
        }
      }
      reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          summary
          rating
          ratingAmount
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
      recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
        pageInfo {
          total
        }
        nodes {
          id
          rating
          userRating
          mediaRecommendation {
            id
            title {
              userPreferred
            }
            format
            type
            status(version: 2)
            bannerImage
            coverImage {
              large
            }
          }
          user {
            id
            name
            avatar {
              large
            }
          }
        }
      }
      externalLinks {
        id
        site
        url
        type
        language
        color
        icon
        notes
        isDisabled
      }
      streamingEpisodes {
        site
        title
        thumbnail
        url
      }
      trailer {
        id
        site
      }
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      tags {
        id
        name
        description
        rank
        isMediaSpoiler
        isGeneralSpoiler
        userId
      }
      mediaListEntry {
        id
        status
        score
      }
      stats {
        statusDistribution {
          status
          amount
        }
        scoreDistribution {
          score
          amount
        }
      }
    }
  }`

      const variables = {
        id: id, // Example anime ID
        type: 'ANIME',
        isAdult: false
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
          this.animeinfo = data.data.Media
          this.dispImg = data.data.Media.coverImage.extraLarge
          this.preferedName = data.data.Media.title.userPreferred
          this.relations = data.data.Media.relations
          this.reccomendation = data.data.Media.recommendations.nodes
          console.log(this.animeinfo)
          console.log(this.preferedName)
          setTimeout(() => {
            // After 2 seconds, set loader to false
            this.loaders = false
          }, 1000)
          // Handle response data as needed
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  },

  mounted() {
    this.fetchData()
  },
  watch: {
    $route() {
      ;(this.loaders = true), this.fetchData(), window.scrollTo(0, 0)
    }
  }
}
</script>
