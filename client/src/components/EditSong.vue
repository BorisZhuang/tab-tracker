<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          :rules="[rules.required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          :rules="[rules.required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          :rules="[rules.required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          :rules="[rules.required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="AlbumImage"
          :rules="[rules.required]"
          v-model="song.albumImage"
        ></v-text-field>

        <v-text-field
          label="YoutubeId"
          :rules="[rules.required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-textarea
          label="Lyrics"
          :rules="[rules.required]"
          v-model="song.lyrics"
        ></v-textarea>

        <v-textarea
          label="Tab"
          :rules="[rules.required]"
          v-model="song.tab"
        ></v-textarea>
      </panel>

      <div class="error" v-if="error">
        {{error}}
      </div>
      <v-btn v-on:click="save" class="cyan ma-4" dark>
        Save
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
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
      },
      rules: {
        required: value => !!value || 'required'
      },
      error: null
    }
  },
  methods: {
    async save () {
      try {
        this.error = null
        const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
        if (!areAllFieldsFilledIn) {
          this.error = 'Please fill in all the required fields'
          return
        }

        const songId = this.$store.state.route.params.songId
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
