---
titleTemplate: LaTeX - :title | Algebra
---

# 化学公式

使用 $\LaTeX$ 书写化学式时，需要用 `\ce{}` 把化学式或方程式包裹起来。比如在写硫酸时，需要这样写 `\ce{H2SO4}`：$\ce{H2SO4}$。

## 无机物

- 整数：下标、电荷数、氧化数

  `\ce{CO2}`：$\ce{CO2}$、`\ce{H+}`：$\ce{H+}$、`\ce{cl-}`：$\ce{Cl-}$、`\ce{Cu^2+}`：$\ce{Cu^2+}$ 等等。其中，二价铜离子的表示中如果不加 `^`，会显示为 `\ce{Cu2+}`：$\ce{Cu2+}$。

  氧化数表示为二价铁 `\ce{Fe^{II}}`：$\ce{Fe^{II}}$、四价铅 `\ce{Pb^{IV}}`：$\ce{Pb^{IV}}$ 等。

- 分数下标

  和 $\LaTeX$ 普通的加入数学表达式的语法一样，如 `\ce{Fe(CN)_{\frac62}}`：$\ce{Fe(CN)_{\frac62}}$。

- 圆括号、方括号、大括号

  圆括号 `\ce{(NH4)2S}`：$\ce{(NH4)2S}$、方括号 `\ce{[AgCl2]-}`：$\ce{[AgCl2]-}$、大括号 `\ce{[\{(x2)3\}2]^3+}`：$\ce{[\{(x2)3\}2]^3+}$。

  :::warning 注意
  和圆括号及方括号相比，大括号之前需要加入转义符，否则不会被显示出来。
  :::

- 上标与下标：同位素、分子离子

  `\ce{^{227}_{90}Th+}`：$\ce{^{227}_{90}Th+}$、`\ce{H^2+}`：$\ce{H^2+}$。

- 圆点：自由基、水合物

  `\ce{Cl*}`：$\ce{Cl*}$、`\ce{*CH3}`：$\ce{*CH3}$、`\ce{KCr(SO4)2*12H2O}`：$\ce{KCr(SO4)2*12H2O}$。

## 有机物

- 化学键

  单键 `\ce{CH3-CHO}`：$\ce{CH3-CHO}$、双键 `\ce{CH2=CH2}`：$\ce{CH2=CH2}$、三键 `\ce{CH#CH}`：$\ce{CH#CH}$。

  其他化学键有 `\ce{A\bond{~}B\bond{~-}C}`：$\ce{A\bond{~}B\bond{~-}C}$、`\ce{A\bond{~--}B\bond{~=}C\bond{-~-}D}`：$\ce{A\bond{~--}B\bond{~=}C\bond{-~-}D}$、`\ce{A\bond{...}B\bond{...}C}`：$\ce{A\bond{...}B\bond{...}C}$。

- 斜体：cis 和 trans

  有机化学中用来表示顺反异构的 cis 与 trans 通常都写成斜体。数学公式中的字母会被写成斜体，所以只需包裹一对 `$` 即可，如 `$$\ce{$cis${-}CH3CH-CHCH3}$$`：

  $$\ce{$cis${-}CH3CH-CHCH3}$$

## 化学方程式

- 箭头：反应方向

  可以打正向、可逆、正逆反应程度不同类型的箭头，如 `\ce{->}`：$\ce{->}$、`\ce{<=>}`：$\ce{<=>}$、`\ce{<=>>}`：$\ce{<=>>}$、`\ce{<<=>}`：$\ce{<<=>}$。

  还可以方便地添加反应条件。

  - 示例：

    ```
    $$
    \ce{2H2 + O2 ->[\Delta] H2O}
    $$

    $$
    \ce{N2 + H2 ->[{催化剂}][{高温高压}] NH3}
    $$
    ```

  - 效果：

    $$
    \ce{2H2 + O2 ->[\Delta] H2O}
    $$

    $$
    \ce{N2 + H2 ->[{催化剂}][{高温高压}] NH3}
    $$

- 箭头：沉淀与气体

  `\ce{Ca(OH)2 + CO2 = CaCO3 v + H2O}`：
  $$\ce{Ca(OH)2 + CO2 = CaCO3 v + H2O}$$

  `\ce{Fe + 2H+ = H2 ^ + Fe^2+}`：
  $$\ce{Fe + 2H+ = H2 ^ + Fe^2+}$$

## 其他内容

- 文字下方添加标注

  同素异形体和同分异构体的存在使我们有时候需要在化学式的下方添加说明，如 `\underset{\text{葡萄糖}}{\ce{C6H1206}}`：$\underset{\text{葡萄糖}}{\ce{C6H1206}}$。

- 连续的多行反应式

  首先需要使用 `\begin{align*}...\end{align*}` 引入 align 环境。

  每一行的开始加 `&` 符号，结尾加换行符号。

  - 示例：

    ```
    $$
    \begin{align*}
    & \ce{CO2 + 3H2 <=> CH3OH + H2O} \\
    & \ce{CO2 + H2 <=> CO + H2O} \\
    & \ce{CO + 2H2 <=> CH3OH} \\
    & \ce{CH3OH <=> CH3OCH3 + H2O}
    \end{align*}
    $$
    ```

  - 效果：

    $$
    \begin{align*}
    & \ce{CO2 + 3H2 <=> CH3OH + H2O} \\
    & \ce{CO2 + H2 <=> CO + H2O} \\
    & \ce{CO + 2H2 <=> CH3OH} \\
    & \ce{CH3OH <=> CH3OCH3 + H2O}
    \end{align*}
    $$

