# Cursor Design Document

## 1. Snapshot

| Field | Value |
|------|-------|
| Brand | Cursor |
| Source | `https://cursor.com` plus live inspection of `/product` and `/pricing` |
| Domain | AI coding assistant / agentic IDE / developer tooling |
| Brand Type | UI-rich |
| Primary Mode | Light |
| Summary | A warm developer-tool system built from cream paper surfaces, ink-dark type, giant pill CTAs, scarce orange signaling, and polished product-window demos. |

### Source Surfaces

- Homepage hero, nav, CTA cluster, and flagship product demo on `cursor.com`
- Product narrative, feature sections, and deeper demo windows on `cursor.com/product`
- Pricing cards, segmented billing switcher, and plan CTAs on `cursor.com/pricing`

### Design Readout

- Cursor does not use the usual dark AI-brand palette on marketing surfaces. It stays warm, almost editorial, with a paper-toned canvas.
- The most visible accent is orange, but it is used sparingly. The main CTA remains dark instead of chromatic.
- Product windows are the status objects of the system. They carry most of the depth, polish, and technical credibility.
- Typography is unusually restrained for a modern SaaS homepage: large sizes, very little weight variation, and almost no decorative display treatment.

## 2. Brand Summary

Cursor sells advanced engineering capability without dressing it up as spectacle. The design says "serious tool built by researchers" more than "exciting AI future." That is why the page feels calm, pale, and precise even when the product promise is aggressive.

The identity comes from contrast at the system level rather than from loud components. Blank cream space sits next to dense product demos. Quiet grotesk typography sits next to crisp mono code snippets. Orange appears only when it can mean something.

### Experience Goals

- Make AI-assisted coding feel credible, applied, and already useful.
- Keep the site premium without becoming luxurious or lifestyle-driven.
- Let product demos feel like the proof, not like decorative screenshots.
- Preserve a developer-native tone through monospaced details, utility chrome, and low-theatrics composition.

### Signature Signals

- Warm off-white page background instead of blue-white or charcoal
- Ink-dark text and CTA pills
- Oversized rounded pills for action controls
- Paper-colored content cards with almost no border noise
- Product-window demos with controlled layered shadows
- Small orange arrivals for recommendation, warning, or link emphasis

## 3. Philosophy

Cursor's marketing language is developer-native but not cyberpunk. It trades dark futurism for warm editorial calm: cream backgrounds, quiet shadows, almost monoweight typography, and just enough orange to mark emphasis.

The key tension is between research-lab restraint and shipping speed. The page feels composed and measured, but the demos and copy still imply parallel execution, code automation, and high-leverage tooling.

### Primary Tension

Calm editorial restraint versus accelerated product velocity. Cursor wants to feel both thoughtful and immediately useful.

### Design Lineage

- Developer tools that want to look trustworthy rather than flashy
- Editorial product marketing with wide margins and quiet color discipline
- macOS-adjacent product chrome and paper-like surfaces
- Research-lab branding translated into a commercial software language

### What This System Is Not

- Not a dark neon AI brand
- Not a cheerful consumer productivity app
- Not a brutalist terminal-first visual identity
- Not a highly saturated orange brand system

## 4. Design Principles

1. **Paper first, chrome second.** Start with a warm neutral canvas, then place technical UI on top of it.
2. **Orange is a signal, not a flood.** Use the accent for recommendation, status, or emphasis, never as the default fill color for everything.
3. **Pills mean action.** Strong actions and switchers use fully rounded pill geometry; most structural surfaces do not.
4. **Weight stays flat.** Hierarchy should come from size, spacing, and placement before it comes from font-weight jumps.
5. **Product windows carry prestige.** If something needs to feel advanced, show it as polished software chrome, not as abstract decoration.
6. **Warm neutrals keep the tool human.** Off-white, beige, and soft taupe make the brand feel less sterile than typical dev tooling.
7. **Technical detail stays embedded.** Mono text, small chips, and utility labels should appear inside demos and controls, not become the whole identity.

## 5. Composition Rules

### Layout Density

- The outer layout is spacious, but inner modules are fairly compact.
- Hero sections should reserve large blank zones around text before the main product frame arrives.
- Cards and pricing modules can be tightly packed because the page-level whitespace is already generous.

### Hierarchy Layers

| Layer | Purpose | Typical Treatment |
|------|---------|-------------------|
| Layer 1 | Page-defining conversion line | `52px` to `72px`, weight `400`, ink-dark, no accent dependency |
| Layer 2 | Main section message | `36px`, weight `400`, often split into strong line + muted continuation |
| Layer 3 | Feature leads | `26px`, weight `400`, short and direct |
| Layer 4 | Body and pricing detail | `16px`, weight `400`, muted neutral secondary color |
| Layer 5 | Utility chrome | `14px` and `12px`, often inside pills, nav, or product demos |

### Rhythm And Spacing Behavior

- Use large top-level vertical spacing, then tighten dramatically inside modules.
- Price cards, buttons, and product windows should align to simple repeated offsets rather than bespoke micro-spacing.
- Keep section rhythm clean and linear. Cursor does not want collage-like overlap outside of the product demos.
- Squint test: the page should read as blank paper, strong black text, then islands of soft product chrome.

### Color Strategy

- Most of the page should live inside the neutral system.
- Use dark fills for primary CTA moments; do not assume the accent color is the main action color.
- Reserve orange for recommendation labels, selected emphasis, or subtle narrative push.
- Let green, amber, and red stay semantic and mostly inside product-adjacent contexts.

### Typography Discipline

- Treat the grotesk as a single calm voice across nav, hero, cards, and pricing.
- Avoid using many weights to create hierarchy; Cursor proves size and placement are enough.
- Use mono only where the product story becomes technical: filenames, code, tabs, agent logs, or interface details.
- Keep line lengths readable and generous. The tone is direct, not compressed.

### Interaction Posture

- Interactions should feel composed and frictionless.
- Hover should read like a clean state change, not like animated delight.
- Segmented controls and pills can slide or switch softly, but avoid springy behavior in primary navigation.
- Product demos may feel active; surrounding marketing chrome should stay calm.

## 6. Token Foundations

### Color System

| Token | Value | Role |
|------|-------|------|
| `background.light` | `#F7F7F4` | Primary paper-like canvas |
| `surface1.light` | `#F2F1ED` | Cards and windows |
| `surface2.light` | `#EBEAE5` | Supporting surface tint |
| `surface3.light` | `#E6E5E0` | Active pills and quiet button fills |
| `text1.light` | `#26251E` | Primary text and dark CTA fill |
| `text2.light` | `rgba(38,37,30,0.60)` | Secondary body and support copy |
| `text3.light` | `rgba(38,37,30,0.55)` | Tertiary technical copy |
| `text4.light` | `rgba(38,37,30,0.40)` | Disabled and low-priority text |
| `accent.light` | `#F54E00` | Orange emphasis |
| `accent_hover.light` | `#D84500` | Darker orange hover |
| `accent_subtle.light` | `#FFF2EB` | Very light orange tint |
| `success` | `#1F8A65` | Positive state |
| `warning` | `#C08532` | Warning state |
| `error` | `#CF2D56` | Error state |
| `background.dark` | `#171611` | Derived dark-mode canvas |
| `surface1.dark` | `#26251E` | Derived dark-mode card |
| `accent.dark` | `#FF7A3B` | Derived dark-mode orange |

### Semantic Color Guidance

- `background` should stay visibly warm. If it becomes cold white, the brand loses its editorial edge.
- `surface1` is the primary module color. Pricing cards and product chrome should feel cut from the same paper family.
- `text1` doubles as the dark primary fill color. Cursor uses the same ink tone for text and strong actions.
- `accent` should not dominate. One orange arrival per cluster is usually enough.

### Typography Stacks

| Role | Observed Font | Implementation Fallback | Why It Fits |
|------|---------------|-------------------------|-------------|
| Display / System | `CursorGothic` | `Geist`, `Helvetica Neue`, system sans | Clean, research-adjacent grotesk with enough neutrality for dense product marketing |
| Body / UI | `CursorGothic` | `Geist`, `Helvetica Neue`, system sans | Keeps the entire site in one calm voice |
| Mono | `Berkeley Mono` | `JetBrains Mono`, `SF Mono`, Menlo | Technical, compact, and credible in code-facing moments |

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Use |
|------|------|-------------|----------------|--------|-----|
| `display` | `72px` | `1.1` | `-0.03em` | `400` | High-conversion closing headlines |
| `h1` | `52px` | `1.15` | `-0.025em` | `400` | Main page titles such as pricing |
| `h2` | `36px` | `1.2` | `-0.02em` | `400` | Product and section statements |
| `h3` | `26px` | `1.25` | `-0.012em` | `400` | Hero lines and feature leads |
| `body` | `16px` | `1.5` | `0em` | `400` | Default paragraphs, CTA text, pricing copy |
| `body_sm` | `14px` | `1.5` | `0em` | `400` | Nav and secondary controls |
| `caption` | `12px` | `1.45` | `0em` | `400` | Product chrome, code-adjacent helper text |
| `label` | `11px` | `1.3` | `0.02em` | `400` | Tiny UI labels and overlines |

### Spacing

| Token | Value | Use |
|------|-------|-----|
| `2xs` | `2px` | Hairline offsets and segmented control insets |
| `xs` | `4px` | Tight utility spacing |
| `sm` | `8px` | Small gaps and compact pills |
| `md` | `16px` | Body spacing and card internals |
| `lg` | `24px` | Default module padding rhythm |
| `xl` | `32px` | Sectional grouping |
| `2xl` | `48px` | Larger internal breaks |
| `3xl` | `64px` | Hero and section offsets |
| `4xl` | `96px` | Major white-space bands |

### Radii

| Token | Value | Use |
|------|-------|-----|
| `element` | `4px` | Pricing cards and small chips |
| `control` | `8px` | Inputs and quieter controls |
| `component` | `10px` | Product demo windows |
| `container` | `16px` | Large grouped surfaces if needed |
| `pill` | `999px` | CTAs, billing switchers, and action pills |

### Elevation

| Attribute | Value |
|----------|-------|
| Strategy | `subtle-product-window` |
| Principle | Flat paper modules by default, layered shadows only for product prestige surfaces |
| `hero_window` | `0px 28px 70px 0px rgba(0,0,0,0.14), 0px 14px 32px 0px rgba(0,0,0,0.10), 0px 0px 0px 1px rgba(38,37,30,0.10)` |
| `nested_window` | `0px 25px 50px -12px rgba(0,0,0,0.25), 0px 12px 24px -8px rgba(0,0,0,0.15), 0px 0px 0px 0.5px rgba(38,37,30,0.10)` |
| `outline` | `0 0 0 1px rgba(38,37,30,0.10)` |

### Motion

| Attribute | Value |
|----------|-------|
| Personality | `smooth` |
| Easing | `cubic-bezier(.4, 0, .2, 1)` |
| Fast | `140ms` |
| Standard | `150ms` |
| Slow | `240ms` |
| Notes | Subtle and controlled; the page avoids playful bounce even when tokens hint at spring support |

### Mode Strategy

Cursor is observed in light mode on the public marketing site. A dark mode can exist as a derived implementation layer, but the brand's primary expression is warm light, not inverted minimalism. If you add dark mode, keep the same warm-neutral temperature and reserve orange as a sparse signal.

## 7. Hero Stage And Atmosphere

### Observed Hero Stage

Cursor uses a split hero. The page opens with blank cream space and a quiet headline, then anchors the promise with a large product window placed on top of a washed painterly landscape. The emotional tone comes from that combination: editorial blankness plus technical demonstration.

| Dial | Value |
|------|-------|
| `background.medium` | `painterly` |
| `background.color_mode` | `brand-tinted-neutral` |
| `background.saturation` | `muted` |
| `background.texture` | `paper` |
| `background.intensity` | `subtle` |
| `background.safe_zone` | `masked-for-text` |
| `hero.subject` | `device` |
| `hero.placement` | `center` |
| `hero.scale` | `dominant` |
| `relation.type` | `shadow-only` |
| `relation.bleed` | `0` |

### Background Behavior

- Keep the scenic field soft and partially washed out.
- The painterly layer should feel like atmospheric paper, not like full-bleed illustration art.
- Leave enough blank canvas above or beside the hero copy so the page still reads as calm.

### Subject Strategy

- Use a polished product window as the main object of trust.
- Let the device or browser frame feel macOS-adjacent, paper-toned, and precise.
- The product frame should be the most detailed object on screen.

### Hero Restrictions

- No glowing AI orbs
- No dark sci-fi gradients
- No orange flood behind the demo window
- No photoreal hardware renders competing with the software frame

## 8. Iconography

### Observed Style

Cursor uses compact geometric symbols and a proprietary icon font inside demos and supporting UI. The icons read as system tools, not as brand mascots.

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
| Kit | `Tabler Icons` |
| Weight | `outline` |
| Match Score | `high` |
| Why | Thin geometric structure and compact developer-tool feel are close to Cursor's product demos |
| CDN | `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css` |

### Usage Guidance

- Keep icons small and infrastructural.
- Use icons to support product comprehension, not to add personality.
- Avoid thick filled icon sets unless the surface is clearly a compact control.
- Let text remain primary in pricing and marketing contexts.

## 9. Component System

Observed components are listed first. The descriptions below are written so the Markdown file remains usable without the YAML open.

### Buttons

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `button_primary` | observed | Primary download and conversion actions | Ink-dark pill, `43px` height, white text, no shadow | `background: text1.light`, `color: background.light`, `radius: pill` |
| `button_secondary` | observed | Secondary CTAs such as team contact or lighter plan actions | Soft beige pill, same size, thin almost-invisible border | `background: surface3.light`, `border: rgba(38,37,30,0.025)`, `radius: pill` |
| `button_nav_pill` | observed | Header actions | Smaller pill, `14px` text, quiet outline | `height: 32px`, `radius: pill`, `border: border_visible.light` |
| `code_chip` | observed | Tiny in-demo actions and utility tags | `12px` text, `4px` radius, transparent background, hairline outline | `color: text2.light`, `radius: element`, `border: border.light` |

Button guidance:

- Primary actions should be dark by default, not orange.
- The large pill shape is one of Cursor's strongest component signals.
- Secondary buttons should feel pressed from the same paper stock as the cards.

### Inputs

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `input_field` | derived | Forms, search, or prompt entry when not directly visible on marketing pages | Warm paper fill, restrained border, orange focus, `8px` radius | `background: surface1.light`, `border_focus: accent.light`, `radius: control` |

Input guidance:

- Do not make inputs overly glossy or highly bordered.
- Keep focus styling precise and chromatic, not thick or glowing.
- Preserve the warm neutral fill so the field still belongs to the paper-based system.

### Cards And Surfaces

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `pricing_card` | observed | Plan pricing and structured comparison content | `303px` wide cards, `4px` radius, paper background, zero decoration | `background: surface1.light`, `radius: element`, `padding: 13.4px 15px 15px` |
| `demo_window` | observed | Hero and feature showcase surfaces | `10px` radius, layered shadow, hairline edge, warm paper chrome | `background: surface1.light`, `radius: component`, `shadow: hero_window` |

Surface guidance:

- Flat cards and prestige windows should coexist.
- Use shadows only when the object is a product demonstration or a focused technical artifact.
- Regular content cards should stay nearly flat.

### Lists And Navigation

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `nav_link` | observed | Main top navigation | `14px`, low-weight, mostly text-only, no decorative capsule except on action items | `font: body_sm`, `color: text1.light` |
| `task_list_row` | observed | In-demo agent/task histories | Compact rows, mono side-details, thin separators, light paper background | `text: text2.light`, `mono: typography.mono` |

Navigation guidance:

- Keep standard nav links quiet and flat.
- Save rounded pills for actions and switchers, not for every nav item.
- Product lists can look denser than the surrounding marketing page.

### Tags, Toggles, Progress, And Status Patterns

| Component | Source | Usage | Key Traits | Token Mapping |
|----------|--------|-------|------------|---------------|
| `segmented_toggle` | observed | Monthly / Yearly billing switcher | `192px` pill shell with `2px` inset and a smaller active pill inside | `background: surface1.light`, `active_track: surface3.light`, `radius: pill` |
| `status_tag` | observed | Recommended or emphasized plan labels | Small orange text marker rather than large badge object | `color: accent.light` |

State pattern guidance:

- Selection can be shown by moving a softer neutral pill, not by introducing a hard accent block.
- Orange should often arrive as text or micro-label, not as a chip background.
- Status systems should stay lean and editorial.

### Overlays And Transient UI

No branded modal language is strongly exposed on the inspected public surfaces. If derived later, overlays should inherit the warm paper chrome, subtle outline, and `10px` to `16px` radius range rather than introducing glassmorphism or dark HUD treatments.

### Empty, Loading, Error, And Disabled States

- Empty states should stay text-led, with code or tool framing rather than illustrations.
- Loading can be shown through demo activity, muted chrome, or small progress signals instead of spinners dominating the screen.
- Error states should use `error` precisely and locally.
- Disabled states should drop into `text4` or low-contrast paper edges, not blur out.

## 10. Implementation Guidance

### CSS Variables

- Use semantic roles directly: `--background`, `--surface-1`, `--text-1`, `--accent`, `--radius-pill`.
- If this must coexist with another system, prefix with `--cursor-`.
- Keep paper-surface shadows and product-window shadows as named tokens rather than ad hoc one-offs.

### Tailwind Mapping

- Colors: `background`, `surface1`, `surface2`, `surface3`, `text1`, `text2`, `text3`, `text4`, `accent`
- Radius: `element`, `control`, `component`, `container`, `pill`
- Typography: `display`, `h1`, `h2`, `h3`, `body`, `bodySm`, `caption`, `label`, `mono`
- Shadows: `heroWindow`, `nestedWindow`, `outline`

### SwiftUI Mapping

- `Color.cursorBackground`, `Color.cursorSurface1`, `Color.cursorAccent`
- `Font.cursorDisplay()`, `Font.cursorBody()`, `Font.cursorMono()`
- Use `Capsule()` for primary action pills and segmented controls; reserve `RoundedRectangle(cornerRadius:)` for cards and windows.

### Asset And Fallback Strategy

- Use `Geist` when `CursorGothic` is unavailable.
- Use `JetBrains Mono` when `Berkeley Mono` is unavailable.
- Use Tabler as a neutral open icon fallback rather than trying to imitate Cursor's proprietary icon font too literally.
- For hero media, build an abstract product window with painterly support instead of copying real screenshots one-to-one.

### Delivery Notes

- Cursor's look depends on restraint. It is easier to over-design than under-design.
- If a page starts feeling energetic, reduce color first and simplify the shadow model.
- The best place to express sophistication is the product window, not the headline wrapper.

## 11. Anti-Patterns

- No dark-mode sci-fi reinterpretation of the marketing site by default.
- No filling primary CTAs with orange just because orange is the accent.
- No sharp rectangular CTA buttons.
- No bright white canvas that removes the warm paper tone.
- No weight-heavy typography ladder with many bold jumps.
- No over-decorated pricing cards with thick borders or gradients.
- No floating glass panels.
- No emoji, mascot, or playful illustration language.
- No using orange as a background for entire sections.
- No replacing product-window prestige with random abstract shapes.
- No thick, chunky consumer icon sets.
- No turning every nav item into a capsule.

## 12. Iteration Heuristics

### Safe Adjustments

- Increase product sophistication by refining demo-window shadows and chrome detail.
- Make the system warmer or cooler by nudging the neutral ramp without touching the core component geometry.
- Increase conversion emphasis by adjusting CTA contrast before adding more accent color.

### High-Risk Changes

- Expanding orange into a dominant brand wash
- Flattening the giant pill geometry into standard rounded rectangles
- Making the surface temperature cold or blue-white
- Turning the system into a dark terminal aesthetic on marketing pages

- If the user asks for "more Cursor," keep the page lighter and warmer, not darker and more futuristic.
- If the user asks for "more technical," add mono detail and richer product chrome before changing the palette.
- If the user asks for "more contrast," strengthen ink/paper separation and CTA emphasis before increasing accent saturation.
- If the user asks for "more playful," push only the painterly support layer and never the typography or button geometry too far.
