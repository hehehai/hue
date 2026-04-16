import { ArrowRight, Boxes, MoonStar, Palette, Type } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { asText, categorizeComponents, examples } from "@/lib/showcase-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hue Example Showcase",
      },
      {
        name: "description",
        content: "Browse Hue examples and open each design-model.yaml as a structured component-library-style detail page.",
      },
    ],
  }),
  component: HomeComponent,
});

function HomeComponent() {
  const parseErrors = examples.filter((example) => example.parseError).length;
  const documentPackages = examples.filter((example) => example.documentRaw).length;

  return (
    <main className="min-h-full bg-[linear-gradient(180deg,#f4f7fb_0%,#ecf1f7_100%)] text-slate-950 transition-colors dark:bg-[radial-gradient(circle_at_top,#122034_0%,#071018_58%,#050a12_100%)] dark:text-white">
      <div className="mx-auto max-w-[1560px] px-5 py-8 md:px-8 md:py-10">
        <section className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur xl:p-8 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_40px_120px_rgba(0,0,0,0.38)]">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_360px] xl:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                Hue showcase
              </div>
              <h1 className="mt-5 max-w-[14ch] text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
                Browse every package, then open a spec-like detail page.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                入口页现在同时列出 `examples/` 和 `validation/`。点进单个 item 后，会进入一个更接近{" "}
                <a
                  className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950 dark:text-white dark:decoration-white/25 dark:hover:decoration-white"
                  href="https://hueapp.io/showcase/halcyon/component-library.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  Halcyon component library
                </a>
                {" "}的详情页结构: 左侧是 section 菜单，右侧是内容，菜单本身就是锚点导航。validation 目录里的新 YAML 和 Markdown 也会在这里预览。
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <StatCard label="Packages" value={String(examples.length)} help="All folders with design-model.yaml across examples and validation" />
              <StatCard label="Parse Errors" value={String(parseErrors)} help="Broken YAML stays visible instead of crashing the app" />
              <StatCard label="Documents" value={String(documentPackages)} help="Packages that also include a standalone design-document.md preview" />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {examples.map((example) => {
            const componentGroups = categorizeComponents(example);
            const groupLabels = componentGroups.slice(0, 3).map((group) => group.label);
            const componentCount = componentGroups.reduce((total, group) => total + group.items.length, 0);

            return (
              <Link
                key={example.slug}
                className="group block rounded-[30px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-white/20 dark:hover:bg-white/[0.07]"
                params={{ slug: example.slug }}
                to="/examples/$slug"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                      {example.source}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                      {example.slug}
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{example.name}</h2>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-500 transition group-hover:border-slate-300 group-hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:group-hover:border-white/20 dark:group-hover:text-white">
                    <ArrowRight className="size-4" />
                  </div>
                </div>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {example.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <MiniMeta icon={<MoonStar className="size-4" />} label="Mode" value={example.parseError ? "YAML error" : (asText(example.model.primary_mode) ?? "—")} />
                  <MiniMeta icon={<Boxes className="size-4" />} label="Components" value={String(componentCount)} />
                  <MiniMeta icon={<Palette className="size-4" />} label="Colors" value={example.parseError ? "—" : "Foundations"} />
                  <MiniMeta icon={<Type className="size-4" />} label="Type" value={example.parseError ? "Diagnostics" : "Tokens"} />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {groupLabels.length ? (
                    groupLabels.map((label) => <Pill key={`${example.slug}-${label}`}>{label}</Pill>)
                  ) : (
                    <Pill>{example.parseError ? "Parse Error" : "No Components"}</Pill>
                  )}
                  {example.documentRaw ? <Pill>Markdown Doc</Pill> : null}
                  {example.links.library ? <Pill>Library HTML</Pill> : null}
                  {example.links.app ? <Pill>App Screen</Pill> : null}
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  help,
}: {
  label: string;
  value: string;
  help: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.045]">
      <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-[-0.05em]">{value}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{help}</p>
    </div>
  );
}

function MiniMeta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[20px] border border-slate-200/80 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mb-2 text-slate-500 dark:text-slate-400">{icon}</div>
      <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-medium text-slate-900 dark:text-white">{value}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
      {children}
    </span>
  );
}
