const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: basePath,
  assetPrefix: isProd ? `${basePath}/` : '',
  // ...
}