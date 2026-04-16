# Do's And Don'ts

Design principles are not enough on their own. They explain the system's governing logic, but implementation teams still need a faster operational layer:

- what to do repeatedly
- what to avoid immediately

That is the job of Do's and Don'ts.

This ref exists to make generated design packages more actionable and less abstract.

---

## What This Ref Controls

Every generated package should be able to express:

- positive implementation habits worth repeating
- explicit mistakes that break the brand
- concrete stylistic boundaries
- guardrails for color, type, surfaces, motion, imagery, and layout

Do's and Don'ts are adjacent to, but not identical with:

- **Design Principles:** system-level truths
- **Anti-Patterns:** strict bans and immune-system rules

Use Do's and Don'ts when you need something more direct and implementation-facing.

---

## Difference From Principles And Anti-Patterns

| Layer | Purpose | Tone |
|---|---|---|
| Design Principles | Explain the governing logic of the system | Abstract but falsifiable |
| Do's | State what should be repeated and reinforced | Directive and positive |
| Don'ts | State what breaks the brand or weakens the system | Directive and prohibitive |
| Anti-Patterns | Enumerate the broader banned outcomes | Defensive and system-protective |

Use all four when the package needs strong implementation fidelity.

---

## Writing Rules

### Do's

Each Do should:

- start with a clear verb such as `Use`, `Keep`, `Maintain`, `Apply`, `Preserve`
- name a concrete token, behavior, or stylistic move
- explain a repeatable action, not a vague intention
- be specific enough that an implementer could follow it immediately

Good:

- `Use ring shadows for focus states instead of drop shadows.`
- `Keep all neutrals warm-toned so the page never slips into cool-gray SaaS.`

Bad:

- `Make it feel warm.`
- `Try to keep the style consistent.`

### Don'ts

Each Don't should:

- start with `Don't` or `No`
- ban a specific mistake
- name the visual or behavioral error explicitly
- ideally explain why that move breaks the identity

Good:

- `Don't use pure white as the page background; the system needs a warmer base.`
- `Don't introduce sharp corners on primary cards; softness is part of the brand tone.`

Bad:

- `Don't make it ugly.`
- `Avoid inconsistency.`

---

## Coverage Areas

Do's and Don'ts should usually cover these areas:

### 1. Color

- what neutral temperature to preserve
- where accent color is allowed
- what saturation level is acceptable

### 2. Typography

- where serif / sans / mono belong
- what weight ceiling matters
- what hierarchy split is essential

### 3. Surface And Depth

- how corners should feel
- whether shadows, ring outlines, or flat fills define depth
- what elevation strategy must stay consistent

### 4. Motion

- whether transitions should stay calm, mechanical, or playful
- what interaction style is banned

### 5. Imagery And Illustration

- what media style fits
- what styles feel off-brand

### 6. Layout And Rhythm

- what spacing behavior to preserve
- what section rhythm to keep
- what responsive reductions are allowed

---

## Quantity Guidance

Recommended counts for generated packages:

- `Do`: 5 to 7 items
- `Don't`: 5 to 7 items

Fewer than that usually means the rules are too abstract.
More than that usually means the section has become repetitive.

---

## Tone And Format

Do's and Don'ts should read like implementation rules, not inspirational prose.

Preferred format:

```md
## Do's And Don'ts

### Do
- Use ...
- Keep ...
- Maintain ...

### Don't
- Don't ...
- Don't ...
- Don't ...
```

Each line should stand on its own.
Keep each line short. Prefer one strong rule over a long sentence with multiple clauses.

---

## Example Style

This is the level of specificity to aim for:

### Do

- Use the system background token rather than defaulting to pure white.
- Maintain the intended serif/sans or sans/mono split instead of blending all roles together.
- Keep neutrals in the brand's actual temperature family.
- Apply the prescribed ring or outline treatment for interactive states before reaching for soft shadows.
- Preserve the brand's intended line-height generosity or compactness across all body text.

### Don't

- Don't introduce cool grays into a warm system.
- Don't exceed the observed weight ceiling for the main display face.
- Don't add saturated colors that were never part of the source brand.
- Don't collapse the radius philosophy into generic `8px everywhere`.
- Don't use monospace outside the roles the brand actually reserves for it.

These are examples of format and specificity, not universal content.

---

## Example Formatting Block

When the user supplies a concrete Do / Don't reference, stay close to that format. The section should read like explicit implementation guardrails, not high-level taste notes.

```md
## Do's And Don'ts

### Do
- Use Parchment (#f5f4ed) as the primary light background.
- Use Anthropic Serif at weight 500 for all headlines.
- Use Terracotta Brand (#c96442) only for primary CTAs and the highest-signal brand moments.
- Keep all neutrals warm-toned.
- Use ring shadows (0px 0px 0px 1px) for interactive states instead of drop shadows.
- Maintain the editorial serif/sans hierarchy.
- Use generous body line-height (1.60) for a literary reading experience.
- Alternate between light and dark sections to create chapter-like rhythm.
- Apply generous border-radius (12-32px) for a soft, approachable feel.

### Don't
- Don't use cool blue-grays anywhere.
- Don't use bold (700+) weight on Anthropic Serif.
- Don't introduce saturated colors beyond Terracotta.
- Don't use sharp corners (<6px radius) on buttons or cards.
- Don't apply heavy drop shadows.
- Don't use pure white (#ffffff) as a page background.
- Don't use geometric or tech-style illustrations.
- Don't reduce body line-height below 1.40.
- Don't use monospace fonts for non-code content.
- Don't mix sans-serif into headline roles when the brand is serif-led.
```

The point is not to copy this content literally. The point is to match its density, tone, and implementation specificity.

---

## YAML Schema

Generated packages may include a compact block like this:

```yaml
dos_and_donts:
  do:
    - "Use Parchment (#f5f4ed) as the primary light background."
    - "Use ring shadows for interactive states instead of drop shadows."
    - "Maintain the editorial serif/sans hierarchy."
  dont:
    - "Don't use cool blue-grays anywhere."
    - "Don't apply heavy drop shadows."
    - "Don't mix sans-serif into headline roles when the brand is serif-led."
```

Keep these lines concise and implementation-facing.

---

## Markdown Section Guidance

In `design-document.md`, Do's and Don'ts should sit as their own explicit section rather than being buried inside Anti-Patterns.

Recommended structure:

```md
## Do's And Don'ts

### Do
{{dos-list}}

### Don't
{{donts-list}}
```

This section should complement Anti-Patterns, not replace it.

---

## Validation Checklist

Before considering Do's and Don'ts complete, verify:

- [ ] The Do list contains concrete repeatable actions
- [ ] The Don't list contains concrete prohibited actions
- [ ] The rules cover more than one category (not just color)
- [ ] The language is directive, not inspirational
- [ ] The section is specific to the observed brand, not generic design advice

If the section could apply equally well to almost any brand, it is too vague.
