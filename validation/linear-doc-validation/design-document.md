# Operational Midnight Grid Design Document

## 1. Snapshot

| Field | Value |
|------|-------|
| System | Operational Midnight Grid |
| Domain | Product planning / issue tracking / team operations |
| System Type | UI-rich |
| Primary Mode | Dark |
| Summary | A dark-first operational design system built from near-black neutrals, compact control geometry, restrained indigo signaling, and product-shell-first composition. |

### Design Readout

- The identity is carried by product framing, not by decorative atmosphere.
- The page stays nearly monochrome until a small indigo signal is needed.
- Corners are compact across the system, then jump to full pills only in contextual controls.
- Border contrast and inset strokes do more work than soft shadow.
- A serif voice exists, but only as an editorial interrupt.

## 2. System Summary

This system is designed to feel fast, precise, and already under control before the user interacts with it. It communicates that by stripping away decoration, compressing chrome, and letting the embedded product shell do most of the persuasion.

The experience is intentionally asymmetric. Most of the system is infrastructural and tightly controlled, but a few editorial surfaces briefly widen the emotional range. That contrast adds intelligence without softening the primary operational posture.

### Experience Goals

- Make the product feel organized and reviewable at first glance.
- Make advanced coordination work feel operational rather than experimental.
- Keep the interface visually fast through low ornament and compact geometry.
- Use editorial moments sparingly so they feel authored rather than decorative.
- Preserve a premium dark-mode feel without glow, glass, or cinematic gradients.

### Signature Signals

- Near-black canvas with cool, controlled neutrals
- Indigo used as signal, not environmental wash
- Dense sans-first hierarchy
- Border-led and inset-led depth instead of plush shadow
- Full pill geometry only in contextual selectors and filters
- Occasional serif interruption for reflective narrative surfaces

## 3. Philosophy

This system is not trying to look expressive on every surface. Its identity comes from control: near-black backgrounds, white type, tiny corners in dense product chrome, and almost no decorative background interference behind the core product window.

### Primary Tension

Operational severity versus editorial intelligence. The main experience should feel machined and immediate; the editorial layer should feel reflective and authored.

### Design Lineage

- High-discipline operational software
- Dark UI with minimal atmospheric treatment
- Swiss-like hierarchy control applied to product marketing
- Editorial longform used as a side-channel rather than as the main face

### What This System Is Not

- Not a glow-forward AI identity
- Not a plush productivity system with soft consumer corners
- Not a gradient-heavy landing-page language
- Not a serif-first editorial system

## 4. Design Principles

1. **Product before scenery.** The product shell is the hero; the background should never compete with it.
2. **Signal color is scarce.** Indigo is used as a sharp signal, not as a blanket fill strategy.
3. **Corners are precise.** Most controls live in the `4px` to `6px` range; softness is engineered, not plush.
4. **Depth comes from framing.** Borders, inset strokes, and tiny stacks beat atmospheric shadow.
5. **Type carries hierarchy.** Scale, weight, and spacing do the heavy lifting before color does.
6. **Pills are contextual.** Some filters and selectors can become fully rounded; the whole system should not.
7. **Editorial serif is a side-channel.** Serif moments are intentional interruptions, not a second full design system.

## 5. Composition Rules

### Layout Density

- Default density is compact-to-medium, never airy by default.
- Product-facing blocks should feel tightly resolved, with spacing increments recurring through `8px`, `16px`, and `24px`.
- Large empty space appears at section level, not inside controls.

### Hierarchy Layers

| Layer | Purpose | Typical Treatment |
|------|---------|-------------------|
| Layer 1 | Page-defining statement | Large sans headline or occasional editorial serif interruption |
| Layer 2 | Section structure | White or near-white type with no accent dependence |
| Layer 3 | Product explanation | Secondary neutral text with controlled line length |
| Layer 4 | Utility chrome | Small labels, nav items, and metadata at `13px` or below |
| Layer 5 | State signal | Indigo, green, amber, or red used only when necessary |

### Rhythm And Spacing Behavior

- Use small repeating intervals. Consistency matters more than flourish.
- Group by alignment first, then by border or surface shifts.
- Let major section spacing feel architectural; keep component internals tight.
- Squint test: the page should read as stable blocks and clear text bands, not floating decorative cards.

### Color Strategy

- Treat neutral contrast as the default hierarchy engine.
- Use indigo for active, selected, or signal-bearing states, not for whole sections.
- Keep success, warning, and error colors semantic only.
- Avoid multiple chromatic arrivals in the same viewport unless the product itself requires them.

### Typography Discipline

- The main system is sans-first.
- Body copy stays restrained in size and weight; hierarchy comes from scale and alignment.
- Serif is allowed only when the narrative mode intentionally changes.
- Mono is reserved for product-adjacent technical tone, not for every metric on the page.

### Interaction Posture

- Motion is terse and mechanical.
- Hover states should read as confirmation, not drama.
- Selected states may invert strongly only in isolated controls such as pill filters.
- Loading and feedback should feel infrastructural rather than playful.

## 6. Token Foundations

### Color System

| Token | Value | Role |
|------|-------|------|
| `background.dark` | `#08090A` | Primary dark canvas |
| `surface1.dark` | `#141516` | Main elevated surface |
| `surface2.dark` | `#1E2022` | Nested product surface |
| `surface3.dark` | `#28292E` | Denser inset layer |
| `border.dark` | `#28292E` | Quiet border |
| `border-visible.dark` | `#34353A` | Stronger intentional edge |
| `text1.dark` | `#F7F8F8` | Primary text |
| `text2.dark` | `#D0D6E0` | Secondary text |
| `text3.dark` | `#8A8F98` | Tertiary text |
| `text4.dark` | `#62666D` | Muted chrome |
| `accent.dark` | `#5E6AD2` | Indigo signal |
| `accent-subtle.dark` | `#18182F` | Accent-tinted dark field |
| `background.light` | `#FFFFFF` | Light fallback canvas |
| `surface1.light` | `#F7F8F8` | Light elevated surface |

### Semantic Color Guidance

- `background` and `surface1` should do most of the environmental work.
- `surface2` and `surface3` are functional layers for product chrome and nested UI.
- `text1` through `text4` should do most of the hierarchy work.
- `accent_subtle` is for selected-context support, not for a card-background system.

### Typography Stacks

| Role | Implementation Family | Observed Character | Why It Fits |
|------|-----------------------|--------------------|-------------|
| Display / System | `Inter` | Dense efficient sans with low ornament | Supports product-first hierarchy |
| Body / UI | `Inter` | Neutral UI workhorse | Keeps dense operational copy readable |
| Mono | `JetBrains Mono` | Compact technical mono | Adds infra-like credibility in code-adjacent detail |
| Editorial Display | `Cormorant Garamond` | Reflective serif interrupt | Creates a deliberate narrative side-channel |

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Use |
|------|------|-------------|----------------|--------|-----|
| `display` | `64px` | `1.0` | `-0.022em` | `510` | Hero headline |
| `h1` | `40px` | `1.1` | `-0.022em` | `510` | Primary section headings |
| `h2` | `20px` | `1.33` | `-0.012em` | `590` | Feature and card titles |
| `h3` | `16px` | `1.45` | `-0.01em` | `510` | Subheads and dense labels |
| `body` | `15px` | `1.6` | `-0.011em` | `400` | Body copy and product labels |
| `body-sm` | `13px` | `1.5` | `-0.01em` | `400` | Navigation and metadata |
| `caption` | `12px` | `1.4` | `0em` | `400` | Tertiary labels |
| `label` | `11px` | `1.3` | `0.06em` | `510` | Eyebrows and tiny metadata |

### Spacing

| Token | Value | Use |
|------|-------|-----|
| `2xs` | `2px` | Hairline nudges |
| `xs` | `4px` | Tight inline gaps |
| `sm` | `8px` | Compact control spacing |
| `md` | `16px` | Default internal padding |
| `lg` | `24px` | Card padding and medium group spacing |
| `xl` | `32px` | Section spacing |
| `2xl` | `48px` | Large section breaks |
| `3xl` | `64px` | Hero and major layout offsets |
| `4xl` | `96px` | Oversized vertical breathing room |

### Radii

| Token | Value | Use |
|------|-------|-----|
| `element` | `4px` | Small controls and header CTAs |
| `control` | `6px` | Inputs and sidebar items |
| `component` | `8px` | Dense internal product shells |
| `container` | `12px` | Larger proof surfaces |
| `pill` | `999px` | Category filters and isolated selectors |

### Elevation

| Attribute | Value |
|----------|-------|
| Strategy | `flat-with-micro-stack` |
| Principle | Depth comes from border contrast, inset hairlines, and tiny shadow stacks |
| CTA Light | `0px 8px 2px 0px rgba(0,0,0,0), 0px 5px 2px 0px rgba(0,0,0,0.01), 0px 3px 2px 0px rgba(0,0,0,0.04), 0px 1px 1px 0px rgba(0,0,0,0.07), 0px 0px 1px 0px rgba(0,0,0,0.08)` |
| CTA Dark | `0px 0px 0px 1px rgba(255,255,255,0.03) inset, 0px 1px 0px 0px rgba(255,255,255,0.04) inset, 0px 0px 0px 1px rgba(0,0,0,0.6), 0px 4px 4px 0px rgba(0,0,0,0.1)` |
| Panel Inset | `0px 0px 0px 1px #23252A inset` |

### Motion

| Attribute | Value |
|----------|-------|
| Personality | `mechanical` |
| Easing | `ease-out` |
| Fast | `100ms` |
| Standard | `250ms` |
| Slow | `350ms` |

### Mode Strategy

This system is dark-first. Light mode can exist as a fallback, but it should preserve the same compactness, cool restraint, and signal discipline rather than becoming airy or consumer-soft.

## 7. Hero Stage And Atmosphere

### Observed Hero Stage

The hero is almost blank: a near-black field with a centered product shell and only the faintest ambient lift. The absence of decorative background is part of the identity.

| Dial | Value |
|------|-------|
| `background.medium` | `absent` |
| `background.color_mode` | `brand-tinted-neutral` |
| `background.intensity` | `subtle` |
| `hero.subject` | `device` |
| `hero.placement` | `center` |
| `relation.type` | `shadow-only` |

### Background Behavior

- Keep the field almost blank.
- Ambient lift is acceptable; visible mesh theatrics are not.
- The backdrop should help the product shell separate from the page, not become a visual attraction.

### Subject Strategy

- Use the product shell as the main object of trust.
- Keep surrounding space quiet enough that small differences in border and contrast remain legible.
- Let the interface carry the sense of speed and rigor.

### Hero Restrictions

- Do not introduce gradients, aurora fields, or glow halos behind the shell.
- Do not treat the hero as an illustration surface.
- Do not soften the shell with oversized radius or plush shadow.

## 8. Iconography

### Observed Style

The icon language is compact, geometric, and infrastructural. It exists to support structure and state, not to carry personality on its own.

### Fallback Kit

- Use `Material Symbols Rounded` when a compact filled system set is needed.
- Keep icons small and dense.
- Prefer utility placement over decorative placement.

### Usage Guidance

- Use icons in proof surfaces, filters, and internal chrome.
- Avoid large standalone icons on hero or section backgrounds.
- Pair icons with type rather than relying on glyph-only affordance in important flows.

## 9. Component System

Document observed components first, then derived components. Every section preserves `source: observed` or `source: derived`.

### Buttons

| Component | Basis | Rules |
|----------|-------|-------|
| Neutral Primary | Observed | Compact `32px` height, neutral fill, small radius, light micro-stack shadow |
| Dark Utility Button | Observed | Dark translucent fill, quiet border, no decorative glow |
| Inline Link Action | Observed | Text-first treatment with a small accent signal, not a full button shell |

### Inputs

| Component | Basis | Rules |
|----------|-------|-------|
| Text Input | Observed | Dark translucent field, `6px` radius, subtle border, indigo focus ring |
| Dense Filter Control | Observed | Compact spacing, strong alignment, minimal ornament |

### Cards And Surfaces

| Component | Basis | Rules |
|----------|-------|-------|
| Proof Card | Observed | Near-black surface, `12px` radius, border-led depth, no plush shadow |
| Product Shell | Observed | Compact nested layers, inset stroke, strong contrast hierarchy |

### Lists And Navigation

| Component | Basis | Rules |
|----------|-------|-------|
| List Row | Observed | Flat row with bottom border and contrast-led emphasis |
| Nav Item | Observed | Small-radius active shell, compact padding, muted idle text |
| Pill Filter | Observed | Full pill geometry only in contextual selector clusters |

### Tags, Toggles, Progress, And Status Patterns

- Use indigo for selected or active status, not for ornamental atmosphere.
- Keep semantic colors local to actual status meaning.
- Let tags and pills remain compact and infrastructural.

### Overlays And Transient UI

- Derived overlays should feel like extensions of the same dark shell system.
- Use `8px` to `12px` radius, not larger.
- Prefer border and inset logic over environmental blur or glow.

### Empty, Loading, Error, And Disabled States

- Empty states should be structured and matter-of-fact.
- Loading indicators should feel terse and infrastructural.
- Error states can use red, but only at signal strength.
- Disabled states should reduce contrast, not add visual effects.

## 10. Implementation Guidance

### CSS Variables

- Use `--background`, `--surface-1`, `--surface-2`, `--surface-3`, `--border`, and `--accent`.
- Keep border and inset tokens separate from shadow tokens.
- Maintain distinct radius tokens for `element`, `control`, `component`, and `pill`.

### Tailwind Mapping

- Map near-black neutrals into `canvas`, `panel`, and `chrome` aliases.
- Keep `accent` utilities reserved for state and signal rather than environmental fills.
- Preserve `rounded-sm`, `rounded-control`, and `rounded-pill` as separate semantic steps.

### SwiftUI Mapping

- Use named colors like `Color("Background")`, `Color("Surface1")`, and `Color("Accent")`.
- Use `.continuous` corner style for both compact radii and pill selectors.
- Build product shells from nested rounded rectangles and inset strokes rather than generic shadow stacks.

### Asset And Fallback Strategy

- Use open sans, mono, and serif fallbacks rather than source-specific assets.
- Treat editorial serif usage as optional and contextual.
- Product screenshots should remain swappable without changing the shell geometry.

### Delivery Notes

- If one thing must remain intact, preserve the relation between near-blank background and centered product shell.
- If a screen feels too decorative, remove atmosphere before changing type or structure.

## 11. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | `<479px` | Hero stacks vertically, proof cards become single-column, nav collapses fully |
| Mobile | `479-640px` | Single-column flow, tighter headline scale, pill filters wrap or scroll |
| Large Mobile | `640-767px` | Wider single-column content rail |
| Tablet | `768-991px` | Two-column proof grids can begin, hero shell grows |
| Desktop | `992px+` | Full multi-column layout with centered product shell |

### Touch Targets

- Keep header actions tap-safe at `44x44px` or larger.
- Preserve comfortable thumb targets for pill filters.
- Let interactive rows act as large touch surfaces when practical.

### Collapsing Strategy

- Hero copy stacks above the product shell.
- Proof cards stack rather than compressing too aggressively.
- Side-by-side feature rows become a single-column stack.
- Pill filters wrap or become horizontally scrollable before redesigning the pattern.

### Image Behavior

- Product shells scale proportionally and remain the main focus object.
- Supporting diagrams may crop slightly but should not change visual direction.
- Avoid art-direction swaps between breakpoints.

## 12. Do's And Don'ts

### Do

- Use `#08090A` and adjacent near-black neutrals as the default canvas.
- Keep most control radii in the `4px` to `6px` range.
- Use indigo as a focused signal rather than a full-surface wash.
- Let borders and inset strokes do more work than shadows.
- Reserve serif moments for explicit editorial context.
- Let the product shell remain the main object of trust.

### Don't

- Don't flood whole sections with indigo or purple.
- Don't soften the core UI with large consumer-style radii.
- Don't add glow, glassmorphism, or cinematic gradients to basic surfaces.
- Don't spread pill geometry across every control in the system.
- Don't let serif typography leak into default UI hierarchy.
- Don't turn the hero into an atmospheric art piece.

## 13. Anti-Patterns

- No gradient-heavy hero field behind the primary product shell.
- No soft consumer-style `12px+` radius on default controls.
- No accent-colored primary buttons across the whole interface.
- No plush shadows on cards and panels.
- No serif in navigation, forms, or default system labels.
- No decorative background treatment that outranks the product shell.

## 14. Iteration Heuristics

### Safe Adjustments

- Tune neutral contrast while preserving the near-black hierarchy.
- Adjust indigo intensity without turning it into environmental color.
- Refine border visibility and inset depth for different display contexts.

### High-Risk Changes

- Switching the primary expression away from dark mode.
- Inflating radii across the core control system.
- Turning the editorial serif interrupt into a global display language.

Keep the system feeling controlled first, expressive second.
