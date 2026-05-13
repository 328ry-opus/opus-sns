(() => {
  const config = window.GLOW_LP_CONFIG || {};
  const lineUrl = (config.lineUrl || '').trim();
  const phoneNumber = (config.phoneNumber || '').replace(/[^\d+]/g, '');
  const reserve = document.getElementById('reserve');

  const scrollToReserve = (event) => {
    event.preventDefault();
    reserve?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.querySelectorAll('[data-cta="line"]').forEach((link) => {
    if (lineUrl) {
      link.href = lineUrl;
      link.rel = 'noopener';
    } else {
      link.addEventListener('click', scrollToReserve);
    }
  });

  document.querySelectorAll('[data-cta="phone"]').forEach((link) => {
    if (phoneNumber) {
      link.href = `tel:${phoneNumber}`;
    } else {
      link.addEventListener('click', scrollToReserve);
    }
  });
})();
