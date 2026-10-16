# Princípy a aplikácie neurónových sietí 

Ivan Cimrák, Peter Tarábek, Dominika Petríková, Darina Narová 

2026 

## Ako to bude prebiehať 

- Prednášky – cvičenia, materiály pred prednáškou – PDF, materiály pred cvičením – na MSTeams 

- Hodnotenie: 

   - 5b Python kurz 

   - 20b 4 x malé online testy na Moodli (alebo offline) 

   - 20b Challenge solving 

   - 5b Prezentácia projektu 

   - 50b Skúška – 30b praktická časť a 20b ústna časť 

## AI vs ML vs DL 

Čo je to AI? 

## AI vs ML vs DL 

Čo je to AI? 

- Slovník Merriam-Webster: 

artificial intelligence (noun) : the capability of computer systems or algorithms to imitate intelligent human behavior 

## AI vs ML vs DL 

|**Človek**<br>**píše pravi**|**dlá**<br>**Počítač**<br>**nasleduje pravidlá**<br>→<br>→|**Odpoveď**|
|---|---|---|
|**Príklad**|**Pravidlo (napísané človekom)**|**Funguje to?**|
|Termostat|AK teplota < 18°C TAK kúrenie ON|**Áno - jednoduché, úplné**|
|Rýchlostná kamera|AK rýchlosť > 130 km/h TAK vydaj pokutu|**Áno - jasná hranica**|
|Spamový filter|AK „lottery" AND „click here" AND Unknown → SPAM|**Spočiatku - potom sa spameri**<br>**prispôsobili**|
|Detekcia podvodu|AK suma > 5 000 € AND zahraničná AND noc → označ|**Veľa hraničných prípadov**|
|Rozpoznávanie tváre|AK oči sú… A nos je… A vzdialenosť medzi…|**Nemožné napísať**|




![](img/PANS-prednáška1.pdf-0005-02.png)


## AI vs ML vs DL 

> **Príklady** → **ML alebo DL** →→ **Vzory algoritmus (pravidlá) (vstup + odpoveď) Bežný spôsob Spôsob ML** Píšeš pravidlá Poskytneš príklady (features and labels) Počítač nasleduje pravidlá Počítač nájde pravidlá Pravidlá sú explicitné, čitateľné Pravidlá sú skryté v modeli 

Zlyhá, keď sa pravidlá zmenia Prispôsobí sa, keď ho opäť naučíš na nových dátach 

## AI vs ML vs DL 


![](img/PANS-prednáška1.pdf-0007-01.png)


<!-- Start of picture text -->
Jednoduchý  Rozpoznanie<br>spam filter značiek<br>Detektor hrán  Predikcia<br>v obrázku ceny bytu<br><!-- End of picture text -->


![](img/PANS-prednáška1.pdf-0007-02.png)


<!-- Start of picture text -->
Zložitejší<br>spam filter<br>Preklad<br>textov<br><!-- End of picture text -->


![](img/PANS-prednáška1.pdf-0007-03.png)


<!-- Start of picture text -->
Rozpoznanie<br>reči<br>Detekcia<br>nádorov na<br>RTG<br><!-- End of picture text -->

## AI vs ML vs DL 


![](img/PANS-prednáška1.pdf-0008-01.png)


<!-- Start of picture text -->
Jednoduchý  Rozpoznanie  Zložitejší  Rozpoznanie<br>spam filter značiek spam filter reči<br>Detekcia<br>Predikcia  Preklad<br>Detektor hrán<br>nádorov na<br>v obrázku ceny bytu textov<br>RTG<br>DL<br>ML<br>AI<br><!-- End of picture text -->

## AI vs ML vs DL 

- Spam filter 

   - Pravidlový prístup: Ak je slovo FREE – potom je to spam 

   - Definujeme príznaky: Počet slov FREE, počet výkričníkov, počet príloh, počet obrázkov, počet linkov + sada emailov – tréning 

   - Len (veľká) sada emailov s informáciou spam-nespam 

## AI vs ML vs DL 

- Spam filter 

   - Pravidlový prístup: Ak je slovo FREE – potom je to spam 

   - Definujeme príznaky: Počet slov FREE, počet výkričníkov, počet príloh, počet obrázkov, počet linkov + sada emailov – tréning 

   - Len (veľká) sada emailov s informáciou spam-nespam 


![](img/PANS-prednáška1.pdf-0010-05.png)



![](img/PANS-prednáška1.pdf-0010-06.png)


<!-- Start of picture text -->
AI<br><!-- End of picture text -->


![](img/PANS-prednáška1.pdf-0010-07.png)



![](img/PANS-prednáška1.pdf-0010-08.png)


<!-- Start of picture text -->
ML<br><!-- End of picture text -->


![](img/PANS-prednáška1.pdf-0010-09.png)


DL 

## Typy úloh 

#### **PREDPOVEDAŤ** 

_Máš označené príklady_ 

- →  Číslo 

- →  Kategóriu 

#### **GENEROVAŤ** 

_Vytvoriť niečo nové_ 

- →  Text 

- →  Obrázky 

- →  Zvuk / Video 

#### **NÁJSŤ ŠTRUKTÚRU** 

_Unsupervised learning - objavovať_ 

- →  Prirodzené skupiny 

- →  Anomálie 

- →  Skryté vzory 

||**Predpovedať**|**Generovať**|**Nájsť štruktúru**|
|---|---|---|---|
|ML (nie NN)|**Yes**|**No**|**Yes**|
|DL (Neural Network)|**Yes**|**Yes**|**Yes**|



## Typy úloh 

- **Klasifikácia** — predpovedám triedu 

- • **Regresia** — predpovedám číslo 

- **Zhlukovanie (clustering)** — nemám štítky (značky, labels) 


![](img/PANS-prednáška1.pdf-0012-03.png)


## Typy učenia 

- Ukazujeme obrázky dieťaťu 

- Čítame si s dieťaťom krátke príbehy 

- Aký je v týchto dvoch veciach rozdiel? 

## Typy učenia 

- Ukazujeme obrázky dieťaťu 

- Čítame si s dieťaťom krátke príbehy 

- Aký je v týchto dvoch veciach rozdiel? 

   - učenie s učiteľom - SUPERVISED 

   - učenie bez učiteľa – UNSUPERVISED 

   - **Klasifikácia** — predpovedám triedu 

   - **Regresia** — predpovedám číslo 

   - **Zhlukovanie (clustering)** — nemám štítky (značky, labels) 

## Typy učenia formálnejšie 

- SUPERVISED: k dispozícii dvojice X a Y, 

   - X sú jednotlivé dáta 

   - Y sú štítky (značky, labels) 

   - obrázok + popis 

   - riadok v tabuľke s výmerou bytu, polohou, vekom a cenou 

- UNSUPERVISED: máme k dispozícii len dáta X. 

   - zoznam zákazníkov: ich vek, aktivita na sociálnych sieťach, bydlisko 

   - mnoho novinových článkov 

   - _X je to, čo viem zmerať; Y je to, čo by som chcel vedieť, ale meria sa ťažko alebo neskoro_ 

Dnes - Machine Learning 

## Pipeline práce pri ML 

(pripomeňme si predošlú tabuľku:) **Bežný spôsob Spôsob ML** Píšeš pravidlá Poskytneš príklady (features and labels) Počítač nasleduje pravidlá Počítač nájde pravidlá Pravidlá sú explicitné, čitateľné Pravidlá sú skryté v modeli Zlyhá, keď sa pravidlá zmenia Prispôsobí sa, keď ho opäť naučíš na nových dátach 

## Pipeline práce pri ML 

- získam dáta 

## Pipeline práce pri ML 

- získam dáta 

- spracujem ich, vyrobím príznaky 

## Pipeline práce pri ML 

- získam dáta 

- spracujem ich, vyrobím príznaky 

- natrénujem model 

## Pipeline práce pri ML 

- získam dáta 

- spracujem ich, vyrobím príznaky 

- natrénujem model 

- vyhodnotím 

## Pipeline práce pri ML 

- získam dáta 

- spracujem ich, vyrobím príznaky 

- natrénujem model 

- vyhodnotím 

- urobím iteráciu — zlepším dáta, príznaky alebo model 

**V ktorých krokoch použijem dáta?** 

## Delenie tréningových dát 

Seminár z matematiky - príprava na maturitu 

- Sady príkladov počas roka 

- Jednotlivé hodiny matematiky – tréning 

- • Priebežné testy – na čo je to dobré? 

- • Finálny maturitný test 

## Delenie tréningových dát 

Seminár z matematiky - príprava na maturitu 

- Sady príkladov počas roka 

- Jednotlivé hodiny matematiky – tréning 

- • Priebežné testy – na čo je to dobré? 

- Finálny maturitný test 

Ako si rozdelím sady príkladov? Čo tým chcem docieliť? 

Čo by sa mi mohlo stat, ak sa jeden príklad dostane do viacerých sád? 

## Delenie tréningových dát 

- Trénovacia 

- Validačná 

- Testovacia 

- Prečo nie len trénovacia a testovacia? 


![](img/PANS-prednáška1.pdf-0025-05.png)


## Delenie tréningových dát 

- Trénovacia 

- Validačná 

- • Testovacia **Stačí to? Som spokojný s odpoveďou, že** 

- • Prečo nie len trénovacia a testovacia? **môj algoritmus má 89 percentnú úspešnosť?** 

## Baselines algoritmy 

- Odrazový mostík 

- Jednoduchý model 

- Referencia pre ďalšie zlepšovanie 

- Lineárna regresia, k-NN, k-means 

- POZOR: 

   - typy úloh (regresia, klasifikácia, zhlukovanie) 

   - typy učenia (s učiteľom, bez učiteľa) 

   - algoritmy (lin.regresia, k-NN, k-means) 

## Baseline1: Lineárna regresia 

- Lineárna regresia je model: y ≈ w·x + b 

- hľadám priamku alebo rovinu, ktorá ‘najlepšie’ sedí na dátach 

• Prečo je skvelá? Lebo je **interpretovateľná Príklad:** 

**cenu bytu** podľa: 

- 𝑥1= **plocha** v m² 

- 𝑥2= **počet izieb** 

- 𝑦= **cena** (v tis. eur) 


![](img/PANS-prednáška1.pdf-0028-08.png)


## Lineárna regresia 

y 


![](img/PANS-prednáška1.pdf-0029-02.png)


<!-- Start of picture text -->
Dáta:<br>X (plocha, pocet izieb)<br>Y (cena)<br>Treba nájsť<br>plocha [m 2 ]<br>nie sú dáta, je to predikcia modelu<br>pocet izieb [-]<br><!-- End of picture text -->

## Lineárna regresia konkrétne 


![](img/PANS-prednáška1.pdf-0030-01.png)



![](img/PANS-prednáška1.pdf-0030-02.png)


**Interpretácia koeficientov** ak sa plocha zvýši o **1 m²** , cena sa (v priemere) zvýši asi o **1.86 tis. €** , 𝑤1 = 1.86 𝑤2 = 21.17 ak pribudne **1 izba** , cena sa zvýši asi o **21.17 tis. €** , 𝑏= −4.56 konštanta – často nemá priamy zmysel 

**Konkrétna predikcia** Byt má 62m<sup>2</sup> a 3 izby: 


![](img/PANS-prednáška1.pdf-0030-05.png)



![](img/PANS-prednáška1.pdf-0031-00.png)



![](img/PANS-prednáška1.pdf-0031-01.png)


## Baseline 2: Metóda k-najbližších susedov 

• Myšlienka: keď neviem, čo je nový bod, pozriem sa na jeho najbližších susedov v tréningových dátach 

- Čo potom? 

Klasifikačná úloha Susedia “hlasujú” 

Regresná úlohu Priemer hodnôt susedov 

- Hyperparameter k, počet susedov. 

- Vzdialenosť 

## Metóda k-najbližších susedov 


![](img/PANS-prednáška1.pdf-0033-01.png)


### k = 2 

Byt 62m<sup>2</sup> a 3 izby 

#### cena 

= (175+185)/2 = 180 tis 


![](img/PANS-prednáška1.pdf-0033-07.png)


plocha [m<sup>2</sup> ] 

## Metóda k-najbližších susedov 

k = 2 

cena Byt 62m<sup>2</sup> a 3 izby 


![](img/PANS-prednáška1.pdf-0034-03.png)


= (150+175)/2 

= 162,5 tis 

plocha [m<sup>2</sup> ] 


![](img/PANS-prednáška1.pdf-0035-01.png)


## Metóda k-najbližších susedov 

Odhady: k = 2 Bez škálovania 162,5tis cena Byt 62m<sup>2</sup> a 3 izby So škálovaním 180 tis. = (150+175)/2 = 162,5 tis Z lineárnej regresie 174tis 


![](img/PANS-prednáška1.pdf-0035-04.png)


<!-- Start of picture text -->
     = 162,5 tis Z lineárnej regresie 174tis<br><!-- End of picture text -->

plocha [m<sup>2</sup> ] 

## Metóda k-najbližších susedov 

- **Škálovanie príznakov (dôležité!)** 

- Plocha 50 – 120, izby 2–5. 

- Euklidovská vzdialenosť bez škálovania 

   - **plocha bude dominovať** 

- Riešenie: štandardizujeme 𝑥1, 𝑥2 (odčítanie priemeru a delenie smerodajnou odchýlkou), alebo normujeme na (0,1) 

- **Voľba** 𝒌 

   - Vyberá sa na VAL dátach 

## Metóda k-najbližších susedov 

Odhady: k = 2 Bez škálovania 162,5tis cena Byt 62m<sup>2</sup> a 3 izby So škálovaním 180 tis. = (150+175)/2 Z lineárnej regresie 174tis     = 162,5 tis 


![](img/PANS-prednáška1.pdf-0037-03.png)


Ktorý je lepší? 

plocha [m<sup>2</sup> ] 

## Baseline 3: Zhlukovanie pomocou  k- priemerov 

- Vyberiem k centroidov 

- Priradím body k najbližšiemu centroidu 

- Centroidy posuniem na priemer priradených bodov 

Hyperparameter: **k – počet centroidov** 

## Zhlukovanie pomocou  k-priemerov 

**Dáta (X)** 

- 𝑥1: BMI 

- 𝑥2: glukóza nalačno 

- **Cieľ** 

Nájsť skupiny pacientov so podobnými profilmi: 

- jedni budú „zdraví“ 

- iní „rizikoví“ 

- ďalší „prediabetickí“ (vyššia glukóza) 


![](img/PANS-prednáška1.pdf-0039-09.png)


## Zhlukovanie pomocou  k-priemerov 


![](img/PANS-prednáška1.pdf-0040-01.png)


k = 2 

## Zhlukovanie pomocou  k-priemerov 


![](img/PANS-prednáška1.pdf-0041-01.png)


k = 2 

## Zhlukovanie pomocou  k-priemerov 


![](img/PANS-prednáška1.pdf-0042-01.png)


k = 2 

## Zhlukovanie pomocou  k-priemerov 


![](img/PANS-prednáška1.pdf-0043-01.png)


k = 2 

## Zhlukovanie pomocou  k-priemerov 


![](img/PANS-prednáška1.pdf-0044-01.png)


k = 2 

## Zhlukovanie pomocou  k-priemerov 


![](img/PANS-prednáška1.pdf-0045-01.png)


k = 2 

## Zhlukovanie pomocou  k-priemerov 

k = 3 


![](img/PANS-prednáška1.pdf-0046-02.png)


## Zhlukovanie pomocou  k-priemerov 


![](img/PANS-prednáška1.pdf-0047-01.png)


<!-- Start of picture text -->
k = 3<br>k = 2 alebo k=3<br>Ktorý je lepší?<br><!-- End of picture text -->

## Delenie dát na tri časti 

- Trénovacia 

- Validačná 

- Testovacia 

- Prečo nie len trénovacia a testovacia? 


![](img/PANS-prednáška1.pdf-0048-05.png)


## Delenie dát na tri časti 

- Trénovacia 

- Validačná 

- Testovacia 

k = 2 alebo k = 3 

- Prečo nie len trénovacia a testovacia? Treba zvoliť hyperparameter 


![](img/PANS-prednáška1.pdf-0049-06.png)


## TRAIN – VAL - TEST 


![](img/PANS-prednáška1.pdf-0050-01.png)


TRAIN: 60% je 12 datapointov VAL: 20% sú 4 datapointy 

TEST: 20% sú 4 datapointy 


![](img/PANS-prednáška1.pdf-0051-00.png)


Čo ak máme veľa príznakov? 

## Čo ak máme veľa príznakov? 


![](img/PANS-prednáška1.pdf-0052-01.png)


<!-- Start of picture text -->
28 x 28<br><!-- End of picture text -->


![](img/PANS-prednáška1.pdf-0052-02.png)


## Čo ak máme veľa príznakov? 

28 x 28 = 784 


![](img/PANS-prednáška1.pdf-0053-02.png)


## Čo ak máme veľa príznakov? 

• Lineárna regresia je OK, ak máme málo príznakov (BMI, glukóza) 

• Ak tých príznakov je veľa, už nie je dobre interpretovateľná 


![](img/PANS-prednáška1.pdf-0054-03.png)



![](img/PANS-prednáška1.pdf-0054-04.png)



![](img/PANS-prednáška1.pdf-0054-05.png)



![](img/PANS-prednáška1.pdf-0054-06.png)



![](img/PANS-prednáška1.pdf-0054-07.png)



![](img/PANS-prednáška1.pdf-0054-08.png)


Interpretovateľnosť nie je len matematický význam koeficientu – je to aj schopnosť človeka tomu porozumieť 

## Čo ak máme veľa príznakov? 

• Lineárna regresia je OK, ak máme málo príznakov (BMI, glukóza) 

- Lineárna regresia je interpretovateľná iba **málo a kvalitné príznaky** 

- • Ak tých príznakov je veľa, už nie je dobre interpretovateľná Riešenie **Výber alebo extrakcia príznakov (feature extraction)** 

PCA embeddingy učenie reprezentácie automaticky – DEEP LEARNING 

Interpretovateľnosť nie je len matematický význam koeficientu – je to aj schopnosť človeka tomu porozumieť 

## Prečo DL? Preto! 

- Klasický ML 

   - Dobré príznaky 

   - Jednoduchý model 

   - Výhoda – interpretovateľnosť (ak je príznakov málo) 

- Neurónové siete (deep learning) 

   - Naraz: vrstvy postupne transformujú vstup na reprezentáciu 

   - Z reprezentácie sa robí predikcia/klasifikácia 

   - Nevýhoda - ? 

## Zhrnutie 

- Rozlíšenie 

   - Typu úloh — klasifikácia/regresia/zhlukovanie 

   - Typu učenia – s učiteľom a bez učiteľa 

   - Typu algoritmov - Čo sú baselines a prečo ich potrebujeme 

- Pipeline: dáta → príznaky → model → vyhodnotenie → iterácia 

- Význam train/val/test. Test je ‘svätý’ 

- Že extrakcia príznakov je často kľúč — a DL je cesta, ako ho automatizovať 

