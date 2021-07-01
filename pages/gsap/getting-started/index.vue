<template lang="pug">
  div
    index(
      :indexes='indexes'
    )
    .lp
      .lp-inner
        section
          h2(
            id="GSAPの魅力"
          )
            |GSAPの魅力
          p
            |GSAP(GreenSock Animation Platfrom)は、Flash全盛の時代から利用され続けている歴史ある老舗アニメーションライブラリ。その使用実績は、公式情報で10,000,000サイトほどの超絶な人気を誇っています。
          br
          h4
            |GSAPが使われているサイト達
          .column-2.margin-bottom-30
            a(
              class="image-mask"
              target="_blank"
              href="https://bridgelanding.qodeinteractive.com/tour/"
            )
              img(:src='require("~/assets/images/gsap/samples/bridge.png")')
            a(
              class="image-mask"
              target="_blank"
              href="https://ballisticmoon.com/"
            )
              img(:src='require("~/assets/images/gsap/samples/creators-of-adventures.png")')
          p.text-center
            a(
              href="https://greensock.com/showcase/"
              target="_blank"
              class=".font-size-5"
            )
              |More Site GSAP
          p
            |GSAPはJavaScriptがアクセスできるものなら何でもアニメイトできてしまいます。CSSプロパティでも、SVGでも、canvasでも、もちろんJavaScriptのオブジェクトの値でも...何でもGSAPに任せてしまいましょう。
          p
            |GSAPで簡単なインタラクションを実装するだけなら覚えることは少しだけでOK。基本的な書き方と「gsap.to(), gsap.from(), gsap.timeline()」これくらいのメソッドを理解してしまえば、楽しくアニメイトできますよ。
          <p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="JjNjWVm" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/JjNjWVm">
            </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
            <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          br
          p
            |この簡単な記述で楽々実装。色んなサイトからインスピも得られれば表現の幅も広がる！
            br
            |早速インストールして試していきましょう！
        section
          h2(
            id="Basic"
          )
            |Basic
          h3(
            id="Install GSAP"
          )
            |Install GSAP
          p
            |CDNからのダウンロード、NPM/Yarnでのインストール。
          <pre class="prettyprint prettyprinted" style=""><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span></pre>
          pre(
            class="prettyprint lang-js"
          )
            |npm install gsap
          pre(
            class="prettyprint lang-js"
          )
            |yarn add gsap
          p
            |インストール後、次のようにプロジェクトに組み込み。
          pre(
            class="prettyprint lang-js"
          )
            |import { gsap } from "gsap";
          p
            |詳細は <a href="https://greensock.com/docs/v3/Installation" target="_blank">公式サイトのInstall Page</a> から参照ください。
          h3(
            id="GSAPマスターの三拍子"
          )
            |GSAPマスターの三拍子
          p
            |「gsap.to(), gsap.from(), gsap.timeline()」まずはこの3つを理解していきましょう。
          img(
            :src='require("~/assets/images/gsap/getting-started/gsap-to.png")'
            class="margin-bottom-0"
          )
          <p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="xxdbggb" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/xxdbggb">
            </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
            <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          br
          p
            |gsap.to()は現在の値から、gsap.to()メソッドで設定した値へアニメイトします。透過100%から透過0%へ値を変えていくfadeOutアニメーションが分かり易い例。
          img(
            :src='require("~/assets/images/gsap/getting-started/gsap-from.png")'
            class="margin-bottom-0"
          )
          <p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="vYmEgZx" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/vYmEgZx">
            </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
            <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          br
          p
            |gsap.from()はその逆で設定した値から現在の値へアニメイト。透過0%を設定すると、0%から100%へfadeInさせることができます。
          img(:src='require("~/assets/images/gsap/getting-started/gsap-timeline.png")')
          p
            |そして、gsap.timeline()は組み立ててきたアニメーションを繋げて、途中で止めたりdelayをかけたり、callback関数を呼び出したり、アニメーションを一連の流れとして自由に操作することができます。
          h3(
            id="GSAPの書き方"
          )
            |GSAPの書き方
          p
            |紹介してきたgsap.to()やgsap.from()のような指定した要素をアニメーションさせるメソッドの基本的な記述方法を説明していきます。アニメーションをするために必要な引数は2つ。
          pre(
            class="prettyprint lang-js linenums"
          )
            |gsap.to(targets, setting)
            |setting = {
            |    duration: .5,
            |    x: 200, // transform: translateX(100px)
            |    opacity: 0,
            |})
          .wrapper-bg.margin-bottom-30
            ul.margin-bottom-0
              li
                |<strong>targets</strong><br>アニメイトさせたいHTML要素やオブジェクトを渡します。<code>.myClass</code>のようにclassやidなどノードを特定したいStringを渡したり、Arrayで複数のノードを指定することもできます。
              li
                |<strong>setting</strong><br>どのようにアニメイトさせるか設定するための値をオブジェクト型で入力します。
          h4
            |<code>targets</code>に渡せられる値について
          p
            |基本的には<code>.myClass</code>のように、ノードを指定するためのclassやidなどをStringで渡せば、アニメイトさせたい要素を特定してくれます。
          <p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="xxdbggb" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/xxdbggb">
            </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
            <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          br
          p
            |そして、GSAPで操ることのできるのはCSSだけではありません。下記のようにオブジェクトを指定すると、そのオブジェクトの値を操ることだってできます。
          <p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="PomqWNW" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/PomqWNW">
            </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
            <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          br
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
          p
            |上記の例では、<code>targets</code>にオブジェクト（<code>calcNumber</code>）を入れることで、そのオブジェクトの値をも、アニメーションさせています。
          p
            |<code>setting</code>のプロパティに、<code>targets</code>で指定したオブジェクトのプロパティ（<code>currentNumber</code>）を設定し、その値にどの数値までアニメーションさせたいか目標値（<code>currentNumber: 100</code>）を入れてやることで、オブジェクトの値を操作することができます。
          h4
            |<code>setting</code>のプロパティについて
          h3(
            id="gsap.timeline()"
          )
            |gsap.timeline()の解説
        section
          h2(
            id="draft"
          )
            |draft
          p
            |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
          p
            |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできます。アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
          p
            |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
          p
            |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできます。アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
          pre(
            class="prettyprint lang-js linenums"
          )
            |import { gsap } from "gsap";
            |
            |export function SmoothScroll(
            |  targetObject = {
            |    currentValue: 0
            |  },
            |  setting  = {
            |    duration: 1,
            |    targetValue: 100,
            |    ease: "power3.inOut"
            |  }, callback) {
            |  gsap.to(targetObject, {
            |    duration: setting.duration,
            |    ease: setting.ease,
            |    currentValue: setting.targetValue,
            |    onUpdate: function() {
            |      callback(targetObject.currentValue)
            |    }
            |  });
            |}
          pre(
            class="prettyprint lang-js linenums"
          )
            |console.log("hello");
            |console.log("hello");
            |console.log("hello");
          p
            |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
          p
            |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできます。アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
          <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWmWpzo" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/MWmWpzo">
            </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
            <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
        section
          h2(
            id="draftdraft"
          )
            |draftdraft
          p
            |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
          p
            |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできます。アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
          p
            |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
          p
            |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできます。アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
          p
            |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
          p
            |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできます。アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
</template>

<script>
import Index from "~/components/ui/Index";
import { MakeIndexArray } from "~/plugins/modules/MakeIndexArray";

export default {
  head() {
    return {
      script: [
        { src: 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=sons-of-obsidian', type: 'text/javascript' }
      ]
    }
  },
  components: {
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

</style>
