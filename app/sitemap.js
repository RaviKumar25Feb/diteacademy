export default function sitemap() {
  const lastModified = new Date().toISOString();

  return [
    {
      url: "https://www.diteacademy.com/",
      lastModified,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.diteacademy.com/courses",
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.diteacademy.com/digital-marketing",
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.diteacademy.com/tutorials",
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.diteacademy.com/online-tests",
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.diteacademy.com/academic-subjects",
      lastModified,
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.diteacademy.com/about",
      lastModified,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.diteacademy.com/contact",
      lastModified,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.diteacademy.com/legal/privacy-policy",
      lastModified,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.diteacademy.com/legal/refund-policy",
      lastModified,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.diteacademy.com/legal/terms-of-use",
      lastModified,
      changefreq: "monthly",
      priority: 0.6,
    },
  ];
}
