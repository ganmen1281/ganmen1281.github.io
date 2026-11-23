(() => {
  'use strict';
  const data = window.STUDIO_CONTENT;
  const $ = s => document.querySelector(s);
  const dialog = $('#work-dialog');
  const memberDialog = $('#member-dialog');
  const escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const linkedWorkTitle = title => data.workLinks?.[title] ? `<a class="work-text-link" href="${escape(data.workLinks[title])}" target="_blank" rel="noopener noreferrer">${escape(title)}</a>` : escape(title);
  const works = data.works.map(w => ({...w, title: data.workReferences?.[w.id] ?? w.title, titleDraft: data.workReferences?.[w.id] ? false : w.titleDraft, artist: data.workReferences?.[w.id] ? null : w.artist}));
  const byId = new Map(works.map(w => [w.id, w]));
  const featured = data.featured.map(id => byId.get(id)).filter(w => w && w.published);
  const selectedFeatured = featured.length ? [featured[Math.floor(Math.random() * featured.length)]] : [];
  // ページを開いた時に一度だけ選びます。代表作と重複せず、再描画や詳細の開閉でも変わりません。
  const pool = works.filter(w => w.published && !data.featured.includes(w.id));
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const selectedOthers = pool.slice(0, data.otherCount ?? 4);
  function card(w, feature) {
    return `<article class="work-card ${feature ? 'work-wide' : 'work-strip'}" data-work-id="${escape(w.id)}"><button class="work-open" data-open="${escape(w.id)}" aria-label="${escape(w.title)}の作品詳細を開く"><span class="work-image"><video class="ambient-video" autoplay muted loop playsinline preload="none" data-src="${escape(feature ? w.video : w.video.replace(/\.mp4$/, '-preview.mp4'))}" poster="${escape(w.poster)}" aria-hidden="true" tabindex="-1"></video></span><span class="work-copy"><span class="work-meta">${w.titleDraft ? '作品名確認中' : 'member work'}</span><span class="work-title">${escape(w.title)}</span>${w.artist ? `<span class="work-artist">${escape(w.artist)}</span>` : ''}<span class="work-detail-label">作品詳細を見る</span></span></button></article>`;
  }
  $('#featured-grid').innerHTML = selectedFeatured.map(w => card(w, true)).join('');
  $('#other-grid').innerHTML = selectedOthers.map(w => card(w, false)).join('');
  // プロフィールの実績を共通利用し、同名作品の担当をまとめます。動画素材は不要です。
  const archive = new Map();
  const profileWorkCredits = new Map();
  function addArchiveCredit(title, role, name) {
    if (!archive.has(title)) archive.set(title, []);
    const credits = archive.get(title);
    if (!credits.some(c => c.role === role && c.name === name)) credits.push({role, name});
  }
  data.members.forEach(member => {
    const creditName = member.creditName ?? member.name;
    [...(member.selected ?? []), ...(member.participations ?? [])].forEach(work => {
      if (!profileWorkCredits.has(work.title)) profileWorkCredits.set(work.title, []);
      const credits = profileWorkCredits.get(work.title);
      if (!credits.some(c => c.role === work.role && c.name === creditName)) credits.push({role: work.role, name: creditName});
    });
    [...(member.selected ?? []), ...(member.participations ?? [])].filter(work => work.archive !== false).forEach(work => {
      addArchiveCredit(work.archiveTitle ?? work.title, work.role, creditName);
    });
  });
  data.works.filter(work => work.published && !work.titleDraft).forEach(work => {
    (work.credits ?? []).filter(credit => credit.confirmed).forEach(credit => {
      addArchiveCredit(work.title, credit.role, credit.name);
    });
  });
  (data.additionalWorks ?? []).forEach(work => {
    work.credits.forEach(credit => addArchiveCredit(work.title, credit.role, credit.name));
  });
  $('#all-works-list').innerHTML = [...archive].map(([title, credits]) => `<li class="archive-work"><h3>${linkedWorkTitle(title)}</h3><ul class="archive-credits">${credits.map(credit => `<li>${escape(credit.role)}<span>${escape(credit.name)}</span></li>`).join('')}</ul></li>`).join('');
  $('#about-copy').textContent = data.site.about;
  $('.about .draft-label').hidden = !data.site.aboutDraft;
  const studioPhotos = data.site.studioPhotos ?? (data.site.studioPhoto ? [{ src: data.site.studioPhoto, alt: data.site.studioPhotoAlt, caption: '' }] : []);
  if (studioPhotos.length) {
    const gallery = $('#studio-photo');
    const multiple = studioPhotos.length > 1;
    const slides = multiple ? [studioPhotos.at(-1), ...studioPhotos, studioPhotos[0]] : studioPhotos;
    let cursor = multiple ? 1 : 0;
    let sliding = false;
    gallery.innerHTML = `<div class="studio-carousel" role="group" aria-roledescription="カルーセル" aria-label="現場写真"><div class="studio-track" style="transform:translateX(-${cursor * 100}%)">${slides.map((p, i) => `<div class="studio-slide" aria-hidden="${i !== cursor}"><img src="${escape(p.src)}" alt="${escape(p.alt)}" loading="${i === cursor ? 'eager' : 'lazy'}" draggable="false"></div>`).join('')}</div>${multiple ? '<button class="photo-prev" type="button" data-photo-step="-1" aria-label="前の現場写真へ"><span>prev</span></button><button class="photo-next" type="button" data-photo-step="1" aria-label="次の現場写真へ"><span>next</span></button>' : ''}</div><figcaption><span id="studio-caption" aria-live="polite">${escape(studioPhotos[0].caption)}</span></figcaption>`;
    const track = gallery.querySelector('.studio-track');
    function finishSlide() {
      if (!sliding) return;
      sliding = false;
      if (cursor === 0 || cursor === studioPhotos.length + 1) {
        cursor = cursor === 0 ? studioPhotos.length : 1;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${cursor * 100}%)`;
        track.querySelectorAll('.studio-slide').forEach((s, i) => s.setAttribute('aria-hidden', String(i !== cursor)));
        requestAnimationFrame(() => requestAnimationFrame(() => { track.style.transition = ''; }));
      }
    }
    function movePhoto(step) {
      if (!multiple || sliding) return;
      sliding = true;
      cursor += step;
      track.style.transform = `translateX(-${cursor * 100}%)`;
      track.querySelectorAll('.studio-slide').forEach((s, i) => s.setAttribute('aria-hidden', String(i !== cursor)));
      $('#studio-caption').textContent = studioPhotos[(cursor - 1 + studioPhotos.length) % studioPhotos.length].caption;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) finishSlide();
    }
    track.addEventListener('transitionend', event => { if (event.target === track && event.propertyName === 'transform') finishSlide(); });
    gallery.addEventListener('click', event => {
      const button = event.target.closest('[data-photo-step]');
      if (button) movePhoto(Number(button.dataset.photoStep));
    });
    gallery.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault(); movePhoto(event.key === 'ArrowRight' ? 1 : -1);
      }
    });
  }
  const reel = $('#reel');
  reel.poster = data.site.reel.poster;
  reel.muted = true;
  reel.src = data.site.reel.video;
  const ambientVideos = [...document.querySelectorAll('.ambient-video')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let motionPaused = reducedMotion.matches;
  const visibleVideos = new Set();
  function updateMotionButton(blocked = false) {
    $('#motion-toggle').textContent = blocked ? 'motion / play' : `motion / ${motionPaused ? 'off' : 'on'}`;
    $('#motion-toggle').setAttribute('aria-pressed', String(motionPaused));
    $('#motion-toggle').setAttribute('aria-label', motionPaused || blocked ? '背景と作品の映像を再生' : '背景と作品の映像を一時停止');
  }
  function updateAmbient() {
    ambientVideos.forEach(video => {
      if (!motionPaused && !document.hidden && !dialog.open && !memberDialog.open && visibleVideos.has(video)) {
        if (video.dataset.src && !video.getAttribute('src')) video.src = video.dataset.src;
        video.play().catch(error => {
          if (error.name === 'NotAllowedError' && video === reel && !motionPaused && visibleVideos.has(video)) updateMotionButton(true);
        });
      } else video.pause();
    });
    const detailVideo = dialog.querySelector('.detail-video');
    if (detailVideo) {
      if (dialog.open && !document.hidden && !detailPaused) detailVideo.play().catch(error => {
        const toggle = dialog.querySelector('[data-detail-motion]');
        if (toggle && !detailPaused && error.name === 'NotAllowedError') toggle.textContent = 'motion / play';
      });
      else detailVideo.pause();
    }
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) visibleVideos.add(entry.target); else visibleVideos.delete(entry.target); });
    updateAmbient();
  }, { threshold: 0.08 });
  ambientVideos.forEach(video => { video.muted = true; observer.observe(video); });
  updateMotionButton();
  $('#motion-toggle').addEventListener('click', () => {
    if ($('#motion-toggle').textContent === 'motion / play') motionPaused = false;
    else motionPaused = !motionPaused;
    updateMotionButton(); updateAmbient();
  });
  reducedMotion.addEventListener('change', e => { motionPaused = e.matches; updateMotionButton(); updateAmbient(); });
  document.addEventListener('visibilitychange', updateAmbient);
  $('#sound-toggle').addEventListener('click', () => {
    reel.muted = !reel.muted;
    $('#sound-toggle').textContent = `sound / ${reel.muted ? 'off' : 'on'}`;
    $('#sound-toggle').setAttribute('aria-pressed', String(!reel.muted));
    $('#sound-toggle').setAttribute('aria-label', `リールの音声を${reel.muted ? 'オン' : 'オフ'}にする`);
    if (!reel.muted) { motionPaused = false; updateMotionButton(); updateAmbient(); }
  });
  function memberCredits(title, items = []) {
    if (!items.length) return '';
    return `<section class="member-credits"><h4>${escape(title)}</h4><ul>${items.map(item => `<li><span>${linkedWorkTitle(item.title)}</span><span class="member-credit-role">${escape(item.role)}</span></li>`).join('')}</ul></section>`;
  }
  const memberCard = (m, i) => `<article class="member-profile"><button type="button" class="member-summary" data-member="${i}" aria-haspopup="dialog">${m.photo ? `<img class="member-icon" src="${escape(m.photo)}" alt="" loading="lazy" width="72" height="72">` : ''}<span class="member-intro"><span class="member-name">${escape(m.name)}</span><span class="member-role">${escape(m.role)}</span></span><span class="member-toggle" aria-hidden="true">profile <span class="member-plus">+</span></span></button></article>`;
  $('#lead-member').innerHTML = data.members.map((m, i) => m.name === '顔面ハプニング' ? memberCard(m, i) : '').join('');
  $('#member-list').innerHTML = data.members.map((m, i) => m.name !== '顔面ハプニング' ? memberCard(m, i) : '').join('');
  let memberReturnFocus = null;
  $('#members').addEventListener('click', event => {
    const button = event.target.closest('[data-member]');
    if (!button) return;
    const m = data.members[Number(button.dataset.member)];
    memberReturnFocus = button;
    $('#member-dialog-content').innerHTML = `<div class="member-dialog-layout"><div class="member-portrait">${m.photo ? `<img src="${escape(m.photo)}" alt="${escape(m.name)}" width="200" height="200">` : ''}</div><div class="member-dialog-copy"><header class="member-dialog-heading"><h2 id="member-dialog-title">${escape(m.name)}</h2><p class="member-role">${escape(m.role)}</p></header><div class="member-bio">${m.draft ? '<span class="draft-label">構成員情報は仮配置</span>' : ''}${m.affiliation ? `<p class="member-affiliation">${escape(m.affiliation)}</p>` : ''}${m.education ? `<p class="member-education">${escape(m.education)}</p>` : ''}<p class="member-description">${escape(m.profile)}</p>${memberCredits('代表作', m.selected)}${memberCredits('参加', m.participations)}${m.awards?.length ? `<section class="member-credits"><h4>賞歴</h4><ul class="member-awards">${m.awards.map(a => `<li>${escape(a)}</li>`).join('')}</ul></section>` : ''}</div></div></div>`;
    memberDialog.showModal();
    memberDialog.scrollTop = 0;
    document.body.classList.add('body-dialog');
    updateAmbient();
    $('#close-member').focus();
  });
  $('#close-member').addEventListener('click', () => memberDialog.close());
  memberDialog.addEventListener('click', event => {
    if (event.target !== memberDialog) return;
    const r = memberDialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) memberDialog.close();
  });
  memberDialog.addEventListener('close', () => {
    if (!dialog.open) document.body.classList.remove('body-dialog');
    if (memberReturnFocus?.isConnected) memberReturnFocus.focus({ preventScroll: true });
    updateAmbient();
  });
  $('.member-note').hidden = !data.members.some(m => m.draft);
  if (data.news.length) {
    $('#news').hidden = false;
    $('#news-list').innerHTML = data.news.map(n => `<li><time datetime="${escape(n.date)}">${escape(n.date.replaceAll('-', '.'))}</time>${n.url ? `<a href="${escape(n.url)}">${escape(n.title)}</a>` : `<span>${escape(n.title)}</span>`}</li>`).join('');
  }
  $('#contact-email').textContent = data.site.email;
  $('#contact-email').href = `mailto:${data.site.email}?subject=${encodeURIComponent(data.site.contactSubject)}`;
  $('#copy-email').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(data.site.email); $('#copy-status').textContent = 'コピーしました'; }
    catch { $('#copy-status').textContent = 'メールアドレスを選択してコピーしてください'; }
  });
  $('#year').textContent = new Date().getFullYear();
  let lastFocus = null;
  let detailPaused = reducedMotion.matches;
  function openDetail(id) {
    const w = byId.get(id);
    if (!w || !w.published) return;
    if (!dialog.open) lastFocus = document.activeElement;
    detailPaused = reducedMotion.matches;
    const title = data.workReferences?.[id] ?? w.title;
    const credits = [...(profileWorkCredits.get(title) ?? []), ...(archive.get(title) ?? [])].filter((credit, i, all) => all.findIndex(c => c.role === credit.role && c.name === credit.name) === i);
    const youtubeUrl = data.workLinks?.[title];
    const youtubeId = youtubeUrl ? new URL(youtubeUrl).searchParams.get('v') : null;
    const youtubeEmbed = youtubeId && /^[A-Za-z0-9_-]{11}$/.test(youtubeId) ? `https://www.youtube-nocookie.com/embed/${youtubeId}` : null;
    $('#detail-content').innerHTML = `<section class="detail-stage"><video class="detail-video" muted loop playsinline preload="metadata" poster="${escape(w.poster)}" src="${escape(w.video)}" aria-label="${escape(title)}の背景映像"></video><div class="detail-head"><h2 id="detail-title">${escape(title)}</h2></div></section><div class="detail-toolbar"><button type="button" data-detail-credits>credits</button><div><button type="button" data-detail-motion aria-label="作品の背景映像を${detailPaused ? '再生' : '一時停止'}" aria-pressed="${detailPaused}">motion / ${detailPaused ? 'off' : 'on'}</button></div></div><div class="detail-credit" id="detail-credits"><h3>CREDITS / 参加クレジット</h3>${credits.length ? credits.map(c => `<div class="credit-row"><span>${escape(c.role)}</span><span class="credit-name">${escape(c.name)}</span></div>`).join('') : '<p>実際の担当・担当者名義を確認中</p>'}${youtubeEmbed ? `<div class="detail-youtube-embed"><iframe src="${escape(youtubeEmbed)}" title="${escape(title)} — YouTube" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>` : ''}</div>`;
    dialog.querySelector('.detail-video').muted = true;
    if (!dialog.open) dialog.showModal();
    updateAmbient();
    dialog.scrollTop = 0;
    document.body.classList.add('body-dialog');
    $('#close-detail').focus();
  }
  document.addEventListener('click', event => {
    const b = event.target.closest('[data-open]');
    if (b) { history.pushState(null, '', `#work/${b.dataset.open}`); openDetail(b.dataset.open); }
  });
  function closeDetail() { if (location.hash.startsWith('#work/')) { history.back(); } else dialog.close(); }
  $('#close-detail').addEventListener('click', closeDetail);
  dialog.addEventListener('click', event => {
    const video = dialog.querySelector('.detail-video');
    if (event.target.closest('[data-detail-motion]')) {
      const toggle = dialog.querySelector('[data-detail-motion]');
      detailPaused = toggle.textContent === 'motion / play' ? false : !detailPaused;
      toggle.textContent = `motion / ${detailPaused ? 'off' : 'on'}`;
      toggle.setAttribute('aria-pressed', String(detailPaused));
      toggle.setAttribute('aria-label', `作品の背景映像を${detailPaused ? '再生' : '一時停止'}`);
      updateAmbient();
    }

    if (event.target.closest('[data-detail-credits]')) $('#detail-credits').scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
  });
  dialog.addEventListener('cancel', e => { e.preventDefault(); closeDetail(); });
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeDetail(); } });
  dialog.addEventListener('close', () => {
    dialog.querySelectorAll('iframe').forEach(frame => frame.remove());
    const video = dialog.querySelector('video');
    if (video) { video.pause(); video.removeAttribute('src'); video.load(); }
    document.body.classList.remove('body-dialog');
    if (lastFocus?.isConnected) lastFocus.focus({ preventScroll: true });
    updateAmbient();
  });
  let initialDetail = true;
  function syncHash() {
    if (location.hash.startsWith('#work/')) {
      const id = location.hash.slice(6);
      if (initialDetail && byId.get(id)?.published) {
        // 直リンクで開いた詳細も、閉じるボタンでこのサイトのトップへ戻せます。
        history.replaceState(null, '', location.pathname + location.search);
        history.pushState(null, '', `#work/${id}`);
      }
      openDetail(id);
    } else if (dialog.open) dialog.close();
    initialDetail = false;
  }
  window.addEventListener('popstate', syncHash);
  syncHash();
  if (!data.site.preview) { $('.preview-tag').hidden = true; $('footer > span').hidden = true; document.title = `${data.site.name}｜STUDIO GANMEN`; }
})();


