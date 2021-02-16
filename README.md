THIS REPO HAS BEEN DEPRECATED.

It is being kept for reference now here at https://github.com/pbbg/pbbg.com-quasar-app.  Work for pbbg.com will continue at https://github.com/pbbg/pbbg.com

[![Actions Status](https://github.com/foohonpie/pbbg.com/workflows/main/badge.svg)](https://github.com/foohonpie/pbbg.com/actions)

# pbbg.com Website (pbbg.com)
The definitive website for Persistent Browser-Based Games.

### Install the dependencies
Dependencies are managed with the [Yarn package manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable).
You need to have a version of Yarn that is >= 1.21.1 installed on the host machine.

1. [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) this repository
2. Clone and `cd` into your new fork.
3. Create a new branch from `master` with `git checkout -b someNewFeatureOrBugfixBranch`
4. Install packages by running `yarn` command.
5. Copy `.env.example` as `.env`.
6. Go into your forked repo > Settings > Secrets and add a new *Secret*:  `API_BASE_URL` and make the value `https://dev-api.pbbg.com`.

### Commands
* `yarn start` build app for production and serve on `http://localhost:8080` *purpose is for startup on production server*
> IMPORTANT - you may get a browser prevention due to scrambled info when running serve on localhost.
> Turn on allow-insecure-localhost for chrome/brave, like: chrome://flags/#allow-insecure-localhost
* `yarn dev` compile and start the app in development mode (hot-code reloading, error reporting, etc.)
* `yarn build` build app for production
* `yarn lint` lint the files for warnings and errors (automatically run when you make a Pull Request)
* `yarn lint:fix` lint the files for warnings and errors and try to automatically fix
* `yarn test:e2e` open the UAT tool, Cypress, to select test files to run in the browser **Requires app to be running**
* `yarn test:e2e:ci` run the UAT tests in headless browser mode (automatically run when you make a Pull Request) **Requires app to be running**
> When running from your forked repository the Cypress Tests simply run, but when you create your Pull Request
> they will be run and video/screenshots recorded and sent to the cypress.io dashboard

### Contributing and Pull Requests
1. We *highly* encourage [short, concise git commit messages](https://chris.beams.io/posts/git-commit/).
2. Ensure any eslint (including warnings) and cypress tests pass locally before creating your Pull Request.
3. After Pull Request creation, your branch must pass the eslint and UAT tests that run automatically.
4. Your Pull Request must be approved by at least one contributor.
5. After the tests pass, and it has been approved, you may request one of the contributors to merge it for you.

> Longer Contributing document on how to offer feedback, our standards, responsibilities, code of conduct, and
>enforcement can be found in [contributing guidelines](/CONTRIBUTING.md)

### Interacting with the database
Currently, local development is not running it's own local database/api. The http requests are actually hitting the real
dev API (https://dev-api.pbbg.com). This is partially because we want to treat the API as a truly third-party service.

Keep this in mind as you write UATs - for example, if the API prevents duplicate fields and you rerun a test that
creates something with those fields then you are likely to get 422 responses from the collisions. (See the `uniqueUser`
and the `uniqueGameName` utility methods in the UAT tests for examples of how to work around this limitation).

### Optional - connecting to the Algolia instance for search
The integration with Algolia is rate limited by use and per level of payment plan, and therefore it is stubbed out by
default when developing locally (and also when Github Actions runs on your forked repo branch). However, it is *NOT*
stubbed when your PR runs the Github Actions workflow in the source repo.

For some development, you may need to have the actual integration working and functional. For this, you'll need to
create some new environment variables:
* Add these to your `.env` file:
```
ALGOLIA_APP_ID=
ALGOLIA_KEY=
```
* In the root of your project create a `cypress.env.json` file and paste this:
```
{
  "ALGOLIA_APP_ID": "",
  "ALGOLIA_KEY": ""
}

```
* Ask a project contributor or @FoohonPie in Discord for the values to plug into these files.
* Lastly, for your forked repo's Github Action (which runs UATs like they will run when you create your PR) you will
need to go into your Forked Repo's settings > Secrets and add one for ALGOLIA_APP_ID and another for ALGOLIA_KEY using
the same values.

> Github Actions currently doesn't support sharing secrets to forked repositories (i.e. for contributors making Pull
> Requests). Without the app_id and keys for Algolia, your Github Actions in your will run UATs against the Algolia
> stub, the same as when you run them locally. However, they will use the "real thing" when your PR goes through the
> Github Actions workflow in the source repo.

### Test Environment
Development Front-End: [https://dev.pbbg.com/](https://dev.pbbg.com/)
Development API: [https://dev-api.pbbg.com/](https://dev-api.pbbg.com/)
API Swagger Docs [https://app.swaggerhub.com/apis-docs/pbbg/api.pbbg.com/0.1.6#/](https://app.swaggerhub.com/apis-docs/pbbg/api.pbbg.com/0.1.6#/)
> Note as updates are made to the api.pbbg.com project the hash will increment from 0.1.3 > 0.1.4 > etc. So, always ensure you are viewing the latest docs.

## FAQ/issues
* For Windows 10 development environment I cannot get cypress to run!
> Answer: Try running `npx cypress install --force` which will reinstall cypress and then trying the normal UAT test command, `yarn test:e2e` while the app is already running.
* UAT tests are failing when I create my PR!
> Answer: Try checking the [Cypress.io Dashboard](https://dashboard.cypress.io/projects/befrjn/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D) and viewing the screenshots or videos of the failing test to troubleshoot what went wrong.

## Licenses
Content is released under [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
