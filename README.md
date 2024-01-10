# golang-nextjs

Go + Next.js + Docker のサンプルプロジェクト

## 使用技術

- Go v1.21
- Node.js v20
- Next.js v14.0.4
- Docker

## ソースコード clone

```sh
git clone https://github.com/kanaru-ssk/golang-nextjs.git

cd golang-nextjs
```

## 開発起動

### Docker イメージビルド

```sh
docker compose build
```

### 開発サーバー起動

```sh
docker compose up -d
```

## 本番起動

### Docker イメージビルド

```sh
docker compose -f compose.yml -f compose.prd.yml build
```

### 本番起動

```sh
docker compose -f compose.yml -f compose.prd.yml up -d
```
