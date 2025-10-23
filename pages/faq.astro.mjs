import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_BAwPiLib.mjs';
import { g as getEntry } from '../chunks/_astro_content_BMwE2Gbd.mjs';
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("faq", "-index");
  const { title, description, faqs } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="text-center font-normal">${unescapeHTML(markdownify(title))}</h1> <div class="section row -mt-6"> ${faqs?.map((faq) => renderTemplate`<div class="col-12 mt-6 md:col-6"> <div class="p-12  shadow"> <div class="faq-head relative"> <h4>${unescapeHTML(markdownify(faq.title))}</h4> </div> <p class="faq-body mt-4">${unescapeHTML(markdownify(faq.answer))}</p> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/faq.astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
