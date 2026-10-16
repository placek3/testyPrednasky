# Úvod do web aplikácií a jazyk HTML5

* Cieľ
  * Naučiť sa navrhovať a vytvárať a poznať špecifické vlastnosti webových aplikácií
* Stručný obsah
  * Základné informácie o webových aplikáciách
  * HTML5\, CSS\, responzívny dizajn
  * JavaScript a DOM
  * Serverová časť web aplikácie\, jazyk PHP\, spolupráca s databázami \(MySQL\)
  * Architektúra webových aplikácií
  * Tvorba REST API\, AJAX volania
  * Bezpečnosť  webových aplikácií
  * Frameworky na tvorbu web aplikácií
---


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_2.png)

# Úvod do webových aplikácií

# World wide web

Najpoužívanejšia služba v internete

Rok vzniku 1989\, CERN\, sir  _Timothy_  _ _  _Berners\-Lee_

Architektúra klient/server

HTTP\(S\) protokol\, URL adresy

Serverový a klientsky softvér

# Charakteristika webových aplikácií



* Viacvrstvové klient/server aplikácie
  * Dátová vrstva \(server\)
  * Vrstva aplikačnej logiky \(server a/alebo klient\)
  * Prezentačná vrstva \(klient\)
* Čo je klient a čo je server
* Frontend/backend


# Webová vs. desktopová aplikácia

__Webová aplikácia__

Spúšťa sa v internetovom prehliadači

Funguje multiplatformovo \(Windows\, macOS\, Linux\, mobil\)

Jednoduchá aktualizácia – verzia vždy najnovšia na serveri

Vyžaduje pripojenie na internet \(väčšinou\)

Príklady: Gmail\, Google Docs\, Facebook

__Desktopová aplikácia__

Inštaluje sa priamo do operačného systému

Priamy prístup k hardvéru \(grafika\, súbory\, periférie\)

Môže fungovať offline

Aktualizácie  si používateľ musí stiahnuť

príklady: MS Word\, Photoshop\, PHPStorm

# Výhody webových aplikácií



* Nie je potrebná inštalácia
  * Jednoduché nasadenie
  * Nezaberajú žiadne \(alebo len minimálne miesto\) na disku
* Sú multiplatformové \(pri dobrom návrhu\)
  * Kód funguje na smartfónoch\, tabletoch\, rôznych OS\, …
  * Podpora rôznych rozlíšení\, prehliadačov
* Veľa softvéru už existuje \(a zadarmo\)
  * Klientsky prehliadač\, WWW server\, zabezpečenie
  * Aj vývojové prostredia




* Väčšina aplikácií musí byť online
  * Musí byť k dispozícii sieťové pripojenie
* Nutnosť zvládnuť a prepájať veľa rôznych jazykov a technológií
* Klientska časť nevyzerá vždy a všade rovnako
  * Rôzne typy zariadení\, veľkosť obrazovky\, operačný systém\, prehliadače
* Zdĺhavé testovanie
* Vyššie nároky na bezpečnosť aplikácií
  * Aj \(a hlavne\) pre vývojárov
  * Klientska časť môže byť ľubovoľne modifikovaná
* Tvorca aplikácie má prístup k užívateľovým dátam


# Architektúra webových aplikácií



* Klientska časť
  * Beží v prehliadači
  * Používateľské rozhranie aplikácie – jazyky HTML\, CSS
  * _JavaScript/_  _TypeScript_  \(časť aplikačnej logiky\)\,  _Web _  _assembly_  \( _Blazor_  \+ _ \.NET_ \)\, \.\.\.
* Serverová časť
  * Aplikačná logika \(najmä nad spoločnými dátami\)
  * Rôzne technológie \(PHP\, ASP\.NET\, node\.js\, Python\, Java\, …\)
  * Prístup k dátam
* Dátové úložisko
  * Zvyčajne databázový systém \(nemusí byť relačný\)


# Komunikácia medzi vrstvami webovej aplikácie



* Klient ↔ Server
  * Klient \(prehliadač\) posiela požiadavky
  * Server odpovedá dátami \(HTML\, JSON\, XML\, …\)
* Protokoly
  * HTTP / HTTPS \(zabezpečená komunikácia\)
  * WebSocket \(obojstranná komunikácia v reálnom čase\)
* Spôsoby výmeny dát
  * Celá stránka – klasické načítanie \(zvyčajne HTML \+ CSS \+ JS\)
  * Čiastočné načítanie – AJAX\, Fetch API \(len dáta\)
  * REST API\, GraphQL


# Klientska strana webovej aplikácie



* Technológie klientskej strany
  * Štruktúra – HTML5
  * Dizajn – CSS
  * Správanie – JS / Web assembly


# Vývojárske role pri vývoji webových aplikácií



* _Frontend_   _developer_
  * HTML\, CSS\, JavaScript\, UI/UX dizajn
* _Backend_   _developer_
  * Serverová logika\, databázy\, API
* _Fullstack_   _developer_
  * Tvorí frontend aj backend
* Ďalšie role
  * DevOps \(nasadzovanie\, cloud\, CI/CD\)
  * Tester \(QA\)\, UX dizajnér


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_4.png)

# Otázka 1 – motivačná (každá odpoveď je správna )



* Aké máte doterajšie skúsenosti s vývojom webových aplikácií?
  * Žiadne skúsenosti
  * Základy \(HTML\, CSS\, prípadne trochu JavaScriptu\)
  * Stredne pokročilý \(jednoduché web stránky\, napr\. v PHP alebo jednoduchý JS\)
  * Pokročilý \(praktické skúsenosti s front\-end a/alebo backend frameworkami\)
  * Veľmi dobré skúsenosti \(viem samostatne vyvinúť plnohodnotnú webovú aplikáciu\)


# Moderné trendy vo vývoji webových aplikácií



* Hybridné a rýchle weby
  * Server\-side rendering \(Next\.js\, Nuxt\.js\) a SPA frameworky \(Anglular\, Vue\, React\)
* Výkon a moderné technológie
  * WebAssembly\, moderné JS frameworky \(Blazor\, Limewire\)
* Mobilita a interaktivita
  * Progressive Web Apps \(PWA\)\, real\-time funkcionalita
* AI a personalizácia
  * Chatboty\, odporúčania\, automatizácia\, ale aj podpora vývoja


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_5.png)

# Jazyk HTML5



* _H_  _yper _  _T_  _ext _  _M_  _arkup _  _L_  _anguage_
* Popisuje  <span style="color:#fe8637">štruktúru </span> webovej stránky
  * Na definovanie vzhľadu sa používa jazyk CSS
* Na zápis štruktúry používa značky \( _tags_ \)
  * Prehliadače na základe značiek zostavia stránku
* Je podporovaný všetkými súčasnými prehliadačmi
* Štandardizácia:
  * _World Wide Web_  _ _  _Consortium_  \(W3C\)
  * _Web Hypertext Application Technology Working Group_  \(WHATWG\) – [living](https://html.spec.whatwg.org/)[ ](https://html.spec.whatwg.org/)[standard](https://html.spec.whatwg.org/)
* Odporúčané materiály: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)\, [w3schools](https://www.w3schools.com/html/default.asp)


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_6.png)

# Základná syntax jazyka HTML5



* Na definovanie obsahu sa používajú značky
  * Značky spolu s obsahom sa nazýva element
  * Párové a nepárové značky
* Neznáme značky sa vynechávajú
* Ignorujú sa viacnásobné medzery a pevné zalomenia riadkov \(cez ENTER\)
* Prehliadače sa snažia zobraziť dokument za každú cenu
  * Aj s chybami \(žiadne výpisy chýb ani varovania\)


# Značky jazyka HTML5



* Sú uzavreté v zátvorkách < a >
* Môžu byť párové a nepárové <strong>text</strong>
* Nepárové majú syntax \<br>
* Značky používajú na upresnenia vlastností atribúty
* Štandard povoľuje použiť malé a veľké písmená
  * Odporúča sa používať  <span style="color:#fe8637">malé písmená</span>
* Značky by mali byť správne zanorené
  * Nemali by sa prekrývať


# Použitie malých a veľkých písmen

<span style="color:#ff0000">Nesprávne:</span>

<span style="color:#007700"><</span>  <span style="color:#007700">diV</span>  <span style="color:#333333"> </span>  <span style="color:#0000cc">NAME=</span>  <span style="color:#333333">oDseK</span>  <span style="color:#333333"> </span>  <span style="color:#0000cc">cLaSs</span>  <span style="color:#0000cc">=</span>  <span style="color:#333333">"odsek text\-</span>  <span style="color:#333333">left</span>  <span style="color:#333333">"</span>  <span style="color:#007700">></span>

<span style="color:#333333">    Toto je nejaký odsek textu</span>

<span style="color:#007700"></</span>  <span style="color:#007700">dIv</span>  <span style="color:#007700">></span>

Správne:

<span style="color:#007700"><div</span>  <span style="color:#333333"> </span>  <span style="color:#0000cc">name</span>  <span style="color:#0000cc">=</span>  <span style="color:#333333">"odsek"</span>  <span style="color:#333333"> </span>  <span style="color:#0000cc">class</span>  <span style="color:#0000cc">=</span>  <span style="color:#333333">"odsek text\-</span>  <span style="color:#333333">left</span>  <span style="color:#333333">"</span>  <span style="color:#007700">></span>

<span style="color:#333333">    Toto je nejaký odsek textu</span>

<span style="color:#007700">\</div></span>

# Vnáranie značiek

<span style="color:#ff0000">Nesprávne vnáranie značiek:</span>

<span style="color:#007700">\<p></span>  <span style="color:#333333">Nejaký text</span>  <span style="color:#007700">\<div>\</p><</span>  <span style="color:#007700">img</span>  <span style="color:#333333"> </span>  <span style="color:#0000cc">src</span>  <span style="color:#0000cc">=</span>  <span style="color:#333333">"obrazok\.jpg"</span>  <span style="color:#007700">>\</div></span>

Správne vnáranie značiek:

<span style="color:#007700">\<div></span>

<span style="color:#007700">  \<p></span>  <span style="color:#333333">Nejaký text</span>  <span style="color:#007700">\</p></span>

<span style="color:#007700">  <</span>  <span style="color:#007700">img</span>  <span style="color:#333333"> </span>  <span style="color:#0000cc">src</span>  <span style="color:#0000cc">=</span>  <span style="color:#333333">"obrazok\.jpg"</span>  <span style="color:#007700">></span>

<span style="color:#007700">\</div></span>

# Atribúty HTML5 značiek

Na upresnenie významu sa používajú atribúty

Hodnotové a logické

Hodnoty atribútov je __ odp__ orúčané __ __  <span style="color:#fe8637">písať v úvodzovkách </span>  __\(povinné\, ak obsahuje hodnota medzeru alebo špeciálny znak\)__

<span style="color:#007700"><</span>  <span style="color:#007700">input</span>  __ __  <span style="color:#0000cc">type=</span>  __text__  __ __  <span style="color:#0000cc">disabled</span>  <span style="color:#007700">></span>

<span style="color:#007700"><</span>  <span style="color:#007700">input</span>  __ __  <span style="color:#0000cc">type=</span>  __"text"__  <span style="color:#0000cc"> </span>  <span style="color:#0000cc">disabled</span>  <span style="color:#0000cc">=</span>  __""__  <span style="color:#007700">></span>

<span style="color:#007700"><</span>  <span style="color:#007700">input</span>  __ __  <span style="color:#0000cc">type=</span>  __"text"__  __ __  <span style="color:#0000cc">disabled</span>  <span style="color:#0000cc">=</span>  __disabled__  <span style="color:#007700">></span>

# Základná štruktúra HTML5 dokumentu

<span style="color:#557799">\<\!DOCTYPE html></span>

<span style="color:#007700"><html </span>  <span style="color:#0000cc">lang</span>  <span style="color:#007700">=</span> "sk\-SK" <span style="color:#007700">></span>

<span style="color:#333333">  </span>  <span style="color:#007700"><</span>  <span style="color:#007700">head</span>  <span style="color:#007700">></span>

<span style="color:#007700">    </span>  <span style="color:#007700"><</span>  <span style="color:#007700">meta</span>  __ __  <span style="color:#0000cc">charset</span>  <span style="color:#0000cc">=</span>  __"UTF\-8"__  <span style="color:#007700">></span>

<span style="color:#007700">    </span>  <span style="color:#007700">\<title></span>  <span style="color:#333333">Page</span>  <span style="color:#333333"> title</span>  <span style="color:#007700">\</title></span>

<span style="color:#007700">  </</span>  <span style="color:#007700">head</span>  <span style="color:#007700">></span>

<span style="color:#007700">  \<body></span>

<span style="color:#007700">    \<p></span>  <span style="color:#333333">Hello</span>  <span style="color:#333333"> </span>  <span style="color:#333333">world</span>  <span style="color:#333333">\!</span>  <span style="color:#007700">\</p></span>

<span style="color:#007700">  \</body></span>

<span style="color:#007700">\</html></span>

# Deklarácia typu dokumentu



* V HTML 5 je len jeden typ:  <span style="color:#557799">\<\!DOCTYPE html></span>
  * Je dôležité ho uvádzať\, aby prehliadač správne detegoval typ dokumentu
  * Musí byť uvedený na prvom riadku v HTML5 dokumente
  * Používa sa pri validácii \(validátor  _[validator\.w3\.org](https://validator.w3.org/)_ \)


# Značka html

\<html> je párová značka

Vytvára koreňový \( _root_ \) element

V dokumente sa musí vyskytovať práve 1x

Môže obsahovať iba elementy: head a body

# Značka head (1)



* <head> je párová značka
* Obsahuje povinný nadpis dokumentu \<title>
* Definícia ikony webu \( _favicon_ \)
* Značka <meta>
  * Metainformácie o dokumente\, napr\.   _author_ \,  _keywords_ \,  _description_
  * Definícia znakovej sady
* <span style="color:#007700"><</span>  <span style="color:#007700">meta</span>  __ __  <span style="color:#0000cc">charset</span>  <span style="color:#0000cc">=</span>  __"UTF\-8"__  <span style="color:#007700">></span>  __	__  <span style="color:#007700"><</span>  <span style="color:#007700">meta</span>  __ __  <span style="color:#0000cc">name</span>  <span style="color:#0000cc">=</span>  __"__  __description__  __"__  __ __  <span style="color:#0000cc">content</span>  <span style="color:#0000cc">=</span>  __"Prednáška o HTML5 a CSS3"__  <span style="color:#007700">></span>  __	__  <span style="color:#007700"><</span>  <span style="color:#007700">meta</span>  __ __  <span style="color:#0000cc">name</span>  <span style="color:#0000cc">=</span>  __"__  __keywords__  __"__  __ __  <span style="color:#0000cc">content</span>  <span style="color:#0000cc">=</span>  __"HTML5\,CSS3"__  <span style="color:#007700">></span>  __	__  <span style="color:#007700"><</span>  <span style="color:#007700">meta</span>  __ __  <span style="color:#0000cc">name</span>  <span style="color:#0000cc">=</span>  __"__  __author__  __"__  __ __  <span style="color:#0000cc">content</span>  <span style="color:#0000cc">=</span>  __"Patrik Hrkút"__  <span style="color:#007700">></span>




* Prepojenie HTML dokumentu s kaskádovými štýlmi
  * Značka <link>
* <span style="color:#007700"><</span>  <span style="color:#007700">link</span>  __ __  <span style="color:#0000cc">rel</span>  <span style="color:#0000cc">=</span>  __"__  __stylesheet__  __"__  __ __  <span style="color:#0000cc">href</span>  <span style="color:#0000cc">=</span>  __"styl\.css"__  <span style="color:#333333"> </span>  <span style="color:#0000cc">type=</span>  <span style="color:#333333">"text/</span>  <span style="color:#333333">css</span>  <span style="color:#333333">"</span>  <span style="color:#007700">></span>
* Vkladanie skriptov
  * Značka <script>
  * Umožňuje vkladanie skriptov \(párová značka\!\)
  * Odporučené je vkladanie <span style="color:#fe8637"> </span> skriptov  <span style="color:#fe8637">externe</span>
* <span style="color:#007700"><</span>  <span style="color:#007700">script</span>  <span style="color:#007700"> </span>  <span style="color:#0000cc">src</span>  <span style="color:#0000cc">=</span>  __"skript\.js"__  <span style="color:#007700">></</span>  <span style="color:#007700">script</span>  <span style="color:#007700">></span>


# Značka body

Povinná časť HTML dokumentu

Párová značka \<body>

Obsahuje všetko\, čo sa má zobraziť v okne prehliadača

# Rozdelenie značiek podľa zobrazenia elementov (1)



* Značky  <span style="color:#ff9900">blokové </span>
  * Vytvárajú okolo seba blok miesta
  * Zaberajú miesto od začiatku až do konca riadku
  * Nasledujúci element začína na novom riadku
* Značky  <span style="color:#ff9900">riadkové </span> \( _inline_ \)
  * Zaberajú len nutný priestor
  * Ďalší element pokračuje bezprostredne za predchádzajúcim


# Značky span a div



* Jedny z najpoužívanejších značiek v HTML
* Nemajú žiadne formátovanie\, spájajú s CSS štýlmi
* Značka \<div>
  * Definuje blok\, často nazývaný kontajner
  * Veľmi často je vnorená do inej \<div> značky
* Značka <span>
  * Definuje riadkový obsah


# Definovanie štruktúry dokumentu



* Značky musia vyjadrovať štruktúru informácií v dokumente
* Štruktúrované HTML dokumenty dokážu spracovať počítače lepšie
  * Na základy štruktúry je počítač schopný lepšie pochopiť obsah informácie
  * Napr\. pre účely vyhľadávania
  * Ale aj napr\. pre zrakovo postihnutých ľudí \( _accessibility_ \)
* Štruktúrovaný sa ľahšie udržuje a číta aj pre web vývojára


# Blokové značky na tvorbu štruktúry obsahu



* Značka odstavca \<p>
* Nadpisy
  * Značky \<h1> až \<h6>
  * Zásady používania nadpisov
* Predformátovaný text \<pre>
* Definujúce význam textu napr\. <address>\, \<q>\, <blockquote>
---

<q> je krátka inline citácia
<blockquote> je bloková dlhá citácia



# Riadkové značky na tvorbu štruktúry obsahu

Zvýraznenie \( _emphasis_ \) – značka <em>

Veľká dôležitosť \( _strong importance_ \) – značka <strong>

<span style="color:#ff0000">Nepoužívať</span>  značky na definovanie tučného\, šikmého a podčiarknutého písma

Značky na definovanie horného a dolného indexu – značka \<sup> a <sub>

Skratky – značka <abbr>

Definovanie časov a dátumov – značky <date> a <time>

A množstvo iných: <code>\, <kbd>\, <samp>\, \<var>\, \.\.\.

# Hypertextové odkazy (1)



* Párová značka \<a>
* Odkaz môže byť aj na obrázku\, alebo blokovej značke
* Atribút title obsahuje doplňujúce informácie o odkaze
* Typy odkazov:
  * Správne použitie typu odkazu je veľmi dôležité
  * Relatívne  <span style="color:#007700"><a</span>  __ __  <span style="color:#0000cc">href</span>  <span style="color:#0000cc">=</span>  __"__  __img__  __/logo\.gif"__  <span style="color:#007700">></span>  __Logo__  <span style="color:#007700">\</a></span>
  * Absolútne  <span style="color:#007700"><a</span>  __ __  <span style="color:#0000cc">href</span>  <span style="color:#0000cc">=</span>  __"http://www\.server1\.sk/"__  <span style="color:#007700">></span>  __Server 1__  <span style="color:#007700">\</a></span>




* Odkazy do vnútra stránky \(na fragmenty\)
  * ID nemusí byť len pri značke \<a>
* <span style="color:#007700">	</span>  <span style="color:#007700"><h1</span>  __ __  <span style="color:#0000cc">id=</span>  __"__  __zaciatok__  __"__  <span style="color:#007700">>\</h1></span>  __	\.\.\.__  __	__  <span style="color:#007700"><a</span>  __ __  <span style="color:#0000cc">href</span>  <span style="color:#0000cc">=</span>  __"\#__  __zaciatok__  __"__  <span style="color:#007700">></span>  __Skok na začiatok__  <span style="color:#007700">\</a></span>
* Otváranie odkazov v inom okne/záložke prehliadača
* <span style="color:#007700"><a</span>  __ __  <span style="color:#0000cc">href</span>  <span style="color:#0000cc">=</span>  __"kontakt\.html"__  __ __  <span style="color:#0000cc">target</span>  <span style="color:#0000cc">=</span>  __"\___  __blank__  __"__  <span style="color:#007700">></span>  __Kontakty__  <span style="color:#007700">\</a></span>


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_7.png)

# Hypertextové odkazy – príklady

URL stránky:  [http://www\.mojastranka\.sk/obsah/index\.html](http://www.mojastranka.sk/obsah/index.html)

Relatívna cesta "/obrazok/obr\.jpg"

Výsledok: [http://www\.mojastranka\.sk/](http://www.mojastranka.sk/obr.jpg)[obrazok](http://www.mojastranka.sk/obsah/obrazok/obr.jpg)[/obr\.jpg](http://www.mojastranka.sk/obr.jpg)

Relatívna cesta "obrazok/obr\.jpg"

Výsledok: [http://www\.mojastranka\.sk/obsah/obrazok/obr\.jpg](http://www.mojastranka.sk/obsah/obrazok/obr.jpg)

Relatívna cesta "\.\./obrazok/obr\.jpg"

Výsledok: [http://www\.mojastranka\.sk/obrazok/obr\.jpg](http://www.mojastranka.sk/obrazok/obr.jpg)

# Zoznamy



* Číslované zoznamy
  * Značky <ol>\,\<li>
* Nečíslované zoznamy
  * Značky <ul>\,\<li>
* Spôsob číslovania\, resp\. typ odrážky sa definuje v CSS
* Zoznamy môžu byť viacnásobné a vnorené do seba
* Odporúča sa uzatvárať značky \<li>


<span style="color:#007700">\<ul></span>  __	    __

<span style="color:#007700">  \<li></span>  __Slovensky__  <span style="color:#007700">\</li></span>  __  __  <span style="color:#007700">\<li></span>  __Nemecky__  <span style="color:#007700">\</li></span>

__  __  <span style="color:#007700">\<li></span>  __Anglicky__  <span style="color:#007700">\</li></span>  <span style="color:#007700">\</ul></span>

<span style="color:#007700">\<ol></span>  __	    __

<span style="color:#007700">  \<li></span>  __Slovensky__  <span style="color:#007700">\</li></span>  __  __  <span style="color:#007700">\<li></span>  __Nemecky__  <span style="color:#007700">\</li></span>

__  __  <span style="color:#007700">\<li></span>  __Anglicky__  <span style="color:#007700">\</li></span>  <span style="color:#007700">\</ol></span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_8.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_9.png)

# Vnorené zoznamy

<span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#007700">  \<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">    </span>  <span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">        </span>  <span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">        </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\</li></span>

<span style="color:#007700">    </</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#007700">  \</li></span>

<span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_10.png)

# Tabuľky (1)

Definuje sa v párovej značke \<table>

Používa sa na formátovanie tabuľkových dát

Základné členenie na riadky a stĺpce

Je možné spájať a rozdeľovať bunky

Tabuľky môžu obsahovať vnorené tabuľky

Úplná špecifikácia je v RFC 1942

# Tabuľky (2)



* Značka \<table>
* Nadpis tabuľky <caption>
* Riadok <tr>
  * Zoskupovanie pomocou značiek <thead>\, <tbody>\, <tfoot>
* Bunky <td>\, <th>
  * Spájanie stĺpcov a riadkov v tabuľke \(atribúty rowspan a colspan\)
* Združovanie stĺpcov <colgroup> a <col>
  * Užitočné pre spoločné definovanie štýlov na viac stĺpcov tabuľky
* Vzhľad tabuľky sa definuje v CSS
---

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_td_rowspan 



# Jednoduchá tabuľka – príklad

<span style="color:#007700">\<table></span>  __  __  <span style="color:#007700">\<tr></span>  __    __  <span style="color:#007700">\<th></span>  __Rok__  <span style="color:#007700">\</th></span>  __    __  <span style="color:#007700">\<th></span>  __Počet študentov__  <span style="color:#007700">\</th></span>  __  __  <span style="color:#007700">\</tr></span>  __  __  <span style="color:#007700">\<tr></span>  __    __  <span style="color:#007700">\<td></span>  __2015__  <span style="color:#007700">\</td></span>  __    __  <span style="color:#007700">\<td></span>  __201__  <span style="color:#007700">\</td></span>  __  __  <span style="color:#007700">\</tr></span>  __  __  <span style="color:#007700">\<tr></span>  __    __  <span style="color:#007700">\<td></span>  __2016__  <span style="color:#007700">\</td></span>  __    __  <span style="color:#007700">\<td></span>  __143__  <span style="color:#007700">\</td></span>  __  __  <span style="color:#007700">\</tr></span>  <span style="color:#007700">\</table></span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_11.png)

# Zložitejšia tabuľka – príklad

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_12.png)

# Tabuľka s vnorenými tabuľkami – príklad

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_13.png)

# Obrázky



* Podporované formáty: GIF\, JPG\, PNG\, SVG\, WebP
  * Animované GIF obrázky
  * Obrázky s priehľadným pozadím
* Nepárová značka <img>
* Dôležité atribúty:
  * src – URL adresa obrázku
  * alt – textový popis obrázku
  * Definovanie šírky a výšky obrázku \(style alebo width a height alebo vynechať?\)
* Príklad
* <span style="color:#007700"><</span>  <span style="color:#007700">img</span>  __ __  <span style="color:#0000cc">src</span>  <span style="color:#0000cc">=</span>  __"__  __img__  __/logo\.png"__  __ __  <span style="color:#0000cc">alt=</span>  __"Logo firmy"__  <span style="color:#007700">></span>
---

Note: Always specify the width and height of an image. If width and height are not specified, the page will flicker while the image loads.



# Ďalšie sémantické značky HTML5



* Elementy definujúce význam jednotlivých informácií na stránke
  * Sémantický element = element s významom
  * Napr\. <header>\, <footer>\, <article>\, <section>\, <nav>
  * Rozdiel medzi <header> a <div id="header">
  * Obrázky <figure>\, <figcaption>
  * Môžu byť do seba rôzne zanorené
  * Článok môže mať sekcie alebo sekcia niekoľko článkov
* Nemajú žiadne prednastavené formátovanie
  * Potrebné pridať CSS štýl
* Zoznam všetkých elementov   _[www\.w3schools\.com/html/html5\_new\_elements\.asp](http://www.w3schools.com/html/html5_new_elements.asp)_


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_14.gif)

# Vkladanie multimédií do HTML



* Vkladanie multimediálnych súborov
  * Audio a video
* Značky \<audio> a \<video>
* Vloženie videa s ovládacími prvkami
* <span style="color:#007700">    </span>  <span style="color:#007700"><video</span>  __ __  <span style="color:#0000cc">width</span>  <span style="color:#0000cc">=</span>  __"320"__  __ __  <span style="color:#0000cc">height</span>  <span style="color:#0000cc">=</span>  __"240"__  __ __  <span style="color:#0000cc">controls</span>  <span style="color:#007700">></span>  __       __  <span style="color:#007700"><</span>  <span style="color:#007700">source</span>  __ __  <span style="color:#0000cc">src</span>  <span style="color:#0000cc">=</span>  __"movie\.mp4"__  __ __  <span style="color:#0000cc">type=</span>  __"video/mp4"__  <span style="color:#007700">></span>  <span style="color:#007700">       <</span>  <span style="color:#007700">source</span>  __ __  <span style="color:#0000cc">src</span>  <span style="color:#0000cc">=</span>  __"movie\.ogg"__  __ __  <span style="color:#0000cc">type=</span>  __"video/__  __ogg__  __"__  <span style="color:#007700">></span>  __       Váš prehliadač nepodporuje značku video\!__  __     __  <span style="color:#007700">\</video></span>


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2001%20-%20Web%20a%20HTML_15.png)

---

The controls attribute adds video controls, like play, pause, and volume.
It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.
The <source> element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.
The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.


# Rôzne iné HTML značky



* Zalomenie riadku \<br>
  * Kedy používať zalamovanie riadkov?
  * Príklad: riadok 1\<br>riadok 2
* Oddeľovač textu \<hr>
* HTML komentár
  * Syntax: \<\!\-\- toto je komentár \-\->
  * <span style="color:#fe8637">Pozor\!</span>  Je  viditeľný v zdrojovom texte HTML


# HTML entity, symboly a emoji



* Základné [https://www\.w3schools\.com/html/html\_symbols\.asp](https://www.w3schools.com/html/html_symbols.asp)
  * &lt; <
  * &gt; >
  * &amp;  &
  * &nbsp; nedeliteľná medzera
* Špeciálne
  * Napr\.  &copy; ©\, &reg; ®
* Iné znaky
  * Znaky gréckej abecedy\, napr\. &Omega; Ω
  * Matematické symboly\, napr\. &sum; ∑
  * Ostatné\, napr\. &euro; €


# Validácia webových stránok



* Validácia overuje\, či HTML/CSS kód spĺňa štandardy W3C
  * Pomáha odhaliť syntaktické chyby \(nezatvorené značky\, nesprávne vnáranie\)
  * Uľahčuje údržbu a čitateľnosť kódu\.
* Zlepšuje prístupnosť \(čítačky obrazovky lepšie interpretujú korektný kód\)\.
* Podporuje SEO – validný kód je pre vyhľadávače zrozumiteľnejší\.
* Nástroje: [validator\.w3\.org ](https://validator.w3.org/)\, [W3C CSS ](https://jigsaw.w3.org/css-validator/)[Validator](https://jigsaw.w3.org/css-validator/)\, doplnky do IDE a prehliadačov\.


# Prístupné webové stránky



* Stránky umožňujúce\, aby ich mohli používať aj ľudia s postihnutím
* Súhrn doporučení\, ako má taký web vyzerať
  * Úloha webového dizajnéra
* W3C štandard [Web ](https://www.w3.org/TR/WCAG21/)[Content](https://www.w3.org/TR/WCAG21/)[ ](https://www.w3.org/TR/WCAG21/)[Accessibility](https://www.w3.org/TR/WCAG21/)[ ](https://www.w3.org/TR/WCAG21/)[Guidelines](https://www.w3.org/TR/WCAG21/) \(WCAG 2\.1\)
* EÚ právne vyžaduje\, aby webové aplikácie boli prístupné
  * Smernica \(EÚ\) 2016/2102 \(povinné pre verejné inštitúcie\)
  * Európsky akt o prístupnosti \(European Accessibility Act – EAA\, smernica 2019/882\) – aj pre súkromný sektor \(napr\. e\-shopy\, internet banking\, sociálne siete\, a pod\.\, od 28\.6\.2025


# Zásady tvorby prístupných webových stránok

Používanie alt atribútov pre všetky obrázky

Dostatočný kontrast textu a pozadia

Možnosť ovládania aj klávesnicou \(nie iba myšou\)

Používanie ARIA atribútov pre čítačky obrazovky

Jasná a logická štruktúra obsahu \(nadpisy\, zoznamy\)

# Accessible Rich Internet Applications (ARIA) atribúty



* Špeciálne značky a vlastnosti v HTML\,
* Umožňujú správne pochopenie obsahu a interakcií čítačkami obrazovky
* Príklady:
  * role – určuje význam elementu \(napr\. role="button"\, role="navigation"\)\.
  * aria\-label – poskytuje textový popis prvku\, aj keď vizuálne nie je prítomný\.
  * aria\-hidden="true" – označí element\, ktorý má čítačka obrazovky ignorovať\.
  * aria\-expanded="true|false" – informuje\, či je napr\. menu rozbalené\.
  * aria\-live – oznamuje dynamicky meniaci sa obsah \(napr\. chybová hláška\)\.
