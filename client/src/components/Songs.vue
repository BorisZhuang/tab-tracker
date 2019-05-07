<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <div v-for="song in songs" :key="song.id">
            {{song.title}} - {{song.artist}} - {{song.album}}
          </div>
        </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
