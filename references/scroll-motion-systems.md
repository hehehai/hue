# Scroll Motion Systems

Use this ref when a source appears to rely on scroll-linked motion, staged reveals, parallax, pinned chapters, or other page-level sequencing that affects how the experience is read.

This ref does not replace the normal motion posture. It decides whether the page has a distinct scroll or motion system that is important enough to model separately.

---

## What Counts

Activate the `scroll_motion` path only when motion clearly affects one or more of these:

- reading order across sections
- hierarchy progression within a section
- brand recognition or signature atmosphere
- hero storytelling that depends on scroll progression rather than a static composition

Typical triggers:

- pinned or scrubbed hero progression
- sticky chapter layouts where copy advances against a fixed visual
- staged feature reveals
- depth parallax with multiple layers moving at different rates
- horizontal sequences driven by vertical scroll
- canvas or WebGL surfaces that react to scroll or pointer as a primary part of the page

Do not activate `scroll_motion` for:

- hover states
- button transitions
- accordion open and close
- loaders and skeleton shimmer
- autoplay loops that do not affect reading order
- subtle hero breathing or background drift

Those belong to the normal motion posture, not a page-level scroll system.

---

## Evidence Priority

When signals disagree, resolve them in this order:

1. Rendered behavior in the browser
2. Runtime signals
3. Code or dependency signals
4. Inference from screenshots or structure

Rendered behavior wins. A page can import GSAP and still have no meaningful scroll narrative. A page can also have a strong scroll system with no third-party library at all.

---

## Detection Dimensions

Capture these dimensions before deciding whether the motion system is decorative, supportive, or load-bearing.

### Libraries

Use these labels when detected:

- `gsap`
- `ScrollTrigger`
- `Framer Motion`
- `Motion`
- `Lenis`
- `locomotive-scroll`
- `AOS`
- `IntersectionObserver`
- `CSS-only`
- `custom`

Library names are source-facing evidence. Keep them in `design-meta.yaml` only.

### Patterns

Use pattern labels such as:

- `reveal`
- `stagger`
- `parallax`
- `pinned section`
- `scrubbed timeline`
- `sticky chapter`
- `marquee`
- `scroll progress`
- `canvas/webgl reactive`

You may use more concrete phrasing in `design-model.yaml`, such as `pinned hero progression` or `section reveal`, but stay source-agnostic there.

### Scroll Driver

Choose one:

- `native`
- `smooth`
- `hijacked/pinned`

Use the simplest label that matches the rendered behavior. Do not infer `smooth` or `hijacked/pinned` from a library import alone.

### Role

Classify the page-level system as one of these:

- `decorative`: motion decorates the page but does not change reading logic
- `supportive`: motion reinforces hierarchy or progression, but the page still works clearly as a static composition
- `load-bearing`: the page narrative materially depends on scroll-linked sequencing or pinned progression

Only `supportive` and `load-bearing` should produce `optional.scroll_motion`.

---

## Boundary With `hero_stage`

Keep these layers separate:

- `hero_stage` handles hero composition, background medium, hero subject, relation, and hero-only motion
- `scroll_motion` handles page-level progression, section sequencing, pinning, scrub, sticky chapters, and scroll-linked narrative

If the hero has a drifting mesh but the rest of the page reads normally, that stays in `hero_stage`.

If the hero is pinned while copy steps through a sequence, or the page uses sticky sections to advance the story, that belongs in `scroll_motion`.

Do not stuff page progression into `hero_stage`.

---

## Capture Checklist

Look for these signals during browser capture:

### Runtime and dependency signals

- `window.gsap`
- `window.ScrollTrigger`
- `window.Lenis`
- `window.Motion`
- script references to `framer-motion`, `locomotive-scroll`, or `aos`

### DOM and style signals

- `position: sticky`
- large wrappers that hold a visual while nearby copy changes
- elements whose motion is driven mostly by `transform` and `opacity`
- viewport-sized sections arranged as a sequence
- progress indicators, marquees, canvas layers, or scrub targets
- attributes such as `data-scroll`, `data-speed`, `data-parallax`, `data-aos`

### Behavioral signals

- pinned hero progression
- feature steppers that advance with scroll
- horizontal movement controlled by vertical scroll
- layered depth parallax
- canvas or WebGL scenes that respond to scroll or pointer in a way that defines the page

Presence of these signals is not enough on its own. The final role still depends on whether the behavior materially shapes the reading experience.

---

## Output Mapping

### `design-meta.yaml`

Use `capture_context.motion_capture` for source-facing evidence:

- library names
- runtime observations
- data attributes
- sticky or pinned structures
- section-by-section flow

This is the only place where source-specific library names and runtime details should appear.

### `design-model.yaml`

Add `optional.scroll_motion` only when the role is `supportive` or `load-bearing`.

Keep it source-agnostic:

- `role`
- `scroll_driver`
- `cadence`
- `patterns`
- `page_logic`
- `constraints`
- `reduced_motion`

Do not include `gsap`, `ScrollTrigger`, `Lenis`, `Framer Motion`, selectors, or runtime object names here.

### `DESIGN.md`

When `optional.scroll_motion` is present:

- describe the page-level logic under `## Layout`
- use the optional `### Scroll Rhythm & Narrative` subsection
- add 1-2 implementation-facing motion or scroll rules under `## Do's and Don'ts`

When motion is only decorative, keep it in the normal motion posture and omit the layout subsection.

---

## Default Decision Rules

- If motion only decorates surfaces, classify it as `decorative`
- If motion helps hierarchy but the page remains fully legible without it, classify it as `supportive`
- If scroll sequencing is necessary to understand the intended story or pacing, classify it as `load-bearing`

Bias toward `decorative` unless the page clearly proves otherwise. Hue should avoid false positives and keep output lightweight.
