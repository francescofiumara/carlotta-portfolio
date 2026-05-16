/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8F4EF',
        ink: '#1E1E1E',
        muted: '#5F5A56',
        coral: '#D46A6A',
        apricot: '#F2B880',
        lilac: '#CDB7D8',
        sage: '#A8BFA3',
        night: '#141414',
        nightcard: '#202020',
        nighttext: '#F6F1EA',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(30, 30, 30, 0.10)',
        glow: '0 16px 50px rgba(212, 106, 106, 0.28)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 700ms ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
