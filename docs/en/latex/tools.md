---
titleTemplate: LaTeX - :title | Algebra
---

# Tools

## Rendering Engines

The current mainstream $\LaTeX$ formula rendering engines are [MathJax](https://mathjax.org) and [KaTeX](https://katex.org), both of which can generate high-quality output on all modern browsers and platforms.

Their syntax is largely the same, with only minor differences. For usage, refer to their respective official websites for more detailed instructions.

## Vatex

[VaTex](https://github.com/Shimada666/VaTex) is a plugin for displaying KaTeX formulas in Vue, and its installation and usage are very simple.

### Installation

```sh
npm i vatex katex
```

Vue2 users need to additionally install the composition-api.

```sh
npm i @vue/composition-api
```

### Usage

- Vue3

  - Register as a global component

    ```js
    import {createApp} from 'vue'
    import VueLatex from 'vatex'

    app
      .use(VueLatex)
      .mount('#app')
    ```

    Then use it in the Vue file:

    ```vue
    <vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
    ```

  - Import individually

    ```vue
    <template>
      <vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
    </template>
    <script lang="ts">
    import {defineComponent} from 'vue'
    import {VueLatex} from 'vatex'

    export default defineComponent({
      components: {
        VueLatex
      }
    })
    </script>
    ```

- Vue2

  - Register as a global component

  ```js
  import Vue from 'vue';

  Vue.use(VueKatex);
  ```

  - Import individually

  ```vue
  <template>
    <vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
  </template>
  <script>
  import {VueLatex} from 'vatex'

  export default {
    name: 'App',
    components: {
      VueLatex
    }
  }
  </script>
  ```

### Parameters

|Parameter|Type|Default|Description|
|:---:|:---:|:---:|---|
|expression|string||LaTeX expression.|
|displayMode|boolean|false|Display mode, true uses div for horizontal centering, false uses span for inline.|
|fontsize|number|16|Controls the font size of the LaTeX expression (px).|
|minRuleThickness|number|0.04|Line thickness for fraction lines, borders, etc. (em).|
|macros|object|null|Macros, represented as an object.|
|strict|[stirng, object, function]|warn|Strict mode: warn, error, ignore.|
|throwOnError|boolean|false|Throws an exception on error. True will throw an exception for expression errors, false will display the erroneous LaTeX expression in red.|
|errorColor|string|#cc0000|Color when LaTeX expression errors occur.|
