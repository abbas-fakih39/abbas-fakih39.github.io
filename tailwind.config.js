/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           'var(--bg)',
        surface:      'var(--surface)',
        line:         'var(--line)',
        ink:          'var(--ink)',
        muted:        'var(--muted)',
        signal:       'var(--signal)',
        'signal-ink': 'var(--signal-ink)',
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-hero':    ['clamp(3.25rem, 10vw, 6rem)',    { lineHeight: '0.98' }],
        'fluid-display': ['clamp(2rem, 5vw, 3.5rem)',      { lineHeight: '1.05' }],
        'fluid-title':   ['clamp(1.6rem, 3.5vw, 2.5rem)',  { lineHeight: '1.1'  }],
        'fluid-xl':      ['clamp(1.15rem, 2.2vw, 1.5rem)', { lineHeight: '1.35' }],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
