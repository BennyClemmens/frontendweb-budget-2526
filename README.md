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
