// 掲載内容はこのファイルで管理します。featured は上段に出す作品の抽選候補です。
window.STUDIO_CONTENT = {
  site: {
    name: 'スタジオ顔面',
    email: 'ganmen1281douga@gmail.com',
    contactSubject: 'スタジオ顔面へのお問い合わせ',
    preview: false,
    description: 'スタジオ顔面の映像作品と、メンバーの参加作品をご紹介します。',
    about: 'そんなに難しいことは考えていません。\n楽しい、カッコいい、おもしろい。\nそういうものを追いかけて、ゲームの解説動画から、映画、MV、番組配信。\n沢山のものを作っています。\n顔面ハプニングが良く動かすから、スタジオ顔面。\n超・わかりやすくないですか？',
    aboutDraft: false,
    studioPhotos: [
      { src: 'assets/studio-editing.jpg', alt: 'パソコンと編集モニターに向かう二人の作業風景', caption: '編集作業の風景' },
      { src: 'assets/studio-production.jpg', alt: 'カメラ、パソコン、音響機材を並べて作業する現場', caption: '制作現場の風景' },
      { src: 'assets/studio-camera.jpg', alt: '会場を向いたビデオカメラとモニター', caption: 'カメラ越しの現場' }
    ],
    reel: { video: 'assets/reel-05-4.mp4', poster: 'assets/reel-05-4.jpg', label: 'STUDIO GANMEN REEL' }
  },
  featured: ['after-party02', 'inori', 'mawarimichi'],
  otherCount: 4,
  // 動画カードと、プロフィール・実績の正式表記を対応させます。
  workReferences: {
    'after-party02': 'GALLERIA × 原口沙輔「Composite Sample Share 02 “After Party”」',
    'inori': '原口沙輔「祈りニ愛ヲ」 MV',
    'mawarimichi': '短編映画「ゆるり、どんどん、まわりみち」',
    'work-02': '里石ユカ公式コンピレーションアルバム「Re:魔法少女【里石ユカコンピXFD】」',
    'work-03': '未踏IT人材発掘・育成事業内プロジェクト「ユーザとモノのネットワーク体験を創作するためのARシステム」',
    'work-04': 'GALLERIA × 原口沙輔「Composite Sample Share“After Party”」',
    'work-06': 'CDs「DJs for anywhere 002」',
    'work-07': 'オーディオ・ヴィジュアルイベント「ozm_sis vol.2」'
  },
  // 公開映像・公式ページ・告知へのリンク。All Worksとプロフィールで共通利用。
  workLinks: {
    'テレビアニメ"うたごえはミルフィーユ"内ユニット "Parabola"「BRAIN HACK」': 'https://youtu.be/iGWu8mwkpJI',
    'スターダストプロモーション所属"MISS MERCY"「珈琲とバブルガム」': 'https://open.spotify.com/track/4bHEH1L78fxnkdp8JxADV3',
    '"MISS MERCY"「珈琲とバブルガム。-dessert edition-」': 'https://open.spotify.com/track/1vzh1Dza74oMzadyBv0pfa',
    '"MISS MERCY"「Gravity」': 'https://open.spotify.com/track/0ReRzGo3gzEzIrNqBUKZHj',
    '"MISS MERCY"「Upside Down」': 'https://open.spotify.com/track/19ZSwACmP0pIm75l2HUhyl',
    'KVGGLLV・ZERRY・Annie beatz "VODCA FLOW"': 'https://open.spotify.com/track/2ZNm7sMzTYrPEoL2JiydAL',
    '"WAWA"「TOUSHINDAI (feat.JAYLOX)」': 'https://open.spotify.com/track/7y79qn6rHXsrXiA5n55VY0',
    '"HiROU"「Y.S.O.M.G」': 'https://open.spotify.com/track/6DY7m4ZbcWYA66iMZa4KHp',
    '短編映画「最終的かつ不可逆的な解決」': 'https://www.youtube.com/watch?v=JqAWE0bL-wA&t=1141s',
    '原口沙輔「祈りニ愛ヲ」 MV': 'https://www.youtube.com/watch?v=UKVwK3rXJII',
    'GALLERIA × 原口沙輔「Composite Sample Share“After Party”」': 'https://www.youtube.com/watch?v=bBnBpwNuZ_U',
    'GALLERIA × 原口沙輔「Composite Sample Share 02 “After Party”」': 'https://www.youtube.com/watch?v=6DhLFZDkDjk',
    'CDs「DJs for anywhere 002」': 'https://www.youtube.com/watch?v=zy6ZYwadfi0',
    '未踏IT人材発掘・育成事業内プロジェクト「ユーザとモノのネットワーク体験を創作するためのARシステム」': 'https://www.youtube.com/watch?v=KSkFV1ALJHo',
    'Youtubeチャンネル「顔面ハプニング【ゲーム解説】」': 'https://www.youtube.com/channel/UCo46K_C3_k7jj5aEzBw664w',
    '京都市勧業館みやこめっせ「BitSummit Drift 2026」': 'https://www.youtube.com/watch?v=AdXBG0xZnwc',
    '里石ユカ公式コンピレーションアルバム「Re:魔法少女【里石ユカコンピXFD】」': 'https://www.youtube.com/watch?v=GTLuBcFgVTw',
    'オーディオ・ヴィジュアルイベント「ozm_sis vol.2」': 'https://www.youtube.com/watch?v=9wEPEcW69kk',
    'ゆるり、どんどん、まわりみち': 'https://www.youtube.com/watch?v=UcbopaLTgNQ',
    '短編映画「ゆるり、どんどん、まわりみち」': 'https://www.youtube.com/watch?v=UcbopaLTgNQ',
    'おお阪 in da party 2': 'https://x.com/Quartz_Tea/status/2093315174803673227',
    'VS. 山之内厳駿 “全方位型”': 'https://vsvs.jp/events/genshun-yamanouchi-omniazimuth/',
    'BitSummit Drift 2025': 'https://www.youtube.com/watch?v=ow7sV8tdWkw&t=13083s',
    'CDs「DJs for anywhere 001」': 'https://x.com/ganmen1281/status/1936465249986920683',
    'BitSummit Drift 2024': 'https://www.youtube.com/watch?v=N5t_Oreljh0'
  },
  // 動画なしでも掲載できる実績。個人サイトの記事本文で担当を確認したものです。
  additionalWorks: [
    { title: 'GALLERIA × 原口沙輔「Composite Sample Share 02 “After Party”」', credits: [{role: '機材協力', name: 'キタ'}] },
    { title: 'おお阪 in da party 2', sourceUrl: 'https://ganmen1281.github.io/携わったもの,映像/2026/08/27/ootuku2.html', credits: [{role: '配信ディレクター', name: '顔面ハプニング'}] },
    { title: 'VS. 山之内厳駿 “全方位型”', sourceUrl: 'https://ganmen1281.github.io/携わったもの,映像/2025/12/09/yamanouchi.html', credits: [{role: 'ビデオディレクター', name: '顔面ハプニング'}, {role: '機材協力', name: 'キタ'}] },
    { title: 'BitSummit Drift 2025', sourceUrl: 'https://ganmen1281.github.io/携わったもの,映像/2025/07/15/bit.html', credits: [{role: '機材協力・配信事業補助', name: '顔面ハプニング'}] },
    { title: 'CDs「DJs for anywhere 001」', sourceUrl: 'https://ganmen1281.github.io/携わったもの,映像/2025/06/20/djs.html', credits: [{role: '配信技術統括・スイッチャー', name: '顔面ハプニング'}, {role: '音声管理', name: 'Annie beatz'}] },
    { title: 'おお阪 in da party', sourceUrl: 'https://ganmen1281.github.io/携わったもの,映像/2025/05/28/ootuku.html', credits: [{role: '配信ディレクター', name: '顔面ハプニング'}] },
    { title: 'BitSummit Drift 2024', sourceUrl: 'https://ganmen1281.github.io/携わったもの,映像/2024/07/18/bit2.html', credits: [{role: '配信事業アシスタント', name: '顔面ハプニング'}] }
  ],
  works: [
    { id: 'after-party02', title: 'After Party02', artist: null, video: 'assets/after-party02.mp4', poster: 'assets/after-party02.jpg', sourceLabel: 'kopi-_5.mp4', published: true, participation: 'メンバーの参加作品（制作名義・時期は確認中）', credits: [], note: '正式な作品情報と、実際の担当・担当者名義を確認しています。' },
    { id: 'inori', title: '祈りニ愛ヲ', artist: '里石ユカ', video: 'assets/inori.mp4', poster: 'assets/inori.jpg', sourceLabel: 'kopi-_1.mp4', published: true, participation: 'メンバーの参加作品（制作名義・時期は確認中）', credits: [{ role: '撮影（一部）・機材協力', name: '担当者名義を確認中', confirmed: false }], note: '上記の担当は候補です。正式なクレジットを確認してから確定します。' },
    { id: 'mawarimichi', title: 'ゆるり、どんどん、まわりみち', artist: null, video: 'assets/mawarimichi.mp4', poster: 'assets/mawarimichi.jpg', sourceLabel: 'kopi-.mp4', published: true, participation: 'メンバーの参加作品（制作時期は確認中）', credits: [{ role: '監督', name: '顔面ハプニング', confirmed: true }], note: '作品の正式表記・公開年など、追加の紹介情報を確認しています。' },
    ...['02', '03', '04', '06', '07'].map(n => ({ id: `work-${n}`, title: `作品名確認中 ${n}`, titleDraft: true, artist: null, video: `assets/work-${n}.mp4`, poster: `assets/work-${n}.jpg`, sourceLabel: `kopi-_${Number(n)}.mp4`, published: true, participation: 'メンバーの参加作品（制作名義・時期は確認中）', credits: [], note: '試作表示です。作品名、公開元、実際の担当・担当者名義を確認しています。' }))
  ],
  // 掲載可能な公開情報のみ追加します。空の場合、news セクションを表示しません。
  // { date: '2026-12-01', title: '実際のお知らせ', url: 'https://...' }
  news: [],
  members: [
    {
      name: '顔面ハプニング',
      role: '映像作家 / ディレクター / カメラマン / スイッチャー / Youtuber / DJ',
      draft: false,
      photo: 'assets/ganmen-happening-img5787.jpg',
      education: 'ビジュアルアーツ専門学校大阪/放送映画学科 卒。',
      profile: '映画的文法を持ち込んだ映像制作を得意としながら、カメラマンやスイッチャーなども担当する。そのほか、自身のYoutubeチャンネルではゲーム解説動画を投稿、DJとしてクラブに立つなど、エンタメを多方面に展開することを目標としている。アニメと特撮が好き。ポケモンはパチリスが好き。',
      selected: [
        { title: '原口沙輔「祈りニ愛ヲ」 MV', role: '撮影監督' },
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share“After Party”」', role: '配信ディレクター' },
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share 02 “After Party”」', role: '配信ディレクター' },
        { title: 'CDs「DJs for anywhere 002」', role: '配信ディレクター' },
        { title: '未踏IT人材発掘・育成事業内プロジェクト「ユーザとモノのネットワーク体験を創作するためのARシステム」', role: '発表用映像ディレクター' },
        { title: 'Youtubeチャンネル「顔面ハプニング【ゲーム解説】」', role: '運営' },
        { title: '短編映画「ゆるり、どんどん、まわりみち」', role: '監督', archive: false }
      ],
      participations: [
        { title: '京都市勧業館みやこめっせ「BitSummit Drift 2026」', role: '配信管理' },
        { title: '里石ユカ公式コンピレーションアルバム「Re:魔法少女【里石ユカコンピXFD】」', role: '技術統括' },
        { title: 'オーディオ・ヴィジュアルイベント「ozm_sis vol.2」', role: '撮影' }
      ],
      awards: ['環境省ぐぐるプロジェクト ラジエーションカレッジ2023 ショート動画部門 優秀賞 受賞']
    },
    {
      name: 'てるチキ',
      role: '動画編集者 / V出し / ソフトウェア管理・開発',
      draft: false,
      photo: 'assets/teruchiki-icon.jpg',
      education: '長岡工業高等専門学校/電子制御工学科 卒、\n群馬大学/情報学部/計算機科学プログラム 在学中。',
      profile: '動画編集者。制作にまつわる様々なソフトウェアを開発・管理している。\n旅行・ゲーム・映画が好き。最近はAIを楽しむ。',
      participations: [
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share 02 “After Party”」', role: 'V出し' },
        { title: 'Youtubeチャンネル「顔面ハプニング【ゲーム解説】」', role: '共同運営・編集' }
      ]
    },
    {
      name: 'Annie beatz(アニービーツ)',
      creditName: 'Annie beatz',
      role: 'トラックメイカー / コンポーザー / 音声',
      draft: false,
      photo: 'assets/annie-beatz-icon-v2.png',
      profile: 'ベースミュージック・ヒップホップ・ハイパーポップなどから影響を受け、ジャンルを横断する楽曲スタイルを得意としながら自身の名義での楽曲制作や、アーティストへの楽曲提供を行っている。\nある日突然現れた顔面ハプニングに銃口を突きつけられ、スタジオ顔面では主に番組や生配信での音声収録等の音周り全般を担当している。\n音楽を作り散らかしながら生きている。',
      selected: [
        { title: 'テレビアニメ"うたごえはミルフィーユ"内ユニット "Parabola"「BRAIN HACK」', role: '作曲', archive: false },
        { title: 'スターダストプロモーション所属"MISS MERCY"「珈琲とバブルガム」', role: '作曲・編曲', archive: false },
        { title: '"MISS MERCY"「珈琲とバブルガム。-dessert edition-」', role: '作曲・編曲', archive: false },
        { title: '"MISS MERCY"「Gravity」', role: '作曲・編曲', archive: false },
        { title: '"MISS MERCY"「Upside Down」', role: '作曲・編曲', archive: false },
        { title: 'KVGGLLV・ZERRY・Annie beatz "VODCA FLOW"', role: '作曲・編曲・ボーカルエディット', archive: false },
        { title: '"WAWA"「TOUSHINDAI (feat.JAYLOX)」', role: '作曲・編曲', archive: false },
        { title: '"HiROU"「Y.S.O.M.G」', role: 'REC・マスタリング・アレンジ担当', archive: false }
      ],
      participations: [
        { title: 'スタジオ顔面「studio ganmen reel」', role: '楽曲', archive: false },
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share“After Party”」', role: '音声' },
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share 02 “After Party”」', role: '音声' }
      ]
    },
    {
      name: 'そーど',
      photo: 'assets/sword-icon.png',
      role: '数学者 / 配信者 / Youtuber',
      draft: false,
      education: '東京理科大学/理学部第一部数学科 在学中。',
      profile: '憧れの人物であるシャンクスに近づくため身体を鍛えており、力仕事を得意としている。\nアシスタントとして制作に関わりながら、自身も活発に様々な活動を続けている総合遊戯者。',
      participations: [
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share“After Party”」', role: '配信補助' },
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share 02 “After Party”」', role: '配信補助' },
        { title: 'CDs「DJs for anywhere 002」', role: '配信補助' }
      ],
      awards: [
        '侍ベースボール -Samurai Base Ball- 世界ランキング2位',
        'どうぶつタワーバトル 連勝記録ランキング 13位',
        'マリオギャラクシーRTA チコカップ 13位'
      ]
    },
    {
      name: 'キタ',
      role: '映像作家 / カメラマン',
      draft: false,
      photo: 'assets/kita-icon.png',
      education: 'ビジュアルアーツ専門学校大阪/放送映画学科 卒。',
      profile: '学生時代から自主映画を撮り続け、映像に対する多角的な知見を持つ。カメラマンとして映像に関わりながら、技術的な側面と演出的な側面の両面を持って映像制作に取り組んでいる。',
      selected: [
        { title: '短編映画「最終的かつ不可逆的な解決」', role: '監督', archive: false }
      ],
      participations: [
        { title: '短編映画「ゆるり、どんどん、まわりみち」', role: '出演', archiveTitle: 'ゆるり、どんどん、まわりみち' },
        { title: 'おお阪 in da party 2', role: '撮影' },
        { title: 'GALLERIA × 原口沙輔「Composite Sample Share“After Party”」', role: '撮影' },
        { title: 'CDs「DJs for anywhere 002」', role: '撮影' },
        { title: '里石ユカ公式コンピレーションアルバム「Re:魔法少女【里石ユカコンピXFD】」', role: '撮影' },
        { title: 'CDs「DJs for anywhere 001」', role: '撮影' },
        { title: 'おお阪 in da party', role: '撮影' }
      ]
    },
    {
      name: 'Asu',
      role: '構成作家',
      draft: false,
      photo: 'assets/asu-icon.png',
      profile: '映像制作の企画を担当している。'
    }
  ]
};

