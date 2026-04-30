# Component Extraction Policy

Hue component tokens are **visual recipes**, not CSS audit records.

Use this reference whenever a source includes UI components such as buttons, cards, inputs, navigation, pills, rows, tabs, badges, or product windows.

## Priority Order

When component evidence conflicts, resolve it in this order:

1. **Rendered visual result** from screenshot or direct browser observation.
2. **Measured geometry** from DOM rects, including visible width, height, radius, and spacing.
3. **Computed CSS** from the target element, parent wrapper, and pseudo-elements.
4. **Source tokens** from code, CSS variables, Tailwind config, or component files.
5. **Semantic inference** only when the source is incomplete or inaccessible.

Do not copy a computed CSS value into `design-model.yaml` just because it is precise. A precise CSS value can still be the wrong design value.

## Why Computed CSS Is Not Enough

Computed styles frequently miss the visible component recipe because:

- the visible fill comes from a parent wrapper while the button itself is transparent
- borders or highlights are drawn by `::before`, `::after`, inset shadows, or overlay layers
- background colors are blended through opacity, filters, backdrop blur, or translucent surfaces
- spacing is split between wrapper padding, inner content gaps, and line-height
- hover/focus states are class-driven or group-driven rather than visible on the target node
- product windows and cards often use nested shells where no single DOM element owns the full visual style

## Required Capture Shape

For every component family you include, capture only 1-4 representative variants. Prefer clear, typical instances over unusual hero-only or campaign-only instances.

For each representative instance, collect:

- `role`: button, card, input, navigation item, badge, row, product window, or similar
- `label`: short source-facing label for meta only
- `rect`: width, height, and screen location
- `computed`: target element CSS plus immediate parent and pseudo-element highlights
- `visual`: what is actually visible in the screenshot
- `state`: default, hover, focus, active, disabled, selected, or loading when visible
- `confidence`: high, medium, or low

Keep this capture evidence in `design-meta.yaml`. Do not put source labels, selectors, URLs, or confidence fields in `design-model.yaml`.

## Visual Reconciliation Rules

Use these rules when turning evidence into `design-model.yaml.components`:

- `background` means the visible component fill, after parent surfaces and transparency are considered.
- `text` means the visible foreground text/icon color, not merely inherited `color`.
- `border` means the visible outline treatment; include `none` when the component intentionally has no outline.
- `radius` means the visible outside corner radius of the component shell.
- `padding` means the recipe needed to recreate the visual spacing, even if the source splits it across nested nodes.
- `min_height` means the visible control height, rounded to a reusable value.
- `shadow` means the visible depth effect; combine layered shadows into one practical value when needed.
- `hover`, `focus`, `active`, and `disabled` are state recipes, not event handler specs.

If screenshot observation and computed CSS disagree, prefer the visual result and record the disagreement in `design-meta.yaml.capture_context.component_capture.notes`.

## Contrast Sanity Check

Do not treat a low computed contrast reading as truth by default.

Normal production UI usually keeps text and key controls readable against their visible surfaces. When a component appears to have unreadable contrast, first verify whether the reading is distorted by:

- a transparent child sitting on an opaque parent shell
- pseudo-elements, gradients, overlays, or masks that carry the visible fill
- transient loading, intro, disabled, hover, or pressed states
- backdrop blur or alpha blending that changes the real visible contrast
- capture timing problems, stale paint, or incomplete browser rendering

If the component still looks low-contrast after screenshot inspection and DOM reconciliation, mark that evidence as low confidence in `design-meta.yaml` and avoid promoting it into `design-model.yaml` unless the low-contrast behavior is clearly intentional and repeated.

## Output Rules

`design-model.yaml.components` should stay compact and machine-usable:

```yaml
components:
  buttons:
    primary:
      background: "#26251E"
      text: "#F7F7F4"
      border: "1px solid #26251E"
      radius: "{tokens.radii.control}"
      padding: "0.75rem 1rem"
      min_height: "40px"
      typography: "label"
      shadow: "none"
      hover:
        background: "#14120B"
      focus:
        ring: "2px solid rgba(245, 78, 0, 0.30)"
```

Avoid:

- selectors
- source class names
- implementation-only CSS variables with no visible meaning
- dozens of observed instances
- separate component entries for status colors such as `states.success`
- provenance fields inside component blocks

## Confidence Guidance

Use `high` when screenshot, computed geometry, and source tokens agree.

Use `medium` when the screenshot is clear but DOM/CSS ownership is split across wrappers or pseudo-elements.

Use `low` when the component is inferred from partial evidence. Low-confidence components should usually be omitted unless they are central to the design language.

## Local Codebase Inputs

When analyzing a codebase, prefer rendered stories, previews, route screenshots, or component demos over raw component source. If only source code exists, use tokens as candidate values and still synthesize into visual recipes.

Do not let a large token file create a large component model. Only include component categories that are visually important to the source.
