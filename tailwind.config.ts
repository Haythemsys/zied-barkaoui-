import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        void:  '#0A0A0A',
        deep:  '#111111',
        card:  '#181818',
        muted: '#222222',
        // Olive family
        olive: {
          dim:     '#4A5828',
          base:    '#6B7B3A',
          mid:     '#8A9B4A',
          bright:  '#A3B847',
          light:   '#C4D068',
          glow:    'rgba(163,184,71,.12)',
          border:  'rgba(163,184,71,.18)',
        },
        // Gold accent
        gold: {
          DEFAULT: '#C8A43A',
          light:   '#E2BE5A',
          dim:     '#8B6E22',
        },
        // Text
        text: {
          primary:   '#FFFFFF',
          secondary: '#EAEAEA',
          muted:     '#888888',
          ghost:     '#555555',
        },
      },
      fontFamily: {
        arabic:  ['var(--font-arabic)', 'Almarai', 'sans-serif'],
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'DM Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.5rem',
      },
      backgroundImage: {
        'olive-gradient': 'linear-gradient(135deg, #6B7B3A 0%, #A3B847 100%)',
        'dark-gradient':  'linear-gradient(180deg, transparent 0%, #0A0A0A 100%)',
        'card-gradient':  'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 100%)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'shimmer':  'shimmer 2s linear infinite',
        'fade-up':  'fadeUp 0.7s ease both',
        'fade-in':  'fadeIn 0.5s ease both',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
