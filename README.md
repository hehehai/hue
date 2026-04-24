# hue

an open-source Codex skill that learns a brand from a URL, name, screenshot, vibe description, or local codebase and turns it into a lightweight design package for AI-assisted generation.

see it in action: **[hueapp.io](https://hueapp.io)**

## what you get

hue writes three artifacts:

- `design-meta.yaml` as the source-facing capture and provenance record
- `design-model.yaml` as the lightweight machine-readable design model
- `DESIGN.md` as the main human-readable design brief

the default output uses Google's public `DESIGN.md` format directly: YAML frontmatter for schema-valid tokens plus Markdown sections for rationale and guardrails. the markdown is the primary artifact for prompting and design direction. the yaml stays useful for hue-specific structured reuse, but it no longer tries to mirror every detail at implementation-spec depth.

the package is designed to work well with AI page generators such as Stitch and similar tools:
- clear atmosphere
- color roles
- typography behavior
- component feel
- layout rules
- motion posture
- anti-patterns

`DESIGN.md` should pass the official validator:

```bash
npx @google/design.md lint DESIGN.md
```

## install

```bash
git clone https://github.com/dominikmartn/hue "${CODEX_HOME:-$HOME/.codex}/skills/hue"
```

## when to use hue

use `hue` when the goal is to **distill a source design language into a reusable design brief**, not when the goal is to directly ship UI code.

good fits:

- analyze a live website and turn it into a reusable design system package
- analyze a brand from its official website
- analyze screenshots and infer a stable design language
- analyze a local frontend codebase without overfitting to raw token volume
- translate a vibe description into a concrete design language
- remix an existing hue package to feel warmer, calmer, sharper, more editorial, or less strict

not the default use:

- generic "build me a landing page" implementation requests
- exhaustive component audits unless explicitly requested
- silently applying the style system without explicit hue invocation

## accepted input modes

hue supports:

- `brand name`
- `url`
- `local codebase`
- `screenshots / images`
- `description / vibe`
- `remix`

the skill defaults to direct browser inspection via `browser-automation`, then falls back to public web sources, local code, or screenshots if direct inspection is blocked. hue closes any browser session it opens after capture to avoid leaked browser processes.

## output contract

by default, hue writes exactly:

- `design-meta.yaml`
- `design-model.yaml`
- `DESIGN.md`

the contract is unchanged at the file level, but the emphasis has changed:

- `DESIGN.md` is the main deliverable
- `design-model.yaml` is a lighter companion model
- `design-meta.yaml` continues to hold source identifiers and provenance

in other words: hue keeps the three-file package, but the markdown artifact is now the official `DESIGN.md` file rather than a separate `design-document.md` that must be merged later.

`design-model.yaml` is still token-oriented. Component blocks should use concrete parameters such as `background`, `text`, `border`, `radius`, `padding`, `min_height`, `typography`, `shadow`, `hover`, `focus`, and `disabled`, not prose summaries. These component values are visual recipes, not raw computed-style dumps. Higher-level component rationale belongs in `DESIGN.md`.

html previews, component libraries, landing pages, app screens, or code snippets remain optional follow-up artifacts only when explicitly requested.

## component extraction

hue treats component tokens as **visual-first recipes**:

- screenshots and visible geometry outrank raw computed CSS
- computed styles are candidate evidence, not final truth
- wrapper styles, pseudo-elements, opacity, and parent surfaces must be reconciled before writing component tokens
- `design-meta.yaml` records capture confidence and source disagreements
- `design-model.yaml` only keeps the reusable component recipe

see [`component-extraction-policy.md`](/Users/guanwei/x/doit/hue/references/component-extraction-policy.md) for the detailed rule set.

## design philosophy of the skill

hue now follows one central rule:

> **prefer expressive constraints over exhaustive constraints**

that means:

- keep the design language clear
- include the values that actually steer generation
- ban the moves that would break the identity
- avoid turning every source into a rigid implementation spec

good hue output should still be opinionated, but it should leave room for downstream AI tools to compose strong screens instead of boxing them in with too many micro-rules.

## invocation patterns

`hue` is explicit-invocation only. say things like:

- `use hue`
- `$hue`
- `create a design document`
- `generate a DESIGN.md`
- `generate a design-model yaml`
- `generate a design system document`
- `analyze this site and produce yaml + markdown`
- `remix this existing design document`

it should not trigger automatically for generic frontend or UI implementation work.

## default document shape

the default `DESIGN.md` follows Google's public section order:

1. `Overview`
2. `Colors`
3. `Typography`
4. `Layout`
5. `Elevation & Depth`
6. `Shapes`
7. `Components`
8. `Do's and Don'ts`

this keeps the output short, reusable, and easy to feed into AI tools.

the file also includes YAML frontmatter tokens for `colors`, `typography`, `rounded`, `spacing`, and `components`.

## official DESIGN.md compatibility

google's public spec lives here:

- [`google-labs-code/design.md`](https://github.com/google-labs-code/design.md)

the official format combines:

- YAML front matter for machine-readable tokens
- markdown sections for design rationale

hue does **not** replace its three-file package with a single file, but its Markdown file is now `DESIGN.md` and uses the official buckets:

- Overview
- Colors
- Typography
- Layout
- Elevation & Depth
- Shapes
- Components
- Do's and Don'ts

if you want to validate an exported official-format file, use:

```bash
npx @google/design.md lint DESIGN.md
```

the repo also includes a validation sample at [`validation/cursor-doc-validation/DESIGN.md`](/Users/guanwei/x/doit/hue/validation/cursor-doc-validation/DESIGN.md) that follows the public format while staying aligned with hue's lighter synthesis.

## reference map

all reference files live in [`references/`](/Users/guanwei/x/doit/hue/references).

### always-on core refs

- [`design-document-template.md`](/Users/guanwei/x/doit/hue/references/design-document-template.md)
  controls the default official-format `DESIGN.md` shape.
- [`design-meta-template.yaml`](/Users/guanwei/x/doit/hue/references/design-meta-template.yaml)
  controls the structure of `design-meta.yaml`.
- [`hero-stage.md`](/Users/guanwei/x/doit/hue/references/hero-stage.md)
  use when hero treatment is genuinely central to the design language.
- [`icon-kits.md`](/Users/guanwei/x/doit/hue/references/icon-kits.md)
  use when icon fallback selection materially matters.
- [`google-design-md-compat.md`](/Users/guanwei/x/doit/hue/references/google-design-md-compat.md)
  use for every default `DESIGN.md` output and validation pass.
- [`component-extraction-policy.md`](/Users/guanwei/x/doit/hue/references/component-extraction-policy.md)
  use whenever component tokens are generated from a URL, screenshot, or codebase.

### conditional refs

- [`background-shaders.md`](/Users/guanwei/x/doit/hue/references/background-shaders.md)
  use only when the source clearly relies on shader-heavy identity.
- [`preview-template.md`](/Users/guanwei/x/doit/hue/references/preview-template.md)
  use when the user explicitly asks for a visual preview.
- [`component-library-template.md`](/Users/guanwei/x/doit/hue/references/component-library-template.md)
  use when the user explicitly asks for a component-library artifact.
- [`landing-page-template.md`](/Users/guanwei/x/doit/hue/references/landing-page-template.md)
  use when the user explicitly asks for a landing-page artifact.
- [`app-screen-template.md`](/Users/guanwei/x/doit/hue/references/app-screen-template.md)
  use when the user explicitly asks for an app-screen artifact.

### legacy refs

these remain in the repo for older artifact shapes and reference work, but they are no longer the default direction:

- [`background-graphics.md`](/Users/guanwei/x/doit/hue/references/background-graphics.md)
- [`components-template.md`](/Users/guanwei/x/doit/hue/references/components-template.md)
- [`tokens-template.md`](/Users/guanwei/x/doit/hue/references/tokens-template.md)
- [`platform-mapping-template.md`](/Users/guanwei/x/doit/hue/references/platform-mapping-template.md)
- [`skill-template.md`](/Users/guanwei/x/doit/hue/references/skill-template.md)

## workflow summary

the default hue workflow is:

1. identify the input type
2. inspect the source directly whenever possible
3. extract recurring visual signals
4. reconcile component visuals before trusting computed CSS
5. synthesize a lightweight design language
6. generate `design-meta.yaml`, `design-model.yaml`, and `DESIGN.md`
7. run `npx @google/design.md lint DESIGN.md` when available
8. self-check that the package is source-agnostic, concise, and still directionally complete
9. close any named browser session used for capture

## examples

the repo contains multiple brand examples in `examples/`. treat them as a mix of historical and current styles:

- some older examples still reflect the previous heavier schema
- newer examples and validation fixtures should trend toward the lighter default

many examples still include older html artifacts such as `landing-page.html`, `component-library.html`, and `app-screen.html`. treat those as reference builds, not as the default output contract.

## runtime expectations

- `browser-automation` available for best results on live sites
- named browser sessions when the automation layer supports them
- close browser sessions after capture to avoid leaked processes
- web access for public-source fallback
- no Chrome DevTools MCP required

## license

MIT. fork it, remix it, build your own.
