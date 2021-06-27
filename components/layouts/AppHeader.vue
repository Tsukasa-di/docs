<template lang="pug">
  div#app-header
    header(
      :class='[headerState.class, isHomeClass]'
    )
      .header-inner
        p
          |GSAP Docs. - {{ headerState.title }}
        a.back-home(
          @click='gotoHome'
        )
          |BACK HOME
</template>

<script>
export default {
  computed: {
    headerState: function() {
      const output = {
        title: "TOP",
        class: "top",
        isHome: true
      };
      if (this.$route.path == "/gsap") {
        output.title = "TOP";
        output.class = "top";
        output.isHome = true;
      } else if (this.$route.path.includes("getting-started")) {
        output.title = "Getting Started";
        output.class = "getting-started";
        output.isHome = false;
      } else if (this.$route.path.includes("learning")) {
        output.title = "Learning";
        output.class = "learning";
        output.isHome = false;
      } else if (this.$route.path.includes("samples")) {
        output.title = "Samples";
        output.class = "samples";
        output.isHome = false;
      }
      return output;
    },
    isHomeClass: function() {
      if (!this.headerState.isHome) {
        return "false";
      }
    }
  },
  methods: {
    gotoHome() {
      if (!this.headerState.isHome) {
        this.$router.push('/gsap')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

p, a {
  font-family: map.get(global.$fonts, index);
}

header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 60px;
  height: 100vh;

  transition: 0.7s;
  box-sizing: border-box;

  p, a {
    color: map.get(global.$color, _white);
    font-size: 16px;

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
    transition: 0.7s;
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
