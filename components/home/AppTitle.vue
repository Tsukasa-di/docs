<template lang="pug">
  div.app-title
    div.docs
      p.titles
        |Docs.
      span.docs-decoration
    p.titles.green-sock
      |GreenSock
      span.G.GSAP
        |G
      span.S.GSAP
        |S
    p.titles.animation-platform
      |Animation Platform
      span.A.GSAP
        |A
      span.P.GSAP
        |P
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

.titles {
  color: map.get(global.$color, sub);
  font-family: map.get(global.$fonts, title);
  font-size: 120px;
  font-weight: normal;
  line-height: 1.0;
  position: relative;

  span {
    color: map.get(global.$color, main);
    position: absolute;
    top: 0;
    left: 0;

    &.S {
      left: 320px;
    }
    &.P {
      left: 583px;
    }
  }
}

.docs {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  p {
    margin-bottom: 20px;
  }
}

.docs-decoration {
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: map.get(global.$color, sub-thin);
}
</style>
