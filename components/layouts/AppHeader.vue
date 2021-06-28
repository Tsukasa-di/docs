<template lang="pug">
  div#app-header(
    ref="appHeader"
  )
    navi
    header(
      :class='[headerState.class, isHomeClass]'
    )
      .header-inner
        .navi-trigger(
          ref="naviTrigger"
          @click='clickNaviTrigger'
        )
          span
          span
          span.menu
            |MENU
        p
          |GSAP Docs. - {{ headerState.title }}
        a.back-home(
          @click='gotoHome'
        )
          |BACK HOME
</template>

<script>
import Navi from "~/components/layouts/Navi";

export default {
  components: {
    Navi
  },
  mounted() {
    this.$refs.naviTrigger.addEventListener("mouseenter", event => {
      this.$refs.appHeader.classList.add("naviHover");
    })
    this.$refs.naviTrigger.addEventListener("mouseleave", event => {
      this.$refs.appHeader.classList.remove("naviHover");
    })
  },
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
    },
    clickNaviTrigger() {
      this.$refs.appHeader.classList.toggle("naviActive");
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

  transition: 0.7s ease-in-out;
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
    border-bottom: 1px solid transparent;

    transform-origin: top right;
    transform: rotate(270deg);
    transition: .5s;
  }

  .navi-trigger {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;

    height: 100%;
    width: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      width: 30px;
      height: 3px;
      background-color: map.get(global.$color, _white);
      transition: .5s;

      &:nth-child(2) {
        margin: 6px 0 3px 0;
      }

      &:last-child {
        height: auto;
        background-color: transparent;
        font-size: 11px;
        color: map.get(global.$color, _white);
        font-family: map.get(global.$fonts, text);
      }
    }
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

  @include global.sp-layout() {
    width: 40px;
    top: unset;
    bottom: 0;
    height: 40px;
    width: 100%;

    .header-inner {
      height: 40px;
      transform: rotate(0deg);
      position: relative;
      top: 0;
      right: unset;
    }

    p, a {
      font-size: 12px;
      bottom: 0px;
      left: 10px;
    }
  }
}

.naviHover, .naviActive {
  header.false {
    border: none;

    .back-home {
      color: transparent;
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
  }
}

.naviHover {
  header.false {
    width: 80px;

    .navi-trigger {
      span:nth-child(1) {
        height: 4px;
        transform: translateY(9px) rotate(35deg);
      }
      .menu {
        opacity: 0;
      }
    }
  }
}

.naviActive {
  #Navi {
    opacity: 1;
    pointer-events: visible;
    width: 90%;
  }

  header.false {
    width: 100vw;
    cursor: unset;

    .header-inner {
      border-bottom: 1px solid map.get(global.$color, _white);
    }

    .navi-trigger {
      span:nth-child(1) {
        height: 4px;
        transform: translateY(9px) rotate(45deg);
      }
      span:nth-child(2) {
        height: 4px;
        transform: rotate(-45deg);
      }
      .menu {
        opacity: 0;
      }
    }
  }
}
</style>
