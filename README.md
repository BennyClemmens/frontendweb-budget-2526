# Front-end Web Development Budget App version 2025-2026

This time round, I'm keeping as close as possible to the instructions.

## 1. React Basics

### Create-vite

```bash
pnpm create vite budget --template react-swc
```

```bash
benny@FLAB2025 MINGW64 /D/DATA/GIT/FRONTENDWEB/frontendweb-budget-2526 (main)
$ pnpm create vite budget --template react-swc
|
o  Use rolldown-vite (Experimental)?:
|  No
|
o  Install with pnpm and start now?
|  No
|
o  Scaffolding project in D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget...
|
—  Done. Now run:

  cd budget
  pnpm install
  pnpm dev
```

### Installeer de dependencies

```bash
benny@FLAB2025 MINGW64 /D/DATA/GIT/FRONTENDWEB/frontendweb-budget-2526 (main)
$ cd budget/

benny@FLAB2025 MINGW64 /D/DATA/GIT/FRONTENDWEB/frontendweb-budget-2526/budget (main)
$ pnpm install
! The local project doesn't define a 'packageManager' field. Corepack will now add one referencing pnpm@10.17.0+sha512.fce8a3dd29a4ed2ec566fb53efbb04d8c44a0f05bc6f24a73046910fb9c3ce7afa35a0980500668fa3573345bd644644fa98338fa168235c80f4aa17aa17fbef.
! For more details about this field, consult the documentation at https://nodejs.org/api/packages.html#packagemanager

Packages: +113
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 168, reused 113, downloaded 0, added 113, done

dependencies:
+ react 19.1.1
+ react-dom 19.1.1

devDependencies:
+ @eslint/js 9.36.0
+ @types/react 19.1.13
+ @types/react-dom 19.1.9
+ @vitejs/plugin-react-swc 4.1.0
+ eslint 9.36.0
+ eslint-plugin-react-hooks 5.2.0
+ eslint-plugin-react-refresh 0.4.21
+ globals 16.4.0
+ vite 7.1.7

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @swc/core, esbuild.                                               │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 2.6s using pnpm v10.17.0
```

### .gitignore

- Download de `.gitignore` van <https://github.com/github/gitignore/blob/main/Node.gitignore>

### eslint.config.js

- no linting errors in basic setup

```PS
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm lint

> budget@0.0.0 lint D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget
> eslint .

PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget>
```

- Stylistic plugin

```bash
pnpm add -D @stylistic/eslint-plugin
```

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm add -D @stylistic/eslint-plugin
Packages: +2
++
Progress: resolved 170, reused 114, downloaded 1, added 2, done

devDependencies:
+ @stylistic/eslint-plugin 5.4.0

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @swc/core, esbuild.                                               │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 2.4s using pnpm v10.17.0
```

- extra rules in `eslint.config.js` cfr. course
  - saving this file automatically corrects fixable stuff, hence some updates in the config file tiself
  - `pnpm lint` does the rest of the magic

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm lint

> budget@0.0.0 lint D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget
> eslint .


D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget\src\App.jsx
   1:33  error  Missing semicolon  @stylistic/semi
   2:43  error  Missing semicolon  @stylistic/semi
   3:33  error  Missing semicolon  @stylistic/semi
   4:19  error  Missing semicolon  @stylistic/semi
   7:40  error  Missing semicolon  @stylistic/semi
  32:4   error  Missing semicolon  @stylistic/semi
  35:19  error  Missing semicolon  @stylistic/semi

D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget\src\main.jsx
   1:35  error  Missing semicolon  @stylistic/semi
   2:46  error  Missing semicolon  @stylistic/semi
   3:21  error  Missing semicolon  @stylistic/semi
   4:28  error  Missing semicolon  @stylistic/semi
  10:2   error  Missing semicolon  @stylistic/semi

D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget\vite.config.js
  1:36  error  Missing semicolon  @stylistic/semi
  2:45  error  Missing semicolon  @stylistic/semi
  7:3   error  Missing semicolon  @stylistic/semi

✖ 15 problems (15 errors, 0 warnings)
  15 errors and 0 warnings potentially fixable with the `--fix` option.

 ELIFECYCLE  Command failed with exit code 1.
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm lint --fix

> budget@0.0.0 lint D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget
> eslint . "--fix"

PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm lint

> budget@0.0.0 lint D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget
> eslint .

PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget>
```

### vscode settings

- moved global vscode user settings to workspace .vscode/settings.json
  - settings came with installing the software for the course
  - TODO: perhaps look into the prettier formatter and integrating those rules into the linter

### Transaction

- een `Transaction.jsx` aangemaakt

### App.jsx

- de default react app verswijst nu naar dit nieuw component (met nu nog hardcoded text)

### Mock data

- toegevoegd in `src/api/mock_data.js`

### React props

- data in `Transactions.jsx` kan uit js komen
- data kan via attributes in `App.jsx` in de `props` doorgegeven worden
- data komt nu uit de mock_data ipv hard coded , later uit de echte database
- all data can be spreaded/mapped/destructured before given as attrributes. For readability destructuring is perhaps the most readable option. Or typescript?

### Property 'key'

- use the unique `id` as a key

### Tailwind Css

- installing

```bash
pnpm install tailwindcss @tailwindcss/vite
```

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm install tailwindcss @tailwindcss/vite
Packages: +31 -7
+++++++++++++++++++++++++++++++-------
Progress: resolved 214, reused 124, downloaded 15, added 31, done

dependencies:
+ @tailwindcss/vite 4.1.13
+ tailwindcss 4.1.13

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @tailwindcss/oxide.                                               │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 10.1s using pnpm v10.17.0
```

- `vite.config.js` updated
- tailwind imported in `index.css`
- tailwind used in several components

### Debugging

- volgens deze kinda [tutorial](https://profy.dev/article/debug-react-vscode)

### Todo

- eigen project
- [oefening todo app](https://github.com/HOGENT-frontendweb/frontendweb-ch1-solution)

## 2. React state management

### Voorbeeld - Overzicht van de places

- added mock data for places in `api/mock_data.js`
- update import statement `TRANSACTION_DATA` in `App.jsx`

### Place component

- added `src/components/places/Place.jsx`

### PlacesList component

- added `src/components/places/PlaceList.jsx`
- added `PlacesList` component in `App.jsx`

### Verwijderen van een place

- added a (static) event handler on the remove button

### Toevoegen van state aan de PlacesList component

- adding state with the `useState` hook in `PlacesList`
- using it in the `Place` component

### StarRating component

```bash
pnpm add react-icons
```

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm add react-icons

   ╭───────────────────────────────────────────────╮
   │                                               │
   │     Update available! 10.17.0 → 10.17.1.      │
   │     Changelog: https://pnpm.io/v/10.17.1      │
   │                                               │
   ╰───────────────────────────────────────────────╯

Packages: +1
+
Downloading react-icons@5.5.0: 22,22 MB/22,22 MB, done
Progress: resolved 215, reused 139, downloaded 1, added 1, done

dependencies:
+ react-icons 5.5.0

Done in 3.1s using pnpm v10.17.0
```

- added `src/components/places/StarRating.jsx`

### Oefening 2 - StarRating in Place component

- added the `StarRating` to `Place` with a fixed number of 5 gold stars
- new icon for remove button

### Een variabel aantal sterren

- added a `totalStars` prop in `StarRating`

### De kleur van de sterren kan verschillen

- added a `selected` prop in `Star`

### Rating functionaliteit afwerken

- pass the `rating` from `Place` to `StarRating` with `selectedStars` prop
- add and use `selectedstars` in `StarRating`
- pass `selected` to `Star`, calculating it

### Oefening 3 - Event handler toevoegen

- added `index` prop to `Star`
- `handleClick` implemented and added to `onClick` of the icon

### De rating aanpassen

- `handleRatePlace` in `PlaceList` with props => Place => StarRating => Star
- `id`added to `handleRate` in Place and with props => StarRating
- in Star it's handled what star is clicked and => StarRating => Place => Placelist

### Refactoring Transactions

- `Transactions` uit `App.jsx` => `Transactionslist.jsx`

### Input velden toevoegen a.d.h.v. controlled components

- `input` field and `button` in `TransactionsList.jsx`
- two states
- `handler` for search (filter)

### useMemo hook

- `usememo` hook added so the filter only renders when `search` is changed

### Weergave tabel met transacties

- created `TransactionsTable`
- refactored `TransactionsList` to use this
- `Transaction` refactored to now return a table row

### Oefening 4 - README

- added info to start the app in development

## 3. React Router

### React Router

- installed with pnpm

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm add react-router

   ╭───────────────────────────────────────────────╮
   │                                               │
   │     Update available! 10.17.0 → 10.18.0.      │
   │     Changelog: https://pnpm.io/v/10.18.0      │
   │   To update, run: corepack use pnpm@10.18.0   │
   │                                               │
   ╰───────────────────────────────────────────────╯

Packages: +3
+++
Progress: resolved 218, reused 140, downloaded 3, added 3, done

dependencies:
+ react-router 7.9.3

Done in 882ms using pnpm v10.17.0
```

- used the router in `main.jsx`

### Routers definiëren

- refactoring some components => `pages`
- faker package for lorem ipsum

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm add @faker-js/faker
Packages: +1
+
Progress: resolved 219, reused 143, downloaded 1, added 1, done

dependencies:
+ @faker-js/faker 10.0.0

Done in 824ms using pnpm v10.17.0
```

- `About.jsx`and `NotFound.jsx` added
- added the extra routes to `main.jsx`

### Navigeren tussen pagina's

- using `Link` in `App.jsx`

### Route properties

- `useLocation` added in Notfound.jsx`

### Routes nesten

- `Link` components in `About.jsx`
- Subpages components embeded in `About.jsx`
- child routes added in `main.jsx`
- `Outlet`component as a placeholder

### Redirects

- `Navigate` toegevoegd in `main.jsx` om te navigeren

### URL parameters

- `PlaceDetail.jsx` met later de transacties van een plaats, indien gevonden
- nieuwe route voor een url parameter `:id` in `main.jsx`
- oefening 1: surfen vanuit `Place` door te klinkken op de naam van de place

### Layout component

- holder in `Layout.jsx`
- navbar zelf in `NavBar.jsx`
- aanpassing in `main.jsx` waar alle paden nu kinderen van `Layout` zijn
- `App.jsx` deleted

### Actieve link aanduiden & refactoring NavBar

- m.b.v `NavLink` component in `NavBar.jsx`
- `Logo` inline component voor het logo

### Scroll restoration

- auto scroll restoration added to `Layout` component

### Navigeren vanuit code

- `useNavigate` hook in `NotFound.jsx`

### Cusom styles

- `h1` added in `index.css` and refactored elsewhere

## 4. Data ophalen uit een REST API

### Installing necessary packages

```bash
PS D:\DATA\GIT\FRONTENDWEB\frontendweb-budget-2526\budget> pnpm add axios swr

   ╭───────────────────────────────────────────────╮
   │                                               │
   │     Update available! 10.17.0 → 10.19.0.      │
   │     Changelog: https://pnpm.io/v/10.19.0      │
   │   To update, run: corepack use pnpm@10.19.0   │
   │                                               │
   ╰───────────────────────────────────────────────╯

Packages: +26
++++++++++++++++++++++++++
Progress: resolved 245, reused 167, downloaded 3, added 26, done

dependencies:
+ axios 1.12.2
+ swr 2.3.6

Done in 2.8s using pnpm v10.17.0
```

### useEffect

- `useEffect` in `TransactionList`

### Effect dependencies

- dependency array and cleanup function

### GET /api/transactions (useEffect)

- fetching data with axios in `src/api/transactions.js`
- gebruik in useEffect van TransactiosList.jsx
- keeping the state of the transactions

### Laadindicator en foutafhandeling

- generic Loader.jsx component
- generic Error.jsx component
- AsyncData.jsx component
- all this implemented in TransactionsList.jsx

### GET /api/transactions (swr)

- transactions.js => generic index.js
- omvormen naar swr cfr instructies cursus

### DELETE /api/transactions/:id

- added `deleteById` in `api/index.js`
- remove key added to `Transaction` component
- TransactionsTable: extra colum in table and delete function passed through
- TransactionsList: useMutation hook

### Het .env bestand

- .env in root met content: `VITE_API_URL='http://localhost:3000/api'`
- imported in `api/index.js`
- README.md aangepast

### Oefening 4 - PlacesList via API

- PlaceDetail & getbyID
- PlaceCards holds the list now
- PlaceList now talks to database using SWR for get, delete, update
- fixes for passing props and states
- renamed data => places and added empty [] as default

## 5. Formulieren & hooks

### Oefening 1: Routing

- `AddOrEditTransaction.jsx` met placeholder voor weergave
- bijkomende routes in `main.jsx`:
  - `/transactions/add`
  - `/transactions/edit/:id`

### Oefening 2 - Toevoegen van knoppen

- knop 'new' op list
- knop potloodje op Transaction

### Form + Oefening 3 - AddOrEditTransaction

- From copypasted
- gebruikt in pagina, places opgehaald

### React-hook-form

- package added
- useForm used
- default value used
- validation client side (Oefening 4: for all input fields)

### POST /api/transactions

- `save` function in `api/index.js`
- new mutation in `AddOrEditTransaction.jsx`

### PUT /api/transactions/:id

- updateid vervangen door dynamische save, ook in PlacesList
- transactie opgehaald in AddOrEdit en doorgegeven aan form
- navigate terug naar list na add/edit

### Memoisation

- usememo
- usecallback
- memo in Place.jsx

## 6. Context API

### Licht of donker thema

- custom variant in index.css
- css associated to tailwind in vscode settings

### Stap 1: Creëer de context

- refactored `main.jsx` imports (for future git adds)
- `ThemeContext` aangemaakt en geëxporteerd in `main.jsx` m.b.v. `createContext`
- supplement tov cursus:  default

### Stap 2: Bied de context aan

- Context.provider met value rond element gewrapped

### Stap 3: Consume de context

- `TransactionsTable` consumeert de data (via de API context en useContext, niet via de props)
- boolean darkmode beschikbaar + dark kleuren ingesteld

### ThemeContext en Provider

- Theme context als provider
- afwijking van cursus: alles binnen react!
- custom-variant in tailwind
- consumed in navbar
- button in navbar to switch
- code in Transactiontable weg, niet meer nodig

### useTheme en Oefening 2 - useTheme

- custom useTheme and useThemeColor
- star colors and text
- anti-pattern direct dom manipulation countered
- dark theme and colors implemented everywhere
