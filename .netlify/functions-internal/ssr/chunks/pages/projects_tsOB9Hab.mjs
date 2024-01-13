/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_4ughrEDs.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Sidebar, a as $$Layout } from './experience_ijIUWS_g.mjs';

const $$Astro$2 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-6"> <div class="bg-main-txt rounded-xl"> <h3 class="text-main-bg text-2xl font-lexend text-center px-8 py-12">
Coming Soon
</h3> </div> <div class="flex flex-col gap-4"> <h2 class="text-main-txt text-2xl font-lexend">${title}</h2> <p class="text-main-txt text-base font-lexend">${description}</p> </div> </div>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/ProjectCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects$1;
  return renderTemplate`${maybeRenderHead()}<div class="h-screen flex flex-col gap-6 flex-1 pt-48 pb-16"> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Cryptracker", "description": "A website for a tracking cryptocurrencies' values in the market" })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "KickStore", "description": "A website for buying and selling sneakers and apparel" })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "Gaia Box Gourmet", "description": "A website for a homemade food entrepreneurship in Uruguay" })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": "R2-D2 Pilot", "description": "A clone of Github Copilot for Visual Studio Code" })} </div>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ignacio Latorre Website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-40 flex flex-row"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "ProjectsSection", $$Projects$1, {})} </main> ` })}`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/pages/projects.astro", void 0);

const $$file = "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
