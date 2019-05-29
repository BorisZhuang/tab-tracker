export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      showPassword: false,
      formHasErrors: false,
      rules: {
        required: value => !!value || 'Required.',
        lengthLimits: v => (v.length >= 8 && v.length <= 32) || 'Min 8 charactersIt must be at least 8 characters in length and not greater than 32 characters in length.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  computed: {
    form () {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    checkFormHasError () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true
        this.$refs[f].validate(true)
      })
    },
    postProcessing (response) {
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
