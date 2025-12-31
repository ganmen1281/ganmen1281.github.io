---

layout: default
title: ようこそ！

---

<h2>Monthly</h2>

<div class="monthly-archive-mini">
  {% assign monthly_posts = site.posts | where_exp: "post", "post.tags contains 'monthly'" %}
  {% assign monthly_posts = monthly_posts | sort: "date" | reverse %}

  <ul>
    {% for post in monthly_posts limit:6 %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>

  <p class="monthly-more">
    <a href="/monthly/">→ archive</a>
  </p>
</div>

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

{% assign now = 'now' | date: '%s' %}
{% assign new_threshold_days = 7 %}
{% assign recent_posts = "" | split: "" %}

{% for post in site.posts %}
  {% assign post_time = post.date | date: '%s' %}
  {% assign days_since_post = now | minus: post_time | divided_by: 86400 %}
  {% if days_since_post <= new_threshold_days %}
    {% unless post.tags contains 'monthly' %}
      {% assign recent_posts = recent_posts | push: post %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% if recent_posts.size > 0 %}
  <h2>Latest updates</h2>
  <ul>
    {% for post in recent_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span style="color:red;font-size:0.8em;font-weight:bold;">[NEW]</span>
      </li>
    {% endfor %}
  </ul>
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