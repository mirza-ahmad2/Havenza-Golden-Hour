import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/properties", priority: "0.9" },
          { path: "/services", priority: "0.8" },
          { path: "/about", priority: "0.7" },
          { path: "/contact", priority: "0.8" },
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${SITE_URL}${e.path === "/" ? "" : e.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
