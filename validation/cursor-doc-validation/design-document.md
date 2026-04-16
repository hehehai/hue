# Warm Engineering Canvas Design Document

## 1. Snapshot

| Field | Value |
|------|-------|
| System | Warm Engineering Canvas |
| Domain | AI development tooling / agent workspace |
| System Type | UI-rich |
| Primary Mode | Light |
| Summary | A light-first design system built from warm paper neutrals, ink-dark typography, oversized pill actions, sparse orange signaling, and polished product-window demos. |

### Design Readout

- The page expression stays warm, pale, and editorial instead of defaulting to dark AI theatrics.
- Accent color exists, but it behaves like a signal rather than a blanket fill strategy.
- Product windows carry most of the prestige, density, and technical proof.
- Typography is unusually restrained: large sizes, flat weight usage, and very little display ornament.
- The overall hierarchy comes from paper-like negative space outside and compact precision inside.

## 2. System Summary

This system sells advanced technical capability without dressing it up as spectacle. It feels measured, calm, and already useful. The page never tries to prove intelligence through effects; it proves it through composed product framing, disciplined type, and a few precise moments of contrast.

The identity comes from system-level contrast. Blank cream space sits next to dense technical demos. A calm grotesk sits next to compact mono detail. Orange appears only when it has meaning.

### Experience Goals

- Make technical capability feel credible and already operational.
- Keep the surface premium without drifting into luxury or lifestyle signaling.
- Let product demos function as proof, not decoration.
- Preserve a developer-native tone through mono detail, utility chrome, and low-theatrics composition.

### Signature Signals

- Warm off-white canvas instead of cold white or dark charcoal
- Ink-dark text and primary pill actions
- Oversized pill geometry for high-intent controls
- Paper-toned cards with almost no border noise
- Product-window demos with concentrated layered shadow
- Sparse orange arrivals for emphasis, recommendation, or status

## 3. Philosophy

This is developer-native marketing without cyberpunk baggage. It replaces dark futurism with warm editorial calm: cream backgrounds, quiet shadows, almost monoweight typography, and just enough orange to mark emphasis.

### Primary Tension

Editorial restraint versus engineering velocity. The system should feel thoughtful and composed while still implying speed, leverage, and serious technical usefulness.

### Design Lineage

- Trust-first developer tooling
- Editorial product marketing with wide margins and strict color discipline
- Paper-like surfaces combined with precise software chrome
- Research-adjacent restraint translated into a commercial UI language

### What This System Is Not

- Not a dark neon AI identity
- Not a cheerful consumer productivity style
- Not a brutal terminal-first system
- Not an accent-heavy orange brand expression

## 4. Design Principles

1. **Paper first, chrome second.** Start from a warm neutral field, then place the technical UI on top of it.
2. **Accent is a signal.** Orange is for emphasis and recommendation, never the default fill language.
3. **Pills mean action.** Strong actions and switchers can be fully rounded; structural surfaces should not all follow.
4. **Weight stays flat.** Hierarchy should come from size, spacing, and placement before weight jumps.
5. **Product windows carry prestige.** Advanced capability should show up as polished software chrome, not abstract hero decoration.
6. **Warm neutrals keep the tool human.** Off-white, beige, and soft taupe prevent the system from becoming sterile.
7. **Technical detail stays embedded.** Mono text and utility labels belong inside demos and controls, not across the whole page.

## 5. Composition Rules

### Layout Density

- The outer layout is spacious, but the inner modules are compact.
- Hero sections should reserve large blank zones before the main product frame arrives.
- Pricing and feature modules can pack tighter because the page-level whitespace already does the calming work.

### Hierarchy Layers

| Layer | Purpose | Typical Treatment |
|------|---------|-------------------|
| Layer 1 | Page-defining conversion line | `52px` to `72px`, weight `400`, ink-dark, no accent dependency |
| Layer 2 | Main section message | `36px`, weight `400`, split between strong line and muted continuation |
| Layer 3 | Feature lead | `26px`, weight `400`, direct and compact |
| Layer 4 | Body and plan detail | `16px`, weight `400`, secondary neutral color |
| Layer 5 | Utility chrome | `14px` and `12px`, often inside pills or product windows |

### Rhythm And Spacing Behavior

- Use large top-level vertical spacing, then tighten dramatically inside modules.
- Align modules to repeated offsets rather than bespoke micro-spacing.
- Keep the page rhythm linear and calm; avoid collage-like overlap.
- Squint test: the page should read as blank paper, strong dark type, then islands of precise product chrome.

### Color Strategy

- Most of the viewport should live inside the neutral system.
- Use dark fills for primary action moments; do not assume accent equals CTA.
- Reserve orange for recommendation, status, or narrative push.
- Keep green, amber, and red primarily semantic.

### Typography Discipline

- Use one calm sans voice across hero, nav, cards, and pricing.
- Avoid relying on many weights; size and placement should do more work.
- Use mono only where the story becomes technical: logs, filenames, inline code, or interface detail.
- Keep line lengths readable and generous.

### Interaction Posture

- Interactions should feel composed and frictionless.
- Hover reads as state change, not delight choreography.
- Pills and toggles may shift softly, but the broader marketing layer stays calm.
- Product demos can feel active; surrounding chrome should remain quiet.

## 6. Token Foundations

### Color System

| Token | Value | Role |
|------|-------|------|
| `background.light` | `#F7F7F4` | Primary paper-like canvas |
| `surface1.light` | `#F2F1ED` | Cards and main windows |
| `surface2.light` | `#EBEAE5` | Supporting surface tint |
| `surface3.light` | `#E6E5E0` | Quiet control fill |
| `text1.light` | `#26251E` | Primary text and dark CTA fill |
| `text2.light` | `rgba(38,37,30,0.60)` | Secondary copy |
| `text3.light` | `rgba(38,37,30,0.55)` | Tertiary technical copy |
| `text4.light` | `rgba(38,37,30,0.40)` | Disabled and low-priority text |
| `accent.light` | `#F54E00` | Sparse emphasis signal |
| `accent_subtle.light` | `#FFF2EB` | Soft accent tint |
| `background.dark` | `#171611` | Derived dark-mode canvas |
| `accent.dark` | `#FF7A3B` | Derived dark-mode accent |

### Semantic Color Guidance

- The background must stay visibly warm. Cold white breaks the tone immediately.
- `text1` doubles as the dark action fill. That shared ink color is important.
- `surface1` and `surface2` should feel cut from the same paper family.
- Accent should appear as a precise arrival, not as a section-wide wash.

### Typography Stacks

| Role | Implementation Family | Observed Character | Why It Fits |
|------|-----------------------|--------------------|-------------|
| Display / System | `Geist` | Neutral grotesk with almost no weight drama | Keeps conversion-focused headlines calm and technical |
| Body / UI | `Geist` | Same voice as display | Makes the whole system read as one measured tone |
| Mono | `JetBrains Mono` | Compact engineering mono | Supports code and technical detail without taking over |

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Use |
|------|------|-------------|----------------|--------|-----|
| `display` | `72px` | `1.1` | `-0.03em` | `400` | Large conversion headlines |
| `h1` | `52px` | `1.15` | `-0.025em` | `400` | Main page titles |
| `h2` | `36px` | `1.2` | `-0.02em` | `400` | Section statements |
| `h3` | `26px` | `1.25` | `-0.012em` | `400` | Module and feature leads |
| `body` | `16px` | `1.5` | `0em` | `400` | Paragraphs and buttons |
| `body-sm` | `14px` | `1.5` | `0em` | `400` | Nav and secondary controls |
| `caption` | `12px` | `1.45` | `0em` | `400` | Product chrome and helper text |
| `label` | `11px` | `1.3` | `0.02em` | `400` | Tiny labels and overlines |

### Spacing

| Token | Value | Use |
|------|-------|-----|
| `2xs` | `2px` | Hairline offsets and tiny inset work |
| `xs` | `4px` | Tight utility spacing |
| `sm` | `8px` | Small gaps and compact pills |
| `md` | `16px` | Default internal spacing |
| `lg` | `24px` | Card padding rhythm |
| `xl` | `32px` | Sectional grouping |
| `2xl` | `48px` | Larger internal breaks |
| `3xl` | `64px` | Hero and section offsets |
| `4xl` | `96px` | Major white-space bands |

### Radii

| Token | Value | Use |
|------|-------|-----|
| `element` | `4px` | Small chips and denser modules |
| `control` | `8px` | Inputs and quieter controls |
| `component` | `10px` | Product demo windows |
| `container` | `16px` | Large grouped surfaces |
| `pill` | `999px` | Primary actions and switchers |

### Elevation

| Attribute | Value |
|----------|-------|
| Strategy | `subtle-product-window` |
| Principle | Page modules stay flat; layered shadow is reserved for prestige product surfaces |
| Hero Window | `0px 28px 70px 0px rgba(0,0,0,0.14), 0px 14px 32px 0px rgba(0,0,0,0.10), 0px 0px 0px 1px rgba(38,37,30,0.10)` |
| Nested Window | `0px 25px 50px -12px rgba(0,0,0,0.25), 0px 12px 24px -8px rgba(0,0,0,0.15), 0px 0px 0px 0.5px rgba(38,37,30,0.10)` |
| Outline | `0 0 0 1px rgba(38,37,30,0.10)` |

### Motion

| Attribute | Value |
|----------|-------|
| Personality | `smooth` |
| Easing | `cubic-bezier(.4, 0, .2, 1)` |
| Fast | `140ms` |
| Standard | `150ms` |
| Slow | `240ms` |

### Mode Strategy

This system is observed as light-first. Dark mode can exist as a derived implementation layer, but it should preserve the same warm-neutral temperature, dark-CTA logic, and sparse accent usage rather than turning into futuristic inversion.

## 7. Hero Stage And Atmosphere

### Observed Hero Stage

The hero is split between calm blank space and a trust-bearing product window. A soft painterly field warms the scene, but it behaves as support material rather than as the main attraction.

| Dial | Value |
|------|-------|
| `background.medium` | `painterly` |
| `background.color_mode` | `brand-tinted-neutral` |
| `background.saturation` | `muted` |
| `background.texture` | `paper` |
| `background.intensity` | `subtle` |
| `hero.subject` | `device` |
| `hero.placement` | `center` |
| `relation.type` | `shadow-only` |

### Background Behavior

- Keep the scenic field soft and partially washed out.
- Let atmosphere warm the scene without becoming a full illustration statement.
- Preserve blank canvas around headline copy.

### Subject Strategy

- Use a polished product window as the main object of trust.
- Keep the frame precise, paper-toned, and quietly premium.
- Let the interface carry proof of capability.

### Hero Restrictions

- Do not replace the product window with an abstract hero object.
- Do not intensify the painterly field until it competes with the interface.
- Do not add neon glow or cinematic gradients.

## 8. Iconography

### Observed Style

The icon language is compact, geometric, and utility-first. Strokes are regular, corners are soft, and the set should feel like interface support rather than illustration.

### Fallback Kit

- Use `Tabler Icons` as the default fallback set.
- Favor outline glyphs at regular weight.
- Keep icons small and secondary unless they are embedded in product chrome.

### Usage Guidance

- Use icons to support navigation, chips, and interface detail.
- Avoid oversized decorative icons on marketing surfaces.
- Pair icons with text labels whenever the action matters.

## 9. Component System

Document observed components first, then derived components. Every section preserves `source: observed` or `source: derived`.

### Buttons

| Component | Basis | Rules |
|----------|--------|-------|
| Primary Pill | Observed | Ink-dark fill, light text, `999px` radius, no shadow, generous horizontal padding |
| Secondary Pill | Observed | Paper-toned fill, dark text, same pill geometry, subtle border |
| Nav Pill | Observed | Transparent or near-transparent shell with hairline border |

### Inputs

| Component | Basis | Rules |
|----------|--------|-------|
| Text Field | Derived | Warm paper surface, `8px` radius, dark text, accent-colored focus border, quiet placeholder |
| Segmented Toggle | Observed | Outer pill shell, inset active track, compact internal spacing |

### Cards And Surfaces

| Component | Basis | Rules |
|----------|--------|-------|
| Pricing Card | Observed | Flat paper surface, compact padding, minimal border noise |
| Product Window | Observed | `10px` radius, hairline border, layered prestige shadow |

### Lists And Navigation

| Component | Basis | Rules |
|----------|--------|-------|
| Top Navigation | Observed | Low-theatrics text links plus a few pill actions |
| Code Chip | Observed | Compact capsule with mono-friendly content and quiet border |

### Tags, Toggles, Progress, And Status Patterns

- Use accent sparingly for recommendation or active emphasis.
- Keep semantic colors primarily inside product-adjacent or status-bearing contexts.
- Avoid turning every badge into a chromatic object.

### Overlays And Transient UI

- Derived overlays should stay inside the same paper family.
- Use `16px` container radius at most.
- Prefer border plus background change over ambient drop shadow.

### Empty, Loading, Error, And Disabled States

- Empty states should lean on calm copy and compact product framing rather than illustration-heavy treatment.
- Loading states should feel infrastructural, not playful.
- Error states may use red, but only at signal strength.
- Disabled states should reduce contrast, not add ornament.

## 10. Implementation Guidance

### CSS Variables

- Use `--background`, `--surface-1`, `--surface-2`, `--surface-3`, `--text-1` through `--text-4`, and `--accent`.
- Keep the ink-dark action fill mapped to the same tone as `--text-1`.

### Tailwind Mapping

- Map warm neutral tokens to `canvas`, `surface`, and `ink` aliases.
- Treat the accent as a signal token, not as the default primary fill utility.
- Preserve separate utilities for `pill`, `control`, and `window` radii.

### SwiftUI Mapping

- Use `Color("Background")`, `Color("Surface1")`, and `Color("Accent")`.
- Prefer `RoundedRectangle(cornerRadius: 999, style: .continuous)` for action pills.
- Product windows should use a dedicated shadow token rather than generic `.shadow`.

### Asset And Fallback Strategy

- Use open grotesk and mono fallbacks rather than proprietary source assets.
- Treat painterly support graphics as replaceable atmosphere, not as the core identity.
- Product screenshots should be swappable without breaking the layout system.

### Delivery Notes

- The page should still read correctly in low-content states because the spacing model does real work.
- If one choice must be preserved, preserve the relation between warm paper canvas and polished product window.

## 11. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | `<479px` | Fully stacked layout, hero copy near `28px`, cropped product viewport |
| Mobile | `479-640px` | Single column, collapsed nav, stacked CTAs and pricing cards |
| Large Mobile | `640-767px` | Wider single-column rail |
| Tablet | `768-991px` | Selective two-column sections, condensed nav |
| Desktop | `992px+` | Full split hero and expanded navigation |

### Touch Targets

- Keep all actionable pills at or above `44x44px`.
- Let clickable cards act as large touch targets when practical.
- Do not shrink nav rows below thumb-safe height even when the visual chrome is compact.

### Collapsing Strategy

- Hero copy and product demo stack vertically on narrow screens.
- Side-by-side feature modules collapse into a single calm column.
- Pricing cards stack rather than squeeze.
- Maintain generous top-level spacing even while reducing section padding.

### Image Behavior

- Product windows scale proportionally inside their rounded shells.
- Painterly support fields may crop, but their warmth and softness should remain.
- Preserve interface legibility before atmosphere.

## 12. Do's And Don'ts

### Do

- Use warm paper neutrals like `#F7F7F4` as the default page canvas.
- Use ink-dark pills for primary CTAs instead of accent-filled buttons.
- Keep hierarchy in scale and spacing before weight.
- Reserve layered shadows for prestige product-window demos.
- Use mono only for code and technical chrome.
- Let the product window be the most detailed object on the page.

### Don't

- Don't fill primary CTAs with orange by default.
- Don't switch the system into a dark sci-fi AI aesthetic.
- Don't use bright white page backgrounds.
- Don't build hierarchy through repeated heavy bold weights.
- Don't turn every navigation item into a pill.
- Don't replace product demos with abstract shapes when capability must be shown.

## 13. Anti-Patterns

- No cold blue-white background canvas.
- No full-surface accent fills on core marketing sections.
- No heavy bold display typography.
- No plush consumer-style card radius on structural surfaces.
- No cinematic glow or glassmorphism on standard modules.
- No decorative hero object that outranks the product window.

## 14. Iteration Heuristics

### Safe Adjustments

- Warm or cool the neutral ramp slightly while preserving the paper family.
- Increase or decrease accent visibility without changing the dark-CTA rule.
- Tune product-window shadow strength while keeping page-level surfaces flat.

### High-Risk Changes

- Changing the primary expression to pure white or dark mode.
- Turning accent into the main fill color for actions and cards.
- Removing pill geometry from the action system.

Keep the system readable as calm paper first, technical proof second.
