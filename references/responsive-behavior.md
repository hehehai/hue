# Responsive Behavior

Responsive behavior is not a post-processing step. It is part of the design language itself: how hierarchy compresses, how components reflow, what gets stacked, what gets hidden, and what absolutely must remain touchable.

Many generated design packages already document colors, typography, radii, and components, but still fail in implementation because they never say what those decisions do on smaller screens. This file closes that gap.

---

## What This Ref Controls

Every generated design package should describe:

- breakpoint names and ranges
- how typography scales across breakpoints
- how layout changes from desktop to tablet to mobile
- how navigation collapses
- how multi-column sections stack
- minimum touch targets
- media behavior for screenshots, images, and video
- any brand-specific responsive constraints

Responsive behavior belongs in both outputs:

- `design-model.yaml` for structured implementation use
- `design-document.md` for human-readable guidance

Neither file should assume responsive behavior is "standard" or "obvious." It must be written down.

---

## Writing Rules

1. **Write named breakpoints, not vague device labels.**
   Good: `tablet: 768-991px`
   Bad: `tablet-ish`

2. **Document the layout change, not just the width.**
   Good: `3-column pricing grid -> stacked cards`
   Bad: `tablet layout`

3. **Preserve brand character while compressing.**
   Cursor on mobile should still feel warm, pill-based, and quiet.
   Linear on mobile should still feel compact and product-first.

4. **Scaling is progressive, not binary.**
   Headline sizes should not jump from `64px` straight to `28px` without an intermediate rule.

5. **Touch targets are mandatory, not optional.**
   Minimum recommended target remains `44x44px` even for visually compact systems.

6. **Do not invent art direction changes unless the brand clearly does them.**
   Responsive behavior changes layout and sizing first.
   It should not introduce a completely different visual language at smaller sizes.

---

## Breakpoint Framework

Use this as the default breakpoint naming system unless the brand clearly needs a different one:

| Name | Width | Default Intent |
|---|---|---|
| `small_mobile` | `<479px` | Minimum layout, stacked everything, compact type |
| `mobile` | `479-640px` | Single-column layout, collapsed nav, reduced hero scale |
| `large_mobile` | `640-767px` | Single-column with more breathing room |
| `tablet` | `768-991px` | 2-column layout begins, condensed nav |
| `desktop` | `992px+` | Full layout, expanded nav, maximum type scale |

This system is deliberately simple. Do not multiply breakpoints unless the brand truly depends on more granular behavior.

---

## Required Responsive Decisions

Every package should document these six areas.

### 1. Typography Scaling

State how major type tokens scale.

Minimum required:

- display
- h1
- h2
- body
- label / caption behavior when relevant

Example pattern:

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| `display` | `64px` | `48px` | `36px` |
| `h1` | `52px` | `40px` | `28px` |
| `body` | `16px` | `16px` | `15px` |

Prefer progressive scaling. For large editorial brands, `clamp()` is often the cleanest expression.

### 2. Layout Reflow

Document how major page structures adapt:

- hero section
- feature grid
- pricing cards
- comparison tables
- sidebars / TOCs
- component libraries / spec tables

Typical patterns:

- `3 columns -> 2 columns -> 1 column`
- `sidebar -> top stack`
- `split hero -> stacked hero`
- `table -> horizontal scroll or card list`

### 3. Navigation Collapse

Every package should state what happens to navigation on smaller screens.

Default rules:

- desktop: full horizontal nav or persistent sidebar
- tablet: condensed nav, reduced utility actions
- mobile: hamburger, drawer, or compact top bar

Do not assume "hide some items" is enough. Say which pattern replaces the full navigation.

### 4. Touch Targets

Document touch target policy even for desktop-first brands.

Minimum standards:

- minimum recommended hit area: `44x44px`
- pill buttons may keep compact visual height only if the tap area remains compliant
- cards may act as large touch targets when that matches the brand

### 5. Image Behavior

Document how screenshots, illustrations, and video behave. Use `Image Behavior` as the Markdown heading even when the rules also cover video.

Required questions:

- does media keep aspect ratio?
- does it scale proportionally inside a rounded container?
- does it crop, shrink, or scroll?
- does video stay `16:9`?
- do hero images keep the same art direction or switch at mobile?

Default rule:

- no art-direction changes between breakpoints unless the real brand clearly does them

### 6. Component Collapse Rules

Document what happens to complex components:

- segmented controls
- data tables
- pricing grids
- code samples
- cards with multiple stats
- side-by-side feature comparisons

Examples:

- segmented control keeps pill shell but becomes horizontally scrollable on narrow mobile
- comparison table becomes stacked cards
- side-by-side metrics become vertical rows

---

## Brand-Type Guidance

Responsive behavior depends on brand type.

### UI-Rich Brands

Examples: Linear, Cursor, Notion, Spotify

Focus on:

- preserving component hierarchy
- reflowing product grids cleanly
- maintaining touch target size
- avoiding cramped control clusters

The main risk is over-compression. Dense desktop product language can become unusable if it is merely shrunk.

### Content-Rich Brands

Examples: editorial, luxury, photography-heavy brands

Focus on:

- preserving reading rhythm
- scaling headlines gracefully
- keeping media legible
- maintaining atmosphere without excessive empty space

The main risk is collapsing into generic stacked blocks that lose the brand's pacing.

---

## YAML Schema

Every generated `design-model.yaml` may include a `responsive_behavior` block like this:

```yaml
responsive_behavior:
  breakpoints:
    small_mobile:
      width: "<479px"
      key_changes:
        - "Minimum layout"
        - "Everything stacks vertically"
        - "Compact type scale"
    mobile:
      width: "479-640px"
      key_changes:
        - "Single-column layout"
        - "Hamburger navigation"
        - "Reduced hero type"
    large_mobile:
      width: "640-767px"
      key_changes:
        - "Single-column layout with wider content area"
    tablet:
      width: "768-991px"
      key_changes:
        - "2-column grids begin"
        - "Condensed navigation"
    desktop:
      width: "992px+"
      key_changes:
        - "Full multi-column layout"
        - "Expanded navigation"
        - "Maximum hero typography"

  typography_scaling:
    display: { desktop: "64px", tablet: "48px", mobile: "36px" }
    h1:      { desktop: "52px", tablet: "40px", mobile: "28px" }
    body:    { desktop: "16px", tablet: "16px", mobile: "15px" }

  touch_targets:
    minimum: "44x44px"
    notes:
      - "Buttons keep generous tap area"
      - "Navigation links stay thumb-friendly"
      - "Cards may act as large touch targets"

  collapsing_strategy:
    navigation: "Full horizontal nav -> hamburger drawer"
    hero: "Split layout -> stacked layout"
    feature_sections: "Multi-column -> single column"
    pricing_cards: "3-column -> stacked vertical"
    tables: "Scrollable table or stacked card list"
    section_padding: "Reduced proportionally while preserving rhythm"

  image_behavior:
    screenshots: "Scale proportionally inside rounded containers"
    illustrations: "Maintain aspect ratio and visual quality"
    video: "Keep 16:9 ratio with rounded corners"
    art_direction_changes: false
```

Keep the schema compact. The point is to document behavior, not create a responsive engine DSL.

---

## Markdown Section Guidance

In `design-document.md`, the responsive section should be scannable and implementation-friendly.

Recommended structure:

```md
## Responsive Behavior

### Breakpoints
{{responsive-breakpoints-table}}

### Touch Targets
{{touch-target-rules}}

### Collapsing Strategy
{{collapsing-strategy-rules}}

### Image Behavior
{{image-behavior-rules}}
```

Use tables for breakpoint names and widths.
Use bullets for collapse and image/media rules.
Keep this section compact. Prefer:

- `Breakpoints`: one concise row per breakpoint
- `Touch Targets`: 2 to 4 bullets
- `Collapsing Strategy`: 3 to 6 bullets
- `Image Behavior`: 2 to 4 bullets

If two bullets say nearly the same thing, merge them.

When the source material already provides a structure, mirror it closely. The preferred section order is:

1. `Breakpoints`
2. `Touch Targets`
3. `Collapsing Strategy`
4. `Image Behavior`

The breakpoint subsection should usually use a 3-column table:

| Name | Width | Key Changes |
|---|---|---|
| `small_mobile` | `<479px` | Minimum layout, stacked everything, compact type |
| `mobile` | `479-640px` | Single-column layout, hamburger nav, reduced heading sizes |
| `large_mobile` | `640-767px` | Slightly wider content area |
| `tablet` | `768-991px` | 2-column grids begin, condensed nav |
| `desktop` | `992px+` | Full multi-column layout, expanded nav, maximum hero typography |

This is the target level of formatting fidelity when the user supplies a concrete responsive reference.

---

## Example Formatting Block

This is a copyable example of the expected tone and structure:

```md
## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small Mobile | <479px | Minimum layout, stacked everything, compact typography |
| Mobile | 479-640px | Single column, hamburger nav, reduced heading sizes |
| Large Mobile | 640-767px | Slightly wider content area |
| Tablet | 768-991px | 2-column grids begin, condensed nav |
| Desktop | 992px+ | Full multi-column layout, expanded nav, maximum hero typography |

### Touch Targets

- Minimum recommended hit area: 44x44px
- Buttons use generous padding (8-16px vertical minimum)
- Card surfaces may act as large touch targets

### Collapsing Strategy

- Navigation: full horizontal nav collapses to hamburger on mobile
- Feature sections: multi-column -> stacked single column
- Hero text scales down progressively
- Model cards: 3-column -> stacked vertical

### Image Behavior

- Product screenshots scale proportionally inside rounded containers
- Video embeds keep a 16:9 aspect ratio with rounded corners
- No art-direction changes between breakpoints
```

---

## Validation Checklist

Before considering responsive behavior complete, verify:

- [ ] Breakpoints are named and ranged
- [ ] Hero scaling is documented
- [ ] Navigation collapse is documented
- [ ] Multi-column sections have a stacking rule
- [ ] Touch target minimum is stated
- [ ] Image behavior is documented
- [ ] No breakpoint introduces an unexplained visual redesign

If these are missing, the package is not responsive-ready.
