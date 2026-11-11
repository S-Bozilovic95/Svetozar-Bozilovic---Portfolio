import plugin from "tailwindcss/plugin";

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "560px",
      md: "721px",
      lg: "1061px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: token("background"),
        surface: token("surface"),
        deep: token("deep"),
        card: token("card"),
        border: token("border"),
        foreground: token("foreground"),
        "muted-foreground": token("muted-foreground"),
        primary: token("primary"),
        "primary-foreground": token("primary-foreground"),
        tint: token("tint"),
        "tint-border": token("tint-border"),
        destructive: token("destructive"),
      },
      fontFamily: {
        display: ['"Archivo Variable"', '"Arial Narrow"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1240px",
      },
      boxShadow: {
        frame: "0 30px 70px -34px rgb(var(--shadow) / var(--shadow-alpha))",
        glow: "0 0 0 4px rgb(var(--primary) / 0.18)",
        "glow-lg": "0 0 0 6px rgb(var(--primary) / 0.18)",
        lift: "0 10px 24px -8px rgb(var(--shadow) / var(--shadow-alpha))",
      },
      keyframes: {
        blink: { "50%": { opacity: "0.25" } },
        orbit: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        blink: "blink 1.6s infinite",
        // The duration comes from --orbit-duration, so a ring and its icons can turn in step
        orbit: "orbit var(--orbit-duration, 60s) linear infinite",
        "orbit-reverse": "orbit var(--orbit-duration, 60s) linear infinite reverse",
      },
    },
  },
  plugins: [
    // Archivo is a variable font with a width axis, used for the wide headings
    plugin(({ addUtilities }) => {
      const widths = [108, 112, 115, 118, 120, 122, 125];
      addUtilities(
        Object.fromEntries(
          widths.map((w) => [`.wdth-${w}`, { fontVariationSettings: `"wdth" ${w}` }]),
        ),
      );
    }),
  ],
};
