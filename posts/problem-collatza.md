---
title: Problem Collatza
date: 2020-06-25
thumbnail: $3n+1$
---

Problem Collatza, znany jako problem $$3n+1$$, jest nierozstrzygniętym problemem matematycznym. Został on sformułowany w 1937 roku przez Lothara Collatza, niemieckiego matematyka. Jak powiedział Paul Erdős, "matematyka może nie być gotowa na takie problemy".

## Sformułowanie

Problem Collatza dotyczy pewnego ciągu. Na początku wybieramy dowolną dodatnią liczbę naturaną $$c_0$$. Następnie, w zależności od parzystości tej liczby, obliczamy następny wyraz. Jeśli $$c_0$$ było parzyste, to $$c_1 = \frac{1}{2}c_0$$. Natomiast jeśli $$c_0$$ było nieparzyste, to $$c_1 = 3c_0 + 1$$. Przy liczeniu następnych wyrazów powtarzamy ten sam algorytm.

Możemy to zapisać równaniem **rekurencyjnym**:

$$
c_{n+1} =
\begin{cases}
  \frac{1}{2}c_n, & \text{jeśli } c_n\text{ jest parzysta} \\
  3c_n + 1, & \text{jeśli } c_n\text{ jest nieparzysta}
\end{cases}
$$

Co ciekawe, znany jest jawny wzór na następny wyraz ciągu, niekorzystający z definicji z klamrą.

$$
c_{n+1} = \frac{7}{4}c_n + \frac{1}{2} + \left(\frac{5}{4}c_n + \frac{1}{2}\right) \cdot {\left(-1\right)}^{c_n + 1}
$$

Treścią problemu jest przypuszczenie, że _niezależnie od jakiej liczby $$c_0$$ wystartujemy, zawsze dojdziemy do liczby $$1$$_.

Zgodnie z definicją rozpatrywany ciąg jest nieskończony, jednak jeśli pewien wyraz tego ciągu jest równy $$1$$, to następne wyrazy będą równe $$4, 2, 1, 4, 2, 1, ...$$. Taki ciąg wpada w cykl (w pętlę), więc alternatywne sformułowanie problemu brzmi następująco:

_Niezależnie od jakiej liczby $$c_0$$ wystartujemy, ciąg zawsze wpadnie w cykl $$(4, 2, 1)$$._

## Przykłady

- $$c_0 = 8$$:

  $$8, 4, 2, 1$$

- $$c_0 = 11$$:

  $$11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1$$

- $$c_0 = 15$$:

  $$15, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1$$

- $$c_0 = 27$$:

  $$27, 82, 41, 124, 62, 31, 94, 47, 142, 71, 214, 107, 322, 161, 484, 242, 121, 364, 182, 91, 274, 137, 412, 206, 103, 310, 155, 466, 233, 700, 350, 175, 526, 263, 790, 395, 1186, 593, 1780, 890, 445, 1336, 668, 334, 167, 502, 251, 754, 377, 1132, 566, 283, 850, 425, 1276, 638, 319, 958, 479, 1438, 719, 2158, 1079, 3238, 1619, 4858, 2429, 7288, 3644, 1822, 911, 2734, 1367, 4102, 2051, 6154, 3077, 9232, 4616, 2308, 1154, 577, 1732, 866, 433, 1300, 650, 325, 976, 488, 244, 122, 61, 184, 92, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1$$

  Cały proces wymaga aż 111 kroków, a maksymalna osiągnięta wartość to $$9232$$.

Korzystając z danych na rok 2017, problem Collatza został sprawdzony przez komputer dla każdej wartości startowej do $$87 \cdot 2^{60}$$. Dla wszystkich tych liczb ciąg ostatecznie wpadł w cykl.

## Graf

Poniższy obrazek przedstawia graf skierowany dla pierwszych 30 liczb naturalnych (bez 27), [źródło](https://pl.wikipedia.org/wiki/Problem_Collatza).

![Graf pierwszych 30 liczb naturalnych (bez 27)](/images/problem-collatza-graf.png)
