import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Base, a as $$Image } from '../chunks/Base_BAwPiLib.mjs';
import { $ as $$Cta } from '../chunks/Cta_BRDMxwMc.mjs';
import { $ as $$Post } from '../chunks/Post_OMFzvUOL.mjs';
import { g as getSinglePage } from '../chunks/contentParser_Ch_n0J_I.mjs';
import { s as sortByDate } from '../chunks/sortFunctions_DN17Ikpp.mjs';
import { g as getEntry } from '../chunks/_astro_content_BMwE2Gbd.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntry("homepage", "-index");
  if (!homepage) {
    throw new Error(
      "Homepage content not found. Please ensure 'src/content/homepage/-index.md' exists."
    );
  }
  const { banner, feature, services, workflow, call_to_action } = homepage.data;
  const posts = await getSinglePage("blog");
  const sortedPosts = sortByDate(posts);
  const recentPosts = sortedPosts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section" data-astro-cid-j7pv25f6> <div class="hero-content-wrapper" data-astro-cid-j7pv25f6> <h1 class="font-primary font-bold" data-astro-cid-j7pv25f6>${banner?.title}</h1> ${banner?.content && renderTemplate`<div class="mt-4 text-text-dark hero-content" data-astro-cid-j7pv25f6>${unescapeHTML(banner.content)}</div>`} </div> <div class="hero-image-wrapper"${addAttribute(`background-image: url(${banner.image})`, "style")} data-astro-cid-j7pv25f6></div> </section> <a${addAttribute(banner.button.link, "href")} class="block w-full bg-dark py-12 text-center font-primary text-2xl font-bold text-white transition-colors duration-300 hover:bg-primary-hover hover:text-black" data-astro-cid-j7pv25f6> ${banner.button.label} </a> <section class="section bg-light" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${feature.title}</h2> </div> <div class="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-j7pv25f6> ${feature.features.map((item) => renderTemplate`<div class="feature-card group rounded-xl bg-white p-5 pb-8 text-center text-text-dark transition-colors duration-300 ease-in-out hover:bg-dark hover:text-text" data-astro-cid-j7pv25f6> ${item.icon && renderTemplate`<div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "alt": item.name, "src": item.icon, "width": 40, "height": 40, "data-astro-cid-j7pv25f6": true })} </div>`} <div class="mt-4" data-astro-cid-j7pv25f6> <p class="h5 font-bold" data-astro-cid-j7pv25f6>${item.name}</p> <p class="mt-3" data-astro-cid-j7pv25f6>${item.content}</p> </div> </div>`)} </div> </div> </section> ${services.map((service, index) => {
    const isOdd = index % 2 > 0;
    return renderTemplate`<section${addAttribute(`section ${isOdd && "bg-light"}`, "class")} data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="items-center gap-8 md:grid md:grid-cols-2" data-astro-cid-j7pv25f6> <div${addAttribute(`service-carousel ${!isOdd && "md:order-2"}`, "class")} data-astro-cid-j7pv25f6> ${service.images.length > 1 ? renderTemplate`<div class="swiper" data-astro-cid-j7pv25f6> <div class="swiper-wrapper" data-astro-cid-j7pv25f6> ${service.images?.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": image, "width": 538, "height": 328, "alt": "", "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <div class="pagination" data-astro-cid-j7pv25f6></div> </div>` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": service.images[0], "width": 538, "height": 328, "alt": "", "data-astro-cid-j7pv25f6": true })}`} </div>  <div${addAttribute(`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"}`, "class")} data-astro-cid-j7pv25f6> <h2 class="font-bold leading-[40px]" data-astro-cid-j7pv25f6>${service?.title}</h2> <p class="mt-4 mb-2" data-astro-cid-j7pv25f6>${service?.content}</p> ${service?.button?.enable && renderTemplate`<a${addAttribute(service?.button.link, "href")} class="cta-link inline-flex items-center text-primary" data-astro-cid-j7pv25f6> ${service?.button.label} <img class="ml-1" src="/images/arrow-right.svg"${addAttribute(18, "width")}${addAttribute(14, "height")} alt="arrow" data-astro-cid-j7pv25f6> </a>`} </div> </div> </div> </section>`;
  })}<section class="section pb-0" data-astro-cid-j7pv25f6> <div class="mb-8 text-center" data-astro-cid-j7pv25f6> <h2 class="mx-auto max-w-[400px] font-bold leading-[44px]" data-astro-cid-j7pv25f6>${workflow?.title}</h2> <p class="mt-3" data-astro-cid-j7pv25f6>${workflow?.description}</p> </div> ${renderComponent($$result2, "Image", $$Image, { "src": workflow.image, "alt": "workflow image", "width": 1920, "height": 414, "data-astro-cid-j7pv25f6": true })} </section> <section class="section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Latest Insights</h2> <p class="mt-4" data-astro-cid-j7pv25f6>
Stay updated with the latest news and strategies in digital marketing.
</p> </div> <div class="row mt-12 justify-center" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => renderTemplate`<div class="col-12 mb-8 sm:col-6 lg:col-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Post", $$Post, { "post": post, "data-astro-cid-j7pv25f6": true })} </div>`)} </div>  </div> </section> <a href="/blog" class="block w-full bg-dark py-12 text-center font-primary text-2xl font-bold text-white transition-colors duration-300 hover:bg-primary-hover hover:text-black" data-astro-cid-j7pv25f6>
View All Posts
</a> ${renderComponent($$result2, "Cta", $$Cta, { "cta": call_to_action, "data-astro-cid-j7pv25f6": true })} ` })} ${renderScript($$result, "/Users/adityasinha/bigspring-light-astro-main/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/index.astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
