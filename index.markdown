---

layout: default
title: ようこそ！

---

<h2>今月の一曲</h2>

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7syLmoHMJrR2LQSNdrO3zZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

HIPHOPとか、そのあたりの文化圏における『サンプリング』とか、そういう意味合いの文脈についてはあんまり詳しくないんだけれど、かっこいい。鈴木清順の『東京流れ者』を混ぜ込んだビデオも良い。というか東京流れ者自体めちゃくちゃ良い。そんなことやっていいのかよ...！の連続で、ミニシアターとかでなく、これが大きな劇場でかかっていたという事を思うと、映画黄金期スゲーという気持ちになる。それはそれとしてこの曲、ほぼ原形はないんですけど、かっこいいですよ。

<h2>今月の一枚</h2>

![]({{site.baseurl}}/assets/img/tokyo5.jpg)

[としめ]とあてもなく東京をさまよっていた時に彼が撮っていた一枚。写真は神奈川県川崎市。
先月、東京に偶然二人が居合わせ、そのまま二人であてもなく長距離散歩に出ていた。目的地があるわけではなかったので、雑にアニメの聖地巡礼をしながらひたすら歩いた。なんだかんだ、舞台になった場所よりも、何気なく通り過ぎたあの町の景色のほうが記憶に残ってしまった。

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

[としめ]: https://enensoen.com/toshime/

<p><small>&copy; {{ "now" | date: "%Y" }} Ganmen1281. All rights reserved.</small></p>