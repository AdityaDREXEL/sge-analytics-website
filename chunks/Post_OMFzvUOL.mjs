import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { p as plainify, a as $$Image, c as config } from './Base_BAwPiLib.mjs';

const $$Astro = createAstro("https://sgemarketing.biz");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { summary_length } = config.settings;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg"> ${post.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 445, "height": 230, "class": "w-full object-cover" })}`} <div class="flex flex-grow flex-col p-6"> <h3 class="mb-4 text-xl font-bold"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="hover:text-primary"> ${post.data.title} </a> </h3> <p class="mb-6 flex-grow text-text"> ${plainify(post.data.description || post.body.slice(0, summary_length))} </p> <a${addAttribute(`/blog/${post.slug}`, "href")} class="btn btn-primary mt-auto self-start">
Read More
</a> </div> </div>`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/layouts/partials/Post.astro", void 0);

export { $$Post as $ };
