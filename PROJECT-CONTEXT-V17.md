# MOOH MEDIA GRP — Project Context & Design Decisions (v17)

**Date:** 14 November 2026  
**Status:** Internal design review. Neither Homepage nor Audit design is represented as client-approved.

## Source-of-truth materials
- Client master build brief, `moohmedia-master-build-prompt.md`, from the latest `MoohMedia-For-Web-Designer (1).zip`.
- Client `moohmedia-home-wireframe.html`, `moohmedia-whatsapp-flow.md`, `moohmedia-faq-brief.md` and brand assets from that same package.
- Original NexaLance–MOOH project discussion, agreement and the v15 preserved working prototype.
- The client reference site `https://thriveagency.com/` is used only for conversion inspiration, not copied.

## Approval-stage scope — do not expand
Only **Homepage** and **Free Online Visibility Audit** page are to be shown as the initial mockup/design-approval checkpoint. WordPress development and other pages are separate deliverables. Phase 1 first Fiverr order also includes Home, five offer pages, plus Blog Index and Single Post templates; these are not part of the initial two-page review package. The approved direction of the v15 Homepage remains the basis for v17; only mobile/tablet responsive styling and navigation have been refined.

## Brand and UX rules
- Logo: only official MOOH MEDIA GRP artwork supplied in brand kit.
- Colours: Forest `#0C3523`, Flame `#FF4F1A`, Ink `#0A211B`, Light `#F3F6F4` and white. Accent restrained; no fake trust claims or ratings.
- Buttons: 12px radius; premium editorial hierarchy rather than repeated generic cards, arrows or fake dashboards.
- Typography direction: Schibsted Grotesk for headings, Inter for body; production WordPress must self-host licensed/approved font files.
- French is the actual primary language. English files are manually translated demo versions for review, not Polylang deployment.
- Most visitors will be on phones. Responsive tap targets, focus states, clear conversion action and sticky mobile CTA matter more than adding animations.

## Audit page — v16 content/design, refined for mobile in v17
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

## Preserved across iterations
- The Homepage v15 editorial design, desktop Hero, brand, testimonial carousel, pre-footer and footer visual language remain intact.
- The Audit v16 section content, form/report sample, photographic section and CTAs remain intact, with better mobile/tablet presentation.
- The approved Signal Orange art, Forest/Flame colours, photo assets and honest testimonial placeholders remain unchanged.
- Shared `style.css`, `interior.css`, `client-review.css`, `audit-premium.css`, `audit-premium.js` and `i18n.js` remain unchanged; responsive changes live in `responsive-v17.css`. Shared `app.js` adds drawer controls and corrects non-scope offer previews.
- Both customer-facing page destinations are still Home and Free Audit only; offer pages are not introduced into the approval prototype.

## Project risks and pending client inputs
- SEOptimer embed code and confirmed report workflow.
- Verified Google Business Profile links, reviews, certifications and social URLs.
- Final legal copy, full approved FR copy, exact photos from owner.
- WordPress/Kadence development, analytics (post-consent), schema, SEO, Polylang, speed and accessibility verification are future production tasks.

## Baseline v16 browser QA
- Audit FR and EN standalone previews rendered at viewport widths 320, 375, 390, 414, 768, 820, 1024, 1280, 1440, 1920px with no horizontal overflow or JavaScript errors.
- At 1440/390: all images decoded; form present, desktop report tabs interactive; mobile audit sticky CTA present.
- FR URL `https://example.com/cafe?source=test` and EN URL `https://example.com/english` survived Step 2, Step 3 and appeared in the final WhatsApp message. This verifies prototype message construction, not external WhatsApp delivery.
- The entire v15 Homepage and original shared CSS/JS passed byte-comparison to the v15 ZIP source.


## v17 — mobile & tablet final-touch refinement

1. **Header:** replaced plain two-line hamburger with an inline three-line refined menu SVG in a subtle 13px-radius button. The top header keeps the official MOOH mark. Desktop navbar is unchanged.
2. **Off-canvas menu:** custom right-side drawer, premium dark green branding strip, official light-on-dark MOOH logo, rounded close control, translucent blurred overlay, editorial list dividers, expandable Offers submenu, French/English switcher, free audit and WhatsApp CTAs. Menu is keyboard-accessible with Escape closing, tab focus trapping, backdrop click to close, restoration of focus to trigger, and body scroll lock.
3. **Scope safety:** drawer links navigate only to Home, Audit or Home sections. The dropdown mentions first-order services but links to the Homepage offers section rather than nonexistent offer page URLs. Existing `data-offer` service previews now open an in-prototype information modal rather than attempting broken links; no extra customer-facing pages are exposed.
4. **Footer on phones:** `DÉCOUVRIR` / `INFORMATIONS` sit side-by-side 50/50; `RESTONS EN CONTACT` spans 100%; text sizes, spacing and line-break resilience refined; copyright and bottom metadata centered.
5. **Typography hierarchy:** a restrained font scale on mobile and tablet keeps primary section headings visually above subordinate card headings. Homepage and Audit have selective refinements rather than a general redesign.
6. **Touch conversion:** mobile sticky CTA remains visible, while the redundant floating WhatsApp bubble is hidden at <=700px to avoid covering content and footer text. Desktop WhatsApp functionality is unaffected.
7. **Languages:** all four modular pages and their standalone FR/EN equivalents rebuilt with the updated drawer. French is the primary client language; English is a review/demo translation, not production Polylang.
8. **Standalone guarantee:** each START-HERE file embeds CSS, JavaScript and images and runs scripts after markup. All navigation works when the full extracted folder is kept together.

## v17 QA summary
- 24 browser checks covering FR/EN Homepage + Audit at 320, 390, 600, 768, 1024 and 1440px. Zero broken images, horizontal overflow or JavaScript errors in these checks.
- On mobile, tested drawer open/close, offer submenu, Escape and backdrop click, with both languages. Verified 50/50 footer columns and contact full-width.
- Checked the Audit form URL is retained in the WhatsApp final message for FR and EN, and confirmed non-audit offer previews show a working dialog rather than a dead URL.
- Previous v16 SEOptimer report remains an illustrative sample, not a live scan. Real SEOptimer White Label embed and contact unlock need client code and WordPress integration.
- Neither Homepage nor Audit design is represented as client-approved; this is internal review v17.
