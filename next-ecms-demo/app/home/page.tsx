// app/home/page.tsx
import { fetchArticleBySlug, blocksWithEscapedHtmlToHtml } from "@/lib/api";
import { HomeHero, BenefitsStrip, ServicesCards, PhotoGallery, JoinOurTeamCTA } from "../site-sections";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const article = await fetchArticleBySlug("home");
  const title = article?.Title ?? "Welcome to SERENITY AT HOME";
  const html = article ? blocksWithEscapedHtmlToHtml(article.Body) : "";

  return (
    <section className="space-y-8">
      {/* Hero with background image */}
      <HomeHero />
      
      {/* Benefits Strip */}
      <BenefitsStrip />
      
      {/* Services Cards */}
      <ServicesCards />
      
      {/* Photo Gallery with caregiver images */}
      <PhotoGallery />

      {/* Strapi body content if available */}
      {html && (
        <article className="prose prose-zinc max-w-none">
          <h1 className="mb-3">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      )}
      
      {/* Join Our Team CTA */}
      <JoinOurTeamCTA />
    </section>
  );
}
