# microCMS で LP の管理をするサンプル

## 設定の必要があるもの

### `.env` の設定
```
# microCMSのURL（xxx.microcms.io)のxxx部分
NEXT_PUBLIC_MICROCMS_API_URL=
# APIキー
NEXT_PUBLIC_MICROCMS_API_KEY=
```

### APIスキーマ
- title
  - テキストフィールド
- content
  - リッチエディタ
 
### エンドポイント設定
`lps`

## How to run
```
$ yarn
$ yarn dev
```
