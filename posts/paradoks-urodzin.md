---
title: Paradoks urodzin
date: 2020-06-25
thumbnail: $p\left(n, 365\right) > 50\% \Leftrightarrow n \geq 23$
---

Paradoks dnia urodzin to problem o nieintuicyjnym rozwiązaniu. Jego treść jest następująca:

_"Ile minimalnie osób należy wybrać, żeby prawdopodobieństwo znalezienia wśród nich co najmniej dwóch osób obchodzących urodziny tego samego dnia było większe od 50%?"_

Jak się okazuje, rozwiązaniem jest liczba **23**. Wydaje się ona zbyt mała, stąd nazwa "paradoks". Rozwiązanie nie uwzględnia osób urodzonych 29 lutego i bliźniaków, choć ostatecznie nie zmienia to znacząco wyniku.

## Prawdopodobieństwo

Zgodnie z zasadą szufladkową Dirichleta, prawdopodobieństwo znalezienia dwóch osób, które mają ten sam dzień urodzin, w zbiorze 367 osób wynosi 100%. Wynika to z faktu, że jest tylko 366 możliwych urodzin, więc na pewno dwie osoby będą mieć urodziny w ten sam dzień, nawet w "najgorszym przypadku", gdzie każdy dzień w roku odpowiada jednej osobie - zostaje ostatecznie jeszcze jedna osoba.
Co ciekawe, w grupie 70 ludzi mamy aż 99.9% szansy na znalezienie pary, a prawdopodobieństwo 50% jest osiągnięte przy zaledwie 23 osobach.

## Dowód

Dla ułatwienia policzmy najpierw prawdopodobieństwo zdarzenia przeciwnego $$A'$$, czyli gdzie nie istnieje żadna para osób, które współdzielą dzień urodzin. Załóżmy od razu, że rozpatrujemy grupę 23 osób.

$$
\begin{aligned}
P\left(A'\right) &= \frac{365}{365} \cdot \frac{364}{365} \cdot \frac{363}{365} \cdot \frac{362}{365} \cdot ... \cdot \frac{343}{365} \\[1em]
P\left(A'\right) &= {\left(\frac{1}{365}\right)}^{23} \cdot \left(365 \cdot 364 \cdot 363 \cdot 362 \cdot ... \cdot 343\right) \\[1em]
P\left(A'\right) &\approx 0.492703
\end{aligned}
$$

Tak więc prawdopodobieństwo zdarzenia $$A$$ wynosi:

$$
\begin{aligned}
P\left(A\right) &= 1 - 0.492703 \\[0.3em]
P\left(A\right) &= 0.507297 \\[0.3em]
P\left(A\right) &\approx 50.73\%
\end{aligned}
$$
