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
  },
  transition: {
		name: 'page',
		mode: 'ease'
	},
  methods: {
    currentPageInfoResult: function() {
      const currentPageInfo = {};
      if (this.$route.path == "/gsap") {
        currentPageInfo.id = "top";
        currentPageInfo.title = "TOP";
      } else if (this.$route.path.includes("getting-started")) {
        currentPageInfo.id = "getting-started";
        currentPageInfo.title = "Getting Started";
      } else if (this.$route.path.includes("learning")) {
        currentPageInfo.id = "learning";
        currentPageInfo.title = "Learning";
      } else if (this.$route.path.includes("samples")) {
        currentPageInfo.id = "samples";
        currentPageInfo.title = "Samples";
      } else {
        currentPageInfo.id = "404";
        currentPageInfo.title = "404";
      }
      this.$store.commit("currentPageInfo", currentPageInfo)
    }
  },
  mounted() {
    this.currentPageInfoResult();
    document.querySelector("body").id = this.$store.state.currentPageInfo.id;
  },
  watch: {
    "$route": function() {
      this.currentPageInfoResult();
      document.querySelector("body").id = this.$store.state.currentPageInfo.id;
    }
  }
}
</script>

<style lang="scss">
@use '~/assets/sass/setting/_app' as global;
@use 'sass:map';

#main {
  margin-left: 60px;

  @include global.sp-layout() {
    margin-left: 0px;
  }
}
</style>
