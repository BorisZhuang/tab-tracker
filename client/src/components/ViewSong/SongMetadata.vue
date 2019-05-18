<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
        <v-btn
          class="cyan ma-2"
          dark
          :to="({name: 'song-edit', params: {songId: song.id}})">
          Edit
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          class="cyan ma-2"
          dark
          @click="setBookmark">
          Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          class="cyan ma-2"
          dark
          @click="unbookmark">
          Unbookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImage" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }
    try {
      this.bookmark = (await BookmarksService.index({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async setBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (error) {
        console.log(error)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
