---
layout: default
title: About
permalink: /about/
description: Ganmen1281・顔面ハプニング・武木田樹のプロフィールと活動領域です。
---

{% assign intro_posts = site.posts | where_exp: "post", "post.tags contains 'intro'" %}

<header class="page-intro page-intro--about shell">
  <p class="eyebrow">Profile</p>
  <h1>About</h1>
  <p>Ganmen1281・顔面ハプニング・武木田樹に関するポートフォリオサイトです。</p>
</header>

<section class="about-profile shell">
  <div class="about-profile__image">
    <img src="{{ '/assets/img/GOPR0424.jpg' | relative_url }}" alt="Ganmen1281のポートレート" loading="eager">
  </div>
  <div class="about-profile__copy">
    <p class="eyebrow">Ganmen1281</p>
    <h2>映像、配信、DJ、<br>そして文章。</h2>
    <p>参加したモノ・コトについて纏めています。尚、守秘義務契約を果たしたモノについてはこちらには纏められていません。</p>
    <dl class="profile-fields">
      <div><dt>Field</dt><dd>Video / Live streaming / DJ / Writing / Appearance</dd></div>
    </dl>
    {% if intro_posts.size > 0 %}
      <a class="button about-profile__button" href="{{ intro_posts.first.url | relative_url }}">プロフィール記事を読む ↗</a>
    {% endif %}
  </div>
</section>
