<template lang="pug">
  div
    index(
      :indexes='indexes'
    )
    .lp
      .lp-inner
        h2(
          id="Summary"
        )
          |Summary
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
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
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWmWpzo" data-editable="true" data-user="tsukasa-di" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
          <span>See the Pen <a href="https://codepen.io/tsukasa-di/pen/MWmWpzo">
          </a> by Tsukasa-di (<a href="https://codepen.io/tsukasa-di">@tsukasa-di</a>)
          <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
        h2(
          id="Bacic"
        )
          |Bacic
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        h3(
          id="gsap.to()"
        )
          |gsap.to()
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        h3(
          id="gsap.from()"
        )
          |gsap.from()
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        h2(
          id="plugins"
        )
          |plugins
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        h2(
          id="Club"
        )
          |Club
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
        p
          |timelineメソッドは、個々のアニメーションを繋げて実行することができるメソッドです。例えるなら、パワーポイントのアニメーション。1つ目のアニメーションが終了すれば、次のアニメーションに移る事もできるし、前回のアニメーションと同時に実行する事もできます。
        p
          |.pause(), .timeScale() のようなTweenメソッドを併用すれば、途中で止める事も一定間隔だけ倍速で再生する事もできて、アニメーションをグループ化して自由自在に操ることのできる便利ツール、それがtimelineメソッド。
</template>

<script>
import Index from "~/components/ui/Index";
import { MakeIndexArray } from "~/plugins/modules/MakeIndexArray";

export default {
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
