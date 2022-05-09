module.exports = {
    siteUrl: 'https://krishnaaa.com',
    generateRobotsTxt: true
}
/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://krishnaaa.com",
    generateRobotsTxt: true,
}
