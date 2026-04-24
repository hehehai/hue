---
version: alpha
name: Warm Engineering Canvas
description: Calm product-led design system with warm paper neutrals, restrained accent signaling, and polished software-window framing.
colors:
  primary: "#26251E"
  secondary: "#EBEAE5"
  tertiary: "#F54E00"
  neutral: "#F7F7F4"
  border: "#C9C5BC"
  on-primary: "#F7F7F4"
  on-surface: "#26251E"
typography:
  headline-display:
    fontFamily: Geist
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: 8px
  md: 16px
  full: 999px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 64px
components:
  page-shell:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    padding: 24px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: 12px
  card-surface:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 24px
  input-default:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 12px
  accent-inline:
    textColor: "{colors.tertiary}"
    padding: 8px
  divider-line:
    backgroundColor: "{colors.border}"
    height: 1px
    width: 100%
---

## Overview

Warm Engineering Canvas is a restrained, product-led system that replaces AI-futurist theatrics with calm editorial trust. The UI should feel warm, precise, and quietly premium, with product windows carrying the visual proof instead of decorative spectacle.

## Colors

The palette is rooted in warm neutrals and one sparse signal accent.

- **Primary (#26251E):** Ink-dark text and primary CTA fill.
- **Secondary (#EBEAE5):** Quiet grouped surfaces and supporting panels.
- **Tertiary (#F54E00):** The sole signal accent, used sparingly for emphasis and focus.
- **Neutral (#F7F7F4):** Paper-toned page foundation, softer than pure white.
- **Surface (#F2F1ED):** Muted card and container surface.
- **Border (#C9C5BC):** Soft structural line for quiet separation.

## Typography

The type strategy uses one calm grotesk for nearly everything, with mono reserved for precise technical detail.

- **Display:** Geist with low weight drama and tight tracking for large page statements.
- **Body:** Geist at standard reading sizes with relaxed leading.
- **Labels / Utility:** JetBrains Mono only for code, technical metadata, and utility chrome.

## Layout

Use contained widths, large negative space, and one strong media object rather than many competing cards. Let software windows and screenshots carry the visual drama. Collapse multi-column layouts below 768px and preserve legibility before atmosphere on small screens.

## Elevation & Depth

Depth should stay restrained. Large product windows may use soft layered shadow to concentrate credibility, but most panels should feel inset into the paper-toned page instead of floating above it.

## Shapes

The shape language mixes pill-based actions with softly rounded surfaces.

- Primary and secondary actions use fully rounded pill geometry.
- Cards and grouped surfaces use moderate radii.
- Inputs stay calmer and slightly tighter than the action language.

## Components

Component tokens are visual recipes: values describe the perceived fill, shape, depth, and state behavior rather than a single DOM node's computed style.

- **Buttons:** Dark pill primary actions and quiet neutral secondary actions. Avoid accent-filled buttons as the default.
- **Cards:** Low-elevation neutral panels used sparingly, mainly to frame proof or grouped content.
- **Inputs:** Border-first, calm, label-above fields with restrained focus treatment.
- **Navigation:** Thin, text-led, almost editorial, with one high-intent action.

## Do's and Don'ts

- Do keep most of the page inside the warm-neutral family.
- Do use the dark ink color for primary actions before reaching for the accent.
- Do let product windows and screenshots carry the prestige.
- Don't use neon glows or chromatic outer shadows.
- Don't turn the accent into a blanket fill color.
- Don't use equal 3-column feature-card rows as the main composition.
- Don't introduce cold-white or cool-gray surfaces that break the warm palette.
- Don't replace product proof with generic hype or decorative hero effects.
