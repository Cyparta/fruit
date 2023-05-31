/** @type {import('next').NextConfig} */

const nextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  // target: "serverless",
  // serverless: true,
  // Specify which pages to export
  output: "export",
  // Set the output directory for the exported files
  // This isthe directory where the static HTML files will be generated
  // when you run the `npm run build && npm run export` command
  // Make sure this directory is not ignored by Git or other version control systems
  // distDir: "out",
  // basePath: "/fruit",
};

module.exports = nextConfig;
