---
layout: default
title: Works
permalink: /works/
description: 映像制作、ライブ配信、出演などの仕事実績と自主制作・参加プロジェクトをまとめています。
---

{% assign work_posts = "" | split: "" %}
{% for post in site.posts %}
  {% if post.tags contains 'works' or post.tags contains 'act' or post.tags contains 'hobby' %}
    {% assign work_posts = work_posts | push: post %}
  {% endif %}
{% endfor %}

<header class="page-intro page-intro--compact shell">
  <p class="eyebrow">{{ work_posts.size }} Projects / Archive</p>
  <h1>Works</h1>
</header>

<section class="archive-section archive-section--tight shell" aria-label="仕事実績一覧">
  <div class="filter-bar" aria-label="実績を絞り込む">
    <button type="button" data-work-filter="all" aria-pressed="true">All</button>
    <button type="button" data-work-filter="works" aria-pressed="false">映像・配信</button>
    <button type="button" data-work-filter="act" aria-pressed="false">出演</button>
    <button type="button" data-work-filter="hobby" aria-pressed="false">個人活動</button>
  </div>
  <div class="works-grid">
    {% for post in work_posts %}
      {% include work-card.html post=post index=forloop.index %}
    {% endfor %}
  </div>
</section>
