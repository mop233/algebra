---
titleTemplate: LaTeX - :title | Algebra
---

# 初级语法

::: tip 提示
$\LaTeX$ 是一个专业的排版系统，用于创建高质量的科技文档、学术论文、书籍、报告等。它还可以处理复杂的数学公式的排版。这里只介绍关于数学公式编写的相关内容。
:::

::: danger 注意
本站点默认使用 MathJax 渲染引擎，所以下面的语法采用了 MathJax 的编写方式。Katex 语法与 MathJax 语法大部分相同，只有少许区别，使用时如报错，查看两者的官网文档即可。
:::

$\LaTeX$ 有两种编写公式的方式：一种是行内公式，用一对 `$` 包裹；另一种是整行公式，用一对 `$$` 包裹。

- 行内公式：

  这是一个行内公式 $E=mc^2$，写法是 `$E=mc^2$`。

- 整行公式：

  $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

  写法是：

  ```
  $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$
  ```

## 希腊字母

|显示|输入|显示|输入|
|:---:|:---:|:---:|:---:|
|$\alpha$ $A$|`\alpha` `A`|$\nu$ $N$|`\nu` `N`|
|$\beta$ $B$|`\beta` `B`|$\xi$ $\Xi$|`\xi` `\Xi`|
|$\gamma$ $\Gamma$|`\gamma` `\Gamma`|$o$ $O$|`o` `O`|
|$\delta$ $\Delta$|`\delta` `\Delta`|$\pi$ $\Pi$|`\pi` `\Pi`|
|$\epsilon$ $\varepsilon$ $E$|`\epsilon` `\varepsilon` `E`|$\rho$ $\varrho$ $P$|`\rho` `\varrho` `P`|
|$\zeta$ $Z$|`\zeta` `Z`|$\sigma$ $\Sigma$|`\sigma` `\Sigma`|
|$\eta$ $H$|`\eta` `H`|$\tau$ $T$|`\tau` `T`|
|$\theta$ $\vartheta$ $\Theta$|`\theta` `\vartheta` `\Theta`|$\upsilon$ $\Upsilon$|`\upsilon` `\Upsilon`|
|$\iota$ $I$|`\iota` `I`|$\phi$ $\varphi$ $\Phi$|`\phi` `\varphi` `\Phi`|
|$\kappa$ $K$|`\kappa` `K`|$\chi$ $X$|`\chi` `X`|
|$\lambda$ $\Lambda$|`\lambda` `\Lambda`|$\psi$ $\Psi$|`\psi` `\Psi`|
|$\mu$ $M$|`\mu` `M`|$\omega$ $\Omega$|`\omega` `\Omega`|

## 上标与下标

上标和下标分别使用 `^` 和 `_` 来表示。例如 `x_i^2`：$x_i^2$，`\log_2 x`：$\log_2 x$。

默认情况下，上下标符号仅对下一个组起作用。一个组即单个字符或者使用 `{}` 包裹起来的内容。也就是说，如果使用 `10^10` 会得到 $10^10$，而 `10^{10}` 才是 $10^{10}$。

同时，大括号还能消除二义性，如 `x^5^6` 会显示错误，必须使用大括号来界定 `^` 的结合行，如 `{x^5}^6`：${x^5}^6$，或者 `x^{5^6}`：$x^{5^6}$。

::: danger 注意区分
`x_i^2`：$x_i^2$ 和 `x_{i^2}`：$x_{i^2}$。
:::

另外，如果要在左右两边都有上下标，可以使用 `\sideset` 来表示，如 `\sideset{^1_2}{^3_4}\bigotimes`：$\sideset{^1_2}{^3_4}\bigotimes$。

## 括号

- 小括号和方括号

  使用原始的 `()` 和 `[]` 即可。如 `(2+3)[4+4]`：$(2+3)[4+4]$。

- 大括号

  由于大括号`{}`被用来分组，因此需要使用 `\{` 和 `\}` 表示大括号，也可以使用 `\lbrace` 和 `\rbrace` 来表示。如 `\{a*b\}` 或者 `\lbrace a*b \rbrace`，都会显示为 $\{a*b\}$。

- 尖括号

  用 `\langle` 和 `\rangle` 分别表示左右尖括号。如 `\langle x \rangle`：$\langle x \rangle$。

- 上取整

  使用 `\lceil` 和 `\rceil` 表示。如 $\lceil x \rceil$。

- 下取整

  使用 `\lfloor` 和 `\rfloor` 表示。如 $\lfloor x \rfloor$。

:::warning 注意
原始括号不会随着公式大小而缩放。

如 `(\frac12)`：$(\frac12)$，可以使用 `\left( ... \right)` 来自适应调整括号大小。如 `\left( \frac12 \right)`：$\left( \frac12 \right)$。

能明显看出，后一组公式中的括号是经过缩放的。
:::

## 求和与积分

`\sum` 表示求和符号，其上下标表示求和上下限。如 `\sum_1^n`：$\sum_1^n$。

`\int` 表示积分符号，其上下标表示积分的上下限。如 `\int_1^\infty`：$\int_1^\infty$。

与此类似的符号还有 `\prod`：$\prod$，`\bigcup`：$\bigcup$，`\bigcap`：$\bigcap$，`\iint`：$\iint$。

## 分式与根式

分式有两种表示方法：

1. 使用 `\frac ab`，其中 `\frac` 作用于其后的两个组 a 和 b，结果为 $\frac ab$。如果分子或分母不是单个字符，需要使用 `{}` 来分组。

2. 使用 `\over` 来分割一个组的前后两部分，如 `{a+1\over b+1}`：${a+1\over b+1}$。

根式使用 `\sqrt[a]b` 来表示。其中，方括号内的值用来表示开几次方，省略方括号则表示开方，如 `\sqrt[4]{\frac xy}`：$\sqrt[4]{\frac xy}$，`\sqrt{x^3}`：$\sqrt{x^3}$。

## 字体

- 使用 `\it` 显示意大利体（公式默认字体）

  `\it{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\it{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathbb` 或 `\Bbb` 显示黑板粗体（黑板黑体）

  `\mathbb{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\Bbb{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathbf` 或 `\bf` 显示黑体

  `\mathbf{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\bf{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathtt` 或 `\tt` 显示打印机字体

  `\mathtt{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathrm` 或 `\rm` 显示罗马体

  `\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathsf` 或 `\sf` 显示等线体（sans-serif 体）

  `\mathsf{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathsf{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathcal` 或 `\cal` 显示艺术字体

  `\mathcal{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathcal{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathscr` 或 `\scr` 显示手写字体（花体）

  `\mathscr{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathscr{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mathfrak` 或 `\frak` 显示 Fraktur 字体（老式德国字体）

  `\mathfrak{ABCDEFGHIJKLMnopqrstuvwxyz}`：

  $\mathfrak{ABCDEFGHIJKLMnopqrstuvwxyz}$

- 使用 `\mit` 显示数字斜体

  `\mit{1234567890}`：

  $\mit{1234567890}$

## 特殊函数与符号

- 关系运算符

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\pm|$\pm$|\mp|$\mp$|\times|$\times$|\div|$\div$|
  |\mid|$\mid$|\nmid|$\nmid$|\circ|$\circ$|\bullet|$\bullet$|
  |\cdot|$\cdot$|\ast|$\ast$|\odot|$\odot$|\bigodot|$\bigodot$|
  |\otimes|$\otimes$|\bigotimes|$\bigotimes$|\oplus|$\oplus$|\bigoplus|$\bigoplus$|
  |\lt|$\lt$|\gt|$\gt$|\leq|$\leq$|\geq|$\geq$|
  |\neq|$\neq$|\approx|$\approx$|\equiv|$\equiv$|\sim|$\sim$|
  |\simeq|$\simeq$|\cong|$\cong$|\prec|$\prec$|\lhd|$\lhd$|
  |\sum|$\sum$|\prod|$\prod$|\coprod|$\coprod$|||

- 集合运算符

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\emptyset|$\emptyset$|\varnothing|$\varnothing$|\in|$\in$|\notin|$\notin$|
  |\subset|$\subset$|\supset|$\supset$|\cup|$\cup$|\cap|$\cap$|
  |\subseteq|$\subseteq$|\supseteq|$\supseteq$|\subsetneq|$\subsetneq$|\supsetneq|$\supsetneq$|
  |\bigcup|$\bigcup$|\bigcap|$\bigcap$|\bigvee|$\bigvee$|\bigwedge|$\bigwedge$|
  |\uplus|$\uplus$|\biguplus|$\biguplus$|\sqcup|$\sqcup$|\bigsqcup|$\bigsqcup$|

- 对数运算符

  |输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|
  |\log|$\log$|\lg|$\lg$|\ln|$\ln$|

- 三角运算符
  |输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|
  |\bot|$\bot$|\angle|$\angle$|30^\circ|$30^\circ$|
  |\sin|$\sin$|\cos|$\cos$|\tan|$\tan$|
  |\cot|$\cot$|\sec|$\sec$|\csc|$\csc$|

- 微积分运算符

  |输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|
  |\prime|$\prime$|\int|$\int$|\iint|$\iint$|
  |\iiint|$\iiint$|\iiiint|$\iiiint$|\oint|$\oint$|
  |\lim|$\lim$|\infty|$\infty$|\nabla|$\nabla$|

- 逻辑运算符

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\because|$\because$|\therefore|$\therefore$|\forall|$\forall$|\exists|$\exists$|
  |\not|$\not$|\lnot|$\lnot$|\vdash|$\vdash$|\vDash|$\vDash$|
  |\land|$\land$|\lor|$\lor$|\top|$\top$|\bot|$\bot$|

- 逻辑运算符

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\uparrow|$\uparrow$|\downarrow|$\downarrow$|\rightarrow(\to)|$\rightarrow$|\leftarrow|$\leftarrow$|
  |\Uparrow|$\Uparrow$|\Downarrow|$\Downarrow$|\Rightarrow|$\Rightarrow$|\Leftarrow|$\Leftarrow$|
  |\longrightarrow|$\longrightarrow$|\longleftarrow|$\longleftarrow$|\Longrightarrow|$\Longrightarrow$|\Longleftarrow|$\Longleftarrow$|
  |\mapsto|$\mapsto$|||||||

- 标识排列使用 `{n+1 \choose 2k}` 或 `\binom{n+1}{2k}`：${n+1 \choose 2k}$。

- 使用 `\pmod` 表示模运算，如 `a\equiv b\pmod n`：$a\equiv b\pmod n$。

- 使用 `\ldots` 与 `\cdots` 表示省略号，二者的区别是 dots 的位置不同。ldots 位置稍低，如 `a_1,a_2\ldots,a_n`：$a_1,a_2\ldots,a_n$；cdots 位置居中，如 `a_1+a_2+\cdots+a_n`：$a_1+a_2+\cdots+a_n$。

- 使用 `\overline` 与 `\underline` 表示连线符号，如 `\overline{a+b+c+d}`：$\overline{a+b+c+d}$，`\underline{x+y+z}`：$\underline{x+y+z}$。

- 其他特殊字符。`\star`：$\star$，`\aleph_0`：$\aleph_0$，`\partial`：$\partial$、`\Im`：$\Im$，`\Re`：$\Re$。

- 一些希腊字母具有变体形式，如 `\epsilon \varepsilon`：$\epsilon \varepsilon$，`\phi \varphi`：$\phi \varphi$。

- 需要注意的是，一些特殊字符可以使用 `\` 转义为原来的含义，如 `\$` 表示 $\$$，`\_` 表示 $\_$。

## 空间

在书写公式的时候，a 和 b 之间无论输入多少空格，最后都会显示为 ab。可以通过在 ab 间加入 `\,` 增加些许间隙，如 `a\,b`：$a\,b$；`\;` 增加较宽的间隙，如 `a\;b`：$a\;b$；`\quad` 与 `\qquad` 会增加更大的间隙，如 `a \quad b`：$a \quad b$，`a \qquad b`：$a \qquad b$。

## 顶部符号

对于单字符，可以使用 `\hat x`：$\hat x$。多字符可以使用 `\widehat {xy}`：$\widehat {xy}$。

类似的还有，`\check x`：$\check x$、`\breve x`：$\breve x$、`\bar x`：$\bar x$、`\overline {xyz}`：$\overline {xyz}$、`\vec x`：$\vec x$、`\overrightarrow x`：$\overrightarrow x$、`\overleftrightarrow {xyz}`：$\overleftrightarrow {xyz}$、`\dot x`：$\dot x$、`\ddot x`：$\ddot x$。
