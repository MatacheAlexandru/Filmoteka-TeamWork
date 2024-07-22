### Task 1: Căutare și Afișare a Vremii Curente

**Responsabilități:**

- **HTML:**
  - Crearea unui formular de căutare cu un input, un buton și o secțiune pentru
    afișarea orașelor favorite.
  - Implementarea unei stelute pentru marcarea orașelor favorite, o iconiță GPS
    pentru locația curentă și o listă de orașe favorite cu posibilitatea de
    ștergere.( si extindere a listei)
- **SCSS:**
  - Stilizarea formularului de căutare și a listei de orașe favorite pentru a se
    adapta la diferite dimensiuni de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**
  - Implementarea funcției de căutare pentru a prelua input-ul utilizatorului.
  - Gestionarea orașelor favorite:
    - Adăugarea/stergerea orașelor favorite.
    - Afișarea listei de orașe favorite.
    - Gestionarea stării stelutei (default sau galbenă).
  - Implementarea funcționalității de afișare a imaginii orașului căutat în bara
    de căutare folosind `getRandomImages`.
  - Implementarea gestionării erorilor pentru cererile API și a elementelor
    interactive pentru a îmbunătăți experiența utilizatorului.
  - Exportarea funcțiilor necesare pentru a comunica cu task-urile 3 și 4 pentru
    a actualiza cardul de vreme curentă.

### Task 2: Afișarea Meteo Data, Ora Curentă si Citat Inspirativ:

**Responsabilități:**

- **HTML:**
  - Crearea unui card pentru afișarea zilnica a datei, ziua săptămânii,
    iconițele vremii, temperatura minima și maxima.
  - Adăugarea unei secțiuni pentru afișarea citatului inspirator. (citatul
    trebuie sa aibe legatura cu orasul afisat)
- **SCSS:**
  - Stilizarea cardului de prognoză zilnică pentru a se adapta la diferite
    dimensiuni de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**

  - Implementarea gestionării erorilor pentru cererile API și a elementelor
  interactive pentru a îmbunătăți experiența utilizatorului.
  <!--  -->

### Task 3 și Task 4: Afișarea Detaliilor Avansate

**Responsabilități:**

- **HTML:**
  - Crearea secțiunii pentru detalii avansate, inclusiv butoanele "today" și "5
    days", cardul de prognoză pe 5 zile și secțiunea detaliată a prognozei
    orare.
  - Crearea cardului pentru afișarea datelor meteo curente.
- **SCSS:**
  - Stilizarea secțiunii pentru a asigura o afișare corectă pe diferite
    dimensiuni de ecran (desktop, tabletă, mobil).
  - Implementarea media queries pentru a adapta stilurile la diferite dimensiuni
    de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**

  - Implementarea funcționalităților pentru afișarea detaliilor avansate.
  - Gestionarea stării de afișare a cardurilor și secțiunilor de prognoză meteo,
    inclusiv trecerea între vizualizarea zilnică și cea pe 5 zile.
  - Gestionarea stării de afișare/ascundere a secțiunilor relevante în funcție
    de interacțiunile utilizatorului (ex. click pe butonul "more info").
  - Implementarea gestionării erorilor pentru cererile API și a elementelor
    interactive pentru a îmbunătăți experiența utilizatorului.
  - Exportarea funcțiilor pentru a permite task-urilor 1 și 5 să actualizeze
    datele meteo detaliate.
  - Implementarea funcției pentru a obține și afișa prognoza meteo pe 5 zile
    folosind `getWeatherForecastByCityName`.
  - Gestionarea stării de afișare/ascundere a secțiunii de prognoză curentă și
    secțiunii de prognoză pe 5 zile.

  - Exportarea funcțiilor pentru a permite task-urilor 1, 3 și 4 să actualizeze
    prognoza în funcție de orașul căutat.

### Task 5: Afișarea Graficelor Meteo

**Responsabilități:**

- **HTML:**
  - Crearea secțiunii pentru afișarea graficelor meteo.
- **SCSS:**
  - Stilizarea secțiunii pentru grafice pentru a asigura o afișare corectă pe
    diferite dimensiuni de ecran (desktop, tabletă, mobil).
  - Stilizarea mesajelor de eroare și a elementelor interactive pentru a
    îmbunătăți UX-ul.
- **JS:**
  - Utilizarea librăriilor de graficare (ex. Chart.js) pentru a crea și popula
    graficele cu date meteo avansate (ex. temperatură, umiditate, viteza
    vântului și presiune atmosferică).
  - Implementarea funcționalității pentru afișarea graficelor meteo în secțiunea
    "Show Chart".
  - Implementarea gestionării erorilor pentru cererile API și a elementelor
    interactive pentru a îmbunătăți experiența utilizatorului.
  - Exportarea funcțiilor pentru a permite task-urilor 1, 3 și 4 să actualizeze
    graficele în funcție de orașul căutat.

## UX-ul (User Experience)

reprezintă experiența utilizatorului și se referă la ansamblul de sentimente,
emoții și reacții pe care o persoană le are în timpul interacțiunii cu un
produs, sistem sau serviciu. Aceasta include aspecte precum:

1. **Ușurința de utilizare**: Cât de simplu și intuitiv este pentru utilizator
   să folosească produsul.
2. **Utilitate**: Măsura în care produsul satisface nevoile și așteptările
   utilizatorului.
3. **Accesibilitate**: Cât de accesibil este produsul pentru diverse categorii
   de utilizatori, inclusiv cei cu dizabilități.
4. **Funcționalitate**: Gradul în care produsul își îndeplinește scopul pentru
   care a fost creat.
5. **Design vizual**: Estetica produsului și cât de plăcut este pentru
   utilizator din punct de vedere vizual.
6. **Performanță**: Viteza și eficiența cu care produsul funcționează.

Un UX bun este crucial pentru succesul oricărui produs digital, deoarece poate
influența semnificativ satisfacția utilizatorului și loialitatea acestuia față
de brand. Procesul de design al UX implică cercetarea utilizatorilor,
prototiparea, testarea și iterarea continuă pentru a asigura că produsul final
este cât mai potrivit pentru utilizatori.

## Animation css:

- `https://www.youtube.com/watch?v=nJ81DFmgHdU`
