<template lang="pug">
  div.PAGE-samples
    //- index(
    //-   :indexes='indexes'
    //- )
    .lp#fixing
      .lp-inner#fixing
        section
          h3
            |SamplesPage Coming Soon...
          p
            |Samplesページはまだ実装できていません。現状は仮でGSAPを自由に試せられるようにCodePenを組み込んだコンテンツと、GSAPのコントロールメソッドを試験できるコンテンツを入れています。
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
        section
          h2
            |GSAP Controllers
          p
            |よく利用されるアニメーションをコントロールするためのTweenメソッドを視覚的に試験できます。詳細は<a href="https://greensock.com/docs/v3/GSAP/Tween" target="_blank">こちらの公式ドキュメント</a>の「Methods」を参照ください。
          .gsap-controll.margin-bottom-100
            .controller
              button(
                v-for='button in controllers'
                :id='button.id'
              )
                |{{button.id}}
            p.counterNumber
              |0
            .var-wrap
              .var
              .progress-marker-1
              .progress-marker-2
              .progress-marker-3
          pre(
            class="prettyprint lang-js linenums"
          )
            |// =======================================
            |//  GSAP Controllersの設定値
            |// =======================================
            |  const calcNumber = { currentNumber: 0 };
            |  const countUp = gsap.to(calcNumber, {
            |    currentNumber: 100,
            |    duration: 5,
            |    paused: true,
            |    ease: "none",
            |    onUpdate: function () {
            |      document.querySelector(".counterNumber").textContent
            |       = Math.floor(calcNumber.currentNumber);
            |      document.querySelector(".var").style.width = (this.ratio * 100) + "%";
            |    }
            |  });
</template>

<script>
import Selectcards from "~/components/home/Selectcards";
import Index from "~/components/ui/Index";
import { MakeIndexArray } from "~/plugins/modules/MakeIndexArray";
import { gsap } from "gsap";

export default {
  head() {
    return {
      script: [
        { src: 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=sons-of-obsidian', type: 'text/javascript' }
      ]
    }
  },
  components: {
    Selectcards,
    Index
  },
  data() {
    return {
      indexes: [],
      controllers: [
        {
          function: "play",
          id: "play",
          value: ""
        },
        {
          function: "restart",
          id: "restart",
          value: ""
        },
        {
          function: "pause",
          id: "pause",
          value: ""
        },
        {
          function: "resume",
          id: "resume",
          value: ""
        },
        {
          function: "reverse",
          id: "reverse",
          value: ""
        },
        {
          function: "seek",
          id: "seek",
          value: 2.5
        },
        {
          function: "progress",
          id: "progress",
          value: 0.75
        },
        {
          function: "timeScale",
          id: "timeScale-double",
          value: 2
        },
        {
          function: "timeScale",
          id: "timeScale-half",
          value: 0.5
        },
        {
          function: "timeScale",
          id: "timeScale-default",
          value: 1
        },
        {
          function: "kill",
          id: "kill",
          value: ""
        }
      ]
    }
  },
  methods: {
    gsapController: function(controllers) {
      const calcNumber = { currentNumber: 0 };
      const countUp = gsap.to(calcNumber, {
        currentNumber: 100,
        duration: 5,
        paused: true,
        ease: "none",
        onUpdate: function () {
          document.querySelector(".counterNumber").textContent = Math.floor(calcNumber.currentNumber);
          document.querySelector(".var").style.width = (this.ratio * 100) + "%";
        }
      });

      controllers.forEach( action => {
        document.querySelector("#" + action.id).addEventListener("click", () => {
          if (action.value) {
            countUp[action.function](action.value);
          } else {
            countUp[action.function]();
          }
        });
      });
    }
  },
  mounted() {
    document.querySelectorAll("h2").forEach( h2 => {
      const span = document.createElement("span");
      h2.appendChild(span);
    })
    this.indexes = MakeIndexArray();

    this.gsapController(this.controllers);
  }
}
</script>

<style lang="scss" scoped>

</style>
