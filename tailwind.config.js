/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0A',
          surface: '#111111',
        },
        fg: {
          DEFAULT: '#F2F2F2',
          muted: '#666666',
          dim: '#2A2A2A',
        },
        accent: {
          DEFAULT: '#E2FF00',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'fluid-hero':    ['clamp(4rem, 15vw, 14rem)',  { lineHeight: '0.88' }],
        'fluid-display': ['clamp(2.5rem, 7vw, 7rem)',   { lineHeight: '0.95' }],
        'fluid-xl':      ['clamp(1.5rem, 3.5vw, 3.5rem)', { lineHeight: '1' }],
        'fluid-sm':      ['clamp(0.8rem, 1.2vw, 0.9rem)', { lineHeight: '1.7' }],
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
};
