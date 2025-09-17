---

layout: default
title: ようこそ！

---

<h2>今月の一曲</h2>

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3K0SJUQNbOkUprTFcwwAKN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

パルプ・フィクションの音楽と言えば？まあ大体の人が『Misirlou』と答えると思う。間違いじゃない、というか世俗ではそれが一般的な共通認識だけれど、声を大にして言いたい、それだけじゃないってこと。

<h2>今月の一枚</h2>

![]({{site.baseurl}}/assets/img/tokyomukogaoka.png)

分かる人には分かるアングルで、分かる人には分かる場所。この周辺には何度か訪れているけれど、東京（場所は完全に神奈川だが）の周辺は訪れる度に感じる事・考える事が変わる。これは2023年。確かこの写真は[東京少年少女]({{ site.baseurl }}{% post_url 2025-07-12-tokyo %})達と会った日の写真だ。あれは8月だけど。

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
  <h2>Latest updates</h2>
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


<h2>Works</h2>
<ul>
  {% assign topics = "works,act,hobby" | split: "," %}
  {% assign topic_posts = "" | split: "" %}

  {% for tag in topics %}
    {% for post in site.tags[tag] %}
      {% unless topic_posts contains post %}
        {% assign topic_posts = topic_posts | push: post %}
      {% endunless %}
    {% endfor %}
  {% endfor %}

  {% assign topic_posts = topic_posts | sort: "date" | reverse %}
  
  {% for post in topic_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

{% assign movie_posts = site.posts | where_exp: "post", "post.tags contains 'zakki'" %}
<h2>zakki</h2>
<ul>
  {% for post in movie_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<br>
Twitter: (at) ganmen1281  
Mail:ganmen1281douga (at) gmail.com  

<p><small>&copy; {{ "now" | date: "%Y" }} Ganmen1281. All rights reserved.</small></p>