# 「Ganmen の 森」更新マニュアル

このサイトはJekyllで作られています。仕事実績や自主制作を1件追加するときは、基本的に「記事ファイルを1つ追加」「サムネイル画像を1枚追加」の2作業だけです。Works一覧と詳細ページは自動で更新されます。

## フォルダの場所

- 実績・記事：`_posts/`
- 下書きテンプレート：`_drafts/work-template.md`
- カード用サムネイル：`assets/img/thumbnails/`
- 記事本文で使う通常画像：`assets/img/`
- サイト全体の設定：`_config.yml`

## 新しい実績記事を追加する

1. `_drafts/work-template.md` をコピーします。
2. コピー先を `_posts/` にします。
3. ファイル名を `YYYY-MM-DD-半角英数字の名前.md` にします。例：`2026-09-01-new-event.md`。
4. ファイル先頭の `title`、`date`、`role`、`description` を書き換えます。
5. `published: false` を `published: true` にするか、その行を削除します。
6. `---` より下の本文を書き換えます。

実績としてWorksに表示する記事は、次を残してください。

```yaml
tags:
  - works
```

出演記事の場合は `works` の代わりに `act`、個人活動の場合は `hobby` を使います。

## サムネイル画像を追加・変更する

1. 正方形に近いJPEG、PNG、WebP画像を用意します。推奨は1200×1200px前後、1MB以下です。
2. ファイル名を半角英数字にします。例：`new-event.jpg`。
3. `assets/img/thumbnails/` に入れます。
4. 記事先頭の2行を書き換えます。

```yaml
thumbnail: /assets/img/thumbnails/new-event.jpg
thumbnail_alt: "会場で配信卓を操作している様子"
```

`thumbnail` の行を削除すると、白黒の共通フォールバックカードが自動表示されます。画像を後で追加した場合は、この2行を追加するだけで画像カードへ切り替わります。

サムネイルはWorks一覧の正方形グリッド専用です。詳細ページの先頭には表示されません。詳細本文にも画像を載せたい場合は、本文中へ通常画像を追加してください。

## 既存記事を修正する

`_posts/` から該当記事を探して開きます。`---` より上はタイトルや日付などの設定、`---` より下が本文です。変更後に保存すると、一覧と詳細ページの両方へ反映されます。

## Monthlyメニューを一時的に隠す・戻す

`_config.yml` の `show_monthly: false` で、トップページと共通ナビゲーションのMonthlyリンクを非表示にしています。`show_monthly: true` にして再ビルドすると、両方のメニューに再表示されます。

Monthlyの記事・画像・ページは削除していません。非表示中も既存のURLから直接閲覧できます。

## 表示順を変更する

記事は `date` の新しい順に並びます。表示順を変えたい場合は、記事先頭の `date` を変更します。

```yaml
date: 2026-09-01 12:00:00 +0900
```

同じ日付の記事を並べ分けたいときは時刻を変えてください。実際の公開日を変えたくない場合は、無理に順番だけを変えず、日付順のままにすることをおすすめします。

## 下書きとして非公開にする

記事先頭へ次を追加します。

```yaml
published: false
```

公開するときは `false` を `true` にするか、この行を削除します。ファイルを `_drafts/` に置いている間もGitHub Pagesでは公開されません。

## 担当・クレジット・関連リンクを編集する

担当名は `role` に書きます。複数のクレジットや公式リンクは次の形式です。項目が不要なら、そのまとまりごと削除できます。

```yaml
credits:
  - role: "ディレクター"
    name: "Ganmen1281"
  - role: "編集"
    name: "担当者名"
external_links:
  - label: "公式サイト"
    url: "https://example.com/"
```

## ローカルで表示を確認する

初回だけ、リポジトリのフォルダで次を実行します。

```powershell
bundle install
```

確認用サーバーを起動します。

```powershell
bundle exec jekyll serve
```

ブラウザで `http://127.0.0.1:4000/` を開きます。下書きも確認したい場合は次を使います。

```powershell
bundle exec jekyll serve --drafts
```

終了するときはターミナルで `Ctrl + C` を押します。`_config.yml` を変更した場合は、一度終了して起動し直してください。

## GitHub Pagesへ公開する

1. 変更した記事と画像をGitHubへコミット／プッシュします。
2. GitHubのリポジトリで `Settings` → `Pages` を開きます。
3. `Build and deployment` が `Deploy from a branch`、ブランチが `main`、フォルダが `/(root)` になっていることを確認します。
4. 数分待って `https://ganmen1281.github.io/` を開きます。

GitHubの画面だけで更新する場合も、`Add file` から記事と画像を追加し、`Commit changes` すれば同じように公開できます。

## よくあるミス

- ファイル名の日付と `date` が大きく違う
- `---` を消してしまう
- 画像パスの先頭 `/` を忘れる
- `thumbnail_alt` を空欄にする
- YAMLのインデントをタブで入力する（半角スペースを使います）
- 全角記号をURLやファイル名に使う

迷った場合は `_drafts/work-template.md` を新しくコピーし直し、必要な部分だけ書き換えるのが安全です。
