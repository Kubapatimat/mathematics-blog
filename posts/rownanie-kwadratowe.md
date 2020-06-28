---
title: Równanie kwadratowe
date: 2020-06-25
thumbnail: $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$
---

Równanie kwadratowe to równanie wielomianowe, gdzie najwyższym wykładnikiem niewiadomej jest liczba 2. Zasadnicze twierdzenie algebry mówi o tym, że takie równanie ma dwa rozwiązania (choć niekoniecznie rzeczywiste). W tym poście pokażę, jak wyprowadzić znane ze szkoły średniej wzory na pierwiastki trójmianu kwadratowego, w tym również tzw. _deltę_.

## Postać ogólna

Równanie kwadratowej w postaci ogólnej ma następującą postać:

$$
ax^2 + bx + c = 0
$$

gdzie $$a, b, c$$ są pewnymi współczynnikami (rzeczywistymi lub zespolonymi).

## Przekształcenia

Aby znaleźć pierwiastki trójmianu kwadratowego należy przekształcić równanie w postaci ogólnej tak, aby po lewej stronie znaku równości znalazła się sama niewiadoma. W tym celu najpierw dzielimy je obustronnie przez $$a$$, zakładając, że $$a \neq 0$$.

$$
\begin{aligned}
ax^2 + bx + c &= 0 \\
x^2 + \frac{b}{a} x + \frac{c}{a} &= 0
\end{aligned}
$$

Następnie korzystamy z triku znanego jako _dopełnienie do kwadratu_. Musimy do obu stron równania dodać takie wyrażenie, aby po lewej pojawił się wzór skróconego mnożenia na kwadrat sumy.

$$
\begin{aligned}
x^2 + 2\cdot\frac{b}{2a}\cdot x + \frac{c}{a} &= 0 \\
x^2 + 2\cdot\frac{b}{2a}\cdot x + \textcolor{#228B22}{\left(\frac{b}{2a}\right)^2} + \frac{c}{a} &= \textcolor{#228B22}{\left(\frac{b}{2a}\right)^2}\\
\left(x+\frac{b}{2a}\right)^2 + \frac{c}{a} &= \left(\frac{b}{2a}\right)^2\\
\end{aligned}
$$

Gdy niewiadoma jest już w środku wzoru skróconego mnożenia, możemy dokonać następnych przekształceń.

$$
\begin{aligned}
\left(x+\frac{b}{2a}\right)^2 &= \left(\frac{b}{2a}\right)^2 - \frac{c}{a}\\
\left(x+\frac{b}{2a}\right)^2 &= \frac{b^2}{4a^2} - \frac{c}{a}\\
\left(x+\frac{b}{2a}\right)^2 &= \frac{b^2}{4a^2} - \frac{4ac}{4a^2}\\
\left(x+\frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2}\\
\end{aligned}
$$

Teraz pierwiastkujemy obustronnie równanie, pamiętając o wartości bezwzględnej, która się pojawi.

$$
\begin{aligned}
\left|x+\frac{b}{2a}\right| &= \sqrt{\frac{b^2 - 4ac}{4a^2}}\\
\left|x+\frac{b}{2a}\right| &= \frac{\sqrt{b^2 - 4ac}}{2a}\\
x+\frac{b}{2a} &= \pm \frac{\sqrt{b^2 - 4ac}}{2a}\\
x &= -\frac{b}{2a} \pm \frac{\sqrt{b^2 - 4ac}}{2a}\\
\end{aligned}
$$

$$
\boxed{x = {\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}}
$$

Otrzymaliśmy wzór na rozwiązania równania kwadratowego. Jeśli podstawimy $$\Delta = b^2-4ac$$, dostaniemy skróconą wersję wzoru.

$$
\begin{aligned}
\textcolor{#228B22}{x} &\textcolor{#228B22}{=} \textcolor{#228B22}{\frac{-b \pm \sqrt{\Delta}}{2a}}
\end{aligned}
$$

Delta $$\Delta$$ to tzw. **wyróżnik** trójmianu kwadratowego, czyli wyrażenie algebraiczne zbudowane z jego współczynników.

$$
\text{Liczba różnych rozwiązań w liczbach rzeczywistych} =
  \begin{cases}
    0, & \text{dla } \Delta < 0 \\
    1, & \text{dla } \Delta = 0 \\
    2, & \text{dla } \Delta > 0
  \end{cases}
$$
