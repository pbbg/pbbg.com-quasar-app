# pbbg.com Website (pbbg.com)
The definitive website for Persistent Browser-Based Games.

### Install the dependencies
Dependencies are managed with the [Yarn package manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable).
You need to have a version of Yarn that is >= 1.21.1 installed on the host machine.
1. `cd pbbg.com`
2. `yarn`

### Commands
* `yarn dev` start the app in development mode (hot-code reloading, error reporting, etc.)
* `yarn lint` lint the files
* `yarn build` build the app for production
* `yarn test:e2e` open the UAT tool, Cypress, to select test files to run in the browser
* `yarn test:e2e:ci` run the UAT tests in headless browser mode (use this for CI build)


### Test Environment
After developing locally and going through the normal Pull Request process to get your changes added, you should
be able to see the updated code hosted on the test environment at [https://dev.pbbg.com/](https://dev.pbbg.com/).

## Contributing
This site is powered by [Vue](https://vuejs.org/). Check out our [contributing guidelines](/CONTRIBUTING.md) for ways to offer feedback and contribute.

## Licenses
Content is released under [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
