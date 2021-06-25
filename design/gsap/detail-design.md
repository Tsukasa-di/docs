# Detail Design
GSAP documentサイトの詳細設計

## Sitemap
``` bash
gsap
  | --- getting-started
  | --- learning
    | --- gsap
    | --- tween
    | --- timeline
    | --- plugin
  | --- samples
```

## Components
### layouts/header
[input]
``` javascript
colorText         = String, props
colorBackground   = String, props
title             = String, props
isHome            = Boolean
```
[output]
- trigger : click
Homeへページ遷移
- trigger : hover
`colorBackground` = white<br>
`colorText`       = black

### home/description
ホームページ左側の四角形の装飾も含めたページ説明箇所

### home/title/master
「Docs. GreenSock Animation Platform」のタイトル箇所
[input]
``` javascript
component = home/title/calling
AnimationTrigger = Boolean, props
```
[output]<br>
`AnimationTrigger`が`true`の場合にtitleアニメーションを起動する。

### home/title/docs
`home/title/master`から呼び出される「Docs.」とその下のアンダーライン

### home/title/GreenSock
`home/title/master`から呼び出される「GreenSock」箇所（緑色の文字も含む）
[input]
``` javascript
ColoringTrigger = Boolean, props
// 緑色の文字の透明度をあげるトリガー
```

### home/title/AnimationPlatform
`home/title/master`から呼び出される「AnimationPlatform」箇所（緑色の文字も含む）
[input]
``` javascript
ColoringTrigger = Boolean, props
// 緑色の文字の透明度をあげるトリガー
```

### home/selector/master
3カードを呼び出して表示し、初回アニメーションを操るコンポーネント
[input]
```javascript
component   = 'home/selector/card'
emit = clickedCard
clickedCard = String
cards = [
  {
    title: String,
    description: String
  }
]
```
[Function]
- 初回アニメーション
- ホバーアニメーション
- `home/selector/card`からのイベントを受け取った後のアニメーション
- アニメーション終了後のページ遷移

### home/selector/card
個々のカードコンポーネント
[input]
```javascript
card = {
  title: String,
  description: String
}
```
[output]
```javascript
clickCard = @click
clickedCard = card.title
```
