# Jazyk CSS

6UI0012 Vývoj webových aplikácií					                          šk\. rok 2026/27

# Čo sú to kaskádové štýly?

* CSS =  _C_  _ascade _  _S_  _tyle _  _S_  _heets_
* Jazyk na tvorbu dizajnu web dokumentov
  * Princíp podobný ako štýly v textových editoroch
* Umožňuje oddeliť obsah a dizajn stránky
* Tutoriál  _[www\.w3schools\.com/css](http://www.w3schools.com/css)_


# Jazyk CSS



* <span style="color:#fe8637">HTML </span> je jazyk na definovanie  <span style="color:#fe8637">štruktúry</span>  stránky\,  <span style="color:#fe8637">CSS</span>  na definovanie  <span style="color:#fe8637">vzhľadu</span>  stránky
* Definovanie vzhľadu pomocou CSS umožňuje
  * Dosiahnutie jednotného vzhľadu celej webovej aplikácie \(viac dokumentov používa rovnaký štýl\)
  * Zjednodušenie správy webovej aplikácie
  * Priradiť rôzne štýly pre rôzne zariadenia \(responzívny dizajn\)
* Štandard jazyka definuje W3C
  * _[https://www\.w3\.org/Style/CSS](https://www.w3.org/Style/CSS)_
  * Každoročné  _snapshots_


# Prepojenie HTML dokumentu a CSS



* Definícia CSS v externom súbore – odporúčaný spôsob
  * Značka  <span style="color:#007700"><link</span>  __ __  <span style="color:#0000cc">rel</span>  <span style="color:#0000cc">=</span>  __"stylesheet"__  __ __  <span style="color:#0000cc">href</span>  <span style="color:#0000cc">=</span>  __"styl\.css"__  <span style="color:#007700">></span>
  * Vkladá sa do sekcie \<head>
* Vloženie CSS priamo do HTML dokumentu
  * <span style="color:#ff0000">Nepoužívať\, ak na to nie je dôvod</span>
  * HTML značka \<style> \(v sekcii \<head>\)
  * Špecifikácia štýlu priamo pri HTML elemente:
* <span style="color:#007700"><p</span>  __ __  <span style="color:#0000cc">style=</span>  __"__  _CSS _  _pravidlá_  __"__  <span style="color:#007700">></span>


# Základné pojmy a syntax jazyka CSS

CSS dokument sa skladá zo zoznamu pravidiel \( _rule\-set_ \)

Príklad:

<span style="color:#8c8c8c"> _     		/\* štýl základného odstavca \*/_ </span>  <span style="color:#8c8c8c"> _		_ </span>  <span style="color:#0033b3">p </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">		  </span>  <span style="color:#174ad4">text\-</span>  <span style="color:#174ad4">align</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">justify</span>  <span style="color:#080808">;</span>  <span style="color:#080808"> 		  </span>  <span style="color:#174ad4">color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">black</span>  <span style="color:#080808">;</span>  <span style="color:#080808">		  </span>  <span style="color:#174ad4">font\-</span>  <span style="color:#174ad4">family</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">arial</span>  <span style="color:#080808">\, </span>  <span style="color:#0033b3">helvetica</span>  <span style="color:#080808">\, </span>  <span style="color:#067d17">sans\-serif</span>  <span style="color:#080808">;</span>  <span style="color:#080808">		\}</span>

Vlastnosť \( _property_ \)

# Združovanie pravidiel

Pravidlo 2 \(rovnaký význam\)

Pravidlo 1

<span style="color:#0033b3">p </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">font\-variant</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">normal</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">font\-</span>  <span style="color:#174ad4">style</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">italic</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">font\-</span>  <span style="color:#174ad4">weight</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">bold</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">font\-</span>  <span style="color:#174ad4">family</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">serif</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">p </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">font</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">normal</span>  <span style="color:#067d17"> </span>  <span style="color:#067d17">italic</span>  <span style="color:#067d17"> </span>  <span style="color:#067d17">bold</span>  <span style="color:#067d17"> </span>  <span style="color:#067d17">serif</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

# Značky a atribúty HTML na podporu CSS



* Slúžia na spojenie štýlov a HTML elementov
  * Nemajú vlastné formátovanie v HTML
* Bloková značka \<div>
* Riadková značka \<span>
* Atribúty class a id


# Základné selektory (1)



* Selektor značky HTML
* Selektor triedy \( _class_ \)
  * Tried môže byť pri jednom elemente aj viac
* HTML kód:  <span style="color:#007700"><p</span>  __ __  <span style="color:#0000cc">class=</span>  __"__  __varovanie__  __"__  <span style="color:#007700">></span>
* Selektor ID \(určuje unikátny HTML element\)
* __		__  __		__ HTML kód:  <span style="color:#007700"><h1</span>  __ __  <span style="color:#0000cc">id=</span>  __"nadpis1"__  <span style="color:#007700">></span>


<span style="color:#0033b3">p </span>  <span style="color:#080808">\{ </span>  <span style="color:#174ad4">border</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">1</span>  <span style="color:#067d17">px </span>  <span style="color:#067d17">solid</span>  <span style="color:#067d17"> </span>  <span style="color:#067d17">black</span>  <span style="color:#067d17"> </span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">p</span>  <span style="color:#080808">\.</span>  <span style="color:#0033b3">varovanie</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{ </span>  <span style="color:#174ad4">color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">red</span>  <span style="color:#067d17"> </span>  <span style="color:#080808">\} </span>

<span style="color:#0033b3">\#nadpis1 </span>  <span style="color:#080808">\{ </span>  <span style="color:#174ad4">color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">green</span>  <span style="color:#067d17"> </span>  <span style="color:#080808">\}   </span>

Všeobecný selektor

<span style="color:#333333">\*</span>  __ \{ __  <span style="color:#008800"> __font\-family__ </span>  <span style="color:#333333">:</span>  __ Arial__  <span style="color:#333333">\,</span>  __ Helvetica__  <span style="color:#333333">\,</span>  __ __  <span style="color:#008800"> __sans\-serif__ </span>  __; \}__

Selektor všeobecnej triedy

<span style="color:#333333">\*</span>  <span style="color:#bb0066"> __\.__ </span>  <span style="color:#bb0066"> __zakladny\_text__ </span>  __ \{ __  <span style="color:#008800"> __font\-size__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#6600ee"> __80__ </span>  <span style="color:#333333">%</span>  __ \}__

Skupinový  selektor

<span style="color:#007700">h1</span>  <span style="color:#333333">\,</span>  __ __  <span style="color:#007700">h2</span>  <span style="color:#333333">\, \.</span>  <span style="color:#007700">modry</span>  __ \{ __  <span style="color:#008800"> __color__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#007020">blue</span>  __;__  __ __  <span style="color:#008800"> __font\-family__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#008800"> __sans\-serif__ </span>  __ \}__

# Potomkové selektory



* Selektor priameho potomka
  * <span style="color:#434343">p > </span>  <span style="color:#434343">strong</span>  <span style="color:#434343"> \{ color : </span>  <span style="color:#434343">red</span>  <span style="color:#434343"> \}</span>
* Selektor ľubovoľného potomka:
  * <span style="color:#434343">blockquote</span>  <span style="color:#434343"> </span>  <span style="color:#434343">em</span>  <span style="color:#434343"> \{ color :\#ff0000 \}</span>
* Selektor priameho nasledujúceho súrodenca
  * <span style="color:#434343">li \+ li \{ </span>  <span style="color:#434343">border</span>  <span style="color:#434343">\-top: 1px </span>  <span style="color:#434343">solid</span>  <span style="color:#434343"> </span>  <span style="color:#434343">black</span>  <span style="color:#434343"> \}</span>
* Selektor ľubovoľného nasledujúceho  súrodenca
  * <span style="color:#434343">li ~ li \{ </span>  <span style="color:#434343">border</span>  <span style="color:#434343">\-top: 1px </span>  <span style="color:#434343">solid</span>  <span style="color:#434343"> </span>  <span style="color:#434343">black</span>  <span style="color:#434343"> \}</span>


# Potomkové CSS selektory – príklady

li li li

ul ul ul li

<span style="color:#ff0000"><</span>  <span style="color:#ff0000">ul</span>  <span style="color:#ff0000">></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">       </span>  <span style="color:#ff0000"> <</span>  <span style="color:#ff0000">ul</span>  <span style="color:#ff0000">></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">            </span>  <span style="color:#ff0000"><</span>  <span style="color:#ff0000">ul</span>  <span style="color:#ff0000">></span>

<span style="color:#333333">              </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">              </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">              </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">            </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">        </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">    </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#007700">\<ul></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">       </span>  <span style="color:#ff0000"> \<ul></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">            </span>  <span style="color:#ff0000">\<ul></span>

<span style="color:#333333">              </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">              </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">              </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">            </span>  <span style="color:#007700">\</ul></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">        </span>  <span style="color:#007700">\</ul></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">    </span>  <span style="color:#007700">\</ul></span>

<span style="color:#007700">\<ul></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">        </span>  <span style="color:#007700">\<ul></span>

<span style="color:#333333">          </span>  <span style="color:#ff0000">\<li>Slovensky\</li></span>

<span style="color:#ff0000">          \<li>Nemecky\</li></span>

<span style="color:#ff0000">          \<li>Anglicky</span>

<span style="color:#333333">            </span>  <span style="color:#007700">\<ul></span>

<span style="color:#333333">             </span>  <span style="color:#ff0000"> \<li>Slovensky\</li></span>

<span style="color:#ff0000">              \<li>Nemecky\</li></span>

<span style="color:#ff0000">              \<li>Anglicky\</li></span>

<span style="color:#333333">            </span>  <span style="color:#007700">\</ul></span>

<span style="color:#333333">         </span>  <span style="color:#ff0000"> \</li></span>

<span style="color:#333333">        </span>  <span style="color:#007700">\</ul></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">    </span>  <span style="color:#007700">\</ul></span>

<span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#007700">  \<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">    </span>  <span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#333333">Anglicky</span>

<span style="color:#333333">        </span>  <span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">     </span>  <span style="color:#ff0000">     \<li>Slovensky\</li></span>

<span style="color:#ff0000">          \<li>Nemecky\</li></span>

<span style="color:#ff0000">          \<li>Anglicky\</li></span>

<span style="color:#333333">        </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">    </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\</li></span>

<span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

# Atribútové selektory



* Selektor sa použije\, ak sú splnené podmienky týkajúce sa atribútov
  * Existencia atribútu pri značke určitého typu
* img\[title\]
  * Existencia atribútu určitej hodnoty
* a\[target="\_blank"\]
  * Atribút začínajúci na nejakú hodnotu
* div\[class|="top"\]
  * Existencia atribútu obsahujúceho určitú hodnotu
* img\[alt~=flower\]
* [Zoznam všetkých selektorov](https://www.w3schools.com/cssref/css_selectors.php)


# Priorita selektorov



* Prednastavené správanie
  * Ak nie je definovaný štýl\, použije sa východzí štýl prehliadača\, napr\. odkazy
* Dedičnosť
  * Ak nie je vlastnosť definovaná\, použije sa od predka \(rodiča\)
  * Niektoré vlastnosti sa nededia \(napr\. border\)
* Bližšie určujúci selektor
  * Napr\. ID selektor má prednosť pred selektorom triedy a ten pred selektorom značky a pod\.
* Zanorenie elementov
  * Prednosť má najbližší štýl k elementu
* Kľúčové slovo \!important
  * Má najvyššiu prioritu\, používať rozumne
* Layers
  * Možnosť ľubovoľne určovať priority


[https://www\.w3schools\.com/css/css\_specificity\.asp](https://www.w3schools.com/css/css_specificity.asp)

[https://css\-tricks\.com/css\-cascade\-layers/](https://css-tricks.com/css-cascade-layers/)

# Priorita CSS selektorov

<span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700"> </span> class="nieco" <span style="color:#007700">></span>

<span style="color:#007700">  <li </span> class="trieda" <span style="color:#007700">></span>  <span style="color:#ff0000">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\<li></span>  <span style="color:#ff00ff">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\<li></span>  <span style="color:#ff00ff">Anglicky</span>

<span style="color:#333333">    </span>  <span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700"> </span> class="trieda" <span style="color:#007700">></span>

<span style="color:#0000ff">      </span>  <span style="color:#007700"><li </span> class="trieda" <span style="color:#007700">></span>  <span style="color:#ff0000">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#0000ff">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\<li></span>  <span style="color:#0000ff">Anglicky</span>

<span style="color:#333333">        </span>  <span style="color:#007700"><</span>  <span style="color:#007700">ul</span>  <span style="color:#007700"> </span> id="nieco" <span style="color:#007700">></span>

<span style="color:#333333">          </span>  <span style="color:#007700"><li </span> class="nieco" <span style="color:#007700">></span>  <span style="color:#ff00ff">Slovensky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#ff9900">Nemecky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">          </span>  <span style="color:#007700">\<li></span>  <span style="color:#ff9900">Anglicky</span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">        </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">      </span>  <span style="color:#007700">\</li></span>

<span style="color:#333333">    </span>  <span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#333333">  </span>  <span style="color:#007700">\</li></span>

<span style="color:#007700"></</span>  <span style="color:#007700">ul</span>  <span style="color:#007700">></span>

<span style="color:#ff9900">\#nieco\, </span>  <span style="color:#ff9900">ul</span>  <span style="color:#ff9900"> li </span>  <span style="color:#ff9900">ul</span>  <span style="color:#ff9900"> li </span>  <span style="color:#ff9900">ul</span>  <span style="color:#ff9900"> </span>  <span style="color:#ff9900">\{</span>

<span style="color:#ff9900">  color: orange \}</span>

<span style="color:#ff0000">li\.trieda</span>  <span style="color:#ff0000"> </span>  <span style="color:#ff0000">\{</span>

<span style="color:#ff0000">  color: red;  </span>

<span style="color:#ff0000">\}</span>

<span style="color:#ff00ff">\.</span>  <span style="color:#ff00ff">nieco</span>  <span style="color:#ff00ff"> \{</span>

<span style="color:#ff00ff">  color: magenta;</span>

<span style="color:#ff00ff">\}</span>

<span style="color:#0000ff">\.trieda</span>  <span style="color:#0000ff"> \{</span>

<span style="color:#0000ff">  color: blue;</span>

<span style="color:#0000ff">\}</span>

# Priorita CSS pravidiel

__ __  <span style="color:#7f0055"><</span>  <span style="color:#7f0055"> __span__ </span>  __ __  __class__  __=__  <span style="color:#2a00ff">"font"</span>  <span style="color:#7f0055">></span>  __Text__  <span style="color:#7f0055"></</span>  <span style="color:#7f0055"> __span__ </span>  <span style="color:#7f0055">></span>

__\.font \{__

__   __  <span style="color:#7f0055"> __color__ </span>  __: __  __red__  __;__

__\}__

__\.font \{__

__   __  <span style="color:#7f0055"> __color__ </span>  __: __  __orange__  __;__

__\}__

__\.font \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __red__  __ __

__\}__

__span__  __ \{__

__   __  <span style="color:#7f0055"> __color__ </span>  __: __  __orange__  __;__

__\}__

__\.font \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __red__  __;__

__\}__

<span style="color:#7f0055"> __span__ </span>  __\.font__  __ \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __orange__  __;__

__\}__

<span style="color:#7f0055"> __body__ </span>  __ __  <span style="color:#7f0055"> __span__ </span>  __\.font__  __ \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __green__  __;__

__\}__

# Priorita CSS pravidiel – direktíva !important

__ __  <span style="color:#7f0055"><</span>  <span style="color:#7f0055"> __span__ </span>  __ __  __class__  __=__  <span style="color:#2a00ff">"font"</span>  <span style="color:#2a00ff">      </span>  __ __  __style__  __=__  <span style="color:#2a00ff">"</span>  <span style="color:#7f0055"> __color__ </span>  <span style="color:#2a00ff">: </span>  <span style="color:#2a00ff">yellow</span>  <span style="color:#2a00ff">"</span>  <span style="color:#7f0055">></span>

__  Text__

<span style="color:#7f0055"></</span>  <span style="color:#7f0055"> __span__ </span>  <span style="color:#7f0055">></span>

__ __  <span style="color:#7f0055"><</span>  <span style="color:#7f0055"> __span__ </span>  __ __  __class__  __=__  <span style="color:#2a00ff">"font"</span>  <span style="color:#2a00ff">      </span>  __ __  __style__  __=__  <span style="color:#2a00ff">"</span>  <span style="color:#7f0055"> __color__ </span>  <span style="color:#2a00ff">: </span>  <span style="color:#2a00ff">yellow</span>  <span style="color:#2a00ff">"</span>  <span style="color:#7f0055">></span>

__  Text__

<span style="color:#7f0055"></</span>  <span style="color:#7f0055"> __span__ </span>  <span style="color:#7f0055">></span>

__ __  <span style="color:#7f0055"><</span>  <span style="color:#7f0055"> __span__ </span>  __ __  __class__  __=__  <span style="color:#2a00ff">"font"</span>  <span style="color:#2a00ff">      </span>  __ __  __style__  __=__  <span style="color:#2a00ff">"</span>  <span style="color:#7f0055"> __color__ </span>  <span style="color:#2a00ff">: </span>  <span style="color:#2a00ff">blue</span>  <span style="color:#2a00ff"> </span>  <span style="color:#2a00ff">\!important</span>  <span style="color:#2a00ff">"</span>  <span style="color:#7f0055">></span>

__  Text__

<span style="color:#7f0055"></</span>  <span style="color:#7f0055"> __span__ </span>  <span style="color:#7f0055">></span>

__\.font \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __red__  __ __  <span style="color:#7f0055"> __\!__ </span>  <span style="color:#7f0055"> __important__ </span>  __;__

__\}__

<span style="color:#7f0055"> __span__ </span>  __\.font__  __ \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __orange__  __ __  <span style="color:#7f0055"> __\!__ </span>  <span style="color:#7f0055"> __important__ </span>  __;__

__\}__

__\.font \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __red__  __ __  <span style="color:#7f0055"> __\!__ </span>  <span style="color:#7f0055"> __important__ </span>  __; __

__\}__

<span style="color:#7f0055"> __span__ </span>  __\.font__  __ \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __orange__  __ __  <span style="color:#7f0055"> __\!__ </span>  <span style="color:#7f0055"> __important__ </span>  __;__

__\}__

__\.font \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __red__  __ __  <span style="color:#7f0055"> __\!__ </span>  <span style="color:#7f0055"> __important__ </span>  __;__

__\}__

<span style="color:#7f0055"> __span__ </span>  __\.font__  __ \{__

__  __  <span style="color:#7f0055"> __color__ </span>  __: __  __green__  __;__

__\}__

# Otázka 1

[https://www\.fri\.uniza\.sk/cms/quizzes/questions/qr/6](https://www.fri.uniza.sk/cms/quizzes/questions/qr/6)

# Základné typy CSS vlastností



* Formátovanie riadkových elementov
  * Fonty
* Formátovanie blokových elementov
  * Veľkosť\, pozícia\, box model\, okraje
* Farby a pozadie elementov
  * Priehľadnosť
* Efekty pre používateľské rozhranie
  * Animácie\, transformácie a filtre
* Ostatné elementy
  * Zoznamy\, tabuľky\, obrázky\, odkazy


# Definovanie farieb



* Zápis menom farby\, napr\. red
  * Zoznam 140 pomenovaných farieb  _[www\.w3schools\.com/colors/colors\_names\.asp](http://www.w3schools.com/colors/colors_names.asp)_
* Hexadecimálny zápis RGB \(\#rrggbb\) – napr\. \#ff0000 alebo \#FF0000
* Na definovanie farby textu\, rámu a pod\. sa používa vlastnosť color
  * Pre farbu pozadia sa používa vlastnosť background\-color
* Je možné použiť aj iné farebné schémy \(HSL\, HSLA\)
* Kľúčové slová: transparent\, currentcolor\, inherit
* Vlastnosť opacity definuje priehľadnosť elementu


<span style="color:#0033b3">img</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">opacity</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">0\.5</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

---

Otázka: Je farba #FFFFFF biela, alebo čierna?

# Jednotky rozmerov v CSS



* Relatívne jednotky
  * Vzťahujú sa k nejakej inej veľkosti \(rodičovského elementu\, veľkosti fontu\, \.\.\.\)
  * Jednotky em\, ex\, ch\, rem\, vw\, vh\, vmin\, vmax\, %
* Absolútne jednotky
  * Jednotky cm\, mm\, in\, pt\, px\*\, pc
  * 1px = 1/96 in\, 1pt = 1/72 in\, 1pc = 12pt
  * Neodporúča sa používať ich na definovanie rozmerov na displeji\, ale hodia sa napr\. pre tlač
* Poznámky:
  * Zoznam jednotiek s popisom [https://www\.w3schools\.com/css/css\_units\.asp](https://www.w3schools.com/css/css_units.asp)
  * Medzera <span style="color:#fe8637"> nesmie byť</span>  medzi hodnotou a jednotkou \(pri hodnote 0 sa jednotka môže vynechať\)
  * Hodnoty môžu byť aj záporné


\*px sú relatívne pre dané zobrazovacie jednotky

---

http://www.w3schools.com/cssref/css_units.asp 
https://www.w3.org/Style/Examples/007/units.en.html   

# Box model



* Vlastnosti padding\, border\, margin
  * Je možné nastaviť každú zo 4 strán zvlášť \(top\, bottom\, left\, right\)\, napr\. border\-bottom
  * Alebo definovať len niektoré hodnoty:  1 \(tblr\)\, 2 \(tb\,lr\)\, 3 \(t\,lr\,b\)
* Vlastnosti height a width
  * Kombinácia s max a min\, napr\. min\-height


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_2.png)

# Písmo (1)



* Typy písma
  * Písmo typu  _serif _ \(napr\. Times New Roman\)
  * Písmo typu  _sans\-serif_  \(napr\. Arial\)
* Písmo typu monospace \(napr\. Courier New\)
  * Môže byť  _serif _ aj  _sans\-serif_
* <span style="color:#fe8637">Pozor</span>  <span style="color:#fe8637">\!</span>  Font\, ktorý máte v počítači\, nemusia mať iní používatelia
* Pri definovaní\, ktorý font sa má použiť\, je vhodné určiť viac možností


# Písmo (2)



* Základné charakteristiky písma:
  * Typ písma: font\-family \(viac fontov súčasne\)
  * Sklon písma \(kurzíva\): font\-style
  * Hrúbka písma \(tučné písmo\): font\-weight
  * Veľkosť písma: font\-size \(najčastejšie v px\, em a %\)
  * Kapitálky: font\-variant
  * Združená vlastnosť font


# Písmo – príklady

Definícia štýlu odstavca\, nastavenie vlastností písma

<span style="color:#007700">p</span>  <span style="color:#bb0066"> __\.poznamka__ </span>  <span style="color:#bb0066"> __ __ </span>  __ \{__

__  __  <span style="color:#008800"> __font\-family__ </span>  <span style="color:#333333">:</span>  __ Arial__  <span style="color:#333333">\,</span>  __ Helvetica__  <span style="color:#333333">\,</span>  __ __  <span style="color:#008800"> __sans\-serif__ </span>  __;__  __  __  <span style="color:#008800"> __font\-size__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#6600ee"> __90__ </span>  <span style="color:#333333">%</span>  __;__  __  __  <span style="color:#008800"> __color__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#008800"> __gray__ </span>  __;__  __  __  <span style="color:#008800"> __font\-style__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#008800"> __italic__ </span>  __;__  __  __  <span style="color:#008800"> __font\-weight__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#008800"> __normal__ </span>  __;__  __\}__

V odstavci budú použité malé kapitálky \(prvé písmeno väčšie ako ostatné\)

<span style="color:#007700">p</span>  <span style="color:#bb0066"> __\.male__ </span>  <span style="color:#bb0066"> __ __ </span>  __\{__  __    __  __  __  __ __  <span style="color:#008800"> __font\-variant__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#008800"> __small\-caps__ </span>  __;__  __     __  __\}__

# Ikony



* Ikona môže byť obrázok\, pozadie alebo ako symbol \( _glyph_  _\)_
* Na internete existuje viacero kolekcií ikon\, ktoré je možné voľne používať
* Sú vektorové \(dajú sa zväčšiť bez straty kvality\)
* Príklady:
  * _Font_   _Awesome_  –  _[fontawesome\.io](http://fontawesome.io/)_
  * _Bootstrap_  ikony – [icons\.getbootstrap\.com](https://icons.getbootstrap.com/)  _ _
  * _Google_  ikony \-  _[design\.google\.com/](https://design.google.com/icons/)_  _[icons](https://design.google.com/icons/)_


# Ikony – príklad

Zobrazenie ikon zo sady  _fontawesome_

<span style="color:#080808"><\!DOCTYPE </span>  <span style="color:#174ad4">html</span>  <span style="color:#080808">></span>  <span style="color:#080808"><</span>  <span style="color:#0033b3">html</span>  <span style="color:#080808">></span>  <span style="color:#080808"><</span>  <span style="color:#0033b3">head</span>  <span style="color:#080808">></span>  <span style="color:#080808">  </span>  <span style="color:#080808">  <</span>  <span style="color:#0033b3">link</span>  <span style="color:#0033b3"> </span>  <span style="color:#174ad4">href</span>  <span style="color:#067d17">="https://opensource\.keycdn\.com/fontawesome/4\.6\.3/font\-awesome\.min\.css" </span>  <span style="color:#174ad4">rel</span>  <span style="color:#067d17">="</span>  <span style="color:#067d17">stylesheet</span>  <span style="color:#067d17">"</span>  <span style="color:#080808">></span>  <span style="color:#080808"></</span>  <span style="color:#0033b3">head</span>  <span style="color:#080808">></span>  <span style="color:#080808"><</span>  <span style="color:#0033b3">body</span>  <span style="color:#080808">></span>  <span style="color:#080808">    <</span>  <span style="color:#0033b3">i </span>  <span style="color:#174ad4">class</span>  <span style="color:#067d17">="fa fa\-</span>  <span style="color:#067d17">camera</span>  <span style="color:#067d17">"</span>  <span style="color:#080808">></</span>  <span style="color:#0033b3">i</span>  <span style="color:#080808">></span>  <span style="color:#080808">    <</span>  <span style="color:#0033b3">i </span>  <span style="color:#174ad4">class</span>  <span style="color:#067d17">="fa fa\-</span>  <span style="color:#067d17">bicycle</span>  <span style="color:#067d17"> fa\-2x"</span>  <span style="color:#080808">></</span>  <span style="color:#0033b3">i</span>  <span style="color:#080808">></span>  <span style="color:#080808">    <</span>  <span style="color:#0033b3">i </span>  <span style="color:#174ad4">class</span>  <span style="color:#067d17">="fa fa\-</span>  <span style="color:#067d17">spinner</span>  <span style="color:#067d17"> fa\-</span>  <span style="color:#067d17">pulse</span>  <span style="color:#067d17"> fa\-3x fa\-</span>  <span style="color:#067d17">fw</span>  <span style="color:#067d17">"</span>  <span style="color:#080808">></</span>  <span style="color:#0033b3">i</span>  <span style="color:#080808">></span>  <span style="color:#080808">    <</span>  <span style="color:#0033b3">span</span>  <span style="color:#0033b3"> </span>  <span style="color:#174ad4">class</span>  <span style="color:#067d17">="sr\-</span>  <span style="color:#067d17">only</span>  <span style="color:#067d17">"</span>  <span style="color:#080808">></span>  <span style="color:#080808">Loading</span>  <span style="color:#080808">\.\.\.</</span>  <span style="color:#0033b3">span</span>  <span style="color:#080808">></span>

<span style="color:#080808"></</span>  <span style="color:#0033b3">body</span>  <span style="color:#080808">></span>  <span style="color:#080808"></</span>  <span style="color:#0033b3">html</span>  <span style="color:#080808">></span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_3.png)

# Otázka 2

[https://www\.fri\.uniza\.sk/cms/quizzes/questions/qr/7](https://www.fri.uniza.sk/cms/quizzes/questions/qr/7)

# Text (1)



* Vodorovné zarovnanie
  * Zarovnanie text v bloku \(text\-align\)
  * Hodnoty left\, right\, center\, justify
* Výška riadku
  * Definuje riadkovanie textu \(line\-height\)
  * Vertikálna pozícia v rámci riadku \(vertical\-align\)
* Odsadenie prvého riadku
  * Medzera prvého riadku od ľavého okraja \(text\-indent\)
* Transformácia znakov
  * Celý text malými\, veľkými písmenami alebo kapitálkami \(text\-transform\)


# Text (2)



* Dekorácia textu
  * Definovanie podčiarknutia nad\, pod a cez text
  * Napr\. pri odkazoch na zrušenie podčiarknutia \(text\-decoration\)
* Textové efekty a medzery
  * Správanie sa medzier a iných white\-space znakov \(white\-space\)
  * Pretekanie textu \(text\-overflow\)
  * Otočenie textu\, napr\. vertikálne písmo \(writing\-mode\)


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_4.png)

# Text – príklady

Odkazy bez podčiarknutia

Odstavec zarovnaný do bloku\, prvý riadok odsadený 5%\, riadkovanie 1\.5

<span style="color:#0033b3">a </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">text\-</span>  <span style="color:#174ad4">decoration</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">none</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">p </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">text\-</span>  <span style="color:#174ad4">align</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">justify</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">text\-</span>  <span style="color:#174ad4">indent</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">5</span>  <span style="color:#080808">%;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">line\-height</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">1\.5</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

# Horizontálne zarovnanie riadkových elementov

Formátovanie sa netýka iba textu\, ale aj všetkých potomkov

Blokové elementy toto zarovnanie ignorujú\, ale nie ich obsah

Táto vlastnosť sa dedí\, ak nie je určené inak\.

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_5.png)

# Vertikálne zarovnanie riadkových elementov

Formátovanie sa netýka iba textu\, ale aj všetkých potomkov

Musí byť zadané v predkovi\, ktorý ma zadanú \(určenú\) výšku

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_6.png)

# Rámčeky



* Umožňuje vykresliť rámček okolo prvku – združená vlastnosť border
  * Každá strana môže mať inú šírku \(border\-width\)\, farbu \(border\-color\) a štýl \(border\-style\)
  * Nemusia byť definované všetky strany rámčeka
  * Rámček môžu byť zaoblené \(border\-radius\)
  * Rámček môže byť tvorený aj obrázkom \(border\-image\)
  * Definovanie vonkajšieho orámovania okolo rámčeka – vlastnosť outline
* Ukážka typov rámčekov: [https://www\.w3schools\.com/css/css\_border\.asp](https://www.w3schools.com/css/css_border.asp)


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_7.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_8.png)

# Pozadie



* Pozadie môže byť definované farbou\, alebo obrázkom
* Farba \(vlastnosť background\-color\)
  * V súčasnosti zriedka používané na celú stránku
  * Je možné definovať aj pozadie jednotlivých elementov \(napr\. odstavec\, alebo tabuľka\)
* Obrázok
  * Často definovaný v CSS najmä\, ak je súčasťou dizajnu stránky
  * Môže sa uviesť aj viac obrázkov
  * Vlastnosti:
    * background\-image\, background\-size\, background\-repeat\, background\-position\, background\-attachment\, background\-clip\, background\-origin


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_9.png)

# Obrázok ako pozadie – príklad

Umiestnenie obrázku vpravo hore na stránke\, pri posúvaní posuvníkom zostane na mieste

<span style="color:#0033b3">body </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background</span>  <span style="color:#174ad4">\-image</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">url</span>  <span style="color:#080808">\(</span>  <span style="color:#067d17">"obrazok\.png"</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background\-repeat</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">no\-</span>  <span style="color:#067d17">repeat</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background\-position</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">right</span>  <span style="color:#067d17"> top</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background\-attachment</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">fixed</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

# Tabuľky



* Definuje spôsob zobrazenia tabuliek
  * Rámik okolo tabuľky a buniek – vlastnosť border \(aj špeciálne rámiky len z jednej strany\)
  * Rozmery tabuľky\, resp\. buniek – vlastnosti width a height
  * Horizontálne a vertikálne zarovnanie – vlastnosti text\-align a vertical\-align
  * Odsadenie textu od okrajov buniek – vlastnosť padding


# Tabuľky – príklad

Tabuľka s horizontálnymi čiarami medzi riadkami

<span style="color:#0033b3">table </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">border\-collapse</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">collapse</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">width</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">100</span>  <span style="color:#080808">%;</span>  <span style="color:#080808">\}</span>  <span style="color:#0033b3">th</span>  <span style="color:#080808">\, </span>  <span style="color:#0033b3">td</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">padding</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">10</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">text\-</span>  <span style="color:#174ad4">align</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">center</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">border\-bottom</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">1</span>  <span style="color:#067d17">px </span>  <span style="color:#067d17">solid</span>  <span style="color:#067d17"> </span>  <span style="color:#067d17">black</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_10.png)

# Zobrazovanie prvkov



* Vlastnosť display ovplyvňuje spôsob zobrazenia elementov na stránke
* Predvolené správanie:
  * Blokové značky – hodnota block
  * Riadkové značky – hodnota inline
  * Zmenou vlastnosti display sa zmení aj spôsob zobrazenia elementov
* Skrývanie elementov \(často používané v skriptoch\)
  * Nastavením display: none
  * Vlastnosť visibility \(hidden\, visible a collapse\)
  * Rozdiely


# Zobrazenie prvkov – príklad

Nadpisy nebudú blokové\, text bude pokračovať vedľa nich\, nie pod nimi

Blok sa nebude zobrazovať

<span style="color:#0033b3">h1</span>  <span style="color:#080808">\, </span>  <span style="color:#0033b3">h2</span>  <span style="color:#080808">\, </span>  <span style="color:#0033b3">h3 </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">display</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">inline</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">div</span>  <span style="color:#080808">\.</span>  <span style="color:#0033b3">skryty</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">display</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">none</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

# Pozícia prvkov



* Definuje spôsob\, ako a kde sa prvok na stránke zobrazí – vlastnosť position
* 4 základné hodnoty
  * static \(default\) – zobrazený tam\, kde je\, jeho pozícia sa nedá ovplyvniť
  * relative – element je posunutý relatívne od svojej pozície\. Miesto zostáva obsadené a element sa vykresľuje inde
  * fixed – element sa umiestňuje  na absolútnej polohe\, pri posúvaní stránky sa nemení
  * absolute – umiestňuje sa absolútne v rámci najbližšieho predka\, ktorý má nastavenú position inú ako static\. Pokiaľ taký nie je\, ako predok sa použije body
* Pozíciu určujú vlastnosti: top\, left\, right\, bottom
* [Príklad na w3schools](https://www.w3schools.com/cssref/playit.php?filename=playcss_position&preval=static)


# Pozícia prvkov – príklad

Príklad – ukotvenie bloku v pravom dolnom rohu:

Príklad: [Umiestnenie textu doprostred obrázku](https://www.w3schools.com/css/tryit.asp?filename=trycss_image_text_center)

<span style="color:#0033b3">div</span>  <span style="color:#080808">\.</span>  <span style="color:#0033b3">fixed</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">position</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">fixed</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">bottom</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">0</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">right</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">0</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">width</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">300</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">border</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">3</span>  <span style="color:#067d17">px </span>  <span style="color:#067d17">solid</span>  <span style="color:#067d17"> </span>  <span style="color:#0033b3">\#73AD21</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

# Vrstvy



* Umožňujú prekrývanie jednotlivých elementov na stránke
  * Niečo ako zásobník
* Vlastnosť z\-index
  * Hodnota určuje vrstvu\, do ktorej sa prvok vloží \(kladná aj záporná\)
* Vrstvy sa dajú aplikovať len na prvky umiestnené pomocou absolute\, relative\, fixed alebo sticky


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_11.png)

https://spyrestudios\.com/what\-is\-z\-index\-and\-how\-does\-it\-work/

# Orezanie obsahu



* Vlastnosť overflow určuje\, ako sa bude zobrazovať obsah\, ktorý presahuje
  * Len\, ak je obsah väčší ako element\, v ktorom sa nachádza
* Základné hodnoty
  * visible
  * hidden
  * scroll
  * auto
* [Príklad na w3schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_overflow_auto)


# CSS transformácie



* 2D transformácie – metódy  translate\(\)\, scale\(\)\, rotate\(\)\, skew\(\)
  * Umožňujú posunúť\, otočiť\, zmeniť rozmery\, zošikmiť element
  * V každej osi \(X\, Y\) zvlášť
  * Metóda matrix\(\) kombinuje všetky 2D transformácie dokopy
* 3D transformácie
  * Podobné operácie ako 2D\, ale pridávajú aj os Z
  * Zobrazenie elementu v perspektíve


![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_12.png)

# CSS transformácie – príklad

<span style="color:#0033b3">div </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">width</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">300</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">height</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">100</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background</span>  <span style="color:#174ad4">\-color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">lightblue</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">border</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">1</span>  <span style="color:#067d17">px </span>  <span style="color:#067d17">solid</span>  <span style="color:#067d17"> </span>  <span style="color:#067d17">black</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>  <span style="color:#0033b3">div\#myDiv1 </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">transform</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">matrix</span>  <span style="color:#080808">\(</span>  <span style="color:#1750eb">1</span>  <span style="color:#080808">\, \-</span>  <span style="color:#1750eb">0\.3</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">0</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">1</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">0</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">0</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">\}</span>  <span style="color:#0033b3">div\#myDiv2 </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">transform</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">matrix</span>  <span style="color:#080808">\(</span>  <span style="color:#1750eb">1</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">0</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">0\.5</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">1</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">150</span>  <span style="color:#080808">\, </span>  <span style="color:#1750eb">0</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">\}</span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_13.png)

# CSS prechody



* Umožňujú plynulú zmenu nejakej CSS vlastnosti
  * Je nutné určiť\, akú vlastnosť chceme meniť a trvanie efektu
* Efekt začne\, keď sa príslušná CSS vlastnosť má zmeniť
  * Často sa viaže napr\. na hover udalosť
* Je možné zmeniť aj viac vlastností súčasne
  * Dá sa prepojiť sa aj s transformáciami
* Takisto spôsob zmeny hodnoty v čase \(niekoľko možností\)
  * Lineárny\, pomalý štart\, pomalý koniec\, beziérova krivka


# CSS prechody – príklad

<span style="color:#0033b3">div </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">width</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">100</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">height</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">100</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">lightblue</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">transition</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">width</span>  <span style="color:#067d17"> </span>  <span style="color:#1750eb">2</span>  <span style="color:#067d17">s</span>  <span style="color:#080808">\, </span>  <span style="color:#067d17">height</span>  <span style="color:#067d17"> </span>  <span style="color:#1750eb">2</span>  <span style="color:#067d17">s</span>  <span style="color:#080808">\, </span>  <span style="color:#0033b3">transform</span>  <span style="color:#0033b3"> </span>  <span style="color:#1750eb">2</span>  <span style="color:#067d17">s</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>  <span style="color:#0033b3">div</span>  <span style="color:#080808">:</span>  <span style="color:#0033b3">hover</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">width</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">300</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">height</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">300</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">transform</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">rotate</span>  <span style="color:#080808">\(</span>  <span style="color:#1750eb">180</span>  <span style="color:#067d17">deg</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">\}</span>

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_14.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_15.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_16.png)

![](img%5CPredn%C3%A1%C5%A1ka%20VAII%2002%20-%20CSS_17.png)

[https://www\.w3schools\.com/css/tryit\.asp?filename=trycss3\_transition\_transform](https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_transform)

# CSS animácie



* CSS animácie sú určené na oživenie stránky bez nutnosti použitia JavaScriptu
  * Zmena jednej alebo viacerých CSS vlastností\, aj opakovane
  * Plne podporované všetkými prehliadačmi
* Animácia sa definuje pravidlom @keyframes
  * Určí sa východzí a cieľový stav CSS jednej alebo viacerých vlastností  \(from\{\} a to\{\}\)
  * Animácia sa napojí na element
  * Určia sa jej vlastnosti: oneskorenie \(animation\-delay\)\, trvanie \(animation\-duration\) a spôsob zmeny v čase \(animation\-timing\-function\)\, počet opakovaní \(animation\-iteration\-count\)\, smer prehrávania \(animation\-direction\)


# Animácie – príklad

<span style="color:#0033b3">div </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">width</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">100</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">height</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">100</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background</span>  <span style="color:#174ad4">\-color</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">red</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">position</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">relative</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">animation\-name</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">example</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">animation\-duration</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">4</span>  <span style="color:#067d17">s</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">animation\-iteration\-count</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">2</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">animation\-direction</span>  <span style="color:#080808">: </span>  <span style="color:#067d17">alternate</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>  <span style="color:#0033b3">@keyframes </span>  <span style="color:#0033b3">example</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">0%   </span>  <span style="color:#080808">\{</span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">:</span>  <span style="color:#067d17">red</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">left</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">0</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">top</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">0</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;\}</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">25%  </span>  <span style="color:#080808">\{</span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">:</span>  <span style="color:#067d17">yellow</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">left</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">200</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">top</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">0</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;\}</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">50%  </span>  <span style="color:#080808">\{</span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">:</span>  <span style="color:#067d17">blue</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">left</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">200</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">top</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">200</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;\}</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">75%  </span>  <span style="color:#080808">\{</span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">:</span>  <span style="color:#067d17">green</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">left</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">0</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">top</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">200</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;\}</span>  <span style="color:#080808">    </span>  <span style="color:#0033b3">100% </span>  <span style="color:#080808">\{</span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">:</span>  <span style="color:#067d17">red</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">left</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">0</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">; </span>  <span style="color:#174ad4">top</span>  <span style="color:#080808">:</span>  <span style="color:#1750eb">0</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;\}</span>  <span style="color:#080808">\}</span>

[https://www\.w3schools\.com/css/tryit\.asp?filename=trycss3\_animation\_direction](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation_direction)

# CSS premenné



* Umožňujú definovať často používané hodnoty
* Sprehľadňujú CSS štýly\, ľahká zmena na jednom mieste
* Veľmi často sa používajú na nastavenie farieb
  * Ale aj iné použitie – nastavenie veľkostí\, okrajov\, názvov fontov a pod\.
* CSS premenné môžu mať dva druhy platnosti \(angl\.  _scope_ \):
  * Globálne \(dostupné v celom CSS štýle\)
  * Lokálne \(platné len v selektore\, kde sú definované\)
* Lokálne premenné s rovnakým menom prepisujú globálne


# CSS premenné – syntax



* Definícia globálnej premennej \(:root selektor predstavuje hlavný element dokumentu\):
  * Lokálna premenná sa definuje rovnako\, len vo vnútri pravidla\, kde sa bude používať
* Použitie premenných:


<span style="color:#080808">:</span>  <span style="color:#0033b3">root</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">\-\-</span>  <span style="color:#174ad4">blue</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">\#6495ed</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">\-\-</span>  <span style="color:#174ad4">white</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">\#faf0e6</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">body </span>  <span style="color:#080808">\{ </span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background\-color</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">blue</span>  <span style="color:#080808">\); </span>  <span style="color:#080808">\}</span>

# CSS premenné – príklad

<span style="color:#080808">:</span>  <span style="color:#0033b3">root</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">\-\-</span>  <span style="color:#174ad4">blue</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">\#1e90ff</span>  <span style="color:#080808">;</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">\-\-</span>  <span style="color:#174ad4">white</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">\#ffffff</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>  <span style="color:#0033b3">body </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background</span>  <span style="color:#174ad4">\-color</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">blue</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">\}</span>  <span style="color:#0033b3">h2 </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">border\-bottom</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">2</span>  <span style="color:#067d17">px </span>  <span style="color:#067d17">solid</span>  <span style="color:#067d17"> </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">blue</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">\}</span>  <span style="color:#080808">\.</span>  <span style="color:#0033b3">container</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">color</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">blue</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">background</span>  <span style="color:#174ad4">\-color</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">white</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">padding</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">15</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

<span style="color:#0033b3">button</span>  <span style="color:#0033b3"> </span>  <span style="color:#080808">\{</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">\-\-</span>  <span style="color:#174ad4">blue</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">\#0000ff </span> /\* prepíše globálnu premennú \*/ <span style="color:#8c8c8c"> _    _ </span>  <span style="color:#174ad4">background</span>  <span style="color:#174ad4">\-color</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">white</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">color</span>  <span style="color:#080808">: </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">blue</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">border</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">1</span>  <span style="color:#067d17">px </span>  <span style="color:#067d17">solid</span>  <span style="color:#067d17"> </span>  <span style="color:#0033b3">var</span>  <span style="color:#080808">\(</span>  <span style="color:#0033b3">\-\-</span>  <span style="color:#0033b3">blue</span>  <span style="color:#080808">\);</span>  <span style="color:#080808">    </span>  <span style="color:#174ad4">padding</span>  <span style="color:#080808">: </span>  <span style="color:#1750eb">5</span>  <span style="color:#067d17">px</span>  <span style="color:#080808">;</span>  <span style="color:#080808">\}</span>

# Pseudotriedy



* Reprezentujú špeciálny stav elementu
* Pseudotriedy :hover\, :active\, :focus najmä v spojení so značkou \<a>
  * :hover sa často používa aj s inými elementami\, nielen \<a>
* Príklady:
  * a:link \{ color: red \}
  * a:visited \{ color: fuchsia \}
  * a:hover \{ color: navy \}
  * a:active \{ color: blue \}
* Pseudotriedy :first\-child\, :nth\-child\(n\)\, :not\(selector\)
* Zoznam všetkých pseudotried  _[www\.w3schools\.com/css/css\_pseudo\_classes\.asp](http://www.w3schools.com/css/css_pseudo_classes.asp)_


# Pseudoelementy



* Umožňujú definovať štýl pre špecifickú časť elementu
* Zmena syntaxe oproti CSS2 \(dve dvojbodky\)
  * Ale platí aj stará syntax s jednou dvojbodkou
* Použitie:
  * Prvé písmeno v slove ::first\-letter
  * Prvý riadok v odstavci ::first\-line
  * Automatické vloženie obsahu pred element ::before
  * Automatické vloženie obsahu za element ::after
  * Definovanie vzhľadu výberu \(napr\. vybraný text myšou\) ::selection


# Pseudoelementy – príklady

Text pred každým odstavcom s triedou upozornenie

<span style="color:#007700">p\.upozornenie</span>  <span style="color:#555555"> __::__ </span>  <span style="color:#555555"> __before__ </span>  __ \{__  __     __  __  __  <span style="color:#008800"> __content__ </span>  <span style="color:#333333">:</span>  __ __  __"Upozornenie: "__  __;__  __    __  __ __  __\}__

Štýl výberu \(pri kopírovaní do schránky\)

<span style="color:#555555"> __::__ </span>  <span style="color:#555555"> __selection__ </span>  __ \{__  __       __  <span style="color:#008800"> __color__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#007020">red</span>  __;__  __       __  <span style="color:#008800"> __background__ </span>  <span style="color:#333333">:</span>  __ __  <span style="color:#007020">yellow</span>  __;__  __     \}__



