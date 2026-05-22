/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           '#FAFAFA',
        surface:      '#F0F0F0',
        border:       '#E2E2E2',
        fg:           '#111111',
        'fg-mid':     '#555555',
        'fg-dim':     '#999999',
        accent:       '#0066FF',
        'accent-bg':  '#EEF3FF',
      },
      fontFamily: {
        sans:    ['"DM Sans"',  'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"',  'monospace'],
        display: ['"DM Sans"',  'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-hero':    ['clamp(3.5rem, 10vw, 8rem)',   { lineHeight: '0.9'  }],
        'fluid-display': ['clamp(2rem,   5.5vw, 5rem)',  { lineHeight: '1.05' }],
        'fluid-xl':      ['clamp(1.25rem, 3vw, 2.5rem)', { lineHeight: '1.1'  }],
        'fluid-sm':      ['clamp(0.8rem,  1.2vw, 0.9rem)',{ lineHeight: '1.7' }],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
