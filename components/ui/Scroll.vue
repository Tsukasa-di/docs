<template lang="pug">
  div#scroll
    .decoration
      span(
        ref="scroll"
      )
    p
      |SCROLL
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.timeline({repeat: -1, repeatDelay: 1})
      .to(this.$refs.scroll, {
        duration: .7,
        ease: "none",
        width: 40
      })
      .to(this.$refs.scroll, {
        duration: .7,
        ease: "none",
        right: 30
      }, "<")
      .to(this.$refs.scroll, {
        duration: .7,
        ease: "none",
        width: 0
      })
      .to(this.$refs.scroll, {
        duration: .7,
        ease: "none",
        right: 70
      }, "<")
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

#scroll {
  position: fixed;
  bottom: 100px;
  left: 0px;
  display: flex;
  align-items: center;
  transform: rotate(-90deg);

  p {
    font-family: map.get(global.$fonts, index);
    opacity: .7;
  }
}

.decoration {
  width: 70px;
  height: 3px;
  background-color: map.get(global.$color, sub-thin);
  position: relative;
  margin-right: 20px;

  span {
    display: inline-block;
    width: 10px;
    height: 3px;
    background-color: map.get(global.$color, sub);
    opacity: .7;

    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
