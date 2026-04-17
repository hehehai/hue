# hue

an open-source Codex skill that learns any brand from a URL, name, screenshot, reference image, vibe description, or local codebase and turns it into a structured design package.

see it in action: **[hueapp.io](https://hueapp.io)**

## what you get

a reusable design package with three artifacts:

- `design-meta.yaml` as the source-facing capture and provenance record
- `design-model.yaml` as the structured machine-readable design model
- `design-document.md` as the standalone human-readable design brief

`design-model.yaml` and `design-document.md` are parallel primary artifacts and should be independently usable. the yaml is optimized for tooling and structured reuse; the markdown is optimized for human implementation and review. neither should rely on the other to explain the core design language.

the package covers source capture, color tokens, typography, spacing, component inventory, light + dark mode strategy, hero-stage decisions, icon fallback selection, composition rules, responsive behavior, do's and don'ts, anti-patterns, and implementation guidance. hue now defaults to documentation, not to generating another installable skill.

## install

```bash
git clone https://github.com/dominikmartn/hue "${CODEX_HOME:-$HOME/.codex}/skills/hue"
```

`hue` is intended for explicit invocation. in a Codex session, say something like:

- "use hue to create a design document from cursor.com"
- "$hue generate a design-meta yaml, design-model yaml, and markdown document inspired by raycast"
- "use hue with this screenshot to generate a design system document"
- "use hue to analyze this local codebase and generate a reusable design package"
- "use hue to remix this existing design document to feel warmer and more editorial"

the skill defaults to direct browser inspection via `agent-browser`, then falls back to public web sources, local code, or screenshots if direct inspection is blocked.

## when to use hue

use `hue` when the goal is to **distill a source design language into reusable documentation**, not when the goal is to directly build a page or component.

good fits:

- analyze a live website and turn it into a reusable design system package
- analyze a known brand from its name and confirm the official site first
- analyze screenshots and infer a stable design language
- analyze a local frontend codebase and extract tokens, components, and patterns
- translate a vibe description into a concrete design system
- remix an existing hue package without rewriting it from scratch
- compare two generated design documents and tighten output consistency

not the default use:

- generic "build me a landing page" requests with no documentation goal
- directly generating production UI instead of design documentation
- implicitly applying a style system without the user explicitly invoking `hue`

## accepted input modes

hue supports these input types:

- `brand name`
  hue finds the likely official website, asks the user to confirm it, then analyzes the brand across multiple surfaces.
- `url`
  hue inspects the live page directly, preferring browser-level DOM/CSS/screenshot analysis over summary-style fetching.
- `local codebase`
  hue reads tokens, components, CSS custom properties, Tailwind config, theme files, and stories when available.
- `screenshots / images`
  hue compares the screenshots, surfaces contradictions, and uses them as visual evidence.
- `description / vibe`
  hue converts adjectives into concrete design decisions.
- `remix`
  hue reads existing design artifacts and applies requested changes surgically.

## output contract

by default, `hue` writes exactly these three files:

- `design-meta.yaml`
- `design-model.yaml`
- `design-document.md`

html previews, component libraries, landing pages, app screens, or code snippets are optional follow-up artifacts only when explicitly requested.

## invocation patterns

`hue` is explicit-invocation only. it should trigger when the user clearly asks for hue or for a design-document package, for example:

- `use hue`
- `$hue`
- `create a design document`
- `generate a design-model yaml`
- `generate a design system document`
- `analyze this site and produce yaml + markdown`
- `remix this existing design document`

it should not trigger automatically for generic frontend or UI implementation work.

## reference map

all reference files live in [`references/`](/Users/guanwei/x/doit/hue/references). they do not all activate at the same time.

### always-on core refs

these are the main refs for the current default workflow:

- [`design-document-template.md`](/Users/guanwei/x/doit/hue/references/design-document-template.md)
  controls the exact structure of `design-document.md`.
- [`design-meta-template.yaml`](/Users/guanwei/x/doit/hue/references/design-meta-template.yaml)
  controls the exact structure of `design-meta.yaml`.
- [`hero-stage.md`](/Users/guanwei/x/doit/hue/references/hero-stage.md)
  controls hero background + subject + relation analysis.
- [`icon-kits.md`](/Users/guanwei/x/doit/hue/references/icon-kits.md)
  controls fallback icon-kit selection when brand icons are proprietary.
- [`responsive-behavior.md`](/Users/guanwei/x/doit/hue/references/responsive-behavior.md)
  controls breakpoint, collapse, and touch-target guidance.
- [`dos-donts.md`](/Users/guanwei/x/doit/hue/references/dos-donts.md)
  controls implementation-facing Do / Don't writing.

### conditional refs

these activate only for certain requests or certain detected brand traits:

- [`background-shaders.md`](/Users/guanwei/x/doit/hue/references/background-shaders.md)
  use only when the brand clearly relies on animated WebGL / shader identity and `hero_stage.background.medium` should be `shader`.
- [`preview-template.md`](/Users/guanwei/x/doit/hue/references/preview-template.md)
  use when the user explicitly asks for a visual preview / `preview.html`.
- [`component-library-template.md`](/Users/guanwei/x/doit/hue/references/component-library-template.md)
  use when the user explicitly asks for a component library view / `component-library.html`.
- [`landing-page-template.md`](/Users/guanwei/x/doit/hue/references/landing-page-template.md)
  use when the user explicitly asks for a landing-page artifact / `landing-page.html`.
- [`app-screen-template.md`](/Users/guanwei/x/doit/hue/references/app-screen-template.md)
  use when the user explicitly asks for an in-product app-screen artifact / `app-screen.html`.

### legacy or currently non-default refs

these files are useful background material, but they are not part of the default current output contract:

- [`background-graphics.md`](/Users/guanwei/x/doit/hue/references/background-graphics.md)
  legacy background model replaced by `hero-stage.md`.
- [`components-template.md`](/Users/guanwei/x/doit/hue/references/components-template.md)
  older standalone components document template.
- [`tokens-template.md`](/Users/guanwei/x/doit/hue/references/tokens-template.md)
  older standalone tokens document template.
- [`platform-mapping-template.md`](/Users/guanwei/x/doit/hue/references/platform-mapping-template.md)
  expanded platform implementation mapping template.
- [`skill-template.md`](/Users/guanwei/x/doit/hue/references/skill-template.md)
  older template for generating a standalone design skill instead of a documentation package.

## reference trigger rules

in practical terms, the refs activate like this:

- if the user asks for the default package, use the core refs only
- if the user asks for richer visual artifacts, activate the matching html template refs
- if the analyzed brand clearly uses shader-heavy animated identity, activate `background-shaders.md`
- if the request is about revising consistency or document quality, `design-document-template.md`, `responsive-behavior.md`, and `dos-donts.md` become especially important
- if the request is about legacy outputs or older example parity, the legacy templates may be consulted, but they should not silently replace the current default workflow

## workflow summary

the current hue workflow is:

1. identify the input type
2. inspect the source directly whenever possible
3. classify the brand as UI-rich or content-rich
4. inventory observed vs derived components
5. analyze hero stage and iconography fallback
6. synthesize a neutral reusable system name
7. generate `design-meta.yaml`, `design-model.yaml`, and `design-document.md`
8. self-validate that markdown and yaml are aligned, source-agnostic where required, and structurally complete

## examples

seventeen brands live in `examples/` showing the range of analysis hue can support. sixteen are fictional one-shots, one is real (meadow ↦ mymind.com).

| brand | character |
|---|---|
| atlas | ivory engineering, classical maritime charts |
| auris | premium audio, monochrome dark |
| drift | hot pink fashion commerce |
| fizz | y2k pop photo-sharing, candy chrome |
| halcyon | cool teal sculptural glass |
| kiln | dark fired earth, molten terracotta |
| ledger | newsprint editorial, financial broadsheet |
| meadow | warm cream editorial (real, from mymind-design) |
| orivion | luminous red-violet glow |
| oxide | brutalist mono compute protocol |
| prism | cyberpunk holographic shader engine |
| relay | swiss transit, departure board precision |
| ridge | slate emerald dev platform |
| solvent | warm amber generative shader |
| stint | muted violet productivity |
| thrive | sage green wellness, light mode |
| velvet | noir editorial fragrance house |

many examples still include older html artifacts such as `landing-page.html`, `component-library.html`, and `app-screen.html`. treat those as reference builds and exploration surfaces, not as the default output contract for the current skill.

## runtime expectations

- `agent-browser` available for best results on live sites
- web access for public-source fallback
- no Chrome DevTools MCP required

## license

MIT. fork it, remix it, build your own.
