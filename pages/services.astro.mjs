import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BAwPiLib.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sgemarketing.biz");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Our Services | SGE Analytics", "description": "Explore the comprehensive digital marketing services offered by SGE Analytics, including SEO, SGE, website development, and data analytics." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="text-center"> <h1 class="font-primary font-bold">Our Services</h1> <p class="mt-4">
We offer a full suite of digital marketing services designed to elevate
          your brand and drive measurable results.
</p> </div> <div class="mt-12 space-y-12"> <div id="seo-sge"> <h2 class="font-bold leading-[40px]">SEO & SGE Strategy</h2> <p class="mt-4 mb-2">
A detailed description of your Search Engine Optimization and Search
            Generative Experience services. Explain your approach to keyword
            research, on-page optimization, technical SEO, link building, and
            how you prepare clients for the future of search.
</p> </div> <div id="analytics"> <h2 class="font-bold leading-[40px]">
Data-Driven Analytics & Reporting
</h2> <p class="mt-4 mb-2">
A detailed description of your analytics services. Cover how you set
            up tracking, what platforms you use (e.g., Google Analytics 4), how
            you analyze data to find insights, and what kind of reports you
            provide to clients.
</p> </div> <div id="web-dev"> <h2 class="font-bold leading-[40px]">
High-Performance Website Development
</h2> <p class="mt-4 mb-2">
A detailed description of your web development services. Mention the
            technologies you use (e.g., Astro, modern frameworks), your focus
            on speed, security, and user experience, and how you build sites
            that are optimized for conversions.
</p> </div> <div id="online-presence"> <h2 class="font-bold leading-[40px]">
Online Presence & Content Strategy
</h2> <p class="mt-4 mb-2">
A detailed description of how you build a brand's online presence.
            This can include content marketing, blog management, social media
            strategy, and ensuring brand consistency across all digital
            channels.
</p> </div> <div id="ads"> <h2 class="font-bold leading-[40px]">Strategic Ad Campaigns</h2> <p class="mt-4 mb-2">
A detailed description of your paid advertising services. Mention
            the platforms you manage (Google Ads, Meta Ads, etc.), how you
            handle targeting, budget management, ad creative, and performance
            optimization.
</p> </div> </div> </div> </section> ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/services.astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
