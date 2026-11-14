/* MOOH Phase 1 interior prototype interactions. No live submission/integrations. */
(() => {
  'use strict';
  const form=document.querySelector('#contact-prototype-form');
  if(form){
    form.addEventListener('submit',(event)=>{
      event.preventDefault();
      const status=document.querySelector('#contact-form-status');
      if (!form.checkValidity()) {
        status.textContent=document.documentElement.lang==='fr'?'Veuillez compléter les trois champs avec une adresse e-mail valide.':'Please complete all three fields with a valid email address.';
        form.reportValidity();return;
      }
      status.textContent=document.documentElement.lang==='fr'?'Maquette uniquement : votre demande n’a PAS été envoyée. La page de confirmation est disponible pour prévisualisation.':'Preview only: your enquiry was NOT sent. The confirmation page can be opened separately.';
      status.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
  }
})();
