スクロール位置を指定した場所まで調整してくれる。スクロール位置を固定出来る（？）。<br>
動きは今風だが**スクロールジャック**と呼ばれ、操作をユーザーの意志から取り上げUX上の懸念がある。

# 構成

- index.html
  - 各セクションがフルスクリーンスクロール
- index2.html
  - トップのみフルスクリーンでスクロール（MVのみフルスクリーンのイメージ）

# フルページスクロール

## scroll-snap-type

- スクロール位置の調整を行うかどうか
- どの軸でスクロール位置を調整するか
- どの程度厳密に調整するか

## scroll-snap-align

子要素が親要素より小さい場合の吸着位置

- start
- center
- end

# スクロールとIntersection Observer

活用方法として、スクロール途中で追従するメニューなどを実装する場合に、scroll量の計算しない実装方法が取れる。<br>
これは要素と要素の交差を検知するもの。

```js
const options = {
  root: document.querySelector("#observerArea"),
  rootMargin: "10px",
  threshold: 0
};
const observer = new IntersectionObserver(callback,options);
```

- root
  - 交差監視をする枠のような要素。nullにするとビューポート、つまり見てる画面との交差監視を有効にする。
- rootMargin
  - 10pxだと交差する10px前に発火、-10pxだと交差してから10px過ぎて発火
  - rootを`null`、`-50% 0px`と指定するとビューポートの中心で発火
- threshold
  - コールバック関数を呼び出したい交差割合。0 ~ 1。
  - 0だと、交差量が0になった瞬間、見え始めと見え終わり時にコールバック関数が呼ばれる

# scrollIntoViewでスムーススクロール

モダンブラウザではだいたい対応。指定の要素の上端、中央、下端までスクロールさせる事が出来る。<br>
https://caniuse.com/#search=scrollIntoView

```js
var element = document.getElementById('targetElement');
// 上端に来るようにスクロールさせたい
element.scrollIntoView(); 
// 下端に来るようにスクロールさせたい
element.scrollIntoView(false);
```

