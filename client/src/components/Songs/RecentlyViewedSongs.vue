<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="songs"
      class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.artist }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import SongsHistoryService from '@/services/SongsHistoryService'
import { songsTableMixin } from '@/mixins/songsMixin'

export default {
  mixins: [songsTableMixin],
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.songs = (await SongsHistoryService.index()).data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
