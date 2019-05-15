<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn flat dark class="toolbar-title" :to="({name: 'songs'})">TabTracker</v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn flat dark :to="({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="({name: 'login'})">
        LOGIN
      </v-btn>

      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="({name: 'register'})">
        Sign Up
      </v-btn>

      <v-btn v-if="$store.state.isUserLoggedIn" flat dark v-on:click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar-title {
  font-size: 23px;
}
</style>
