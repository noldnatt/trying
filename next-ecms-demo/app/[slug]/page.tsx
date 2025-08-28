// app/[slug]/page.tsx
import {
  fetchArticleBySlug,
  fetchArticles,
  blocksWithEscapedHtmlToHtml,
} from "@/lib/api";
import { notFound } from "next/navigation";

import {
  HomeHero,
  BenefitsStrip,
  ServicesCards,
  PhotoGallery,
  JoinOurTeamCTA,
} from "@/app/site-sections";

export async function generateStaticParams() {
  const articles = await fetchArticles();
  return articles.map((a) => ({ slug: a.attributes.Slug }));
}

export const dynamic = "force-dynamic";

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Next 15 async params
  const article = await fetchArticleBySlug(slug);
  if (!article) return notFound();

  const title = article.Title ?? "Page";
  const html = article.Body ? blocksWithEscapedHtmlToHtml(article.Body) : "";

  // Special design on the home page
  if (slug === "home") {
    return (
      <>
        <HomeHero />

        <section className="space-y-8 mt-8">
          <BenefitsStrip />
          <ServicesCards />
          <PhotoGallery />
          <JoinOurTeamCTA />
        </section>

        {/* Editable CMS content below the promos */}
        {html && (
          <article className="prose prose-zinc mx-auto mt-10">
            <h1 className="mb-3">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        )}
      </>
    );
  }

  // Other pages
  return (
    <>
      {html && (
        <article className="prose prose-zinc mx-auto">
          <h1 className="mb-3">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      )}
    </>
  );
}