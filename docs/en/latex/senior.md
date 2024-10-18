---
titleTemplate: LaTeX - :title | Algebra
---

# Senior Syntax

## Tables

Use `$$\begin{array}{column_styles}...\end{array}$$` to create tables.

The column styles can be c, l, or r, which stand for center, left, and right alignment, respectively. You can also use `|` to add a vertical line.

Rows in the table are separated by `\\`, and columns by `&`.

Use `\hline` to insert a horizontal line before the current row.

- Example:

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

- Output:

  $$
  \begin{array}{c|lcr}
  n & \text{Left} & \text{Center} & \text{Right} \\
  \hline
  1 & 0.24 & 1 & 125 \\
  2 & -1 & 189 & -8 \\
  3 & -20 & 2000 & 1+10i \\
  \end{array}
  $$

## Matrices

- Basic usage

  Use `$$\begin{matrix}...\end{matrix}$$` to create matrices. Separate rows with `\\` and columns with `&`.

  - Example:

    ```
    $$
    \begin{matrix}
    1 & x & x^2 \\
    1 & y & y^2 \\
    1 & z & z^2 \\
    \end{matrix}
    $$
    ```

  - Output:

    $$
    \begin{matrix}
    1 & x & x^2 \\
    1 & y & y^2 \\
    1 & z & z^2 \\
    \end{matrix}
    $$

- Adding brackets

  To add brackets around matrices, use `\left` and `\right`.

  You can also use special `matrix` types like `pmatrix`, `bmatrix`, `Bmatrix`, `vmatrix`, or `Vmatrix`.

  - Example:

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

  - Output:

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

- Omitted Elements

  You can use `\cdots`, `\ddots`, and `\vdots` to omit elements in a matrix.

  - Example:

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

  - Output:

    $$
    \begin{matrix}
    1 & a_1 & a_1^2 & \cdots & a_1^n \\
    1 & a_2 & a_2^2 & \cdots & a_2^n \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & a_m & a_m^2 & \cdots & a_m^n \\
    \end{matrix}
    $$

- Augmented Matrices

  Augmented matrices are created using the array environment.

  - Example:

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

  - Output:

    $$
    \left[
      \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
      \end{array}
    \right]
    $$

## Aligned Equations

Sometimes, you may want to align equations, particularly at the equals sign. This can be done using the `\begin{align}...\end{align}` format, where `& `is used to specify the alignment.

- Example:

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

- Output:

  $$
  \begin{align}
  \sqrt{37}&=\sqrt{\frac{73^2-1}{12^2}} \\
  &=\sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\
  &=\sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
  &=\frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\
  &\approx\frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right)
  \end{align}
  $$

## Piecewise Expressions

When defining a function with multiple cases, use `\begin{cases}...\end{cases}`. Rows are separated by `\\` and `&` indicates alignment.

- Example:

  ```
  $$
  f(n)=
  \begin{cases}
  n/2,&\text{if $n$ is even} \\
  3n+1,&\text{if $n$ is odd}
  \end{cases}
  $$
  ```

- Output:

  $$
  f(n)=
  \begin{cases}
  n/2,&\text{if $n$ is even} \\
  3n+1,&\text{if $n$ is odd}
  \end{cases}
  $$

To increase vertical spacing between cases, add `\\[2ex]` at the end of a row (3ex, 4ex, etc., can also be used, 1ex being the default).

- Output:

  $$
  f(n)=
  \begin{cases}
  \frac{n}{2},&\text{if $n$ is even} \\[2ex]
  3n+1,&\text{if $n$ is odd}
  \end{cases}
  $$

## Spacing Issues

There are certain issues in $\LaTeX$ formulas that don't affect correctness but make the output look unpolished.

- Avoid using `\frac` in exponents or integrals

  Using `\frac` in such expressions reduces clarity. It’s rarely used in professional mathematical typesetting. Instead, `/` should be used.

  - Example:

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

  - Output:

    $$
    \begin{array}{c|c}
    \mathrm{Bad} & \mathrm{Better} \\
    \hline \\
    e^{i\frac{\pi}2} & e^{i\pi/2} \\
    \int^\frac\pi2_{-\frac\pi2}\sin x \,dx & \int^{\pi/2}_{\pi/2}\sin x \,dx
    \end{array}
    $$

- Use `\mid` instead of `|` as a separator

  When `|` is used as a separator, there’s an issue with spacing. Use `\mid` instead.

  - Example:

    ```
    $$
    \begin{array}{c|c}
    \mathrm{Bad}&\mathrm{Better}\\
    \hline\\
    \{x|x^2\in\Bbb Z\}&\{x\mid x^2\in\Bbb Z\}
    \end{array}
    $$
    ```

  - Output:

    $$
    \begin{array}{c|c}
    \mathrm{Bad}&\mathrm{Better}\\
    \hline\\
    \{x|x^2\in\Bbb Z\}&\{x\mid x^2\in\Bbb Z\}
    \end{array}
    $$

- Multiple integrals

  For multiple integrals, avoid using `\int\int`. Instead, use specific commands like `\iint`, `\iiint`, etc.

  - Example:

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

  - Output:

    $$
    \begin{array}{c|c}
    \mathrm{Bad}&\mathrm{Better}\\
    \hline\\
    \int\int_S f(x)\,dy\,dx&\iint_S f(x)\,dy\,dx\\
    \int\int\int_V f(x)\,dz\,dy\,dx&\iiint_V f(x)\,dz\,dy\,dx
    \end{array}
    $$

In differential expressions, use `\`, to add a small amount of space; otherwise, $\LaTeX$ will tightly arrange the terms.

- Example:

  ```
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \iiint_V f(x)dz dy dx&\iiint_V f(x)\,dz\,dy\,dx
  \end{array}
  $$
  ```

- Output:

  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \iiint_V f(x)dz dy dx&\iiint_V f(x)\,dz\,dy\,dx
  \end{array}
  $$

## Continued Fractions

When writing continued fractions, use `\cfrac` instead of `\frac` or `\over`.

- Example:

  ```
  $$
  x=a_0+\cfrac{1^2}{a_1
  +\cfrac{2^2}{a_2
  +\cfrac{3^2}{a^3
  +\cfrac{4^2}{a_4+\cdots}}}}
  $$
  ```

- Output:

  $$
  x=a_0+\cfrac{1^2}{a_1
  +\cfrac{2^2}{a_2
  +\cfrac{3^2}{a^3
  +\cfrac{4^2}{a_4+\cdots}}}}
  $$

## Systems of Equations

Use `\begin{array}...\end{array}` and `\left\{...\right.` to represent systems of equations.

- Example:

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

- Output:

  $$
  \left\{
  \begin{array}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y+c_2z=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{array}
  \right.
  $$

Alternatively, you can use `\begin{cases}...\end{cases}` for the same system of equations:

```
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{cases}
$$
```

To align equals signs in equations, use `\begin{aligned}...\end{aligned}`.

- Example:

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

- Output:

  $$
  \left\{
  \begin{aligned}{c}
  a_1x+b_1y+c_1z=d_1 \\
  a_2x+b_2y=d_2 \\
  a_3x+b_3y+c_3z=d_3
  \end{aligned}
  \right.
  $$

If you need to align equations and terms, use `\begin{array}{column_styles}...\end{array}`.

- Example:

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

- Output:

  $$
  \left\{
  \begin{array}{ll}
  a_1x+b_1y+c_1z&=d_1 \\
  a_2x+b_2y&=d_2 \\
  a_3x+b_3y+c_3z&=d_3
  \end{array}
  \right.
  $$

## Additional Decorations

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

- `\overbrace` and `\underbrace` can be annotated with superscripts and subscripts, such as `\underbrace{a\cdot a\cdots a}_{b_\text{times}}`:

  $\underbrace{a\cdot a\cdots a}_{b_\text{times}}$

- Phonetic symbols, like `\check{I}`: $\check{I}$, `\acute{J}`: $\acute{J}$, `\grave{K}`: $\grave{K}$.

## Commutative Diagrams

Use `\begin{CD}...\end{CD}` to represent commutative diagrams.

- Example:

  ```
  $$
  \begin{CD}
  A@>a>>B \\
  @VbVV=@VVcV \\
  c@>>d>D
  \end{CD}
  $$
  ```

- Output:

  $$
  \begin{CD}
  A@>a>>B \\
  @VbVV=@VVcV \\
  c@>>d>D
  \end{CD}
  $$

In the diagram, `@>>>` represents a right arrow, `@<<<` represents a left arrow, `@AAA` represents an upward arrow, `@VVV` represents a downward arrow, `@=` represents a horizontal double line, `@|` represents a vertical double line, and `@.` represents no arrow.

- Example:

  ```
  $$
  \begin{CD}
  A@>>>B@>{\text{very long label}}>>C \\
  @.@AAA@|\\
  D@=E@<<<F
  \end{CD}
  $$
  ```

- Output:

  $$
  \begin{CD}
  A@>>>B@>{\text{very long label}}>>C \\
  @.@AAA@|\\
  D@=E@<<<F
  \end{CD}
  $$

## Colors

There are two ways to color text.

- `\textcolor{color-name}{text}`:

  Here, color-name is the system-defined color, and text is the content to be colored.

  For example, `\textcolor{hotpink}{E=mc^2}`: $\textcolor{hotpink}{E=mc^2}$.

- `\textcolor[rgb]{r,g,b}{text}` 或 `\textcolor[RGB]{R,G,B}{text}`:

  In rgb, values range from 0 to 1, and in RGB, values range from 0 to 255.

  For example, `\textcolor[rgb]{0.5,0.8,0.7}{E=mc^2}`: $\textcolor[rgb]{0.5,0.8,0.7}{E=mc^2}$, or `\textcolor[RGB]{202,12,22}{E=mc^2}`: $\textcolor[RGB]{202,12,22}{E=mc^2}$.

You can also define custom colors using `\definecolor{ColorName}{rgb}{r,g,b}`.

- Example:

  ```
  $$
  \definecolor{mycolor}{rgb}{0.1,0.5,0.8}
  \textcolor{mycolor}{E=mc^2}
  $$
  ```

- Output:

  $$
  \definecolor{mycolor}{rgb}{0.1,0.5,0.8}
  \textcolor{mycolor}{E=mc^2}
  $$

## Highlighting Equations

Use `\bbox` to highlight an equation.

- Example:

  ```
  \bbox[blue]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- Output:

  $$
  \bbox[blue]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

You can also add padding (similar to padding in CSS) by specifying numerical values.

- Example:

  ```
  \bbox[blue,10px]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- Output:

  $$
  \bbox[blue,10px]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

Borders can also be added.

- Example:

  ```
  \bbox[10px,border:2px solid red]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- Output:

  $$
  \bbox[10px,border:2px solid red]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

Additionally, you can set both background color and border at the same time.

- Example:

  ```
  \bbox[10px,hotpink,border:2px dashed blue]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  ```

- Output:

  $$
  \bbox[10px,hotpink,border:2px dashed blue]{{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
  $$

