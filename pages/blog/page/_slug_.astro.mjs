import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { $ as $$Pagination } from '../../../chunks/Pagination_D3y7rlZZ.mjs';
import { c as config, $ as $$Base, m as markdownify } from '../../../chunks/Base_BAwPiLib.mjs';
import { g as getSinglePage } from '../../../chunks/contentParser_Ch_n0J_I.mjs';
import { s as sortByDate } from '../../../chunks/sortFunctions_DN17Ikpp.mjs';
import { $ as $$Post } from '../../../chunks/Post_OMFzvUOL.mjs';
import { g as getEntry } from '../../../chunks/_astro_content_BMwE2Gbd.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://sgemarketing.biz");
async function getStaticPaths() {
  const posts = await getSinglePage("blog");
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const postIndex = await getEntry("blog", "-index");
  const posts = await getSinglePage("blog");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": postIndex?.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="mb-10 text-center font-normal lg:text-[56px]">${unescapeHTML(markdownify(postIndex?.data.title))}</h1> <div class="row"> ${currentPosts.map((post) => renderTemplate`<div class="col-12 mb-8 sm:col-6"> ${renderComponent($$result2, "Post", $$Post, { "post": post })} </div>`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "blog", "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/page/[slug].astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/page/[slug].astro";
const $$url = "/blog/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
