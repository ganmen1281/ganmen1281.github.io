---
layout: default
title: Monthly Archive
permalink: /monthly/
description: 「今月の一曲」と「今月の一枚」のアーカイブです。
---

{% assign monthly_posts = site.posts | where_exp: "post", "post.tags contains 'monthly'" %}

<header class="page-intro page-intro--dark shell">
  <p class="eyebrow">Music &amp; photograph</p>
  <h1>Monthly</h1>
  <p>その月に聴いていた一曲と、目に留まった一枚。2026年1月からの記録をすべて残しています。</p>
</header>

<section class="archive-section shell" aria-label="Monthly記事一覧">
  <div class="monthly-archive-grid">
    {% for post in monthly_posts %}
      <a class="monthly-archive-card {% if post.tags contains 'music' %}is-music{% else %}is-photo{% endif %} {% if post.thumbnail %}has-image{% endif %}" href="{{ post.url | relative_url }}">
        {% if post.thumbnail %}<img class="monthly-archive-card__image" src="{{ post.thumbnail | relative_url }}" alt="" loading="lazy">{% endif %}
        <span>{% if post.tags contains 'music' %}Music{% else %}Photo{% endif %}</span>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m" }}</time>
        <h2>{{ post.title }}</h2>
        <b aria-hidden="true">↗</b>
      </a>
    {% endfor %}
  </div>
</section>
