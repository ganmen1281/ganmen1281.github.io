---

layout: default
title: ようこそ！

---

Ganmen1281・顔面ハプニング・武木田樹に関するポートフォリオサイトです。参加したモノ・コトについて纏められています。尚、守秘義務契約を果たしたモノについてはこちらには纏められていません。

ジキルで転がってたテーマを用いた結果、めっちゃプログラマみたいになりましたが、僕はその辺りの知識には全く明るくないです。とはいえ、頑張ってコマンドプロンプトをポチポチするくらいの知識はあるという...。

{% assign intro_post = site.posts | where_exp: "post", "post.tags contains 'intro'" | first %}

<h2>About</h2>
{% if intro_post %}
  <h3><a href="{{ intro_post.url }}">{{ intro_post.title }}</a></h3>
{% else %}
  <p>自己紹介記事がまだありません。</p>
{% endif %}

{% assign movie_posts = site.posts | where_exp: "post", "post.tags contains 'works'" %}
<h2>映像</h2>
<ul>
  {% for post in movie_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

{% assign book_posts = site.posts | where_exp: "post", "post.tags contains 'act'" %}
<h2>出演</h2>
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
<br>
Twitter: @ ganmen1281  
Mail:ganmen1281douga @ gmail.com  

<p><small>&copy; {{ "now" | date: "%Y" }} Ganmen1281. All rights reserved.</small></p>