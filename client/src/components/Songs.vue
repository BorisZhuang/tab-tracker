<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <v-btn
            slot='action'
            class="cyan"
            small
            absolute
            right
            middle
            fab
            @click="navigateTo({name: 'songs-create'})"
            >
            <v-icon>add</v-icon>
          </v-btn>
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
</style>
