<template>
  <panel title="Youtube Video">
    <youtube :video-id="youtubeId" height="186"/>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
