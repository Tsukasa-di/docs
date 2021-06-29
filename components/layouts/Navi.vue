<template lang="pug">
  div#Navi
    document
    .navi-inner
      .link(
        v-for='link in links'
      )
        span
        a(
          @click='gotoPage'
          :data-link='"/gsap/" + link.link'
          ref="link"
        )
          |{{link.title}}
</template>

<script>
import Document from "~/components/home/Document";

export default {
  components: {
    Document
  },
  data() {
    return {
      links: [
        {title: "Getting Started", link: "getting-started"},
        {title: "Learning", link: "learning"},
        {title: "Samples", link: "samples"}
      ]
    }
  },
  methods: {
    gotoPage: function(event) {
      this.$router.push(event.target.dataset.link);
      setTimeout(() => {
        this.$root.$el.querySelector("#app-header").classList.remove("naviActive");
      }, 800);
    },
    strikethrough: function() {
      setTimeout(() => {
        this.$refs.link.forEach( target => {
          if (target.dataset.link.includes(this.$store.state.currentPageInfo.id)) {
            target.parentNode.classList.add("strikethrough");
          } else {
            target.parentNode.classList.remove("strikethrough");
          }
        })
      }, 1000);
    }
  },
  mounted() {
    this.strikethrough();
  },
  watch: {
    "$route": function() {
      this.strikethrough();
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

body#top {
  #Navi {
    display: none;
  }
}

#Navi {
  position: fixed;
  z-index: 9999;

  width: 0%;
  height: 100%;
  margin-left: 10%;

  opacity: 0;
  transition: 1s;
  pointer-events: none;
  overflow: hidden;

  display: flex;
  align-items: center;
}

.navi-inner {
  display: flex;
  flex-direction: column;

  .link {
    height: 120px;
    font-size: 100px;
    font-family: map.get(global.$fonts, title);
    cursor: pointer;
    position: relative;
    transition: .5s;

    &.strikethrough {
      opacity: .6;
      cursor: unset;

      &:hover span {
        width: 0;
      }

      a {
        text-decoration: line-through;
        pointer-events: none;
        cursor: unset;
      }
    }

    &:hover span {
      width: 100%;
    }

    a {
      color: map.get(global.$color, _white);
      text-decoration: none;
    }

    span {
      display: block;
      height: 3px;
      width: 0;

      transition: .5s;
      position: absolute;
      bottom: 30px;
      left: 0;

      background-color: map.get(global.$color, _white);
    }
  }
}

.document {
  position: fixed;
  bottom: 50px;
  right: -10px;
  opacity: .4;
  transform-origin: left;
  transform: rotate(5deg);
}
</style>
