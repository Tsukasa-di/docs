<template lang="pug">
  div.selectcards
    .cards-wrap(
      v-for='card in cards'
    )
      card(
        :pageId='card.pageId'
        :title='card.title'
        :description='card.description'
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
        {
          pageId: "getting-started",
          title: "Getting Started",
          description:
            "GSAPの基本的な使い方を理解できるページ。\n" +
            "・GSAPの概要\n" +
            "・アニメーションの基本\n" +
            "・Plugin\n" +
            "・Easing\n" +
            "・Timeline\n"
        },
        {
          pageId: "learning",
          title: "Learning",
          description:
            "GSAPの基本的な使い方を理解できるページ。\n" +
            "・GSAPの概要\n" +
            "・アニメーションの基本\n" +
            "・Plugin\n" +
            "・Easing\n" +
            "・Timeline\n"
        },
        {
          pageId: "samples",
          title: "Samples",
          description:
            "GSAPの基本的な使い方を理解できるページ。\n" +
            "・GSAPの概要\n" +
            "・アニメーションの基本\n" +
            "・Plugin\n" +
            "・Easing\n" +
            "・Timeline\n"
        }
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
  margin-bottom: 30px;
}

.cards-wrap {
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
