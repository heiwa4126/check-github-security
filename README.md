# check-github-security

GitHub の Code scanning​ と Secret scanning​ と Dependbot が有効かテストするプロジェクト。

[Express](https://expressjs.com/) で XSS のあるコードを書き、
なおかつ脆弱性のある古いバージョンを使っている。

→ 修正してしまったので、脆弱性がある版は tag:insecure で取得してください

## インストールとテスト

```sh
npm i
npm test
```

## 実行例

```sh
npm start &
curl 127.0.0.1:3000
# <html><body><h1>User comment: </h1></body></html>
curl "127.0.0.1:3000?comment=hello"
# html><body><h1>User comment: hello</h1></body></html>
```

## Secret scanning​

Code scanning​ と Dependbot のテストは簡単だったけど、
Secret scanning​ はどうしても本物でないとダメらしい。

あと Secret scanning の Push protection は実際にはブロックされなくて、
警告のみ、とかいう話も聞いたので恐ろしくてテストできない。

1 時間で expire する readonly の token とかならいいかな...
