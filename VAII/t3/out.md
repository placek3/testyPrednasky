# Dizajn webovej aplikácie

6UI0012 Vývoj webových aplikácií					                          šk\. rok 2026/27

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_0.png)

<span style="color:#ffffff">doc\. Ing\. Patrik Hrkút\, PhD\.</span>

<span style="color:#ffffff">Ing\. Matej </span>  <span style="color:#ffffff">Meško</span>  <span style="color:#ffffff">\, PhD\.</span>

<span style="color:#ffffff">Ing\. Michal Ďuračík\, PhD\.</span>

Obsah prednášky:

_CSS _  _Media queries_

Responzívny dizajn

Bootstrap

Tvorba dizajnu webovej aplikácie

CSS preprocesory

UX

Agenda

# Media queries – MQ



* Definujú vzhľad web stránky na rôznych typoch zobrazovacích zariadení
* Základné typy: all\, print\, screen\, speech
* Špecifikácie [MQ level 4](https://www.w3.org/TR/mediaqueries-4/) a [MQ level ](https://www.w3.org/TR/mediaqueries-5/)[5](https://www.w3.org/TR/mediaqueries-5/)
* _MQ Level _  _5_  definuje zariadenie nielen podľa typu\, ale aj podľa jeho schopností\, napr\.
  * Šírka a výška zariadenia \( _viewport_ \)
  * Orientácia \(na výšku/šírku\)
  * Rozlíšenie
  * Rôzne schopnosti zariadenia \(JavaScript\, rozsah zobrazených farieb\, \.\.\.\)


# Špecifikácia MQ

Špecifikácia médií v HTML súbore:  <span style="color:#007700"><</span>  <span style="color:#007700">link</span>  __ __  <span style="color:#0000cc">rel</span>  <span style="color:#0000cc">=</span>  __"__  __stylesheet__  __"__  __ __  <span style="color:#0000cc">media</span>  <span style="color:#0000cc">=</span>  __"__  __screen__  __"__  __ __  <span style="color:#0000cc">href</span>  <span style="color:#0000cc">=</span>  __"styl\.css"__  <span style="color:#007700">></span>

Špecifikácia médií v CSS súbore – pravidlo @media

Špecifikácia médií v CSS súbore – pravidlo @import:

<span style="color:#0033b3">@media </span>  <span style="color:#067d17">screen</span>  <span style="color:#067d17"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">body </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">        </span>  <span style="color:#174ad4">font\-</span>  <span style="color:#174ad4">family</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">sans\-serif</span>  <span style="color:#067d17">    </span>  <span style="color:#080808">\}</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">@media </span>  <span style="color:#067d17">print</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">body </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">        </span>  <span style="color:#174ad4">font\-</span>  <span style="color:#174ad4">family</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">serif</span>  <span style="color:#067d17">    </span>  <span style="color:#080808">\}</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">@import </span>  <span style="color:#0033b3">url</span>  <span style="color:#080808">\(</span>  <span style="color:#067d17">"styl\_tlac\.css"</span>  <span style="color:#080808">\) </span>  <span style="color:#0033b3">print</span>  <span style="color:#080808">;</span>

# MQ – syntax

Rozšírená syntax:

<span style="color:#434343">@media </span>  <span style="color:#434343">not|only</span>  <span style="color:#434343"> </span>  <span style="color:#434343"> _mediatype_ </span>  <span style="color:#434343"> _ _ </span>  <span style="color:#434343">and</span>  <span style="color:#434343"> _ _ </span>  <span style="color:#434343">\(</span>  <span style="color:#434343"> _expressions_ </span>  <span style="color:#434343">\) \{</span>

<span style="color:#434343">    \.\.\.</span>

<span style="color:#434343">\}</span>

Príklad:

Kompletný prehľad syntaxe: [https://www\.w3schools\.com/cssref/css3\_pr\_mediaquery\.asp](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

<span style="color:#0033b3">@media</span>  <span style="color:#0033b3"> </span>  <span style="color:#0033b3">\(100px <= </span>  <span style="color:#174ad4">width</span>  <span style="color:#174ad4"> <= </span>  <span style="color:#1750eb">480</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">\) \{</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">body </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">        </span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">lightgreen</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    \}</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">@media</span>  <span style="color:#0033b3"> </span>  <span style="color:#067d17">screen </span>  <span style="color:#0033b3">and </span>  <span style="color:#080808">\(</span>  <span style="color:#174ad4">min\-width</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">480</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">\) \{</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">body </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">        </span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">lightgreen</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    \}</span>  <span style="color:#080808">\}</span>

# MQ – užitočné vlastnosti

prefers\-color\-scheme

prefers\-reduced\-motion

<span style="color:#0033b3">@media</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\(</span>  <span style="color:#174ad4">prefers\-color\-scheme: dark</span>  <span style="color:#080808">\) \{</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">body </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">        </span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">black</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    \}</span>  <span style="color:#080808">\}</span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_1.png)

# Tvorba rozloženia web stránky (layouts)

# Rozloženie webovej stránky



* Rozloženie stránky \( _layout_ \) určuje\, ako sú rozložené jednotlivé časti na stránke
  * Napr\. dvoj\- alebo trojstĺpcové rozloženie \+ voliteľne hlavička a/alebo päta
  * Iný dizajn\, najmä pri kreatívnych weboch \( _single page _ dizajn\, \.\.\.\)
* Spôsoby definovania rozloženia:
  * Pomocou vlastností position a/alebo [float](https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_footer) \(aj keď tieto vlastnosti neboli pôvodne na to určené\)
  * CSS Flexbox
  * CSS Grid
  * Nejaký CSS framework \(napr\. Bootstrap\)
* Porovnanie prístupov: [https://www\.w3schools\.com/css/css\_templates\.asp](https://www.w3schools.com/css/css_templates.asp)


# Voľne dostupné CSS šablóny



* Množstvo šablón na internete je dostupných zdarma:
  * [https://www\.free\-css\.com](https://www.free-css.com/)
  * [https://www\.w3schools\.com/w3css/w3css\_templates\.asp](https://www.w3schools.com/w3css/w3css_templates.asp)
  * [https://templatemo\.com/](https://templatemo.com/)


__Výhody:__

__Hotové\, použiteľné šablóny__

__Rýchle nasadenie__

__Zvyčajné možné úpravy__

__Nevýhody:__

__Dizajn nie je jedinečný__

__Pri úpravách je nutné pochopiť koncept dizajnu__

__Nutnosť sa prispôsobiť__

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_2.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_3.png)

# CSS Flexbox



* Poskytuje lepšie a jednoduchšie možnosti tvorby rozloženia
* Základná myšlienka:  <span style="color:#ff9900">umožniť kontajneru flexibilne meniť výšku\, šírku a poradie jeho prvkov </span>
* Je určený skôr na definíciu rozloženia komponentov
  * Ale je možné ho použiť aj na definíciu rozloženia celej stránky
* Je súčasťou CSS a je podporovaný vo všetkých súčasných prehliadačoch
  * Bootstrap tiež používa flex kontajnery
* Tutoriály:
  * [https://css\-tricks\.com/snippets/css/a\-guide\-to\-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [https://www\.w3schools\.com/css/css3\_flexbox\.asp](https://www.w3schools.com/css/css3_flexbox.asp)


# CSS Flexbox – základná terminológia



* Základné pojmy:
  * Flex kontajner \( _flex _  _container_ \)
  * Flex položky \( _flex _  _items_ \)
  * Hlavná os \( _main_  _ _  _axis_ \)
  * Priečna os \( _cross_  _ _  _axis_ \)
  * Hlavná veľkosť \( _main_  _ _  _size_ \)
  * Priečna veľkosť \( _cross_  _ _  _size_ \)
  * Hlavný začiatok/koniec \( _main_  _ _  _start_  _/end_ \)
  * Priečny začiatok/koniec \( _cross_  _ _  _start_  _/end_ \)


Zdroj: [https://css\-tricks\.com/snippets/css/a\-guide\-to\-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# CSS Flexbox – vlastnosti kontajnera (1)



* Každý flexbox komponent sa musí nachádzať vo flexbox kontajneri
  * Na definíciu sa použije vlastnosť
* Vlastnosť flex\-flow je združená vlastnosť pre vlastnosti:


Zdroj: [https://css\-tricks\.com/snippets/css/a\-guide\-to\-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Vlastnosť justify\-content

Vlastnosti gap\, row\-gap\, column\-gap

Zdroj: [https://css\-tricks\.com/snippets/css/a\-guide\-to\-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Vlastnosť align\-items

Vlastnosti align\-content

Zdroj: [https://css\-tricks\.com/snippets/css/a\-guide\-to\-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# CSS Flexbox – vlastnosti flex položiek (1)



* Flex položkami sa stávajú priami potomkovia  _flex_  kontajnera
* Vlastnosť flex je združená vlastnosť pre:
  * Vlastnosť flex\-grow
  * Vlastnosť flex\-shrink
  * Vlastnosť flex\-basis


Zdroj: [https://css\-tricks\.com/snippets/css/a\-guide\-to\-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Vlastnosť align\-self

Vlastnosť order

Zdroj: [https://css\-tricks\.com/snippets/css/a\-guide\-to\-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# CSS Flexbox – príklady

Jednoduché vertikálne a horizontálne centrovanie: [https://jsfiddle\.net/mfbnevp3/](https://jsfiddle.net/mfbnevp3/)

Flexibilné obtekanie prvkov bez MQ: [https://codepen\.io/team/css\-tricks/pen/EKEYob](https://codepen.io/team/css-tricks/pen/EKEYob)

Menu\, ktoré sa prispôsobí šírke stránky: [https://codepen\.io/team/css\-tricks/pen/YqaKYR](https://codepen.io/team/css-tricks/pen/YqaKYR)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_4.png)

# CSS Grid



* Dvojrozmerný systém na tvorbu rozloženia založený na mriežke \( _grid_ \)
  * Je súčasťou CSS a je podporovaný vo všetkých súčasných prehliadačoch
  * Prvý CSS modul určený priamo na tvorbu rozloženia
  * Komplexný nástroj na tvorbu rozloženia stránky
  * Skladá sa z riadkov a stĺpcov \(podobne ako tabuľky\)
* Tutoriály:
  * [https://css\-tricks\.com/snippets/css/complete\-guide\-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [https://www\.w3schools\.com/css/css\_grid\.asp](https://www.w3schools.com/css/css_grid.asp)
  * Zaujímavá hra na výučbu CSS grid: [https://cssgridgarden\.com/](https://cssgridgarden.com/)


# Rozdiely medzi CSS Flexbox a Grid



* Obidva mechanizmy možno použiť na rozloženie stránky aj jednotlivých komponentov\.
* Rozdiely
  * [https://css\-tricks\.com/quick\-whats\-the\-difference\-between\-flexbox\-and\-grid/](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/)
  * Najdôležitejší rozdiel:
  * Flexbox je jednorozmerný 	                                       Grid je dvojrozmerný


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_5.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_6.png)

# CSS Grid – Príklad

Tvorba responzívneho rozloženia stránky: [https://jsfiddle\.net/tj5zh3dv/](https://jsfiddle.net/tj5zh3dv/)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_7.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_8.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_9.png)

Zdroj: [https://www\.freecodecamp\.org/news/learn\-css\-grid\-by\-building\-5\-layouts/](https://www.freecodecamp.org/news/learn-css-grid-by-building-5-layouts/)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_10.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_11.jpg)

# Responzívny web dizajn (RWD)

# Čo je responzívny web dizajn?



* Dizajn webovej aplikácie\, ktorý sa prispôsobí každému zariadeniu
  * Notebook\, tablet\, smartfón\, TV\, \.\.\.
* Hlavná výhoda:  <span style="color:#ff9900">nie je potrebné definovať HTML & CSS pre každý typ zariadenia</span>
* Desktop a mobily \( _[štatistiky](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet)_ \)


Desktop                                                Tablet                           Phone

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_12.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_13.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_14.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_15.png)

Zdroj:  _[https://www\.w3schools\.com/css/css\_rwd\_intro\.asp](https://www.w3schools.com/css/css_rwd_intro.asp)_

# Mobile first prístup



* Je spôsob návrhu webu tak\, že sa ako prvá navrhne mobilná verzia
  * Až potom sa rozšíri o verziu pre desktop počítače
* Prístup má niekoľko výhod:
  * Výber podstatných informácií
  * Postup od jednoduchšieho po zložitejšie
  * Je ľahšie pridávať ako uberať
* Mobile\-first prístup podporuje návrh jednoduchšieho rozhrania a prioritizáciu obsahu
  * Rýchlosť načítavania však závisí od optimalizácie obrázkov\, CSS\, JavaScriptu a ďalších zdrojov


# Príklady CSS frameworkov pre RWD



* _[Bootstrap](https://getbootstrap.com/)_
  * Najrozšírenejší framework na tvorbu responzívneho dizajnu
* _[W3\.CSS](https://www.w3schools.com/w3css/)_
  * Jednoduchý responzívny framework od tvorcov  _w3schools_
* _[Tailwind](https://tailwindcss.com/)_  _[ CSS](https://tailwindcss.com/)_  _ _
  * Moderný _ _  _low_  _\-level _ framework pre vývoj vlastného dizajnu
* _[Foundation](https://get.foundation/)_
  * Pokročilý framework pre front\-end aplikácie
* _[Semantic](https://semantic-ui.com/)_  _[ UI](https://semantic-ui.com/)_
  * Human\-friendly HTML
* _[Materialize](https://materializecss.com/)_
  * Implementácia Google's Material Design


# Základné koncepty RWD

Výrez \( _viewport_ \)

Mriežka \( _grid_ \)

_CSS _  _media_  _ _  _queries_  _ _

Body zlomu \( _breakpoints_ \)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_16.jpg)

# Viewport (výrez)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_17.png)

Zdroj: [https://en\.wiktionary\.org/wiki/viewport](https://en.wiktionary.org/wiki/viewport)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_18.png)



* Je to používateľom viditeľná oblasť webovej stránky
  * Klientska časť okna prehliadača
* Líši sa od zariadenia k zariadeniu
  * Jednotky vh a vw \(rozdiel oproti %\)
  * Jednotky pre mobilné zariadenia dvh\, svh\, lvh
* [Aký ](https://whatismyviewport.com/) _[viewport](https://whatismyviewport.com/)_ [ ](https://whatismyviewport.com/)má moje zariadenie?
* HTML5 umožňuje definovať  _viewport_ :
  * <span style="color:#ffc000">Ak v dokumente chýba\, nezobrazí sa správne RWD</span>
  * Príklad:  _[https://www\.w3schools\.com/css/css\_rwd\_viewport\.asp](https://www.w3schools.com/css/css_rwd_viewport.asp)_


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_19.png)

<span style="color:#080808"><</span>  <span style="color:#0033b3">meta</span>  <span style="color:#0033b3"> </span>  <span style="color:#174ad4">name</span>  <span style="color:#067d17">="</span>  <span style="color:#067d17">viewport</span>  <span style="color:#067d17">" </span>  <span style="color:#174ad4">content</span>  <span style="color:#067d17">="</span>  <span style="color:#067d17">width</span>  <span style="color:#067d17">=device\-</span>  <span style="color:#067d17">width</span>  <span style="color:#067d17">\, </span>  <span style="color:#067d17">initial\-scale</span>  <span style="color:#067d17">=1"</span>  <span style="color:#080808">></span>

Zdroj: [https://www\.lullabot\.com/articles/unexpected\-power\-of\-viewport\-units\-in\-css](https://www.lullabot.com/articles/unexpected-power-of-viewport-units-in-css)

# Mriežka (grid-view)



* Mnoho dizajnov je založených na stĺpcoch
  * Zvyčajne 12 stĺpcov v celkovej šírke 100%
* Dôležité CSS vlastnosti
  * box\-sizing\, \.col\-\*\, \[class\*="col\-"\]\, \.row::after \(viď url adresa dole\)
* Kombinácie umožňujú ľubovoľné rozloženie web stránky
  * Súčet šírok stĺpcov by mal byť 12


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_20.png)

1                2                 3                4                5                6              7                8                9                10              11               12

Zdroj:  _[https://www\.w3schools\.com/css/css\_rwd\_grid\.asp](https://www.w3schools.com/css/css_rwd_grid.asp)_

---

As I understand it, this essentially means the browser generates an invisible container block for anything with display: table!

# Body zlomu (breakpoints)



* Nie je rozumné definovať dizajn pre každé zariadenie zvlášť
  * Existuje veľa šírok výrezu \(rôzne zariadenia\)
  * Nie je to ani nutné \(malý rozdiel v šírke nevadí\)
* Definujú hodnotu \(šírku výrezu\)\, kde sa "dizajn zlomí"
  * Zvyčajne: 576px\, 768px\, 992px\, 1200px\, 1400px
* Každý zo zlomov má vlastný CSS štýl \(vlastné pravidlá\)
  * Možnosť nastaviť štýl elementu pre rôzne zariadenia podľa šírky výrezu


Zdroj:  _[https://www\.w3schools\.com/css/css\_rwd\_mediaqueries\.asp](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)_

# Responzívny text (veľkosť fontu)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_21.png)



* Nastaviť rôzne veľkosti v px pre rôzne média \( _media_  _ _  _queries_ \)
* Používať relatívne jednotky
  * Napr\. vw \(viewport width\)\, resp\. vh \(viewport height\)\, kde 1vw/vh=1% šírky/výšky výrezu
  * V prípade potreby použiť jednotky vmin a vmax
  * <span style="color:#ff9900">Pozor\!</span>  % sa vzťahujú k rodičovskému prvku\, nie k šírke výrezu
* Alternatívne je možné používať jednotky em\, rem
  * em – pri font\-size sa vzťahuje na veľkosť písma rodiča\, pri iných vlastnostiach spravidla na veľkosť písma samotného elementu\.
  * rem – vzťahuje sa na veľkosť písma koreňového elementu


Ukážky:  _[https://www\.w3schools\.com/howto/howto\_css\_responsive\_text\.asp](https://www.w3schools.com/howto/howto_css_responsive_text.asp)_

# Responzívne obrázky

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_22.jpg)



* V HTML je vhodné nastaviť atribúty height a width
* Nastaviť width\, resp\. max\-width na 100%
  * A vlastnosť height na auto
  * Vlastnosť aspect\-ratio
* <span style="color:#ff9900">Problém</span> : obrázok sa zmenší na strane klienta
  * Zbytočne sa sťahuje veľký obrázok
* <span style="color:#ff9900">Riešenie</span> : rôzne obrázky pre rôzne zariadenia
  * S využitím  _media_  _ _  _queries_
* HTML značka <picture> \( _[definícia značky](https://www.w3schools.com/tags/tag_picture.asp)_ \)
  * Značka <source> s atribútmi srcset a media


Ukážky:  _[https://www\.w3schools\.com/css/css\_rwd\_images\.asp](https://www.w3schools.com/css/css_rwd_images.asp)_

# Responzívne video

Podobné pravidlá ako pri obrázkoch

Nastaviť width\, resp\. max\-width na 100%

<span style="color:#0033b3">\.video \{</span>  <span style="color:#0033b3">    </span>  <span style="color:#0033b3">aspect\-ratio: </span>  _16 / 9_  <span style="color:#0033b3">; </span>

<span style="color:#0033b3">    </span>  <span style="color:#0033b3">width: </span>  _100_  <span style="color:#0033b3">%;</span>

<span style="color:#0033b3">\}</span>

Ukážky:  _[https://www\.w3schools\.com/css/css\_rwd\_videos\.asp](https://www.w3schools.com/css/css_rwd_videos.asp)_

# Bootstrap

# Čo je to Bootstrap

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_23.jpg)



* Open\-source CSS framework
  * Určený pre tvorbu dizajnu webovej aplikácie
  * Používa HTML\, CSS a JS
* Obsahuje množstvo pripravených komponentov
  * Napr\. formuláre\, tlačidlá\, tabuľky\, navigácie\, \.\.\.
* Podpora pre tvorbu responzívnych webových stránok
* Kompatibilita so všetkými modernými prehliadačmi
* _Mobile\-_  _first_  prístup


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_24.png)

# Kontajnery



* Kontajner container
  * Kontajner s pevnou šírkou závislou na zariadení
  * Skoková zmena na základe bodov zlomu
* Kontajner container\-fluid
  * Kontajner so šírkou 100%
  * Plynulá zmena
* Responzívne kontajnery
  * Správanie: container\-fluid do bodu zlomu a potom ako container
  * Triedy: container\-sm\, container\-md\, container\-lg\, container\-xl\, container\-xxl


Príklad: [https://www\.w3schools\.com/bootstrap5/bootstrap\_containers\.php](https://www.w3schools.com/bootstrap5/bootstrap_containers.php)

# Mriežka



* 12 responzívnych stĺpcov \(môžu sa spájať\)
* Bootstrap používa 12\-stĺpcovú mriežku
  * Ak súčet šírok stĺpcov v riadku presiahne 12\, ďalšie stĺpce sa zalomia na nový riadok\.


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_25.png)

# Základné triedy pre definovanie mriežky



* Usporiadanie po riadkoch – trieda row a nadradený element musí byť nejaký kontajner
  * Riadky sú potom delené do stĺpcov
* Bootstrap mriežka používa pre stĺpce týchto základných 6 tried \(\* = 1\.\.12\):
  * \.col\-\* \( _extra _  _small_  _ _  _devices_  _ _ – screen < 576px\)
  * \.col\-sm\-\* \( _small_  _ _  _devices_  – screen >= 576px\)
  * \.col\-md\-\* \( _medium_  _ _  _devices_  – screen >= 768px\)
  * \.col\-lg\-\* \( _large_  _ _  _devices_  – screen width >= 992px\)
  * \.col\-xl\-\* \( _xlarge_  _ _  _devices_  – screen width >= 1200px\)
  * \.col\-xxl\-\* \( _xlarge_  _ _  _devices_  – screen width >= 1400px\)
* Triedy sú škálovateľné smerom hore
  * Ak je rovnaká šírka pre sm a md\, stačí špecifikovať sm\, a pod\.


# Typografia



* Definuje základné typy textu a ich formátovanie
  * Predvolená veľkosť písma je 1rem \(16px\)\, riadkovanie 1\.5
  * Predvolený font je Segoe UI \(združená definícia\)
  * Formátuje textové značky \<h1> až <h6>
  * Skratky\, citáty\, kód\, vstup z klávesnice\, \.\.\.


Zdroj: [https://www\.w3schools\.com/bootstrap5/bootstrap\_typography\.php](https://www.w3schools.com/bootstrap5/bootstrap_typography.php)

# Farby popredia a pozadia

Bootstrap používa niekoľko základných farieb \(podľa významu obsahu\):



  * \.text\-danger        <span style="color:#dc3545">This</span>  <span style="color:#dc3545"> text </span>  <span style="color:#dc3545">represents</span>  <span style="color:#dc3545"> </span>  <span style="color:#dc3545">danger</span>  <span style="color:#dc3545">\.</span>
  * \.text\-secondary   <span style="color:#6c757d">Secondary</span>  <span style="color:#6c757d"> text\.</span>
  * \.text\-white
  * \.text\-dark	         <span style="color:#343a40">Dark</span>  <span style="color:#343a40"> </span>  <span style="color:#343a40">grey</span>  <span style="color:#343a40"> text\.</span>
  * \.text\-body	         <span style="color:#212529">Body text\.</span>
  * \.text\-muted	       <span style="color:#6c757d">This</span>  <span style="color:#6c757d"> text </span>  <span style="color:#6c757d">is</span>  <span style="color:#6c757d"> </span>  <span style="color:#6c757d">muted</span>  <span style="color:#6c757d">\.</span>
  * \.text\-primary      <span style="color:#007bff">This</span>  <span style="color:#007bff"> text </span>  <span style="color:#007bff">represents</span>  <span style="color:#007bff"> </span>  <span style="color:#007bff">some</span>  <span style="color:#007bff"> </span>  <span style="color:#007bff">information</span>  <span style="color:#007bff">\.</span>
  * \.text\-success       <span style="color:#28a745">This</span>  <span style="color:#28a745"> text </span>  <span style="color:#28a745">indicates</span>  <span style="color:#28a745"> </span>  <span style="color:#28a745">success</span>  <span style="color:#28a745">\.</span>
  * \.text\-info             <span style="color:#17a2b8">This</span>  <span style="color:#17a2b8"> text </span>  <span style="color:#17a2b8">represents</span>  <span style="color:#17a2b8"> </span>  <span style="color:#17a2b8">some</span>  <span style="color:#17a2b8"> </span>  <span style="color:#17a2b8">information</span>  <span style="color:#17a2b8">\.</span>
  * \.text\-warning      <span style="color:#ffc107">This</span>  <span style="color:#ffc107"> text </span>  <span style="color:#ffc107">represents</span>  <span style="color:#ffc107"> a </span>  <span style="color:#ffc107">warning</span>  <span style="color:#ffc107">\.</span>


Zdroj: [https://www\.w3schools\.com/bootstrap5/bootstrap\_colors\.php](https://www.w3schools.com/bootstrap5/bootstrap_colors.php) _ _

# Bootstrap UI komponenty



* Všetky HTML elementy majú svoje formátovanie
  * Tabuľky\, obrázky\, …
  * Niektoré z nich používajú Javascript\, napr\. popover
* Navigácia a menu
  * navbar\, navs\, dropdowns\, \.\.\.
* Formuláre
  * inputs\, buttons\, button groups\, \.\.\.
* Ďalšie komponenty
  * alerts\, badges\, spinners\, popovers\, collapse\, tooltips\, cards\, \.\.\.
* Pokročilé komponenty
  * modals\, collapse\, carousel\, scrollspy\, pagination\, offcanvas\, \.\.\.


# Ikony



* Bootstrap má [kolekciu](https://icons.getbootstrap.com/)[ ](https://icons.getbootstrap.com/)[vlastných ikon](https://icons.getbootstrap.com/)
  * Viac ako 2000
  * Ikony sú vo formáte SVG \(vektorové\)
  * Je možné ich stiahnuť a používať nezávisle na Bootstrap\-e
* Je možné používať aj inú sadu ikon
  * _Font_   _Awesome_  –  _[fontawesome\.io](http://fontawesome.io/)_
  * _Google _  _icons_  \-  _[design\.google\.com/](https://design.google.com/icons/)_  _[icons](https://design.google.com/icons/)_


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_26.png)

Zdroj: [https://icons\.getbootstrap\.com/](https://icons.getbootstrap.com/)

# Bootstrap – príklad

Rozloženie stránky: trojstĺpcový dizajn\, hlavička\, päta: [https://jsfiddle\.net/L5b0vf3e/](https://jsfiddle.net/L5b0vf3e/)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_27.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_28.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_29.jpg)

# CSS preprocesory



* CSS preprocesor je nástroj rozširujúci možnosti CSS
  * Pridávajú vlastnú syntax\, jednoduchší a prehľadnejší zápis \(vlastný jazyk\)
  * Napr\. premenné\, vnáranie pravidiel\, funkcie\, matematické operácie
  * Nepridáva nové CSS vlastnosti
  * Po kompilácii \(transpilácii\) sa vytvorí CSS \(ktorému rozumie prehliadač\)
* Najpoužívanejšie preprocesory sú:
  * [Sass](https://sass-lang.com/)
  * [LESS](https://lesscss.org/)
  * [Stylus](https://stylus-lang.com/)
* V dnešnej dobe už veľa vlastností preprocesorov pokrýva priamo css


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_30.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_31.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_32.png)

# User experience

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_33.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_34.jpg)

# UX vs UI dizajn

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_35.jpg)

[https://wame\.sk/aky\-je\-rozdiel\-medzi\-ui\-a\-ux\-dizajnom](https://wame.sk/aky-je-rozdiel-medzi-ui-a-ux-dizajnom)

# UX Design



* „A person's perceptions and responses that result from the use or anticipated use of a product\, system or service\.“
* ISO 9241\-210
* Zameraný na používateľa
  * Príjemné na používanie
  * Optimalizácia interakcie
* Wireframes
* Prototypy


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_36.png)

[https://www\.lqd\.cz/clanek/wireframe\-a\-uspech\-webu](https://www.lqd.cz/clanek/wireframe-a-uspech-webu)

# Zásady UX

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_37.jpg)



* Nevymýšľajte znovu koleso
* Nech je to jednoduché
  * Každá stránka má konkrétny účel
  * Účel je zrozumiteľný aj bez potreby vysvetlenia
  * Dodatočné informácie patria na spodnú časť stránky
* Porozumenie potrieb zákazníka
  * Získanie spätnej väzby pomocou \(interaktívnych\) dotazníkov
  * Potreba sledovať zákazníka\, ako so systémom pracuje


[https://www\.flowmapp\.com/](https://www.flowmapp.com/)



* Rozdielne elementy by mali byť aj vizuálne oddelené
  * Najdôležitejšie informácie by mali byť najviac výrazné
  * Používateľ musí vedieť\, kde sa v aplikácii nachádza \(potreba navigácie\)
  * Vyhľadávacie pole musí byť dostatočne viditeľné
* Udržiavanie konzistentného  _user _  _flow_  počas používania aplikácie
  * používateľ by mal byť schopný logicky\, intuitívne a bez zbytočných prekážok prechádzať jednotlivými krokmi pri vykonávaní určitej úlohy


# UX

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_38.jpg)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2003%20-%20Dizajn%20webovej%20aplik%C3%A1cie_39.png)

