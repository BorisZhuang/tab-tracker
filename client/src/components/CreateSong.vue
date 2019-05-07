<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="AlbumImage"
          v-model="song.albumImage"
        ></v-text-field>

        <v-text-field
          label="YoutubeId"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"
        ></v-text-field>

        <v-text-field
          label="Tab"
          multi-line
          v-model="song.tab"
        ></v-text-field>
      </panel>
      <v-btn v-on:click="create" class="cyan ma-4" dark>Create</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
