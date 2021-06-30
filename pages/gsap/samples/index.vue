<template lang="pug">
  div
    //- index(
    //-   :indexes='indexes'
    //- )
    .lp#fixing
      .lp-inner#fixing
        h3
          |SamplesPage Coming Soon...
        h2(
          id="Try GSAP"
        )
          |GSAP実践スペース
        p
          |既にGSAPライブラリが読み込まれていますので、色々と試してみて下さい。
        <p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="GRmgrgr" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
          <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/GRmgrgr">
          </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
          <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</template>

<script>
import Selectcards from "~/components/home/Selectcards";
import Index from "~/components/ui/Index";
import { MakeIndexArray } from "~/plugins/modules/MakeIndexArray";

export default {
  components: {
    Selectcards,
    Index
  },
  data() {
    return {
      indexes: []
    }
  },
  mounted() {
    document.querySelectorAll("h2").forEach( h2 => {
      const span = document.createElement("span");
      h2.appendChild(span);
    })
    this.indexes = MakeIndexArray();
  }
}

</script>

<style lang="scss" scoped>
@use '~/assets/sass/setting/_app' as global;
@use 'sass:map';

.lp#fixing {
  .lp-inner {
    margin: 30px 100px 100px 0;
  }

  @include global.sp-layout-lp() {
    .lp-inner {
      margin: 0px 4% 40px 4%;
    }
  }
}
</style>
