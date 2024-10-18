---
titleTemplate: LaTeX - :title | Algebra
---

# 高级语法

## 表格

使用 `$$\begin{array}{列样式}...\end{array}$$` 这样的形式来创建表格。

其中，列样式可以使用 c、l、r 分别表示居中和左右对齐，还可以使用 `|` 表示一条竖线。

表格中各行使用 `\\` 分隔，各列使用 `&` 分隔。

使用 `\hline` 可以在本行前加入一条直线。

- 示例：

  ```
  $$
  \begin{array}{c|lcr}
  n & \text{Left} & \text{Center} & \text{Right} \\
  \hline
  1 & 0.24 & 1 & 125 \\
  2 & -1 & 189 & -8 \\
  3 & -20 & 2000 1+10i \\
  \end{array}
  $$
  ```

- 效果：

  $$
  \begin{array}{c|lcr}
  n & \text{Left} & \text{Center} & \text{Right} \\
  \hline
  1 & 0.24 & 1 & 125 \\
  2 & -1 & 189 & -8 \\
  3 & -20 & 2000 & 1+10i \\
  \end{array}
  $$

## 矩阵

- 基本用法

  使用 `$$\begin{matrix}...\end{matrix}$$` 这样的形式来表示矩阵，在 `\begin` 与 `\end` 之间加入矩阵中的元素即可。矩阵的行之间使用 `\\` 分隔，列之间使用 `&` 分隔。

  - 示例：

    ```
    $$
    \begin{matrix}
    1 & x & x^2 \\
    1 & y & y^2 \\
    1 & z & z^2 \\
    \end{matrix}
    $$
    ```

  - 效果：

    $$
    \begin{matrix}
    1 & x & x^2 \\
    1 & y & y^2 \\
    1 & z & z^2 \\
    \end{matrix}
    $$

- 加括号

  如果要对矩阵加括号，可以像上文中提到的，使用 `\left` 与 `\right` 配合表示括号符号。

  也可以使用特殊的 matrix，即将 `matrix` 替换为 `pmatrix`、`bmatrix`、`Bmatrix`、`vmatrix`、`Vmatrix`。

  - 示例：

    ```
    $$
    \begin{pmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{pmatrix}
    $$

    $$
    \begin{bmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{bmatrix}
    $$

    $$
    \begin{Bmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{Bmatrix}
    $$

    $$
    \begin{vmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{vmatrix}
    $$

    $$
    \begin{Vmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{Vmatrix}
    $$
    ```

  - 效果：

    $$
    \begin{pmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{pmatrix}
    $$

    $$
    \begin{bmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{bmatrix}
    $$

    $$
    \begin{Bmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{Bmatrix}
    $$

    $$
    \begin{vmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{vmatrix}
    $$

    $$
    \begin{Vmatrix}
    1 & 2 \\
    3 & 4 \\
    \end{Vmatrix}
    $$

- 省略元素

  可以使用 `\cdots`、`\ddots`、`\vdots` 来省略矩阵中的元素。

  - 示例：

    ```
    $$
    \begin{matrix}
    1 & a_1 & a_1^2 & \cdots & a_1^n \\
    1 & a_2 & a_2^2 & \cdots & a_2^n \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & a_m & a_m^2 & \cdots & a_m^n \\
    \end{matrix}
    $$
    ```

  - 效果：

    $$
    \begin{matrix}
    1 & a_1 & a_1^2 & \cdots & a_1^n \\
    1 & a_2 & a_2^2 & \cdots & a_2^n \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & a_m & a_m^2 & \cdots & a_m^n \\
    \end{matrix}
    $$

- 增广矩阵

  增广矩阵需要使用前面的 array 来实现。

  - 示例：

    ```
    $$
    \left[
      \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
      \end{array}
    \right]
    $$
    ```

  - 效果：

    $$
    \left[
      \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
      \end{array}
    \right]
    $$

## 对齐的公式

有时候可能需要一系列的公式中等号对齐，这需要使用形如 `\begin{align}...\end{align}` 的格式，其中使用 `&` 来指定需要对齐的位置。

- 示例：

  ```
  $$
  \begin{align}
  \sqrt{37}&=\sqrt{\frac{73^2-1}{12^2}} \\
  &=\sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\
  &=\sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
  &=\frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\
  &\approx\frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right)
  \end{align}
  $$
  ```

- 效果：

  $$
  \begin{align}
  \sqrt{37}&=\sqrt{\frac{73^2-1}{12^2}} \\
  &=\sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\
  &=\sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
  &=\frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\
  &\approx\frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right)
  \end{align}
  $$

## 分类表达式

定义函数的时候经常需要分情况给出表达式，可以使用 `\begin{cases}...\end{cases}`。其中，使用 `\\` 来分类，使用 `&` 指定需要对齐的位置。

- 示例：

  ```
  $$
  f(n)=
  \begin{cases}
  n/2,&\text{if $n$ is even} \\
  3n+1,&\text{if $n$ is odd}
  \end{cases}
  $$
  ```

- 效果：

  $$
  f(n)=
  \begin{cases}
  n/2,&\text{if $n$ is even} \\
  3n+1,&\text{if $n$ is odd}
  \end{cases}
  $$

如果想分类之间的垂直间距变大，可以在行末使用 `\\[2ex]` 来分割（3ex，4ex 也可以用，1ex 相当于默认距离）。

- 效果：

  $$
  f(n)=
  \begin{cases}
  \frac{n}{2},&\text{if $n$ is even} \\[2ex]
  3n+1,&\text{if $n$ is odd}
  \end{cases}
  $$

## 空间问题

在使用 $\LaTeX$ 公式时，有一些不会影响公式正确性，但却会使其看上去很糟糕的问题。

- 不要在指数或者积分中使用 `\frac`

  在指数或者积分表达式中使用 `\frac` 会使表达式看起来不清晰，因此，在专业的数学排版中很少被使用。应该使用 `/` 来代替。

  - 示例：

    ```
    $$
    \begin{array}{c|c}
    \mathrm{Bad} & \mathrm{Better} \\
    \hline \\
    e^{i\frac{\pi}2} & e^{i\pi/2} \\
    \int^\frac\pi2_{-\frac\pi2}\sin x \,dx & \int^{\pi/2}_{\pi/2}\sin x \,dx
    \end{array}
    $$
    ```

  - 效果：

    $$
    \begin{array}{c|c}
    \mathrm{Bad} & \mathrm{Better} \\
    \hline \\
    e^{i\frac{\pi}2} & e^{i\pi/2} \\
    \int^\frac\pi2_{-\frac\pi2}\sin x \,dx & \int^{\pi/2}_{\pi/2}\sin x \,dx
    \end{array}
    $$

- 使用 `\mid` 代替 `|` 作为分隔符

  符号 `|` 作为分隔符时，有排版空间大小的问题，应该使用 `\mid` 代替。

  - 示例：

    ```
    $$
    \begin{array}{c|c}
    \mathrm{Bad}&\mathrm{Better}\\
    \hline\\
    \{x|x^2\in\Bbb Z\}&\{x\mid x^2\in\Bbb Z\}
    \end{array}
    $$
    ```

  - 效果：

    $$
    \begin{array}{c|c}
    \mathrm{Bad}&\mathrm{Better}\\
    \hline\\
    \{x|x^2\in\Bbb Z\}&\{x\mid x^2\in\Bbb Z\}
    \end{array}
    $$

- 多重积分

  对于多重积分，不要使用 `\int\int` 此类表达，应该使用 `\iint`、`\iiint` 等特殊形式。

  - 示例：

    ```
    $$
    \begin{array}{c|c}
    \mathrm{Bad}&\mathrm{Better}\\
    \hline\\
    \int\int_S f(x)\,dy\,dx&\iint_S f(x)\,dy\,dx\\
    \int\int\int_V f(x)\,dz\,dy\,dx&\iiint_V f(x)\,dz\,dy\,dx
    \end{array}
    $$
    ```

  - 效果：

    $$
    \begin{array}{c|c}
    \mathrm{Bad}&\mathrm{Better}\\
    \hline\\
    \int\int_S f(x)\,dy\,dx&\iint_S f(x)\,dy\,dx\\
    \int\int\int_V f(x)\,dz\,dy\,dx&\iiint_V f(x)\,dz\,dy\,dx
    \end{array}
    $$

在微分前应该使用 `\,` 增加些许空间，否则 $\LaTeX$ 会将微分紧凑地排列在一起。

- 示例：

  ```
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \iiint_V f(x)dz dy dx&\iiint_V f(x)\,dz\,dy\,dx
  \end{array}
  $$
  ```

- 效果：

  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \iiint_V f(x)dz dy dx&\iiint_V f(x)\,dz\,dy\,dx
  \end{array}
  $$

## 连分数

书写连分数表达式时，请使用 `\cfrac` 代替 `\frac` 或 `\over`。

- 示例：

  ```
  $$
  x=a_0+\cfrac{1^2}{a_1
  +\cfrac{2^2}{a_2
  +\cfrac{3^2}{a^3
  +\cfrac{4^2}{a_4+\cdots}}}}
  $$
  ```

- 效果：

  $$
  x=a_0+\cfrac{1^2}{a_1
  +\cfrac{2^2}{a_2
  +\cfrac{3^2}{a^3
  +\cfrac{4^2}{a_4+\cdots}}}}
  $$

## 方程组

使用 `\begin{array}...\end{array}` 与 `\left\{...\right.` 配合来表示方程组。

- 代码：

  ```
  $$
  \left\{
  \begin{array}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y+c_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{array}
  \right.
  $$
  ```

- 效果：

  $$
  \left\{
  \begin{array}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y+c_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{array}
  \right.
  $$

还可以使用 `\begin{cases}...\end{cases}` 表达上面同样的方程组：

```
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{cases}
$$
```

要对齐方程式中的等号，可以使用 `\begin{aligned}...\end{aligned}`。

- 示例：

  ```
  $$
  \left\{
  \begin{aligned}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{aligned}
  \right.
  $$
  ```

- 效果：

  $$
  \left\{
  \begin{aligned}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{aligned}
  \right.
  $$

如果要对齐等号和项，可以使用 `\begin{array}{列样式}...\end{array}`。

- 示例：

  ```
  $$
  \left\{
  \begin{array}{ll}
  a_1x+b_1y+c_1z&=d_1 \\
  a_2x+b_2y&=d_2 \\
  a_3x+b_3y+c_3z&=d_3
  \end{array}
  \right.
  $$
  ```

- 效果：

  $$
  \left\{
  \begin{array}{ll}
  a_1x+b_1y+c_1z&=d_1 \\
  a_2x+b_2y&=d_2 \\
  a_3x+b_3y+c_3z&=d_3
  \end{array}
  \right.
  $$

## 附加装饰

- `\overline{A}\;\overline{AA}\;\overline{AAA}`：

  $\overline{A}\;\overline{AA}\;\overline{AAA}$

- `\underline{B}\;\underline{BB}\;\underline{BBB}`：

  $\underline{B}\;\underline{BB}\;\underline{BBB}$

- `\widetilde{C}\;\widetilde{CC}\;\widetilde{CCC}`：

  $\widetilde{C}\;\widetilde{CC}\;\widetilde{CCC}$

- `\widehat{D}\;\widehat{DD}\;\widehat{DDD}`：

  $\widehat{D}\;\widehat{DD}\;\widehat{DDD}$

- `\fbox{E}\;\fbox{EE}\;\fbox{EEE}`：

  $\fbox{E}\;\fbox{EE}\;\fbox{EEE}$

- `\underleftarrow{F}\;\underleftarrow{FF}\;\underleftarrow{FFF}`：

  $\underleftarrow{F}\;\underleftarrow{FF}\;\underleftarrow{FFF}$

- `\underrightarrow{G}\;\underrightarrow{GG}\;\underrightarrow{GGG}`：

  $\underrightarrow{G}\;\underrightarrow{GG}\;\underrightarrow{GGG}$

- `\underleftrightarrow{H}\;\underleftrightarrow{HH}\;\underleftrightarrow{HHH}`：

  $\underleftrightarrow{H}\;\underleftrightarrow{HH}\;\underleftrightarrow{HHH}$

- `\overbrace{(n-2)+\overbrace{(n_1)+n+(n+1)}+(n+2)}`：

  $\overbrace{(n-2)+\overbrace{(n_1)+n+(n+1)}+(n+2)}$

- `\underbrace{(n-2)+\underbrace{(n_1)+n+(n+1)}+(n+2)}`：

  $\underbrace{(n-2)+\underbrace{(n_1)+n+(n+1)}+(n+2)}$

- `\overbrace` 和 `\underbrace` 可以使用上下标进行注释，如 `\underbrace{a\cdot a\cdots a}_{b_\text{times}}`：

  $\underbrace{a\cdot a\cdots a}_{b_\text{times}}$

- 注释音标。如 `\check{I}`：$\check{I}$、`\acute{J}`：$\acute{J}$、`\grave{K}`：$\grave{K}$。

## 交换图表

使用 `\begin{CD}...\end{CD}` 表示交换图表。

- 示例：

  ```
  $$
  \begin{CD}
  A@>a>>B \\
  @VbVV=@VVcV \\
  c@>>d>D
  \end{CD}
  $$
  ```

- 效果：

  $$
  \begin{CD}
  A@>a>>B \\
  @VbVV=@VVcV \\
  c@>>d>D
  \end{CD}
  $$

其中，`@>>>` 表示右箭头，`@<<<` 表示左箭头，`@AAA` 表示上箭头，`@VVV` 表示下箭头，`@=` 表示水平双线，`@|` 表示垂直双线，`@.` 表示没有箭头。

- 示例：

  ```
  $$
  \begin{CD}
  A@>>>B@>{\text{very long label}}>>C \\
  @.@AAA@|\\
  D@=E@<<<F
  \end{CD}
  $$
  ```

- 效果：

  $$
  \begin{CD}
  A@>>>B@>{\text{very long label}}>>C \\
  @.@AAA@|\\
  D@=E@<<<F
  \end{CD}
  $$

## 颜色

有两种方式可以用来为字体着色。

- `\textcolor{color-name}{text}`：

  其中 color-name 为系统自定义的颜色名称，text 为需要着色的文字内容。

  如 `\textcolor{hotpink}{E=mc^2}`：$\textcolor{hotpink}{E=mc^2}$。

- `\textcolor[rgb]{r,g,b}{text}` 或 `\textcolor[RGB]{R,G,B}{text}`：

  其中 rgb 的取值范围为 0-1，RGB 的取值范围为 0-255。

  如 `\textcolor[rgb]{0.5,0.8,0.7}{E=mc^2}`：$\textcolor[rgb]{0.5,0.8,0.7}{E=mc^2}$ 或 `\textcolor[RGB]{202,12,22}{E=mc^2}`：$\textcolor[RGB]{202,12,22}{E=mc^2}$。

另外，还可以使用 `definecolor{ColorName}{rgb}{r,g,b}` 的方法（RGB 相同）自定义颜色名。自定义颜色名之后，可以直接调用这个颜色方案。

- 示例：

  ```
  $$
  \definecolor{mycolor}{rgb}{0.1,0.5,0.8}
  \textcolor{mycolor}{E=mc^2}
  $$
  ```

- 效果：

  $$
  \definecolor{mycolor}{rgb}{0.1,0.5,0.8}
  \textcolor{mycolor}{E=mc^2}
  $$

## 等式高亮

使用 `\bbox` 可以高亮一个等式。

- 示例：

  ```
  \bbox[blue]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- 效果：

  $$
  \bbox[blue]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

也可以在参数中加上数值，以增加公式与背景色四周的间距（类似 padding）。

- 示例：

  ```
  \bbox[blue,10px]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- 效果：

  $$
  \bbox[blue,10px]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

还可以设置边框。

- 示例：

  ```
  \bbox[10px,border:2px solid red]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- 效果：

  $$
  \bbox[10px,border:2px solid red]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

当然，你还可以同时设置背景色和边框。

- 示例：

  ```
  \bbox[10px,hotpink,border:2px dashed blue]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- 效果：

  $$
  \bbox[10px,hotpink,border:2px dashed blue]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

