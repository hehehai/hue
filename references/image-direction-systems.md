# Image Direction Systems

Use this ref when a source has a distinctive recurring image language that should be translated into reusable visual direction for downstream design work or AI image generation.

This ref is optional. It exists for intentional image art direction, not for arbitrary CMS photos, inconsistent user content, or one-off decorative assets.

---

## What Counts

Activate the `image_direction` path only when imagery clearly acts as part of the brand or page system.

Typical triggers:

- recurring photography, illustration, render, or collage treatment across multiple surfaces
- a hero image language that materially shapes the first impression
- a consistent set of crops, subjects, lighting, materials, or post-processing choices
- stylized product renders or illustrations that downstream users may need to recreate with AI

Do not activate `image_direction` for:

- random stock photography with no shared art direction
- one isolated hero image with no repeated logic
- user-generated content feeds with inconsistent treatment
- simple decorative textures already captured by `background_graphics`

Those do not justify a dedicated image-direction system.

---

## Evidence Priority

Resolve signals in this order:

1. Rendered imagery and screenshots
2. Recurring art-direction rules across pages
3. Asset filenames, metadata, alt text, or CMS hints
4. Inference

Rendered images win. The goal is to capture visible art direction, not naming conventions.

---

## Detection Dimensions

Capture these dimensions before deciding whether the imagery system is decorative, supportive, or load-bearing.

### Media Types

Use labels such as:

- `photography`
- `illustration`
- `3d render`
- `collage`
- `cutout`
- `mixed media`

### Treatments

Use labels such as:

- `high contrast`
- `soft grain`
- `monochrome`
- `acid accent wash`
- `clean cutout`
- `editorial crop`
- `macro close-up`
- `depth blur`
- `paper texture`

### Role

Classify the image system as:

- `decorative`: images add flavor but are not identity-critical
- `supportive`: images materially reinforce the tone and should stay directionally consistent
- `load-bearing`: the visual identity materially depends on this art direction

Only `supportive` and `load-bearing` should usually produce `optional.image_direction`.

---

## Boundary With Other Systems

Keep these layers separate:

- `image_direction` handles still-image art direction and reusable generation cues
- `three_d_scene` handles live spatial scenes
- `hero_stage` handles composition and medium choice for the hero
- `background_graphics` handles generated non-asset background treatments

If the source uses live 3D, that belongs in `three_d_scene`.

If the source uses still renders, photography, or illustration with consistent treatment, that belongs in `image_direction`.

---

## Capture Checklist

Look for these signals during browser capture:

### Visual signals

- recurring subject scale, crop, camera angle, or focal depth
- repeated lighting behavior such as harsh flash, soft studio, silhouette, or rim light
- consistent background treatment such as paper, void, gradient field, or clean cutout
- repeated post-processing such as grain, duotone, desaturation, or strong contrast shaping

### Structural signals

- image-heavy modules with similar aspect ratios or compositions
- hero and section imagery that clearly belong to the same visual family
- repeated separation between subject and background

### Behavioral signals

- imagery is treated as a core storytelling layer, not filler
- the same visual language appears across homepage, case pages, and detail modules
- downstream recreation would benefit from explicit image-generation cues

---

## Output Mapping

### `design-meta.yaml`

Use `capture_context.image_capture` for source-facing evidence:

- media types
- recurring subjects
- observed treatments
- composition patterns
- screenshot or asset evidence

### `design-model.yaml`

Add `optional.image_direction` only when the imagery system is clearly intentional.

Keep it source-agnostic:

- `role`
- `media_types`
- `subject_patterns`
- `composition_logic`
- `treatment_rules`
- `generation_cues`
- `avoid`

Do not include source filenames, asset URLs, or branded campaign labels here.

### `DESIGN.md`

When `optional.image_direction` is present:

- describe it under `## Overview`
- use the optional `### Image Direction` subsection
- add 1-2 guardrails in `## Do's and Don'ts` when originality, consistency, or generation quality matters

When the site has no clear recurring image language, omit the subsection entirely.

---

## Default Decision Rules

- If imagery is loosely decorative, classify it as `decorative`
- If it strongly supports the atmosphere and should be recreated directionally, classify it as `supportive`
- If the brand's identity materially depends on the image language, classify it as `load-bearing`

Bias toward omission. Hue should not pretend every site has an image system worth codifying.
