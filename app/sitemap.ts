import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data/specs";

const routes = ["", "/service", "/how-it-works", "/about", "/roadmap", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));
}
