import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BAwPiLib.mjs';
import { $ as $$Cta } from '../chunks/Cta_BRDMxwMc.mjs';
import { g as getEntry } from '../chunks/_astro_content_BMwE2Gbd.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry(
    "pricing",
    "-index"
  );
  const { title, description, plans, call_to_action } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pb-0"> <div class="container"> <h1 class="text-center font-normal">${title}</h1> <div class="section row -mt-10 justify-center md:mt-0"> ${plans?.map((plan) => renderTemplate`<div${addAttribute(`col-12 md:col-4 ${!plan.recommended ? "lg:px-0" : "col-recommended"}`, "class")}> <div class="card text-center"> <h4>${plan.title}</h4> <div class="mt-5"> <span class="text-5xl text-text-dark">$${plan.price}</span> <span>/ ${plan.type}</span> </div> <h6 class="mt-2 font-normal text-text">${plan.subtitle}</h6> <ul class="mt-5"> ${plan?.features?.map((feature) => renderTemplate`<li class="mb-[10px] leading-5">${feature}</li>`)} </ul> <a${addAttribute(`btn mt-5 ${plan.recommended ? "btn-primary" : "btn-outline-primary"}`, "class")}${addAttribute(plan.button.link, "href")}> ${plan.button.label} </a> </div> </div>`)} </div> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "cta": call_to_action })} ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/pricing.astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
