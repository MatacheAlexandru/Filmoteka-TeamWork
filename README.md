
#### Proiect Weather App - Documentație și Ghid de Utilizare

### Descrierea Proiectului

Acest proiect este o aplicație web de tip "Weather App" care afișează date meteo pentru un oraș specificat și o imagine relevantă a orașului folosind API-uri externe. Structura proiectului este concepută pentru a permite extinderea facilă a funcționalității prin adăugarea de noi componente și stiluri.

## Ghid de Fork și Gestionare

### Realizarea Fork-ului

1. **Accesează pagina proiectului pe GitHub:**
   - Mergi la pagina proiectului original pe GitHub. De exemplu, dacă proiectul se află la `https://github.com/originaluser/WeatherApp`, vizitează acest URL.

2. **Realizează Fork-ul:**
   - Apasă pe butonul "Fork" situat în colțul din dreapta sus al paginii. Acesta va crea o copie a proiectului în contul tău GitHub.

### Clonarea Proiectului cu GitHub Desktop

1. **Deschide GitHub Desktop:**
   - Asigură-te că ai instalat GitHub Desktop. Dacă nu, descarcă și instalează aplicația de pe [GitHub Desktop](https://desktop.github.com/).

2. **Clonează proiectul:**
   - După ce ai realizat fork-ul, vei fi redirecționat către copia proiectului din contul tău GitHub. Link-ul ar trebui să fie ceva de genul `https://github.com/<username>/WeatherApp`.
   - Copiază URL-ul acestui repository.

3. **Deschide GitHub Desktop și selectează opțiunea de clonare:**
   - În GitHub Desktop, apasă pe `File` în meniul de sus și selectează `Clone repository...`.
   - În fereastra care apare, selectează tab-ul `URL`.
   - Lipește URL-ul copiat al repository-ului din contul tău GitHub.
   - Selectează opțiunea `For my own purposes`.
   - Alege locația pe disc unde vrei să clonezi repository-ul și apasă pe butonul `Clone`.

### Instalarea Dependențelor

1. **Instalează dependențele:**
   - Rulează comanda următoare pentru a instala toate dependențele specificate în `package.json`:
   ```bash
   npm install
   ```

### Pornirea Proiectului

1. **Rulează proiectul local:**
   - După ce dependențele sunt instalate, pornește serverul de dezvoltare folosind comanda:
   ```bash
   npm run start
   ```

2. **Accesează aplicația în browser:**
   - După ce serverul de dezvoltare pornește, deschide browser-ul și navighează la `http://localhost:1234` (sau alt port specificat) pentru a vedea aplicația Weather App în acțiune.

Urmează acești pași și vei avea proiectul "Weather App" rulând pe mașina ta locală. Dacă întâmpini probleme sau ai nevoie de ajutor suplimentar, nu ezita să cauți documentația oficială a instrumentelor pe care le folosești sau să ceri ajutor în comunitățile de dezvoltatori.

### Adăugarea Noilor Funcționalități

1. **Adaugă fișierele HTML și JS în `partials`**: Creează componentele necesare
   și include-le în `index.html`.
2. **Adaugă fișierele SCSS în `sass`**: Stilizează noile componente și
   compilează SCSS în CSS.
3. **Extinde API-urile**: Adaugă noi funcții în fișierele din folderul `api` și
   importă-le în fișierele necesare.

### Commit și Push

După ce ai făcut modificările, adaugă, commit și push:

```bash
git add .
git commit -m "Added new functionality"
git push origin main
```

### Crearea unui Pull Request

1. Accesează pagina proiectului tău pe GitHub.
2. Apasă butonul "New Pull Request".
3. Descrie modificările tale și trimite Pull Request-ul pentru a fi revizuit și
   integrat în proiectul principal.

## Structura Fișierelor

- **index.html**: Fișierul principal HTML care include toate componentele
  necesare ale aplicației.
- **index.js**: Fișierul principal JavaScript care inițializează componentele
  aplicației.
- **index.css**: Fișierul CSS principal care include stilurile pentru întreaga
  aplicație.
- **apiOpenWeather.js**: Funcții pentru interacțiunea cu OpenWeather API.
- **apiPixabay.js**: Funcții pentru interacțiunea cu Pixabay API.

### Exemple (cum ar trebui să arate)

- **partials/**: Conține fișiere HTML și JS pentru componentele aplicației.
  - **searchExample.html**: Componente pentru bara de căutare.
  - **weather-cardExample.html**: Componente pentru cardul meteo.
  - **searchExample.js**: Logica pentru bara de căutare.
  - **weather-cardExample.js**: Logica pentru afișarea datelor meteo și imaginii
    orașului.
- **sass/**: Conține fișiere SCSS pentru stilizarea componentelor.
  - **searchExample.scss**: Stiluri pentru bara de căutare.
  - **weather-cardExample.scss**: Stiluri pentru cardul meteo.

## Funcționarea Codului și Încărcarea Componentelor

### index.html

Fișierul `index.html` include componentele HTML și scripturile necesare pentru
funcționarea aplicației. Componentele din folderul `partials` sunt incluse în
`index.html` folosind tag-ul `<include>`. Este esențial să înțelegem rolul
acestui tag și modul în care acesta facilitează structura și organizarea
codului.

#### Detalii despre Tag-ul `<include>`

Tag-ul `<include>` este un mecanism care permite includerea unor fișiere HTML
externe în documentul principal HTML. Acest lucru oferă mai multe avantaje, în
special pentru proiectele mari sau aplicațiile web care au nevoie de o structură
modulară și de o gestionare ușoară a componentelor.

##### Beneficiile utilizării Tag-ului `<include>`:

1. **Modularitate**: Permite dezvoltatorilor să împartă aplicația în componente
   mai mici și mai gestionabile. Fiecare componentă poate fi dezvoltată și
   întreținută separat, ceea ce face mai ușor adăugarea, eliminarea sau
   modificarea unei anumite părți a aplicației fără a afecta întregul cod.

2. **Reutilizarea codului**: Componentele pot fi reutilizate în mai multe părți
   ale aplicației fără a fi necesară duplicarea codului. De exemplu, o bară de
   căutare sau un card meteo pot fi incluse în mai multe pagini ale aplicației.

3. **Îmbunătățirea organizării codului**: Separarea componentelor în fișiere
   individuale ajută la menținerea codului curat și organizat. Acest lucru este
   deosebit de important în cazul proiectelor mari, unde codul poate deveni
   rapid dificil de gestionat.

4. **Întreținere ușoară**: Fișierele individuale sunt mai ușor de întreținut și
   de actualizat. Orice modificare făcută într-un fișier component se reflectă
   automat în toate locurile unde este inclus acel fișier, reducând riscul de
   erori și inconsistențe.

##### Cum funcționează Tag-ul `<include>`:

- **Sintaxa**: `<include src="./path/to/file.html"></include>`. Atributele
  tag-ului includ:

  - `src`: Specifică calea către fișierul HTML care trebuie inclus. Aceasta
    poate fi o cale relativă sau absolută, în funcție de locația fișierului.
  - **Exemplu**: `<include src="./partials/search.html"></include>` va include
    conținutul fișierului `search.html` din folderul `partials`.

- **Ordinea includerii**: Este important să plasezi tag-urile `<include>` în
  ordinea în care vrei să apară componentele pe pagină. De exemplu, dacă bara de
  căutare trebuie să apară înaintea cardului meteo, tag-ul
  `<include src="./partials/search.html"></include>` trebuie plasat înaintea
  tag-ului `<include src="./partials/weather-card.html"></include>`.

- **Includerea scripturilor**: Tag-ul `<include>` poate fi utilizat și pentru
  includerea scripturilor externe, asigurându-se că toate funcționalitățile
  necesare sunt disponibile la încărcarea paginii.

### index.js

Fișierul `index.js` este responsabil pentru inițializarea componentelor și
interacțiunea cu API-urile. Importă funcțiile de inițializare din fișierele JS
ale componentelor și le apelează la încărcarea paginii:

```javascript
import { initializeSearch } from './partials/search.js';
import { initializeWeatherCard } from './partials/weather-card.js';

document.addEventListener('DOMContentLoaded', async () => {
  initializeSearch(); // Inițializează bara de căutare
  initializeWeatherCard(); // Inițializează cardul meteo și afișează datele pentru București
});
```

Importul în JavaScript permite reutilizarea codului din alte fișiere, făcând
aplicația modulară și ușor de gestionat. Funcțiile de inițializare sunt apelate
la încărcarea paginii pentru a asigura că toate componentele sunt pregătite
pentru utilizare.

### Extinderea Funcționalității

#### Adăugarea unei noi componente HTML și JS

1. Creează un fișier HTML în folderul `partials` (e.g., `new-component.html`).
2. Creează un fișier JS corespunzător în același folder (e.g.,
   `new-component.js`).

#### Include componentele în index.html

Adaugă tag-ul `<include src="./partials/new-component.html"></include>` în
`index.html`.

### Inițializează componentele în index.js

Pentru a inițializa componentele în `index.js`, trebuie să importăm funcțiile de
inițializare din fișierele JavaScript corespunzătoare componentelor și să apelăm
aceste funcții în evenimentul `DOMContentLoaded`.

#### Importul funcțiilor din fișierele JS

În `index.js`, importăm funcțiile de inițializare din fișierele JS ale
componentelor. De exemplu:

```javascript
import { initializeSearch } from './partials/searchExample.js';
import { initializeWeatherCard } from './partials/weather-cardExample.js';
```

Aceasta permite reutilizarea codului din alte fișiere și face aplicația modulară
și ușor de gestionat.

#### Apelarea funcțiilor de inițializare

După importarea funcțiilor, le apelăm în evenimentul `DOMContentLoaded` pentru a
ne asigura că toate componentele sunt inițializate corect după încărcarea
completă a paginii.

```javascript
document.addEventListener('DOMContentLoaded', async () => {
  functionName();
});
```

### Exportul funcțiilor

Pentru a putea importa funcțiile dintr-un fișier JS, acestea trebuie exportate.
Iată cum poți face acest lucru:

1. **Definirea funcției**:

   În fișierul JS, definești funcția pe care vrei să o exporți:

   ```javascript
   function functionName() {
     // Logica pentru inițializarea barei de căutare
   }
   ```

2. **Exportul funcției**:

   Adaugi funcția la exporturi pentru a o face disponibilă pentru import în alte
   fișiere:

   ```javascript
   export { functionName };
   ```

Astfel, funcția `functionName` devine disponibilă pentru import în alte fișiere
JavaScript, cum ar fi `index.js`.

Prin utilizarea exportului și importului, poți organiza codul în module,
făcându-l mai ușor de întreținut și extins.

#### Stilizarea componentei

1. Creează un fișier SCSS în folderul `sass` (e.g., `new-component.scss`).
2. Include stilurile SCSS în `index.css` folosind un compilator SCSS (de
   exemplu, Parcel, webpack).

Importul SCSS folosind `@import` în CSS permite organizarea și gestionarea mai
bună a stilurilor, făcându-le modulare și ușor de extins.

```scss
@import './sass/searchExample.scss';
@import './sass/weather-cardExample.scss';
```

Crearea unui fișier SCSS pentru fiecare componentă ajută la menținerea unei
structuri clare și la izolarea stilurilor specifice fiecărei componente.

## Utilizarea API-urilor

Pentru a utiliza funcțiile din fișierele API, importă funcțiile necesare în
fișierul JS al componentei tale și apelează-le după cum este necesar.

```javascript
import { getWeatherByCityName } from './api/apiOpenWeather.js';

getWeatherByCityName('București')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
```
