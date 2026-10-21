# shisonoha.net

WordPress（Virtue テーマ）で運用していたサイトを Astro + TypeScript の静的サイトに移行したもの。

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバ |
| `npm run build` | `dist/` に静的ファイルを出力 |
| `npm run preview` | ビルド結果の確認 |
| `npx astro check` | 型チェック |

## 構成

- `src/content/portfolio/*.md` … Portfolio の各作品。フロントマターは `src/content.config.ts` で型検証される（`type` / `order` / `homeOrder` / `thumbnail` / `media`）。本文は Markdown
- `src/pages/mloa.md` … 意識中くらいのページ
- `src/data/profile.ts` … プロフィール内容 / `src/data/news.ts` … フッターの What's New / `src/data/home.ts` … トップのタイル
- `public/images/uploads/` … WordPress の `wp-content/uploads` から取得した画像（元の年月ディレクトリ構成のまま）
- URL は WordPress 時代と同じ（`/profile/`, `/portfolio/<slug>/`, `/portfolio-type/<type>/`, `/mloa/`）

## 作品を追加するには

`src/content/portfolio/<slug>.md` を作り、`order`（一覧での順序）などを書く。ビルドすると `/portfolio/<slug>/` が生成される。

## 公開（GitHub Pages）

`main` ブランチへの push で `.github/workflows/deploy.yml` が走り、GitHub Pages にデプロイされる。独自ドメインは `public/CNAME`（`shisonoha.net`）で指定している。
リポジトリの Settings → Pages → Source を「GitHub Actions」にしておくこと。
