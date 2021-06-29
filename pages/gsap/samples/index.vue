<template lang="pug">
  div
    .lp
      .lp-inner
        h2
          |Coming Soon...
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
h2 {
  margin-bottom: 70px !important;
}
</style>
