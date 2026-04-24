/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: '#7C3AED',
        'accent-light': '#9F5FFF',
        'accent-dim': '#3D1A7A',
        surface: '#111111',
        border: '#1F1F1F',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'fluid-xl': 'clamp(3rem, 8vw, 8rem)',
        'fluid-lg': 'clamp(2rem, 5vw, 5rem)',
        'fluid-md': 'clamp(1.5rem, 3vw, 2.5rem)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'fadeUp': 'fadeUp 0.6s ease forwards',
        'drawLine': 'drawLine 1s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          from: { 'stroke-dashoffset': '1000' },
          to: { 'stroke-dashoffset': '0' },
        },
      },
    },
  },
  plugins: [],
}
