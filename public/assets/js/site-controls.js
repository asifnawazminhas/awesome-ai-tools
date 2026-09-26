(() => {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(() => {
    const shareBtn = document.getElementById('shareSite');
    const shareMenu = document.getElementById('shareMenu');
    const nativeShareBtn = document.getElementById('nativeShareBtn');
    const shareStatus = document.getElementById('shareStatus');
    const topBtn = document.getElementById('scrollTopBtn');
    const bottomBtn = document.getElementById('scrollBottomBtn');

    const SITE_URL = 'https://ai.asifnawazminhas.com/';
    const SITE_TITLE = 'Awesome AI Tools';
    const SHARE_TEXT = 'Explore and compare practical AI tools for research, coding, creativity and security.';

    const scroller = () => document.scrollingElement || document.documentElement || document.body;

    if (topBtn) {
      topBtn.disabled = false;
      topBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const el = scroller();
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } catch (_) {
          el.scrollTop = 0;
        }
      });
    }

    if (bottomBtn) {
      bottomBtn.disabled = false;
      bottomBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const el = scroller();
        const bottom = Math.max(
          el.scrollHeight,
          document.body ? document.body.scrollHeight : 0,
          document.documentElement ? document.documentElement.scrollHeight : 0
        );
        try {
          window.scrollTo({ top: bottom, left: 0, behavior: 'smooth' });
        } catch (_) {
          el.scrollTop = bottom;
        }
      });
    }

    async function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (_) {}
      }

      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      area.style.pointerEvents = 'none';
      document.body.appendChild(area);
      area.select();
      area.setSelectionRange(0, area.value.length);

      let copied = false;
      try {
        copied = document.execCommand('copy');
      } catch (_) {
        copied = false;
      }
      area.remove();
      return copied;
    }

    function setStatus(message) {
      if (!shareStatus) return;
      shareStatus.textContent = message;
      clearTimeout(setStatus.timer);
      setStatus.timer = setTimeout(() => {
        shareStatus.textContent = '';
      }, 1800);
    }

    function closeShareMenu() {
      if (!shareMenu || !shareBtn) return;
      shareMenu.hidden = true;
      shareBtn.setAttribute('aria-expanded', 'false');
    }

    function openShareMenu() {
      if (!shareMenu || !shareBtn) return;
      shareMenu.hidden = false;
      shareBtn.setAttribute('aria-expanded', 'true');
    }

    if (shareBtn && shareMenu) {
      shareBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        shareMenu.hidden ? openShareMenu() : closeShareMenu();
      });

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.share-menu-wrap')) closeShareMenu();
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          closeShareMenu();
          shareBtn.focus();
        }
      });
    }

    const encodedUrl = encodeURIComponent(SITE_URL);
    const encodedText = encodeURIComponent(`${SITE_TITLE} - ${SHARE_TEXT}`);
    const encodedTitle = encodeURIComponent(SITE_TITLE);

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`
    };

    document.querySelectorAll('[data-share]').forEach((item) => {
      const network = item.dataset.share;

      if (network === 'copy') {
        item.addEventListener('click', async () => {
          const copied = await copyText(SITE_URL);
          if (copied) {
            setStatus('Link copied to clipboard');
            const label = item.querySelector('b');
            const original = label.textContent;
            label.textContent = 'Copied';
            setTimeout(() => label.textContent = original, 1400);
          } else {
            window.prompt('Copy this link:', SITE_URL);
          }
        });
        return;
      }

      if (shareUrls[network]) {
        item.href = shareUrls[network];
        if (network !== 'email') {
          item.target = '_blank';
          item.rel = 'noopener noreferrer';
        }
        item.addEventListener('click', () => {
          setStatus(`Opening ${item.querySelector('b')?.textContent || 'share option'}…`);
        });
      }
    });

    if (nativeShareBtn) {
      if (!navigator.share) {
        nativeShareBtn.hidden = true;
      } else {
        nativeShareBtn.addEventListener('click', async () => {
          try {
            await navigator.share({
              title: SITE_TITLE,
              text: SHARE_TEXT,
              url: SITE_URL
            });
            setStatus('Shared');
          } catch (err) {
            if (!err || err.name !== 'AbortError') {
              const copied = await copyText(SITE_URL);
              setStatus(copied ? 'Link copied instead' : 'Unable to open sharing');
            }
          }
        });
      }
    }
  });
})();
