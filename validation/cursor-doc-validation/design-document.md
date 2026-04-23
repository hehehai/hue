# Design System: Warm Engineering Canvas

## 1. Visual Theme & Atmosphere

A restrained, product-led interface with the calm confidence of a well-edited software manual. The mood is warm, precise, and quietly premium rather than flashy or futuristic. It should feel like a serious technical company with taste: cream paper backgrounds, ink-dark type, thin structural borders, and software demos framed as the hero image rather than decorative illustration.

Taste calibration:
- Density: `4/10` — balanced and breathable
- Variance: `3/10` — mostly orderly, with large media slabs as the main dramatic move
- Motion: `3/10` — understated, almost infrastructural

Core emotional cues:
- Calm over hype
- Precision over novelty
- Product proof over decorative storytelling
- Warm trust over cold futurism

## 2. Color Palette & Roles

- **Paper Canvas** (`#F7F7F4`) — Primary page background; the dominant surface color
- **Quiet Card** (`#F2F1ED`) — Light inset panels, muted product frames, grouped content surfaces
- **Soft Divider Surface** (`#EBEAE5`) — Secondary cards and subtle grouped zones
- **Pressed Surface** (`#E6E5E0`) — Hover and active neutral states
- **Ink Charcoal** (`#26251E`) — Primary text, icon strokes, and primary CTA fill
- **Muted Ink** (`rgba(38, 37, 30, 0.60)`) — Secondary copy, metadata, timestamps, helper text
- **Whisper Border** (`rgba(38, 37, 30, 0.10)`) — Standard dividers, structural lines, container borders
- **Signal Orange** (`#F54E00`) — Sparse emphasis signal for recommendation, focus, or narrative push
- **Soft Accent Tint** (`#FFF2EB`) — Subtle accent background; never the dominant field

Usage rules:
- Keep most of the page inside the warm-neutral family.
- Use the dark ink color for primary actions before reaching for the accent.
- Let the accent behave like a signal, not a blanket fill strategy.
- Keep chroma low and concentrated.

## 3. Typography Rules

- **Display / UI Sans:** `Geist`
  - Neutral grotesk with very little weight drama
  - Use size, spacing, and placement before weight jumps
  - Preferred hero scale: `clamp(2.6rem, 6vw, 4.6rem)`
- **Body Sans:** `Geist`
  - Same calm voice as the display face
  - Body size should stay around `1rem`
  - Max measure: `62ch`
  - Line height: `1.55` to `1.65`
- **Mono:** `JetBrains Mono`
  - Use for code, terminal snippets, utility chrome, and precise technical detail
  - Keep it embedded inside product surfaces, not across the full page

Typographic rules:
- Keep the system low-theatrics and low-ornament.
- Avoid dramatic weight ladders.
- Use mono as support material, not as the main voice.
- Preserve a calm editorial posture even when the content is technical.

## 4. Component Stylings

- **Buttons:** Primary actions are ink-dark pills with warm light text. Secondary actions are restrained ghost or quiet-surface pills. Hover should be a soft darkening or tiny lift, never a glow.
- **Cards:** Use lightly tinted neutral panels, not glossy elevated cards. Large panels should feel inset into the page rather than floating above it.
- **Inputs:** Calm white or soft-neutral fill, label above field, border-first styling, and a focus treatment that uses the accent with low spread.
- **Navigation:** Thin, text-led, almost editorial. Group one high-intent action on the right. Avoid chunky nav chrome.
- **Metric Blocks:** Use disciplined right-column stats or stacked modules rather than colorful KPI tiles.
- **Loading / Empty / Error States:** Prefer skeletons over spinners, and concise inline error text over theatrical state illustrations.

## 5. Layout Principles

- Use contained widths and large negative space.
- Default max-width should stay around `1280px` to `1300px`.
- Prefer one strong media object over many competing cards.
- Let product windows and screenshots carry the visual drama.
- Use two-column editorial layouts for case studies and proof-heavy sections.
- Avoid default SaaS patterns like equal 3-card feature rows.
- Collapse all multi-column layouts below `768px`.
- Keep section rhythm generous: `clamp(4rem, 7vw, 7rem)` is the right order of magnitude.

## 6. Motion & Interaction

Motion should feel understated and almost infrastructural.

- Default transition duration: `150ms` to `220ms`
- Easing: `cubic-bezier(.4, 0, .2, 1)`
- Spring baseline, when needed: `stiffness: 100`, `damping: 20`
- Animate `opacity` and `transform` first
- Button hover: tiny lift or soft darkening
- Card hover: minimal background shift, not a large elevation jump
- Demo surfaces may show subtle product activity; surrounding marketing chrome should remain quiet

## 7. Anti-Patterns (Banned)

- No neon glows or chromatic outer shadows
- No generic dark AI futurism as the default expression
- No oversized badge piles above the hero
- No gradient text headlines
- No three equal marketing cards as the main feature section
- No high-chroma accent buttons everywhere
- No cold white or cool-gray drift that breaks the warm-neutral palette
- No oversized mono usage across the main marketing surface
- No parallax or cinematic hero effects that compete with the product window
- No generic hype-copy that promises magic instead of showing proof
