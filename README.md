# vite React TypeScript tailwindcss starter

Template for vite, React + tailwindcss + TypeScript projects with some tools preconfigured.

## About

Template for vite, React + tailwindcss + TypeScript projects with some tools preconfigured.

### Libraries

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [React](https://reactjs.org/)
- [tailwindcss](https://tailwindcss.com/)
  - [daisyUI](https://daisyui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [wagmi](https://wagmi.sh/)
- [vite](https://vitejs.dev/)

### Tools

- [commitlint](https://commitlint.js.org)
- [Conventional Commits](https://www.conventionalcommits.org)
- [editorconfig](https://editorconfig.org/)
- [eslint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/#/)
- [Prettier](https://prettier.io/)
- [VS Code settings](https://code.visualstudio.com/)

## Usage

Create a new project from this template by clicking the "Use this template" button:

```bash
yarn
yarn dev
yarn test
```

### Lighthouse

`yarn lighthouse` will test the **UAT URL** for the project, so you will need to configure that in `lighthouserc.json`.

`yarn lighthouse:local` will test the **BUILD** of the project, so if there is no build present you will need to run `yarn build` initially.

This is done so that local testing will reflect UAT as closely as possible, with the build process having minified the JS, CSS, etc...
