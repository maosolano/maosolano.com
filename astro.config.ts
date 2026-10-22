import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

/** Opens external links in Markdown/MDX content in a new tab. */
function rehypeExternalLinks() {
  const walk = (node: any) => {
    if (node.type === "element" && node.tagName === "a" && /^https?:\/\//.test(node.properties?.href ?? "")) {
      node.properties.target = "_blank";
      node.properties.rel = ["noopener", "noreferrer"];
    }
    node.children?.forEach(walk);
  };
  return walk;
}

export default defineConfig({
  site: "https://maosolano.com",
  markdown: { rehypePlugins: [rehypeExternalLinks] },
  integrations: [mdx()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
