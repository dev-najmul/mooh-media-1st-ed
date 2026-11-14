# MOOH Prototype v15 — QA

Scope: two public-facing designs (Homepage and Free Audit) in FR/EN. Homepage v14 content and Audit v14 design preserved except testimonial restoration/controls, version label, and reliable standalone JS loading.

## Checks performed
- V11 testimonial HTML and full CSS block restored as the design baseline.
- No v13/v14 testimonial overrides left. New stylesheet changes are limited to carousel control placement and visibility.
- 3 cards shown on 1440px desktop, 1 on 390px mobile.
- Desktop arrows hidden initially, visible on hover/focus; dot navigation centered below cards.
- Mobile arrows visible for touch (no hover possible), dots remain below cards.
- Manual arrow click moves slides and updates active dot.
- FR + EN: no JavaScript page errors, missing images or horizontal overflow in tested Home layouts.
- Audit FR + EN: page loads, no JavaScript errors, submitted URL remains in WhatsApp-qualification dialog.
- Standalone HTML scripts run at end of DOM rather than executing in head before the dialog exists.
- Footer WhatsApp button still absent; pre-footer WhatsApp CTA remains.

No production SEOptimer scan / GA4 / WordPress integration is implied.
