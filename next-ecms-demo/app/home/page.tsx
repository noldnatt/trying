// app/home/page.tsx
import { fetchArticleBySlug, blocksWithEscapedHtmlToHtml } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const article = await fetchArticleBySlug("home");
  const title = article?.Title ?? "Welcome to SERENITY AT HOME";
  const html = article ? blocksWithEscapedHtmlToHtml(article.Body) : "";

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="rounded-3xl border overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]">
        <div
          className="px-6 sm:px-8 py-10 sm:py-12 bg-white/65 backdrop-blur-md"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 0% 0%, rgba(14,165,168,.18), transparent 60%), radial-gradient(900px 450px at 100% 0%, rgba(139,92,246,.18), transparent 60%)",
          }}
        >
          <div className="mx-auto max-w-5xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[--color-ink]">
              Compassionate Care. Peace of Mind.
            </h1>
            <p className="mt-3 max-w-2xl text-[--color-ink-2]">
              Personalized in-home support tailored to your family’s needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* solid primary */}
              <a href="/contact" className="btn-primary">Get Care Now</a>
              {/* subtle outline */}
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition
                           border-2 border-zinc-300 bg-white/70 hover:bg-white text-[--color-ink]"
              >
                Our Services
              </a>
              {/* solid accent */}
              <a href="/join-our-team" className="btn-accent">Join Our Team</a>
            </div>
          </div>
        </div>
      </div>

      {/* Strapi body */}
      <article className="prose prose-zinc max-w-none">
        <h1 className="mb-3">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </section>
  );
}
