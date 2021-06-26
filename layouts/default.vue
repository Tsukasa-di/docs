<template lang="pug">
  div#L-default
    app-header
    Nuxt#main
</template>

<script>
import AppHeader from "~/components/layouts/AppHeader";

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
#main {
  margin-left: 60px;
}
</style>
