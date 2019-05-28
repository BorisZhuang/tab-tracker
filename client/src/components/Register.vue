<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Register">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field
              ref="email"
              label="Email"
              v-model="email"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <br>
            <v-text-field
              ref="password"
              label="Password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.lengthLimits]"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn v-on:click="register" class="cyan" dark>Register</v-btn>
          </form>
        </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import AuthenService from '@/services/AuthenticationService'

export default {
  name: 'Register',
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
    async register () {
      try {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true
          this.$refs[f].validate(true)
        })

        if (this.formHasErrors) return

        const response = await AuthenService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white
}
</style>
