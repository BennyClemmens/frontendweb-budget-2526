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
