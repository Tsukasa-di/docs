<template lang="pug">
  div.selectcards
    .cards-wrap(
      v-for='card in cards'
    )
      card(
        :pageId='card.pageId'
      )
</template>

<script>
import Card from "~/components/home/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {pageId: "getting-started"}, {pageId: "learning"}, {pageId: "samples"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.selectcards {
  display: flex;
  justify-content: center;
  width: 100%;
}

.cards-wrap {
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
