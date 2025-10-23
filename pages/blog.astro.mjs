import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { c as config, $ as $$Base, a as $$Image } from '../chunks/Base_BAwPiLib.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_D3y7rlZZ.mjs';
import { $ as $$Post } from '../chunks/Post_OMFzvUOL.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as getCollection } from '../chunks/_astro_content_BMwE2Gbd.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sgemarketing.biz");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter(
    (post) => post.slug !== "-index"
  );
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "SGE Analytics Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="text-center font-normal lg:text-[56px]">
SGE Analytics Blog
</h1> <div class="row pb-12"> <div class="row col-12 pb-24 pt-16"> <div class="md:col-6"> ${currentPosts[0].data.image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "rounded-lg", "src": currentPosts[0].data.image, "alt": currentPosts[0].data.title, "width": 925, "height": 475 })}`} </div> <div class="md:col-6"> <h2 class="h3 mb-2 mt-4"> <a${addAttribute(`/blog/${currentPosts[0].slug}`, "href")} class="block hover:text-primary"> ${currentPosts[0].data.title} </a> </h2> <p>${currentPosts[0].data.description}</p> <a class="btn btn-primary mt-4"${addAttribute(`/blog/${currentPosts[0].slug}`, "href")} rel="">
Read More
</a> </div> </div> ${currentPosts.slice(1).map((post) => renderTemplate`<div class="col-12 mb-8 sm:col-6 lg:col-4"> ${renderComponent($$result2, "Post", $$Post, { "post": post })} </div>`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "blog", "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/index.astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
