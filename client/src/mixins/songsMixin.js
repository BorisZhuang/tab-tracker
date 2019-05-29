import { mapState } from 'vuex'

export const songsTableMixin = {
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
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  }
}

export const songsEditMixin = {
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
    isAllFieldsFilled () {
      return Object.keys(this.song).every(key => !!this.song[key])
    }
  }
}
