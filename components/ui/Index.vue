<template lang="pug">
  div#index(
    ref="index"
  )
    p.index-title
      |INDEX
    .indexes(
      v-for='index in indexes'
    )
      a.index-2(
        @click='clickIndex'
        :href='"#" + index.index2'
      )
        |{{index.index2}}
        span
      a.index-3(
        @click='clickIndex'
        v-for='index3 in index.contents'
        :href='"#" + index3'
      )
        |{{index3}}
</template>

<script>
import { AppGsap } from "~/plugins/gsap/app";

export default {
  mounted() {
    this.$refs.index.style.height = innerHeight + 2 + "px";
  },
  props: {
    indexes: {type: Array}
  },
  methods: {
    clickIndex: function(event) {
      const VueComponent = this;
      let targetEl = "";
      this.$root.$el.querySelectorAll("*[id]").forEach( el => {
        if (event.target.getAttribute("href").includes(el.id)) {
          targetEl = el;
        }
      })
      if (targetEl) {
        function SmoothScroll(targetValue) {
          VueComponent.$root.$el.scrollTo({
            top: targetValue
          });
        }
        AppGsap.SmoothScroll(
          {currentValue: VueComponent.$root.$el.scrollTop}, {duration: .7, targetValue: VueComponent.$root.$el.scrollTop + targetEl.getBoundingClientRect().top}, SmoothScroll
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/_app' as global;
@use 'sass:map';

a {
  text-decoration: none;
  color: map.get(global.$color, sub);
}

#index {
  position: fixed;
  top: -1px;
  left: 59px;
  width: 200px;
  border: 1px solid map.get(global.$color, sub);
  transition: 1s;
  overflow: hidden;

  @include global.sp-layout-lp() {
    width: 0;
  }
}

.index-title, .index-2, .index-3 {
  width: 100%;
  transition: .3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.index-title {
  height: 100px;

  font-size: 42px;
  font-family: map.get(global.$fonts, title);
  opacity: .3;
}

.index-2 {
  position: relative;
  height: 60px;
  font-size: 22px;
  font-weight: normal;
  border: 1px solid map.get(global.$color, sub);

  &:hover {
    color: map.get(global.$color, main);
    border-color: map.get(global.$color, main);

    span {
      background-color: map.get(global.$color, main);
    }
  }

  span {
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
    height: 100%;
    background-color: map.get(global.$color, sub);
  }
}

.index-3 {
  height: 40px;
  font-size: 16px;

  &:hover {
    color: map.get(global.$color, main)
  }
}
</style>
