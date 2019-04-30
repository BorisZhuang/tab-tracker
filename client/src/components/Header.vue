<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn flat dark class="toolbar-title" v-on:click="navigateTo({name: 'root'})">TabTracker</v-btn>
    </v-toolbar-items>

<!--     <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark v-on:click="navigateTo({name: 'login'})">
        LOGIN
      </v-btn>

      <v-btn flat dark v-on:click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
