<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Register">
          <form name="tab-tracker-form" autocomplete="off">
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
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
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
