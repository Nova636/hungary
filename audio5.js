/*
 * 外语学习网页 -文数据与音频控制
 *
 * 音频文件默认命名：
 *   lesson-01.mp3
 *   lesson-02.mp3
 *   ...
 *
 * 修改课程内容：编辑下面的 lessons 数组。
 * 修改音频文件路径：修改每一课的 audio 属性即可。
 * 音频不会预加载；点击播放时才会设置音频地址并读取文件。
 */

"use strict";

/* =========================================================
  文数据
   将 title、content 替换成自己的课文。
   content 支持普通文本、换行，也支持安全的 HTML 片段。
   如果要使用 HTML，请只填写自己可信任的内容。
   ========================================================= */

const lessons = [
  {
    title: "01 · A ruhaboltban 1",
    content: `[zene]
1.Segíthetek?
A ruhaboltban
Anna ruhaboltba megy, pulóvert szeretne venni.

<span class="speaker">Eladó:</span> Jó napot kívánok! Segíthetek?
<span class="speaker">Anna:</span> Nem, köszönöm, csak nézelődöm.
[zene]`,
    audio: "01_A_ruhaboltban_1.mp3"
  },
  {
    title: " 01 · A ruhaboltban 2",
    content: `2.
<span class="speaker">Eladó:</span> Jó napot kívánok! Mit adhatok?
<span class="speaker">Anna:</span> Egy jó meleg pulóvert szeretnék.
<span class="speaker">Eladó:</span> Milyen színűt szeretne?
<span class="speaker">Anna:</span> Nem is tudom... Talán pirosat, narancssárgát vagy bordót. A meleg színeket szeretem.
<span class="speaker">Eladó:</span> Értem..., ezek a színek most nagyon divatosak. Ez itt az új kollekció. Például itt van ez a piros. Ez van a kirakatban is. Jó meleg, és szerintem csinos is.
<span class="speaker">Anna:</span> Jó, ez tetszik.
<span class="speaker">Eladó:</span> Milyen méretben szeretné?
<span class="speaker">Anna:</span> Azt hiszem, az S-es jó lesz. Felpróbálhatom?
<span class="speaker">Eladó:</span> Természetesen. Ott van jobbra a próbafülke.
<span class="speaker">Anna:</span> Köszönöm.
<br>
5 perc múlva...
<br>
<span class="speaker">Anna:</span> Elnézést! Ez sajnos kicsi. Kérhetek egy M-eset?
<span class="speaker">Eladó:</span> Tessék, itt van.
<span class="speaker">Anna:</span> Kaphatok inkább egy narancssárgát?
<span class="speaker">Eladó:</span> Persze, adom.
<br>
5 perc múlva...
<br>
<span class="speaker">Eladó:</span> Jó a méret?
<span class="speaker">Anna:</span> Igen, tökéletes. Fizethetek kártyával?
<span class="speaker">Eladó:</span> Természetesen. A pénztár ott van balra. Viszontlátásra!
<span class="speaker">Anna:</span> Viszlát és köszönöm!
`,
    audio: "01_A_ruhaboltban_2.mp3"
  },
  {
    title: " 01 · Mi mennyibe kerül",
    content: `[zene]
Második hallásértés. Első fejezet. Első feladat.
Mi mennyibe kerül? 
<span class="speaker">--</span>  Nagyon drága ez a szoknya. Tizenötezer-kétszáz forint.
<span class="speaker">--</span>  Tizenhatezer forintért nem drága ez a szemüveg.
<span class="speaker">--</span>  Szép ez a sál, csak az a baj, hogy ötezer forintba kerül.
<span class="speaker">--</span>  Nem túl jó ez a zokni, kicsit meleg, de olcsó volt, csak ötszáznegyven forint.
<span class="speaker">--</span>  Van egy jó blúz a boltban, hatezer-hétszáz forint. Drága szerinted?
<span class="speaker">--</span>  Tudod mennyibe kerül ez a sapka? Háromezer-kétszáz forint.
<span class="speaker">--</span>  Szép ez a papucs, nem? Csak kétezernyolcszáz forint volt.
<span class="speaker">--</span>  A táska decemberben még nyolcezer-kétszáz forint volt, most már kilencezer-kilencszáz.
<span class="speaker">--</span>  Ez a fülbevaló itt az ékszerboltban az iskola mellett tizennyolcezer-kilencszáz forint volt.
<span class="speaker">--</span>  Nem értem, miért kerül ez a gyűrű ötvenezer forintba.
[zene]
`,
    audio: "02_Mi_mennyibe_kerül.mp3"
  },
  {
    title: " 01 · Mi van és mi nincs a ruhaboltban",
    content: `[zene]
Harmadik hallásértés, első fejezet, második feladat. 
Mi van és mi nincs a ruhaboltban?
<span class="speaker">--</span> Sajnos nincs piros pulóverünk, csak sárga és kék.
<span class="speaker">--</span> Sajnos csak harminchatosat és harmincheteset tudok adni.
<span class="speaker">--</span> Csak fekete nyakkendőnk van.
<span class="speaker">--</span> Csak hosszú szoknyánk van sajnos, de az van zöld is.
<span class="speaker">--</span> Igen, pillanat. Hát, negyvenkettesben csak barna van.
<span class="speaker">--</span> Fehér pólót csak S-eset tudok adni.
<span class="speaker">--</span> Fekete-fehér ernyőnk van, fekete holnap lesz csak.
`,
    audio: "03_Mi_van_és_mi_nincs_a_ruhaboltban.mp3"
  },
  {
    title: "02 · Mindenki beteg 1",
    content: `Mindenki beteg!
Zsófi pénteken moziba szeretne menni néhány
csoporttársával. De csütörtökön három e-mailt is kap.

Az első e-mail
Tárgy: "nem tudok holnap jönni"
Szia Zsófi!
Sajnos nem tudok menni holnap! 
Nagyon náthás vagyok.
Folyik az orrom, fáj a fejem, fáj a fülem, a szemem... 
nem tudok aludni, csak köhögök és tüsszögök. 
Itthon maradok holnap. 
Sajnálom, mert nagyon szeretem Robert de Nirót!
Majd legközelebb megyek én is.
Jó szórakozást kívánok!
Szia!
Ildi

`,
    audio: "04_Mindenki_beteg_1.mp3"
  },
  {
    title: " 02 · Mindenki beteg 2",
    content: `A második e-mail
Tárgy: "a barátom beteg"
Szia Zsófi!
Sajnálom, de mi nem tudunk holnap moziba menni! 
A barátom beteg. 
Nagyon gyenge, lázas, fáj a torka, 
a feje és egy kicsit a hasa is.
Tudod milyen, ha egy férfi beteg...
Találkozunk holnap az egyetemen!
Gabi
`,
    audio: "05_Mindenki_beteg_2.mp3"
  },
  {
    title: " 02 · Mindenki beteg 3",
    content: `A harmadik e-mail
Tárgy: "nem megyek moziba"
Szia Zsófi!
Sajnos beteg vagyok! Fáj a fejem és a torkom,
és nagyon köhögök. Azt hiszem, kicsit lázas is vagyok. 
Szóval sajnos nem tudok holnap moziba menni! 
Sajnálom, mert Robert De Niró a kedvenc színészem!
Szia!
Laci
`,
    audio: "06_Mindenki_beteg_3.mp3"
  },
  {
    title: " 02 · Laci a gyógyszertárban",
    content: `Laci a gyógyszertárban
<span class="speaker">Gyógyszerész:</span> Jó napot kívánok!
<span class="speaker">Laci:</span> Jó napot kívánok!
<span class="speaker">Gyógyszerész:</span> Mit adhatok?
<span class="speaker">Laci:</span> Fáj a fejem és a torkom, és nagyon köhögök.
<span class="speaker">Gyógyszerész:</span> A karja és a háta nem fáj?
<span class="speaker">Laci:</span> Nem. Csak az orrom folyik.
<span class="speaker">Gyógyszerész:</span> Értem. Akkor itt van ez a köhögéscsillapító gyógyszer, ez jó lesz. És adok még egy orrcseppet.
<span class="speaker">Laci:</span> Szerintem lázas is vagyok, kaphatok egy lázcsillapítót is?
<span class="speaker">Gyógyszerész:</span> Természetesen. Van tíz- és húszdarabos, melyiket adhatom?
<span class="speaker">Laci:</span> A nagyot kérem szépen.
<span class="speaker">Gyógyszerész:</span> Adhatok még valamit?
<span class="speaker">Laci:</span> Igen, fáj a fogam is. Szeretnék fájdalomcsillapítót is.
<span class="speaker">Gyógyszerész:</span> Rendben, tessék. Még valamit?
<span class="speaker">Laci:</span> Nem kérek, köszönöm.
<span class="speaker">Gyógyszerész:</span> 3850 forint lesz.

`,
    audio: "07_Laci_a_gyógyszertárban.mp3"
  },
  {
    title: " 02 · Peti a gyógyszertárban",
    content: `[zene] 
Nyolcadik hallásértés, második fejezet. 
Peti a gyógyszertárban. Melyik válasz jó? 
<span class="speaker">Gyógyszerész:</span> Jó napot kívánok! 
<span class="speaker">Peti:</span> Jó napot kívánok! 
<span class="speaker">Gyógyszerész:</span> Mit adhatok? 
<span class="speaker">Peti:</span> Nagyon fáj a fejem, nagyon köhögök és fáj a torkom is. Fájdalomcsillapítót szeretnék venni. 
<span class="speaker">Gyógyszerész:</span> A karja és a háta nem fáj? 
<span class="speaker">Peti:</span> Nem. 
<span class="speaker">Gyógyszerész:</span> Értem. Akkor itt van ez a köhögéscsillapító gyógyszer. Ez jó lesz. Van tíz és húsz darabos. Melyiket adhatom? 
<span class="speaker">Peti:</span> A nagyot kérem szépen. 
<span class="speaker">Gyógyszerész:</span> Adhatok még valamit?
<span class="speaker">Peti:</span> Szerintem kicsit lázas is vagyok. Kaphatok egy lázcsillapítót is? 
<span class="speaker">Gyógyszerész:</span> Természetesen. Még valamit?
<span class="speaker">Peti:</span> Mást nem kérek. Köszönöm. 
<span class="speaker">Gyógyszerész:</span> Kilencszáz nyolcvan forint lesz. 
[pénztárgép]
`,
    audio: "08_Peti_a_gyógyszertárban.mp3"
  },
  {
    title: "03 · Ki kicsoda a családban",
    content: `Ki kicsoda a családban?

Anna vagyok. 21 éves vagyok és magyar.
Nagy családom van. Budapesten élünk egy nagy házban.
Az édesanyám, Andrea, 48 éves és fogorvos. 
Hosszú fekete haja és nagy barna szeme van.
Nincs sok szabadideje, mert sokat dolgozik. 
Az édesapám 52 éves és az egyetemen tanít.
György a neve. Ő magas, rövid, barna haja van, 
és nagyon nyugodt ember.
Van két bátyám, Dávid és Péter és egy húgom, Szilvia. 
Dávid és Péter ikrek, 24 évesek. 
Mindketten diákok, mérnökök lesznek. 
Szilvi még csak 10 éves és iskolába jár.

Csak egy nagymamám él. 
Klára a neve és 80 éves. 
Már nem dolgozik, nyugdíjas. 
Nagyon finom a húslevese és az almatortája. 
Ő is Budapesten él, a VII. kerületben.

Van egy nagybátyám, Feri bácsi. 
60 éves és pincér egy belvárosi étteremben. 
Julika néni, Feri bácsi felesége, 
57 éves és egy fodrászüzletben dolgozik. 
Mind a ketten nagyon kedves emberek! 
Van egy lányuk, Petra. 
28 éves és most nyáron volt az esküvője.
A férje, Jim 31 éves és egy bankban dolgozik. 
Jim nem magyar, hanem amerikai. 
Most tanul magyarul. 
Még nincs gyerekük. 
Körülbelül hat éve ismerik egymást.

Ja, és ő a barátom, Tibi. 
25 éves és fogorvos lesz.
Tibinek nagyon szép szeme van! 
`,
    audio: "09_Ki_kicsoda_a_családban.mp3"
  },
  {
    title: " 03 · A családom. Igaz vagy hamis",
    content: `[zene] 
Tizedik hallásértés, harmadik fejezet. 
A családom. Igaz vagy hamis? 

<span class="speaker">--</span> Anyukám negyvennégy éves. 
<span class="speaker">--</span> Van egy bátyja és egy öccse. 
<span class="speaker">--</span> Ők is itt élnek a városban. 
<span class="speaker">--</span> A nővérem nem itt él. 
<span class="speaker">--</span> Angliában dolgozik egy bankban. 
<span class="speaker">--</span> A bátyám szemorvos lesz. 
<span class="speaker">--</span> Az jó lesz, mert apukánk nem lát jól. 
<span class="speaker">--</span> Erős szemüvege van. 
<span class="speaker">--</span> Az ő apukája, a mi nagypapánk is szemüveges. 
<span class="speaker">--</span> A nagypapánk már nyugdíjas, de még dolgozik. 
<span class="speaker">--</span> Fodrász. A bátyám huszonöt éves, 
<span class="speaker">--</span> de már két gyereke van, egy fia és egy lánya. 
<span class="speaker">--</span> A felesége nem dolgozik, otthon van a két gyerekkel. 
[zene]
`,
    audio: "10_A_családom._Igaz_vagy_hamis.mp3"
  },
  {
    title: " 04 · A főnököm új felesége. Az esküvő",
    content: `4. A főnököm új felesége. Az esküvő
Tamás és András beszélgetnek. 
Tamás egy fényképet mutat.
<span class="speaker">Tamás:</span> Ő az autóban a főnököm.
<span class="speaker">András:</span> Ez az ő esküvője?
<span class="speaker">Tamás:</span> Igen. Ő a főnököm új felesége.
<span class="speaker">András:</span> Nagyon csinos!
<span class="speaker">Tamás:</span> Igen, szerintem is. Tavaly még a főnök titkárnője volt, de most már nem dolgozik.
<span class="speaker">András:</span> És kié ez a szép autó?
<span class="speaker">Tamás:</span> A nőé. Ez volt a főnök ajándéka.
<span class="speaker">András:</span> Nem rossz! És a ház is az övé?
<span class="speaker">Tamás:</span> Nem, az a főnöké.
<span class="speaker">András:</span> És kik ők? A főnök családja?
<span class="speaker">Tamás:</span> Igen, a főnök lánya és fia.
<span class="speaker">András:</span> És ki ez a csinos nő?
<span class="speaker">Tamás:</span> Ő az új titkárnő.
<span class="speaker">András:</span> Tényleg?
<span class="speaker">Tamás:</span> Igen. Ő a feleség húga.
<span class="speaker">András:</span> Látom, te is itt vagy a képen.
<span class="speaker">Tamás:</span> Igen, én voltam a sofőr.
<span class="speaker">András:</span> Ő itt a fiad? 
<span class="speaker">Tamás:</span> Igen, ő a fiam, Dani. A lány pedig Dani barátnője.

`,
    audio: "11_A_fïnököm_új_felesége._Az_esküvï.mp3"
  },
  {
    title: " 04 · 10 év múlva, Dani esküvője",
    content: `10 év múlva, Dani esküvője
<span class="speaker">Tamás:</span> Itt van Dani és a felesége!
<span class="speaker">András:</span> Nagyon szépek! Gratulálok!
<span class="speaker">Tamás:</span> Köszönöm. Ők már a családom!
<span class="speaker">András:</span> Pillanat, ő nem a főnököd? És a felesége és a feleség húga?
<span class="speaker">Tamás:</span> De! De a feleség húga most már az én barátnőm.
<span class="speaker">András:</span> A tiéd?
<span class="speaker">Tamás:</span> Igen, az enyém!
<span class="speaker">András:</span> Ja, értem! 
`,
    audio: "12_10_év_múlva,_Dani_esküvïje.mp3"
  },
  {
    title: "04 · A betörés után",
    content: `[zene] 
Tizenharmadik hallásértés, negyedik fejezet. 
A betörés után. 
Mi nincs már a lakásban? 
Nincs már itt a nagypapám mobilja. 
Régi mobil volt, de a nagypapám nem akart másikat. 
Nincs meg a nagymamám kedvenc barna táskája. 
Nincs már biciklim, pedig ez egy nagyon jó bicikli. 
Körülbelül száznyolcvanezer forintba kerül. 
A nővérem nem találja a kék nyakláncát. 
Nincs meg a nagymamám kedvenc gyűrűje. 
A nővérem nagyon nem örül, mert nem találja a piros fülbevalóját. 
Én nem találom a régi órámat, pedig ez egy nagyon szép óra és drága is volt. 
Persze az öcsém drága fényképezőgépe sincs már itt. 
A nagymamám napszemüvegével nem tudjuk, mit akarnak csinálni, de az sincs meg.
`,
    audio: "13_A_betörés_után.mp3"
  },
  {
    title: " 05 · Pécsre kérek egy jegyet",
    content: `[zene] 
Tizennegyedik hallásértés, ötödik fejezet. 
Pécsre kérek egy jegyet. 
Jegyvásárlás a pályaudvaron. 
<span class="speaker">A:</span> Jó napot kívánok! 
<span class="speaker">B:</span> Jó napot kívánok! Pécsre kérek egy jegyet. 
<span class="speaker">A:</span> Diák vagy felnőtt jegyet? 
<span class="speaker">B:</span> Diákot kérek. Van nemzetközi diákigazolványom. Kaphatok kedvezményt? 
<span class="speaker">A:</span> Igen, de csak harminc százalékot. Csak oda vagy vissza is. 
<span class="speaker">B:</span> Retúrjegyet kérek. Ja, és van egy biciklim is. 
<span class="speaker">A:</span> A biciklinek külön jegy kell. 
<span class="speaker">B:</span> Rendben, mennyi lesz? 
<span class="speaker">A:</span> kétezerhatszázhetven forint. 
<span class="speaker">B:</span> Kártyával fizethetek? 
<span class="speaker">A:</span> Sajnálom, nem. Ott jobbra talál egy bankautomatát. 
<span class="speaker">B:</span> Köszönöm. Akkor mindjárt jövök.
[zene]
`,
    audio: "14_Pécsre_kérek_egy_jegyet.mp3"
  },
  {
    title: " 05 · Az információnál",
    content: `[zene] 
Tizenötödik hallásértés, ötödik fejezet. 
Az információnál 
<span class="speaker">A:</span> Jó napot kívánok! Mikor megy vonat Siófokra? 
<span class="speaker">B:</span> Legközelebb öt perc múlva. Ha siet, még eléri.
<span class="speaker">A:</span> Köszönöm, nem sietek. Mikor megy a következő? 
<span class="speaker">B:</span> Tizenöt óra tíz perckor. 
<span class="speaker">A:</span> Hányas vágányról indul? 
<span class="speaker">B:</span> A hetesről.
<span class="speaker">A:</span> És mikor van Siófokon? 
<span class="speaker">B:</span> Tizenhat óra ötvenkor. 
<span class="speaker">A:</span> Hol találom a várótermet? 
<span class="speaker">B:</span> Ott jobbra a csomagmegőrző mellett.
<span class="speaker">A:</span> Köszönöm szépen.
<span class="speaker">B:</span> Nagyon szívesen.
`,
    audio: "15_Az_információnál.mp3"
  },
  {
    title: " 05 · A pályaudvaron",
    content: `[zene] 
Tizenhatodik hallásértés. Ötödik fejezet. Első feladat. 
A pályaudvaron. 
<span class="speaker">A:</span> Elnézést, hol van a csomagmegőrző? 
<span class="speaker">B:</span> Ott balra.
<span class="speaker">A:</span> Elnézést, hol találom a nemzetközi jegypénztárat?
<span class="speaker">B:</span> Ott van a csomagmegőrző mögött.
<span class="speaker">A:</span> Bocsánat, nem találom a tizenkettes vágányt. Hol van?
<span class="speaker">B:</span> Igen, pillanat. 
&nbsp;&nbsp;&nbsp;&nbsp;Igen, a csomagmegőrző mögött van a pénztár és a tizenkettes vágány az első vágány a pénztár mögött. 
<span class="speaker">A:</span> Elnézést, hol találok itt egy pénzváltót? 
<span class="speaker">B:</span> Talán van egy pénzváltó a vágányok mögött. 
&nbsp;&nbsp;&nbsp;&nbsp;A csomagmegőrző mögött van egy pénztár. 
&nbsp;&nbsp;&nbsp;&nbsp;A tizenkettes, a tizenhármas és a tizennégyes vágány és a tizennégyes mellett van szerintem egy pénzváltó. 
<span class="speaker">A:</span> Bocsánat, hol van a váróterem? 
<span class="speaker">B:</span> Itt jobbra.
[zene]
`,
    audio: "16_A_pályaudvaron.mp3"
  },
  {
    title: "05 · Mit válaszolsz",
    content: `[zene] 
Tizenhetedik hallásértés, ötödik fejezet, második feladat. 
Mit válaszolsz? 

- Pécsre kérek egy jegyet. 
- Diák vagy felnőtt jegyet? 
----------------------------
- Pécsre kérek egy diákjegyet. 
- Kérem szépen a diákigazolványát. 
----------------------------
- Sopronba kérek egy diákjegyet. 
- Sajnálom, ez a pénztár már zárva van. 
----------------------------
- Szegedre kérek egy diákjegyet. 
- Van diákigazolványa? 
----------------------------
- Szegedre kérek egy diákjegyet. 
- Retúrjegyet? 
----------------------------
- Pécsre kérek négy jegyet. 
- Sajnos nem tudok jegyet adni. 
  Rossz a számítógépünk. 
----------------------------
- Három retúrjegyet kérek Prágába. 
- Nemzetközi jegyet a kettes pénztárban kap. 
----------------------------
- Szegedre kérek két diákjegyet a következő vonatra. 
- Két diákjegy igen, de hová? 
  Mit mondott? 
  Hová utazik? 
----------------------------
- Pécsre kérek két diákjegyet. 
  Tizenöt ötvenkor megy a következő vonat, ugye? 
- Nem, új menetrend van tegnap óta. 
  Tizenhat harminckor megy a következő. 
----------------------------
- Pécsre kérek egy diákjegyet. 
- Négyezer-háromszáz forint lesz. 
[zene]
`,
    audio: "17_Mit_válaszolsz.mp3"
  },
  {
    title: " 06 · Milyen volt a hétvége",
    content: `Milyen volt a hétvége?
Joe és Dávid beszélgetnek. 
Joe Szentendrén volt a hétvégén.
<span class="speaker">Dávid:</span> Milyen volt a hétvége? 
<span class="speaker">Joe:</span> Nagyszerű!
<span class="speaker">Dávid:</span> Hol voltál? 
<span class="speaker">Joe:</span> Szentendrén voltam a barátommal. 
<span class="speaker">Dávid:</span> HÉV-vel mentetek? 
<span class="speaker">Joe:</span> Nem, hajóval. Szerencsére szép időnk volt. 
<span class="speaker">Dávid:</span> És, hogy tetszett Szentendre? 
<span class="speaker">Joe:</span> Nagyon szép kis város! 
<span class="speaker">Dávid:</span> Mit csináltatok?
<span class="speaker">Joe:</span> Sétáltunk a Duna-parton, voltunk egy-két múzeumban, nézelődtünk a városban, sokat fotóztunk, vettünk képeslapokat...
&nbsp;&nbsp;&nbsp;&nbsp;Ja, és képzeld, ettem lángost!
<span class="speaker">Dávid:</span> Forralt bort is ittál?
<span class="speaker">Joe:</span> Persze! Most ittam először. Nagyon finom volt.
<span class="speaker">Dávid:</span> A skanzenben voltatok?
<span class="speaker">Joe:</span> Igen. Szépek ezek a régi házak.
<span class="speaker">Dávid:</span> Sokáig maradtatok Szentendrén?
<span class="speaker">Joe:</span> Igen, elég sokáig, este 9-ig.
<span class="speaker">Dávid:</span> Hajóval jöttetek vissza?
<span class="speaker">Joe:</span> Nem, HÉV-vel. Már késő volt.

`,
    audio: "18_Milyen_volt_a_hétvége.mp3"
  },
  {
    title: " 06 · Az új szomszéd",
    content: `Az új szomszéd
<span class="speaker">Mjölka:</span> Csókolom, én vagyok az új szomszéd! Mjölka Dörr a nevem. Most költöztem ide, egy hete.
<span class="speaker">Eszti néni:</span> Jó napot kívánok! Zámbó Lajosné vagyok, Eszti néni. Láttam már önt a múlt hétvégén is! Honnan jött, Milka?
<span class="speaker">Mjölka:</span> Nem Milka, MJÖLKA! Svédországból jöttem, Stockholmból.
<span class="speaker">Eszti néni:</span> Ó, Svédországban én is voltam, sok-sok éve.
&nbsp;&nbsp;&nbsp;&nbsp;A férjem ott dolgozott, én meg ott tanítottam, amikor fiatal voltam. 
&nbsp;&nbsp;&nbsp;&nbsp;Volt egy szép házunk, sok barátunk, két kutyánk. 
&nbsp;&nbsp;&nbsp;&nbsp;Nagyon tetszett!
&nbsp;&nbsp;&nbsp;&nbsp;Budapest is szép, ugye?
<span class="speaker">Mjölka:</span> Igen, nagyon tetszik. Bár még nem sok mindent láttam.
<span class="speaker">Eszti néni:</span> Most érkezett, Milka?
<span class="speaker">Mjölka:</span> M-j-ö-l-k-a! Nem, nem most jöttem, tavaly márciusban érkeztem.
<span class="speaker">Eszti néni: </span> Igen? És hol lakott tavaly?
<span class="speaker">Mjölka:</span> Nem messze innen, de az a lakás túl hangos volt és nem is tetszett.
&nbsp;&nbsp;&nbsp;&nbsp;Aztán egy barátom segített, az övé ez a lakás.
<span class="speaker">Eszti néni:</span> Remélem, itt minden rendben lesz.
&nbsp;&nbsp;&nbsp;&nbsp;Örülök, hogy találkoztunk, Milka! Viszontlátásra!!
<span class="speaker">Mjölka:</span> Én is örülök. Viszontlátásra, Eszti néni!

`,
    audio: "19_Az_új_szomszéd.mp3"
  },
  {
    title: " 06 · Mi volt a buliban, ki kicsoda a buliban",
    content: `
[zene] 
Huszadik hallásértés, hatodik fejezet. 
Mi volt a buliban? Ki kicsoda a buliban? 
Petike, Anna fia egy busszal játszott. 
Kármen és András egész este filmet néztek. 
Kármen szerint érdekes volt a film, András szerint Kármen volt érdekes. 
Patrik és Kati egész este táncoltak. 
Patrik régen nagyon jól táncolt, Kati pedig csak most tanul. 
Tomi rendelt egy pizzát. 
A buliban nagyon sok finom szendvics volt, de Tomi valami meleget akart enni. 
Este már mindenki fáradt volt. 
Dávid a konyhában volt és kávét főzött. 
Éva táncolni akart Patrikkal, de nem tudott, mert Patrik Katival táncolt. 
Szegény Éva csak állt ott az ablak mellett, várt és vörösbort ivott. 
Anna és Tina sokat beszélgettek. Tina új szemüveget vett. 
Annának nagyon tetszett az új szemüveg.
`,
    audio: "20_Mi_volt_a_buliban,_ki_kicsoda_a_buliban.mp3"
  },
  {
    title: " 07 · Ezek a mai fiatalok",
    content: `7. Ezek a mai fiatalok!
<span class="speaker">Marika:</span> Szervusz Bözsike!
<span class="speaker">Bözsike:</span> Szervusz Marikám! Hogy vagy?
<span class="speaker">Marika:</span> Megvagyok, megvagyok. Láttad már az új lakót a hetediken?
<span class="speaker">Bözsike:</span> Azt a szőke fiút?
<span class="speaker">Marika:</span> Igen. Milka a neve vagy Mölka? Mondta a nevét, de nem értettem.
<span class="speaker">Bözsike:</span>  Persze, hogy láttam. 
&nbsp;&nbsp;&nbsp;&nbsp;Tegnap beszéltünk is, kérdezte, hogy hol talál itt hentest.
&nbsp;&nbsp;&nbsp;&nbsp;Tegnapelőtt meg nem értette, hogy mit mond a postás.
<span class="speaker">Marika:</span> Érdekes, pedig tegnap beszélgettünk, és értette, hogy mit mondok.
<span class="speaker">Bözsike:</span> Egy hete jöttem haza a boltból, ott állt a ház előtt, kereste a kulcsát, de nem találta. 
&nbsp;&nbsp;&nbsp;&nbsp;A kapukódot is elfelejtette. Természetesen nekem volt kulcsom. 
&nbsp;&nbsp;&nbsp;&nbsp;Azután nagyon kedves volt, mert mondtam, hogy nehéz a csomagom, és segített.
<span class="speaker">Marika:</span> Nagyon rendes fiatalember! 

`,
    audio: "21_Ezek_a_mai_fiatalok.mp3"
  },
  {
    title: " 07 · Mit csinált ma Mjölka",
    content: `[zene] 
Huszonkettedik hallásértés, hetedik fejezet, első feladat. 
Mit csinált ma Mjölka? 
Jó vagy rossz, ami történt. 
Reggel kicsit fájt a feje és a torka. 
Délelőtt a postás hozott egy levelet, 
de Mjölka nem értette, hogy mi van a levélben. 
A buszon és a villamoson is a Harry Pottert olvasta. 
Nagyon tetszett neki és kíváncsi volt, hogy mi a vége. 
Elfelejtette, hogy magyar tesztet írnak, így írt egy rossz tesztet. 
A ház előtt nem találta a kulcsát, és a kapukódot is elfelejtette. 
Nagyon éhes volt, de elfelejtette, 
hogy csak egy kis sajt van a hűtőben, más nincs. 
Este sétált a várban és a várost fotózta

`,
    audio: "22_Mit_csinált_ma_Mjölka.mp3"
  },
  {
    title: " 07 · Peti, mit csináltál tegnap",
    content: `[zene] 
Huszonharmadik hallásértés, hetedik fejezet, második feladat. 
Peti, mit csináltál tegnap? Igaz vagy hamis? 

Reggel kilenckor keltem. Délelőtt beszéltem Zsuzsival telefonon. 
Múzeumba akart menni, de én nem akartam. Mondtam, 
hogy én már láttam ezeket a képeket, így nem mentünk múzeumba. 
Kérdezte, hogy én mit szeretnék csinálni. 
Mondtam, hogy semmit, csak enni és pihenni. 
Kérdezte, hogy mit szeretnék enni. 
Mondtam, hogy kínait. 
Szerencsére tudott egy jó kínai éttermet, 
de ebéd előtt még meg akart venni egy cipőt, így bementünk a Westendbe. 
Természetesen nem találtunk jó cipőt, 
találtunk viszont egy jó éttermet, bár nem kínait, hanem olaszt. 
Ott ettünk. 
Ebéd után sétáltunk egy kicsit a körúton, 
aztán én mentem haza, Zsuzsi pedig találkozott egy barátnőjével. 
Otthon aztán tévéztem egy kicsit, telefonáltam, 
aztán akartam írni két-három e-mailt, 
de nem ment az internet. 
Nem baj, már nagyon fáradt voltam, inkább aludtam.

`,
    audio: "23_Peti,_mit_csináltál_tegnap.mp3"
  },
  {
    title: " 08 · Szállásfoglalás telefonon 1",
    content: `Szállásfoglalás telefonon 1.
<span class="speaker">A:</span> Halló! Napsugár Szálloda.
<span class="speaker">B:</span> Halló! Jó napot kívánok. 
&nbsp;&nbsp;&nbsp;&nbsp;Szállást szeretnék foglalni a hétvégére.
&nbsp;&nbsp;&nbsp;&nbsp;Van még szabad szobájuk? 
<span class="speaker">A:</span> Egy pillanat, megnézem....Sajnálom, de már minden szobánk foglalt.
<span class="speaker">B:</span> Értem, köszönöm. Viszonthallásra.

`,
    audio: "24_Szállásfoglalás_telefonon_1.mp3"
  },
  {
    title: " 08 · Szállásfoglalás telefonon 2",
    content: `Szállásfoglalás telefonon 2.
<span class="speaker">A:</span> Halló! Rózsa Szálloda.
<span class="speaker">B:</span>  Jó napot kívánok. 
&nbsp;&nbsp;&nbsp;&nbsp;Szállást szeretnék foglalni a hétvégére, péntektől vasárnapig.
&nbsp;&nbsp;&nbsp;&nbsp;Van mégszabad szobájuk?
<span class="speaker">A:</span> Egy pillanat... Igen, péntek és szombat éjszakára még van.
&nbsp;&nbsp;&nbsp;&nbsp;Milyen szobát szeretne?
<span class="speaker">B:</span> Egy kétágyasat. Mennyibe kerül egy éjszaka?
<span class="speaker">A:</span> 5000 forint per fő.
<span class="speaker">B:</span> A reggeli és a vacsora benne van az árban?
<span class="speaker">A:</span> Nem, egy éjszaka 5000 forint per fő reggelivel, de vacsora nélkül.
<span class="speaker">B:</span> Rendben. Mikor van a reggeli?
<span class="speaker">A:</span> Minden reggel 7-től 10-ig.
<span class="speaker">B:</span> Van szauna?
<span class="speaker">A:</span> Igen,van.
<span class="speaker">B:</span> És mennyibe kerül?
<span class="speaker">A:</span> Az benne van az 5000 forintban.
<span class="speaker">B:</span> Nagyszerű, akkor kérem szépen a szobát.
<span class="speaker">A:</span> Tehát egy kétágyas szoba péntektől vasárnapig, két éjszakára, összesen 20 000 forint. Milyen névre?
<span class="speaker">B:</span> Susanna Peterson.
<span class="speaker">A:</span> Rendben, akkor pénteken szeretettel várjuk Önöket.
<span class="speaker">B:</span> Köszönöm szépen. 
&nbsp;&nbsp;&nbsp;&nbsp;Ja, és még valami: pénteken csak este tudunk érkezni, körülbelül 11 órakor.
&nbsp;&nbsp;&nbsp;&nbsp;Nem probléma, ugye?
<span class="speaker">A:</span> Nem, éjjel-nappal van recepció.
<span class="speaker">B:</span> Köszönöm szépen. Viszonthallásra
<span class="speaker">A:</span> Én is köszönöm! Viszonthallásra.

`,
    audio: "25_Szállásfoglalás_telefonon_2.mp3"
  },
  {
    title: " 08 · Hol voltatok a hétvégén",
    content: `[zene] 
Huszonhatodik hallásértés, nyolcadik fejezet. 
Hol voltatok a hétvégén? Mi volt jó a szállodában? Mi nem volt jó? 
<span class="speaker">--</span> Hol voltatok a hétvégén? 
<span class="speaker">--</span> Egerben voltunk. 
<span class="speaker">--</span> Tényleg? Mivel mentetek? 
<span class="speaker">--</span> Kocsival. 
<span class="speaker">--</span> És melyik szállodában voltatok? 
<span class="speaker">--</span> Egy kis szállóban a városközpontban. 
&nbsp;&nbsp;&nbsp;&nbsp;Nagyon szép, tiszta szálloda volt. 
&nbsp;&nbsp;&nbsp;&nbsp;Az interneten foglaltunk szobát. 
<span class="speaker">--</span> Gondolom, elég drága volt. 
<span class="speaker">--</span> Nem, nem volt drága. 
<span class="speaker">--</span> És jó volt a szálloda? 
<span class="speaker">--</span> Hát a parkolójuk elég kicsi. 
&nbsp;&nbsp;&nbsp;&nbsp;Nem is találtunk helyet. 
&nbsp;&nbsp;&nbsp;&nbsp;A szálloda mellett parkoltunk egy kis utcában. 
&nbsp;&nbsp;&nbsp;&nbsp;A szobák szépek voltak és elég nagyok. 
&nbsp;&nbsp;&nbsp;&nbsp;A reggelivel volt egy kis probléma. 
<span class="speaker">--</span> Miért? Túl kevés volt? 
<span class="speaker">--</span> Nem, csak telefonon azt mondták, 
&nbsp;&nbsp;&nbsp;&nbsp;hogy héttől van reggeli, 
&nbsp;&nbsp;&nbsp;&nbsp;és az első napon mi már ott voltunk fél nyolckor, 
&nbsp;&nbsp;&nbsp;&nbsp;de még nem volt reggeli. 
&nbsp;&nbsp;&nbsp;&nbsp;Mondták, hogy csak nyolctól lesz. 
&nbsp;&nbsp;&nbsp;&nbsp;Na mindegy. Viszont volt szaunájuk, 
&nbsp;&nbsp;&nbsp;&nbsp;jó nagy volt, mindig volt helyünk, 
&nbsp;&nbsp;&nbsp;&nbsp;minden este szaunáztunk. 
&nbsp;&nbsp;&nbsp;&nbsp;Ja, és a recepciós nem beszélt jól angolul, 
&nbsp;&nbsp;&nbsp;&nbsp;és nem is volt túl kedves. 
&nbsp;&nbsp;&nbsp;&nbsp;Öhm..., ő nem tetszett nekünk. 
<span class="speaker">--</span> És mit csináltatok Egerben? 
<span class="speaker">--</span> Ó, nagyon sok mindent. Péntek este például elmentünk...

`,
    audio: "26_Hol_voltatok_a_hétvégén.mp3"
  },
  {
    title: " 09 · Hol jobb nyaralni",
    content: `[zene] 
Huszonhetedik hallásértés, kilencedik fejezet. Hol jobb nyaralni? 
Két barátnő beszélget a nyári programról. 

<span class="speaker">--</span> Hová megyünk nyaralni? 
&nbsp;&nbsp;&nbsp;&nbsp;Van valami ötleted? 
<span class="speaker">--</span> Én Egyiptomba szeretnék menni. 
&nbsp;&nbsp;&nbsp;&nbsp;Találtam egy nílusi hajóutat az interneten. 
&nbsp;&nbsp;&nbsp;&nbsp;Nyolc nap nagyon érdekes programokkal. 
<span class="speaker">--</span> Én Horvátországba szeretnék menni. 
&nbsp;&nbsp;&nbsp;&nbsp;Nagyon tetszett az a horvát város, 
&nbsp;&nbsp;&nbsp;&nbsp;ahol tavaly voltam. 
&nbsp;&nbsp;&nbsp;&nbsp;És sokkal olcsóbb, mint Egyiptom. 
<span class="speaker">--</span> Olcsóbb, olcsóbb. 
&nbsp;&nbsp;&nbsp;&nbsp;Neked ez a legfontosabb? 
<span class="speaker">--</span> Nem, nem ez a legfontosabb, de elég fontos. 
&nbsp;&nbsp;&nbsp;&nbsp;Miért jobb Egyiptom? 
<span class="speaker">--</span> Mert ott több dolgot tudunk megnézni. 
&nbsp;&nbsp;&nbsp;&nbsp;Van sok múzeum, 
&nbsp;&nbsp;&nbsp;&nbsp;ott vannak a piramisok és még sok más is, 
&nbsp;&nbsp;&nbsp;&nbsp;ami érdekes. 
&nbsp;&nbsp;&nbsp;&nbsp;Teljesen más kultúra, mint Európa. 
<span class="speaker">--</span> De sokkal drágább, mint a horvát tengerpart. 
<span class="speaker">--</span> Tengerpart. Mit akarsz ott csinálni? 
<span class="speaker">--</span> Szerinted mit szeretnék csinálni, 
&nbsp;&nbsp;&nbsp;&nbsp;amikor süt a nap? Napozni, fürdeni, pihenni jobb, 
&nbsp;&nbsp;&nbsp;&nbsp;mint múzeumokban tölteni az egész napot. 
<span class="speaker">--</span> Ez a legunalmasabb program, amit valaha hallottam. 
&nbsp;&nbsp;&nbsp;&nbsp;Fürdeni itthon is tudsz. 
<span class="speaker">--</span> Jobb, mint Kairó, az biztos. 
&nbsp;&nbsp;&nbsp;&nbsp;Közelebb van, nem olyan hosszú az út, 
&nbsp;&nbsp;&nbsp;&nbsp;nem olyan drága és nem is veszélyes. 
&nbsp;&nbsp;&nbsp;&nbsp;Mehetünk autóval is, majd én vezetek. 
<span class="speaker">--</span> Szerintem Egyiptom sokkal érdekesebb. 
&nbsp;&nbsp;&nbsp;&nbsp;Na jó, ha nem akarsz Egyiptomba menni, megyek egyedül. 
&nbsp;&nbsp;&nbsp;&nbsp;Jó utat Horvátországba! 
[zene]
`,
    audio: "27_Hol_jobb_nyaralni.mp3"
  },
  {
    title: " 10 · Ma nagyon elfoglalt vagyok",
    content: `[zene] 
Huszonnyolcadik hallásértés, tizedik fejezet. 
Ma nagyon elfoglalt vagyok. 
Ma nagyon elfoglalt vagyok. 
Ma van a szobatársam szülinapja, 
és este meglepetésbulit tartunk a kollégiumban. 
Minden barátunk itt lesz. 
Írtam egy listát, hogy ma hová megyek és mit csinálok. 
Délelőtt elmegyek a boltba bevásárolni, 
de zöldséget és gyümölcsöt a zöldségesnél veszek, 
mert ott sokkal szebb, mint a boltban. 
Utána elmegyek a henteshez húst venni. Spagettit szeretnék főzni, 
mert a spagetti a szobatársam kedvenc étele. 
Ezután visszamegyek a kollégiumba, főzök, majd elmegyek Katihoz, 
egy magyar barátnőmhöz és elhozom az ajándékokat. 
Kati segített ajándékokat vásárolni és hazavitte őket a múlt héten. 
A szobatársam nagyon kíváncsi, ezért van minden Katinál. 
Katitól a fodrászhoz megyek, majd a cukrászdába, 
mert elhozom a nagy csokitortát, amit a múlt héten rendeltem. 
Azután a Nyugatinál találkozom a barátokkal, 
és együtt megyünk a kollégiumba. Remélem, 
hogy jó kis meglepetésbuli lesz, és örül majd a szobatársam. 

`,
    audio: "28_Ma_nagyon_elfoglalt_vagyok.mp3"
  },
  {
    title: " 10 · Hol volt Zsófi, hová megy még",
    content: `[zene] 
Huszonkilencedik hallásértés, tizedik fejezet, első feladat. 
Hol volt Zsófi? Hová megy még? 

Szia Zsófi! Ráérsz holnap délelőtt? Elmegyünk múzeumba? 

Hát még nem tudom. 
Fodrászhoz akartam menni és cipőboltba szeretnék menni. 
Szeretnék egy nyári cipőt. 
Nem megyünk együtt oda? 
Tényleg csak egy cipő kell. 
Ruhaboltba nem megyünk be. 
És ma akartam venni húst a hentesnél, 
de nem volt túl szép, úgyhogy nem vettem. 
Oda vissza kell mennem holnap. 
Múzeumban tegnapelőtt voltam Katival, 
most oda sem akarok menni. 
Vagy beülünk egy cukrászdába? 
Van itt egy nagyon jó cukrászda, a könyvesbolt mellett. 

`,
    audio: "29_Hol_volt_Zsófi,_hová_megy_még.mp3"
  },
  {
    title: " 10 · Melyik boltban mondják ezt",
    content: `[zene] 
Harmincadik hallásértés, tizedik fejezet, második feladat. 
Melyik boltban mondják ezt? 

- Egy képeslap százhúsz forintba kerül. 

A: Negyvenkettes vagy negyvenhármas szandált kér. 

B: A feje is fáj, vagy csak a torka? 

C: Fekete tollat kér vagy kéket? 

D: Csak angol nyelvű újságunk van, német nincs. 

E: És ez a nyaklánc hogy tetszik? 

F: Van krumplis kenyerünk is. 

G: Milyen hajat szeretnél? 

`,
    audio: "30_Melyik_boltban_mondják_ezt.mp3"
  },
  {
    title: " 10 · Hová menjünk",
    content: `[zene] 
Harmincegyedik hallásértés, tizedik fejezet, harmadik feladat. 
Hová menjünk? 

- Eszünk egy fagyit? 

A: Nagyon fáradt vagyok. Nem iszunk egy kávét? 

B: Valamit akarok csinálni a hajammal. 

C: Nem utazunk valahova nyáron? Hozunk egy utazási katalógust valahonnan? 

D: Fáj a fejem kicsit. Nincs gyógyszered, ugye? 

E: Ráérsz most? Nincs füzetem. Veszünk egyet valahol? 

F: Szeretnék venni egy szép gyűrűt. Nézünk egyet valahol? 

G: Nincs egy jó futócipőm. 

`,
    audio: "31_Hová_menjünk.mp3"
  },
  {
    title: " 10 · Hol volt Andrea tegnap",
    content: `[zene] 
Harminckettedik hallásértés, tizedik fejezet, negyedik feladat. 
Hol volt Andrea tegnap? Számozd be! 
Mit csináltál tegnap? 

Hát elég sok mindent. 
Reggel gyorsan bementem a postára, 
küldtem haza egy szép képeslapot, 
mert a barátom szereti a képeslapokat. 
Aztán vettem kenyeret és felvágottat. 
A másodikon van egy gyógyszertár, ott vettem gyógyszert, 
mert kicsit fájt a torkom. 
Aztán vettem egy olasz útikönyvet, 
mert a nyáron szeretnék Rómába utazni. 
Aztán telefonált Peti és mondta, 
hogy egy fagyizóban ülnek. 
Kérdezte, hogy jövök-e, de mondtam, hogy nem, 
mert túl hideg most nekem egy fagyi. 
Inkább Szandrával találkoztam. 
Bementünk egy új boltba és vettünk egy szoknyát és egy nadrágot. 
Szandra aztán bement egy ékszerüzletbe is, 
de én oda már nem mentem be. 
Inkább hazamentem, mert már nagyon fájt a torkom. 

`,
    audio: "32_Hol_volt_Andrea_tegnap.mp3"
  },
  {
    title: " 11 · A fiú és a lány 1",
    content: `11.A fiú és a lány

Bemegyünk a bevásárlóközpontba

- Szeretsz vásárolni? Miért? Ha nem, miért nem?

- Mit szeretsz vásárolni? 

- Hol szeretsz vásárolni?

- Milyen gyakran vásárolsz ruhát, cipőt,táskát, könyvet?

- Hol vannak a legjobb boltok a városban?

- Kivel mész vásárolni?


A fiú mondja
Tegnap este étterembe akartunk menni a barátnőmmel. 
A bevásárlóközpontban van a kedvenc olasz éttermünk. 
Én már nagyon éhes voltam, 
de vacsora előtt ő még beugrott a drogériába "csak egy percre".
Én nem mentem be, kint vártam. 20 percet... 
Végre kijött a drogériából.
"Hosszú volt a sor." Már majdnem leültünk enni, 
amikor észrevett egy "gyönyörű" cipőt az egyik kirakatban. 
Bement a boltba felpróbálni,
de 38-as méretben nem volt. 
"Szerencsére" volt még egy ugyanolyan cipőbolt az első emeleten. 
Felmentünk tehát az első emeletre, de az a bolt már nem volt nyitva. 
"Természetesen" visszamentünk az első cipőboltba, 
ahol azt mondták, hogy egy másik bevásárlóközpontban még lehet kapni ugyanilyen cipőt. 
Így átmentünk a másik áruházba, ahol találtunk 38-asat. 
De akkor már túl késő volt, az olasz étterembe nem mentünk vissza. 
Inkább beültünk ott egy kínai büfébe. 

`,
    audio: "33_A_fiú_és_a_lány_1.mp3"
  },
  {
    title: " 11 · A fiú és a lány 2",
    content: `Bemegyünk a bevásárlóközpontba

A lány mondja
Tegnap este a barátom éhes volt, mint mindig.
A bevásárlóközpontban van egy olasz étterem, amit nagyon szeretünk, oda indultunk. 
Ő már nagyon éhes volt. 
Mindig éhes! 
A bejáratnál volt egy drogéria, beugrottam oda egy percre.
Na jó, pár percre. 
Ő persze nem jött be, és ideges volt, amikor kimentem. 
Siettünk az étterembe, de észrevettem egy gyönyörű cipőt a kirakatban. 
Tényleg gyönyörű volt! 
Bementem és felpróbáltam. 
Sajnos nem volt 38-as méretben, 
de szerencsére volt még egy ugyanolyan cipőbolt az első emeleten. 
Felmentünk tehát az első emeletre, 
de az a bolt már zárva volt.
Visszamentünk az első cipőboltba, ahol azt mondták,
hogy egy másik bevásárlóközpontban még lehet kapni ugyanolyan cipőt.
Így átmentünk a másik áruházba, ahol találtunk 38-asat. 
Nagyon örültem, de a barátom már ideges volt. Nem értem... 
Csak pár perc volt az egész...
Végül már annyira éhes volt, hogy beültünk egy kínai étterembe. 
Pedig még láttam egy jó szoknyát is! 

`,
    audio: "34_A_fiú_és_a_lány_2.mp3"
  },
  {
    title: " 11 · Merre megyünk",
    content: `[zene] 
Harmincötödik hallásértés, tizenegyedik fejezet. 
Merre megyünk? 

Le vagy fel? Lemegyünk a földszintre? 

Nem megyünk le az elsőre? Van ott egy jó étterem. 

Küldök egy levelet a nagymamámnak. Felmegyünk a postára? 

A földszinten láttam egy virágboltot. Lemegyünk oda? 

Szeretnék még lemenni az elsőre. Talán még nyitva van a drogéria. 

Szeretnék enni egy levest. Felmegyünk egy kínai étterembe? 

Lejössz még a földszintre? Van ott egy jó cipőbolt. 

A feleségem is itt van az elsőn. Lemegyünk? 

`,
    audio: "35_Merre_megyünk.mp3"
  },
  {
    title: " 12 · Megcsináltad már",
    content: `12.Megcsináltad már?
Két lakótárs beszélget
<span class="speaker">Peti:</span> Te már megcsináltál mindent?
<span class="speaker">Tomi:</span> Á, dehogy! Egy órája csinálom a latin házit, de még mindig nincs kész.
<span class="speaker">Peti:</span> Ez most szerintem is nagyon sok. Két vizsga egy nap... A fizika készen van?
<span class="speaker">Tomi:</span> Igen, a fizikát már megírtam a hétvégén.
<span class="speaker">Peti:</span> De jó neked! Én csak most írom. És meg is tanultad?
<span class="speaker">Tomi:</span> Nem, majd holnap korán kelek fel vagy majd megtanulom a buszon.
<span class="speaker">Peti:</span> Te tudod! Én nem szeretek a buszon tanulni. A biológiát megtanultad?
<span class="speaker">Tomi:</span> Meg.
<span class="speaker">Peti:</span> És a magyar leckét is megírtad?
<span class="speaker">Tomi:</span> Az még nincs kész, most írom.
<span class="speaker">Peti:</span> A kémiát megcsináltad?
<span class="speaker">Tomi:</span> Nem, azt majd reggel csinálom meg.
<span class="speaker">Peti:</span> Azt is? Szerintem nem leszel kész.
<span class="speaker">Tomi:</span> Nem tudom, de nem is érdekel, fáradt vagyok már! Tanulhatok végre? 

`,
    audio: "36_Megcsináltad_már.mp3"
  },
  {
    title: " 12 · Mi a fontos",
    content: `[zene] 
Harminchetedik hallásértés, tizenkettedik fejezet. 

Mi a fontos? 

<span class="speaker">--</span> Szia! Kész van a házi dolgozatod? 
<span class="speaker">--</span> Igen, már múlt héten megírtam. 

<span class="speaker">--</span> Szia! Mi újság? 
<span class="speaker">--</span> Semmi különös. 
&nbsp;&nbsp;&nbsp;&nbsp;Fáradt vagyok. 
&nbsp;&nbsp;&nbsp;&nbsp;Tegnap egész nap a kémiát tanultuk. 
  
<span class="speaker">--</span> Otthon voltatok egész nap? 
<span class="speaker">--</span> Igen, délelőtt tanultunk, aztán a barátnőm főzött spagettit. 
&nbsp;&nbsp;&nbsp;&nbsp;Azt megettük, aztán tanultunk egész délután. 

<span class="speaker">--</span> Este volt egy jó krimi a tévében. 
&nbsp;&nbsp;&nbsp;&nbsp;Azt sem láttátok? 
<span class="speaker">--</span> Hát néztük, de aztán inkább tanultunk. 
&nbsp;&nbsp;&nbsp;&nbsp;Ja, és megittunk egy üveg bort.
[zene]
`,
    audio: "37_Mi_a_fontos.mp3"
  },
  {
    title: " 13 · Magyar szokások",
    content: `[zene] 
Harmincnyolcadik hallásértés, tizenharmadik fejezet: Magyar szokások. 

Szerinted igaz vagy hamis? 

Ha valakinek névnapja van, lehet neki ajándékot adni. 
Április elsején lehet hazudni. 
Húsvétkor meg kell locsolni a lányokat és a nőket. 
December ötödikén ki kell tenni a csizmát az ablakba, mert jön a Mikulás. 
Újévkor lencsét kell enni. 
Ha valaki tüsszent, akkor nem kell semmit mondani. 
Ebéd előtt nem szabad azt mondani, hogy jó étvágyat! 
Idős néniknek csókolommal szoktunk köszönni. 
Vizsga előtt azt kell mondani, hogy kéz- és lábtörést! 
Ha koccintunk, azt mondjuk, hogy egészségünkre! 
Sörrel nem szabad koccintani. 
A pincérnek tilos borravalót adni. 
Tilos az utcán dohányozni. 
Budapesten a buszra elől kell felszállni. 
A Margit-szigeten nem szabad csókolózni.
[zene] 
`,
    audio: "38_Magyar_szokások.mp3"
  },
  {
    title: " 13 · Kinek mikor van a születésnapja",
    content: `[zene] 
Harminckilencedik hallásértés. 
Tizenharmadik fejezet: 

Kinek mikor van a születésnapja? 

Emma nyáron született, július 21-én. 
Emma férje ősszel, november 30-án. 
Adél tavasszal született, április 11-én. 
Adél férje pedig szintén áprilisban, de 20-án. 
Dávid ugyanazon a napon született, mint Adél, csak nem áprilisban, hanem augusztusban. 
Barbara karácsonykor ünnepli a születésnapját, december 25-én. 
Lili októberi, 30-án született. 
[zene]
`,
    audio: "39_Kinek_mikor_van_a_születésnapja.mp3"
  },
  {
    title: " 14 · Az orvosnál",
    content: `[zene] 
Negyvenedik hallásértés, tizennegyedik fejezet. 
Az orvosnál. 
A fogorvosnál. 

Mit mond a fogorvos? 

<span class="speaker">--</span> Halló! Fogorvosi rendelő. 
&nbsp;&nbsp;&nbsp;&nbsp;Jó napot kívánok! 
&nbsp;&nbsp;&nbsp;&nbsp;Miben segíthetek? 
<span class="speaker">--</span> Jó napot kívánok! 
&nbsp;&nbsp;&nbsp;&nbsp;Időpontot szeretnék kérni még ma, ha lehet. 
&nbsp;&nbsp;&nbsp;&nbsp;Nagyon fáj a fogam. 
<span class="speaker">--</span> Volt már itt korábban? 
<span class="speaker">--</span> Nem, nem voltam. 
<span class="speaker">--</span> Ön nem magyar, ugye? 
<span class="speaker">--</span> Nem, német vagyok. 
&nbsp;&nbsp;&nbsp;&nbsp;Itt tanulok az orvosi egyetemen. 
<span class="speaker">--</span> Van TAJ kártyája? 
<span class="speaker">--</span> Van. 
<span class="speaker">--</span> Mondja a nevét, legyen szíves! 
<span class="speaker">--</span> Hauke Schmidt. 
<span class="speaker">--</span> Rendben. 
&nbsp;&nbsp;&nbsp;&nbsp;Ma este hétkor megfelel? 
<span class="speaker">--</span> Igen, megfelel. Köszönöm. 
<span class="speaker">--</span> Nincs mit. Viszontlátásra! 
<span class="speaker">--</span> Viszontlátásra! 
[zene]
`,
    audio: "40_Az_orvosnál.mp3"
  },
  {
    title: " 14 · A fogorvosi rendelőben 1",
    content: `ÜLJÖN LE!

<span class="speaker">--</span> Jó napot kívánok, doktor úr!
<span class="speaker">--</span> Jó napot kívánok! 
&nbsp;&nbsp;&nbsp;&nbsp;Üljön le ide, kérem! Mi a panasza?
<span class="speaker">--</span> Tegnap óta nagyon fáj a fogam.
<span class="speaker">--</span> Értem. Hol fáj a foga?
<span class="speaker">--</span> Itt felül.
<span class="speaker">--</span> Rendben. Nyissa ki a száját,
&nbsp;&nbsp;&nbsp;&nbsp;kérem!... Igen, látom már. 
&nbsp;&nbsp;&nbsp;&nbsp;Lyukas a foga. 
&nbsp;&nbsp;&nbsp;&nbsp;Most adok egy érzéstelenítőt.
&nbsp;&nbsp;&nbsp;&nbsp;Menjen ki, kérem, 
&nbsp;&nbsp;&nbsp;&nbsp;azután körülbelül 10 perc múlva szólítjuk.
<span class="speaker">--</span> Nagy a baj?
<span class="speaker">--</span> Ne aggódjon, csak betömöm a fogát,
&nbsp;&nbsp;&nbsp;&nbsp;és készen is vagyunk...
... 
`,
    audio: "41_A_fogorvosi_rendelïben_1.mp3"
  },
  {
    title: " 14 · A fogorvosi rendelőben 2",
    content: `[zene] 
TESSÉK LEÜLNI!
<span class="speaker">--</span> Jó napot kívánok, doktor úr!
<span class="speaker">--</span> Jó napot kívánok! 
&nbsp;&nbsp;&nbsp;&nbsp;Tessék ide leülni, kérem! 
&nbsp;&nbsp;&nbsp;&nbsp;Mi a panasza?
<span class="speaker">--</span> Tegnap óta nagyon fáj a fogam.
<span class="speaker">--</span> Értem. Hol fáj a foga?
<span class="speaker">--</span> Itt felül.
<span class="speaker">--</span> Rendben. 
&nbsp;&nbsp;&nbsp;&nbsp;Tessék kinyitni a száját!...
&nbsp;&nbsp;&nbsp;&nbsp;Igen, látom már. 
&nbsp;&nbsp;&nbsp;&nbsp;Lyukas a foga.
&nbsp;&nbsp;&nbsp;&nbsp;Most adok egy érzéstelenítőt. 
&nbsp;&nbsp;&nbsp;&nbsp;Tessék kimenni, kérem, 
&nbsp;&nbsp;&nbsp;&nbsp;azután körülbelül 10 perc múlva szólítjuk.  
<span class="speaker">--</span> Nagy a baj?
<span class="speaker">--</span> Ne tessék aggódni, 
&nbsp;&nbsp;&nbsp;&nbsp;csak betömöm a fogát, és készen is vagyunk...
`,
    audio: "42_A_fogorvosi_rendelïben_2.mp3"
  },
  {
    title: " 14 · A kezelés után 1",
    content: `[zene] 
<span class="speaker">--</span> ...készen is vagyunk. 
&nbsp;&nbsp;&nbsp;&nbsp;Ma este már ne egyen, ha lehet. 
&nbsp;&nbsp;&nbsp;&nbsp;Adok egy receptet,
&nbsp;&nbsp;&nbsp;&nbsp;menjen el a patikába és váltsa ki ezt a fájdalomcsillapítót! 
&nbsp;&nbsp;&nbsp;&nbsp;Ha valami gond van, vagy fájdalmat érez,
&nbsp;&nbsp;&nbsp;&nbsp;akkor telefonáljon!
<span class="speaker">--</span> Nagyon szépen köszönöm!
&nbsp;&nbsp;&nbsp;&nbsp;Viszontlátásra!
<span class="speaker">--</span> Minden jót!
`,
    audio: "43_A_kezelés_után_1.mp3"
  },
  {
    title: " 14 · A kezelés után 2",
    content: `[zene] 
<span class="speaker">--</span> ... készen is vagyunk. 
&nbsp;&nbsp;&nbsp;&nbsp;Ma este már ne tessék enni, ha lehet.
&nbsp;&nbsp;&nbsp;&nbsp;Adok egy receptet, 
&nbsp;&nbsp;&nbsp;&nbsp;tessék elmenni a patikába és tessék kiváltani ezt a fájdalomcsillapítót! 
&nbsp;&nbsp;&nbsp;&nbsp;Ha valami gond van,
&nbsp;&nbsp;&nbsp;&nbsp;vagy fájdalmat érez, akkor tessék telefonálni!  
<span class="speaker">--</span> Nagyon szépen köszönöm!
&nbsp;&nbsp;&nbsp;&nbsp;Viszontlátásra!
<span class="speaker">--</span> Minden jót!
`,
    audio: "44_A_kezelés_után_2.mp3"
  },
  {
    title: " 14 · Mi történt tegnap",
    content: `[zene] 
Negyvenötödik hallásértés, tizennegyedik fejezet, első feladat. 
Mi történt tegnap? 
Milyen sorrendben? Tegnap rosszul lett a nagypapám. 
Hívtuk az orvost, szerencsére jött húsz perc múlva. 
Megmérte a vérnyomását, megvizsgálta, beadott neki egy injekciót, aztán hívta a mentőt. 
Még este bementünk mi is a kórházba. 
Egy nővér megmutatta a kórtermet, mert nem találtuk. 
[zene]
`,
    audio: "45_Mi_történt_tegnap.mp3"
  },
  {
    title: " 14 · Mi lehet a diagnózis",
    content: `[zene] 
Negyvenhatodik hallásértés, tizennegyedik fejezet, második feladat. 
Mi lehet a diagnózis? 
Nagyon fáj az egyik fogam, nem tudok enni sem. 
Tegnapelőtt nem is ettem sokat, de tegnap óta nagyon erős hasmenésem van és gyomorgörcsöm van. 
Nem vagyok éhes, szerencsére lázam nincs. 
Rosszul vagyok, fáj mindenem, tüsszögök, köhögök, folyik az orrom. 
Van egy kis lázam is. 
Tegnap fociztunk és elestem és nagyon fáj a lábam. 
Nem tudok menni sem. 
[zene]
`,
    audio: "46_Mi_lehet_a_diagnózis.mp3"
  }
];

/*
 * 如果你有约 80，可以继续添加对象。
 * 下面这段会自动补齐到 80 个示例卡片，方便先检查页面布局。
 * 正式使用时，建议删除这段示例补齐代码，并把 lessons 数组填成真实的 80。
 */

for (let i = lessons.length + 1; i <= 46; i += 1) {
  const number = String(i).padStart(2, "0");
  lessons.push({
    title: ` ${number} · 请填写课文标题`,
    content: `<p>请在 audio.js 的 lessons 数组中填写 ${number}的课文内容。</p>`,
    audio: `lesson-${number}.mp3`
  });
}


const lessonList = document.getElementById("lesson-list");
const lessonCount = document.getElementById("lesson-count");
const audio = document.getElementById("lesson-audio");

const PLAY_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.8c0-.8.9-1.3 1.6-.9l11 6.7a1.6 1.6 0 0 1 0 2.8l-11 6.7c-.7.4-1.6-.1-1.6-.9V4.8z"></path>
  </svg>`;

const PAUSE_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 4.5A1.5 1.5 0 0 1 8 6v12a1.5 1.5 0 0 1-3 0V6a1.5 1.5 0 0 1 1.5-1.5zm11 0A1.5 1.5 0 0 1 19 6v12a1.5 1.5 0 0 1-3 0V6a1.5 1.5 0 0 1 1.5-1.5z"></path>
  </svg>`;

const STOP_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="5" width="14" height="14" rx="1.8"></rect>
  </svg>`;

function renderLessons() {
  lessonCount.textContent = `共 ${lessons.length}`;

  lessonList.innerHTML = lessons.map((lesson, index) => {
    const safeTitle = escapeHtml(lesson.title);
    const safeAudio = escapeHtml(lesson.audio);
    return `
      <article class="lesson-card" data-lesson-index="${index}">
        <div class="lesson-card-header">
          <div class="audio-controls" aria-label=" ${index + 1}音频控制">
            <button
              class="audio-button play-button"
              type="button"
              data-action="play"
              aria-label="播放：${safeTitle}"
              title="播放 / 暂停">
              ${PLAY_ICON}
            </button>
            <button
              class="audio-button stop-button"
              type="button"
              data-action="stop"
              aria-label="停止全部音频"
              title="停止">
              ${STOP_ICON}
            </button>
          </div>
          <h3 class="lesson-title">${safeTitle}</h3>
        </div>
        <hr class="lesson-divider">
        <div class="lesson-content">${lesson.content}</div>
      </article>`;
  }).join("");

  lessonList.addEventListener("click", handleLessonClick);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function resetAllPlayButtons() {
  document.querySelectorAll('.play-button').forEach(button => {
    button.innerHTML = PLAY_ICON;
    button.setAttribute("aria-label", button.closest(".lesson-card")
      ? `播放：${button.closest(".lesson-card").querySelector(".lesson-title").textContent}`
      : "播放");
  });
}

function stopAllAudio() {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  resetAllPlayButtons();
  audio.dataset.currentLesson = "";
}

function handleLessonClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest(".lesson-card");
  if (!card) return;

  const action = button.dataset.action;
  const lessonIndex = Number(card.dataset.lessonIndex);

  if (action === "stop") {
    stopAllAudio();
    return;
  }

  if (action === "play") {
    toggleLessonPlayback(lessonIndex, button);
  }
}

function toggleLessonPlayback(lessonIndex, button) {
  const lesson = lessons[lessonIndex];
  if (!lesson || !lesson.audio) return;

  const isSameLesson = Number(audio.dataset.currentLesson) === lessonIndex;
  const isPlaying = !audio.paused && !audio.ended;

  // 当前课正在播放：点击同一按钮即暂停。
  if (isSameLesson && isPlaying) {
    audio.pause();
    button.innerHTML = PLAY_ICON;
    button.setAttribute("aria-label", `播放：${lesson.title}`);
    return;
  }

  // 当前课已暂停：继续播放，不重新下载音频。
  if (isSameLesson && audio.paused && audio.getAttribute("src")) {
    audio.play().then(() => {
      button.innerHTML = PAUSE_ICON;
      button.setAttribute("aria-label", `暂停：${lesson.title}`);
    }).catch(handlePlaybackError);
    return;
  }

  // 播放新课前先停止并重置所有音频状态，保证同一时间只有一个音频。
  stopAllAudio();

  audio.dataset.currentLesson = String(lessonIndex);
  audio.src = lesson.audio;
  audio.load();

  audio.play().then(() => {
    button.innerHTML = PAUSE_ICON;
    button.setAttribute("aria-label", `暂停：${lesson.title}`);
  }).catch(handlePlaybackError);
}

function handlePlaybackError(error) {
  console.error("音频播放失败：", error);
  stopAllAudio();
  // 例如音频文件不存在、路径错误或浏览器不支持该格式时，
  // 浏览器控制台会显示错误信息。
}

audio.addEventListener("ended", stopAllAudio);
audio.addEventListener("error", () => {
  resetAllPlayButtons();
  audio.dataset.currentLesson = "";
});

renderLessons();
