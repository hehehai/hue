# Entry Motion Systems

Use this ref when a source stages its first impression with a preloader, an opening veil, a hero entrance sequence, or any other intentional arrival choreography that happens when the page first appears.

This ref is optional. It exists only for first-load or first-view motion, not for general micro interactions or scroll-linked narrative.

---

## What Counts

Activate the `entry_motion` path only when the page clearly uses a first-load or arrival sequence to shape the initial impression.

Typical triggers:

- a full-screen preloader or opening overlay
- a staged reveal where hero copy, media, or background resolve in sequence
- a first-frame transition from blank, masked, or obscured state to the settled hero
- an intro animation that sets tone before the page reaches its resting state

Do not activate `entry_motion` for:

- a normal fade-in on one or two elements
- hover or focus states
- subtle background breathing after the page is already visible
- a loader that only covers network delay but has no designed choreography
- scroll-triggered reveal that happens only after the user moves down the page

Those belong to normal motion posture or `scroll_motion`, not an entry system.

---

## Evidence Priority

Resolve signals in this order:

1. Rendered first-load behavior
2. Runtime signals and active animation states
3. Code or dependency signals
4. Inference

Rendered behavior wins. A page may ship a preloader component but never actually use it in the visible experience.

---

## Detection Dimensions

Capture these dimensions before deciding whether the entry system is decorative, supportive, or load-bearing.

### Trigger

Use the simplest matching label:

- `every-load`
- `session-once`
- `first-visit-only`

### Patterns

Use labels such as:

- `overlay reveal`
- `curtain lift`
- `hero staged entrance`
- `logo preloader`
- `ambient field wake-up`
- `mask-to-settle`

### Role

Classify the entry system as:

- `decorative`: adds polish but does not materially shape perception
- `supportive`: helps define tone and pacing, but the page still works clearly without it
- `load-bearing`: the first impression materially depends on the arrival sequence

Only `supportive` and `load-bearing` usually deserve `optional.entry_motion`.

---

## Boundary With Other Systems

Keep these layers separate:

- `entry_motion` handles what happens when the page first appears
- `hero_stage` handles the resting hero composition and hero-only ambient motion
- `scroll_motion` handles progression that depends on scrolling after arrival

If the hero background gently drifts once the page is settled, that belongs in `hero_stage`.

If the hero is hidden by an opening veil and then revealed in sequence, that belongs in `entry_motion`.

If the story advances only after scrolling, that belongs in `scroll_motion`.

---

## Capture Checklist

Look for these signals during browser capture:

### Runtime and dependency signals

- script references to `barba`, `anime.js`, `Splitting`, or `Lottie`
- animated full-screen overlays
- large first-frame transforms or opacity transitions in the hero

### DOM and style signals

- fixed or absolute layers covering much of the viewport on load
- classes like `preloader`, `loader`, `intro`, `opening`, `reveal`, `enter`
- hero elements that appear masked, offset, or invisible before settling

### Behavioral signals

- page opens on a designed veil or splash before content resolves
- hero media and copy arrive in an authored order
- the initial animation clearly establishes brand tone or mode

Presence of a loader alone is not enough. The sequence has to feel designed, not merely functional.

---

## Output Mapping

### `design-meta.yaml`

Use `capture_context.entry_capture` for source-facing evidence:

- trigger pattern
- overlay or hero entrance evidence
- sequence steps
- runtime or code hints

### `design-model.yaml`

Add `optional.entry_motion` only when the first-load sequence is clearly intentional.

Keep it source-agnostic:

- `role`
- `trigger`
- `patterns`
- `sequence_logic`
- `constraints`
- `reduced_motion`

Do not include library names, selectors, or overlay IDs here.

### `DESIGN.md`

When `optional.entry_motion` is present:

- describe it under `## Overview`
- use the optional `### Entry & Arrival Motion` subsection
- add 1-2 guardrails in `## Do's and Don'ts` when the sequence materially affects pacing or accessibility

When the sequence is only incidental or decorative, keep it in the normal motion posture and omit the subsection.

---

## Default Decision Rules

- If the first-load behavior is barely more than a fade, classify it as `decorative`
- If it noticeably shapes tone but the page still works clearly without it, classify it as `supportive`
- If the opening sequence materially defines how the page is meant to be perceived, classify it as `load-bearing`

Bias toward omission. Hue should not over-model trivial entrance animation.
