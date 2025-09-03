import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'beige': '#d5c4a1',
          'pink': '#c88f7a',
          'brown': {
            'light': '#a65e39',
            'medium': '#8b4a2e',
            'dark': '#4e2c21'
          }
        }
      }
    },
  },
  plugins: [],
}

export default config
