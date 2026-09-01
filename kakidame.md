---
layout: default
title: Kakidame
permalink: /kakidame/
description: Ganmen1281による雑記、考察、活動記録のアーカイブです。
---

{% assign note_posts = site.posts | where_exp: "post", "post.tags contains 'zakki'" %}

<header class="page-intro page-intro--graphic shell">
  <p class="eyebrow">Writing / {{ note_posts.size }} notes</p>
  <h1>Kakidame</h1>
  <p>映像、音楽、アニメ、日々の出来事。仕事実績とは少し離れた、考えたことの書きためです。</p>
</header>

<section class="archive-section shell" aria-label="Kakidame記事一覧">
  <div class="article-index">
    {% for post in note_posts %}
      <article class="article-index__item">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
        <div>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 135 }}</p>
        </div>
        <a class="article-index__arrow" href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}を読む">↗</a>
      </article>
    {% endfor %}
  </div>
</section>
