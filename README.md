# hue

an open-source Codex skill that learns any brand from a URL, name, screenshot, or local codebase and turns it into a complete design system skill. install it once, and every downstream brand skill it generates stays aligned with the source brand.

see it in action: **[hueapp.io](https://hueapp.io)**

## what you get

a full design language as a Codex skill: color tokens, typography, spacing, components, light + dark mode, hero stage recipes, icon kit selection, and preview artifacts. opinionated enough that two different Codex sessions using the generated skill produce visually consistent output.

## install

```bash
git clone https://github.com/dominikmartn/hue "${CODEX_HOME:-$HOME/.codex}/skills/hue"
```

`hue` is intended for explicit invocation. in a Codex session, say something like:

- "use hue to create a design skill from cursor.com"
- "$hue generate a brand design skill inspired by raycast"
- "use hue with this screenshot to generate a brand design skill"

the skill defaults to direct browser inspection via `agent-browser`, then falls back to public web sources, local code, or screenshots if direct inspection is blocked.

## output contract

for each generated brand skill, `hue` keeps the same core artifact set:

- `design-model.yaml`
- `SKILL.md`
- `agents/openai.yaml`
- `references/tokens.md`
- `references/components.md`
- `references/platform-mapping.md`
- `preview.html`
- `component-library.html`
- `landing-page.html`
- `app-screen.html`

## examples

seventeen brands live in `examples/` showing the range of output hue produces. sixteen are fictional one-shots, one is real (meadow ↦ the mymind-design skill).

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

each has a `design-model.yaml` + `landing-page.html`. ridge and stint also ship an `app-screen.html`. halcyon ships a full `component-library.html`. open them in a browser to see the system rendered.

## runtime expectations

- Codex-compatible skill loading via `SKILL.md` plus `agents/openai.yaml`
- `agent-browser` available for best results on live sites
- web access for public-source fallback
- no Chrome DevTools MCP required

## license

MIT. fork it, remix it, build your own.
