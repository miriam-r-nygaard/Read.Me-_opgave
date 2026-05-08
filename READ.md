# Markdown Dokumentation

## Markdown Øvelse

**Formålet:**
At lære at anvende Markdown-syntaks til at dokumentere programmering med JavaScript, CSS og HTML.

### Opgave:

Opret et nyt Markdown-dokument ved navn `README.md`.

Dokumenter følgende oplysninger ved hjælp af Markdown-syntaks:

a. En overskrift med titlen "Markdown Dokumentation".

b. En liste over fordelene ved at bruge Markdown.

c. Et kodeeksempel, der viser, hvordan man via _JavaScript_ itererer et array vha. et for-loop ved at bruge Markdown.

d. Et kodeeksempel, der viser, hvordan man opbygger en navigation med 3 links vha. HTML ved at bruge Markdown.

e. Indsæt et billede og beskriv billedet kort.

f. Lav et citat fra en kendt person, og tilføj kilden.

g. Upload dit Markdown-dokument **README.md** til et GitHub repository

h. Del linket til dit GitHub repository ved at sende en mail til din underviser

## Liste over fordele

- Nemmere at forstå hinanden kode og kunne samarbejde om det
- Nemmere at skrive noter til sig selv, for at huske ens tankeprocess
- Overskuelighed
- Nemt at læse for andre, som kan bygge videre på koden

## _Javascript_ Kode eksenpel

først laver jeg en lille smule HTML

```HTML
<!DOCTYPE html>
<html>
<body>
<h1>Mine katte</h1>
<p id="demo"></p>
<script src="javascript/javascript.js"></script>
</body>
</html>
```

så laver jeg et array og et for -loop

```JS
const katte = [
   "Mio",
   "Miso",
   "Luna",
   "Gandalf"
];
let text = "";
for (let i = 0; i < katte.length; i++) {
  text += katte[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
```

## _HTML_ Kode eksenpel

```HTML
<nav>
  <a href="https://da.wikipedia.org/wiki/Kat">wiki</a>
  <a href="https://www.imdb.com/title/tt5697572/">dårlig musical film om katte</a>
  <a href="https://www.catsthemusical.com/">god musical for katte</a>
</nav>
```

## Billede

![billede af katten Mio](/img/billede_mio.webp)

_Her er et billede af Mio_

> There are two means of refuge from the misery of life — music and cats.
>
> > ― Albert Schweitzer
> > dette citat er fundet på [goodreads] (https://www.goodreads.com/quotes/tag/cats).
