---

layout: default
title: ようこそ！

---

・ようこそ！こちらはGanmen1281・顔面ハプニング・武木田樹のホームページです。携わったモノ,コト、あるいは雑記などがここに格納されています。尚、守秘義務契約を果たしたモノについては纏められておりません。

・Jekyllを使用しています。稼働開始は2025年5月です。ネットに転がっていた格好の良いテーマを用いてサイトの環境を構築した結果、めっちゃプログラマみたいになりましたが、へっぽこなのでバグが毎度大量に出現します。

・タイトルのごとく森のようにあらゆる情報が雑多にまとめられています。お気に召すかどうか...。

{% assign now = 'now' | date: '%s' %}
{% assign new_threshold_days = 7 %}
{% assign recent_posts = "" | split: "" %}

{% for post in site.posts %}
  {% assign post_time = post.date | date: '%s' %}
  {% assign days_since_post = now | minus: post_time | divided_by: 86400 %}
  {% if days_since_post <= new_threshold_days %}
    {% assign recent_posts = recent_posts | push: post %}
  {% endif %}
{% endfor %}

{% if recent_posts.size > 0 %}
  <h2>更新</h2>
  <ul>
    {% for post in recent_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span style="color: red; font-size: 0.8em; font-weight: bold;">[NEW]</span>
      </li>
    {% endfor %}
  </ul>
{% endif %}



<h2>About</h2>

{% assign intro_posts1 = site.posts | where_exp: "post", "post.tags contains 'intro'" %}
{% assign intro_posts2 = site.posts | where_exp: "post", "post.tags contains 'intro2'" %}
{% assign intro_posts = intro_posts1 | concat: intro_posts2 | uniq %}

{% if intro_posts.size > 0 %}
  <ul>
    {% for post in intro_posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
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

{% assign movie_posts = site.posts | where_exp: "post", "post.tags contains 'zakki'" %}
<h2>雑記</h2>
<ul>
  {% for post in movie_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<br>
Twitter: (at) ganmen1281  
Mail:ganmen1281douga (at) gmail.com  

<p><small>&copy; {{ "now" | date: "%Y" }} Ganmen1281. All rights reserved.</small></p>