---

layout: default
title: ようこそ！

---

<h2>今月の一曲</h2>

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4n0sVfRnd0UJsqcbPj7GqN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

Moe Shopが新譜を出して、それをきっかけに聞き始めたんだけど、滅茶苦茶良い。Moe shopの考える『萌え』のカタチが、僕の古典的萌えとは異なっているから、サウンドの感じもかなり好きだ。

<h2>今月の一枚</h2>

![]({{site.baseurl}}/assets/img/DJ.jpg)

友達と海に出掛けて、DJの真似事をやっていた時に撮られた一枚。

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