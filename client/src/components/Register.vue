<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="email" />
    <br>
    <input v-model="password" type="password" name="password" placeholder="password" />
    <br>
    <div class="error" v-html="error" />
    <br>
    <button v-on:click="register">Register</button>
  </div>
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
