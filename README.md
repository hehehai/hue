# hue

an open-source Codex skill that learns any brand from a URL, name, screenshot, or local codebase and turns it into a structured design package: one Markdown design document plus one `design-model.yaml`.

see it in action: **[hueapp.io](https://hueapp.io)**

## what you get

a reusable design package with two parallel primary artifacts:

- `design-model.yaml` as the structured machine-readable design model
- `design-document.md` as the standalone human-readable design brief

both files should be independently usable. the yaml is optimized for tooling and structured reuse; the markdown is optimized for human implementation and review. neither should rely on the other to explain the core design language.

the package still covers color tokens, typography, spacing, components, light + dark mode, hero stage decisions, icon fallback selection, composition rules, and implementation guidance. the difference is that hue now defaults to documentation, not to generating another installable skill.

## install

```bash
git clone https://github.com/dominikmartn/hue "${CODEX_HOME:-$HOME/.codex}/skills/hue"
```

`hue` is intended for explicit invocation. in a Codex session, say something like:

- "use hue to create a design document from cursor.com"
- "$hue generate a design-model yaml and markdown document inspired by raycast"
- "use hue with this screenshot to generate a design system document"

the skill defaults to direct browser inspection via `agent-browser`, then falls back to public web sources, local code, or screenshots if direct inspection is blocked.

## output contract

by default, `hue` writes exactly these two files:

- `design-model.yaml`
- `design-document.md`

html previews, component libraries, landing pages, app screens, or code snippets are optional follow-up artifacts only when explicitly requested.

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
