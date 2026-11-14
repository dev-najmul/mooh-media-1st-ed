(() => {
  'use strict';
  const WA = '32465634834';
  const I18N = window.MOOH_I18N || {active:false,t:s=>s,translateTree:()=>{}};
  const tr = I18N.t;
  const IS_EN = I18N.active;
  const offers = {
    audit: {name:'Test de visibilité en ligne', description:'Un premier regard gratuit sur la présence de votre activité : profil Google, avis clients, site et concurrence locale.', points:['Un premier pas gratuit','Sans engagement ni obligation','Un aperçu des points à examiner']},
    startup: {name:'Start-up', description:'Pour commencer sur des bases solides : profil Google, annuaires utiles, avis clients et premiers contenus.', points:['Création ou optimisation de Google Business Profile','Présence cohérente sur les annuaires utiles','Outils simples pour encourager les avis']},
    local: {name:'Visibilité Locale', description:'Pour renforcer durablement la présence d’une entreprise dans sa ville et faciliter sa découverte sur Google.', points:['Suivi et amélioration du profil Google','Réponses aux avis et stratégie locale','Lecture mensuelle des actions et des résultats']},
    growth: {name:'Croissance', description:'Pour conjuguer visibilité locale, réseaux sociaux et contenus adaptés à votre activité.', points:['Accompagnement Visibilité Locale','Deux plateformes sociales','Contenus et revues stratégiques']},
    website: {name:'Site qui Convertit', description:'Pour présenter votre activité avec un site soigné, rapide et conçu autour des prises de contact.', points:['Design mobile-first','Structure de visibilité locale et SEO','Appels et formulaires faciles à utiliser']},
    addons:{name:'Services complémentaires',description:'Des interventions précises selon votre besoin : publicité locale, vidéo, photographie, identité, caissons LED ou formation Google Business Profile.',points:['Publicité locale','Pack vidéo et photographie','Identité visuelle, LED et formation']},
    auto: {name:'Accompagnement Auto',description:'Une approche locale adaptée aux professionnels de l’automobile et aux concessions qui souhaitent être découverts près de chez eux.',points:['Présence locale','Avis et visibilité','Contacts qualifiés']}
  };
  const businesses = [{id:'auto',name:'Concessionnaire automobile',message:'concessionnaire automobile'},{id:'restaurant',name:'Restaurant',message:'restaurant'},{id:'commerce',name:'Commerce / boutique',message:'commerce'},{id:'autre',name:'Autre activité',message:'autre activité'}];
  const addons = [{id:'ads',name:'Publicité locale'},{id:'video',name:'Pack vidéo'},{id:'photo',name:'Photographie produit'},{id:'brand',name:'Identité et visuels'},{id:'led',name:'Caissons lumineux LED'},{id:'gbp',name:'Formation Google Business Profile'}];
  const more = [{id:'support',name:'Facturation ou assistance',message:'Bonjour, je souhaite joindre MOOH MEDIA GRP au sujet de la facturation ou de l’assistance.'},{id:'partner',name:'Partenariat',message:'Bonjour, je souhaite discuter d’un partenariat avec MOOH MEDIA GRP.'},{id:'person',name:'Parler à quelqu’un',message:'Bonjour, je souhaite parler à un membre de l’équipe MOOH MEDIA GRP.'}];
  const qs = s => document.querySelector(s);
  const backdrop = qs('#dialog-backdrop');
  const dialog = backdrop.querySelector('.dialog-panel');
  const dialogContent = qs('#dialog-content');
  const headerMenu = qs('#offers-menu');
  const offersToggle = qs('#offers-toggle');
  const mobileMenu = qs('#mobile-menu');
  const mobileToggle = qs('#mobile-trigger');
  let lastFocused = null;
  let flow = {};
  let flowStep = 0;
  let pendingAuditUrl = null;
  function track(name,detail={}) {document.dispatchEvent(new CustomEvent('mooh:prototype-action',{detail:{name,...detail}})); /* GA4 follows only at WP integration, after consent. */}
  const trackAction = track;
  const mobileBackdrop = qs('[data-mobile-overlay]');
  const mobileCloseButton = qs('[data-close-mobile]');
  const menuDisclosure = qs('[data-menu-disclosure]');
  const menuOfferPanel = qs('#mooh-menu-offers');
  function closeMobileMenu(restoreFocus=false){
    if(!mobileMenu.hidden){
      mobileMenu.classList.remove('is-open');
      mobileMenu.hidden=true;
    }
    if(mobileBackdrop)mobileBackdrop.hidden=true;
    document.body.classList.remove('mooh-drawer-open');
    mobileToggle.setAttribute('aria-expanded','false');
    mobileToggle.setAttribute('aria-label', IS_EN?'Open menu':'Ouvrir le menu');
    if(menuDisclosure && menuOfferPanel){menuDisclosure.setAttribute('aria-expanded','false');menuOfferPanel.hidden=true;}
    if(restoreFocus)mobileToggle.focus();
  }
  function openMobileMenu(){
    mobileMenu.hidden=false;
    if(mobileBackdrop)mobileBackdrop.hidden=false;
    document.body.classList.add('mooh-drawer-open');
    mobileToggle.setAttribute('aria-expanded','true');
    mobileToggle.setAttribute('aria-label',IS_EN?'Close menu':'Fermer le menu');
    window.requestAnimationFrame(()=>mobileMenu.classList.add('is-open'));
    if(mobileCloseButton)mobileCloseButton.focus({preventScroll:true});
  }
  function closeMenus(){headerMenu.hidden=true;offersToggle.setAttribute('aria-expanded','false');closeMobileMenu(false);}
  function showDialog(html){lastFocused=document.activeElement;closeMenus();dialogContent.innerHTML=html;I18N.translateTree(dialogContent);backdrop.hidden=false;document.body.classList.add('dialog-open');dialog.focus();track('open_dialog');}
  function closeDialog(){backdrop.hidden=true;document.body.classList.remove('dialog-open');dialogContent.innerHTML='';if(lastFocused && typeof lastFocused.focus==='function')lastFocused.focus();}
  const esc = (s) => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function waLink(text){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(text)}
  function goAudit(){closeMenus();closeDialog();const section=qs('#audit');if(section){section.scrollIntoView({behavior:'smooth',block:'start'});const input=qs('#audit-url');if(input)input.focus({preventScroll:true});}else{window.location.href=IS_EN?'audit-en.html':'audit.html';}track('audit_intent')}
  function offerPreview(id){if(id==='audit'){window.location.href=IS_EN?'audit-en.html':'audit.html';return;}const o=offers[id];if(!o)return;
    showDialog(`<div class="dialog-kicker">APERÇU D'OFFRE · PROTOTYPE</div><h2 id="dialog-title" class="dialog-title">${esc(o.name)}</h2><p class="dialog-desc">${esc(o.description)}</p><ul class="offer-modal-list">${o.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><p class="dialog-subnote">Les pages détaillées seront créées pendant la phase WordPress. Les prix définitifs et le contenu complet viennent du client.</p><button class="button button-flame dialog-action" type="button" data-flow-preselect="${id}">Parler de cette offre</button>`);
    track('offer_preview',{offer:id});
  }
  function compare(){window.location.href=IS_EN?'pricing-en.html':'pricing.html';return;showDialog(`<div class="dialog-kicker">CHOISIR SON POINT DE DÉPART</div><h2 id="dialog-title" class="dialog-title">Cinq façons de commencer.</h2><p class="dialog-desc">Des solutions adaptées à l'étape de votre entreprise. Les prix définitifs seront confirmés par MOOH MEDIA GRP.</p><div class="option-list">${['audit','startup','local','growth','website'].map((id)=>`<button type="button" data-offer="${id}">${esc(offers[id].name)}</button>`).join('')}</div>`);}
  function openFlow(preselect){flow={};flowStep=0;if(preselect && offers[preselect]){flow.offer=preselect;flowStep=1;if(preselect==='audit' && pendingAuditUrl){flow.auditUrl=pendingAuditUrl;}}renderFlow();}
  function renderFlow(){let html='<div class="dialog-kicker">PARLONS DE VOTRE ACTIVITÉ</div>';
    if(flowStep===0){html+=`<div class="flow-progress">ÉTAPE 1 SUR 3</div><h2 id="dialog-title" class="dialog-title">Que souhaitez-vous développer ?</h2><p class="dialog-desc">Choisissez ce qui vous ressemble. Nous préparons le bon message pour votre équipe.</p><div class="option-list">${['audit','startup','local','growth','website','addons'].map(id=>`<button data-flow-offer="${id}" type="button">${esc(offers[id].name)}</button>`).join('')}<button type="button" data-flow-more="1">Autre demande / partenariat</button></div>`;}
    if(flowStep===1){const addon=flow.offer==='addons';html+=`<div class="flow-progress">ÉTAPE 2 SUR 3</div><h2 id="dialog-title" class="dialog-title">${addon?'Quel service vous intéresse ?':'Parlez-nous de votre activité.'}</h2><p class="dialog-desc">${addon?'Sélectionnez votre besoin.':'Quel type d’entreprise souhaitez-vous faire connaître ?'}</p><div class="option-list">${(addon?addons:businesses).map(o=>`<button type="button" ${addon?'data-flow-addon':'data-flow-business'}="${o.id}">${esc(o.name)}</button>`).join('')}</div>`;}
    if(flowStep===2){html+=`<div class="flow-progress">ÉTAPE 3 SUR 3</div><h2 id="dialog-title" class="dialog-title">Où en êtes-vous aujourd'hui ?</h2><p class="dialog-desc">Une dernière précision pour mieux comprendre votre projet.</p><div class="option-list"><button type="button" data-flow-stage="nouvelle entreprise">Je lance mon entreprise</button><button type="button" data-flow-stage="entreprise existante">Mon entreprise existe déjà</button></div>`;}
    if(flowStep===3){const offerName=flow.offer==='addons'?(addons.find(a=>a.id===flow.addon)?.name||'un service complémentaire'):offers[flow.offer].name;const typeName=businesses.find(b=>b.id===flow.business)?.message||'une activité locale';let message=IS_EN ? `Hello, I'm interested in ${tr(offerName)} - ${tr(typeName)} - ${flow.stage==='nouvelle entreprise'?'new business':'existing business'}. I'd like to talk with MOOH MEDIA GRP.` : `Bonjour, je suis intéressé(e) par ${offerName} - ${typeName} - ${flow.stage}. Je souhaite échanger avec MOOH MEDIA GRP.`;if(flow.auditUrl){message += IS_EN ? `\nSubmitted URL: ${flow.auditUrl}` : `\nURL transmise : ${flow.auditUrl}`;}html+=`<div class="flow-progress">VOTRE MESSAGE EST PRÊT</div><h2 id="dialog-title" class="dialog-title">Parfait. Échangeons.</h2><p class="dialog-desc">Voici le message qui s'ouvrira dans WhatsApp. Rien n'est envoyé automatiquement.</p><div class="flow-message">${esc(message)}</div><a class="button button-flame dialog-action" href="${esc(waLink(message))}" target="_blank" rel="noopener noreferrer" data-wa-final="1">Ouvrir WhatsApp</a><p class="dialog-subnote">Le message reste modifiable dans WhatsApp avant l'envoi.</p>`;}
    if(flow.auditUrl)html+=`<div class="flow-audit-url"><strong>${IS_EN?'Submitted website':'Site transmis'}:</strong> ${esc(flow.auditUrl)}</div>`;
    if(flowStep>0)html+=`<div class="flow-actions" style="margin-top:27px"><button type="button" class="flow-back" data-flow-back>Revenir à l'étape précédente</button><span class="flow-progress">MOOH / VISIBILITÉ LOCALE</span></div>`;
    showDialog(html);
  }
  function openMore(){showDialog(`<div class="dialog-kicker">AUTRES DEMANDES</div><h2 id="dialog-title" class="dialog-title">Comment pouvons-nous vous aider ?</h2><p class="dialog-desc">Sélectionnez un sujet pour ouvrir un message WhatsApp adapté.</p><div class="option-list">${more.map(m=>`<a class="button" style="white-space:normal;justify-content:flex-start;border:1px solid #cddbd0;background:#f8faf7;color:#0C3523" target="_blank" rel="noopener noreferrer" href="${esc(waLink(IS_EN ? ({support:'Hello, I would like to contact MOOH MEDIA GRP about billing or support.',partner:'Hello, I would like to discuss a partnership with MOOH MEDIA GRP.',person:'Hello, I would like to speak to someone at MOOH MEDIA GRP.'}[m.id]||m.message) : m.message))}" data-wa-more="${m.id}">${esc(m.name)}</a>`).join('')}</div>`);}

  function initProofCarousel(){
    const root = qs('[data-proof-carousel]');
    if(!root) return;
    const sliderTrack = root.querySelector('.proof-carousel-track');
    const cards = Array.from(root.querySelectorAll('[data-proof-card]'));
    const prev = root.querySelector('[data-proof-prev]');
    const next = root.querySelector('[data-proof-next]');
    const dotsWrap = root.querySelector('.proof-dots');
    if(!sliderTrack || cards.length < 2) return;
    let perView = 1;
    let pages = 1;
    let index = 0;
    let timer = null;
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function getGap(){
      const styles = window.getComputedStyle(sliderTrack);
      return parseFloat(styles.columnGap || styles.gap || 0) || 0;
    }
    function measure(){
      const width = window.innerWidth;
      perView = width <= 620 ? 1 : width <= 1100 ? 2 : 3;
      pages = Math.max(1, cards.length - perView + 1);
      if(index > pages - 1) index = pages - 1;
      cards.forEach((card,i)=>{
        card.setAttribute('aria-hidden', String(i < index || i >= index + perView));
      });
      if(dotsWrap && dotsWrap.childElementCount !== pages){
        dotsWrap.innerHTML = Array.from({length:pages}, (_,i)=>`<button class="proof-dot${i===0?' is-active':''}" type="button" aria-label="${IS_EN?'Show testimonial':'Afficher le témoignage'} ${i+1}" data-proof-dot="${i}"></button>`).join('');
      }
      update();
    }
    function update(byUser=false){
      const gap = getGap();
      const card = cards[0];
      if(!card) return;
      const offset = index * (card.getBoundingClientRect().width + gap);
      sliderTrack.style.transform = `translate3d(${-offset}px,0,0)`;
      cards.forEach((el,i)=>el.setAttribute('aria-hidden', String(i < index || i >= index + perView)));
      root.querySelectorAll('[data-proof-dot]').forEach((dot,i)=>{
        dot.classList.toggle('is-active', i===index);
        dot.setAttribute('aria-current', String(i===index));
      });
      if(prev) prev.disabled = pages <= 1;
      if(next) next.disabled = pages <= 1;
      if(byUser){ trackAction('testimonial_slide_change',{slide:index+1}); }
    }
    function go(to,byUser=false){
      if(pages <= 1) return;
      index = (to + pages) % pages;
      update(byUser);
    }
    function pause(){ if(timer!==null){ clearInterval(timer); timer=null; } }
    function play(){ pause(); if(reduceMotion || document.hidden || pages <= 1) return; timer = setInterval(()=>go(index+1), 5200); }
    if(prev) prev.addEventListener('click', ()=>{ go(index-1,true); play(); });
    if(next) next.addEventListener('click', ()=>{ go(index+1,true); play(); });
    root.addEventListener('click', e=>{ const dot = e.target.closest('[data-proof-dot]'); if(dot){ go(parseInt(dot.dataset.proofDot,10)||0,true); play(); } });
    root.addEventListener('pointerenter', pause);
    root.addEventListener('pointerleave', play);
    sliderTrack.addEventListener('touchstart', pause, {passive:true});
    root.addEventListener('focusin', pause);
    root.addEventListener('focusout', e=>{ if(!root.contains(e.relatedTarget)) play(); });
    sliderTrack.addEventListener('touchend', play, {passive:true});
    document.addEventListener('visibilitychange', ()=>{ if(document.hidden) pause(); else play(); });
    window.addEventListener('resize', measure, {passive:true});
    measure();
    play();
  }

  function initHeroSlider(){
    const slider=qs('[data-hero-slider]');
    if(!slider)return;
    const slides=Array.from(slider.querySelectorAll('[data-hero-slide]'));
    const controls=Array.from(slider.querySelectorAll('[data-slide-control]'));
    const number=slider.querySelector('[data-current-slide]');
    if(slides.length<2)return;
    const reduceMotion=window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let active=0;
    let timer=null;
    function showSlide(index,byUser=false){
      active=(index+slides.length)%slides.length;
      slides.forEach((slide,i)=>{
        const on=i===active;
        slide.classList.toggle('is-active',on);
        slide.setAttribute('aria-hidden',String(!on));
      });
      controls.forEach((btn,i)=>{
        const on=i===active;
        btn.classList.toggle('is-active',on);
        btn.setAttribute('aria-current',String(on));
      });
      if(number)number.textContent=String(active+1).padStart(2,'0');
      if(byUser)track('hero_slide_change',{slide:active+1});
    }
    function pause(){if(timer!==null){window.clearInterval(timer);timer=null;}}
    function play(){pause();if(reduceMotion||document.hidden)return;timer=window.setInterval(()=>showSlide(active+1),4800);}
    controls.forEach((btn,i)=>btn.addEventListener('click',()=>{showSlide(i,true);play();}));
    slider.addEventListener('pointerenter',pause);
    slider.addEventListener('pointerleave',play);
    slider.addEventListener('focusin',pause);
    slider.addEventListener('focusout',e=>{if(!slider.contains(e.relatedTarget))play();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();else play();});
    window.addEventListener('pagehide',pause);
    showSlide(0);
    play();
  }
  function normalizeUrl(input){let s=input.trim();if(!s)return null;if(!/^https?:\/\//i.test(s))s='https://'+s;try{let u=new URL(s);if(!/^https?:$/.test(u.protocol)||!u.hostname.includes('.')||u.hostname.includes(' ')||u.hostname.length<4)return null;return u.href}catch{return null}}
  function auditPreview(raw){
    const value=normalizeUrl(raw);
    const error=qs('#audit-error');
    if(!value){if(error)error.textContent=tr('Veuillez indiquer une adresse valide (exemple : votre-site.be).');const input=qs('#audit-url');if(input)input.setAttribute('aria-invalid','true');return;}
    if(error)error.textContent='';const input=qs('#audit-url');if(input)input.removeAttribute('aria-invalid');
    pendingAuditUrl=value;
    track('scan_intent',{url:value});
    openFlow('audit'); // user proceeds to business type (step 2), URL remains attached until WhatsApp
  }
  document.addEventListener('click',e=>{
    const t=e.target;
    if(t.closest('#offers-toggle')){let next=headerMenu.hidden;closeMenus();headerMenu.hidden=!next;offersToggle.setAttribute('aria-expanded',String(next));return;}
    if(t.closest('#mobile-trigger')){const shouldOpen=mobileMenu.hidden;closeMenus();if(shouldOpen)openMobileMenu();return;}
    if(t.closest('[data-mobile-overlay]')||t.closest('[data-close-mobile]')){closeMobileMenu(true);return;}
    if(t.closest('[data-menu-disclosure]')){
      if(menuDisclosure && menuOfferPanel){const show=menuOfferPanel.hidden;menuOfferPanel.hidden=!show;menuDisclosure.setAttribute('aria-expanded',String(show));}
      return;
    }
    if(t.closest('#mobile-menu a')){closeMobileMenu(false);return;}
    if(t.closest('[data-map-toggle]')){const button=t.closest('[data-map-toggle]');const panel=qs('#trust-map');if(!panel)return;const open=panel.hidden;panel.hidden=!open;button.setAttribute('aria-expanded',String(open));if(open){const holder=panel.querySelector('[data-map-holder]');if(holder && !holder.querySelector('iframe')){const iframe=document.createElement('iframe');iframe.title=IS_EN?'Google Maps: Mons service area, Belgium':'Google Maps : zone de service de Mons, Belgique';iframe.loading='lazy';iframe.referrerPolicy='no-referrer-when-downgrade';iframe.src='https://www.google.com/maps?q=Mons%2C+Belgium&output=embed';holder.replaceChildren(iframe);}track('area_map_preview');}return;}
    if(t.closest('[data-social]')){const name=t.closest('[data-social]').dataset.social;const caption=IS_EN?'Official social links will be added when MOOH MEDIA GRP provides and confirms them. No external profile is linked in this design preview.':'Les liens officiels des réseaux sociaux seront ajoutés après validation par MOOH MEDIA GRP. Aucun profil non vérifié n’est lié dans cette maquette.';showDialog(`<div class="dialog-kicker">${IS_EN?'SOCIAL PROFILE · COMING SOON':'RÉSEAU SOCIAL · À CONFIRMER'}</div><h2 id="dialog-title" class="dialog-title">${esc(name.charAt(0).toUpperCase()+name.slice(1))}</h2><p class="dialog-desc">${esc(caption)}</p>`);return;}
    if(t.closest('[data-close-dialog]')){closeDialog();return;}
    if(t.closest('[data-open-flow]')){openFlow();return;}
    if(t.closest('[data-open-comparison]')){compare();return;}
    if(t.closest('[data-flow-preselect]')){openFlow(t.closest('[data-flow-preselect]').dataset.flowPreselect);return;}
    if(t.closest('[data-offer]')){offerPreview(t.closest('[data-offer]').dataset.offer);return;}
    if(t.closest('[data-flow-offer]')){flow.offer=t.closest('[data-flow-offer]').dataset.flowOffer;flowStep=1;renderFlow();return;}
    if(t.closest('[data-flow-more]')){openMore();return;}
    if(t.closest('[data-flow-business]')){flow.business=t.closest('[data-flow-business]').dataset.flowBusiness;flowStep=2;renderFlow();return;}
    if(t.closest('[data-flow-addon]')){flow.addon=t.closest('[data-flow-addon]').dataset.flowAddon;flow.business='autre';flowStep=2;renderFlow();return;}
    if(t.closest('[data-flow-stage]')){flow.stage=t.closest('[data-flow-stage]').dataset.flowStage;flowStep=3;renderFlow();return;}
    if(t.closest('[data-flow-back]')){flowStep=Math.max(0,flowStep-1);renderFlow();return;}
    if(t.closest('[data-wa-final]')){track('whatsapp_click',{offer:flow.offer,business_type:flow.business,stage:flow.stage,page:'home'});return;}
    if(t.closest('[data-wa-more]')){track('whatsapp_click',{offer:'more',stage:t.closest('[data-wa-more]').dataset.waMore,page:'home'});return;}
    if(t.closest('[data-info]')){const kind=t.closest('[data-info]').dataset.info; const names={blog:'Le journal',faq:'Questions fréquentes',cookies:'Préférences de confidentialité'}; const msg=kind==='cookies' ? "Le formulaire de gestion des cookies sera configuré avec Complianz lors de l'intégration WordPress." : 'Cette page ne fait pas partie de la maquette Homepage v10. Le contenu sera créé dans WordPress après validation du design.'; showDialog(`<div class="dialog-kicker">PAGE PRÉVUE · PROTOTYPE</div><h2 id="dialog-title" class="dialog-title">${esc(names[kind]||'Information')}</h2><p class="dialog-desc">${esc(msg)}</p>`);return;}
    if(t.closest('[data-legal]')){const names={mentions:'Mentions légales',privacy:'Politique de confidentialité',terms:"Conditions d'utilisation"};const name=names[t.closest('[data-legal]').dataset.legal];showDialog(`<div class="dialog-kicker">PAGE LÉGALE · À COMPLÉTER</div><h2 id="dialog-title" class="dialog-title">${esc(name)}</h2><p class="dialog-desc">Cette page sera ajoutée pendant le développement WordPress avec le texte légal officiel fourni par le propriétaire. Aucune clause juridique n'a été inventée dans le prototype.</p>`);return;}
    if(t.closest('a[href^="#"]') && mobileMenu && !mobileMenu.hidden)closeMenus();
    if(!t.closest('.nav-with-menu') && !headerMenu.hidden){headerMenu.hidden=true;offersToggle.setAttribute('aria-expanded','false')}
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      if(!backdrop.hidden)closeDialog();
      else if(!mobileMenu.hidden)closeMobileMenu(true);
      else closeMenus();
      return;
    }
    if(e.key==='Tab'&&!mobileMenu.hidden){
      const elements=[...mobileMenu.querySelectorAll('a[href],button:not([disabled])')].filter(x=>x.getClientRects().length && !x.closest('[hidden]'));
      if(!elements.length)return;
      const first=elements[0],last=elements[elements.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
      return;
    }
    if(e.key==='Tab'&&!backdrop.hidden){const elements=[...dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled])')].filter(x=>x.offsetParent!==null);if(!elements.length)return;const first=elements[0],last=elements[elements.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
  });
  initHeroSlider();
  initProofCarousel();
  document.querySelectorAll('[data-lang]').forEach(a=>a.addEventListener('click',()=>{ if(location.hash && /^#[a-z\-]+$/i.test(location.hash)) a.href=a.href.split('#')[0]+location.hash;}));
  const auditForm=qs('#audit-form');if(auditForm)auditForm.addEventListener('submit',e=>{e.preventDefault();auditPreview(qs('#audit-url').value)});
  document.querySelectorAll('.location-map').forEach(a=>a.addEventListener('click',()=>track('area_map')));
})();
