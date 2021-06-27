<template lang="pug">
  div.card.nonClicked(
    @click='gotoPage'
    :data-pageid='pageId'
    ref="card"
  )
    .card-inner(
      ref="cardInner"
    )
      p.title(
        ref="title"
        :class='pageId'
      )
        |{{title}}
      p.description(
        ref="description"
      )
        |{{description}}
</template>

<script>
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

export default {
  props: {
    pageId: {type: String},
    title: {type: String},
    description: {type: String}
  },
  data() {
    return {
      cards: ""
    }
  },
  mounted() {
    this.cards = document.querySelectorAll(".card");
  },
  methods: {
    gotoPage: function(event) {
      // ===================================
      // Definition
      // ===================================
      const VueComponent = this;
      const unClickedEls = [];
      this.cards.forEach( card => {
        if (card.dataset.pageid !== event.target.dataset.pageid) {
          unClickedEls.push(card);
        }
      })
      function unClickedElsFadeOut() {
        unClickedEls.forEach( unClickedEl => {
          gsap.to(unClickedEl, {
            duration: .5,
            opacity: 0,
            y: 50
          })
        })
      }
      // ===================================
      // Action Animations
      // ===================================
      if (this.$route.name === "gsap") {
        gsap.timeline()
          .to(this.$refs.card, {
            // remove style of card
            // ---------------------------------
            duration: .1,
            border: "none",
            overflow: "visible",
            boxShadow: "none",
            onStart: function() {
              VueComponent.$refs.card.classList.remove("nonClicked");
            }
          })
          .to(this.$refs.cardInner, {
            // round off .card-inner
            // ---------------------------------
            duration: .5,
            width: 35,
            height: 35,
            borderRadiusPercent: 50,
            onStart: function() {
              VueComponent.$refs.cardInner.classList.add(VueComponent.$refs.card.dataset.pageid);
              unClickedElsFadeOut();
            }
          }, "<")
          .to([this.$refs.title, this.$refs.description], {
            // fade out .title, .description
            // ---------------------------------
            duration: .2,
            opacity: 0
          }, "<")
          .to(this.$refs.cardInner, {
            // move to left .card-inner
            // ---------------------------------
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0.068,0 0.179,-0.14 0.226,-0.16 0.275,-0.181 0.356,-0.228 0.404,-0.186 0.473,-0.125 0.502,0.156 0.518,0.226 0.558,0.404 0.577,0.659 0.616,0.836 0.644,0.965 0.651,1.042 0.705,1.082 0.748,1.114 0.799,1.094 0.817,1.085 0.868,1.061 0.938,0.998 1,1 "),
            x: ( -this.$refs.cardInner.getBoundingClientRect().right ) + 183,
            width: 60,
          })
          .to(this.$refs.cardInner, {
            // scale up .card-inner
            // ---------------------------------
            duration: .6,
            ease: "power2.inOut",
            height: innerHeight,
            borderRadius: 0,
            onComplete: function() {
              VueComponent.$router.push("/gsap/" + VueComponent.$refs.card.dataset.pageid)
            }
          })
          .to(".header-inner p", {
            // change color of header paragraph
            // ---------------------------------
            duration: .6,
            color: "#FFFFFF"
          }, "<")
        } else {
          // non Animate expect homepage
          // ---------------------------------
          this.$router.push("/gsap/" + VueComponent.$refs.card.dataset.pageid)
        }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

.card-inner, .title, .description {
  pointer-events: none;
}

.card {
  width: 300px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid map.get(global.$color, sub);
  box-shadow: 10px 10px 10px map.get(global.$color, sub-thin);

  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: .3s;
  transform-origin: top left;

  display: flex;
  justify-content: center;
  align-items: center;

  &.nonClicked:hover {
    box-shadow: none;
    transform: translate3d(5px, 5px, 0);
  }

  .getting-started {
    background-color: map.get(global.$color, _yellow);
  }
  .learning {
    background-color: map.get(global.$color, _blue);
  }
  .samples {
    background-color: map.get(global.$color, _red);
  }
}

.card-inner {
  position: absolute;
  overflow: hidden;

  width: 100%;
  height: 100%;
  border-radius: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  width: 100%;
  height: 100px;

  color: map.get(global.$color, _white);
  font-size: 34px;
  font-family: map.get(global.$fonts, index);

  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  margin-top: 20px;
  width: 260px;
  height: 260px;
  overflow-y: scroll;
  display: inline-block;

  white-space: pre-wrap;
  font-size: 18px;
}
</style>
