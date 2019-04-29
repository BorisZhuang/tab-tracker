<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <input v-model="email" type="email" name="email" placeholder="email" />
            <br>
            <input v-model="password" type="password" name="password" placeholder="password" />
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn v-on:click="register" class="cyan">Register</v-btn>
          </div>
        </div>
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
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenService.register({
          email: this.email,
          password: this.password
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
  color: red
}
</style>
