<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Login">
          <form name="tab-tracker-form" autocomplete="on">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn v-on:click="login" class="cyan" dark>LOGIN</v-btn>
          </form>
        </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import AuthenService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenService.login({
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
