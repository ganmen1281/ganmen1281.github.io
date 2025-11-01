---

layout: default
title: ようこそ！

---

<h2>今月の一曲</h2>

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/43rd6p4jWjKJccxFPONm9c?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

ずっと、カラオケに行くと必ず母親が歌っている。小さなころは母親の友人らと半ばパーティのような感覚でカラオケに行くことがあり（３～７歳ぐらい）、そうでもないとカラオケに行くことなんてないから、喜んでついていったのだけれど、毎回毎回母親がこればっかり熱唱するので（うまくはない、むしろヘタクソ）カラオケの曲として認知されている。もちろん、母親の友人らは同世代なので、みんなこれを楽しそうに熱唱していて、僕だけ全く分からないのが、なんだかはみ出し者のような気分でちょっと寂しかった記憶がある。

<h2>今月の一枚</h2>

![]({{site.baseurl}}/assets/img/撮影.jpg)

撮影中の一コマ。躍動感があってイイ！撮影はやはり楽しい。

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


<h2>News</h2>
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
<h2>Kakidame</h2>
<ul>
  {% for post in movie_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<br>
Twitter: (at) ganmen1281  
Mail:ganmen1281douga (at) gmail.com  

<p><small>&copy; {{ "now" | date: "%Y" }} Ganmen1281. All rights reserved.</small></p>