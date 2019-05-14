<template>
  <panel title="Search">
    <v-text-field
      label="Search"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>

export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
