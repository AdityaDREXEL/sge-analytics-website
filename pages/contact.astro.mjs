import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BAwPiLib.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Contact Us | SGE Analytics", "description": "Get in touch with SGE Analytics to discuss your digital marketing needs or to get a custom quote." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="text-center"> <h1 class="font-primary font-bold">Contact Us</h1> <p class="mt-4">
Have a question or ready to start a project? <br> We'd love to hear
          from you.
</p> </div> <div class="mx-auto mt-12 max-w-3xl"> <div class="rounded-xl bg-light p-8 text-center md:p-12"> <h2 class="font-bold leading-[40px]">Get a Free Consultation</h2> <p class="mt-4 mb-8">
Fill out the form below, or email us directly at <a href="mailto:contact@sgeanalytics.com" class="text-primary hover:underline">contact@sgeanalytics.com</a>.
</p> <form method="POST" action="#"> <div class="mb-6"> <label for="name" class="mb-2 block text-left font-medium">Name</label> <input type="text" id="name" name="name" class="form-input w-full" placeholder="John Doe" required> </div> <div class="mb-6"> <label for="email" class="mb-2 block text-left font-medium">Email</label> <input type="email" id="email" name="email" class="form-input w-full" placeholder="john.doe@example.com" required> </div> <div class="mb-6"> <label for="message" class="mb-2 block text-left font-medium">Message</label> <textarea id="message" name="message" class="form-input w-full" rows="4" placeholder="How can we help you?" required></textarea> </div> <button type="submit" class="btn btn-primary w-full">
Send Message
</button> </form> </div> </div> </div> </section> ` })}`;
}, "/Users/adityasinha/bigspring-light-astro-main/src/pages/contact.astro", void 0);

const $$file = "/Users/adityasinha/bigspring-light-astro-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
