<template lang="pug">
  div#app-header(
    ref="appHeader"
  )
    navi
    header
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
          |GSAP Docs. - {{ this.$store.state.currentPageInfo.title }}
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
    this.naviTriggerHover("mouseenter", "add");
    this.naviTriggerHover("mouseleave", "remove");
  },
  methods: {
    gotoHome() {
      this.$router.push('/gsap')
      this.$refs.appHeader.classList.remove("naviActive");
    },
    clickNaviTrigger() {
      this.$refs.appHeader.classList.toggle("naviActive");
    },
    naviTriggerHover(event, toggle) {
      this.$refs.naviTrigger.addEventListener(event, () => {
        if (toggle === "add") {
          this.$refs.appHeader.classList.add("naviHover");
        } else if (toggle === "remove") {
          this.$refs.appHeader.classList.remove("naviHover");
        }
      })
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

// 現在のページに合わせたheaderの色を設定
// ===================================================

body {
  &#top {
    .navi-trigger {
      display: none;
    }

    header {
      background-color: transparent;

      p {
        color: map.get(global.$color, sub);
      }

    .back-home {
        display: none;
      }

      &:hover {
        background-color: transparent;
        color: map.get(global.$color, sub);
        cursor: unset;
        border: none;

        .back-home {
          opacity: 0;
          color: map.get(global.$color, sub);
          pointer-events: none;
        }
      }
    }
  }

  &#getting-started header {
    background-color: map.get(global.$color, _yellow);
    &:hover {
      background-color: transparent;
    }
  }

  &#learning header {
    background-color: map.get(global.$color, _blue);
    &:hover {
      background-color: transparent;
    }
  }

  &#samples header {
    background-color: map.get(global.$color, _red);
    &:hover {
      background-color: transparent;
    }
  }
}

// header style
// ===================================================

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
    display: flex;
    justify-content: center;
    text-align: center;

    pointer-events: none;
    transition: 0.7s;
  }

  &:hover {
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

// ===================================================
// 【mixin】naviActionStyles()
// naviTriggerをHover & Clickしている時の
// headerの色を設定するための処理
// ===================================================

@mixin naviActionStyles() {
  .naviHover, .naviActive {
    header {
      @content;
      border: none;

      .back-home {
        color: transparent;
      }
    }
  }
}

body {
  &#getting-started {
    @include naviActionStyles() {
      background-color: map.get(global.$color, _yellow);
    }
  }
  &#learning {
    @include naviActionStyles() {
      background-color: map.get(global.$color, _blue);
    }
  }
  &#samples {
    @include naviActionStyles() {
      background-color: map.get(global.$color, _red);
    }
  }
}

// naviTriggerをHover中のStyle
// ===================================================

.naviHover {
  header {
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

// naviTriggerをClickした後のStyle
// ===================================================

.naviActive {
  #Navi {
    opacity: 1;
    pointer-events: visible;
    width: 90%;
  }

  header {
    width: 100vw;
    cursor: unset;
    pointer-events: none;

    .header-inner {
      border-bottom: 1px solid map.get(global.$color, _white);
    }

    .navi-trigger {
      pointer-events: visible;
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
