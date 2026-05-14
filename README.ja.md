# findwifi

地図上に近くの無料公共WiFiスポットを検索・表示するウェブアプリケーションです。

**デモ:** https://code4fukui.github.io/find/findwifi.html

CC BY Code for Fukui

## 機能

- **WiFiホットスポットの検索:** 現在地周辺の無料公共WiFiスポットを検索し、地図上にプロットします。
- **詳細情報の表示:** 各スポットの詳細情報を表示します。営業時間、WiFiの提供エリア、電源コンセントの有無などが含まれます。電源コンセントのあるスポットは、赤いアイコンで区別して表示されます。
- **最寄りスポットへのルート案内:** ワンクリックで最も近いWiFiスポットへのルートを計算・表示します。
- **多言語対応:** インターフェースは英語、日本語、スペイン語、中国語、韓国語、ドイツ語、カタルーニャ語、ポルトガル語、タガログ語、ペルシャ語に対応しています。

## はじめに

ローカルでこのプロジェクトを実行するには、Google Maps APIキーが必要です。

1. **APIキーの取得:** [Google Cloud Platform Console](https://console.developers.google.com/projectselector/apis/credentials) からGoogle Maps APIキーを取得します。
2. **APIキーの設定:** `lib/gmap.js` ファイルを開き、`API_KEY` 変数のプレースホルダーの値を自身のキーに置き換えます。
3. **実行:** `index.html` をウェブブラウザで開きます。アプリケーションが現在地へのアクセスを要求し、近くのWiFiスポットを検索します。

## データ / API

このプロジェクトは、`https://sparql.odp.jig.jp/` のSPARQLエンドポイントを利用して、公共WiFiスポットのオープンデータセットをクエリします。接続ロジックは `lib/odp.js` に記述されています。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
