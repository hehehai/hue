# Custom Cursor Systems

Use this ref when a source replaces, augments, or significantly restyles the pointer globally or inside specific high-intent zones.

This ref is optional. It exists for intentional cursor systems, not for ordinary pointer semantics like `cursor: pointer` on links and buttons.

---

## What Counts

Activate the `custom_cursor` path only when the cursor treatment is clearly designed as part of the experience.

Typical triggers:

- the native cursor is hidden and replaced with a follower
- the pointer changes shape, size, label, or blend mode across the site
- specific zones introduce a distinct cursor mode such as `drag`, `view`, or `play`
- the pointer behaves as a visual object rather than a default OS affordance

Do not activate `custom_cursor` for:

- normal `cursor: pointer` on clickable elements
- text-selection cursors
- resize cursors from native browser behavior
- one-off novelty cursors that appear only in a trivial demo block

Those do not justify a full cursor system.

---

## Evidence Priority

Resolve signals in this order:

1. Rendered cursor behavior
2. Runtime or DOM overlay signals
3. Code or dependency signals
4. Inference

Rendered behavior wins. Some sites ship cursor code but leave the native pointer intact for the actual experience.

---

## Detection Dimensions

Capture these dimensions before deciding whether the cursor system is decorative, supportive, or load-bearing.

### Scope

Use one of:

- `global`
- `section-only`
- `hover-zones`

### Modes

Use labels such as:

- `default follower`
- `dot + ring`
- `label swap`
- `media hover`
- `drag cue`
- `magnetic target`
- `blend-mode pointer`

### Role

Classify the cursor system as:

- `decorative`: mostly flavor, no major interaction consequence
- `supportive`: reinforces interaction or brand tone in a meaningful but non-essential way
- `load-bearing`: interaction understanding materially depends on the custom cursor

Only clearly intentional systems should produce `optional.custom_cursor`.

---

## Boundary With Other Systems

Keep these layers separate:

- `custom_cursor` handles pointer appearance and mode changes
- `entry_motion` handles the first-load sequence
- `scroll_motion` handles scroll-linked progression
- ordinary hover states stay in the normal interaction posture

If the page simply enlarges cards on hover, that is not a custom cursor system.

If the pointer becomes a labeled follower in media zones or across the whole site, that belongs in `custom_cursor`.

---

## Capture Checklist

Look for these signals during browser capture:

### Runtime and dependency signals

- cursor plugins or files named `cursor`, `mouse-follower`, `trail`, `magnetic`
- pointer layers attached to `mousemove` or `pointermove`

### DOM and style signals

- `body` or `html` using `cursor: none`
- fixed overlays with `pointer-events: none` and cursor-like class names
- attributes like `data-cursor`, `data-cursor-text`, `data-magnetic`
- zone-specific cursor overrides in hero media, galleries, carousels, or drag surfaces

### Behavioral signals

- the cursor enlarges, relabels, or changes blend mode when entering key zones
- the pointer becomes a branded object rather than a default system cursor
- interaction hints rely on the cursor mode, but still remain understandable without it

Plain pointer styling alone is not enough.

---

## Output Mapping

### `design-meta.yaml`

Use `capture_context.cursor_capture` for source-facing evidence:

- scope
- cursor modes
- libraries or plugins
- zone-by-zone behavior
- overlay evidence

### `design-model.yaml`

Add `optional.custom_cursor` only when the site uses a global or clearly intentional zone-specific cursor treatment.

Keep it source-agnostic:

- `role`
- `scope`
- `behavior_modes`
- `zone_logic`
- `constraints`
- `fallback`

Do not include plugin names, selectors, or DOM node IDs here.

### `DESIGN.md`

When `optional.custom_cursor` is present:

- describe it under `## Components`
- use the optional `### Cursor Behavior` subsection
- add 1-2 guardrails in `## Do's and Don'ts` when fallback and accessibility matter

When the site only uses normal pointer semantics, omit the subsection entirely.

---

## Default Decision Rules

- If the pointer treatment is mostly novelty, classify it as `decorative`
- If it reinforces interaction and tone without becoming essential, classify it as `supportive`
- If understanding the interaction model materially depends on cursor modes, classify it as `load-bearing`

Bias toward omission. Hue should not over-model default cursor behavior.
