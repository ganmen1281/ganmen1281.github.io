---
layout: default
title: 顔面ハプニング / Ganmen1281
description: Ganmen1281・顔面ハプニング・武木田樹の映像制作、ライブ配信、出演、文章をまとめたポートフォリオサイトです。
---

{% assign intro_post = site.posts | where_exp: "post", "post.tags contains 'intro'" | first %}

<section class="home-splash" aria-labelledby="home-title">
  <div class="shell home-splash__inner">
    <div class="home-splash__masthead">
      <a class="site-brand" href="{{ '/' | relative_url }}" aria-label="顔面ハプニング トップページ"><span class="site-brand__mark" aria-hidden="true">G</span><span class="site-brand__name">Ganmen1281</span></a>
    </div>
    <div class="home-splash__title">
      <h1 id="home-title">顔面ハプニング</h1>
      <p>Ganmen1281 <span>/ 武木田 樹</span></p>
    </div>
    <div class="home-splash__bottom">
      <nav class="home-splash__nav" aria-label="サイトメニュー">
        {% if intro_post %}<a href="{{ intro_post.url | relative_url }}">About</a>{% endif %}
        <a href="{{ '/works/' | relative_url }}">Works</a>
        {% if site.show_monthly != false %}<a href="{{ '/monthly/' | relative_url }}">Monthly</a>{% endif %}
        <a href="{{ '/kakidame/' | relative_url }}">Kakidame</a>
        <a href="{{ '/contact/' | relative_url }}">Contact</a>
      </nav>
    </div>
  </div>
</section>
