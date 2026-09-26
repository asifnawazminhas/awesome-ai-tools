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
    const topBtn = document.getElementById('scrollTopBtn');
    const bottomBtn = document.getElementById('scrollBottomBtn');

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

    function flashButton(button, text) {
      if (!button) return;
      const original = button.dataset.originalLabel || button.textContent;
      button.dataset.originalLabel = original;
      button.textContent = text;
      clearTimeout(button._flashTimer);
      button._flashTimer = setTimeout(() => {
        button.textContent = original;
      }, 1600);
    }

    if (shareBtn) {
      shareBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        const data = {
          title: 'Awesome AI Tools',
          text: 'Explore and compare practical AI tools for research, coding, creativity and security.',
          url: 'https://ai.asifnawazminhas.com/'
        };

        // Native share is useful on mobile. If cancelled or unsupported,
        // fall back to copying the canonical site URL.
        if (navigator.share) {
          try {
            await navigator.share(data);
            flashButton(shareBtn, 'Shared!');
            return;
          } catch (err) {
            if (err && err.name === 'AbortError') {
              // User cancelled the share sheet. Keep the button usable.
              return;
            }
          }
        }

        const copied = await copyText(data.url);
        if (copied) {
          flashButton(shareBtn, 'Link copied!');
        } else {
          window.prompt('Copy this link:', data.url);
        }
      });
    }
  });
})();
