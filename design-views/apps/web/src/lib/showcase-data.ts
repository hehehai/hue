import { parse } from "yaml";

export type ExampleData = {
  slug: string;
  id: string;
  name: string;
  description: string;
  raw: string;
  source: "examples" | "validation";
  sourcePath: string;
  documentRaw?: string;
  documentPath?: string;
  model: Record<string, unknown>;
  parseError?: string;
  links: {
    landing?: string;
    app?: string;
    library?: string;
  };
};

export type TypographyEntry = {
  key: string;
  family: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
  realFont?: string | null;
};

export type ComponentEntry = {
  key: string;
  record: Record<string, unknown>;
};

export type ComponentCategory = {
  id: string;
  label: string;
  items: ComponentEntry[];
};

export type ComponentStateEntry = {
  key: string;
  label: string;
  record: Record<string, unknown>;
};

export type TocGroup = {
  title: string;
  items: Array<{
    id: string;
    label: string;
  }>;
};

export type ColorEntry = {
  name: string;
  value: string;
  swatch: string | null;
};

export type DocumentSection = {
  id: string;
  title: string;
  body: string;
};

const exampleYamlModules = import.meta.glob("../../../../../examples/*/design-model.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const validationYamlModules = import.meta.glob("../../../../../validation/*/design-model.yaml", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const yamlModules = {
  ...exampleYamlModules,
  ...validationYamlModules,
} satisfies Record<string, string>;

const exampleMarkdownModules = import.meta.glob("../../../../../examples/*/design-document.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const validationMarkdownModules = import.meta.glob("../../../../../validation/*/design-document.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const markdownModules = {
  ...exampleMarkdownModules,
  ...validationMarkdownModules,
} satisfies Record<string, string>;

const htmlModules = import.meta.glob("../../../../../examples/*/{landing-page.html,app-screen.html,component-library.html}", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

const componentTaxonomy: Array<{ id: string; label: string; matchers: string[] }> = [
  { id: "actions", label: "Actions", matchers: ["button", "toggle", "segmented", "dropdown"] },
  { id: "inputs", label: "Inputs", matchers: ["input", "textarea", "select", "checkbox", "radio", "switch", "slider", "date", "combobox", "field"] },
  { id: "data-display", label: "Data Display", matchers: ["card", "avatar", "badge", "tag", "table", "skeleton", "metric", "stat", "pill", "chip"] },
  { id: "navigation", label: "Navigation", matchers: ["tabs", "breadcrumb", "pagination", "nav", "link", "sidebar", "menu"] },
  { id: "feedback", label: "Feedback", matchers: ["alert", "toast", "progress", "spinner", "empty", "banner", "notice"] },
  { id: "overlays", label: "Overlays", matchers: ["modal", "popover", "tooltip", "accordion", "dialog", "sheet", "drawer"] },
];

const componentStateLabels: Array<{ key: string; label: string }> = [
  { key: "hover", label: "Hover" },
  { key: "active", label: "Active" },
  { key: "focus", label: "Focus" },
  { key: "disabled", label: "Disabled" },
  { key: "selected", label: "Selected" },
  { key: "idle", label: "Idle" },
];

export const examples = buildExamples();

export function getExampleBySlug(slug: string) {
  return examples.find((example) => example.slug === slug);
}

function buildExamples(): ExampleData[] {
  const groupedLinks = new Map<string, ExampleData["links"]>();
  const groupedDocuments = new Map<string, string>();

  for (const [path, url] of Object.entries(htmlModules)) {
    const { slug, source } = extractSourceInfo(path);
    const entryKey = `${source}:${slug}`;
    const links = groupedLinks.get(entryKey) ?? {};

    if (path.endsWith("landing-page.html")) links.landing = url;
    if (path.endsWith("app-screen.html")) links.app = url;
    if (path.endsWith("component-library.html")) links.library = url;

    groupedLinks.set(entryKey, links);
  }

  for (const [path, raw] of Object.entries(markdownModules)) {
    const { slug, source } = extractSourceInfo(path);
    groupedDocuments.set(`${source}:${slug}`, raw);
  }

  return Object.entries(yamlModules)
    .map(([path, raw]) => {
      const { slug, source } = extractSourceInfo(path);
      const entryKey = `${source}:${slug}`;
      const { model, parseError } = parseExampleModel(raw);
      const name = asText(model.name) ?? humanizeSlug(slug);
      const description =
        asText(model.description) ??
        (parseError ? "This YAML file could not be parsed, but it is still listed here for inspection." : "No description");

      return {
        slug,
        id: `${source}-${slug}`,
        name,
        description,
        raw,
        source,
        sourcePath: `${source}/${slug}/design-model.yaml`,
        documentRaw: groupedDocuments.get(entryKey),
        documentPath: groupedDocuments.has(entryKey) ? `${source}/${slug}/design-document.md` : undefined,
        model,
        parseError,
        links: groupedLinks.get(entryKey) ?? {},
      };
    })
    .sort((a, b) => {
      if (a.source !== b.source) return a.source.localeCompare(b.source);
      return a.slug.localeCompare(b.slug);
    });
}

function parseExampleModel(raw: string): { model: Record<string, unknown>; parseError?: string } {
  try {
    const parsed = parse(raw);
    return {
      model: asRecord(parsed) ?? {},
      parseError: undefined,
    };
  } catch (error) {
    return {
      model: {},
      parseError: error instanceof Error ? error.message : String(error),
    };
  }
}

function extractSourceInfo(path: string): { source: "examples" | "validation"; slug: string } {
  const match = path.match(/(examples|validation)\/([^/]+)\//);
  const source = (match?.[1] === "validation" ? "validation" : "examples") satisfies "examples" | "validation";
  return {
    source,
    slug: match?.[2] ?? path,
  };
}

export function humanizeSlug(slug: string) {
  return slug
    .split(/[-_]/g)
    .map((part) => (part ? part[0]!.toUpperCase() + part.slice(1) : part))
    .join(" ");
}

export function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
}

export function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

export function asText(value: unknown): string | null {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "true" : "false";
  return null;
}

export function isColor(value: unknown): value is string {
  if (typeof value !== "string") return false;
  return /^(#|rgb|rgba|hsl|hsla)/i.test(value.trim()) || value.includes("color-mix(");
}

function isTokenReference(value: string) {
  return /^\{[^}]+\}$/.test(value.trim());
}

function getLeafText(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "true" : "false";
  return null;
}

function getByPath(root: unknown, path: string[]) {
  let current = root;

  for (const part of path) {
    const record = asRecord(current);
    if (!record || !(part in record)) return null;
    current = record[part];
  }

  return current;
}

function resolveTokenPath(example: ExampleData, path: string) {
  const parts = path.split(".");
  const attempts = [
    getByPath(asRecord(example.model.primitives)?.colors, parts),
    getByPath(asRecord(example.model.tokens)?.colors, parts),
    getByPath(asRecord(example.model.tokens)?.radii, parts),
    getByPath(asRecord(example.model.tokens)?.spacing, parts),
    getByPath(asRecord(example.model.tokens)?.typography, parts),
    getByPath(example.model.tokens, parts),
    getByPath(example.model.primitives, parts),
    getByPath(example.model, parts),
  ];

  for (const attempt of attempts) {
    const leaf = getLeafText(attempt);
    if (leaf) return leaf;
  }

  return null;
}

export function resolveTokenizedString(example: ExampleData, input: string) {
  return input.replace(/\{([^}]+)\}/g, (_, tokenPath: string) => {
    return resolveTokenPath(example, tokenPath) ?? `{${tokenPath}}`;
  });
}

export function flattenColorGroups(group: unknown, example: ExampleData): ColorEntry[] {
  const record = asRecord(group);
  if (!record) return [];

  return Object.entries(record).flatMap(([key, value]) => {
    const textValue = asText(value);
    if (textValue) {
      const resolved = resolveTokenizedString(example, textValue);
      const swatch = isColor(resolved) ? resolved : isTokenReference(textValue) ? null : null;
      return [{ name: key, value: textValue, swatch }];
    }

    const nested = asRecord(value);
    if (!nested) return [];

    return Object.entries(nested)
      .map(([nestedKey, nestedValue]) => {
        const nestedText = asText(nestedValue);
        if (!nestedText) return null;
        const resolved = resolveTokenizedString(example, nestedText);

        return {
          name: `${key}.${nestedKey}`,
          value: nestedText,
          swatch: isColor(resolved) ? resolved : null,
        };
      })
      .filter(Boolean) as ColorEntry[];
  });
}

export function getSpacingEntries(example: ExampleData) {
  const tokenSpacing = asRecord(asRecord(example.model.tokens)?.spacing);
  if (tokenSpacing) {
    return Object.entries(tokenSpacing).map(([key, value]) => ({
      name: key,
      value: asText(value) ?? "—",
    }));
  }

  return asArray(asRecord(example.model.primitives)?.spacing).map((value, index) => ({
    name: String(index),
    value: asText(value) ?? "—",
  }));
}

export function getRadiiEntries(example: ExampleData) {
  const tokenRadii = asRecord(asRecord(example.model.tokens)?.radii);
  if (tokenRadii) {
    return Object.entries(tokenRadii).map(([key, value]) => ({
      name: key,
      value: asText(value) ?? "—",
    }));
  }

  return asArray(asRecord(example.model.primitives)?.radii).map((value, index) => ({
    name: String(index),
    value: asText(value) ?? "—",
  }));
}

export function getTypographyEntries(example: ExampleData): TypographyEntry[] {
  const typography = asRecord(asRecord(example.model.tokens)?.typography);
  if (!typography) return [];

  return Object.entries(typography)
    .map(([key, value]) => {
      const record = asRecord(value);
      if (!record) return null;

      return {
        key,
        family: asText(record.family) ?? "—",
        size: asText(record.size) ?? "—",
        weight: asText(record.weight) ?? "—",
        lineHeight: asText(record.line_height) ?? "—",
        letterSpacing: asText(record.letter_spacing) ?? "—",
        realFont: asText(record.real_font),
      };
    })
    .filter(Boolean) as TypographyEntry[];
}

export function getHeroStage(example: ExampleData) {
  return asRecord(example.model.hero_stage) ?? asRecord(asRecord(example.model.tokens)?.hero_stage);
}

export function getIconography(example: ExampleData) {
  return asRecord(example.model.iconography) ?? asRecord(asRecord(example.model.tokens)?.iconography);
}

export function getPhilosophy(example: ExampleData) {
  return asText(example.model.philosophy);
}

export function getVoice(example: ExampleData) {
  return asRecord(example.model.voice);
}

export function getResponsiveBehavior(example: ExampleData) {
  return asRecord(example.model.responsive_behavior);
}

export function getDosAndDonts(example: ExampleData) {
  return asRecord(example.model.dos_and_donts);
}

export function getDocumentSections(example: ExampleData): DocumentSection[] {
  if (!example.documentRaw) return [];

  const lines = example.documentRaw.split(/\r?\n/);
  const sections: Array<{ title: string; lines: string[] }> = [];
  let current: { title: string; lines: string[] } | null = null;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) sections.push(current);
      current = {
        title: line.replace(/^##\s+/, "").trim(),
        lines: [],
      };
      continue;
    }

    if (current) current.lines.push(line);
  }

  if (current) sections.push(current);

  return sections
    .map((section) => ({
      id: `document-${slugify(section.title)}`,
      title: section.title,
      body: section.lines.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
    }))
    .filter((section) => section.body);
}

export function getTypeScale(example: ExampleData) {
  return asRecord(asRecord(example.model.tokens)?.type_scale);
}

export function getElevation(example: ExampleData) {
  return asRecord(asRecord(example.model.tokens)?.elevation);
}

export function getMotion(example: ExampleData) {
  return asRecord(asRecord(example.model.tokens)?.motion);
}

export function getComponents(example: ExampleData): ComponentEntry[] {
  const components = asRecord(example.model.components);
  if (!components) return [];

  return Object.entries(components).map(([key, value]) => ({
    key,
    record: asRecord(value) ?? {},
  }));
}

export function categorizeComponents(example: ExampleData): ComponentCategory[] {
  const buckets = new Map<string, ComponentCategory>();

  for (const category of componentTaxonomy) {
    buckets.set(category.id, {
      id: category.id,
      label: category.label,
      items: [],
    });
  }

  buckets.set("patterns", {
    id: "patterns",
    label: "Patterns",
    items: [],
  });

  for (const component of getComponents(example)) {
    const key = component.key.toLowerCase();
    const matched = componentTaxonomy.find((category) =>
      category.matchers.some((matcher) => key.includes(matcher)),
    );

    const bucket = buckets.get(matched?.id ?? "patterns");
    if (bucket) bucket.items.push(component);
  }

  return Array.from(buckets.values()).filter((bucket) => bucket.items.length > 0);
}

export function getImportantFields(record: Record<string, unknown>) {
  return Object.entries(record)
    .filter(([key, value]) => {
      if (componentStateLabels.some((entry) => entry.key === key)) return false;
      if (key === "source" || key === "teardown" || key === "justification" || key === "notes" || key === "interaction") return false;
      if (value && typeof value === "object") return false;
      return true;
    })
    .slice(0, 10)
    .map(([key, value]) => ({
      key,
      value: asText(value) ?? "—",
    }));
}

export function getComponentNarrativeFields(record: Record<string, unknown>) {
  return ["teardown", "justification", "notes", "interaction"]
    .map((key) => ({
      key,
      value: asText(record[key]),
    }))
    .filter((entry): entry is { key: string; value: string } => Boolean(entry.value));
}

export function getComponentStateEntries(record: Record<string, unknown>): ComponentStateEntry[] {
  return componentStateLabels.flatMap((entry) => {
    const nested = asRecord(record[entry.key]);
    if (!nested) return [];

    return [
      {
        key: entry.key,
        label: entry.label,
        record: nested,
      },
    ];
  });
}

export function getExampleToc(example: ExampleData): TocGroup[] {
  if (example.parseError) {
    return [
      {
        title: "Diagnostics",
        items: [
          { id: "overview", label: "Overview" },
          { id: "parse-error", label: "Parse Error" },
          { id: "raw-yaml", label: "Raw YAML" },
          ...(example.documentRaw ? [{ id: "raw-document", label: "Raw Markdown" }] : []),
        ],
      },
    ];
  }

  const foundationItems = [
    { id: "overview", label: "Overview" },
    ...(getPhilosophy(example) ? [{ id: "philosophy", label: "Philosophy" }] : []),
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    ...(getTypeScale(example) ? [{ id: "type-scale", label: "Type Scale" }] : []),
    { id: "radii", label: "Radii" },
    { id: "spacing", label: "Spacing" },
    ...(getElevation(example) ? [{ id: "elevation", label: "Elevation" }] : []),
    ...(getMotion(example) ? [{ id: "motion", label: "Motion" }] : []),
    ...(getResponsiveBehavior(example) ? [{ id: "responsive-behavior", label: "Responsive Behavior" }] : []),
    ...(getDosAndDonts(example) ? [{ id: "dos-and-donts", label: "Do's And Don'ts" }] : []),
    { id: "hero-stage", label: "Hero Stage" },
    ...(getIconography(example) ? [{ id: "iconography", label: "Iconography" }] : []),
    ...(getVoice(example) ? [{ id: "voice", label: "Voice" }] : []),
  ];

  const componentGroups = categorizeComponents(example).map((group) => ({
    id: `components-${group.id}`,
    label: group.label,
  }));

  return [
    { title: "Foundations", items: foundationItems },
    ...(example.documentRaw ? [{ title: "Document", items: [{ id: "document-preview", label: "Design Document" }] }] : []),
    ...(componentGroups.length ? [{ title: "Components", items: componentGroups }] : []),
    {
      title: "Source",
      items: [
        { id: "raw-yaml", label: "Raw YAML" },
        ...(example.documentRaw ? [{ id: "raw-document", label: "Raw Markdown" }] : []),
      ],
    },
  ];
}

export function formatDimension(value: string) {
  if (!value || value === "—") return value;
  if (value.startsWith("clamp(") || value.endsWith("px") || value.endsWith("rem") || value.endsWith("%")) return value;
  if (/^-?\d+(\.\d+)?$/.test(value)) return `${value}px`;
  return value;
}

export function normalizeRadius(value: string) {
  if (!value || value === "—") return "12px";
  if (value.startsWith("{")) return "12px";
  return formatDimension(value);
}

export function clampTypography(size: string) {
  if (!size || size === "—") return "1.2rem";
  if (size.startsWith("clamp(")) return size;
  return formatDimension(size);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
