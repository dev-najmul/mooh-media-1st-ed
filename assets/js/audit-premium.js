/* v16 audit report specimen tab interaction. No real scan or network request. */
(() => {
  'use strict';
  const tabs = Array.from(document.querySelectorAll('[data-audit16-tab]'));
  const description = document.querySelector('[data-audit16-copy]');
  const root = document.querySelector('.audit16-report-card');
  if (!tabs.length || !description || !root) return;
  const english = document.documentElement.lang === 'en';
  const copy = english ? [
    'Your discoverability on Google and Maps, based on available information.',
    'The strength and consistency of review-based trust signals.',
    'Any obvious obstacles to understanding or contacting your business.',
    'How your visibility compares with your local market context.'
  ] : [
    'Votre visibilité sur Google et Maps, à partir des informations disponibles.',
    'La qualité et la cohérence des signaux de confiance liés aux avis.',
    'Les premiers obstacles qui compliquent la compréhension ou le contact.',
    'La manière dont votre présence se situe face au contexte local.'
  ];
  function select(i) {
    tabs.forEach((tab,j) => {
      const active = i===j;
      tab.classList.toggle('is-selected',active);
      tab.setAttribute('aria-selected',String(active));
      tab.tabIndex=active ? 0 : -1;
    });
    description.textContent = copy[i];
  }
  tabs.forEach((tab,i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown',event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const next=(i+(event.key==='ArrowRight'?1:tabs.length-1))%tabs.length;
      select(next);tabs[next].focus();
    });
  });
  select(0);
})();
