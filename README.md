# CAP & SolidJS

Playground Monorepo to learn more about SAP CAP, a bit of SolidJS and maybe even Fiori Elements.

## Ideas, things to do or learn

### Testing

- [ ] [CAP Tests](https://cap.cloud.sap/docs/node.js/cds-test) https://blogs.sap.com/2020/05/31/cap-unit-testing-using-mocha-and-chai/
- [X] [Vitest](https://vitest.dev/) for [SolidJS](https://github.com/solidjs/solid-testing-library)

### CAP

- [X] Working with Auth.?
- [ ] Trying out MTA, Bundling/Packaging in general
- [ ] Fiddle with deployment to BAS + HTML5 Repository
- [ ] Fiddling with Fiori Elements in addition to SolidJS

### SolidJS

- [X] Work with Stores
- [X] Try embedding UI5 WebComponents
- [X] Create, Read, Update and Deletion of Todos (KIS)
- [ ] Bundling/Packaging + with CAP

### General

- [ ] Clean up `package.json`, `.gitignore` files
- [X] Add LICENSE file(s)
- [ ] Add and configure scripts

## Repository Setup

After fiddling around a bit, reading some blogs and watching a few videos (like [re>≡CAP](https://sapmentors.github.io/reCAP/)) I think that extracting UIs from the CAP `app`-folder is the right thing to do when not working with UI5 or Fiori Elements.

## Learnings

Here I want to note things that I've learned or looked into along the way.

### SAP CAP

... which btw. has an **awesome** [documentation](https://cap.cloud.sap/docs/).

- configuration file (`cdsrc.json` & it's `cds` prop in the `package.json`)
- rough overview of working with it's built-in authentication and how to extract it/annotate a service with it
- using `i18n` specifically in CAP
- working with a db schema, annotating it with `i18n`, enhancing built-in aspects like `cuid` with it's own `i18n`
- creating a FE App via a generator based on the CAP service and its annotations
- namespaces

### SolidJS

Web Dev Concepts, not using [SolidStart](https://start.solidjs.com/getting-started/what-is-solidstart) as it is in beta and I wanted to go "raw" here.

- components and their lifecycle
- lazy loading of components as well as dynamic import module name remapping for named xports to default export
- css modules
- signals, stores, resources
- JSX, Fragment shorthand
- embedding Web Components and extending the TS module declaration to make them "known"
  - https://stackoverflow.com/a/70820159/10323879
  - https://stackoverflow.com/a/72239265/10323879
  - https://github.com/solidjs/solid/issues/616#issuecomment-904193450
- using a custom router
- it's way to observe changes, using signals (JS Proxies under the hood)

### General/Tooling

- Getting to know Vite & Vitest a bit better
  - using the dev proxy in vite
- Learning a bit more about authentication thanks to this [blog post](https://www.smashingmagazine.com/2023/01/authentication-websites-banking-analogy) which also made me realize that I can use "`credentials` = `include`" in fetch when working with Basic Auth to let the browser do the work on manual (JS based) API calls
- Working with/using ambient type, function, module or variable declarations and a better understanding for the `types.d.ts` file
  - [Ambient Modules](https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules)
  - [O'Reilly Programming Typescript](https://www.oreilly.com/library/view/programming-typescript/9781492037644/)
- Explored differences of package managers thanks to this [blog post](https://blog.logrocket.com/javascript-package-managers-compared/) shared by Peter Muessig and started using [pnpm](https://pnpm.io/) due to its more efficient disk space usage
- Better understanding of Typescript Generics thanks to various blog posts and videos, just to mention two:
  - [YT Video](https://youtu.be/t0qQSujSslQ)
  - [SO Question](https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript/49471725#49471725)

## Helpful Resources

- [SAP CAP Documentation](https://cap.cloud.sap/docs/)
- [UI5 Community CAP Event App](https://github.com/SAP-samples/ui5-cap-event-app)
- [CAP + UIveri5 by Volker Buzek](https://github.com/vobu/ui5-cap)
- [UI5 Freestyle in CAP by Wouter Lemaire](https://blogs.sap.com/2020/07/08/ui5-freestyle-app-in-cap/)
- [Real World SolidJS Example](https://github.com/solidjs/solid-realworld)
