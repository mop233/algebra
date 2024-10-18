---
titleTemplate: LaTeX - :title | Algebra
---

# 相关工具

## 渲染引擎

目前主流的 $\LaTeX$ 公式渲染引擎是 [MathJax](https://mathjax.org) 和 [KaTeX](https://katex.org)，它们都可以在所有现代浏览器和平台上生成高质量的输出。

二者的语法大致相同，只在少数部分有些许区别。使用方法查看各自的官网即可，那里有更加详细的说明。

## Vatex

[VaTex](https://github.com/Shimada666/VaTex) 是一款在 Vue 中展示 Katex 公式的插件，其安装和使用都非常简单。

### 安装

```sh
npm i vatex katex
```

Vue2 用户需要额外安装 composition-api。

```sh
npm i @vue/composition-api
```

### 使用

- Vue3

  - 注册为全局组件

    ```js
    import {createApp} from 'vue'
    import VueLatex from 'vatex'

    app
      .use(VueLatex)
      .mount('#app')
    ```

    然后在 vue 文件中使用：

    ```vue
    <vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
    ```

  - 单独引入

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

  - 注册为全局组件

  ```js
  import Vue from 'vue';

  Vue.use(VueKatex);
  ```

  - 单独引入

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

### 参数

|参数|类型|默认值|说明|
|:---:|:---:|:---:|---|
|expression|string||LaTeX 表达式。|
|displayMode|boolean|false|显示模式，ture 使用 div 承载其水平居中，false 使用 span 内联。|
|fontsize|number|16|控制 LaTeX 表达式字体大小（px）。|
|minRuleThickness|number|0.04|分数线、边框等线条大小（em）。|
|macros|object|null|宏，用对象表示。|
|strict|[stirng, object, function]|warn|严格模式：warn、error、ignore。|
|throwOnError|boolean|false|错误时抛异常，ture 表达式错误会抛异常，false 时会用红色显示错误的 LaTeX 表达式。|
|errorColor|string|#cc0000|LaTeX 表达式错误时的颜色。|
