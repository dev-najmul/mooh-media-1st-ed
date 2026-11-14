# MOOH MEDIA GRP — Project Context & Design Decisions (v16)

**Date:** 14 November 2026  
**Status:** Internal design review. Neither Homepage nor Audit design is represented as client-approved.

## Source-of-truth materials
- Client master build brief, `moohmedia-master-build-prompt.md`, from the latest `MoohMedia-For-Web-Designer (1).zip`.
- Client `moohmedia-home-wireframe.html`, `moohmedia-whatsapp-flow.md`, `moohmedia-faq-brief.md` and brand assets from that same package.
- Original NexaLance–MOOH project discussion, agreement and the v15 preserved working prototype.
- The client reference site `https://thriveagency.com/` is used only for conversion inspiration, not copied.

## Approval-stage scope — do not expand
Only **Homepage** and **Free Online Visibility Audit** page are to be shown as the initial mockup/design-approval checkpoint. WordPress development and other pages are separate deliverables. Phase 1 first Fiverr order also includes Home, five offer pages, plus Blog Index and Single Post templates; these are not part of the initial two-page review package. The approved direction of the v15 Homepage is held unchanged in this v16 prototype.

## Brand and UX rules
- Logo: only official MOOH MEDIA GRP artwork supplied in brand kit.
- Colours: Forest `#0C3523`, Flame `#FF4F1A`, Ink `#0A211B`, Light `#F3F6F4` and white. Accent restrained; no fake trust claims or ratings.
- Buttons: 12px radius; premium editorial hierarchy rather than repeated generic cards, arrows or fake dashboards.
- Typography direction: Schibsted Grotesk for headings, Inter for body; production WordPress must self-host licensed/approved font files.
- French is the actual primary language. English files are manually translated demo versions for review, not Polylang deployment.
- Most visitors will be on phones. Responsive tap targets, focus states, clear conversion action and sticky mobile CTA matter more than adding animations.

## v16 Free Audit — redesigned from the client brief
The Audit page is the **free, no-obligation entry point**. The owner wants a technical instant scan from SEOptimer, followed by contact details to unlock the branded report, then two possible follow-ups: request a complete free visibility review or discuss findings on WhatsApp. It must consider four areas: Google Business Profile, customer reviews, website, and local competitors. A general WhatsApp offer flow is *secondary* to the audit input on this page.

Design modules in v16:
1. Compact Forest/Flame Hero with primary audit action and first-screen website/Google profile URL entry.
2. Four editorial coverage areas (Google, reviews, website, competitors) using clear labels rather than inflated scores.
3. Interactive **illustrative report presentation**, with Google/Reviews/Website/Local tabs; prominently states it contains no actual scanned data.
4. Local-business photographic story, grounded in Mons/Hainaut/Wallonia/Brussels.
5. Three-step explanation: share one link → see scan/retrieve branded report after future integration → choose follow-up freely.
6. Two next-step CTAs (full free review / WhatsApp conversation), preserving the offer selection.
7. Five plain-language audit FAQ entries based on the client FAQ brief.
8. Mobile first: sticky **Start free audit** primary CTA and WhatsApp secondary, 44px+ targets, responsive report and form.

### Prototype-specific limitation
A real SEOptimer scan **is not operating in the prototype**. The client must provide the approved White Label & Embedding code and the WordPress integration must supply the actual scan, report and contact-unlock functionality. The prototype audit URL input demonstrates lead qualification: after submission, the existing WhatsApp flow starts at **Step 2 of 3** and the submitted URL remains attached to the eventual prefilled WhatsApp message. All illustrative report content is sample methodology, not an actual score, rating, Google search result, or client case study. No data is transmitted to MOOH from the HTML form itself.

## Preserved from v15
- Homepage modular `index.html` / `index-en.html` and standalone FR/EN files byte-for-byte unchanged.
- Original v11 testimonial cards as restored in v15, hover-only desktop arrows, visible mobile arrows/dots, and centered dots.
- Homepage pre-footer, Footer, official orange Signal visual, social placeholders and navigation unchanged.
- Shared `assets/js/app.js`, `assets/js/i18n.js`, `assets/css/style.css` and `assets/css/client-review.css` unchanged.
- `audit-premium.css` and `audit-premium.js` are strictly loaded only by Audit pages.

## Project risks and pending client inputs
- SEOptimer embed code and confirmed report workflow.
- Verified Google Business Profile links, reviews, certifications and social URLs.
- Final legal copy, full approved FR copy, exact photos from owner.
- WordPress/Kadence development, analytics (post-consent), schema, SEO, Polylang, speed and accessibility verification are future production tasks.

## v16 browser QA
- Audit FR and EN standalone previews rendered at viewport widths 320, 375, 390, 414, 768, 820, 1024, 1280, 1440, 1920px with no horizontal overflow or JavaScript errors.
- At 1440/390: all images decoded; form present, desktop report tabs interactive; mobile audit sticky CTA present.
- FR URL `https://example.com/cafe?source=test` and EN URL `https://example.com/english` survived Step 2, Step 3 and appeared in the final WhatsApp message. This verifies prototype message construction, not external WhatsApp delivery.
- The entire v15 Homepage and original shared CSS/JS passed byte-comparison to the v15 ZIP source.
