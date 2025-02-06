import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://lilit.io.vn",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
    ];
}
