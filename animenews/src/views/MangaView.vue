<template>
  <section class="">
    <viewloaderComp v-if="loaders" />
    <div v-else class="opacity-0 animate-fade-in mb-5">
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
            <h1 class="font-semibold text-3xl font-raleway dark:text-zinc-50">
              {{ preferedName }}
            </h1>
            <p
              class="my-4 text-lg leading-6 font-normal font-raleway dark:text-zinc-50"
              v-html="animeinfo.description"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <span
      class="mb-10 mx-auto justify-center flex h-[0.1rem] w-[1800px] bg-zinc-800 dark:bg-zinc-50 inline-block"
    ></span>
    <section class="app flex gap-6">
      <div class="flex flex-col">
        <contentsideloader v-if="loaders" />
        <div v-else class="w-[208px] flex flex-col gap-3 animate-fade-in">
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
                <router-link :to="{ name: 'Mangagener', params: { tag: genre } }">
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
                <router-link :to="{ name: 'Mangagener', params: { tag: tags.name } }">
                  {{ tags.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section class=" ">
        <section class="mb-10 px-20">
          <labelComp title="Relations" :shouldshow="show" class="min-w-[1000px]" />
          <div v-if="loaders" class="flex gap-3 flex-wrap">
            <relationsloader v-for="index in 2" :key="index" />
          </div>
          <div v-else class="animate-fade-in flex gap-3 flex-wrap">
            <router-link
              v-for="(relation, index) in relations.edges"
              :key="index"
              :to="getRouterLink(relation.node.type, relation.node.id)"
            >
              <relationsCard
                :imageSource="relation.node.coverImage.large"
                :title="relation.relationType"
                :subtitle="relation.node.title.userPreferred"
                :category="relation.node.type"
                :status="relation.node.status"
              />
            </router-link>
          </div>
        </section>
        <section class="mb-10 px-20">
          <labelComp title="characters" :shouldshow="show" class="min-w-[1000px]" />
          <div v-if="loaders" class="flex gap-3 flex-wrap">
            <relationsloader v-for="index in 2" :key="index" />
          </div>
          <div v-else class="animate-fade-in flex gap-3 flex-wrap">
            <charactercard
              v-for="(character, index) in characterInfo.edges"
              :key="index"
              :imageSource="character.node.image.large"
              :CharacterName="character.node.name.userPreferred"
              :role="character.role"
            />
          </div>
        </section>
        <section class="mb-10 px-20">
          <labelComp title="Staff" :shouldshow="show" class="min-w-[1000px]" />
          <div v-if="loaders" class="flex gap-3 flex-wrap">
            <relationsloader v-for="index in 2" :key="index" />
          </div>
          <div v-else class="animate-fade-in flex gap-3 flex-wrap">
            <charactercard
              v-for="(staff, index) in staffInfo.edges"
              :key="index"
              :imageSource="staff.node.image.large"
              :CharacterName="staff.node.name.userPreferred"
              :role="staff.role"
            />
          </div>
        </section>
        <section class="my-10 px-20">
          <labelComp title="recommended" :shouldshow="show" class="min-w-[1000px]" />
          <div v-if="loaders" class="flex justify-start items-center gap-2">
            <contentloader v-for="index in 5" :key="index" />
          </div>
          <div v-else class="flex justify-start items-center gap-5 flex-wrap animate-fade-in">
            <router-link
              v-for="(anime, index) in reccomendation"
              :key="index"
              :to="{ name: 'manga', params: { id: anime.mediaRecommendation.id } }"
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
import charactercard from '@/components/characterCardComp.vue'
import relationsloader from '@/components/relationsLoaderComp.vue'
import contentsideloader from '@/components/contentSideLoader.vue'
import relationsCard from '@/components/relationsCardComp.vue'
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
    relationsCard,
    contentsideloader,
    relationsloader,
    charactercard
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
        ' '
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
    getRouterLink(type, id) {
      return {
        name: type.toLowerCase(), // Assuming your route name matches the type
        params: { id: id.toString() }
      }
    },
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    },

    fetchData() {
      const url = 'https://graphql.anilist.co/'

      const staffQuery = `query media($id: Int, $page: Int) {
        Media(id: $id) {
          id
          staff(page: $page, sort: [RELEVANCE, ID]) {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
            edges {
              id
              role
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
        }
      }`

      const characterQuery = `query media($id: Int, $page: Int) {
        Media(id: $id) {
          id
          characters(page: $page, sort: [ROLE, RELEVANCE, ID]) {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
            edges {
              id
              role
              name
              voiceActorRoles(sort: [RELEVANCE, ID]) {
                roleNotes
                dubGroup
                voiceActor {
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
        }
      }`
      const animeQuery = `query media($id: Int, $type: MediaType, $isAdult: Boolean) {
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

      const staffVariables = {
        id: this.$route.params.id,
        page: 1
      }
      const characterVariables = {
        id: this.$route.params.id,
        page: 1
      }
      const animeVariables = {
        id: this.$route.params.id,
        type: 'MANGA',
        isAdult: false
      }

      const staffRequest = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: staffQuery,
          variables: staffVariables
        })
      })
      const characterRequest = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: characterQuery,
          variables: characterVariables
        })
      })
      const animeRequest = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: animeQuery,
          variables: animeVariables
        })
      })

      Promise.all([staffRequest, characterRequest, animeRequest])
        .then((responses) => Promise.all(responses.map((response) => response.json())))
        .then((data) => {
          this.staffInfo = data[0].data.Media.staff
          this.characterInfo = data[1].data.Media.characters
          this.animeinfo = data[2].data.Media
          this.dispImg = this.animeinfo.coverImage.extraLarge
          this.preferedName = this.animeinfo.title.userPreferred
          this.relations = this.animeinfo.relations
          this.reccomendation = this.animeinfo.recommendations.nodes

          console.log(data[0].data.Media.staff)
          console.log(data[1].data.Media.characters)
          console.log(data[2].data.Media)

          setTimeout(() => {
            this.loaders = false // After 2 seconds, set loader to false
          }, 2500)
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
