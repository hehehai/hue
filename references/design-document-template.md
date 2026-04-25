---
version: alpha
name: {{system-name}}
description: {{system-description}}
colors:
  primary: "{{color-primary}}"
  secondary: "{{color-secondary}}"
  tertiary: "{{color-tertiary}}"
  neutral: "{{color-neutral}}"
  surface: "{{color-surface}}"
  border: "{{color-border}}"
  on-surface: "{{color-on-surface}}"
typography:
  headline-display:
    fontFamily: {{font-display}}
    fontSize: {{font-size-display}}
    fontWeight: {{font-weight-display}}
    lineHeight: {{line-height-display}}
    letterSpacing: {{letter-spacing-display}}
  headline-md:
    fontFamily: {{font-display}}
    fontSize: {{font-size-headline-md}}
    fontWeight: {{font-weight-headline-md}}
    lineHeight: {{line-height-headline-md}}
  body-md:
    fontFamily: {{font-body}}
    fontSize: {{font-size-body}}
    fontWeight: {{font-weight-body}}
    lineHeight: {{line-height-body}}
  label-sm:
    fontFamily: {{font-label}}
    fontSize: {{font-size-label}}
    fontWeight: {{font-weight-label}}
    lineHeight: {{line-height-label}}
rounded:
  sm: {{radius-sm}}
  md: {{radius-md}}
  lg: {{radius-lg}}
  full: {{radius-full}}
spacing:
  xs: {{spacing-xs}}
  sm: {{spacing-sm}}
  md: {{spacing-md}}
  lg: {{spacing-lg}}
  xl: {{spacing-xl}}
  section: {{spacing-section}}
components:
  page-shell:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    padding: "{spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
---

# {{system-name}}

## Overview

{{overview}}

<!-- Omit this subsection when the site has no clear recurring image art direction worth codifying. -->
### Image Direction

{{image-direction}}

<!-- Omit this subsection when there is no intentional first-load or arrival sequence. -->
### Entry & Arrival Motion

{{entry-and-arrival-motion}}

## Colors

{{colors}}

## Typography

{{typography}}

## Layout

{{layout}}

<!-- Omit this subsection when page-level scroll motion is decorative only. -->
### Scroll Rhythm & Narrative

{{scroll-rhythm-and-narrative}}

## Elevation & Depth

{{elevation-and-depth}}

<!-- Omit this subsection when the site does not use an intentional live 3D or spatial scene system. -->
### 3D & Spatial Logic

{{three-d-and-spatial-logic}}

## Shapes

{{shapes}}

## Components

<!-- Omit this subsection when the site does not use a custom cursor system. -->
### Cursor Behavior

{{cursor-behavior}}

{{components}}

Component values should be written as visible design recipes. If a source component relies on wrappers, pseudo-elements, or translucent layers, describe the perceived component treatment rather than the raw computed style of one DOM node.

## Do's and Don'ts

{{dos-and-donts}}

When `optional.entry_motion`, `optional.scroll_motion`, `optional.custom_cursor`, `optional.three_d_scene`, or `optional.image_direction` are present, include 1-3 source-agnostic guardrails in this section. Keep them implementation-facing and focused on cadence, readability, fallback behavior, reduced-motion behavior, originality, or generation quality rather than library choice.
