<template lang="pug">
  div
    h1
      |Docs.
    h1
      |GreenSock
    h1
      |Animation Platform
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
export default {
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

h1 {
  color: map.get(global.$color, sub);
  font-family: map.get(global.$fonts, title);
  font-size: 120px;
  font-weight: normal;
}
</style>
