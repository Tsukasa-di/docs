<template lang="pug">
  div
    scroll
    .top
      document
      app-title
    .select
      selectcards
</template>

<script>
import { gsap } from "gsap";
import { AppGsap } from "~/plugins/gsap/app";
import BanEvent from "~/plugins/modules/BanEvent";
import AppTitle from "~/components/home/AppTitle";
import Document from "~/components/home/Document";
import Selectcards from "~/components/home/Selectcards";
import Scroll from "~/components/ui/Scroll";

export default {
  components: {
    AppTitle,
    Document,
    Selectcards,
    Scroll
  },
  mounted() {
    const VueComponent = this;
    if (this.$store.state.firstContact) {
      // when first visit
      // -------------------------------------------------
      document.querySelector("header").style.opacity = "0";
      AppGsap.AppearanceTitle(.6);
      BanEvent.animationInterval(
        {start: logStart, finish: logFinish},
        window,
        "mousewheel",
        1500
      );
    } else {
      // when no first visit
      // -------------------------------------------------
      gsap.set("header", {duration: .1, opacity: 1})
      gsap.set("header p", {duration: .1, color: "#3A404C"})
      gsap.set("#scroll", {duration: .1, opacity: 0})
      AppGsap.SmoothScroll(
        {target: 0}, {duration: 1, value: innerHeight, ease: "power3.inOut"}
      )
    }
    function logStart() {
      // when trigger event of Auto Smooth Scroll
      // -------------------------------------------------
      AppGsap.SmoothScroll(
        {target: 0}, {duration: 1.5, value: innerHeight, ease: "power3.inOut"}
      )
      gsap.to("#scroll", {duration: .7, opacity: 0})
    };
    function logFinish() {
      // when finish event of Auto Smooth Scroll
      // -------------------------------------------------
      VueComponent.$store.commit('changeFirstContact', false);
      gsap.to("header", {duration: .3, opacity: 1})
    };
  }
}

</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

.top, .select {
  width: 100%;
  height: 100%;
  position: relative;
}

.select {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
