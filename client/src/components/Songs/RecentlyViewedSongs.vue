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
import { mapState } from 'vuex'
import SongsHistoryService from '@/services/SongsHistoryService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          align: 'right',
          value: 'title'
        },
        {
          text: 'Artist',
          align: 'right',
          value: 'artist'
        }
      ],
      pagination: {
        descending: true,
        sortBy: 'createdAt'
      },
      songs: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.songs = (await SongsHistoryService.index({
        userId: this.user.id
      })).data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
