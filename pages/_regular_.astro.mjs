import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Base } from '../chunks/Base_BAwPiLib.mjs';
import { r as renderEntry } from '../chunks/_astro_content_BMwE2Gbd.mjs';
import { g as getSinglePage } from '../chunks/contentParser_Ch_n0J_I.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://sgemarketing.biz");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Default;
  const { data } = Astro2.props;
  const { title } = data.data;
  const { Content } = await renderEntry(data);
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 mb-8 text-center">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </section>`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/layouts/Default.astro", void 0);

const $$Astro = createAstro("https://sgemarketing.biz");
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Default", $$Default, { "data": page })} ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/[regular].astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/[regular].astro";
const $$url = "/[regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
