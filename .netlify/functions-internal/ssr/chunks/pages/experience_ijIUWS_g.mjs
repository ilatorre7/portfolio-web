/* empty css                               */
import 'html-escaper';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead, i as renderTransition } from '../astro_4ughrEDs.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$d = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$c = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/layouts/Layout.astro", void 0);

const $$Astro$b = createAstro();
const $$MenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { label, href, currentPath } = Astro2.props;
  const isActive = currentPath === href;
  const color = isActive ? `text-main-green` : `text-main-txt`;
  const display = isActive ? `flex` : `hidden`;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex flex-row gap-2"${addAttribute(href, "href")}> <p${addAttribute(`${display}`, "class")}>•</p> <p${addAttribute(`text-xl uppercase font-lexend-deca ${color} tracking-wide`, "class")}> ${label} </p> </a> </li>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/molecules/MenuItem.astro", void 0);

const $$Astro$a = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="flex flex-col gap-8"> ${renderComponent($$result, "MenuItem", $$MenuItem, { "label": "about", "href": "/", "currentPath": currentPath })} ${renderComponent($$result, "MenuItem", $$MenuItem, { "label": "experience", "href": "/experience", "currentPath": currentPath })} ${renderComponent($$result, "MenuItem", $$MenuItem, { "label": "projects", "href": "/projects", "currentPath": currentPath })} </ul> </nav>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/Navigation.astro", void 0);

const $$Astro$9 = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Github;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "height")}${addAttribute(height, "width")} viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/icons/Github.astro", void 0);

const $$Astro$8 = createAstro();
const $$Linkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Linkedin;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")}${addAttribute(width, "width")} viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/icons/Linkedin.astro", void 0);

const $$Astro$7 = createAstro();
const $$Leetcode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Leetcode;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")}${addAttribute(width, "width")} enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/icons/Leetcode.astro", void 0);

const $$Astro$6 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mail;
  const { height, width } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(height, "height")}${addAttribute(width, "width")} viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/icons/Mail.astro", void 0);

const $$Astro$5 = createAstro();
const $$Links = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Links;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-8"> <a href="https://github.com/ilatorre7" class="hover:fill-main-green duration-100">${renderComponent($$result, "GithubIcon", $$Github, { "height": "36", "width": "36", "class": "fill-main-text" })}</a> <a href="https://www.linkedin.com/in/ignacio-latorre-941a25152/" class="hover:fill-main-green duration-100">${renderComponent($$result, "LinkedinIcon", $$Linkedin, { "height": "36", "width": "36", "class": "fill-main-text" })}</a> <a href="https://leetcode.com/ilatorre/" class="hover:fill-main-green duration-100">${renderComponent($$result, "LeetcodeIcon", $$Leetcode, { "height": "36", "width": "36", "class": "fill-main-text" })}</a> <a href="mailto:ignaciolatorreap@gmail.com" class="hover:fill-main-green duration-100">${renderComponent($$result, "MailIcon", $$Mail, { "height": "36", "width": "36", "class": "fill-main-text" })}</a> </div>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/Links.astro", void 0);

const $$Astro$4 = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${maybeRenderHead()}<aside class="h-screen flex flex-col justify-between py-16 flex-1"> <div class="flex flex-col gap-16"> <div> <h1 class="text-4xl font-lexend-deca font-bold text-main-green">
Ignacio Latorre
</h1> <h2 class="text-2xl font-lexend-deca font-bold text-main-txt">
Full Stack Developer
</h2> </div> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> ${renderComponent($$result, "Links", $$Links, {})} </aside>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/Sidebar.astro", void 0);

const $$Astro$3 = createAstro();
const $$Tech = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tech;
  const { tech: { bgColor, textColor, name } } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${bgColor} rounded-2xl`, "class")}> <p${addAttribute(`text-sm font-lexend ${textColor} px-4 py-2`, "class")}> ${name} </p> </div>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/atoms/Tech.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExpCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExpCard;
  const { init, end, role, place, description, techs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-6"> <div class="w-1/5"> <p class="text-base font-lexend">${init} - ${end}</p> </div> <div class="flex flex-col gap-2 w-4/5"> <h3 class="text-2xl font-lexend">${role} • ${place}</h3> <p class="text-base font-lexend">${description}</p> <div class="flex flex-wrap gap-4"> ${techs.map(
    (tech) => renderTemplate`${renderComponent($$result, "Tech", $$Tech, { "tech": tech })}`
  )} </div> </div> </div>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/ExpCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Experience$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Experience$1;
  return renderTemplate`${maybeRenderHead()}<div class="h-screen flex flex-col gap-6 flex-1 pt-48 pb-16"${addAttribute(renderTransition($$result, "dgqkg5mk", "slide", ""), "data-astro-transition-scope")}> ${renderComponent($$result, "ExpCard", $$ExpCard, { "init": "2023", "end": "Present", "role": "Designer / Front End Dev", "place": "Flyware Labs", "description": "Designing and building landing pages and dynamic components for Venture Ashore, a cruise tours company", "techs": [
    { name: "Javascript", bgColor: "bg-[#F0DB50]", textColor: "main-text" },
    { name: "CSS", bgColor: "bg-[#0070BA]", textColor: "text-white" },
    { name: "HTML", bgColor: "bg-[#E44D26]", textColor: "text-white" },
    { name: "Figma", bgColor: "bg-[#000000]", textColor: "text-white" }
  ] })} ${renderComponent($$result, "ExpCard", $$ExpCard, { "init": "2020", "end": "2022", "role": "Front End Engineer", "place": "Quiena Inversiones", "description": "Created and styled complex front end components for web and mobile apps. Developed and maintained multiple features for the mobile app.", "techs": [
    { name: "React Native", bgColor: "bg-[#61DAFB]", textColor: "main-text" },
    { name: "Next.js", bgColor: "bg-[#000000]", textColor: "text-white" }
  ] })} </div>`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/components/Experience.astro", "self");

const $$Astro = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ignacio Latorre Website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-40 flex flex-row"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "ExperienceSection", $$Experience$1, {})} </main> ` })}`;
}, "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/pages/experience.astro", void 0);

const $$file = "C:/Users/nacho/Desktop/Portfolio/portfolio-web/src/pages/experience.astro";
const $$url = "/experience";

const experience = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Experience,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sidebar as $, $$Layout as a, experience as e };
