<template lang="pug">
  div.pageWrap
    index
    selectcards
</template>

<script>
import Selectcards from "~/components/home/Selectcards";
import Index from "~/components/ui/Index";

export default {
  components: {
    Selectcards,
    Index
  }
}

</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/app' as global;
@use 'sass:map';

#main.pageWrap {
  margin-left: 260px;
}

h1 {
  color: map.get(global.$color, sub);
  font-family: map.get(global.$fonts, title);
  font-size: 120px;
  font-weight: normal;
}
</style>
