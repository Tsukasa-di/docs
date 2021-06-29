# Detail Design
GSAP documentサイトの詳細設計

## Sitemap
``` bash
gsap
  | --- getting-started
    | --- index.html
  | --- learning
    | --- gsap
    | --- tween
    | --- timeline
    | --- plugin
      ...
  | --- samples
    | --- index.html
```

## Store
グローバルに管理したいサイト状態を列挙
```javascript
return {
  firstContact: Boolean,
  // 初めてHomeページに訪れるかどうかを判断
  currentPageInfo: {
    // 現在訪問しているページの基本情報を格納
    // ページ遷移時にリアクティブにデータ更新
    id: String,   // jsの処理ないで使用
    title: String // head要素内のTitle属性やHeaderの文言などにし使用
  }
}
```

## Components
### layouts/header
[Summary]
- (TOP画面)`Navi`を非表示にする
- (TOP画面)`BACK HOME`を非表示にする
- Headerの文言を現在のページタイトルに設定する
- (TOP画面以外)ホバーで`BACK HOME`を表示
- (TOP画面以外)`MENU`の表示 => `Navi`の処理が実行可能
``` javascript
export default {
  components: {
    Navi
  },
  methods: {
    naviTriggerHover: function() {
      // ホバーしたらAppHeaderのルート要素にクラスを付与
    },
    clickNaviTrigger: function() {
      // naviTriggerクリックによる処理
      // AppHeaderのルート要素にクラス付与、Navi.vueの展開
    },
    transitionHome: function() {
      // `BACK HOME`クリックでHomeページに遷移
    }
  }
  mounted() {
    naviTriggerHover();
  },
  computed: {
    headerText: function() {
      return "GSAP Docs. - " + currentPageInfo.title
    }
  }
}
```

### layouts/navi
[Summary]
- `MENU`クリックで展開するページナビゲーション画面
- 表示させるナビリンクは任意に決定したい
- 現在訪問しているページのナビリンクには打ち消し線のスタイル付けを
- 装飾とコピーライト付けのために`Document.vue`を読み込む
```javascript
export default {
  components: {
    Document
  },
  methods: {
    gotoPage: function() {
      // ナビリンククリックでページ遷移
      // アニメーション付けのためにNuxtLinkではなくmethods処理
    },
    strikethrough: function() {
      // this.$store.currentPageInfo.id と同じdata属性値を持つナビリンクにクラス付与
    }
  },
  mounted() {
    this.strikethrough();
  },
  watch: {
    "$route": function() {
      this.strikethrough();
    }
  }
}
```

### home/document
ホームページ左側の四角形の装飾も含めたページ説明箇所

### home/title
「Docs. GreenSock Animation Platform」のタイトル箇所

### home/selectcards
[Summary]
- 3カードを呼び出して表示し、初回アニメーションを操るコンポーネント
- 初回アニメーション
- ホバーアニメーション
- `home/selector/card`からのイベントを受け取った後のアニメーション
- アニメーション終了後のページ遷移
```javascript
export default {
  components: {
    card
  },
  data() {
    // card.vueに受け渡す情報を格納
    return {
      cards: [
        id: String,
        title: String,
        description: String
      ]
    }
  }
}
```

### home/card
[Summary]
- 
