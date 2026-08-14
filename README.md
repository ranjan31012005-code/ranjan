<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RANJAN K.K — AI / ML Developer &amp; Creative Technologist</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&amp;family=Inter:wght@300..600&amp;family=DM+Serif+Display:ital@0;1&amp;display=swap" rel="stylesheet">
<style>
  :root{
    --black-0:#000000; --black-1:#050505; --black-2:#080808; --black-3:#0d0d0d; --black-4:#111111; --black-5:#151515;
    --green-deep:#062e1f; --green-dark:#064e3b; --green-mid:#065f46; --green:#047857; --green-bright:#10b981; --green-light:#34d399;
    --gold-deep:#8a6a20; --gold-dark:#b8860b; --gold:#c9a227; --gold-bright:#d4af37; --gold-light:#e5c76b; --gold-pale:#f0d98a;
    --ink-70: rgba(240,245,242,0.7); --ink-45: rgba(240,245,242,0.45); --ink-25: rgba(240,245,242,0.25);
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--black-0); color:#f2f5f3;
    font-family:'Inter', sans-serif; font-weight:300;
    overflow-x:hidden;
    cursor:none;
  }
  ::selection{ background:var(--green-mid); color:#000; }
  .eyebrow{
    font-family:'Space Grotesk', sans-serif; text-transform:uppercase; letter-spacing:.28em;
    font-size:.7rem; color:var(--gold-light); font-weight:500;
  }
  h1,h2,h3{ font-family:'Space Grotesk', sans-serif; font-weight:600; letter-spacing:-.01em; }
  .serif{ font-family:'DM Serif Display', serif; font-style:italic; font-weight:400; }
  a{ color:inherit; text-decoration:none; }
  .wrap{ max-width:1180px; margin:0 auto; padding:0 6vw; }

  /* ---------- custom cursor ---------- */
  #cursor-dot, #cursor-ring{
    position:fixed; top:0; left:0; pointer-events:none; z-index:9999;
    border-radius:50%; transform:translate(-50%,-50%);
    transition: background .2s ease, border-color .2s ease, width .2s ease, height .2s ease;
  }
  #cursor-dot{ width:6px; height:6px; background:var(--gold-bright); }
  #cursor-ring{ width:32px; height:32px; border:1px solid var(--green-bright); opacity:.6; }
  #cursor-ring.hover{ width:56px; height:56px; border-color:var(--gold-bright); background:rgba(212,175,55,0.08); }
  @media (hover:none), (pointer:coarse){ #cursor-dot,#cursor-ring{ display:none; } body{ cursor:auto; } }

  /* ---------- background system ---------- */
  #bg{
    position:fixed; inset:0; z-index:-2; background:
      radial-gradient(60% 45% at 50% -5%, rgba(6,78,59,.35), transparent 60%),
      radial-gradient(45% 35% at 90% 20%, rgba(201,162,39,.06), transparent 60%),
      linear-gradient(180deg, #000 0%, #050505 40%, #000 100%);
  }
  #noise{
    position:fixed; inset:0; z-index:-1; opacity:.05; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  .grid-lines{
    position:absolute; inset:0; opacity:.05; pointer-events:none;
    background-image:linear-gradient(rgba(16,185,129,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,.5) 1px, transparent 1px);
    background-size:64px 64px;
  }

  /* ---------- intro ---------- */
  #intro{
    position:fixed; inset:0; background:#000; z-index:10000;
    display:flex; align-items:center; justify-content:center; flex-direction:column;
    transition:opacity .9s ease, visibility .9s ease;
  }
  #intro.hide{ opacity:0; visibility:hidden; }
  .intro-line{ width:0; height:1px; background:linear-gradient(90deg, transparent, var(--gold-bright), transparent); animation: expandLine 1.1s ease forwards .2s; }
  @keyframes expandLine{ to{ width:220px; } }
  .intro-name{
    margin-top:22px; font-family:'Space Grotesk',sans-serif; letter-spacing:.35em; font-size:.95rem;
    opacity:0; color:var(--green-light); animation: fadeUp 1s ease forwards 1s;
  }
  @keyframes fadeUp{ from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:translateY(0);} }
  .skip-intro{
    position:absolute; bottom:28px; right:28px; font-size:.65rem; letter-spacing:.15em; color:var(--ink-45);
    border:1px solid rgba(255,255,255,.12); padding:8px 14px; border-radius:2px; text-transform:uppercase;
  }

  /* ---------- nav ---------- */
  nav{
    position:fixed; top:0; left:0; right:0; z-index:500;
    display:flex; align-items:center; justify-content:space-between;
    padding:22px 6vw; transition:background .4s ease, backdrop-filter .4s ease, border-color .4s ease;
    border-bottom:1px solid transparent;
  }
  nav.scrolled{ background:rgba(5,5,5,.72); backdrop-filter:blur(14px); border-color:rgba(255,255,255,.06); }
  .logo{ font-family:'Space Grotesk',sans-serif; letter-spacing:.1em; font-weight:600; font-size:1rem; }
  .logo span{ color:var(--gold-bright); }
  .nav-links{ display:flex; gap:34px; list-style:none; }
  .nav-links a{
    font-size:.72rem; letter-spacing:.16em; text-transform:uppercase; color:var(--ink-45);
    position:relative; padding-bottom:4px; transition:color .3s;
  }
  .nav-links a::after{ content:''; position:absolute; left:0; bottom:0; width:0; height:1px; background:var(--gold-bright); transition:width .35s; }
  .nav-links a:hover, .nav-links a.active{ color:#fff; }
  .nav-links a.active::after{ width:100%; background:var(--green-bright); }
  .nav-toggle{ display:none; flex-direction:column; gap:5px; cursor:pointer; }
  .nav-toggle span{ width:22px; height:1px; background:#fff; }
  @media (max-width: 880px){
    .nav-links{ position:fixed; top:0; right:0; height:100vh; width:72vw; background:#050505; flex-direction:column;
      justify-content:center; align-items:flex-start; padding:0 40px; gap:26px; transform:translateX(100%); transition:transform .5s ease; border-left:1px solid rgba(255,255,255,.08); }
    .nav-links.open{ transform:translateX(0); }
    .nav-toggle{ display:flex; z-index:600; }
  }

  /* ---------- hero ---------- */
  .hero{
    min-height:100svh; position:relative; display:flex; flex-direction:column; justify-content:center;
    padding-top:110px;
  }
  .hero-photo{
    position:absolute; right:0; top:0; bottom:0; width:44%;
    background:url('ranjan-hero.png') center 22% / cover no-repeat;
    -webkit-mask-image:linear-gradient(90deg, transparent, #000 22%, #000 78%, transparent);
    mask-image:linear-gradient(90deg, transparent, #000 22%, #000 78%, transparent);
    opacity:.55; filter:saturate(.85) contrast(1.05);
  }
  .hero-photo::after{
    content:''; position:absolute; inset:0;
    background:linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.15) 40%, rgba(0,0,0,.75));
  }
  @media (max-width: 880px){ .hero-photo{ width:100%; opacity:.28; } }
  .hero-inner{ position:relative; z-index:2; max-width:760px; }
  .hero .eyebrow{ opacity:0; animation:fadeUp .8s ease forwards .2s; }
  .hero h1{
    font-size:clamp(2.6rem, 6.5vw, 5.4rem); line-height:1.02; margin-top:22px; text-transform:uppercase;
    opacity:0; animation:fadeUp 1s ease forwards .4s;
  }
  .hero h1 .accent{ color:var(--green-bright); }
  .hero-sub{
    margin-top:20px; font-family:'Space Grotesk',sans-serif; font-size:.78rem; letter-spacing:.18em; color:var(--gold-light);
    text-transform:uppercase; opacity:0; animation:fadeUp 1s ease forwards .6s;
  }
  .hero-statement{
    margin-top:26px; max-width:520px; font-size:1.02rem; line-height:1.7; color:var(--ink-70);
    opacity:0; animation:fadeUp 1s ease forwards .8s;
  }
  .hero-ctas{ margin-top:42px; display:flex; gap:18px; flex-wrap:wrap; opacity:0; animation:fadeUp 1s ease forwards 1s; }
  .btn{
    font-family:'Space Grotesk',sans-serif; font-size:.72rem; letter-spacing:.15em; text-transform:uppercase;
    padding:15px 30px; border-radius:2px; position:relative; overflow:hidden; transition:transform .35s ease, box-shadow .35s ease;
    display:inline-block;
  }
  .btn-primary{ background:linear-gradient(120deg, var(--green-mid), var(--green-dark)); border:1px solid var(--green-bright); color:#eafff6; }
  .btn-primary:hover{ transform:translateY(-2px); box-shadow:0 10px 30px -10px rgba(16,185,129,.5); }
  .btn-ghost{ border:1px solid var(--gold-dark); color:var(--gold-light); }
  .btn-ghost:hover{ transform:translateY(-2px); background:rgba(212,175,55,.08); box-shadow:0 10px 30px -12px rgba(212,175,55,.35); }
  .scroll-cue{ position:absolute; bottom:34px; left:6vw; display:flex; align-items:center; gap:10px; font-size:.65rem; letter-spacing:.2em; color:var(--ink-45); text-transform:uppercase; }
  .scroll-cue .line{ width:1px; height:34px; background:linear-gradient(180deg, var(--green-bright), transparent); animation:pulseLine 2s ease-in-out infinite; }
  @keyframes pulseLine{ 0%,100%{opacity:.3;} 50%{opacity:1;} }

  section{ position:relative; padding:130px 0; }
  .section-head{ display:flex; align-items:baseline; gap:18px; margin-bottom:56px; }
  .section-num{ font-family:'Space Grotesk',sans-serif; font-size:.75rem; color:var(--gold-dark); }
  .section-title{ font-size:clamp(1.8rem,3.4vw,2.6rem); text-transform:uppercase; }
  .divider{ height:1px; background:linear-gradient(90deg, rgba(16,185,129,.4), transparent); margin:0 0 56px; }

  .reveal{ opacity:0; transform:translateY(26px); transition:opacity .9s ease, transform .9s ease; }
  .reveal.in{ opacity:1; transform:translateY(0); }

  /* ---------- about ---------- */
  .about-grid{ display:grid; grid-template-columns:1.1fr .9fr; gap:70px; align-items:start; }
  @media (max-width:880px){ .about-grid{ grid-template-columns:1fr; } }
  .manifesto{ font-size:1.15rem; line-height:1.85; color:var(--ink-70); }
  .quote-block{
    margin-top:40px; padding:28px 0 28px 26px; border-left:1px solid var(--gold-dark);
  }
  .quote-block p{ font-size:1.3rem; line-height:1.55; color:#f6efd9; }
  .about-tags{ display:flex; flex-wrap:wrap; gap:10px; margin-top:36px; }
  .tag{
    font-family:'Space Grotesk',sans-serif; font-size:.68rem; letter-spacing:.1em; text-transform:uppercase;
    padding:8px 14px; border:1px solid rgba(16,185,129,.35); border-radius:20px; color:var(--green-light);
  }
  .profile-card{
    border:1px solid rgba(255,255,255,.08); background:linear-gradient(160deg, rgba(6,78,59,.12), rgba(0,0,0,.2));
    padding:34px; border-radius:4px;
  }
  .profile-card h3{ font-size:1.4rem; }
  .profile-card .role{ color:var(--gold-light); font-family:'Space Grotesk',sans-serif; font-size:.78rem; letter-spacing:.1em; margin-top:6px; text-transform:uppercase; }
  .profile-card .edu{ margin-top:18px; font-size:.85rem; color:var(--ink-45); line-height:1.6; }
  .stat-row{ display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:30px; }
  .stat{ border-top:1px solid rgba(255,255,255,.08); padding-top:12px; }
  .stat b{ display:block; font-family:'Space Grotesk',sans-serif; font-size:1.5rem; color:var(--green-bright); }
  .stat span{ font-size:.68rem; letter-spacing:.08em; text-transform:uppercase; color:var(--ink-45); }

  /* ---------- skills ---------- */
  .skills-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:48px; }
  @media (max-width:760px){ .skills-grid{ grid-template-columns:1fr; } }
  .skill-cat h4{
    font-family:'Space Grotesk',sans-serif; font-size:.8rem; letter-spacing:.16em; color:var(--gold-light); text-transform:uppercase;
    margin-bottom:20px; padding-bottom:12px; border-bottom:1px solid rgba(201,162,39,.25);
  }
  .node-list{ display:flex; flex-wrap:wrap; gap:12px; }
  .node{
    display:flex; align-items:center; gap:8px; font-size:.82rem; padding:9px 15px 9px 10px;
    border:1px solid rgba(16,185,129,.25); border-radius:20px; color:var(--ink-70); transition:all .3s ease;
  }
  .node i{ width:6px; height:6px; border-radius:50%; background:var(--green-bright); display:inline-block; box-shadow:0 0 8px var(--green-bright); }
  .node:hover{ border-color:var(--gold-bright); color:#fff; transform:translateY(-2px); }
  .node:hover i{ background:var(--gold-bright); box-shadow:0 0 8px var(--gold-bright); }

  /* ---------- projects ---------- */
  .project{
    display:grid; grid-template-columns:.5fr 1.5fr; gap:50px; padding:52px 0; border-top:1px solid rgba(255,255,255,.08);
    align-items:center; cursor:pointer; transition:background .4s;
  }
  .project:last-child{ border-bottom:1px solid rgba(255,255,255,.08); }
  .project:hover{ background:rgba(6,78,59,.06); }
  @media (max-width:880px){ .project{ grid-template-columns:1fr; gap:20px; } }
  .project-num{ font-family:'Space Grotesk',sans-serif; font-size:3.4rem; color:transparent; -webkit-text-stroke:1px rgba(212,175,55,.5); transition:color .4s, -webkit-text-stroke .4s; }
  .project:hover .project-num{ color:rgba(212,175,55,.15); }
  .project-name{ font-size:clamp(1.6rem,3vw,2.3rem); text-transform:uppercase; transition:color .3s; }
  .project:hover .project-name{ color:var(--green-bright); }
  .project-tagline{ color:var(--gold-light); font-family:'Space Grotesk',sans-serif; font-size:.72rem; letter-spacing:.14em; text-transform:uppercase; margin-top:8px; }
  .project-desc{ margin-top:14px; color:var(--ink-45); max-width:640px; line-height:1.7; font-size:.92rem; }
  .project-tags{ display:flex; gap:8px; flex-wrap:wrap; margin-top:16px; }
  .project-tags span{ font-size:.65rem; letter-spacing:.08em; text-transform:uppercase; padding:5px 10px; border:1px solid rgba(255,255,255,.12); border-radius:14px; color:var(--ink-45); }
  .view-link{ margin-top:18px; display:inline-flex; align-items:center; gap:8px; font-family:'Space Grotesk',sans-serif; font-size:.7rem; letter-spacing:.12em; text-transform:uppercase; color:var(--green-light); }
  .view-link .arrow{ transition:transform .3s; }
  .project:hover .view-link .arrow{ transform:translateX(6px); }
  .project-note{ margin-top:34px; padding:22px 26px; border:1px dashed rgba(255,255,255,.15); border-radius:4px; color:var(--ink-45); font-size:.85rem; }

  /* ---------- journey ---------- */
  .timeline{ position:relative; padding-left:40px; }
  .timeline::before{ content:''; position:absolute; left:6px; top:6px; bottom:6px; width:1px; background:linear-gradient(180deg, var(--green-bright), rgba(16,185,129,.05)); }
  .t-item{ position:relative; margin-bottom:52px; }
  .t-item::before{ content:''; position:absolute; left:-40px; top:4px; width:11px; height:11px; border-radius:50%; background:var(--black-0); border:2px solid var(--gold-bright); box-shadow:0 0 12px rgba(212,175,55,.5); }
  .t-year{ font-family:'Space Grotesk',sans-serif; color:var(--gold-light); font-size:.9rem; letter-spacing:.08em; }
  .t-title{ font-size:1.15rem; margin-top:6px; }
  .t-desc{ margin-top:6px; color:var(--ink-45); font-size:.88rem; max-width:520px; line-height:1.6; }
  .t-item.future .t-title{ color:var(--green-light); }
  .t-item.future::before{ border-color:var(--green-bright); box-shadow:0 0 12px rgba(16,185,129,.5); animation:pulseDot 2s infinite; }
  @keyframes pulseDot{ 0%,100%{ transform:scale(1);} 50%{ transform:scale(1.3);} }

  /* ---------- interests ---------- */
  .orbit-wrap{ position:relative; min-height:520px; display:flex; align-items:center; justify-content:center; }
  .orbit-center{
    font-family:'Space Grotesk',sans-serif; text-align:center; font-size:.72rem; letter-spacing:.18em; text-transform:uppercase;
    color:var(--gold-light); border:1px solid rgba(212,175,55,.3); border-radius:50%; width:120px; height:120px;
    display:flex; align-items:center; justify-content:center; z-index:2; background:radial-gradient(circle, rgba(6,78,59,.4), transparent 70%);
  }
  .ring{ position:absolute; border:1px solid rgba(16,185,129,.14); border-radius:50%; }
  .node-pt{
    position:absolute; transform:translate(-50%,-50%); font-size:.72rem; letter-spacing:.06em; text-transform:uppercase;
    color:var(--ink-45); padding:8px 14px; border:1px solid rgba(255,255,255,.1); border-radius:20px; background:rgba(5,5,5,.7);
    white-space:nowrap; transition:all .35s ease; cursor:default;
  }
  .node-pt:hover{ color:#fff; border-color:var(--gold-bright); background:rgba(212,175,55,.08); transform:translate(-50%,-50%) scale(1.08); }
  @media (max-width:760px){ .orbit-wrap{ display:none; } .interests-fallback{ display:flex !important; } }
  .interests-fallback{ display:none; flex-wrap:wrap; gap:12px; }

  /* ---------- mindset ---------- */
  .mindset-list{ display:flex; flex-wrap:wrap; gap:26px 44px; align-items:baseline; }
  .mindset-word{
    font-family:'Space Grotesk',sans-serif; font-size:clamp(1.6rem,4.5vw,3rem); text-transform:uppercase; color:rgba(255,255,255,.12);
    transition:color .5s ease, text-shadow .5s ease;
  }
  .mindset-word.in{ color:#fff; }
  .mindset-word.in.gold{ color:var(--gold-bright); }
  .mindset-word.in.green{ color:var(--green-bright); }

  /* ---------- AI terminal ---------- */
  .terminal{
    border:1px solid rgba(16,185,129,.25); border-radius:6px; background:linear-gradient(160deg, rgba(5,10,8,.9), rgba(0,0,0,.9));
    padding:0; overflow:hidden; box-shadow:0 30px 80px -30px rgba(6,78,59,.5);
  }
  .term-bar{ display:flex; align-items:center; gap:8px; padding:14px 18px; border-bottom:1px solid rgba(255,255,255,.06); }
  .term-bar span{ width:9px; height:9px; border-radius:50%; background:rgba(255,255,255,.15); }
  .term-bar .label{ margin-left:10px; font-size:.68rem; letter-spacing:.1em; color:var(--ink-45); text-transform:uppercase; }
  .term-body{ padding:26px; min-height:220px; font-family:'Space Grotesk',sans-serif; font-size:.9rem; line-height:1.9; }
  .term-line{ margin-bottom:6px; }
  .term-line .prompt-user{ color:var(--gold-light); }
  .term-line .prompt-ai{ color:var(--green-light); }
  .term-suggest{ display:flex; flex-wrap:wrap; gap:10px; padding:0 26px 24px; }
  .term-suggest button{
    background:transparent; border:1px solid rgba(255,255,255,.12); color:var(--ink-70); padding:9px 14px; border-radius:18px;
    font-size:.72rem; font-family:'Inter',sans-serif; cursor:pointer; transition:all .3s;
  }
  .term-suggest button:hover{ border-color:var(--gold-bright); color:#fff; }
  .term-input-row{ display:flex; gap:10px; padding:16px 26px; border-top:1px solid rgba(255,255,255,.06); }
  .term-input-row input{
    flex:1; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.1); border-radius:4px; color:#fff;
    padding:10px 14px; font-family:'Inter',sans-serif; font-size:.85rem;
  }
  .term-input-row input:focus{ outline:none; border-color:var(--green-bright); }
  .term-input-row button{ background:var(--green-mid); border:1px solid var(--green-bright); color:#eafff6; padding:0 22px; border-radius:4px; font-family:'Space Grotesk',sans-serif; font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; cursor:pointer; }
  .term-note{ margin-top:14px; font-size:.72rem; color:var(--ink-25); }
  .cursor-blink{ display:inline-block; width:7px; height:14px; background:var(--green-bright); animation:blink 1s step-end infinite; vertical-align:middle; margin-left:2px; }
  @keyframes blink{ 50%{ opacity:0; } }

  /* ---------- contact ---------- */
  .contact-title{ font-size:clamp(2.2rem,6vw,4.2rem); text-transform:uppercase; line-height:1.05; }
  .contact-sub{ margin-top:20px; color:var(--ink-45); max-width:480px; }
  .contact-btns{ margin-top:46px; display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
  @media (max-width:760px){ .contact-btns{ grid-template-columns:1fr 1fr; } }
  .c-btn{
    border:1px solid rgba(255,255,255,.1); padding:18px 16px; text-align:center; border-radius:4px;
    font-family:'Space Grotesk',sans-serif; font-size:.7rem; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-70);
    transition:all .35s;
  }
  .c-btn:hover{ border-color:var(--gold-bright); color:#fff; background:rgba(212,175,55,.06); transform:translateY(-3px); }
  .contact-details{ margin-top:40px; display:flex; flex-wrap:wrap; gap:28px; font-size:.82rem; color:var(--ink-45); }
  .contact-details a:hover{ color:var(--green-light); }

  footer{ padding:60px 0 40px; border-top:1px solid rgba(255,255,255,.06); }
  .footer-row{ display:flex; justify-content:space-between; flex-wrap:wrap; gap:20px; align-items:center; }
  .footer-tag{ color:var(--ink-45); font-size:.72rem; letter-spacing:.14em; text-transform:uppercase; }
  .footer-social{ display:flex; gap:20px; font-size:.75rem; color:var(--ink-45); }
  .footer-social a:hover{ color:var(--gold-light); }
  .footer-copy{ margin-top:20px; font-size:.7rem; color:var(--ink-25); }

  @media (prefers-reduced-motion: reduce){
    *{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
  }
  a:focus-visible, button:focus-visible, input:focus-visible{ outline:2px solid var(--gold-bright); outline-offset:3px; }
</style>
</head>
<body>

<div id="bg"></div>
<div id="noise"></div>
<div id="cursor-dot" style="left: 1024px; top: 538px;"></div>
<div id="cursor-ring" style="left: 1024px; top: 538px;"></div>

<div id="intro" class="hide">
  <div class="intro-line"></div>
  <div class="intro-name">RANJAN&nbsp;&nbsp;K.K</div>
  <button class="skip-intro" id="skipIntro">Skip</button>
</div>

<nav id="nav">
  <div class="logo">RANJAN<span>.KK</span></div>
  <ul class="nav-links" id="navLinks">
    <li><a href="#home" class="active">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#journey">Journey</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="nav-toggle" id="navToggle"><span></span><span></span><span></span></div>
</nav>

<main>

  <!-- HERO -->
  <section class="hero" id="home" style="padding-top:0;">
    <div class="hero-photo" aria-hidden="true"></div>
    <div class="grid-lines"></div>
    <div class="wrap hero-inner">
      <div class="eyebrow">RANJAN K.K</div>
      <h1>BUILDING THE <span class="accent">FUTURE</span><br>WITH INTELLIGENCE.</h1>
      <div class="hero-sub">AI / ML DEVELOPER &nbsp;•&nbsp; CREATIVE TECHNOLOGIST &nbsp;•&nbsp; FUTURE BUILDER</div>
      <p class="hero-statement">I explore the intersection of artificial intelligence, technology, creativity and human experience — building systems that think, and interfaces that feel alive.</p>
      <div class="hero-ctas">
        <a href="#projects" class="btn btn-primary">Explore My Work</a>
        <a href="#about" class="btn btn-ghost">Enter My World</a>
      </div>
    </div>
    <div class="scroll-cue"><div class="line"></div> Scroll</div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="wrap">
      <div class="section-head reveal"><span class="section-num">01</span><h2 class="section-title">The Human Behind the Code</h2></div>
      <div class="about-grid">
        <div class="reveal">
          <p class="manifesto">I'm not chasing technology for its own sake — I'm chasing what it lets me build, understand and imagine next. My world sits at the meeting point of AI, machine learning, robotics and generative systems, but it's shaped just as much by history, space, music and a stubborn curiosity about how things actually work.</p>
          <div class="quote-block">
            <p class="serif">"I don't just want to use technology. I want to understand it, build it, and shape what comes next."</p>
          </div>
          <div class="about-tags">
            <span class="tag">AI &amp; ML</span><span class="tag">Robotics</span><span class="tag">Generative AI</span>
            <span class="tag">Creative Technology</span><span class="tag">Space</span><span class="tag">History</span>
          </div>
        </div>
        <div class="reveal profile-card">
          <h3>Ranjan K.K</h3>
          <div class="role">AI / ML Developer</div>
          <div class="edu">B.Sc. Computer Science — Artificial Intelligence &amp; Machine Learning<br>VISTAS, Chennai &nbsp;·&nbsp; 2023 – 2026</div>
          <div class="stat-row">
            <div class="stat"><b>3</b><span>Core Projects</span></div>
            <div class="stat"><b>7+</b><span>Certifications</span></div>
            <div class="stat"><b>3</b><span>Languages</span></div>
            <div class="stat"><b>2026</b><span>Graduating</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills">
    <div class="wrap">
      <div class="section-head reveal"><span class="section-num">02</span><h2 class="section-title">Systems &amp; Skills</h2></div>
      <div class="skills-grid">
        <div class="skill-cat reveal">
          <h4>AI &amp; Machine Learning</h4>
          <div class="node-list">
            <span class="node"><i></i>Machine Learning</span><span class="node"><i></i>Generative AI</span>
            <span class="node"><i></i>Multimodal AI</span><span class="node"><i></i>Prompt Engineering</span>
            <span class="node"><i></i>Deep Learning Fundamentals</span>
          </div>
        </div>
        <div class="skill-cat reveal">
          <h4>Programming</h4>
          <div class="node-list">
            <span class="node"><i></i>Python</span><span class="node"><i></i>SQL</span>
            <span class="node"><i></i>Data Analysis</span>
          </div>
        </div>
        <div class="skill-cat reveal">
          <h4>Cloud &amp; Platforms</h4>
          <div class="node-list">
            <span class="node"><i></i>Google Cloud — Gemini Multimodality</span>
            <span class="node"><i></i>Vertex AI Prompt Design</span>
          </div>
        </div>
        <div class="skill-cat reveal">
          <h4>Creative Technology</h4>
          <div class="node-list">
            <span class="node"><i></i>AI Interfaces</span><span class="node"><i></i>Robotics Concepts</span>
            <span class="node"><i></i>Cultural &amp; Language AI</span><span class="node"><i></i>Interactive Experiences</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects">
    <div class="wrap">
      <div class="section-head reveal"><span class="section-num">03</span><h2 class="section-title">Featured Projects</h2></div>

      <div class="project reveal" tabindex="0">
        <div class="project-num">01</div>
        <div>
          <div class="project-name">EMORI</div>
          <div class="project-tagline">Emotionally Intelligent AI Robot Companion</div>
          <p class="project-desc">A robotic companion concept built around emotional interaction — combining facial emotion recognition, voice interaction, personalization and memory into a system designed to feel less like a tool and more like a presence.</p>
          <div class="project-tags"><span>Computer Vision</span><span>Voice AI</span><span>Personalization</span><span>Robotics</span></div>
          <div class="view-link">View Concept <span class="arrow">→</span></div>
        </div>
      </div>

      <div class="project reveal" tabindex="0">
        <div class="project-num">02</div>
        <div>
          <div class="project-name">AI Cultural &amp; Slang Translator</div>
          <div class="project-tagline">Language, Culture &amp; Context Translation MVP</div>
          <p class="project-desc">A translation MVP that goes beyond literal word-swapping — aiming to carry cultural nuance, slang and tone across languages, so meaning survives the translation, not just the words.</p>
          <div class="project-tags"><span>NLP</span><span>Generative AI</span><span>Cultural Context</span></div>
          <div class="view-link">View Concept <span class="arrow">→</span></div>
        </div>
      </div>

      <div class="project reveal" tabindex="0">
        <div class="project-num">03</div>
        <div>
          <div class="project-name">AI Smart Bus Booking &amp; Arrival Prediction</div>
          <div class="project-tagline">Predictive Transit System</div>
          <p class="project-desc">A system concept for booking and predicting bus arrivals, applying data analysis and predictive modeling to a real, everyday commuting problem.</p>
          <div class="project-tags"><span>Data Analysis</span><span>Prediction</span><span>Applied ML</span></div>
          <div class="view-link">View Concept <span class="arrow">→</span></div>
        </div>
      </div>

      <p class="project-note reveal">More builds — including R.O.O.K, a multimodal personal AI assistant — are in active development and will land here as they're ready.</p>
    </div>
  </section>

  <!-- JOURNEY -->
  <section id="journey">
    <div class="wrap">
      <div class="section-head reveal"><span class="section-num">04</span><h2 class="section-title">The Journey</h2></div>
      <div class="timeline reveal">
        <div class="t-item">
          <div class="t-year">2020 – 2021</div>
          <div class="t-title">School Milestones</div>
          <div class="t-desc">10th grade, Leo Matriculation Higher Secondary School, Chennai — early recognition in Spell Bee at regional and state level.</div>
        </div>
        <div class="t-item">
          <div class="t-year">2022 – 2023</div>
          <div class="t-title">12th Grade Completed</div>
          <div class="t-desc">Leo Matriculation Higher Secondary School, Chennai.</div>
        </div>
        <div class="t-item">
          <div class="t-year">2023 – 2026</div>
          <div class="t-title">B.Sc. Computer Science — AI &amp; ML</div>
          <div class="t-desc">VISTAS, Chennai. Built EMORI, the AI Cultural &amp; Slang Translator, and the Smart Bus Booking system alongside coursework in ML, generative AI and prompt engineering.</div>
        </div>
        <div class="t-item future">
          <div class="t-year">2026 → FUTURE</div>
          <div class="t-title">Entering the AI &amp; Technology Industry</div>
          <div class="t-desc">Graduating and stepping into a professional AI/ML career — open to roles in AI, data science and applied machine learning.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- INTERESTS -->
  <section id="interests">
    <div class="wrap">
      <div class="section-head reveal"><span class="section-num">05</span><h2 class="section-title">Beyond Technology</h2></div>
      <div class="orbit-wrap reveal" id="orbit">
        <div class="orbit-center">RANJAN</div>
        <div class="ring" style="width:260px;height:260px;"></div>
        <div class="ring" style="width:400px;height:400px;"></div>
        <div class="ring" style="width:520px;height:520px;"></div>
      <div class="node-pt" style="left: 73.4923%; top: 58.5505%;">Music</div><div class="node-pt" style="left: 45.6588%; top: 74.6202%;">Movies</div><div class="node-pt" style="left: 26.5077%; top: 41.4495%;">History</div><div class="node-pt" style="left: 54.3412%; top: 25.3798%;">Space</div><div class="node-pt" style="left: 69.2308%; top: 83.3087%;">Quantum Physics</div><div class="node-pt" style="left: 16.6913%; top: 69.2308%;">Time Travel</div><div class="node-pt" style="left: 30.7692%; top: 16.6913%;">Drawing</div><div class="node-pt" style="left: 83.3087%; top: 30.7692%;">Photography</div><div class="node-pt" style="left: 99.2404%; top: 58.6824%;">Travel</div><div class="node-pt" style="left: 25%; top: 93.3013%;">Chess</div><div class="node-pt" style="left: 11.6978%; top: 17.8606%;">Cricket</div></div>
      <div class="interests-fallback reveal">
        <span class="node"><i></i>Music</span><span class="node"><i></i>Movies</span><span class="node"><i></i>History</span>
        <span class="node"><i></i>Space</span><span class="node"><i></i>Quantum Physics</span><span class="node"><i></i>Time Travel Concepts</span>
        <span class="node"><i></i>Drawing</span><span class="node"><i></i>Photography</span><span class="node"><i></i>Travel</span>
        <span class="node"><i></i>Chess</span><span class="node"><i></i>Cricket</span>
      </div>
    </div>
  </section>

  <!-- MINDSET -->
  <section id="mindset">
    <div class="wrap">
      <div class="section-head reveal"><span class="section-num">06</span><h2 class="section-title">The Mindset</h2></div>
      <div class="mindset-list">
        <span class="mindset-word reveal-word gold">CURIOUS</span>
        <span class="mindset-word reveal-word">CREATIVE</span>
        <span class="mindset-word reveal-word green">ANALYTICAL</span>
        <span class="mindset-word reveal-word">EXPLORATIVE</span>
        <span class="mindset-word reveal-word gold">BUILDING</span>
        <span class="mindset-word reveal-word">LEARNING</span>
        <span class="mindset-word reveal-word green">IMAGINING</span>
      </div>
    </div>
  </section>

  <!-- AI TERMINAL -->
  <section id="ai-terminal">
    <div class="wrap">
      <div class="section-head reveal"><span class="section-num">07</span><h2 class="section-title">Talk to Ranjan</h2></div>
      <div class="reveal terminal">
        <div class="term-bar"><span></span><span></span><span></span><span class="label">ranjan.ai — simulated terminal</span></div>
        <div class="term-body" id="termBody">
          <div class="term-line"><span class="prompt-user">&gt; </span>Who is Ranjan?</div>
          <div class="term-line"><span class="prompt-ai">AI: </span>Ranjan is an AI/ML developer and creative technologist exploring the intersection of intelligence, technology and human experience.<span class="cursor-blink"></span></div>
        </div>
        <div class="term-suggest">
          <button data-q="Show me Ranjan's projects">Show me Ranjan's projects</button>
          <button data-q="What technologies does he use?">What technologies does he use?</button>
          <button data-q="Tell me about EMORI">Tell me about EMORI</button>
          <button data-q="Tell me about the Cultural Translator">Tell me about the Cultural Translator</button>
        </div>
        <div class="term-input-row">
          <input type="text" id="termInput" placeholder="Ask something…" aria-label="Ask the terminal">
          <button id="termSend">Send</button>
        </div>
      </div>
      <p class="term-note reveal">This is a frontend simulation with scripted responses — no live AI backend is connected yet.</p>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="wrap">
      <div class="reveal">
        <div class="eyebrow">Get in touch</div>
        <h2 class="contact-title">LET'S BUILD<br>WHAT'S NEXT.</h2>
        <p class="contact-sub">Have an idea, project, collaboration or opportunity? I'm always open to a conversation.</p>
        <div class="contact-btns">
          <a class="c-btn" href="mailto:ranjan31012005@gmail.com">Email Me</a>
          <a class="c-btn" href="https://www.linkedin.com/in/ranjan-k-k-35009232a" target="_blank" rel="noopener">LinkedIn</a>
          <a class="c-btn" href="https://github.com/ranjan31012005-code" target="_blank" rel="noopener">GitHub</a>
          <a class="c-btn" href="#" id="resumeBtn">Resume</a>
        </div>
        <div class="contact-details">
          <a href="tel:+919976790977">+91 9976790977</a>
          <a href="mailto:ranjan31012005@gmail.com">ranjan31012005@gmail.com</a>
          <a href="https://instagram.com/nkr310105" target="_blank" rel="noopener">@nkr310105</a>
          <span>Chennai, Tamil Nadu, India</span>
        </div>
      </div>
    </div>
  </section>

</main>

<footer>
  <div class="wrap">
    <div class="footer-row">
      <div>
        <div class="logo">RANJAN<span>.KK</span></div>
        <div class="footer-tag" style="margin-top:6px;">AI / ML &nbsp;•&nbsp; TECHNOLOGY &nbsp;•&nbsp; CREATIVITY</div>
      </div>
      <div class="footer-social">
        <a href="mailto:ranjan31012005@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/ranjan-k-k-35009232a" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/ranjan31012005-code" target="_blank" rel="noopener">GitHub</a>
        <a href="https://instagram.com/nkr310105" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
    <div class="footer-copy">© 2026 Ranjan K.K — All rights reserved.</div>
  </div>
</footer>

<script>
// ---------- intro ----------
const intro = document.getElementById('intro');
function closeIntro(){ intro.classList.add('hide'); }
setTimeout(closeIntro, 2600);
document.getElementById('skipIntro').addEventListener('click', closeIntro);

// ---------- custom cursor ----------
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0, rx=0, ry=0;
window.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
function loop(){ rx += (mx-rx)*0.18; ry += (my-ry)*0.18; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); }
loop();
document.querySelectorAll('a, button, .project, .node-pt, .node').forEach(el=>{
  el.addEventListener('mouseenter', ()=>ring.classList.add('hover'));
  el.addEventListener('mouseleave', ()=>ring.classList.remove('hover'));
});

// ---------- nav ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{ nav.classList.toggle('scrolled', window.scrollY > 40); });
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', ()=> navLinks.classList.remove('open'));
});

// active section highlight
const sections = document.querySelectorAll('main section, .hero');
const navA = document.querySelectorAll('.nav-links a');
const secObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      navA.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === '#'+id));
    }
  });
}, { threshold:0.45 });
sections.forEach(s=> s.id && secObserver.observe(s));

// ---------- reveal on scroll ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
}, { threshold:0.15 });
revealEls.forEach(el=> revealObserver.observe(el));

// mindset word reveal
const words = document.querySelectorAll('.reveal-word');
const wordObserver = new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=> e.target.classList.add('in'), [...words].indexOf(e.target)*90);
      wordObserver.unobserve(e.target);
    }
  });
}, { threshold:0.4 });
words.forEach(w=> wordObserver.observe(w));

// ---------- orbit interests ----------
const orbit = document.getElementById('orbit');
const interests = [
  {t:'Music', r:130, a:20}, {t:'Movies', r:130, a:100}, {t:'History', r:130, a:200}, {t:'Space', r:130, a:280},
  {t:'Quantum Physics', r:200, a:60}, {t:'Time Travel', r:200, a:150}, {t:'Drawing', r:200, a:240}, {t:'Photography', r:200, a:330},
  {t:'Travel', r:260, a:10}, {t:'Chess', r:260, a:120}, {t:'Cricket', r:260, a:220}
];
interests.forEach(it=>{
  const el = document.createElement('div');
  el.className='node-pt';
  el.textContent = it.t;
  const rad = it.a * Math.PI/180;
  el.style.left = (50 + (it.r/5.2)*Math.cos(rad)) + '%';
  el.style.top = (50 + (it.r/5.2)*Math.sin(rad)) + '%';
  orbit.appendChild(el);
});

// ---------- AI terminal simulation ----------
const termBody = document.getElementById('termBody');
const termInput = document.getElementById('termInput');
const termSend = document.getElementById('termSend');

const responses = {
  "show me ranjan's projects": "His core builds are EMORI (an emotionally intelligent AI robot companion), an AI Cultural &amp; Slang Translator, and a Smart Bus Booking &amp; Arrival Prediction system. A multimodal assistant, R.O.O.K, is in progress.",
  "what technologies does he use?": "Mostly Python, SQL and applied ML — with hands-on work in generative AI, multimodal AI, prompt engineering, and Google Cloud's Gemini and Vertex AI tools.",
  "tell me about emori": "EMORI is a concept for an emotionally intelligent robot companion — facial emotion recognition, voice interaction, personalization and memory, designed to feel present rather than mechanical.",
  "tell me about the cultural translator": "It's an MVP that translates language while trying to preserve slang, tone and cultural context — not just the literal words.",
  "tell me about r.o.o.k": "R.O.O.K is an early-stage concept for a multimodal personal AI assistant — combining conversation, vision, speech, memory and personalization into one interface."
};

function addLine(role, text){
  const div = document.createElement('div');
  div.className = 'term-line';
  div.innerHTML = role === 'user'
    ? `<span class="prompt-user">&gt; </span>${text}`
    : `<span class="prompt-ai">AI: </span>${text}`;
  termBody.appendChild(div);
  termBody.scrollTop = termBody.scrollHeight;
}

function respondTo(q){
  addLine('user', q);
  const key = q.trim().toLowerCase();
  const answer = responses[key] || "That's outside this simulation's scripted responses right now — try one of the suggested prompts, or reach out directly via the contact section below.";
  setTimeout(()=> addLine('ai', answer), 350);
}

document.querySelectorAll('.term-suggest button').forEach(btn=>{
  btn.addEventListener('click', ()=> respondTo(btn.dataset.q));
});
termSend.addEventListener('click', ()=>{
  if(termInput.value.trim()){ respondTo(termInput.value.trim()); termInput.value=''; }
});
termInput.addEventListener('keydown', e=>{
  if(e.key === 'Enter' && termInput.value.trim()){ respondTo(termInput.value.trim()); termInput.value=''; }
});

// resume button placeholder
document.getElementById('resumeBtn').addEventListener('click', (e)=>{
  e.preventDefault();
  alert('Add a link to your hosted resume PDF here, or wire this button to download it directly.');
});
</script>

</body></html>
