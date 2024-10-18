---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: Used for operations such as decimals, fractions...

hero:
  name: algebra.js
  text: compact, fast, and easy-to-use
  tagline: Used for operations such as decimals, fractions...
  image:
    src: /logo.svg
  actions:
    - theme: brand
      text: Quick Start
      link: /guide/start
    - theme: alt
      text: View on GitHub
      link: https://github.com/mop233/algebra

features:
  - icon: 🌈
    title: Decimal
    details: Solved the accuracy issue of JavaScript, any decimal operation will yield the correct result.
    link: /apis/decimal
  - icon: ☀️
    title: Fraction
    details: It can accurately display fraction by string, and perform any fraction-related calculations.
    link: /apis/fraction
  - icon: ☁️
    title: LaTeX
    details: By calling the toTex method of the Fraction instance, it can be converted to LaTeX format.
    link: /latex/base
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(-45deg, #FFEB3B 5%, #4caf50);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #FFEB3B 15%, #4caf50 55%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
