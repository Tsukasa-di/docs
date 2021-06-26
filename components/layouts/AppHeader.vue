<template lang="pug">
  div#app-header
    header(
      :class='[headerState.class, headerState.isHome]'
    )
      .header-inner
        p
          |GSAP Docs. - {{ headerState.title }}
        p.back-home
          |BACK HOME
</template>

<script>
export default {
  computed: {
    headerState: function() {
      const output = {
        title: "TOP",
        class: "top",
        isHome: "true"
      };
      if (this.$store.state.header == "top") {
        output.title = "TOP";
        output.class = "top";
        output.isHome = "true";
      } else if (this.$store.state.header == "getting-started") {
        output.title = "Getting Started";
        output.class = "getting-started";
        output.isHome = "false";
      } else if (this.$store.state.header == "learning") {
        output.title = "Learning";
        output.class = "learning";
        output.isHome = "false";
      } else if (this.$store.state.header == "samples") {
        output.title = "Samples";
        output.class = "samples";
        output.isHome = "false";
      }
      return output;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 100vh;

  font-family: map.get(global.$fonts, index);
  font-size: 16px;

  transition: 0.3s;
  box-sizing: border-box;

  p {
    color: map.get(global.$color, _white);

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    position: absolute;
    bottom: 4px;
    left: 30px;
  }

  &.top {
    background-color: transparent;
     p {
       color: map.get(global.$color, sub);
     }
  }

  &.getting-started {
    background-color: map.get(global.$color, _yellow);
  }

  &.learning {
    background-color: map.get(global.$color, _blue);
  }

  &.samples {
    background-color: map.get(global.$color, _red);
  }

  .header-inner {
    width: 100vh;
    height: 60px;
    position: relative;
    top: 0;
    right: 100vh;
    transform-origin: top right;
    transform: rotate(270deg);
  }

  .back-home {
    opacity: 0;
    color: map.get(global.$color, _white);

    width: 100vh;
    justify-content: center;
    text-align: center;

    pointer-events: none;
    transition: 0.3s;
  }

  &.false:hover {
    background-color: transparent;
    color: transparent;
    cursor: pointer;
    border: 1px solid map.get(global.$color, sub);

    .back-home {
      opacity: 1;
      color: map.get(global.$color, sub);
      pointer-events: visible;
    }
  }

}
</style>
