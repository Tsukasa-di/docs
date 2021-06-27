<template lang="pug">
  div#L-default
    app-header
    Nuxt#main(
      :class='{ "isHome": isHome }'
    )
</template>

<script>
import AppHeader from "~/components/layouts/AppHeader";

export default {
  components: {
    AppHeader
  },
  transition: {
		name: 'page',
		mode: 'ease'
	},
  computed: {
    isHome: function() {
      if (this.$route.name === "gsap") {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
#main {
  margin-left: 60px;
}
</style>
