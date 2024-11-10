// /**  @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   */
  output: "export",

  /**
   * Set base path only in production (GitHub Pages)
   */
  basePath: process.env.NODE_ENV === 'development' ? '' : '/portfolio',

  /**
   * Set asset prefix only in production (GitHub Pages)
   */
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/portfolio/',

  /**
   * Disable server-based image optimization
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;