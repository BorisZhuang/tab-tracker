<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Login">
          <form name="tab-tracker-form" autocomplete="on">
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
            <v-btn v-on:click="login" class="cyan" dark>LOGIN</v-btn>
          </form>
        </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import AuthenService from '@/services/AuthenticationService'
import registerMixin from '@/mixins/registerMixin'

export default {
  name: 'Login',
  mixins: [registerMixin],
  methods: {
    async login () {
      try {
        this.checkFormHasError()
        if (this.formHasErrors) return

        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        })
        this.postProcessing(response)
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
