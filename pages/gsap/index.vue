<template lang="pug">
  div
    scroll
    .top
      document
      app-title
    .select
      selectcards(
        ref="selectcards"
      )
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
    // ===================================
    // Definition
    // ===================================
    const VueComponent = this;
    function AutoScroll(targetValue) {
      VueComponent.$root.$el.scrollTo({
        top: targetValue
      });
    }
    function scrollStart() {
      // when trigger event of AutoSmoothScroll
      // -------------------------------------------------
      AppGsap.SmoothScroll(
        {}, {duration: 1.5, targetValue: innerHeight, ease: "power3.inOut"}, AutoScroll
      )
      gsap.to("#scroll", {duration: .7, opacity: 0})
      gsap.set(".cards-wrap", {opacity: 0, rotationY: 200})
    };
    function scrollFinish() {
      // when finish event of AutoSmoothScroll
      // -------------------------------------------------
      VueComponent.$store.commit('changeFirstContact', false);
      gsap.to("header", {duration: .3, opacity: 1})
      gsap.timeline()
        .to(VueComponent.$refs.selectcards.$el.querySelectorAll(".cards-wrap"), {
          duration: 1,
          stagger: .5,
          opacity: 1,
          rotationY: 0,
          ease: "power3.inOut"
        })
    };
    // ===================================
    // Animation
    // ===================================
    if (this.$store.state.firstContact) {
      // when first visit
      // -------------------------------------------------
      document.querySelector("header").style.opacity = "0";
      AppGsap.AppearanceTitle(.6);
      BanEvent.animationInterval(
        {start: scrollStart, finish: scrollFinish},
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
        {}, {duration: 1, targetValue: innerHeight, ease: "power3.inOut"}, AutoScroll
      )
    }
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

@include global.sp-layout-lp() {
  .app-title {
    right: 10px;
    bottom: 10px;
  }
}
</style>
