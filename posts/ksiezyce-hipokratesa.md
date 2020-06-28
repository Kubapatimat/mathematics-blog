---
title: Księżyce Hipokratesa
date: 2020-06-25
thumbnail: $P_1 + P_2 = \frac{1}{2}ab$
---

**Księżyce Hipokratesa** to figury geometryczne w kształcie księżyców, odkryte przez Hipokratesa z Chios w trakcie jego prac nad problemem kwadratury koła. Są one związane z wielokątem wpisanym w okrąg.

Księżyce są ograniczone łukami okręgu oraz półokręgami, których średnicami są boki danego wielokąta.

## Twierdzenie

W przypadku gdy wielokąt wpisany w okrąg ma 1, 2 lub 4 kąty proste, to suma pól księżyców Hipokratesa utworzonych na nim jest równa polu tego wielokąta.

Poniższy obrazek przedstawia księżyce Hipokratesa utworzone na trójkącie prostokątnym, [źródło](https://pl.wikipedia.org/wiki/Księżyce_Hipokratesa).

![Księżyce Hipokratesa dla tójkąta prostokątnego](/images/ksiezyce-hipokratesa-trojkat.png)

Zgodnie z twierdzeniem, suma pól księżycy Hipokratesa (figur zaznaczonych na czerwono) jest równa polu trójkąta wpisanego w okrąg.

## Dowód

Niech długości przyprostokątnych wynoszą $$a$$ oraz $$b$$, a przeciwprostokątnej $$c$$. Pola księżyców oznaczono jako $$P_1$$ i $$P_2$$. Możemy zapisać następujące wyrażenie na sumę pól czerwonych obszarów:

$$
\begin{aligned}
P_1 + P_2 &= \frac{1}{2}\pi\left(\frac{a}{2}\right)^2 + \frac{1}{2}\pi\left(\frac{b}{2}\right)^2 - \frac{1}{2}\pi\left(\frac{c}{2}\right)^2 + \frac{1}{2}ab \\
P_1 + P_2 &= \frac{1}{8}\pi a^2 + \frac{1}{8}\pi b^2 - \frac{1}{8}\pi c^2 + \frac{1}{2}ab \\
P_1 + P_2 &= \frac{1}{8}\pi \left(a^2 + b^2 - c^2\right) + \frac{1}{2}ab \\
\end{aligned}
$$

Z twierdzenia Pitagorasa wiemy, że $$a^2 + b^2 = c^2$$:

$$
\begin{aligned}
P_1 + P_2 &= \frac{1}{8}\pi \left(\textcolor{#228B22}{a^2 + b^2} - c^2\right) + \frac{1}{2}ab \\
P_1 + P_2 &= \frac{1}{8}\pi \left(\textcolor{#228B22}{c^2} - c^2\right) + \frac{1}{2}ab \\
P_1 + P_2 &= \frac{1}{8}\pi \left(0\right) + \frac{1}{2}ab \\
\end{aligned}
$$

$$
\boxed{P_1 + P_2 = \frac{1}{2}ab}
$$
