<template>
  <v-layout column>
      <v-flex class="xs6">
        <songs-search-panel/>
        <songs-panel class="mt-2"/>
      </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'

export default {
  components: {
    SongsSearchPanel,
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-title {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
