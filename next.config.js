const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  extraCss: ['./index.css'],
})

module.exports = withNextra()
