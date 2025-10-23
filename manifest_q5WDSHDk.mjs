import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { z as NOOP_MIDDLEWARE_HEADER, B as decodeKey } from './chunks/astro/server_BpWU_tsO.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/adityasinha/bigspring-light-astro-main/","cacheDir":"file:///Users/adityasinha/bigspring-light-astro-main/node_modules/.astro/","outDir":"file:///Users/adityasinha/bigspring-light-astro-main/dist/","srcDir":"file:///Users/adityasinha/bigspring-light-astro-main/src/","publicDir":"file:///Users/adityasinha/bigspring-light-astro-main/public/","buildClientDir":"file:///Users/adityasinha/bigspring-light-astro-main/dist/client/","buildServerDir":"file:///Users/adityasinha/bigspring-light-astro-main/dist/server/","adapterName":"","routes":[{"file":"file:///Users/adityasinha/bigspring-light-astro-main/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/adityasinha/bigspring-light-astro-main/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/adityasinha/bigspring-light-astro-main/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/adityasinha/bigspring-light-astro-main/dist/faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/adityasinha/bigspring-light-astro-main/dist/pricing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/adityasinha/bigspring-light-astro-main/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/adityasinha/bigspring-light-astro-main/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://sgemarketing.biz","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/layouts/Default.astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/[regular].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[regular]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/layouts/PostSingle.astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/[single].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[single]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/lib/contentParser.astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/page/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/page/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/faq.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/faq@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/pricing.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/pricing@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/adityasinha/bigspring-light-astro-main/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/page/[slug]@_@astro":"pages/blog/page/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[single]@_@astro":"pages/blog/_single_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/[regular]@_@astro":"pages/_regular_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_q5WDSHDk.mjs","/Users/adityasinha/bigspring-light-astro-main/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/adityasinha/bigspring-light-astro-main/.astro/content-modules.mjs":"chunks/content-modules_DrWN_wy-.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D46fIvSm.mjs","/Users/adityasinha/bigspring-light-astro-main/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_-TFk6YRg.mjs","/Users/adityasinha/bigspring-light-astro-main/src/content/pages/elements.mdx?astroPropagatedAssets":"chunks/elements_X9up8ia7.mjs","/Users/adityasinha/bigspring-light-astro-main/src/content/pages/elements.mdx":"chunks/elements_DQrYucm5.mjs","@/shortcodes/Tabs":"_astro/Tabs.BfosKKYZ.js","@/shortcodes/Accordion":"_astro/Accordion.EoLeTuUZ.js","@/shortcodes/Youtube":"_astro/Youtube.DKPuVcrX.js","@astrojs/react/client.js":"_astro/client.CP5ORVIe.js","/Users/adityasinha/bigspring-light-astro-main/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.utNlNYmk.js","/Users/adityasinha/bigspring-light-astro-main/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/adityasinha/bigspring-light-astro-main/dist/404.html","/file:///Users/adityasinha/bigspring-light-astro-main/dist/blog/index.html","/file:///Users/adityasinha/bigspring-light-astro-main/dist/contact/index.html","/file:///Users/adityasinha/bigspring-light-astro-main/dist/faq/index.html","/file:///Users/adityasinha/bigspring-light-astro-main/dist/pricing/index.html","/file:///Users/adityasinha/bigspring-light-astro-main/dist/services/index.html","/file:///Users/adityasinha/bigspring-light-astro-main/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"wpZ4cOxMnjKiaTro8963VHZiHAeSVvfqCARopz+L1j4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
