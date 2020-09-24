# pbbg.com Website (pbbg.com)
The definitive website for Persistent Browser-Based Games

## Prerequisites
* Create an `.env` file in the root of the project. Duplicate the content of the `.env.example` into it. Then you need to contact FoohonPie or another contributor of the repo to get the values of those environment variables and stick them in there. If you don't have your environment variables setup correctly your UAT tests will fail, and your Algolia search results will not work in the interface.

* Ensure you have installed the [Yarn package manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable) on your host machine. You need to have a version of Yarn that is >= 1.21.1 installed.

## Install Dependencies
```bash
yarn
```

### Yarn Commands
```bash
yarn dev // start the app in development mode (hot-code reloading, error reporting, etc.)
yarn lint // lint the files
yarn build // build the app for production
yarn test:e2e // open the UAT tool, Cypress, to select test files to run in the browser
yarn test:e2e:ci // run the UAT tests in headless browser mode (use this for CI build)
```

### Customize the Quasar configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js). Quasar is the component framework for Vue.js that pbbg.com uses for it's common interface components, style, and theme.
