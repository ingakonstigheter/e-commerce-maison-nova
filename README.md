# 🛍️ E-handelsplattform i Next.js

 Byggd med **Next.js** och **TypeScript**, där produkter hanteras via **Supabase** och **Prisma**. Plattformen erbjuder sök- och filterfunktioner samt interaktiva inslag som kontaktformulär och dynamiska produktsidor.

---

## 📑 Innehåll
- 📖 [Om projektet](#-om-projektet)
- ✨ [Funktioner](#-funktioner)
- 🛠 [Teknologier](#-teknologier)
- ⚙️ [Installation](#-installation)
- 🚀 [Användning](#-användning)
- 📂 [Projektstruktur](#-projektstruktur)
- 📈 [Arbetsflöde](#-arbetsflöde)
- 🗓 [Sprintplan](#-sprintplan)
- 🤝 [Bidra](#-bidra)
- 📚 [Lärdomar](#-lärdomar)
- 📜 [Licens](#-licens)

---

## 📖 Om projektet
Detta projekt är en **e-handelsplattform** byggd med **Next.js 15** och **TypeScript** som en del av en gruppövning. Plattformen är minimalistisk, responsiv och fokuserar på interaktivitet och användarvänlighet.  

Vi använder **Supabase** med **Prisma** som backend för att hantera produktdata, istället för externa API:er.  

Projektet har också varit en övning i **agilt grupparbete**, inklusive versionskontroll med Git/GitHub, projekthantering med GitHub Projects, samt fokus på **tillgänglighet** genom tester med WAVE.  

Plattformen använder moderna Next.js-funktioner som **Server Components**, **Client Components**, **statiska och dynamiska routes** samt **asynkron datahantering**, vilket ger praktisk erfarenhet av verkliga webbutvecklingsprojekt.

## ✨ Funktioner
Plattformen erbjuder bland annat:  
✅ **Startsida med produköversikt** – visar ett urval av produkter med hero-sektion och CTA.  
✅ **Val av huvudkategori** – Man eller Kvinna med sub-navigation för ytterligare filtrering (t.ex. Kvinna → Accessoarer, Klänningar).  
✅ **Subkategori-navigation på Man/Kvinna-sidor** – En visuell nav under hero-sektionen med bilder för olika underkategorier.  
✅ **Sökfunktion** – hitta produkter snabbt.  
✅ **Dynamiska produktsidor** – visar titel, bild, beskrivning, pris, antal som betygsatt, totalt betyg visualiserat med stjärnor och rabattinformation (procentuell rabatt, nytt pris med gammalt överstruket).  
✅ **Lägg till i kassan** – visuell feedback vid klick.  
✅ **Feature-komponent på subkategori-sidor** – En karusellkomponent som visar de 4 bäst betygsatta produkterna för varje huvudkategori (Man/Kvinna), med rating och en review-kommentar. Går att bläddra åt höger och vänster.  
✅ **Kontaktformulär** – fält med för- och efternamn, e-post, dropdown-meny för land samt meddelandefält.  
✅ **Om oss-sida** – information om företaget.  
✅ **Admin-sida** – administrera produkter via `/admin/admin-products` (nåbar via manuell sökväg).

---

## 🛠 Teknologier
- [Next.js 15 (App Router)](https://nextjs.org/) – Ramverk för React, används för både server- och klientkomponenter.  
- [TypeScript](https://www.typescriptlang.org/) – Starkt typat språk för JavaScript som används i hela projektet.  
- [Supabase](https://supabase.com/) – Backend som hanterar databasen och autentisering.  
- [Prisma](https://www.prisma.io/) – ORM som används för att hämta, uppdatera och hantera data i Supabase.
- [Tailwind CSS](https://tailwindcss.com/) – CSS-ramverk för snabb och responsiv styling.  
- [WAVE](https://wave.webaim.org/) – Verktyg för att testa tillgänglighet.  

---

## ⚙️ Installation
```bash
# Klona repo
git clone https://github.com/ingakonstigheter/e-commerce-maison-nova

# Gå in i projektmappen
cd e-commerce-maison-nova

# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev
```

---

## 🚀 Användning
- **Startsida** → visar produkter + hero, välj huvudkategori (Man/Kvinna).  
- **Kvinna/Man-sidor** → filtrera produkter med sub-navigation efter underkategori.
- **Subkategori-navigation på Man/Kvinna-sidor** → Klicka på en kategori-bild för att filtrera produkter inom den underkategorin, eller välj "See All" för att visa alla produkter i huvudkategorin (Man/Kvinna).
- **Sök** → skriv produktnamn i sökfältet för att hitta produkter.  
- **Produktdetaljer** → klicka på produkt för att se titel, bild, beskrivning, pris, betyg och rabattinformation.  
- **Lägg till i kassan** → klicka på knappen “Lägg till i kassan” för visuell feedback.  
- **Feature-karusell på subkategori-sidor** → Bläddra mellan de 4 bäst betygsatta produkterna för varje huvudkategori och se rating samt kommentarer från recensioner.
- **Kontakt** → fyll i formulär med namn, e-post, land, meddelande , klicka på skicka.  
- **Om oss** → statisk sida med text och bild om företaget.  
- **Admin-sida** → gå till `/admin/admin-products` för att administrera produkter (endast nåbar via manuell sökväg för tillfället).

---

## 📂 Projektstruktur

```
|-- app/
|  |-- page.tsx            # Startsida
|  |-- about/page.tsx      # Om oss
|-- components/            # Återanvändbara komponenter                
|
|
```

---


## 📈 Arbetsflöde

👥 **Planering och sprintar (SCRUM)** – Kommande veckors arbete bröts ned i kort/issues på GitHub Projects, och varje teammedlem valde själv vilka kort de ville arbeta med.  

📅 **Daily standup & kontinuerlig kontakt** – Vi hade korta dagliga möten och höll kontinuerlig kontakt via chat för att följa upp och lösa problem snabbt.  

🌱 **Feature branches kopplade till GitHub Projects** – Varje ny branch skapades direkt från ett kort på GitHub Projects, vilket gjorde det enkelt att hålla koppling mellan planering och kod samt få en tydlig överblick över vilka funktioner som utvecklades.

🔍 **PR + kodgranskning** – Pull requests användes för att granska kod innan den mergades, vilket ökade kodkvaliteten.

---


## 🗓 Sprintplan

### Vecka 1 – Projektuppstart & Designplanering
- Valde en färdig Figma-design för att spara tid och få en tydlig visuell riktning.  
- Satt upp Next.js-projektet med TypeScript och App Router.  
- Bestämde mappstruktur och komponentstruktur för projektet.  
- Bröt ned designen i återanvändbara komponenter.  
- Skapade kort för varje funktion i GitHub Projects för att underlätta planering och spårbarhet.

### Vecka 2 – Kvalitetssäkring & Kodstandard
- Gick igenom koden tillsammans i gruppen och förklarade sina delar.  
- Identifierade områden där koden kunde förbättras.  
- Kom överens om **naming conventions** för filer, funktioner och kommentarer.  
- Testade tillgängligheten på sajten och varje sida med WAVE.  
- Optimerade grundläggande SEO för sidorna.  

### Vecka 3 – Backend & Databasintegration
- Flyttade all produktdata över till **Supabase** och började arbeta med **Prisma**.  
- Började implementera CRUD-funktionalitet.  
- Säkerställde att databaskopplingar fungerade korrekt och att data hämtades asynkront.  
- Fortsatte utveckla komponenter och integrera dem med backend-data.  

### Vecka 4 – Avslut & Finputs
- Avslutade pågående funktioner och testade hela flödet på sajten.  
- Finjusterade styling och UI enligt Figma-designen.  
- Säkerställde att alla sidor fungerade responsivt på olika skärmstorlekar.  
- Testade interaktiva element, som sök, filter, lägg till i kassan och kontaktformulär.  
- Förberedde projektet för redovisning och dokumentation i README.
---

## 🤝 Bidra

**Vill du bidra?**

1. **Forka** projektet
2. Skapa en **feature-branch** (`git checkout ......`)
3. **Commit & push**
4. Skicka en **Pull Request**

---

## 📚 Lärdomar

- **Skillnaden mellan Server & Client Components i Next.js** – Vi lärde oss när och varför man ska använda server- respektive klientkomponenter för att optimera prestanda och användarupplevelse.  
- **Agila metoder** – Vi fick praktisk erfarenhet av sprintplanering, backloghantering och samarbete i grupp enligt agila principer.  
- **API-användning** – Ursprungligen användes externa API:er, men vi fick även erfarenhet av att hämta och hantera data från **Supabase** via **Prisma**.  
- **Responsivitet** – Vi lärde oss att skapa gränssnitt som fungerar på olika skärmstorlekar med hjälp av Tailwind CSS och flexibla komponenter.  
- **Databashantering med Prisma & Supabase** – Vi fick förståelse för hur man definierar datamodeller, gör CRUD-operationer och integrerar en databas i ett Next.js-projekt.
  
---

## 📜 Licens

Detta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.

---

## 📌 Min reflektion
### Mitt bidrag till projektet

I projektet var jag framför allt ansvarig för produktflödet och adminfunktionerna. Jag byggde upp produktlistningen och de dynamiska produktsidorna där detaljer som pris, betyg och rabatt visas. Jag jobbade också med sökfunktionen samt filter- och sorteringslogik, så att användaren snabbt kunde hitta rätt produkt.
En annan viktig del var admin-sidorna, där jag satte upp CRUD-funktionalitet för att kunna lägga till, uppdatera och ta bort produkter. Till en början hämtade jag produktdata via ett externt API, men senare flyttade jag över allt till **Supabase** och kopplade ihop det med **Prisma**. Jag implementerade även **Zod** för att validera indata och säkra att databasen bara fick korrekt information.

### Tekniker jag använde
Under arbetets gång använde jag en blandning av både Server Components och Client Components, vilket gav mig en bättre förståelse för när det ena passar bättre än det andra. Jag jobbade också mycket med:

- **Prisma & Supabase** för databas och queries.
- **Zod** för validering.
- useSearchParams, useFormAction och routing för sök, formulär och navigation.
- State-hantering för att hålla koll på UI-logik.
- **Tailwind** för responsiv design.

Förutom det tekniska fick jag också mycket erfarenhet av **GitHub Projects** och versionshantering med **Git**, vilket gjorde samarbetet i gruppen mer strukturerat och agilt.

### Vad jag skulle vilja utveckla vidare

Om jag skulle fortsätta arbeta med projektet hade jag velat:
- förbättra **SEO** för att göra plattformen mer synlig,
- lägga in bättre felhantering och feedback till användaren,
- använda mer Suspense för att hantera laddning på ett snyggare sätt,
- koppla varukorgen till Stripe för en riktig checkout,
- och utforska parallell routing ännu mer för att optimera prestanda.
