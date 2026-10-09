'use strict';

/**
 * ============================================================================
 * CẤU HÌNH CÁ NHÂN — CHỈNH SỬA TẠI ĐÂY
 * ============================================================================
 * Tất cả thông tin cá nhân đều nằm trong object CONFIG bên dưới.
 * Bạn chỉ cần thay đổi các giá trị ở đây để cập nhật toàn bộ website.
 */
const CONFIG = {
  // --- Thông tin chính ---
  name: 'AnhQuan',
  tagline: 'Student • Developer • Creative Thinker',

  // --- Avatar (đường dẫn tương đối hoặc URL) ---
  avatar: './assets/avatar.png',

  // --- Giới thiệu bản thân ---
  about: {
    paragraphs: [
      'Xin chào! Mình là AnhQuan — một người đam mê công nghệ và luôn tìm tòi những điều mới mẻ trong thế giới lập trình.',
      'Mình thích xây dựng những thứ hữu ích từ code, khám phá các công nghệ web hiện đại và chia sẻ kiến thức với cộng đồng.'
    ],
    details: [
      { label: 'Location', value: '📍 Vietnam' },
      { label: 'Focus', value: '🎯 Web Development' },
      { label: 'Learning', value: '📚 JavaScript, Python' },
      { label: 'Hobby', value: '🎮 Gaming, Music' }
    ]
  },

  // --- Kỹ năng (icon: tên icon trong SVG_ICONS bên dưới) ---
  skills: [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Python', icon: 'python' },
    { name: 'Git', icon: 'git' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Figma', icon: 'figma' },
    { name: 'GitHub', icon: 'github' }
  ],

  // --- Dự án ---
  projects: [
    {
      title: 'Project Name',
      description: 'Mô tả ngắn về dự án. Thay đổi nội dung này trong CONFIG.',
      image: '',       // Đường dẫn tới ảnh chụp dự án, hoặc để trống
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#',     // URL repo GitHub
      demo: '#'        // URL demo, để '' nếu không có
    },
    {
      title: 'Another Project',
      description: 'Một dự án khác. Thêm hoặc xóa project trong mảng này.',
      image: '',
      tech: ['Python'],
      github: '#',
      demo: ''
    }
  ],

  // --- Liên kết mạng xã hội ---
  social: [
    { platform: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { platform: 'Discord', url: '#', icon: 'discord' },
    { platform: 'Instagram', url: 'https://instagram.com/', icon: 'instagram' },
    { platform: 'Facebook', url: 'https://facebook.com/', icon: 'facebook' }
  ],

  // --- Email (nút Copy Email sẽ sao chép giá trị này) ---
  email: 'your-email@example.com',

  // --- Footer ---
  footer: {
    tagline: 'Built with ☕ and curiosity.'
  }
};


/**
 * ============================================================================
 * SVG ICONS
 * ============================================================================
 */
const SVG_ICONS = {
  html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 3 4 21"></polyline><polyline points="4 7 20 7"></polyline><polyline points="4 13 16 13"></polyline><polyline points="4 19 12 19"></polyline></svg>',
  css: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="M8 8h8"></path><path d="M8 12h6"></path><path d="M8 16h4"></path></svg>',
  js: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="M10 15V9"></path><path d="M14 9c1.5 0 2 .8 2 2s-.5 2-2 2-2 .8-2 2 .5 2 2 2"></path></svg>',
  python: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 7 3.5 7 5v2h5v1H5.5C3.5 8 2 9.5 2 12s1.5 4 3.5 4H7v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 2.5-1 2.5-2.5V5c0-1.5-1.5-3-6-3zm-1.5 2a1 1 0 110 2 1 1 0 010-2z"></path><path d="M12 22c4 0 5-1.5 5-3v-2h-5v-1h6.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17v2.5c0 2-1.5 3.5-3.5 3.5h-5c-1.5 0-2.5 1-2.5 2.5V19c0 1.5 1.5 3 6 3zm1.5-2a1 1 0 110-2 1 1 0 010 2z"></path></svg>',
  git: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 9v9c0 0 0 3 6 3"></path><path d="M18 15V9c0 0 0-3-6-3"></path></svg>',
  vscode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 2v16l-4 2-9-7.5L4 18l-2-1.5v-9L4 6l4 3.5z"></path><path d="M17 2L8 9.5 17 17"></path></svg>',
  figma: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
  discord: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.09 9a3 3 0 0 0-2.83 2 3 3 0 0 0 2.83 2h.18a3 3 0 0 0 0-4z"></path><path d="M14.73 9a3 3 0 0 0 0 4h.18a3 3 0 0 0 2.83-2 3 3 0 0 0-2.83-2z"></path><path d="M8 17s1.5 2 4 2 4-2 4-2"></path><path d="M20.38 7.55c-.7-1.1-1.56-2.05-2.55-2.81a12.04 12.04 0 0 0-3.67-1.65l-.46 1.48a10 10 0 0 0-3.4 0L9.84 3.1A12.04 12.04 0 0 0 6.17 4.74c-.99.76-1.85 1.71-2.55 2.81A17.5 17.5 0 0 0 2 15.5s2 4.5 8 4.5l1.5-2.4c-.87-.25-1.68-.62-2.4-1.1l.4-.7a8 8 0 0 0 5 0l.4.7c-.72.48-1.53.85-2.4 1.1L14 20c6 0 8-4.5 8-4.5a17.5 17.5 0 0 0-1.62-7.95z"></path></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>',
  tiktok: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
  external: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'
};

const getIcon = (name) => SVG_ICONS[name] || SVG_ICONS.link;

/**
 * Escape HTML để tránh XSS khi chèn user-provided text
 */
const escapeHTML = (str) => {
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
};


/**
 * ============================================================================
 * RENDER FUNCTIONS
 * ============================================================================
 */

/** Hero: tên, tagline, avatar, nút GitHub */
const renderHero = () => {
  const nameEl = document.getElementById('hero-name');
  const taglineEl = document.getElementById('hero-tagline');
  const avatarEl = document.getElementById('avatar-img');
  const githubBtn = document.getElementById('hero-github-btn');

  if (nameEl) nameEl.textContent = CONFIG.name;
  if (taglineEl) taglineEl.textContent = CONFIG.tagline;

  if (avatarEl && CONFIG.avatar) {
    avatarEl.src = CONFIG.avatar;
    avatarEl.alt = CONFIG.name;
  }

  if (githubBtn) {
    const gh = CONFIG.social.find(s => s.platform.toLowerCase() === 'github');
    if (gh && gh.url && gh.url !== '#') {
      githubBtn.href = gh.url;
    }
  }
};

/** About: đoạn văn giới thiệu + chi tiết */
const renderAbout = () => {
  const textEl = document.getElementById('about-text');
  const detailsEl = document.getElementById('about-details');

  if (textEl && CONFIG.about.paragraphs) {
    textEl.innerHTML = CONFIG.about.paragraphs
      .map(p => `<p>${escapeHTML(p)}</p>`)
      .join('');
  }

  if (detailsEl && CONFIG.about.details) {
    detailsEl.innerHTML = CONFIG.about.details
      .map(d => `
        <div class="detail-item">
          <span class="detail-label">${escapeHTML(d.label)}</span>
          <span class="detail-value">${escapeHTML(d.value)}</span>
        </div>
      `).join('');
  }
};

/** Skills: grid các thẻ kỹ năng */
const renderSkills = () => {
  const grid = document.getElementById('skills-grid');
  if (!grid || !CONFIG.skills.length) return;

  grid.innerHTML = CONFIG.skills
    .map(s => `
      <div class="skill-card">
        <div class="skill-icon">${getIcon(s.icon)}</div>
        <span class="skill-name">${escapeHTML(s.name)}</span>
      </div>
    `).join('');
};

/** Projects: grid thẻ dự án */
const renderProjects = () => {
  const grid = document.getElementById('projects-grid');
  if (!grid || !CONFIG.projects.length) return;

  grid.innerHTML = CONFIG.projects.map(p => {
    const imgHTML = p.image
      ? `<img src="${p.image}" alt="${escapeHTML(p.title)}" loading="lazy">`
      : '<div class="project-img-placeholder"></div>';

    const techHTML = p.tech
      .map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`)
      .join('');

    let linksHTML = '';
    if (p.github) {
      linksHTML += `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon('github')} Code</a>`;
    }
    if (p.demo) {
      linksHTML += `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link">${getIcon('external')} Demo</a>`;
    }

    return `
      <div class="project-card">
        <div class="project-img-container">${imgHTML}</div>
        <div class="project-content">
          <h3 class="project-title">${escapeHTML(p.title)}</h3>
          <p class="project-desc">${escapeHTML(p.description)}</p>
          <div class="project-tech">${techHTML}</div>
          <div class="project-links">${linksHTML}</div>
        </div>
      </div>
    `;
  }).join('');
};

/** Social links */
const renderSocial = () => {
  const container = document.getElementById('social-links');
  if (!container || !CONFIG.social.length) return;

  container.innerHTML = CONFIG.social
    .map(s => `
      <a href="${s.url}" class="social-link" target="_blank"
         rel="noopener noreferrer" aria-label="${escapeHTML(s.platform)}">
        ${getIcon(s.icon)}
      </a>
    `).join('');
};

/** Footer: năm + tagline */
const renderFooter = () => {
  const yearEl = document.getElementById('footer-year');
  const taglineEl = document.getElementById('footer-tagline');

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (taglineEl && CONFIG.footer.tagline) {
    taglineEl.textContent = CONFIG.footer.tagline;
  }
};


/**
 * ============================================================================
 * INTERACTIVE FEATURES
 * ============================================================================
 */

/** Đồng hồ hiển thị giờ Việt Nam (UTC+7) */
const initClock = () => {
  const el = document.getElementById('hero-status');
  if (!el) return;

  const update = () => {
    try {
      const time = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date());
      el.textContent = `🕐 ${time} — Local Time (UTC+7)`;
    } catch {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const vn = new Date(utc + 7 * 3600000);
      const h = String(vn.getHours()).padStart(2, '0');
      const m = String(vn.getMinutes()).padStart(2, '0');
      el.textContent = `🕐 ${h}:${m} — Local Time (UTC+7)`;
    }
  };

  update();
  setInterval(update, 60000);
};

/** Nút sao chép email */
const initCopyEmail = () => {
  const btn = document.getElementById('copy-email-btn');
  if (!btn || !CONFIG.email) return;

  // Tạo tooltip
  const tooltip = document.createElement('span');
  tooltip.className = 'copy-tooltip';
  tooltip.textContent = 'Đã sao chép!';
  btn.appendChild(tooltip);

  btn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONFIG.email);
      } else {
        // Fallback cho trình duyệt cũ
        const ta = document.createElement('textarea');
        ta.value = CONFIG.email;
        ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }

      tooltip.classList.add('show');
      setTimeout(() => tooltip.classList.remove('show'), 2000);
    } catch {
      // Nếu copy thất bại, mở mail client thay thế
      window.location.href = `mailto:${CONFIG.email}`;
    }
  });
};

/** Scroll reveal animation với IntersectionObserver */
const initScrollReveal = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
};

/** Smooth scroll cho nav links + mobile menu */
const initNavigation = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        // Đóng mobile menu
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile menu toggle
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('active');
    });

    // Đóng khi click ngoài
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        navMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
};

/** Active state cho nav + navbar background khi scroll */
const initNavState = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  // Active section tracking
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  // Navbar background on scroll
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check
  }
};


/**
 * ============================================================================
 * KHỞI TẠO
 * ============================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  // Render nội dung
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderSocial();
  renderFooter();

  // Khởi tạo tính năng
  initClock();
  initCopyEmail();

  // Delay nhẹ để DOM settle trước khi init observers
  requestAnimationFrame(() => {
    initScrollReveal();
    initNavigation();
    initNavState();
  });
});
