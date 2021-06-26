<template lang="pug">
  div
    h1
      |Docs.
    h1
      |GreenSock
    h1
      |Animation Platform
    selectcards
</template>

<script>
import Selectcards from "~/components/home/Selectcards";

export default {
  components: {
    Selectcards
  }
}

</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

h1 {
  color: map.get(global.$color, sub);
  font-family: map.get(global.$fonts, title);
  font-size: 120px;
  font-weight: normal;
}
</style>
