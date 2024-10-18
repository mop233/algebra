---
titleTemplate: LaTeX - :title | Algebra
---

# Chemical Equation

When writing chemical formulas in $\LaTeX$, you need to wrap the formula or equation in `\ce{}`. For example, to write sulfuric acid, you should use `\ce{H2SO4}`: $\ce{H2SO4}$.

## Inorganic Compounds

- Integers: Subscripts, charges, oxidation numbers

  `\ce{CO2}`: $\ce{CO2}$, `\ce{H+}`: $\ce{H+}$, `\ce{Cl-}`: $\ce{Cl-}$, `\ce{Cu^2+}`: $\ce{Cu^2+}$, etc. For instance, in the case of copper(II) ion, if you don't add `^`, it will appear as `\ce{Cu2+}`: $\ce{Cu2+}$.

  Oxidation numbers are shown like iron(II) `\ce{Fe^{II}}`: $\ce{Fe^{II}}$, and lead(IV) `\ce{Pb^{IV}}`: $\ce{Pb^{IV}}$.

- Fractional subscripts

  Like regular math expressions in $\LaTeX$, you can use fractions, e.g., `\ce{Fe(CN)_{\frac62}}`: $\ce{Fe(CN)_{\frac62}}$.

- Parentheses, square brackets, curly braces

  Parentheses: `\ce{(NH4)2S}`: $\ce{(NH4)2S}$, square brackets: `\ce{[AgCl2]-}`: $\ce{[AgCl2]-}$, curly braces: `\ce{[\{(x2)3\}2]^3+}`: $\ce{[{(x2)3}2]^3+}$.

  :::warning Note
  For curly braces, an escape character is needed to display them properly.
  :::

- Superscripts and subscripts: Isotopes, molecular ions

  `\ce{^{227}_{90}Th+}`: $\ce{^{227}_{90}Th+}$, `\ce{H^2+}`: $\ce{H^2+}$.

- Dots: Radicals, hydrates

  `\ce{Cl*}`: $\ce{Cl*}$, `\ce{*CH3}`: $\ce{*CH3}$, `\ce{KCr(SO4)2*12H2O}`: $\ce{KCr(SO4)2*12H2O}$.

## Organic Compounds

- Chemical Bonds

  Single bond `\ce{CH3-CHO}`: $\ce{CH3-CHO}$, double bond `\ce{CH2=CH2}`: $\ce{CH2=CH2}$, triple bond `\ce{CH#CH}`: $\ce{CH#CH}$.

  Other bond types include `\ce{A\bond{~}B\bond{~-}C}`: $\ce{A\bond{~}B\bond{~-}C}$, `\ce{A\bond{~--}B\bond{~=}C\bond{-~-}D}`: $\ce{A\bond{~--}B\bond{~=}C\bond{-~-}D}$, `\ce{A\bond{...}B\bond{...}C}`: $\ce{A\bond{...}B\bond{...}C}$.

- Italicized: cis and trans

  In organic chemistry, the terms cis and trans are written in italics to denote stereoisomers. Since math formulas are italicized in LaTeX, wrap them in `$` signs, e.g., `$$\ce{$cis${-}CH3CH-CHCH3}$$`:

  $$\ce{$cis${-}CH3CH-CHCH3}$$

## Chemical Equations

- Arrows: Reaction directions

  Different arrow types can be used, such as `\ce{->}`: $\ce{->}$, `\ce{<=>}`: $\ce{<=>}$, `\ce{<=>>}`: $\ce{<=>>}$, and `\ce{<<=>}`: $\ce{<<=>}$.

  You can also add reaction conditions easily.

  - Example:

    ```
    $$
    \ce{2H2 + O2 ->[\Delta] H2O}
    $$

    $$
    \ce{N2 + H2 ->[{catalyst}][{hightemp}] NH3}
    $$
    ```

  - Output:

    $$
    \ce{2H2 + O2 ->[\Delta] H2O}
    $$

    $$
    \ce{N2 + H2 ->[{catalyst}][{hightemp}] NH3}
    $$

- Arrows: Precipitate and gas

  `\ce{Ca(OH)2 + CO2 = CaCO3 v + H2O}`：
  $$\ce{Ca(OH)2 + CO2 = CaCO3 v + H2O}$$

  `\ce{Fe + 2H+ = H2 ^ + Fe^2+}`：
  $$\ce{Fe + 2H+ = H2 ^ + Fe^2+}$$

## Additional Content

- Notes below text

  Isomers and allotropes often require annotations beneath the chemical formula, e.g., `\underset{\text{glucose}}{\ce{C6H12O6}}`:$\underset{\text{glucose}}{\ce{C6H12O6}}$.

- Multiline reactions

  Use the align environment by adding `\begin{align*}...\end{align*}`.

  Start each line with `&` and end with `\\`.

  - Example:

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

  - Output:

    $$
    \begin{align*}
    & \ce{CO2 + 3H2 <=> CH3OH + H2O} \\
    & \ce{CO2 + H2 <=> CO + H2O} \\
    & \ce{CO + 2H2 <=> CH3OH} \\
    & \ce{CH3OH <=> CH3OCH3 + H2O}
    \end{align*}
    $$

