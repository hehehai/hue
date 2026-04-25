# 3D and Spatial Scene Systems

Use this ref when a source relies on a live 3D scene, spatial WebGL stage, Three.js object field, Spline embed, model viewer, or similar depth-first environment as part of the design language.

This ref is optional. It exists for intentional spatial systems, not for every site that happens to show a rendered object, autoplay video, or decorative canvas.

---

## What Counts

Activate the `three_d_scene` path only when 3D or spatial rendering materially shapes one or more of these:

- the hero's identity signal
- section depth and atmosphere
- product or object understanding
- pointer or scroll-driven spatial interaction

Typical triggers:

- a live Three.js, React Three Fiber, Spline, Babylon.js, or model-viewer scene
- a canvas or WebGL layer that behaves like a spatial stage rather than a flat animation
- camera motion, parallax depth, or object orbit that defines the page tone
- a 3D object or scene that persists as a meaningful part of the layout, not just a decorative cameo

Do not activate `three_d_scene` for:

- prerecorded product videos
- a static image of a 3D render
- one-off decorative particles with no real spatial logic
- small canvas effects that do not change the perceived depth strategy

Those belong in normal motion posture, `hero_stage`, or `image_direction`, not a dedicated spatial system.

---

## Evidence Priority

Resolve signals in this order:

1. Rendered spatial behavior
2. Runtime scene and DOM signals
3. Code or dependency signals
4. Inference

Rendered behavior wins. A site can ship Three.js and still use it only for trivial decoration.

---

## Detection Dimensions

Capture these dimensions before deciding whether the spatial system is decorative, supportive, or load-bearing.

### Libraries

Use labels such as:

- `Three.js`
- `React Three Fiber`
- `Spline`
- `model-viewer`
- `Babylon.js`
- `PlayCanvas`
- `custom WebGL`

Library names are source-facing evidence. Keep them in `design-meta.yaml` only.

### Integration

Use one of:

- `background-field`
- `hero-object`
- `section-scene`
- `full-page-stage`

### Behaviors

Use labels such as:

- `ambient drift`
- `pointer reactive`
- `scroll reactive`
- `camera orbit`
- `depth parallax`
- `material shift`
- `object reveal`

### Role

Classify the spatial system as:

- `decorative`: adds atmosphere but the layout reads the same without it
- `supportive`: meaningfully reinforces the page's identity or object understanding
- `load-bearing`: the experience materially depends on the spatial scene

Only `supportive` and `load-bearing` should usually produce `optional.three_d_scene`.

---

## Boundary With Other Systems

Keep these layers separate:

- `three_d_scene` handles live spatial logic, scene integration, camera feel, and material behavior
- `hero_stage` handles the resting hero composition
- `scroll_motion` handles scroll-linked progression across the page
- `image_direction` handles still-image or render art direction

If the site uses a still render of an object, that is usually `image_direction`.

If the site uses a live camera-reactive or pointer-reactive object field, that belongs in `three_d_scene`.

---

## Capture Checklist

Look for these signals during browser capture:

### Runtime and dependency signals

- `window.THREE`
- script references to `three`, `@react-three/fiber`, `spline-viewer`, `babylon`, `model-viewer`
- canvas or WebGL contexts initialized for scene rendering

### DOM and style signals

- `canvas`, `model-viewer`, `spline-viewer`, or large WebGL wrappers in hero or section-scale positions
- containers named `scene`, `webgl`, `three`, `spline`, `stage`, `orb`, `viewer`
- layered scene wrappers with clear spatial depth and camera framing

### Behavioral signals

- pointer-driven parallax or object rotation
- camera or object movement that reacts to scroll or hover
- material or lighting changes that help define the brand's atmosphere
- a spatial stage that remains part of the reading experience, not just a loading flourish

Presence of WebGL alone is not enough. The final role depends on whether the scene materially shapes the experience.

---

## Output Mapping

### `design-meta.yaml`

Use `capture_context.three_capture` for source-facing evidence:

- runtime libraries
- integration point
- detected behaviors
- scene-by-scene evidence
- fallback notes when live rendering is unavailable

### `design-model.yaml`

Add `optional.three_d_scene` only when the spatial system is clearly intentional.

Keep it source-agnostic:

- `role`
- `integration`
- `behaviors`
- `spatial_logic`
- `material_logic`
- `fallback`
- `reduced_motion`

Do not include library names, selectors, scene IDs, or runtime object names here.

### `DESIGN.md`

When `optional.three_d_scene` is present:

- describe it under `## Elevation & Depth`
- use the optional `### 3D & Spatial Logic` subsection
- add 1-2 guardrails in `## Do's and Don'ts` when fallback, performance, or reduced motion matter

When the scene is only decorative or only represented by still imagery, omit the subsection.

---

## Default Decision Rules

- If the spatial layer is mostly spectacle, classify it as `decorative`
- If it deepens the page's tone or object understanding in a meaningful but non-essential way, classify it as `supportive`
- If the page is fundamentally designed around the live scene, classify it as `load-bearing`

Bias toward omission. Hue should not over-model minor WebGL flourishes.
