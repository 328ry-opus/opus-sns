# glow by Fashionista LP

一般ユーザー向けの画像ベースLPです。

## 構成

- `index.html`: LP本体
- `assets/images/`: セクション画像
- `assets/css/styles.css`: レイアウトと固定CTA
- `assets/js/main.js`: LINE/電話CTAの差し替え処理

## 公開前に差し替えるもの

`index.html` 下部の `GLOW_LP_CONFIG` を更新してください。

```html
<script>
  window.GLOW_LP_CONFIG = {
    lineUrl: 'LINE予約URL',
    phoneNumber: '予約用電話番号'
  };
</script>
```

未設定の間は、固定CTAを押すと最終予約セクションへスクロールします。

## 注意

- 店舗情報、料金、施術時間は未確定のため、公開前に最新情報へ差し替える
- 画像内のメニュー表にダミー形式の価格/時間があるため、本番では確定版画像への差し替え、またはHTML料金表への置き換えを推奨
- 薬機法・景品表示法に配慮し、効果の断定、医療行為のような表現、誇大表現を追加しない
