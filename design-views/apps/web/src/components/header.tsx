import { Link, useRouterState } from "@tanstack/react-router";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/82 backdrop-blur dark:border-white/10 dark:bg-[#050a12]/82">
      <div className="mx-auto flex max-w-[1560px] items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-4">
          <Link
            className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white"
            to="/"
          >
            Hue Showcase
          </Link>
          <div className="hidden h-5 w-px bg-slate-200 dark:bg-white/10 md:block" />
          <div className="hidden text-sm text-slate-500 dark:text-slate-400 md:block">
            {pathname.startsWith("/examples/") ? "Example detail" : "Example index"}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
            to="/"
          >
            Examples
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
