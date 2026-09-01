# Ganmen の 森

Ganmen1281の仕事実績、Monthly、Kakidame、プロフィールを掲載するJekyll製ポートフォリオサイトです。GitHub Pagesでそのまま公開できます。

## 更新

初心者向けの手順は [UPDATE_GUIDE.md](UPDATE_GUIDE.md) を参照してください。新しい実績は `_drafts/work-template.md` をコピーして追加できます。

## ローカル確認

```powershell
bundle install
bundle exec jekyll serve
```

`http://127.0.0.1:4000/` を開いて確認します。

## 構成

- `_posts/`：すべての記事
- `_layouts/`：共通レイアウト
- `_includes/`：ヘッダー、フッター、実績カード
- `assets/img/thumbnails/`：正方形サムネイル
- `assets/css/style.scss`：デザイン
- `works.md`、`kakidame.md`、`monthly.md`、`about.markdown`：各一覧ページ
