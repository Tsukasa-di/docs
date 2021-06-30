<template lang="pug">
  div
    index
    .lp
      .lp-inner
        h3
          |LearningPage Coming Soon...
        //- selectcards
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
h2 {
  margin-bottom: 70px !important;
}
</style>
