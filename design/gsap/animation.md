# Animation Design
GSAP documentサイトのアニメーション設計

## Variables
```javascript
const titleFadeIn = {};
titleFadeIn.Docs = document.querySelector(".docs");
titleFadeIn.GreenSock = document.querySelector(".GreenSock");
titleFadeIn.AnimationPlatform = document.querySelector(".AnimationPlatform");
titleFadeIn.GSAP = {};
titleFadeIn.GSAP.G = document.querySelector(".G");
titleFadeIn.GSAP.S = document.querySelector(".S");
titleFadeIn.GSAP.A = document.querySelector(".A");
titleFadeIn.GSAP.P = document.querySelector(".P");

const selectCards = {};
selectCards.selectCard = document.querySelector(".selectCards");
selectCards.cardYellow = document.querySelector(".cardYellow");
selectCards.cardBlue = document.querySelector(".cardBlue");
selectCards.cardRed = document.querySelector(".cardRed");
```

## Timelines
### Home/titleFadeIn
```javascript
titleFadeIn.fadeUp(titleFadeIn.Docs)
titleFadeIn.fadeUp(titleFadeIn.GreenSock)
titleFadeIn.fadeUp(titleFadeIn.AnimationPlatform)
titleFadeIn.timeline()
  .fadeIn(titleFadeIn.GSAP.G)
  .fadeIn(titleFadeIn.GSAP.S)
  .fadeIn(titleFadeIn.GSAP.A)
  .fadeIn(titleFadeIn.GSAP.P)
```

### Home/selectCards
```javascript
selectCards.moveCard(selectCards.selectCard, {x: "200移動"})
selectCards.fadeIn(selectCards.cardYellow)
selectCards.moveCard(selectCards.selectCard, {x: "200移動"})
selectCards.fadeIn(selectCards.cardBlue)
selectCards.fadeIn(selectCards.cardRed)
selectCards.fadeOut(selectCards.selectCard)
```

## Effects
### fadeUp
HomeページのTitle文言が下から上にフェードインするアニメーション<br>
```javascript
[input]
duration
```

### fadeIn
- Homeページのタイトル箇所の緑色の「GSAP」を出現させる時
- selectCardsのシーケンスの時に、個々のcardを出現させる時

### fadeOut
- selectCardsの`selectCards.selectCard`をフェードアウトさせるとき

### smootheScroll
- Homeページをスクロールした時に、1画面分を自動スクロールさせるとき
- Getting StartdページのINDEXの目次をクリックしたとき

### mooveCard
```javascript
[input]
duration
x
```

