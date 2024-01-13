/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, i as renderTransition, f as renderComponent } from '../astro_4ughrEDs.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Sidebar, a as $$Layout } from './experience_ijIUWS_g.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="h-screen flex flex-col gap-6 flex-1 pt-48 pb-16"${addAttribute(renderTransition($$result, "stmamfch", "slide", ""), "data-astro-transition-scope")}> <p class="font-lexend text-base">
My name is Ignacio Latorre, I'm a full-stack developer based in Buenos
    Aires, Argentina. I specialize in designing and building multi-platform
    digital experiences with focus on improving the user experience while
    keeping the code quality at the highest.
</p> <p class="font-lexend text-base">
I'm enthusiastic about new technologies and i have a passion for acquiring
    knowledge on the different areas of the business in order to improve my
    abilities and provide the best service possible.
</p> </div>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/About.astro", "self");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ignacio Latorre Website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-40 flex flex-row"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "AboutSection", $$About, {})} </main> ` })}`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
