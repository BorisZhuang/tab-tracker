<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 ml-2>
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout mt-2>
      <v-flex xs6>
        <Tab :song="song" />
      </v-flex>

      <v-flex xs6 ml-2>
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongsService from '@/services/SongsService'
import SongsHistoryService from '@/services/SongsHistoryService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      song: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
    if (this.isUserLoggedIn) {
      SongsHistoryService.post({
        songId,
        userId: this.user.id
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
