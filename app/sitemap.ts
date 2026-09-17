import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/products/kits", priority: 0.8 },
  { path: "/products/drones", priority: 0.8 },
  { path: "/products/quadrupeds", priority: 0.8 },
  { path: "/projects", priority: 0.7 },
  { path: "/learn", priority: 0.7 },
  { path: "/services", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
