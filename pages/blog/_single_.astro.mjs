import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { a as $$Image, m as markdownify, $ as $$Base } from '../../chunks/Base_BAwPiLib.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { r as renderEntry } from '../../chunks/_astro_content_BMwE2Gbd.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_Ch_n0J_I.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://sgemarketing.biz");
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const { title, image } = post.data;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row justify-center"> <div class="col-12 md:col-8"> <article class="text-center"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "height": 500, "width": 1e3, "alt": title, "class": "rounded-lg" })}`} <h1 class="h2 text-left my-6">${unescapeHTML(markdownify(title))}</h1> <div class="content mb-16 text-left"> ${renderComponent($$result, "Content", Content, {})} </div> </article> </div> </div> </div> </section>`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/layouts/PostSingle.astro", void 0);

const $$Astro = createAstro("https://sgemarketing.biz");
async function getStaticPaths() {
  const posts = await getSinglePage("blog");
  const paths = posts.map((post) => ({
    params: {
      single: post.id
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": post })} ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/[single].astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/[single].astro";
const $$url = "/blog/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
