/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnaaa.com";

const sitemapConfig = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: [],
  robotsTxt: true,
  priority: 0.9,
  changefreq: "daily",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    // additionalSitemaps: [`${SITE_URL}/dynamic-sitemap.xml`],
  },
};

module.exports = sitemapConfig;
