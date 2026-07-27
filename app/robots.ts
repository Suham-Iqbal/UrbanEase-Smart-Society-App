import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login/", "/portal"],
    },
    sitemap:
      "https://urbanease-community.grapnel-clue2s.chatgpt.site/sitemap.xml",
  };
}
