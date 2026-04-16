# Linear Design Document

## 1. Snapshot

| Field | Value |
|------|-------|
| Brand | Linear |
| Source | `https://linear.app` plus live inspection of `/method` and `/customers` |
| Domain | Issue tracking / product planning / agent-assisted product operations |
| Brand Type | UI-rich |
| Primary Mode | Dark |
| Summary | A near-black operational system with compact control geometry, restrained indigo signaling, and a single editorial serif side-channel. |

### Source Surfaces

- Homepage hero and header CTA system on `linear.app`
- Editorial contrast and serif usage on `linear.app/method`
- Category filters and customer-story surfaces on `linear.app/customers`

### Design Readout

- Linear's identity is carried by product framing, not by decorative atmosphere.
- The brand stays almost monochrome until a small indigo signal is needed.
- Corners are compact across the system, then jump to full pills only in very specific navigation contexts.
- The only major tonal break is editorial: `/method` introduces a serif-led narrative voice without changing the underlying spacing discipline.

## 2. Brand Summary

Linear is a disciplined operations brand. It wants to feel fast, precise, and already under control before the user reads any copy. The site communicates that by reducing decoration, compressing chrome, and letting the embedded product shell do the work of persuasion.

The experience is intentionally asymmetric. Most of the system is infrastructural and highly controlled, but a few editorial surfaces briefly widen the emotional range. That contrast gives the brand intelligence without softening the main product posture.

### Experience Goals

- Make the product feel already organized before interaction begins.
- Keep the interface visually fast: low ornament, compact corners, minimal color load.
- Use editorial moments sparingly so they feel authored instead of decorative.
- Preserve a premium dark-mode feel without relying on glow, glass, or cinematic gradients.

### Signature Signals

- Near-black canvas with clean, cool neutrals
- Indigo used as a signal, not as an environmental wash
- Inter-led UI hierarchy with a dense operational cadence
- Tiempos-style serif interruption for high-level editorial storytelling
- Border-led and inset-led depth instead of soft shadows

## 3. Philosophy

Linear is not trying to look expressive on every surface. Its identity comes from control: near-black backgrounds, white type, tiny corners in dense product chrome, and almost no decorative background interference behind the core product window.

The key tension is between mechanical product precision and selective editorial relief. Most surfaces are rigid and infrastructural, but `/method` proves the brand can briefly open into serif-led storytelling without changing the underlying system.

### Primary Tension

Operational severity versus editorial intelligence. The main experience feels machined and immediate; the editorial layer feels reflective and authored.

### Design Lineage

- High-discipline SaaS and issue-tracking tools
- Infra-style dark UI with minimal atmospheric treatment
- Swiss-like hierarchy control applied to modern product marketing
- Editorial longform used sparingly as a contrast channel, not as the main brand face

### What This System Is Not

- Not a glow-forward AI brand
- Not a plush productivity system with soft consumer corners
- Not a gradient-heavy landing page language
- Not a serif-first editorial identity

## 4. Design Principles

1. **Product before scenery.** The UI frame is the hero; the background should never compete with it.
2. **Signal color is scarce.** Indigo is used as a sharp signal, not as a blanket fill.
3. **Corners are precise, not friendly.** Most controls live in the 4px-6px range; softness is engineered, not plush.
4. **Depth comes from framing.** Borders, inset strokes, and tiny stacks beat soft atmospheric shadows.
5. **Type carries hierarchy.** Scale, weight, and spacing do the heavy lifting before color ever does.
6. **Pills are contextual.** Tab filters go fully pill-shaped, but the broader system does not become round everywhere.
7. **Editorial serif is a side-channel.** Tiempos-style moments are intentional interruptions, not a second full design system.

## 5. Composition Rules

### Layout Density

- Default density is compact-to-medium, never airy by default.
- Product-facing blocks should feel tightly resolved, with spacing increments usually stepping through `8px`, `16px`, and `24px`.
- Large empty space appears at section level, not inside controls.

### Hierarchy Layers

| Layer | Purpose | Typical Treatment |
|------|---------|-------------------|
| Layer 1 | Page-defining statement | Large Inter headline or occasional editorial serif headline |
| Layer 2 | Section structure | White or near-white type, heavier weight, no accent dependence |
| Layer 3 | Product explanation | Secondary neutral text with controlled line length |
| Layer 4 | Utility chrome | Small labels, nav items, and metadata at `13px` or below |
| Layer 5 | State signal | Indigo, success green, warning amber, or error red used only when needed |

### Rhythm And Spacing Behavior

- Use small repeating intervals. Linear feels consistent because gaps recur rather than flex wildly.
- Group by alignment first, then by border or surface changes.
- Let major section spacing feel deliberate and architectural; keep component internals tight.
- Run a squint test: the page should read as stable blocks and clear text bands, not as floating decorative cards.

### Color Strategy

- Treat neutral contrast as the default hierarchy engine.
- Use indigo for active, selected, or signal-bearing states, not for whole sections.
- Keep auxiliary colors semantic only: success, warning, and error should not leak into general branding.
- Avoid multiple chromatic arrivals in the same viewport unless the product itself is being demonstrated.

### Typography Discipline

- The main system is sans-first. Inter handles hero, body, nav, and metadata.
- Body copy stays restrained in size and weight; hierarchy should come from scale, not stylistic flourishes.
- Serif is allowed only where the narrative mode changes, as on `/method`.
- Mono is reserved for product-adjacent technical tone, not for all metrics on marketing pages.

### Interaction Posture

- Motion is terse and mechanical.
- Hover states should read as confirmation, not drama.
- Selected states are allowed to invert aggressively only in isolated UI controls such as pill tabs.
- Loading and feedback should feel infrastructural, not playful.

## 6. Token Foundations

### Color System

| Token | Value | Role |
|------|-------|------|
| `background.dark` | `#08090A` | Primary dark canvas |
| `surface1.dark` | `#141516` | Main elevated surface |
| `surface2.dark` | `#1E2022` | Nested product surface |
| `surface3.dark` | `#28292E` | Denser inset layer |
| `border.dark` | `#28292E` | Quiet border |
| `border_visible.dark` | `#34353A` | Stronger intentional edge |
| `text1.dark` | `#F7F8F8` | Primary text |
| `text2.dark` | `#D0D6E0` | Secondary text |
| `text3.dark` | `#8A8F98` | Tertiary text |
| `text4.dark` | `#62666D` | Muted chrome |
| `accent.dark` | `#5E6AD2` | Indigo signal |
| `accent_hover.dark` | `#6D78D5` | Hover signal |
| `accent_subtle.dark` | `#18182F` | Accent-tinted dark field |
| `background.light` | `#FFFFFF` | Light canvas fallback |
| `surface1.light` | `#F7F8F8` | Light elevated surface |
| `surface3.light` | `#E6E6E6` | Light neutral fill |
| `accent.light` | `#5E6AD2` | Indigo signal in light mode |
| `success` | `#27A644` | Positive state |
| `warning` | `#F0BF00` | Warning state |
| `error` | `#EB5757` | Destructive state |

### Semantic Color Guidance

- `background` and `surface1` should carry most of the interface. Avoid introducing extra decorative surfaces.
- `surface2` and `surface3` are functional layers for embedded product framing, inputs, and denser chrome.
- `text1` to `text4` should do most of the hierarchy work. If hierarchy requires accent everywhere, the composition is wrong.
- `accent_subtle` is for focus and selected-context support, not as a card background system.

### Typography Stacks

| Role | Observed Font | Implementation Fallback | Why It Fits |
|------|---------------|-------------------------|-------------|
| Display / System | `Inter Variable` | `Inter`, `SF Pro Display`, system sans | Clean, efficient, and dense enough for product-first marketing |
| Body / UI | `Inter Variable` | `Inter`, `SF Pro Display`, system sans | Neutral, high-legibility UI workhorse |
| Mono | `Berkeley Mono` | `JetBrains Mono`, `SF Mono`, Menlo | Compact technical tone without becoming retro |
| Editorial Display | `Tiempos Headline` | `Cormorant Garamond`, Georgia, serif | Introduces reflection and authorship without infecting the main system |

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Use |
|------|------|-------------|----------------|--------|-----|
| `display` | `64px` | `1.0` | `-0.022em` | `510` | Homepage hero headline |
| `h1` | `40px` | `1.1` | `-0.022em` | `510` | Primary section headings |
| `h2` | `20px` | `1.33` | `-0.012em` | `590` | Feature and card titles |
| `h3` | `16px` | `1.45` | `-0.01em` | `510` | Subheads and dense UI labels |
| `body` | `15px` | `1.6` | `-0.011em` | `400` | Body copy and product labels |
| `body_sm` | `13px` | `1.5` | `-0.01em` | `400` | Navigation and metadata |
| `caption` | `12px` | `1.4` | `0` | `400` | Footnotes and tertiary labels |
| `label` | `11px` | `1.3` | `0.06em` | `510` | Eyebrows and tiny metadata |
| `editorial` | `128px` | `0.98` | `0` | `400` | `/method` serif headline |

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
| `container` | `12px` | Larger panels and customer-story surfaces |
| `pill` | `999px` | Category tabs and isolated pill controls |

### Elevation

| Attribute | Value |
|----------|-------|
| Strategy | `flat-with-micro-stack` |
| Principle | Depth comes from border contrast, inset hairlines, and tightly controlled stacked shadows |
| `cta_light` | `0px 8px 2px 0px rgba(0,0,0,0), 0px 5px 2px 0px rgba(0,0,0,0.01), 0px 3px 2px 0px rgba(0,0,0,0.04), 0px 1px 1px 0px rgba(0,0,0,0.07), 0px 0px 1px 0px rgba(0,0,0,0.08)` |
| `cta_dark` | `0px 0px 0px 1px rgba(255,255,255,0.03) inset, 0px 1px 0px 0px rgba(255,255,255,0.04) inset, 0px 0px 0px 1px rgba(0,0,0,0.6), 0px 4px 4px 0px rgba(0,0,0,0.1)` |
| `panel_inset` | `0px 0px 0px 1px #23252A inset` |

### Motion

| Attribute | Value |
|----------|-------|
| Personality | `mechanical` |
| Easing | `ease-out` |
| Fast | `100ms` |
| Standard | `250ms` |
| Slow | `350ms` |
| Notes | Terse, direct, never springy |

### Mode Strategy

Linear is dark-first. The dark canvas is part of the identity, not just a theme toggle. Light mode should preserve the same compactness, cool restraint, and signal discipline rather than becoming airy or consumer-soft.

## 7. Hero Stage And Atmosphere

### Observed Hero Stage

Linear's homepage hero is a device-on-near-blank composition. The background is effectively absent: a near-black field with only ambient lift. The central product window, not a mesh or glow field, carries the brand signal.

| Dial | Value |
|------|-------|
| `background.medium` | `absent` |
| `background.color_mode` | `brand-tinted-neutral` |
| `background.intensity` | `subtle` |
| `background.safe_zone` | `masked-for-text` |
| `hero.subject` | `device` |
| `hero.placement` | `center` |
| `hero.scale` | `dominant` |
| `relation.type` | `shadow-only` |
| `relation.bleed` | `0` |

### Background Behavior

- Keep the field almost blank.
- Ambient lift is acceptable; visible mesh theatrics are not.
- The backdrop should help the product frame separate from the page, not become a visual attraction on its own.

### Subject Strategy

- The product window is the hero subject.
- Use UI framing, cropping, and alignment to create confidence.
- If no real product UI is available, use an abstract neutral device frame rather than inventing decorative objects.

### Hero Restrictions

- No aurora gradients behind the hero.
- No volumetric glow, spotlight cones, or cinematic bokeh.
- No off-brand abstract art competing with the product shell.

## 8. Iconography

### Observed Style

Observed iconography is compact, geometric, and infrastructural. Marketing UI leans on small outline and utility symbols, while product-adjacent surfaces feel denser and more system-like than expressive.

| Attribute | Value |
|----------|-------|
| Stroke Weight | `regular` |
| Corner Treatment | `soft` |
| Fill Style | `mixed` |
| Form Language | `geometric` |
| Density | `minimal` |

### Fallback Kit

| Attribute | Value |
|----------|-------|
| Kit | `Material Symbols Rounded` |
| Weight | `400 fill` |
| Match Score | `medium` |
| Why | Closer to Linear's compact infrastructural feel than an outline-only set, though still more generic than the proprietary original |
| CDN | `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,1,0` |

### Usage Guidance

- Keep icons small and supportive.
- Avoid using icons as the primary hierarchy mechanism.
- Prefer text-plus-icon or icon-as-utility, not icon-as-illustration.
- Do not introduce playful pictograms or duotone marketing glyphs.

## 9. Component System

Observed components are listed first. All guidance below is sufficient to reproduce the system without separately opening the YAML.

### Buttons

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `button_primary` | observed | Main CTAs in marketing chrome | Neutral fill, dark text, `32px` height, `4px` radius | `background_dark: text1.dark`, `color_dark: background.dark`, `radius: element` |
| `button_secondary` | observed | Quiet actions inside dark surfaces | Transparent-to-faint fill, `6px` radius, thin border | `background: rgba(255,255,255,0.02)`, `border: 1px solid rgb(36, 40, 44)`, `radius: control` |
| `button_link` | observed | Inline text actions and narrative links | Transparent, body-sized text, accent reserved for hover or marker | `color: text1.dark`, `hover: accent_hover.dark` |

Button guidance:
- Default to neutral or dark-surface buttons before reaching for accent fills.
- Accent should usually arrive in text, focus, or small state markers, not in every CTA fill.
- Keep button geometry compact and squared-off relative to the rest of the industry.

### Inputs

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `input` | observed | Embedded product-entry fields | Quiet translucent fill, `6px` radius, restrained border, single-pixel indigo focus | `radius: control`, `text_color: text2.dark`, `placeholder: text3.dark`, `border_focus: accent.dark` |

Input guidance:
- Inputs should feel like product chrome, not marketing widgets.
- Focus state may use indigo, but keep the ring precise and thin.
- Avoid large inset shadows or oversized internal padding.

### Cards And Surfaces

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `card` | observed | Product panels and customer-story surfaces | Dark surface, `12px` radius, border-led framing, inset stroke instead of soft depth | `background: surface1.dark`, `radius: container`, `border: rgba(255,255,255,0.05)`, `inset_stroke: panel_inset` |

Surface guidance:
- Use surface changes sparingly; too many layers weaken the brand's composure.
- Large cards should feel machined and contained, not floaty.
- If a card needs importance, increase contrast or framing before adding depth.

### Lists And Navigation

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `list_row` | observed | Customer directories and list groupings | Flat rows, border-separated, emphasis through alignment and contrast | `border_bottom: rgba(255,255,255,0.05)`, `text_primary: text1.dark`, `text_secondary: text3.dark` |
| `nav_item` | observed | Product-like sidebar items | `13px`, `510` weight, `6px` radius, faint active wash | `radius: control`, `idle_color: text2.dark`, `active_background: rgba(255,255,255,0.04)` |

Navigation guidance:
- Navigation should read as infrastructure.
- Active state is allowed a small background wash, but not a bright branded chip.
- Keep row and nav treatments flat unless a specific state demands contrast.

### Tags, Toggles, Progress, And Status Patterns

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `tab_pill` | observed | Customer-page category filters | `40px` height, full pill radius, selected state inverts to white on dark | `radius: pill`, `selected.background: text1.dark`, `idle.color: text3.dark` |

State pattern guidance:
- Pills are allowed when they are clearly acting as grouped selectors.
- Status color should stay semantic and sparse.
- Progress, if added, should feel infrastructural: clean tracks, no candy color, no rounded toy styling.

### Overlays And Transient UI

No strongly branded modal or popover language was required for this validation pass. If derived later, overlays should inherit `surface1`, border-led framing, restrained radius, and low-drama entry motion rather than introducing glass or atmospheric depth.

### Empty, Loading, Error, And Disabled States

- Empty states should stay text-first and operational, with minimal illustration.
- Loading should prefer skeleton lines or reserved structure over playful shimmer theatrics.
- Error states should use `error` as a precise signal, not as a full red environment.
- Disabled states should reduce contrast through `text4` and border quieting rather than adding blur.

## 10. Implementation Guidance

### CSS Variables

- Use direct semantic names first: `--background`, `--surface1`, `--surface2`, `--text1`, `--accent`.
- Add a `linear-` prefix only if these tokens must coexist with another brand system.
- Keep mode scopes explicit; do not derive dark mode by inversion.

### Tailwind Mapping

- Colors: `background`, `surface1`, `surface2`, `surface3`, `border`, `text1`, `text2`, `text3`, `text4`, `accent`
- Radius: `element`, `control`, `component`, `container`, `pill`
- Typography: `display`, `h1`, `h2`, `h3`, `body`, `bodySm`, `caption`, `label`, `editorial`

### SwiftUI Mapping

- `Color.linearBackground`, `Color.linearSurface1`, `Color.linearAccent`
- `Font.linearDisplay()`, `Font.linearBody()`, `Font.linearMono()`, `Font.linearEditorial()`
- Use `RoundedRectangle(cornerRadius:, style: .continuous)` only for larger containers; smaller controls should stay visually closer to the `4px`-`6px` world.

### Asset And Fallback Strategy

- Use `Inter` as the primary implementation face if `Inter Variable` is unavailable.
- Use `JetBrains Mono` as the mono fallback when `Berkeley Mono` cannot be licensed.
- Use `Cormorant Garamond` only for explicit editorial moments replacing `Tiempos Headline`.
- Use Material Symbols Rounded as a fallback utility set, not as a claim about the real brand assets.

### Delivery Notes

- If implementing a marketing page, preserve the restraint first; do not "improve" it with more atmosphere.
- If implementing a product-like shell, keep corners compact and state handling calm.
- If the team requests more personality, introduce it through editorial typography or sharper composition, not through added glow.

## 11. Anti-Patterns

- No broad purple washes across whole sections.
- No soft consumer-style corners on dense product controls.
- No glassmorphism or blurred frosted panels.
- No oversized glows behind primary product surfaces.
- No pastel interpretation of the accent system.
- No serif spillover into core product UI.
- No playful bounce or spring motion.
- No card shadows that feel airbrushed or fluffy.
- No multicolor accent soup on a single screen.
- No replacing border-led depth with generic drop shadows.
- No oversized empty-state illustration mascots.
- No full-screen hero art that competes with the product window.

## 12. Iteration Heuristics

### Safe Adjustments

- Increase contrast by deepening surface separation before changing accent saturation.
- Add editorial character by widening serif usage only in clearly isolated narrative sections.
- Tighten the product feel further by reducing radius or padding before touching typography.

### High-Risk Changes

- Turning the accent into a full-surface brand wash
- Spreading pill geometry beyond isolated selector patterns
- Replacing border-led depth with shadows or glow
- Letting serif typography leak into default UI hierarchy

- If the user asks for "more Linear," reduce decoration before changing color.
- If the user asks for "more editorial," isolate the serif to headline moments only.
- If the user asks for "more contrast," deepen surface separation and text hierarchy before increasing accent saturation.
- If the user asks for implementation detail, expand section 10 rather than inventing new tokens.
