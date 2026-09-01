---
layout: default
title: Ganmen の 森
description: Ganmen1281・顔面ハプニング・武木田樹の映像制作、ライブ配信、出演、文章をまとめたポートフォリオサイトです。
---

{% assign intro_post = site.posts | where_exp: "post", "post.tags contains 'intro'" | first %}

<section class="home-splash" aria-labelledby="home-title">
  <div class="shell home-splash__inner">
    <h1 id="home-title"><span>顔面ハプニング</span><span>/ Ganmen1281</span></h1>
    <nav class="home-splash__nav" aria-label="サイトメニュー">
      {% if intro_post %}<a href="{{ intro_post.url | relative_url }}">About</a>{% endif %}
      <a href="{{ '/works/' | relative_url }}">Works</a>
      <a href="{{ '/monthly/' | relative_url }}">Monthly</a>
      <a href="{{ '/kakidame/' | relative_url }}">Kakidame</a>
      <a href="{{ '/contact/' | relative_url }}">Contact</a>
    </nav>
  </div>
</section>
