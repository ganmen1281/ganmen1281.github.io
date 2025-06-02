---

layout: default
title: ようこそ！

---

Ganmen1281・顔面ハプニング・武木田樹に関するポートフォリオサイトです。

参加したモノ・コトについて纏められています。

尚、守秘義務契約を果たしたモノについてはこちらには纏められていません。

ジキルで転がってたテーマを用いた結果、めっちゃプログラマみたいになりましたが、僕はその辺りの知識には全く明るくないです。とはいえ、頑張ってコマンドプロンプトをポチポチするくらいの知識はあるという裏返しですね。

---

{% assign intro_post = site.posts | where_exp: "post", "post.tags contains 'intro'" | first %}

<h2>自己紹介</h2>
{% if intro_post %}
  <h3><a href="{{ intro_post.url }}">{{ intro_post.title }}</a></h3>
  <div>
    {{ intro_post.excerpt }}
    <p><a href="{{ intro_post.url }}">続きを読む</a></p>
  </div>
{% else %}
  <p>自己紹介記事がまだありません。</p>
{% endif %}

{% assign movie_posts = site.posts | where_exp: "post", "post.tags contains 'works'" %}
<h2>映像など</h2>
<ul>
  {% for post in movie_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

{% assign book_posts = site.posts | where_exp: "post", "post.tags contains 'act'" %}
<h2>出演など</h2>
<ul>
  {% for post in book_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

{% assign book_posts = site.posts | where_exp: "post", "post.tags contains 'hobby'" %}
<h2>趣味など</h2>
<ul>
  {% for post in book_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
