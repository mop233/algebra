---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: 小巧、快速且易用的 JavaScript 数学库

hero:
  name: algebra.js
  text: 小巧、快速且易用的 JavaScript 数学库
  tagline: 用于小数、分数和其它各种初级代数运算
  image:
    src: /logo.svg
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/start
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/mop233/algebra

features:
  - icon: 🌈
    title: 小数运算
    details: 解决了 JavaScript 自身小数运算的精度问题，任何小数运算将得到正确的结果。
  - icon: ☀️
    title: 分数运算
    details: 增加了分数，可以正确显示分数的字符串形式，还可以进行任何分数运算。
  - icon: ☁️
    title: LaTeX
    details: 调用 Fraction 实例对象的 toTex 方法，就可以将分数转换为 LaTeX 格式。
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
