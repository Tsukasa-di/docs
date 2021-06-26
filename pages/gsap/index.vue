<template lang="pug">
  div
    .top
      document
      app-title
    button(
      @click='click'
      style="width: 1000px; height: 50px;"
      data-button="top"
    )
      |TOP
    button(
      @click='click'
      style="width: 1000px; height: 50px;"
      data-button="getting-started"
    )
      |Getting Started
    button(
      @click='click'
      style="width: 1000px; height: 50px;"
      data-button="learning"
    )
      |Learning
    button(
      @click='click'
      style="width: 1000px; height: 50px;"
      data-button="samples"
    )
      |Samples
</template>

<script>
import routes from "~/.nuxt/routes.json";
import AppTitle from "~/components/home/AppTitle";
import document from "~/components/home/document";

export default {
  components: {
    AppTitle,
    document
  },
  data() {
    return {
      routes: routes
    }
  },
  mounted() {
    this.routes.forEach( route => {
      console.log(route.path);
    });
  },
  methods: {
    click: function(event) {
      this.$store.commit('changeHeader', event.target.dataset.button);
    }
  }
}

</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

.top {
  width: 100%;
  height: 100%;
  position: relative;
}

.document {
  position: absolute;
  transform-origin: left;
  transform: rotate(-45deg);
  top: 250px;
  left: 170px;
}

.app-title {
  position: absolute;
  bottom: 50px;
  right: 50px;
}
</style>
