(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ============ INTRO CLEANUP ============ */
  const intro = document.getElementById('intro');
  if (intro) {
    const removeIntro = () => intro.remove();
    if (reduceMotion) {
      removeIntro();
    } else {
      intro.addEventListener('animationend', removeIntro, { once: true });
      setTimeout(removeIntro, 3600); // safety fallback
    }
  }

  /* ============ NAV: scroll state + active link ============ */
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = [...document.querySelectorAll('main .section, .hero')];

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);

    let current = sections[0];
    const y = window.scrollY + window.innerHeight * 0.35;
    for (const sec of sections) {
      if (sec.offsetTop <= y) current = sec;
    }
    const id = current.id;
    navLinks.forEach(a => {
      a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
    });
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============ MOBILE NAV ============ */
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  navToggle.addEventListener('click', () => {
    const open = navMobile.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navMobile.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );

  /* ============ CUSTOM CURSOR ============ */
  if (!isTouch) {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let rx = 0, ry = 0, mx = 0, my = 0;

    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    });

    const animateRing = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document.querySelectorAll('a, button, .project-row, input').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-active'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
    });
  }

  /* ============ SCROLL REVEAL ============ */
  const revealEls = document.querySelectorAll('.reveal, .reveal-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ============ HERO PARALLAX ============ */
  const parallaxEl = document.querySelector('[data-parallax]');
  if (parallaxEl && !reduceMotion) {
    document.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        parallaxEl.style.transform = `translateY(${y * 0.18}px)`;
      }
    }, { passive: true });
  }

  /* ============ PARTICLES ============ */
  const canvas = document.getElementById('particles');
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let w, h, particles;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const initParticles = () => {
      const count = Math.min(60, Math.floor((w * h) / 28000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        vy: Math.random() * 0.15 + 0.03,
        vx: (Math.random() - 0.5) * 0.06,
        o: Math.random() * 0.4 + 0.1,
        gold: Math.random() > 0.85
      }));
    };
    resize();
    initParticles();
    window.addEventListener('resize', () => { resize(); initParticles(); });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.y -= p.vy;
        p.x += p.vx;
        if (p.y < -10) p.y = h + 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(212,175,55,${p.o})`
          : `rgba(52,211,153,${p.o})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }

  /* ============ MINDSET WORDS: sequential glow ============ */
  const mindsetWords = document.querySelectorAll('.mindset-words span');
  if (mindsetWords.length && 'IntersectionObserver' in window) {
    const mio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mindsetWords.forEach((w, i) => {
            setTimeout(() => {
              w.classList.add('is-lit');
              setTimeout(() => w.classList.remove('is-lit'), 1400);
            }, i * 260);
          });
          mio.disconnect();
        }
      });
    }, { threshold: 0.5 });
    mio.observe(document.getElementById('mindset'));
  }

  /* ============ ORBIT / INTERESTS ============ */
  const orbit = document.getElementById('orbit');
  const interests = [
    'Music', 'Movies', 'Anime', 'Art', 'Travel', 'History',
    'Space', 'Nature', 'Quantum Physics', 'Time Travel', 'Dinosaurs', 'Chess', 'Cricket'
  ];
  if (orbit) {
    const radius = () => orbit.offsetWidth * 0.42;
    interests.forEach((label, i) => {
      const angle = (i / interests.length) * Math.PI * 2 - Math.PI / 2;
      const node = document.createElement('div');
      node.className = 'orbit-node';
      node.style.setProperty('--angle', angle);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = label;
      btn.setAttribute('aria-label', label);
      node.appendChild(btn);
      orbit.appendChild(node);
    });

    const placeNodes = () => {
      const r = radius();
      orbit.querySelectorAll('.orbit-node').forEach(node => {
        const angle = parseFloat(node.style.getPropertyValue('--angle'));
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        node.style.left = `calc(50% + ${x}px)`;
        node.style.top = `calc(50% + ${y}px)`;
      });
    };
    placeNodes();
    window.addEventListener('resize', placeNodes);
  }

  /* ============ TERMINAL SIMULATION ============ */
  const terminalBody = document.getElementById('terminalBody');
  const terminalForm = document.getElementById('terminalForm');
  const terminalInput = document.getElementById('terminalInput');
  const terminalSuggestions = document.getElementById('terminalSuggestions');

  const responses = [
    {
      match: /who is ranjan/i,
      reply: "Ranjan is an AI/ML developer and creative technologist exploring the intersection of intelligence, technology and human experience. Currently finishing a B.Sc. in AI & ML at VISTAS, Chennai."
    },
    {
      match: /project/i,
      reply: "Featured work: R.O.O.K (personal AI system concept), EMORI (emotionally intelligent AI robot concept), the AI Smart Bus Booking & Arrival Prediction System, and an AI Cultural & Slang Translator MVP. See the Projects section above."
    },
    {
      match: /technolog|tech stack|tools|skills/i,
      reply: "Machine learning fundamentals, generative and multimodal AI, prompt engineering, Python, data analysis, and Google Cloud / Vertex AI tooling — alongside a strong interest in robotics and computer vision."
    },
    {
      match: /r\.?o\.?o\.?k/i,
      reply: "R.O.O.K is a personal AI system concept — a multimodal assistant combining conversation, speech, vision, personalization and memory into one interactive interface."
    },
    {
      match: /emori/i,
      reply: "EMORI is a concept for an emotionally intelligent AI robot companion, built around facial emotion recognition, voice interaction, personalization and long-term memory."
    },
    {
      match: /contact|reach|email|hire/i,
      reply: "Reach Ranjan at ranjan31012005@gmail.com, or via LinkedIn and GitHub — links are in the Contact section below."
    }
  ];
  const fallback = "That's outside this simulated terminal's script for now — try one of the suggested prompts, or reach out directly through the Contact section.";

  function addLine(text, type) {
    const p = document.createElement('p');
    p.className = `terminal-line terminal-line--${type}`;
    p.textContent = text;
    terminalBody.appendChild(p);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function respondTo(q) {
    addLine(q, 'user');
    const match = responses.find(r => r.match.test(q));
    setTimeout(() => addLine(match ? match.reply : fallback, 'ai'), 260);
  }

  if (terminalForm) {
    terminalForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = terminalInput.value.trim();
      if (!q) return;
      respondTo(q);
      terminalInput.value = '';
    });
  }
  if (terminalSuggestions) {
    terminalSuggestions.addEventListener('click', e => {
      const btn = e.target.closest('button[data-q]');
      if (!btn) return;
      respondTo(btn.dataset.q);
    });
  }

  /* ============ PROJECT ROW CLICK (lightweight expand) ============ */
  document.querySelectorAll('[data-project]').forEach(row => {
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    const desc = row.querySelector('.project-desc');
    const toggle = () => {
      row.classList.toggle('is-open');
    };
    row.addEventListener('click', toggle);
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

})();
