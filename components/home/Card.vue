<template lang="pug">
  div.card(
    @click='gotoPage'
    :data-pageid='pageId'
  )
    .card-inner
      p.title(
        :class='pageId'
      )
        |{{title}}
      p.description
        |{{description}}
</template>

<script>
export default {
  props: {
    pageId: {type: String}
  },
  data() {
    return {
      info: {
        getting_started: {
          title: "Getting Started",
          description:
            "GSAPの基本的な使い方を理解できるページ。\n" +
            "・GSAPの概要\n" +
            "・アニメーションの基本\n" +
            "・Plugin\n" +
            "・Easing\n" +
            "・Timeline\n"
        },
        learning: {
          title: "Learning",
          description:
            "GSAPの基本的な使い方を理解できるページ。\n" +
            "・GSAPの概要\n" +
            "・アニメーションの基本\n" +
            "・Plugin\n" +
            "・Easing\n" +
            "・Timeline\n"
        },
        samples: {
          title: "Samples",
          description:
            "GSAPの基本的な使い方を理解できるページ。\n" +
            "・GSAPの概要\n" +
            "・アニメーションの基本\n" +
            "・Plugin\n" +
            "・Easing\n" +
            "・Timeline\n"
        }
      },
      title: {type: String},
      description: {type: String}
    }
  },
  mounted() {
    if (this.pageId === "getting-started") {
      this.title = this.info.getting_started.title;
      this.description = this.info.getting_started.description;
    } else if (this.pageId === "learning") {
      this.title = this.info.learning.title;
      this.description = this.info.learning.description;
    } else if (this.pageId === "samples") {
      this.title = this.info.samples.title;
      this.description = this.info.samples.description;
    }
  },
  methods: {
    gotoPage: function(event) {
      this.$router.push("/gsap/" + event.target.dataset.pageid)
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

  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card-inner {
  position: absolute;
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
