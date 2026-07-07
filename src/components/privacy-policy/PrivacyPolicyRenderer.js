import Image from "next/image";

function MetaPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

function SectionBlock({ block }) {
  if (block.type === "paragraph") {
    return <p className="text-base leading-8 text-slate-700">{block.text}</p>;
  }

  if (block.type === "bullets") {
    return (
      <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="space-y-3">
        {block.items.map((item, index) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
              {index + 1}
            </span>
            <span className="pt-0.5 text-base leading-7 text-slate-700">
              {item}
            </span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "links") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-900 group-hover:text-orange-600">
              {item.label}
            </p>
            <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            <p className="mt-2 break-all text-xs font-medium text-slate-400">
              {item.href}
            </p>
          </a>
        ))}
      </div>
    );
  }

  return null;
}

export default function PrivacyPolicyRenderer({ policy }) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7ed_0%,#fffdf9_34%,#f5f7fb_100%)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 px-6 py-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_38%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Eraflip Tech logo"
                    width={64}
                    height={64}
                    className="h-12 w-12 object-contain"
                    priority
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    {policy.title}
                  </h1>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-slate-600">
                    {policy.metaDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[16rem]">
              <MetaPill label="Last updated" value={policy.updatedAt} />
            </div>
          </div>
        </header>

        <div className="mt-8">
          <article className="rounded-[2rem] border border-slate-200 bg-white/90 px-6 py-8 shadow-[0_16px_60px_rgba(15,23,42,0.06)] sm:px-10">
            <p className="max-w-4xl text-lg leading-8 text-slate-700">
              {policy.intro}
            </p>

            <div className="mt-10 space-y-10">
              {policy.sections.map((section) => (
                <section
                  key={section.title}
                  className="space-y-4 border-t border-slate-200 pt-8 first:border-t-0 first:pt-0"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((block, index) => (
                      <SectionBlock
                        key={`${section.title}-${block.type}-${index}`}
                        block={block}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
