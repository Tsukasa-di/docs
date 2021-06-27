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
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    if (this.$route.name !== "gsap") {
      document.querySelector("html").classList.add("isnotHome");
    }
  },
  watch: {
    "$route": function (to, from) {
      if (from.name === "gsap") {
        setTimeout(() => {
          document.querySelector("html").classList.add("isnotHome");
        }, 700);
      }
      if (to.name === "gsap") {
        document.querySelector("html").classList.remove("isnotHome");
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
