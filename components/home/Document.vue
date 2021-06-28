<template lang="pug">
  div.document
    p
      br
      |GSAP Official Document
      br
      a(
        href="https://greensock.com/docs/v3/"
        target="_blank"
      )
        |https://greensock.com/docs/v3/
      br
      br
      |This Site : GreenSock Animation Platform Document
      br
      |Copyright ©️ Tsukasa Tomioka All Rights Reserved.
      br
      br
      |GitHub
      br
      a(
        href="https://github.com/Tsukasa-di/docs"
        target="_blank"
      )
        |https://github.com/Tsukasa-di/docs
    documentation.documentation
</template>

<script>
import Documentation from "~/assets/svg/documentation.svg";

export default {
  components: {
    Documentation
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

p {
  color: map.get(global.$color, sub);
  opacity: .3;
  position: absolute;
  top: 0;
  left: 50px;
}

span {
  width: 100px;
  height: 1px;
  background-color: map.get(global.$color, sub-thin);
  position: absolute;
  left: 20px;
  bottom: 20px;

  &:nth-child(2) {
    bottom: 30px;
  }

  &:nth-child(3) {
    bottom: 40px;
  }
}
</style>
