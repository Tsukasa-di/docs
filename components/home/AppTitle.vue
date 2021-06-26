<template lang="pug">
  div.app-title
    div.docs
      p.titles
        |Docs.
      span.docs-decoration
    p.titles.green-sock
      |GreenSock
    p.titles.animation-platform
      |Animation Platform
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
