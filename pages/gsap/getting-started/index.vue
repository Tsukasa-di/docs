<template lang="pug">
  div.pageWrap
    index
    getting-started
</template>

<script>
import Index from "~/components/ui/Index";
import GettingStarted from "~/components/lp/GettingStarted";

export default {
  components: {
    Index,
    GettingStarted
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
