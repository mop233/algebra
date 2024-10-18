---
titleTemplate: LaTeX - :title | Algebra
---

# Base Syntax

::: tip
$\LaTeX$ is a professional typesetting system used for creating high-quality scientific documents, academic papers, books, and reports. It also handles complex mathematical formulas. This guide focuses on writing mathematical formulas.
:::

::: danger Note
This site uses the MathJax rendering engine by default, so the following syntax is written according to MathJax. The Katex syntax is mostly similar to MathJax, with only a few differences. In case of errors, consult the official documentation of both.
:::

$\LaTeX$ offers two ways to write formulas: inline formulas, wrapped in a pair of `$`, and display formulas, wrapped in a pair of `$$`.

- Inline Formula:

  Example of an inline formula: $E=mc^2$, written as `$E=mc^2$`.

- Display Formula:

  $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

  Written as:

  ```
  $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$
  ```

## Greek Letters

|            Display            |             Input             |         Display         |          Input          |
| :---------------------------: | :---------------------------: | :---------------------: | :---------------------: |
|         $\alpha$ $A$          |         `\alpha` `A`          |        $\nu$ $N$        |        `\nu` `N`        |
|          $\beta$ $B$          |          `\beta` `B`          |       $\xi$ $\Xi$       |       `\xi` `\Xi`       |
|       $\gamma$ $\Gamma$       |       `\gamma` `\Gamma`       |         $o$ $O$         |         `o` `O`         |
|       $\delta$ $\Delta$       |       `\delta` `\Delta`       |       $\pi$ $\Pi$       |       `\pi` `\Pi`       |
| $\epsilon$ $\varepsilon$ $E$  | `\epsilon` `\varepsilon` `E`  |  $\rho$ $\varrho$ $P$   |  `\rho` `\varrho` `P`   |
|          $\zeta$ $Z$          |          `\zeta` `Z`          |    $\sigma$ $\Sigma$    |    `\sigma` `\Sigma`    |
|          $\eta$ $H$           |          `\eta` `H`           |       $\tau$ $T$        |       `\tau` `T`        |
| $\theta$ $\vartheta$ $\Theta$ | `\theta` `\vartheta` `\Theta` |  $\upsilon$ $\Upsilon$  |  `\upsilon` `\Upsilon`  |
|          $\iota$ $I$          |          `\iota` `I`          | $\phi$ $\varphi$ $\Phi$ | `\phi` `\varphi` `\Phi` |
|         $\kappa$ $K$          |         `\kappa` `K`          |       $\chi$ $X$        |       `\chi` `X`        |
|      $\lambda$ $\Lambda$      |      `\lambda` `\Lambda`      |      $\psi$ $\Psi$      |      `\psi` `\Psi`      |
|           $\mu$ $M$           |           `\mu` `M`           |    $\omega$ $\Omega$    |    `\omega` `\Omega`    |

## Superscripts and Subscripts

Use `^` for superscripts and `_` for subscripts. For example, `x_i^2`: $x_i^2$, and `\log_2 x`: $\log_2 x$.

By default, superscripts and subscripts only apply to the next character or group enclosed in `{}`. For example, `10^10` gives $10^10$, while `10^{10}` gives $10^{10}$.

Curly braces can also help avoid ambiguity. For instance, `x^5^6` would result in an error, so you need to use braces to clarify as in `{x^5}^6$`: ${x^5}^6$, or `x^{5^6}`: $x^{5^6}$.

::: danger Be mindful of the difference between
`x_i^2`: $x_i^2$ and `x_{i^2}`: $x_{i^2}$.
:::

You can also use `\sideset` to have superscripts and subscripts on both sides of a symbol, such as `\sideset{^1_2}{^3_4}\bigotimes`: $\sideset{^1_2}{^3_4}\bigotimes$.

## Brackets

- Parentheses and Square Brackets

  Use `()` and `[]` as they are. For example, `(2+3)[4+4]`: $(2+3)[4+4]$.

- Curly Braces

  Since curly braces `{}` are used for grouping, you need to use `\{` and `\}` to display them. Alternatively, you can use `\lbrace` and `\rbrace`. For example, `\{a*b\}` or `\lbrace a*b \rbrace` will display as $\{a*b\}$.

- Angle Brackets

  Use `\langle` and `\rangle` to represent left and right angle brackets, respectively. For example, `\langle x \rangle`: $\langle x \rangle$.

- Ceil

  Use `\lceil` and `\rceil` for the ceiling function. For example, $\lceil x \rceil$.

- Floor

  Use `\lfloor` and `\rfloor` for the floor function. For example, $\lfloor x \rfloor$.

:::warning Note

Original parentheses do not scale with formula size.

For example, `(\frac12)` renders as $(\frac12)$. You can use `\left( ... \right)` to automatically adjust the size of the parentheses. For example, `\left( \frac12 \right)` renders as $\left( \frac12 \right)$.

It is clear that the parentheses in the second formula have been scaled.

:::

## Summation and Integration

Use `\sum `for the summation symbol. The upper and lower limits of the summation are specified by subscripts and superscripts. For example, `\sum_1^n`: $\sum_1^n$.

Use `\int` for the integral symbol, with limits represented similarly. For example, `\int_1^\infty`: $\int_1^\infty$.

Other similar symbols include `\prod`: $\prod$, `\bigcup`: $\bigcup$, `\bigcap`: $\bigcap$, `\iint`: $\iint$.

## Fractions and Roots

There are two ways to write fractions:

1. Use `\frac ab`, where `\frac` operates on the two groups a and b, yielding $\frac ab$. If the numerator or denominator consists of more than one character, use `{}` for grouping.

2. Use `\over` to split the expression into two parts, as in `{a+1\over b+1}`: ${a+1\over b+1}$.

Roots are written using `\sqrt[a]b`, where the value in square brackets represents the root index. If omitted, it represents a square root. For example, `\sqrt[4]{\frac xy}`: $\sqrt[4]{\frac xy}$, `\sqrt{x^3}`: $\sqrt{x^3}$.

## Fonts

- Use `\it` to display italics (the default font for formulas)

  `\it{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\it{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathbb` or `\Bbb` to display blackboard bold (blackboard font)

  `\mathbb{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\Bbb{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathbf` or `\bf` to display bold

  `\mathbf{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\bf{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathtt` or `\tt` to display typewriter font

  `\mathtt{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathrm` or `\rm` to display Roman font

  `\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathsf` or `\sf` to display sans-serif

  `\mathsf{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathsf{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathcal` or `\cal` to display calligraphic font

  `\mathcal{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathcal{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathscr` or `\scr` to display script font

  `\mathscr{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathscr{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mathfrak` or `\frak` to display Fraktur (old German) font

  `\mathfrak{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathfrak{ABCDEFGHIJKLMnopqrstuvwxyz}$

- Use `\mit` to display italicized numbers

  `\mit{1234567890}`：

  $\mit{1234567890}$

## Special Functions and Symbols

- Relational Operators

  |  Input   |   Display    |    Input    |     Display     |  Input   |   Display    |   Input    |    Display     |
  | :-----: | :-------: | :--------: | :----------: | :-----: | :-------: | :-------: | :---------: |
  |   \pm   |   $\pm$   |    \mp     |    $\mp$     | \times  | $\times$  |   \div    |   $\div$    |
  |  \mid   |  $\mid$   |   \nmid    |   $\nmid$    |  \circ  |  $\circ$  |  \bullet  |  $\bullet$  |
  |  \cdot  |  $\cdot$  |    \ast    |    $\ast$    |  \odot  |  $\odot$  | \bigodot  | $\bigodot$  |
  | \otimes | $\otimes$ | \bigotimes | $\bigotimes$ | \oplus  | $\oplus$  | \bigoplus | $\bigoplus$ |
  |   \lt   |   $\lt$   |    \gt     |    $\gt$     |  \leq   |  $\leq$   |   \geq    |   $\geq$    |
  |  \neq   |  $\neq$   |  \approx   |  $\approx$   | \equiv  | $\equiv$  |   \sim    |   $\sim$    |
  | \simeq  | $\simeq$  |   \cong    |   $\cong$    |  \prec  |  $\prec$  |   \lhd    |   $\lhd$    |
  |  \sum   |  $\sum$   |   \prod    |   $\prod$    | \coprod | $\coprod$ |           |             |

- Set Operators

  |   Input    |    Display     |    Input     |     Display      |    Input    |     Display     |    Input    |     Display     |
  | :-------: | :---------: | :---------: | :-----------: | :--------: | :----------: | :--------: | :----------: |
  | \emptyset | $\emptyset$ | \varnothing | $\varnothing$ |    \in     |    $\in$     |   \notin   |   $\notin$   |
  |  \subset  |  $\subset$  |   \supset   |   $\supset$   |    \cup    |    $\cup$    |    \cap    |    $\cap$    |
  | \subseteq | $\subseteq$ |  \supseteq  |  $\supseteq$  | \subsetneq | $\subsetneq$ | \supsetneq | $\supsetneq$ |
  |  \bigcup  |  $\bigcup$  |   \bigcap   |   $\bigcap$   |  \bigvee   |  $\bigvee$   | \bigwedge  | $\bigwedge$  |
  |  \uplus   |  $\uplus$   |  \biguplus  |  $\biguplus$  |   \sqcup   |   $\sqcup$   | \bigsqcup  | $\bigsqcup$  |

- Logarithmic Operators

  | Input |  Display  | Input | Display  | Input | Display  |
  | :--: | :----: | :--: | :---: | :--: | :---: |
  | \log | $\log$ | \lg  | $\lg$ | \ln  | $\ln$ |

- Trigonometric Operators
  |Input|Display|Input|Display|Input|Display|
  |:---:|:---:|:---:|:---:|:---:|:---:|
  |\bot|$\bot$|\angle|$\angle$|30^\circ|$30^\circ$|
  |\sin|$\sin$|\cos|$\cos$|\tan|$\tan$|
  |\cot|$\cot$|\sec|$\sec$|\csc|$\csc$|

- Calculus Operators

  |  Input  |   Display   |  Input   |   Display    |  Input  |   Display   |
  | :----: | :------: | :-----: | :-------: | :----: | :------: |
  | \prime | $\prime$ |  \int   |  $\int$   | \iint  | $\iint$  |
  | \iiint | $\iiint$ | \iiiint | $\iiiint$ | \oint  | $\oint$  |
  |  \lim  |  $\lim$  | \infty  | $\infty$  | \nabla | $\nabla$ |

- Logical Operators

  |   Input   |    Display    |    Input    |     Display     |  Input   |   Display    |  Input   |   Display    |
  | :------: | :--------: | :--------: | :----------: | :-----: | :-------: | :-----: | :-------: |
  | \because | $\because$ | \therefore | $\therefore$ | \forall | $\forall$ | \exists | $\exists$ |
  |   \not   |   $\not$   |   \lnot    |   $\lnot$    | \vdash  | $\vdash$  | \vDash  | $\vDash$  |
  |  \land   |  $\land$   |    \lor    |    $\lor$    |  \top   |  $\top$   |  \bot   |  $\bot$   |

- Arrow Symbols

  |      Input       |       Display        |      Input      |       Display       |       Input       |       Display        |      Input      |       Display       |
  | :-------------: | :---------------: | :------------: | :--------------: | :--------------: | :---------------: | :------------: | :--------------: |
  |    \uparrow     |    $\uparrow$     |   \downarrow   |   $\downarrow$   | \rightarrow(\to) |   $\rightarrow$   |   \leftarrow   |   $\leftarrow$   |
  |    \Uparrow     |    $\Uparrow$     |   \Downarrow   |   $\Downarrow$   |   \Rightarrow    |   $\Rightarrow$   |   \Leftarrow   |   $\Leftarrow$   |
  | \longrightarrow | $\longrightarrow$ | \longleftarrow | $\longleftarrow$ | \Longrightarrow  | $\Longrightarrow$ | \Longleftarrow | $\Longleftarrow$ |
  |     \mapsto     |     $\mapsto$     |                |                  |                  |                   |                |                  |

- Use `{n+1 \choose 2k}` or `\binom{n+1}{2k}` to denote combinations: ${n+1 \choose 2k}$.

- Use `\pmod` to indicate modular arithmetic, such as `a\equiv b\pmod n`: $a\equiv b\pmod n$.

- Use `\ldots` and `\cdots` for ellipses. The difference between them is the position of the dots. ldots is slightly lower, as in `a_1,a_2\ldots,a_n`: $a_1,a_2\ldots,a_n$; cdots is centered, as in `a_1+a_2+\cdots+a_n`: $a_1+a_2+\cdots+a_n$.

- Use `\overline` and `\underline` to denote overlines and underlines, such as `\overline{a+b+c+d}`: $\overline{a+b+c+d}$, and `\underline{x+y+z}`: $\underline{x+y+z}$.

- Other special characters include `\star`: $\star$, `\aleph_0`: $\aleph_0$, `\partial`: $\partial$, `\Im`: $\Im$, `\Re`: $\Re$.

- Some Greek letters have variant forms, such as `\epsilon \varepsilon`: $\epsilon \varepsilon$, and `\phi \varphi`: $\phi \varphi$.

- Note that some special characters can be escaped to their original meanings using `\`, such as `\$` representing $\$$, and `\_` representing $\_$.

## Spaces

When writing formulas, no matter how many spaces are entered between "a" and "b", the output will always be "ab". To insert a small space between them, you can add `\`, between "a" and "b", as in `a\,b`: $a\,b$; `\;` increases the space more, as in `a\;b`: $a\;b$; `\quad` and `\qquad` create even larger spaces, such as `a \quad b`: $a \quad b$, and `a \qquad b`: $a \qquad b$.

## Top Symbols

For single characters, you can use `\hat x`: $\hat x$. For multiple characters, you can use `\widehat {xy}`: $\widehat {xy}$.


Other similar symbols include `\check x`: $\check x$, `\breve x`: $\breve x$, `\bar x`: $\bar x$, `\overline {xyz}`: $\overline {xyz}$, `\vec x`: $\vec x$, `\overrightarrow x`: $\overrightarrow x$, `\overleftrightarrow {xyz}`: $\overleftrightarrow {xyz}$, `\dot x`: $\dot x$, and `\ddot x`: $\ddot x$.
