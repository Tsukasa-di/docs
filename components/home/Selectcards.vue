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
            "GSAPの基本的な使い方が理解できるページ。\n" +
            "・GSAPの魅力\n" +
            "・GSAPの使い方3STEP\n" +
            "・timelineの使い方\n" +
            "・その他の基礎知識\n"
        },
        {
          pageId: "learning",
          title: "Learning",
          description:
            "GSAPの公式ドキュメントをベースに、深堀って理解しておきたいメソッドやプラグインの使い方をまとめたページ。\n" +
            "・Ease\n" +
            "・Plugin\n" +
            "etc...\n" +
            "更新頻度は低め..."
        },
        {
          pageId: "samples",
          title: "Samples",
          description:
            "当サイト作成者が個人的に気に入っているGSAPが使われているサイトをピックアップ。\n\n" +
            "表現の幅を広げるため、インスピレーションを得るためにコレクトしています。"
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
}

.cards-wrap {
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
