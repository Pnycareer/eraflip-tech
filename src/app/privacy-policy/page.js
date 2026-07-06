import Link from "next/link";
import { privacyPolicyList } from "@/lib/privacy-policies";

export const metadata = {
  title: "Privacy Policies | Eraflip Tech",
  description: "Central index for Eraflip Tech game privacy policies.",
};

export default function PrivacyPolicyIndexPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7ed_0%,#fffdf9_34%,#f5f7fb_100%)] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 px-6 py-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">
              Eraflip Tech
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Privacy Policies
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Use this index to open the policy for each game. Add new titles by
              registering another entry in the shared privacy-policy data file.
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {privacyPolicyList.map((policy) => (
            <Link
              key={policy.slug}
              href={`/privacy-policy/${policy.slug}`}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Game policy
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-orange-600">
                {policy.gameName}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {policy.metaDescription}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                Open policy
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
