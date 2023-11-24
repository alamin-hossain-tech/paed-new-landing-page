tailwind.config = {
  theme: {
    screens: {
      sm: "584px",
      // => @media (min-width: 576px) { ... }

      md: "850px",

      laptop: "1080px",
      // => @media (min-width: 960px) { ... }

      lg: "1300px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        aqua: "var(--color-aqua)",
        aquaDark: "var(--color-aqua-dark)",
        sky: "var(--color-sky)",
        coralLight: "var(--color-coral-light)",
        coralDark: "var(--color-coral-dark)",
        saffron: "var(--color-saffron)",
        saffronDark: "var(--color-saffron-dark)",
        sunglow: "var(--color-sunglow)",
        sunglowHover: "var(--color-sunglow-hover)",
        sunglowLight: "var(--color-sunglow-bg)",
        bodyText: "var(--color-body-text)",
        black: "var(--color-black)",
        light: "var(--color-light)",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
};
