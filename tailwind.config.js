/** @type {import('tailwindcss').Config} */
/*
 * Apple-style light theme.
 * The old token names (primary / secondary / dark / light) are kept on purpose,
 * so every component keeps working -- only the VALUES changed.
 *   dark.*  = surfaces  (now light greys, was near-black)
 *   light.* = text      (now near-black, was light grey)
 */
module.exports = {
  plugins: [require("tailwind-scrollbar")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Apple system colours
        primary: "#0071E3",   // Apple blue
        secondary: "#5E5CE6", // Apple indigo
        accent: "#248A3D",    // Apple green (darkened for contrast on white)

        // Surfaces: DEFAULT is the page background, higher = more separation
        dark: {
          DEFAULT: "#FFFFFF",
          100: "#FBFBFD",
          200: "#F5F5F7",
          300: "#EDEDF0",
          400: "#E3E3E6",
        },

        // Text: DEFAULT is body text, 300 is the muted/secondary tone
        light: {
          DEFAULT: "#1D1D1F",
          100: "#000000",
          200: "#1D1D1F",
          300: "#6E6E73",
        },

        separator: "#D2D2D7",

        glow: {
          cyan: "rgba(0, 113, 227, 0.10)",
          purple: "rgba(94, 92, 230, 0.10)",
        },
      },

      // Rule 15: start from the platform system font, it already ships
      // optical sizing, tracking tables and legibility tuning.
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'Helvetica Neue', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'SFMono-Regular', 'JetBrains Mono', 'Menlo', 'monospace'],
      },

      // Rule 15: tracking is size-specific, never one value for all sizes.
      letterSpacing: {
        display: '-0.022em',
        heading: '-0.019em',
        title: '-0.014em',
        body: '0em',
        caption: '0.011em',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(0, 113, 227, 0.07) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FBFBFD 100%)',
      },

      // Rule 12: bigger surfaces read as thicker -- deeper shadow, not a glow.
      boxShadow: {
        'glow': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'glow-sm': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'glow-lg': '0 12px 32px rgba(0, 0, 0, 0.09)',
        'card': '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 2px 4px rgba(0, 0, 0, 0.05), 0 16px 40px rgba(0, 0, 0, 0.10)',
        'phone': '0 24px 60px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.06)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-down': 'fadeDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'spin-slow': 'spin 30s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'blob': 'blob 14s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Smaller travel: Apple moves things a short distance, quickly.
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)' },
          '50%': { boxShadow: '0 8px 28px rgba(0, 113, 227, 0.14)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(16px, -24px) scale(1.04)' },
          '66%': { transform: 'translate(-12px, 12px) scale(0.97)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },

      borderColor: {
        DEFAULT: 'rgba(0, 0, 0, 0.08)',
      },

      backdropBlur: {
        xs: '2px',
      },

      transitionDuration: {
        '400': '400ms',
      },

      // Rule 3 + 7: one enter curve, its mirror for the exit, and a spring
      // with a little overshoot reserved for momentum-driven moves.
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'spring': 'cubic-bezier(0.34, 1.26, 0.64, 1)',
        'bounce-in': 'cubic-bezier(0.34, 1.26, 0.64, 1)',
      },
    },
  },
};
