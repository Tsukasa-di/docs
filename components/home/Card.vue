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
    pageId: {type: String},
    title: {type: String},
    description: {type: String}
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
