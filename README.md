# LaPas – Aplicație web pentru explorarea locațiilor turistice

LaPas este o aplicație web interactivă ce permite utilizatorilor să descopere restaurante, hoteluri și atracții turistice într-o anumită zonă geografică, folosind o hartă interactivă Google și filtre inteligente în funcție de tip și rating.

---

Scopul aplicației

Această aplicație a fost dezvoltată ca parte a unei lucrări de disertație și are ca obiectiv principal integrarea unor tehnologii moderne din ecosistemul JavaScript pentru a oferi o experiență de navigare intuitivă, scalabilă și adaptată nevoilor turismului digital.

---

 Tehnologii utilizate

Proiectul este construit folosind următorul stack de tehnologii:

- **React.js** – Biblioteca principală pentru dezvoltarea interfeței
- **Google Maps JavaScript API** – Pentru afișarea hărții interactive
- **RapidAPI – Travel Advisor API** – Pentru obținerea de date turistice (restaurante, hoteluri, atracții)
- **Material-UI** – Pentru stilizarea componentelor
- **Axios** – Pentru apeluri HTTP asincrone
- **Lodash.debounce** – Pentru optimizarea apelurilor API
- **HTML5 + CSS3 + JavaScript (ES6+)**

---

Instrucțiuni pentru rulare locală

1.  Clonarea proiectului

```bash
git clone https://github.com/Stefan-Emanuel/LaPas
cd LaPas
```

2. Instalarea dependențelor
   bash
   npm install

3. Configurarea fișierului .env
   Creează un fișier .env în rădăcina proiectului și adaugă următoarele variabile (cheile trebuie generate din conturile tale de pe RapidAPI și Google Cloud):

REACT_APP_GOOGLE_MAPS_API_KEY=cheia_ta_google
REACT_APP_RAPIDAPI_KEY=cheia_ta_rapidapi
REACT_APP_RAPIDAPI_HOST=travel-advisor.p.rapidapi.com

4. Pornirea aplicației
   bash
   npm start

Aplicația va fi disponibilă în browser la adresa:

http://localhost:3000

 Cerințe de sistem:

Node.js ≥ 14.x
Acces la internet (pentru interogarea API-urilor)
Chei API valide pentru Google Maps și RapidAPI
