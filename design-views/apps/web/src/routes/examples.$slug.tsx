import { useEffect, useMemo, useState } from "react";

import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Bell,
  Boxes,
  BrushCleaning,
  Compass,
  Layers3,
  LayoutGrid,
  LayoutPanelTop,
  Palette,
  Rows3,
  Search,
  Sparkles,
  Type,
  Workflow,
} from "lucide-react";

import {
  asRecord,
  asText,
  categorizeComponents,
  clampTypography,
  examples,
  flattenColorGroups,
  formatDimension,
  getComponentNarrativeFields,
  getComponentStateEntries,
  getExampleBySlug,
  getExampleToc,
  getElevation,
  getHeroStage,
  getIconography,
  getImportantFields,
  getMotion,
  getPhilosophy,
  getRadiiEntries,
  getSpacingEntries,
  getTypeScale,
  getTypographyEntries,
  getVoice,
  normalizeRadius,
  resolveTokenizedString,
} from "@/lib/showcase-data";

export const Route = createFileRoute("/examples/$slug")({
  head: () => ({
    meta: [
      {
        title: "Hue Example Detail",
      },
      {
        name: "description",
        content: "Detail page for a single Hue example with anchor navigation and theme switcher.",
      },
    ],
  }),
  component: ExampleDetailRoute,
});

function ExampleDetailRoute() {
  const { slug } = Route.useParams();
  const example = getExampleBySlug(slug);

  if (!example) {
    return (
      <main className="min-h-full bg-[linear-gradient(180deg,#f4f7fb_0%,#ecf1f7_100%)] px-5 py-12 text-slate-950 dark:bg-[radial-gradient(circle_at_top,#122034_0%,#071018_58%,#050a12_100%)] dark:text-white">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_32px_90px_rgba(0,0,0,0.36)]">
          <div className="text-sm uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Not found</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">This example does not exist.</h1>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            The requested slug was not found in the current `examples/` directory.
          </p>
          <Link
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
            to="/"
          >
            <ArrowLeft className="size-4" />
            Back to examples
          </Link>
        </div>
      </main>
    );
  }

  return <ExampleDetailPage example={example} />;
}

function ExampleDetailPage({ example }: { example: (typeof examples)[number] }) {
  const toc = useMemo(() => getExampleToc(example), [example]);
  const firstSectionId = toc.flatMap((group) => group.items)[0]?.id ?? "overview";
  const [activeId, setActiveId] = useState(firstSectionId);

  useEffect(() => {
    setActiveId(firstSectionId);
  }, [firstSectionId, example.slug]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash) setActiveId(hash);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [example.slug]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-toc-section]"));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [example.slug]);

  const heroStage = getHeroStage(example);
  const typography = getTypographyEntries(example);
  const spacing = getSpacingEntries(example);
  const radii = getRadiiEntries(example);
  const primitiveColors = asRecord(asRecord(example.model.primitives)?.colors);
  const semanticColors = asRecord(asRecord(example.model.tokens)?.colors);
  const componentGroups = categorizeComponents(example);
  const iconography = getIconography(example);
  const philosophy = getPhilosophy(example);
  const typeScale = getTypeScale(example);
  const elevation = getElevation(example);
  const motion = getMotion(example);
  const voice = getVoice(example);

  return (
    <main className="min-h-full bg-[linear-gradient(180deg,#f5f7fb_0%,#edf2f8_100%)] text-slate-950 transition-colors dark:bg-[radial-gradient(circle_at_top,#101d30_0%,#071018_54%,#04080f_100%)] dark:text-white">
      <div className="mx-auto max-w-[1560px] px-4 py-5 md:px-7 md:py-6">
        <div className="grid gap-6 xl:grid-cols-[268px_minmax(0,1fr)]">
          <aside className="xl:sticky xl:top-[96px] xl:self-start">
            <div className="rounded-[28px] border border-slate-200/80 bg-white/88 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_36px_100px_rgba(0,0,0,0.38)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
                  to="/"
                >
                  <ArrowLeft className="size-4" />
                  All examples
                </Link>
              </div>

              <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/85 p-3.5 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{example.slug}</div>
                <div className="mt-2 text-[28px] font-semibold tracking-[-0.04em]">{example.name}</div>
                <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {example.parseError ? "YAML parse failed. Diagnostics mode is shown below." : "Anchor-based section menu, modeled after the Halcyon component library layout."}
                </p>
              </div>

              <nav className="mt-5 space-y-4">
                {toc.map((group) => (
                  <div key={`${example.slug}-${group.title}`}>
                    <div className="mb-2 px-2 text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">
                      {group.title}
                    </div>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <a
                          key={`${example.slug}-${item.id}`}
                          className={[
                            "block rounded-xl px-3 py-2 text-sm transition",
                            activeId === item.id
                              ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white",
                          ].join(" ")}
                          href={`#${item.id}`}
                          onClick={() => setActiveId(item.id)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-6">
            <section
              className="scroll-mt-28 overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_40px_120px_rgba(0,0,0,0.38)] md:p-6"
              data-toc-section
              id="overview"
            >
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_320px] xl:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag>{example.slug}</Tag>
                    <Tag>{asText(example.model.brand_type) ?? "—"}</Tag>
                    <Tag>{example.parseError ? "yaml error" : (asText(example.model.primary_mode) ?? "—")}</Tag>
                  </div>
                  <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">{example.name}</h1>
                  <p className="mt-4 max-w-4xl text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                    {example.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {example.links.landing ? <AssetLink href={example.links.landing} label="Landing" /> : null}
                    {example.links.library ? <AssetLink href={example.links.library} label="Library" /> : null}
                    {example.links.app ? <AssetLink href={example.links.app} label="App Screen" /> : null}
                  </div>
                </div>

                <div className="grid gap-3">
                  <InfoCard title="Source" value={asText(example.model.brand_source) ?? "—"} />
                  <InfoCard title="Domain" value={asText(example.model.brand_domain) ?? "—"} />
                  <InfoCard
                    title="Hero Subject"
                    value={asText(asRecord(heroStage?.hero)?.subject) ?? "—"}
                    help={asText(asRecord(heroStage?.background)?.medium) ?? "—"}
                  />
                  <InfoCard
                    title="Mono Rules"
                    value={`${asText(example.model.mono_for_code) ?? asText(example.model.mono_for_data) ?? "—"} / ${asText(example.model.mono_for_metrics) ?? "—"}`}
                    help="code / metrics"
                  />
                </div>
              </div>
            </section>

            {example.parseError ? (
              <>
                <SectionPanel
                  description="The file stays visible in navigation so a broken example does not blank the entire app."
                  icon={<AlertTriangle className="size-4" />}
                  id="parse-error"
                  title="Parse Error"
                >
                  <div className="rounded-[26px] border border-amber-300/60 bg-[linear-gradient(180deg,rgba(255,244,214,0.7),rgba(255,255,255,0.55))] p-5 dark:border-amber-400/20 dark:bg-[linear-gradient(180deg,rgba(245,158,11,0.09),rgba(255,255,255,0.02))]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/80 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-700 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
                      <AlertTriangle className="size-3.5" />
                      YAML parse failed
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
                      这个 example 已经保留在目录里，但 YAML 语法不合法，所以 foundations 和 components 预览都不会渲染。下面保留错误信息和原始片段，方便你自己修。
                    </p>
                    <dl className="mt-5 grid grid-cols-[max-content_1fr] gap-x-3 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
                      <dt>File</dt><dd>{`examples/${example.slug}/design-model.yaml`}</dd>
                      <dt>Error</dt><dd className="break-words text-amber-700 dark:text-amber-200">{example.parseError}</dd>
                    </dl>
                  </div>
                </SectionPanel>

                <RawYamlSection example={example} />
              </>
            ) : (
              <>
                {philosophy ? (
                  <SectionPanel
                    description="The philosophy block captures the governing attitude behind the system, not just the visual tokens."
                    icon={<Compass className="size-4" />}
                    id="philosophy"
                    title="Philosophy"
                  >
                    <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 text-[15px] leading-7 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200">
                      {philosophy}
                    </div>
                  </SectionPanel>
                ) : null}

                <SectionPanel
                  description="Primitive swatches stay visual, while semantic tokens are also flattened into a CSS-variable style table for faster inspection."
                  icon={<Palette className="size-4" />}
                  id="colors"
                  title="Colors"
                >
                  <div className="space-y-4">
                    <ColorCollection
                      example={example}
                      groups={Object.entries(primitiveColors ?? {})}
                      title="Primitive Colors"
                    />
                    <ColorCollection
                      example={example}
                      groups={Object.entries(semanticColors ?? {})}
                      title="Semantic Colors"
                    />
                    <DocTable
                      columns={["Token", "Reference", "Resolved", "Role"]}
                      rows={buildSemanticColorRows(example, semanticColors)}
                    />
                  </div>
                </SectionPanel>

                <SectionPanel
                  description="Specimens stay visual, but the scale is also summarized as a proper type table so font constants can be read at a glance."
                  icon={<Type className="size-4" />}
                  id="typography"
                  title="Typography"
                >
                  <div className="space-y-4">
                    <div className="grid gap-3 lg:grid-cols-2">
                      {typography.length ? (
                        typography.map((entry) => (
                          <article
                            key={entry.key}
                            className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                          >
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{entry.key}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">{entry.size}</div>
                            </div>
                            <div
                              className="mb-3 break-words text-slate-950 dark:text-white"
                              style={{
                                fontFamily: entry.family === "null" ? undefined : entry.family,
                                fontSize: clampTypography(entry.size),
                                fontWeight: Number(entry.weight) || 500,
                                lineHeight: Number(entry.lineHeight) || 1.2,
                                letterSpacing: entry.letterSpacing,
                              }}
                            >
                              {entry.family === "null" ? "No dedicated mono font" : `${example.name} type specimen`}
                            </div>
                            <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                              {entry.family} · {entry.weight} · {entry.size}/{entry.lineHeight}
                            </div>
                          </article>
                        ))
                      ) : (
                        <EmptyState text="No typography tokens found in this example." />
                      )}
                    </div>
                    {typography.length ? (
                      <DocTable
                        columns={["Token", "Font", "Size", "Line Height", "Weight", "Letter Spacing"]}
                        rows={typography.map((entry) => [
                          entry.key,
                          entry.realFont ?? entry.family,
                          formatDimension(entry.size),
                          entry.lineHeight,
                          entry.weight,
                          entry.letterSpacing,
                        ])}
                      />
                    ) : null}
                  </div>
                </SectionPanel>

                {typeScale ? (
                  <SectionPanel
                    description="Type scale is shown separately from font families so generated UI can follow the intended hierarchy, not just the stack."
                    icon={<Type className="size-4" />}
                    id="type-scale"
                    title="Type Scale"
                  >
                    <DocTable
                      columns={["Token", "Size", "Line Height", "Weight", "Letter Spacing", "Use"]}
                      rows={buildTypeScaleRows(typeScale)}
                    />
                  </SectionPanel>
                ) : null}

                <SectionPanel
                  description="The radius scale is shown as both visual samples and a token table, closer to a design-system documentation surface."
                  icon={<Boxes className="size-4" />}
                  id="radii"
                  title="Radii"
                >
                  <div className="grid gap-4 xl:grid-cols-[0.82fr_1.18fr]">
                    <div className="space-y-2.5">
                      {radii.map((item) => (
                        <ScaleRow key={`${example.slug}-radius-${item.name}`} kind="radius" label={item.name} value={item.value} />
                      ))}
                    </div>
                    <DocTable
                      columns={["Token", "Value", "Suggested CSS Var", "Use"]}
                      rows={radii.map((item) => [
                        item.name,
                        formatDimension(item.value),
                        `--r-${item.name}`,
                        describeRadiusUse(item.name),
                      ])}
                    />
                  </div>
                </SectionPanel>

                <SectionPanel
                  description="Spacing tokens keep a rhythm preview, but now also include a compact constants table for CSS-variable style reading."
                  icon={<Rows3 className="size-4" />}
                  id="spacing"
                  title="Spacing"
                >
                  <div className="grid gap-4 xl:grid-cols-[0.82fr_1.18fr]">
                    <div className="space-y-2.5">
                      {spacing.map((item) => (
                        <ScaleRow key={`${example.slug}-spacing-${item.name}`} kind="spacing" label={item.name} value={item.value} />
                      ))}
                    </div>
                    <DocTable
                      columns={["Token", "Value", "Suggested CSS Var", "Use"]}
                      rows={spacing.map((item) => [
                        item.name,
                        formatDimension(item.value),
                        `--space-${item.name}`,
                        describeSpacingUse(item.name, item.value),
                      ])}
                    />
                  </div>
                </SectionPanel>

                {elevation ? (
                  <SectionPanel
                    description="Surface depth is previewed as sample shells plus a shadow table, so the elevation strategy is explicit instead of implied."
                    icon={<Layers3 className="size-4" />}
                    id="elevation"
                    title="Elevation"
                  >
                    <div className="grid gap-4 xl:grid-cols-[0.88fr_1.12fr]">
                      <ElevationPreview elevation={elevation} />
                      <DocTable
                        columns={["Token", "Value"]}
                        rows={buildElevationRows(elevation)}
                      />
                    </div>
                  </SectionPanel>
                ) : null}

                {motion ? (
                  <SectionPanel
                    description="Motion settings are normalized into timing and easing references so generated previews can respect the same interaction personality."
                    icon={<Workflow className="size-4" />}
                    id="motion"
                    title="Motion"
                  >
                    <div className="grid gap-4 xl:grid-cols-[0.88fr_1.12fr]">
                      <MotionPreview motion={motion} />
                      <DocTable
                        columns={["Field", "Value"]}
                        rows={buildMotionRows(motion)}
                      />
                    </div>
                  </SectionPanel>
                ) : null}

                <SectionPanel
                  description="Hero stage information stays in foundations because it acts like the narrative shell for the landing page."
                  icon={<LayoutPanelTop className="size-4" />}
                  id="hero-stage"
                  title="Hero Stage"
                >
                  <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
                    <div className="space-y-3">
                      <HeroStagePreview heroStage={heroStage} />
                      <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Tag>{asText(heroStage?.preset) ?? "custom"}</Tag>
                          <Tag>{asText(asRecord(heroStage?.background)?.medium) ?? "—"}</Tag>
                          <Tag>{asText(asRecord(heroStage?.relation)?.type) ?? "—"}</Tag>
                        </div>
                        <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                          {asText(asRecord(heroStage?.observed_style)?.description) ?? "No hero_stage description."}
                        </p>
                      </div>
                    </div>
                    <DocTable
                      columns={["Field", "Value"]}
                      rows={[
                        ["preset", asText(heroStage?.preset) ?? "custom"],
                        ["subject", asText(asRecord(heroStage?.hero)?.subject) ?? "—"],
                        ["placement", asText(asRecord(heroStage?.hero)?.placement) ?? "—"],
                        ["background.medium", asText(asRecord(heroStage?.background)?.medium) ?? "—"],
                        ["background.intensity", asText(asRecord(heroStage?.background)?.intensity) ?? "—"],
                        ["background.safe_zone", asText(asRecord(heroStage?.background)?.safe_zone) ?? "—"],
                        ["relation.type", asText(asRecord(heroStage?.relation)?.type) ?? "—"],
                      ]}
                    />
                  </div>
                </SectionPanel>

                {iconography ? (
                  <SectionPanel
                    description="Iconography is rendered as a style preview plus a compact table of the observed and fallback system."
                    icon={<Sparkles className="size-4" />}
                    id="iconography"
                    title="Iconography"
                  >
                    <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
                      <div className="space-y-3">
                        <IconographyPreview iconography={iconography} />
                        <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                          <div className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                            {asText(asRecord(iconography.observed_style)?.description) ?? "No iconography description."}
                          </div>
                        </div>
                      </div>
                      <DocTable
                        columns={["Field", "Value"]}
                        rows={buildIconographyRows(iconography)}
                      />
                    </div>
                  </SectionPanel>
                ) : null}

                {voice ? (
                  <SectionPanel
                    description="Voice samples make the generated preview more faithful by exposing the tone and actual sentence patterns the system expects."
                    icon={<Bell className="size-4" />}
                    id="voice"
                    title="Voice"
                  >
                    <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
                      <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-[#161f29]">
                        <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Tone</div>
                        <div className="mt-2 text-base font-medium leading-7 text-slate-900 dark:text-white">
                          {asText(voice.tone) ?? "—"}
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {getVoiceSamples(voice).length ? (
                          getVoiceSamples(voice).map((sample, index) => (
                            <blockquote
                              key={`${example.slug}-voice-${index}`}
                              className="rounded-[20px] border border-slate-200/80 bg-slate-50/80 p-4 text-[15px] leading-7 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
                            >
                              “{sample}”
                            </blockquote>
                          ))
                        ) : (
                          <EmptyState text="No voice samples found." />
                        )}
                      </div>
                    </div>
                  </SectionPanel>
                ) : null}

                {componentGroups.map((group) => (
                  <SectionPanel
                    key={`${example.slug}-${group.id}`}
                    description={`Component previews for the ${group.label.toLowerCase()} section.`}
                    icon={<Boxes className="size-4" />}
                    id={`components-${group.id}`}
                    title={group.label}
                  >
                    <div className="grid gap-2.5">
                      {group.items.map((component) => (
                        <ComponentShowcaseCard
                          key={`${example.slug}-${component.key}`}
                          component={component}
                          example={example}
                        />
                      ))}
                    </div>
                  </SectionPanel>
                ))}

                <RawYamlSection example={example} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function ComponentShowcaseCard({
  example,
  component,
}: {
  example: (typeof examples)[number];
  component: { key: string; record: Record<string, unknown> };
}) {
  const narratives = getComponentNarrativeFields(component.record);
  const states = getComponentStateEntries(component.record);
  const previews = buildComponentPreviewStates(component.record, states);

  return (
    <article className="rounded-[20px] border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-medium text-slate-900 dark:text-white">{component.key}</div>
          <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {asText(component.record.source) ?? "derived"}
          </div>
        </div>
        <Tag>{asText(component.record.source) ?? "—"}</Tag>
      </div>

      {narratives.length ? (
        <div className="mb-3 grid gap-1.5">
          {narratives.map((entry) => (
            <div
              key={`${component.key}-${entry.key}`}
              className="rounded-[14px] border border-slate-200/80 bg-white/75 px-3 py-2 dark:border-white/10 dark:bg-[#111b26]"
            >
              <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {entry.key.replace(/_/g, " ")}
              </div>
              <div className="mt-1 text-[13px] leading-5 text-slate-700 dark:text-slate-200">{entry.value}</div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mb-3 rounded-[16px] border border-slate-200/80 bg-white/85 p-2.5 dark:border-white/10 dark:bg-[#0d1722]">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Canvas</div>
          {states.length ? <Tag>{`${states.length + (previews.some((preview) => preview.key === "default") ? 1 : 0)} states`}</Tag> : null}
        </div>
        <div className="grid gap-2">
          {previews.map((preview) => (
            <div
              key={`${component.key}-${preview.key}`}
              className="rounded-[14px] border border-slate-200/80 bg-slate-50/80 p-2.5 dark:border-white/10 dark:bg-[#111b26]"
            >
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {preview.label}
                </div>
                <div className="font-mono text-[10px] text-slate-400 dark:text-slate-500">.is-{preview.key}</div>
              </div>
              <div className="rounded-[12px] border border-slate-200/80 bg-white/88 p-2.5 dark:border-white/10 dark:bg-[#0d1722]">
                {renderComponentPreview(example, component.key, preview.record, preview.key)}
              </div>
              {preview.key !== "default" ? (
                <div className="mt-2">
                  <DocTable
                    columns={["Override", "Value"]}
                    rows={Object.entries(preview.overrides).map(([key, value]) => [key, asText(value) ?? "—"])}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <DocTable
        columns={["Property", "Value"]}
        rows={getImportantFields(component.record).map((field) => [field.key, field.value])}
      />
    </article>
  );
}

function buildComponentPreviewStates(
  record: Record<string, unknown>,
  states: Array<{ key: string; label: string; record: Record<string, unknown> }>,
) {
  const hasBaseVisual = [
    "background",
    "background_dark",
    "color",
    "color_dark",
    "border",
    "border_default",
    "shadow",
    "shadow_light",
    "text_color",
    "active_background",
    "idle_color",
  ].some((key) => key in record);

  const previews = states.map((state) => ({
    key: state.key,
    label: state.label,
    record: {
      ...record,
      ...state.record,
    },
    overrides: state.record,
  }));

  const previewKeys = new Set(previews.map((preview) => preview.key));
  const hasNestedFocus = previewKeys.has("focus");
  const hasFocusFields = Boolean(record.border_focus || record.focus_ring);

  if (!hasNestedFocus && hasFocusFields) {
    previews.push({
      key: "focus",
      label: "Focus",
      record,
      overrides: {
        border_focus: record.border_focus,
        focus_ring: record.focus_ring,
      },
    });
  }

  if (!previewKeys.has("hover") && record.hover_bg) {
    previews.push({
      key: "hover",
      label: "Hover",
      record,
      overrides: {
        background: record.hover_bg,
      },
    });
  }

  if (!previewKeys.has("active") && record.active_background) {
    previews.push({
      key: "active",
      label: "Active",
      record,
      overrides: {
        background: record.active_background,
        color: record.color ?? record.text_primary ?? record.idle_color,
      },
    });
  }

  if (!previewKeys.has("idle") && record.idle_color) {
    previews.push({
      key: "idle",
      label: "Idle",
      record,
      overrides: {
        background: "transparent",
        color: record.idle_color,
      },
    });
  }

  return hasBaseVisual || !previews.length
    ? [
        {
          key: "default",
          label: "Default",
          record,
          overrides: {},
        },
        ...previews,
      ]
    : previews;
}

function renderComponentPreview(
  example: (typeof examples)[number],
  name: string,
  record: Record<string, unknown>,
  stateKey?: string,
) {
  const radius = normalizeRadius(
    resolveValue(example, asText(record.radius) ?? asText(record.border_radius) ?? "12"),
  );
  const opacity = asNumeric(asText(record.opacity));
  const transform = asText(record.transform) ?? undefined;
  const boxShadow = resolveShadowValue(example, record);
  const stateClass = stateKey ? ` component-preview-${stateKey}` : "";

  if (name.includes("button")) {
    const background = resolveValue(example, asText(record.background_dark) ?? asText(record.background) ?? "#2563eb");
    const color = resolveValue(example, asText(record.color_dark) ?? asText(record.color) ?? "#ffffff");
    const border = resolveValue(example, asText(record.border) ?? "1px solid transparent");

    return (
      <button
        className={`inline-flex min-h-10 items-center rounded-[14px] px-4 text-sm font-medium shadow-sm${stateClass}`}
        style={{
          borderRadius: radius,
          background,
          color,
          border: border === "none" ? "1px solid transparent" : border,
          boxShadow,
          opacity,
          transform,
          transition: asText(record.transition) ?? undefined,
        }}
        type="button"
      >
        {name}
      </button>
    );
  }

  if (name.includes("input") || name.includes("select") || name.includes("textarea") || name.includes("combobox")) {
    const isFocusState = stateKey === "focus";

    return (
      <div
        className={`flex min-h-11 items-center px-4 text-sm${stateClass}`}
        style={{
          borderRadius: radius,
          background: resolveValue(example, asText(record.background) ?? "rgba(148,163,184,0.12)"),
          color: resolveValue(example, asText(record.text_color) ?? "rgba(100,116,139,1)"),
          border: resolveValue(
            example,
            isFocusState
              ? asText(record.border_focus) ?? asText(record.border_default) ?? asText(record.border) ?? "1px solid rgba(148,163,184,0.24)"
              : asText(record.border_default) ?? asText(record.border) ?? "1px solid rgba(148,163,184,0.24)",
          ),
          boxShadow: isFocusState
            ? resolveValue(example, asText(record.focus_ring) ?? asText(record.shadow) ?? "none")
            : boxShadow,
          opacity,
          transform,
        }}
      >
        Search or paste a link
      </div>
    );
  }

  if (name.includes("tag") || name.includes("pill") || name.includes("tab") || name.includes("badge")) {
    return (
      <div
        className={`inline-flex min-h-9 items-center px-4 text-sm${stateClass}`}
        style={{
          borderRadius: radius,
          background: resolveValue(example, asText(record.background) ?? "rgba(148,163,184,0.12)"),
          color: resolveValue(example, asText(record.color) ?? "#0f172a"),
          border: resolveValue(example, asText(record.border) ?? "1px solid rgba(148,163,184,0.24)"),
          boxShadow,
          opacity,
          transform,
        }}
      >
        {name}
      </div>
    );
  }

  if (name.includes("toggle") || name.includes("switch")) {
    const trackWidth = resolveValue(example, asText(record.track_width) ?? "44px");
    const trackHeight = resolveValue(example, asText(record.track_height) ?? "24px");
    const trackRadius = normalizeRadius(resolveValue(example, asText(record.track_radius) ?? asText(record.radius) ?? "999"));
    const thumbSize = resolveValue(example, asText(record.thumb_size) ?? "20px");
    const isOn = stateKey === "active" || stateKey === "selected";

    return (
      <div
        className={`relative${stateClass}`}
        style={{
          width: trackWidth,
          height: trackHeight,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            borderRadius: trackRadius,
            background: resolveValue(example, asText(isOn ? record.track_on : record.track_off) ?? "#e2e8f0"),
            opacity,
            transition: asText(record.transition) ?? undefined,
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full shadow-sm"
          style={{
            width: thumbSize,
            height: thumbSize,
            left: isOn ? `calc(100% - ${thumbSize} - 2px)` : "2px",
            background: resolveValue(example, asText(record.thumb_color) ?? "#ffffff"),
            transform,
          }}
        />
      </div>
    );
  }

  if (name.includes("progress")) {
    return (
      <div
        className={`w-full overflow-hidden${stateClass}`}
        style={{
          height: resolveValue(example, asText(record.height) ?? "6px"),
          borderRadius: radius,
          background: resolveValue(example, asText(record.track) ?? "rgba(148,163,184,0.18)"),
          opacity,
        }}
      >
        <div
          className="h-full"
          style={{
            width: stateKey === "active" ? "84%" : "62%",
            borderRadius: radius,
            background: resolveValue(example, asText(record.fill) ?? asText(record.color) ?? "#2563eb"),
            transform,
          }}
        />
      </div>
    );
  }

  if (name.includes("card") || name.includes("panel")) {
    return (
      <div
        className={`space-y-3 p-4${stateClass}`}
        style={{
          borderRadius: radius,
          background: resolveValue(example, asText(record.background) ?? "#ffffff"),
          border: resolveValue(example, asText(record.border) ?? "1px solid rgba(148,163,184,0.24)"),
          boxShadow,
          opacity,
          transform,
        }}
      >
        <div className="text-sm font-medium text-slate-900">Card title</div>
        <div className="text-sm text-slate-600">Surface, border, and radius preview for the component shell.</div>
      </div>
    );
  }

  if (name.includes("modal") || name.includes("sheet") || name.includes("drawer")) {
    return (
      <div
        className={`rounded-[18px] p-3${stateClass}`}
        style={{
          background: resolveValue(example, asText(record.backdrop) ?? "rgba(15,23,42,0.08)"),
          opacity,
        }}
      >
        <div
          className="ml-auto max-w-[280px] space-y-2 p-4"
          style={{
            borderRadius: radius,
            background: resolveValue(example, asText(record.background) ?? "#ffffff"),
            boxShadow,
            transform,
          }}
        >
          <div className="text-sm font-medium text-slate-900">Dialog title</div>
          <div className="text-sm text-slate-600">Body copy and confirm actions.</div>
          <div className="flex gap-2 pt-1">
            <div className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">Cancel</div>
            <div className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">Confirm</div>
          </div>
        </div>
      </div>
    );
  }

  if (name.includes("navigation")) {
    return (
      <div
        className={`flex min-h-12 items-center justify-between gap-2 px-3${stateClass}`}
        style={{
          borderRadius: radius,
          background: resolveValue(example, asText(record.background) ?? "#ffffff"),
          boxShadow,
          opacity,
        }}
      >
        {["Discover", "Spaces", "Library"].map((item, index) => (
          <div
            key={`${name}-${item}`}
            className="rounded-full px-3 py-1.5 text-xs"
            style={{
              background: index === 1 ? resolveValue(example, asText(record.active_background) ?? "rgba(15,23,42,0.08)") : "transparent",
              color: index === 1 ? resolveValue(example, asText(record.color) ?? "#0f172a") : "#475569",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  if (name.includes("nav") || name.includes("menu") || name.includes("list")) {
    const rowBackground =
      name.includes("list") && stateKey === "hover"
        ? resolveValue(example, asText(record.background) ?? "rgba(148,163,184,0.08)")
        : undefined;

    return (
      <div className="space-y-2">
        {["Inbox", "Projects", "Tasks"].map((item) => (
          <div
            key={`${name}-${item}`}
            className="flex min-h-9 items-center px-3 text-sm"
            style={{
              borderRadius: radius,
              background:
                rowBackground && item === "Inbox"
                  ? rowBackground
                  : item === "Inbox"
                  ? resolveValue(example, asText(record.active_background) ?? asText(record.background) ?? "rgba(37,99,235,0.12)")
                  : "transparent",
              color:
                item === "Inbox"
                  ? resolveValue(example, asText(record.color) ?? "#1d4ed8")
                  : resolveValue(example, asText(record.idle_color) ?? asText(record.muted_color) ?? "#475569"),
              border: resolveValue(example, asText(record.border_bottom) ?? asText(record.divider) ?? "1px solid transparent"),
              opacity,
              transform,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`rounded-[18px] border border-slate-200/80 bg-slate-100/80 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300${stateClass}`}
      style={{
        boxShadow,
        opacity,
        transform,
      }}
    >
      {name}
    </div>
  );
}

function resolveValue(example: (typeof examples)[number], value: string) {
  return formatDimension(resolveTokenizedString(example, value));
}

function resolveShadowValue(example: (typeof examples)[number], record: Record<string, unknown>) {
  const shadowParts = [
    asText(record.shadow),
    asText(record.shadow_light),
    asText(record.shadow_dark),
    asText(record.inset_stroke),
  ]
    .filter(Boolean)
    .map((value) => resolveValue(example, value!))
    .filter((value) => value !== "none");

  return shadowParts.length ? shadowParts.join(", ") : undefined;
}

function asNumeric(value: string | null) {
  if (!value) return undefined;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function HeroStagePreview({
  heroStage,
}: {
  heroStage: Record<string, unknown> | null;
}) {
  const background = asRecord(heroStage?.background);
  const hero = asRecord(heroStage?.hero);
  const relation = asRecord(heroStage?.relation);
  const medium = asText(background?.medium) ?? "surface";
  const recipe = asText(background?.recipe) ?? asText(background?.pattern_recipe) ?? "";
  const palette = (Array.isArray(background?.color_palette) ? background?.color_palette : [])
    .map((value) => asText(value))
    .filter(Boolean) as string[];
  const colors = palette.length ? palette : ["#0b1220", "#1c2a44", "#355fa8", "#7aa7ff"];
  const subject = asText(hero?.subject) ?? "none";
  const relationType = asText(relation?.type) ?? "flat";

  return (
    <div className="relative h-[238px] overflow-hidden rounded-[24px] border border-slate-200/80 bg-slate-950 dark:border-white/10">
      <div
        className="absolute inset-0"
        style={{
          background:
            medium === "paper" || medium === "surface"
              ? colors[0] ?? "#f6f0e8"
              : `linear-gradient(135deg, ${colors.join(", ")})`,
        }}
      />

      {medium === "sculptural" || recipe === "glass-bars" ? (
        <div className="absolute inset-0">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="absolute h-[180px] w-[72px] rounded-[24px] border border-white/25 shadow-[0_0_30px_rgba(125,180,255,0.28)]"
              style={{
                left: `${16 + index * 54}px`,
                top: `${18 + (index % 2) * 12}px`,
                transform: `rotate(-22deg) skewY(${12 - index * 3}deg)`,
                background: `linear-gradient(180deg, ${colors[0] ?? "#dbeafe"}, ${colors[2] ?? "#2563eb"} 58%, ${colors[4] ?? "#0f172a"})`,
              }}
            />
          ))}
        </div>
      ) : null}

      {medium === "painterly" ? (
        <div className="absolute inset-0 overflow-hidden">
          {colors.slice(0, 5).map((color, index) => (
            <div
              key={`${color}-${index}`}
              className="absolute rounded-full blur-3xl"
              style={{
                background: color,
                width: 140 + index * 18,
                height: 120 + index * 12,
                left: `${10 + index * 16}%`,
                top: `${12 + (index % 3) * 16}%`,
                opacity: 0.42,
              }}
            />
          ))}
        </div>
      ) : null}

      {medium === "grid" || medium === "pattern" || medium === "typographic" ? (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      ) : null}

      {medium === "shader" ? (
        <div className="absolute inset-0">
          <div className="absolute -left-10 top-10 h-40 w-72 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-64 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-20 h-48 w-80 rounded-full bg-yellow-100/15 blur-3xl" />
        </div>
      ) : null}

      {medium === "gradient" && (subject === "luminous" || recipe === "iridescent-orb") ? (
        <div className="absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${colors[0] ?? "#fff"}, ${colors[1] ?? "#60a5fa"}, ${colors[2] ?? "#7c3aed"} 62%, transparent 76%)`,
              boxShadow: "0 0 90px rgba(148,163,184,0.35)",
            }}
          />
        </div>
      ) : null}

      {subject === "device" || subject === "ui-card" || subject === "ui-board" || subject === "phone-mockup" ? (
        <div
          className="absolute left-1/2 top-1/2 w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-white/15 bg-[#0d1520]/88 p-4 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          style={{
            transform: subject === "phone-mockup"
              ? "translate(-50%, -50%) rotate(-8deg)"
              : "translate(-50%, -50%)",
          }}
        >
          <div className="mb-3 h-3 w-20 rounded-full bg-white/12" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl bg-white/8" />
            <div className="col-span-2 h-16 rounded-xl bg-white/10" />
            <div className="col-span-2 h-20 rounded-xl bg-white/8" />
            <div className="h-20 rounded-xl bg-white/14" />
          </div>
        </div>
      ) : null}

      {subject === "typography" || subject === "text" || subject === "composition" ? (
        <div className="absolute inset-x-8 bottom-8 top-8 flex flex-col justify-center">
          <div className="text-[46px] font-semibold tracking-[-0.08em] text-white/92">HERO</div>
          <div className="mt-1 text-[46px] font-semibold tracking-[-0.08em] text-white/72">
            {subject === "composition" ? "STACK" : "TYPE"}
          </div>
        </div>
      ) : null}

      {relationType === "glow" ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" /> : null}

      <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/12 bg-black/28 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/72">
          {medium}
        </span>
        <span className="rounded-full border border-white/12 bg-black/28 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/72">
          {subject}
        </span>
        <span className="rounded-full border border-white/12 bg-black/28 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/72">
          {relationType}
        </span>
      </div>
    </div>
  );
}

function IconographyPreview({
  iconography,
}: {
  iconography: Record<string, unknown>;
}) {
  const observed = asRecord(iconography.observed_style);
  const sizes = asRecord(iconography.sizes);
  const fallback = asRecord(iconography.fallback_kit);
  const fillStyle = (asText(observed?.fill_style) ?? "outline").toLowerCase();
  const corner = (asText(observed?.corner_treatment) ?? "soft").toLowerCase();
  const strokeWeight = (asText(observed?.stroke_weight) ?? "regular").toLowerCase();
  const iconSize = Number.parseFloat(asText(sizes?.nav) ?? asText(sizes?.button) ?? asText(sizes?.inline) ?? "20") || 20;
  const tileRadius = corner.includes("sharp") ? "14px" : corner.includes("rounded") || corner.includes("soft") ? "18px" : "16px";
  const strokeWidth = strokeWeight.includes("thin") || strokeWeight.includes("hairline") ? 1.35 : strokeWeight.includes("bold") ? 2.4 : strokeWeight.includes("filled") ? 2.2 : 1.8;
  const iconColor = fillStyle.includes("fill") || fillStyle.includes("solid") ? "#ffffff" : "#d7e2f1";
  const tileBg = fillStyle.includes("fill") || fillStyle.includes("solid") ? "linear-gradient(180deg,#334155,#111827)" : "rgba(255,255,255,0.04)";
  const IconSet = [LayoutGrid, Workflow, Search, Bell, Compass, Sparkles];
  const kitName = asText(fallback?.name) ?? "Fallback kit";

  return (
    <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-[#161f29]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-medium text-slate-900 dark:text-white">Preview Tiles</div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{kitName}</div>
        </div>
        <Tag>{asText(observed?.fill_style) ?? "outline"}</Tag>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {IconSet.map((Icon, index) => (
          <div
            key={`${Icon.displayName ?? "icon"}-${index}`}
            className="flex aspect-square items-center justify-center border border-white/8"
            style={{
              borderRadius: tileRadius,
              background: tileBg,
            }}
          >
            <Icon color={iconColor} size={iconSize} strokeWidth={strokeWidth} />
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <div>stroke: {asText(observed?.stroke_weight) ?? "—"}</div>
        <div>corner: {asText(observed?.corner_treatment) ?? "—"}</div>
        <div>form: {asText(observed?.form_language) ?? "—"}</div>
      </div>
    </div>
  );
}

function SectionPanel({
  id,
  title,
  description,
  icon,
  children,
}: {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      className="scroll-mt-28 rounded-[26px] border border-slate-200/80 bg-white/92 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-[#121b24]/92 dark:shadow-[0_28px_80px_rgba(0,0,0,0.32)] md:p-6"
      data-toc-section
      id={id}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
            {icon}
            {title}
          </div>
          <h2 className="text-[30px] font-semibold tracking-[-0.05em]">{title}</h2>
          <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function ColorCollection({
  title,
  groups,
  example,
}: {
  title: string;
  groups: Array<[string, unknown]>;
  example: (typeof examples)[number];
}) {
  return (
    <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-[#161f29]">
      <h3 className="text-base font-semibold tracking-[-0.03em]">{title}</h3>
      <div className="mt-4 divide-y divide-slate-200/80 dark:divide-white/8">
        {groups.length ? (
          groups.map(([groupName, groupValue]) => {
            const colors = flattenColorGroups(groupValue, example);
            if (!colors.length) return null;

            return (
              <div key={groupName} className="py-3 first:pt-0 last:pb-0 md:flex md:items-start md:gap-4">
                <div className="mb-2 w-24 shrink-0 pt-1 text-sm font-medium text-slate-700 dark:text-slate-200 md:mb-0">
                  {groupName}
                </div>
                <div className="overflow-x-auto pb-1">
                  <div className="flex gap-2.5">
                  {colors.map((color) => (
                    <ColorSwatch
                      key={`${groupName}-${color.name}`}
                      label={color.name}
                      swatch={color.swatch}
                      value={color.value}
                    />
                  ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyState text="No color groups found." />
        )}
      </div>
    </div>
  );
}

function RawYamlSection({ example }: { example: (typeof examples)[number] }) {
  return (
    <SectionPanel
      description="The raw source is kept on the page so you can compare the rendered preview against the YAML itself."
      icon={<BrushCleaning className="size-4" />}
      id="raw-yaml"
      title="Raw YAML"
    >
      <pre className="overflow-x-auto rounded-[20px] border border-slate-200/80 bg-[#f7fafc] p-4 text-xs leading-6 text-slate-700 dark:border-white/10 dark:bg-[#08111b] dark:text-slate-200">
        {example.raw.split("\n").slice(0, 180).join("\n")}
      </pre>
    </SectionPanel>
  );
}

function ScaleRow({
  kind,
  label,
  value,
}: {
  kind: "spacing" | "radius";
  label: string;
  value: string;
}) {
  const formatted = formatDimension(value);
  const numeric = Number.parseFloat(formatted);
  const width = Number.isFinite(numeric) ? Math.max(12, Math.min(numeric * 4, 220)) : 120;

  return (
    <div className="grid grid-cols-[72px_1fr_82px] items-center gap-2.5 rounded-[16px] border border-slate-200/80 bg-slate-50/80 p-2.5 dark:border-white/10 dark:bg-[#161f29]">
      <div className="text-sm text-slate-600 dark:text-slate-300">{label}</div>
      <div className="h-8 rounded-full border border-slate-200/80 bg-white/80 px-2 py-1 dark:border-white/10 dark:bg-[#0d1722]">
        <div
          className={kind === "radius" ? "h-full bg-[linear-gradient(90deg,rgba(59,130,246,0.32),rgba(59,130,246,0.12))]" : "h-full bg-[linear-gradient(90deg,rgba(15,23,42,0.18),rgba(15,23,42,0.05))] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(255,255,255,0.06))]"}
          style={{
            width,
            borderRadius: kind === "radius" ? normalizeRadius(formatted) : "999px",
          }}
        />
      </div>
      <div className="text-right font-mono text-[11px] text-slate-500 dark:text-slate-400">{formatted}</div>
    </div>
  );
}

function ColorSwatch({
  label,
  value,
  swatch,
}: {
  label: string;
  value: string;
  swatch: string | null;
}) {
  return (
    <div className="w-[112px] shrink-0 rounded-[16px] border border-slate-200/80 bg-white/85 p-2.5 dark:border-white/10 dark:bg-[#0d1722]">
      <div
        className="h-10 rounded-[10px] border border-slate-200/80 dark:border-white/10"
        style={{
          background: swatch ?? "repeating-linear-gradient(135deg, rgba(148,163,184,0.18) 0 12px, rgba(148,163,184,0.06) 12px 24px)",
        }}
      />
      <div className="mt-2 text-[13px] font-medium text-slate-800 dark:text-slate-200">{label}</div>
      <div className="mt-1 break-all font-mono text-[11px] text-slate-500 dark:text-slate-400">{value}</div>
      {swatch && swatch !== value ? (
        <div className="mt-1 break-all font-mono text-[11px] text-slate-400 dark:text-slate-500">{swatch}</div>
      ) : null}
    </div>
  );
}

function InfoCard({
  title,
  value,
  help,
}: {
  title: string;
  value: string;
  help?: string;
}) {
  return (
    <div className="rounded-[20px] border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{title}</div>
      <div className="mt-2 text-sm font-medium leading-6 text-slate-900 dark:text-white">{value}</div>
      {help ? <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{help}</div> : null}
    </div>
  );
}

function AssetLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {label}
      <ArrowUpRight className="size-4" />
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
      {children}
    </span>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-[20px] border border-dashed border-slate-300 bg-slate-50/70 p-4 text-sm text-slate-600 dark:border-white/15 dark:bg-white/[0.02] dark:text-slate-300">
      {text}
    </div>
  );
}

function DocTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Array<Array<string>>;
}) {
  if (!rows.length) {
    return <EmptyState text="No tabular data available for this section." />;
  }

  return (
    <div className="overflow-hidden rounded-[20px] border border-slate-200/80 bg-white/88 dark:border-white/10 dark:bg-[#0d1722]">
      <div className="max-h-[420px] overflow-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/90 dark:border-white/10 dark:bg-white/[0.03]">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-3 py-2.5 text-left text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={`${row.join("-")}-${rowIndex}`}
                className="border-b border-slate-200/70 last:border-b-0 dark:border-white/8"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className={[
                      "px-3 py-2.5 align-top text-[13px] text-slate-700 dark:text-slate-200",
                      cellIndex < row.length - 1 ? "border-r border-slate-200/60 dark:border-white/8" : "",
                      looksMonospaced(cell) ? "font-mono text-[12px]" : "",
                    ].join(" ")}
                  >
                    <span className="break-words">{cell}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function buildSemanticColorRows(
  example: (typeof examples)[number],
  semanticColors: Record<string, unknown> | null,
) {
  return Object.entries(semanticColors ?? {}).flatMap(([mode, groupValue]) => {
    return flattenColorGroups(groupValue, example).map((entry) => [
      `--${mode}-${entry.name}`,
      entry.value,
      entry.swatch ?? resolveValue(example, entry.value),
      describeColorRole(entry.name),
    ]);
  });
}

function buildIconographyRows(iconography: Record<string, unknown>) {
  const observed = asRecord(iconography.observed_style);
  const fallback = asRecord(iconography.fallback_kit);
  const sizes = asRecord(iconography.sizes);

  return [
    ["fill_style", asText(observed?.fill_style) ?? "—"],
    ["stroke_weight", asText(observed?.stroke_weight) ?? "—"],
    ["corner_treatment", asText(observed?.corner_treatment) ?? "—"],
    ["form_language", asText(observed?.form_language) ?? "—"],
    ["visual_density", asText(observed?.visual_density) ?? "—"],
    ["fallback_kit", asText(fallback?.name) ?? "—"],
    ["kit_weight", asText(fallback?.weight) ?? "—"],
    ["icon_class_prefix", asText(fallback?.icon_class_prefix) ?? "—"],
    ["inline_size", asText(sizes?.inline) ?? "—"],
    ["button_size", asText(sizes?.button) ?? "—"],
    ["nav_size", asText(sizes?.nav) ?? "—"],
    ["disclaimer", asText(iconography.disclaimer) ?? "—"],
  ];
}

function buildTypeScaleRows(typeScale: Record<string, unknown>) {
  return Object.entries(typeScale).flatMap(([token, value]) => {
    const record = asRecord(value);
    if (!record) return [];

    return [[
      token,
      formatDimension(asText(record.size) ?? "—"),
      asText(record.line_height) ?? "—",
      asText(record.weight) ?? "—",
      asText(record.letter_spacing) ?? "—",
      asText(record.use) ?? "—",
    ]];
  });
}

function buildElevationRows(elevation: Record<string, unknown>) {
  const rows: Array<[string, string]> = [];
  const strategy = asText(elevation.strategy);
  const notes = asText(elevation.notes);
  const shadows = asRecord(elevation.shadows);

  if (strategy) rows.push(["strategy", strategy]);
  if (notes) rows.push(["notes", notes]);

  for (const [key, value] of Object.entries(shadows ?? {})) {
    const nested = asRecord(value);
    if (nested) {
      for (const [nestedKey, nestedValue] of Object.entries(nested)) {
        rows.push([`${key}.${nestedKey}`, asText(nestedValue) ?? "—"]);
      }
    } else {
      rows.push([key, asText(value) ?? "—"]);
    }
  }

  return rows;
}

function buildMotionRows(motion: Record<string, unknown>) {
  const rows: Array<[string, string]> = [];
  const personality = asText(motion.personality);
  const notes = asText(motion.notes);

  if (personality) rows.push(["personality", personality]);

  for (const [key, value] of Object.entries(motion)) {
    if (key === "personality" || key === "notes") continue;
    const nested = asRecord(value);
    if (nested) {
      for (const [nestedKey, nestedValue] of Object.entries(nested)) {
        rows.push([`${key}.${nestedKey}`, asText(nestedValue) ?? "—"]);
      }
    } else {
      rows.push([key, asText(value) ?? "—"]);
    }
  }

  if (notes) rows.push(["notes", notes]);
  return rows;
}

function getVoiceSamples(voice: Record<string, unknown>) {
  return (Array.isArray(voice.samples) ? voice.samples : [])
    .map((sample) => asText(sample))
    .filter(Boolean) as string[];
}

function ElevationPreview({
  elevation,
}: {
  elevation: Record<string, unknown>;
}) {
  const shadows = asRecord(elevation.shadows);
  const samples = Object.entries(shadows ?? {}).slice(0, 3);

  return (
    <div className="grid gap-3">
      {samples.length ? (
        samples.map(([key, value]) => {
          const nested = asRecord(value);
          const shadowValue =
            asText(nested?.light) ??
            asText(nested?.dark) ??
            asText(value) ??
            "none";

          return (
            <div
              key={key}
              className="rounded-[20px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-[#161f29]"
            >
              <div className="mb-3 text-sm font-medium text-slate-900 dark:text-white">{key}</div>
              <div className="rounded-[16px] border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-[#0d1722]">
                <div
                  className="h-20 rounded-[14px] bg-white dark:bg-[#111827]"
                  style={{ boxShadow: shadowValue }}
                />
              </div>
              <div className="mt-3 break-all font-mono text-[11px] text-slate-500 dark:text-slate-400">
                {shadowValue}
              </div>
            </div>
          );
        })
      ) : (
        <EmptyState text="No elevation shadows found." />
      )}
    </div>
  );
}

function MotionPreview({
  motion,
}: {
  motion: Record<string, unknown>;
}) {
  const easing = asRecord(motion.easing);
  const duration = asRecord(motion.duration);
  const fast = asText(duration?.fast) ?? asText(motion.duration_fast) ?? "120ms";
  const medium = asText(duration?.medium) ?? asText(motion.duration_normal) ?? "240ms";
  const slow = asText(duration?.slow) ?? asText(motion.duration_slow) ?? "360ms";

  return (
    <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-[#161f29]">
      <div className="mb-3 text-sm font-medium text-slate-900 dark:text-white">
        {asText(motion.personality) ?? "Motion"}
      </div>
      <div className="space-y-3">
        {[
          ["fast", fast, asText(easing?.fast) ?? asText(motion.easing) ?? "ease-out"],
          ["medium", medium, asText(easing?.medium) ?? asText(motion.easing) ?? "ease-out"],
          ["slow", slow, asText(easing?.slow) ?? asText(motion.easing) ?? "ease-out"],
        ].map(([label, time, ease], index) => (
          <div key={`${label}-${index}`} className="rounded-[16px] border border-slate-200/80 bg-white/80 p-3 dark:border-white/10 dark:bg-[#0d1722]">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-slate-700 dark:text-slate-200">{label}</div>
              <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{time}</div>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#60a5fa,#818cf8)]"
                style={{ width: `${52 + index * 16}%` }}
              />
            </div>
            <div className="mt-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">{ease}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function describeColorRole(token: string) {
  if (token.includes("background")) return "Page background";
  if (token.includes("surface1")) return "Primary container surface";
  if (token.includes("surface2")) return "Grouped backgrounds";
  if (token.includes("surface3")) return "Inset or nested panels";
  if (token.includes("text1")) return "Primary text";
  if (token.includes("text2")) return "Secondary text";
  if (token.includes("text3")) return "Tertiary text or placeholders";
  if (token.includes("text4")) return "Muted helper text";
  if (token.includes("accent")) return "Primary accent or emphasis";
  if (token.includes("success")) return "Positive state";
  if (token.includes("warning")) return "Warning state";
  if (token.includes("error")) return "Destructive state";
  if (token.includes("border")) return "Border or divider";
  return "Semantic color token";
}

function describeRadiusUse(token: string) {
  if (token.includes("element")) return "Small controls and list items";
  if (token.includes("control")) return "Buttons, inputs, toggles";
  if (token.includes("component")) return "Cards and panels";
  if (token.includes("container")) return "Sheets, modals, large shells";
  if (token.includes("pill")) return "Tags, badges, nav pills";
  return "Radius token";
}

function describeSpacingUse(token: string, value: string) {
  const numeric = Number.parseFloat(formatDimension(value));
  if (token.includes("2xs") || numeric <= 4) return "Hairline gaps and tight nudges";
  if (token.includes("xs") || numeric <= 8) return "Inline spacing and compact padding";
  if (token.includes("sm") || numeric <= 12) return "Base small gap";
  if (token.includes("md") || numeric <= 20) return "Control padding and form gaps";
  if (token.includes("lg") || numeric <= 24) return "Card padding and list spacing";
  if (token.includes("xl") || numeric <= 32) return "Section spacing";
  if (numeric <= 64) return "Group separation";
  return "Page-level spacing";
}

function looksMonospaced(value: string) {
  return value.startsWith("--") || value.startsWith("{") || value.includes("px") || value.includes("rem") || value.includes("#");
}
