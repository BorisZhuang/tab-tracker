<template>
  <v-layout>
      <v-flex class="xs6" v-if="isUserLoggedIn">
        <songs-bookmarks/>
        <recently-viewed-songs class="mt-2"/>
      </v-flex>

      <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
        }" class="ml-2">
        <songs-search-panel/>
        <songs-panel class="mt-2"/>
      </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import SongsService from '@/services/SongsService'
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'

export default {
  components: {
    SongsSearchPanel,
    SongsPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
