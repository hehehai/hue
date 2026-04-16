# Ambient Trust Canvas Design Document

## 1. Snapshot

| Field | Value |
|------|-------|
| System | Ambient Trust Canvas |
| Domain | Enterprise AI platform / workplace AI / model products |
| System Type | UI-rich |
| Primary Mode | Light |
| Summary | A light-first enterprise AI system built from a near-white canvas, ink-dark pill CTAs, cobalt signal accents, and soft synthetic atmospheric gradients. |

### Design Readout

- The system opens on a very blank white field rather than an AI-spectacle hero.
- Primary conversion moments are carried by dark pill buttons, not brand-color fills.
- Headline typography feels soft-technical rather than hard industrial.
- Cobalt appears as a signal color for links and selected states, not as an environmental wash.
- Coral, violet, cobalt, and mint show up inside sculptural gradient panels that support the page instead of dominating it.

## 2. System Summary

This system is designed to make advanced AI feel deployable, credible, and enterprise-safe. It does that through restraint first: open white space, disciplined typography, and a limited action grammar. Atmosphere only arrives after trust is established.

The identity comes from the contrast between clinical clarity and synthetic softness. Most of the page feels quiet and boardroom-ready, while a few large gradient objects suggest future-facing capability without pushing the experience into sci-fi theater.

### Experience Goals

- Make enterprise AI feel practical before it feels visionary.
- Keep the site premium without leaning on luxury cues.
- Let large type and CTA geometry do the persuasive work.
- Use atmospheric color only where it adds memorability.
- Preserve a clear distinction between primary action, secondary action, and narrative support.

### Signature Signals

- Near-white page canvas
- Ink-dark pill CTAs
- Soft-technical display sans paired with a quiet UI sans
- Cobalt used for signal and selected state
- White shadowless cards with subtle borders
- Multihue sculptural gradients used as modular support fields

## 3. Philosophy

This is a trust-first enterprise system with a restrained future-facing layer. It avoids the usual AI-brand move of making the whole page atmospheric. Instead, it keeps the structural layer simple and legible, then introduces soft synthetic color only in bounded modules.

### Primary Tension

Enterprise order versus gentle futurism. The system should feel safe enough for a procurement conversation and fresh enough to signal technical ambition.

### Design Lineage

- High-trust enterprise marketing
- Modern neo-grotesk SaaS systems
- Soft-technical geometric typography
- Synthetic 3D or painterly gradient objects used as supporting atmosphere

### What This System Is Not

- Not a dark neon AI identity
- Not a loud gradient-first landing page
- Not a playful consumer app style
- Not a heavy editorial or luxury serif system

## 4. Design Principles

1. **Trust starts blank.** Open with a bright neutral field before introducing atmosphere.
2. **Primary action is ink, not accent.** The main CTA should be dark and unmistakable.
3. **Accent stays narrow.** Cobalt is for links, selected states, and focused signals, not for environmental fill.
4. **Atmosphere is modular.** Synthetic gradients belong inside bounded support panels, not behind everything.
5. **Weight stays calm.** Large type does the heavy lifting before bold weights do.
6. **Cards stay flat.** White cards should separate through border and contrast, not through shadow stacks.
7. **Soft futurism needs edges.** The page can feel futuristic, but only if the structural layer remains highly ordered.

## 5. Composition Rules

### Layout Density

- Outer layout should feel spacious and enterprise-clean.
- Inner modules can tighten, but they should not become dashboard-dense.
- Reserve the most complex visual treatment for a few large support slabs instead of many small flourishes.

### Hierarchy Layers

| Layer | Purpose | Typical Treatment |
|------|---------|-------------------|
| Layer 1 | Hero statement | `56px` to `72px`, regular weight, dark text, centered or broadly framed |
| Layer 2 | Section anchor | `36px`, regular weight, still mostly dark text on white |
| Layer 3 | Card or feature lead | `24px`, regular weight, calm and precise |
| Layer 4 | Body and navigation | `16px` and `14px`, quiet grotesk, no unnecessary emphasis |
| Layer 5 | Signal state | Cobalt underline, arrow suffix, or selected-line treatment |

### Rhythm And Spacing Behavior

- Let the page breathe at section level.
- Keep CTA clusters compact and centered.
- Use repeated spacing steps rather than expressive one-off offsets.
- Squint test: the page should read as white field, dark type, dark pill, then a few large color events.

### Color Strategy

- White and near-white should dominate the viewport.
- Use dark neutrals for the primary action system.
- Use cobalt sparingly for focused attention.
- Keep coral, violet, and mint inside support graphics rather than UI chrome.

### Typography Discipline

- Headlines use a soft-technical display face with generous width and low weight drama.
- Body UI uses a quieter neo-grotesk that does not compete with the display layer.
- Avoid bold-heavy hierarchy. Scale and whitespace should do more work.
- Do not introduce decorative typography on standard enterprise surfaces.

### Interaction Posture

- Motion should feel polished, quiet, and predictable.
- Primary actions should feel immediate, not playful.
- Secondary actions can use underline or arrow logic instead of shells.
- Selected states should be line-based before they become pill-based.

## 6. Token Foundations

### Color System

| Token | Value | Role |
|------|-------|------|
| `background.light` | `#FFFFFF` | Primary page canvas |
| `surface1.light` | `#FCFCFB` | Card and field base |
| `surface2.light` | `#F7F7F6` | Supporting white-on-white separation |
| `surface3.light` | `#EFEFED` | Quiet neutral fill |
| `text1.light` | `#17171C` | Primary headline and CTA fill |
| `text2.light` | `#212121` | Secondary dark text |
| `text3.light` | `#75758A` | Support copy |
| `text4.light` | `#93939F` | Muted labels and placeholders |
| `accent.light` | `#2D4CB9` | Focused interactive signal |
| `accent_subtle.light` | `#EEF3FF` | Light signal tint |
| `coral.500` | `#FF7A5C` | Atmospheric support hue |
| `violet.500` | `#C68BFF` | Atmospheric support hue |
| `mint.500` | `#5FAF92` | Atmospheric support hue |

### Semantic Color Guidance

- The page should still work if all atmospheric panels are removed.
- `text1` and the main CTA fill should stay the same dark value family.
- `accent` is a signal color, not a brand wash.
- Atmospheric hues should rarely appear in pure UI components.

### Typography Stacks

| Role | Implementation Family | Observed Character | Why It Fits |
|------|-----------------------|--------------------|-------------|
| Display / System | `Space Grotesk` | Soft-technical geometric headline voice | Feels future-facing without becoming hard-edged |
| Body / UI | `Inter` | Quiet enterprise neo-grotesk | Keeps the structural layer clear and neutral |
| Mono | `JetBrains Mono` | Optional technical fallback | Useful for implementation contexts without entering the main visual voice |

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Use |
|------|------|-------------|----------------|--------|-----|
| `display` | `72px` | `1.05` | `-0.04em` | `400` | Oversized hero statements |
| `h1` | `56px` | `1.08` | `-0.035em` | `400` | Primary page messages |
| `h2` | `36px` | `1.15` | `-0.025em` | `400` | Section anchors |
| `h3` | `24px` | `1.2` | `-0.015em` | `400` | Card and feature titles |
| `body` | `16px` | `1.5` | `0em` | `400` | Paragraphs and CTA labels |
| `body-sm` | `14px` | `1.45` | `0em` | `400` | Navigation and metadata |
| `caption` | `12px` | `1.4` | `0.01em` | `400` | Helper text and legal copy |
| `label` | `11px` | `1.25` | `0.08em` | `400` | Overlines and tiny labels |

### Spacing

| Token | Value | Use |
|------|-------|-----|
| `2xs` | `2px` | Hairline alignment nudges |
| `xs` | `4px` | Tiny gaps and line treatments |
| `sm` | `8px` | Small UI separation |
| `md` | `16px` | Body spacing and compact controls |
| `lg` | `24px` | Card padding and CTA grouping |
| `xl` | `32px` | Section-level grouping |
| `2xl` | `48px` | Larger visual breaks |
| `3xl` | `64px` | Major hero spacing |
| `4xl` | `96px` | Large white-space bands |

### Radii

| Token | Value | Use |
|------|-------|-----|
| `element` | `4px` | Small signal elements and line-based controls |
| `control` | `10px` | Inputs and quieter shell controls |
| `component` | `12px` | White cards and atmospheric panels |
| `container` | `12px` | Larger grouped surfaces |
| `pill` | `999px` | Primary and inverse CTAs |

### Elevation

| Attribute | Value |
|----------|-------|
| Strategy | `flat-atmospheric` |
| Principle | Standard surfaces stay shadowless; large support slabs provide depth |
| Card Outline | `0 0 0 1px rgba(23,23,28,0.06)` |
| Low Lift | `0px 2px 8px rgba(23,23,28,0.04)` |
| Atmospheric Media | `none` |

### Motion

| Attribute | Value |
|----------|-------|
| Personality | `smooth` |
| Easing | `cubic-bezier(.4, 0, .2, 1)` |
| Fast | `140ms` |
| Standard | `180ms` |
| Slow | `260ms` |

### Mode Strategy

This system is light-first. A dark mode can exist as a secondary expression, but it should remain highly restrained and should not turn the whole product into a glowing AI interface.

## 7. Hero Stage And Atmosphere

### Observed Hero Stage

The hero itself is mostly empty: a bright white field, a very large headline, and a dark pill CTA. Colorful atmosphere appears nearby or just below, usually as sculptural support rather than as a literal background behind the text.

| Dial | Value |
|------|-------|
| `background.medium` | `absent` |
| `background.color_mode` | `palette` |
| `background.texture` | `grain` |
| `background.intensity` | `subtle` |
| `hero.subject` | `composition` |
| `hero.placement` | `edge-right` |
| `relation.type` | `flat` |

### Background Behavior

- Keep the core hero field blank and bright.
- Let color objects arrive at the periphery or in adjacent modules.
- Avoid turning the whole page into an ambient gradient scene.

### Subject Strategy

- Use sculptural, synthetic, multihue objects or gradient slabs as support material.
- Keep those objects soft-edged and slightly grainy rather than glossy and hard.
- Let the content layer remain more important than the atmosphere layer.

### Hero Restrictions

- Do not put bright gradient clouds directly behind the main headline.
- Do not replace the blank trust canvas with a saturated hero wash.
- Do not make the atmospheric object more dominant than the CTA cluster.

## 8. Iconography

### Observed Style

The icon language is rounded, low-drama, and utility-first. It supports navigation and disclosure without pushing a strong mechanical or playful personality.

### Fallback Kit

- Use `Material Symbols Rounded` as the default open fallback.
- Favor compact rounded glyphs and filled or mixed treatment over sharp outline sets.
- Keep icons small and secondary to text.

### Usage Guidance

- Use icons to support disclosure, direction, and small utility signals.
- Avoid large decorative icon moments.
- Pair icons with labels whenever they carry important action meaning.

## 9. Component System

Document observed components first, then derived components. Every section preserves `source: observed` or `source: derived`.

### Buttons

| Component | Basis | Rules |
|----------|-------|-------|
| Primary Pill | Observed | Dark fill, white text, `49px` height, generous horizontal padding, fully rounded shell |
| Inverse Pill | Observed | White fill on atmospheric or darker support zones, same pill geometry |
| Secondary Link | Observed | Text-first action with underline or arrow cue, no shell |

### Inputs

| Component | Basis | Rules |
|----------|-------|-------|
| Text Field | Observed | White surface, subtle border, `10px` radius, cobalt focus state |
| Support Field | Derived | Same structural rules, no added shadows, no filled accent states |

### Cards And Surfaces

| Component | Basis | Rules |
|----------|-------|-------|
| White Card | Observed | White background, `12px` radius, subtle border, no shadow |
| Atmospheric Panel | Observed | `12px` radius, sculptural multihue support field, edge-anchored composition |
| Support Drawer | Derived | White overlay shell, thin border, same card geometry |

### Lists And Navigation

| Component | Basis | Rules |
|----------|-------|-------|
| Navigation Link | Observed | Plain text link, low visual drama, no pill shell by default |
| Tab Selector | Observed | Text labels with line-based selected state |
| Drawer Rows | Derived | White flat rows with clear alignment and small utility icons |

### Tags, Toggles, Progress, And Status Patterns

- Prefer line-based selected states before filled chips.
- Keep status colors semantic and rare.
- Avoid colorful pills as a default metadata pattern.

### Overlays And Transient UI

- Derived overlays should look like white cards, not dark command palettes.
- Keep borders subtle and corners soft but not plush.
- Use shadow sparingly or not at all.

### Empty, Loading, Error, And Disabled States

- Empty states should feel bright, clean, and enterprise-neutral.
- Loading states should be quiet and line-based.
- Error states can use red, but only as a signal.
- Disabled states should fade through neutral contrast reduction, not opacity tricks alone.

## 10. Implementation Guidance

### CSS Variables

- Use `--background`, `--surface-1`, `--surface-2`, `--surface-3`, `--text-1` through `--text-4`, and `--accent`.
- Keep atmospheric hues separate from the core semantic UI variables.
- Treat the primary CTA fill as a dark neutral token, not as `--accent`.

### Tailwind Mapping

- Map the bright canvas into `bg-canvas` and white cards into `bg-surface`.
- Keep `accent` utilities for link, underline, and selected-state logic.
- Separate `rounded-card` from `rounded-pill`.

### SwiftUI Mapping

- Use named colors like `Color("Background")`, `Color("TextPrimary")`, and `Color("Accent")`.
- Build primary CTAs with `.clipShape(Capsule())`.
- Keep atmospheric panels in dedicated views rather than mixing their colors into base components.

### Asset And Fallback Strategy

- Use open display and body sans fallbacks rather than proprietary brand fonts.
- Treat sculptural gradients as swappable support assets.
- Preserve the structural system even if all atmospheric graphics are removed.

### Delivery Notes

- If the system starts to feel too generic, increase atmosphere slightly before changing core typography.
- If the system starts to feel too loud, remove color fields before touching the CTA or headline logic.

## 11. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | `<479px` | Display scales toward `30px`, CTA may go full-width, atmosphere crops to edges |
| Mobile | `479-640px` | Single-column layout, drawer nav, tabs wrap or scroll |
| Large Mobile | `640-767px` | Wider single-column rail with larger support panels |
| Tablet | `768-991px` | Two-column feature layouts begin, atmosphere re-expands |
| Desktop | `992px+` | Wide hero, full nav, large modular atmosphere zones |

### Touch Targets

- Keep primary CTA pills at `44x44px` or larger.
- Expand tap areas for text-only links when needed.
- Preserve thumb-friendly drawer rows and tabs.

### Collapsing Strategy

- Hero headline and CTA stack above any supporting atmosphere.
- Feature cards collapse into a single-column feed.
- Tabs wrap or scroll before they change interaction style.
- Large sculptural panels crop at the edges rather than shrinking into tiny centered objects.

### Image Behavior

- Atmospheric panels should crop proportionally and remain edge-anchored.
- White cards should preserve border and radius while shrinking.
- Do not swap to a completely different art direction on mobile.

## 12. Do's And Don'ts

### Do

- Use a near-white canvas as the default environment.
- Use ink-dark pill buttons for primary calls to action.
- Use cobalt as a focused signal, not as a page-wide brand wash.
- Keep sculptural gradients modular and edge-anchored.
- Keep typography mostly regular-weight and let scale do the hierarchy work.
- Keep cards shadowless and rely on clean separation instead.

### Don't

- Don't flood the whole page with gradients.
- Don't turn every secondary action into an outlined pill.
- Don't use saturated blue as the main fill color for CTAs.
- Don't introduce sharp brutalist corners on the main card system.
- Don't use heavy drop shadows to create depth.
- Don't swap the calm body sans for an expressive editorial body face.

## 13. Anti-Patterns

- No full-page aurora or mesh background behind all content.
- No accent-colored primary button system.
- No glassmorphism or translucent frosted panels.
- No sharp `0px` card corners on core content modules.
- No ultra-bold display weights as the default hero style.
- No dark-mode inversion as the primary expression.
- No decorative gradients that outrank the headline and CTA.
- No dense dashboard chrome on the marketing layer.

## 14. Iteration Heuristics

### Safe Adjustments

- Tune the warmth of the white and gray ramp while keeping the page visually bright.
- Shift the cobalt signal slightly warmer or cooler without changing CTA fill behavior.
- Increase or decrease the visibility of the atmospheric panels while keeping them modular.

### High-Risk Changes

- Turning the blue accent into the default fill for primary actions.
- Making the page globally atmospheric instead of mostly blank.
- Replacing the pill CTA system with squared or heavily outlined buttons.

Keep the experience feeling trustworthy first and futuristic second.
