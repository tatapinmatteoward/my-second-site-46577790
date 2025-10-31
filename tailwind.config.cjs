/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8a2be2',
        accent: '#32cd32',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
