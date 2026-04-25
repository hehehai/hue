# Google DESIGN.md Contract

Use this reference for every default hue run. `DESIGN.md` is not an optional export anymore; it is the Markdown design document.

- Repo: `https://github.com/google-labs-code/design.md`
- CLI: `npx @google/design.md`
- Validator: `npx @google/design.md lint DESIGN.md`
- Current spec version used by the CLI: `alpha`

## File Shape

`DESIGN.md` must be a single self-contained file with:

1. YAML frontmatter
2. Markdown rationale and guidance

The frontmatter must start and end with `---`. The Markdown body follows immediately after the second delimiter.

## Required Token Groups

Keep tokens compact, but schema-valid:

- `version: alpha`
- `name`
- `description`
- `colors`
- `typography`
- `rounded`
- `spacing`
- `components`

Color values must be SRGB hex strings. Dimensions must use valid units such as `px`, `rem`, or `em`; unitless numbers are valid only where the spec allows them, such as `lineHeight` and some spacing values.

## Recommended Token Names

Colors:

- `primary`
- `secondary`
- `tertiary`
- `neutral`
- `surface`
- `border`
- `on-surface`
- `error`

Typography:

- `headline-display`
- `headline-lg`
- `headline-md`
- `body-lg`
- `body-md`
- `body-sm`
- `label-lg`
- `label-md`
- `label-sm`

Rounded:

- `none`
- `sm`
- `md`
- `lg`
- `xl`
- `full`

## Section Order

Use these `##` headings in this order:

1. `Overview`
2. `Colors`
3. `Typography`
4. `Layout`
5. `Elevation & Depth`
6. `Shapes`
7. `Components`
8. `Do's and Don'ts`

Optional extra sections are allowed by the spec, but hue should avoid them by default to keep output lightweight.

## Hue Mapping

Map hue's synthesis into the official sections like this:

- Visual Theme & Atmosphere -> `Overview`
- Image direction -> `Overview` as the optional `### Image Direction` subsection
- Entry and arrival motion -> `Overview` as the optional `### Entry & Arrival Motion` subsection
- Color Palette & Roles -> `Colors`
- Typography Rules -> `Typography`
- Layout Principles -> `Layout`
- Page-level scroll rhythm and narrative -> `Layout` as the optional `### Scroll Rhythm & Narrative` subsection
- Component depth strategy -> `Elevation & Depth`
- 3D and spatial scene logic -> `Elevation & Depth` as the optional `### 3D & Spatial Logic` subsection
- Component radius and geometry -> `Shapes`
- Custom cursor behavior -> `Components` as the optional `### Cursor Behavior` subsection
- Component Stylings -> `Components`
- Micro-interaction rules and anti-patterns -> `Do's and Don'ts`

## Validation Checklist

Before claiming the package is complete:

- Run `npx @google/design.md lint DESIGN.md`.
- Fix all errors.
- Keep warnings low; only accept warnings when they are intentionally non-blocking.
- Confirm `design-model.yaml` and `DESIGN.md` agree directionally without mirroring every detail.
- Confirm source brand names, URLs, and source-specific page labels appear only in `design-meta.yaml`.
