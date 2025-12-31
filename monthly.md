---
layout: default
title: Monthly Archive
permalink: /monthly/
---

<h1>Monthly Archive</h1>

{% assign monthly_posts = site.posts | where_exp: "post", "post.tags contains 'monthly'" %}
{% assign monthly_posts = monthly_posts | sort: "date" | reverse %}

<ul>
{% for post in monthly_posts %}
  <li>
    {{ post.date | date: "%Y-%m" }} –
    <a href="{{ post.url }}">{{ post.title }}</a>
    {% if post.tags contains 'music' %}[music]{% endif %}
    {% if post.tags contains 'photo' %}[photo]{% endif %}
  </li>
{% endfor %}
</ul>
