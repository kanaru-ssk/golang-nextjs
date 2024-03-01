# golang-nextjs

Go + Next.js + Docker のサンプルプロジェクト

## 使用技術

- Go v1.22
- gqlgen v0.17.44
- TypeScript v5.3.3
- Next.js v14.1.1
- Apollo Client v3.9.5
- GraphQL v16.8.1
- Docker v25.0.3

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
