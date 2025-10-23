import { c as createComponent, a as renderTemplate } from './astro/server_BpWU_tsO.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getCollection } from './_astro_content_BMwE2Gbd.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => {
    const pageData = data.data;
    return pageData.draft !== true;
  });
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/adityasinha/bigspring-light-astro-main/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
