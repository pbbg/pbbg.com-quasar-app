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

### Set environment variables
* Copy the `.env.example` and rename to `.env`. This lets you hit the real dev Algolia instance when running locally.

* Copy the `cypress.env.json.example` and rename to `cypress.env.json`. This allows the UAT tests to correctly stub
Algolia with mock data.

* Copy the values for the `ALGOLIA_APP_ID` and `ALGOLIA_KEY` from the `/.github/workflows/main.yml` file and paste into
both of your new files.

> Curious as to why these values are checked into source control? Turns out Github Actions currently doesn't support sharing
> secrets to forked repositories (i.e. for contributors making Pull Requests). Without this, your Github Actions in your
> forked repository would always fail. Fortunately, these values are to a development instance of Algolia that is an
> acceptable place to be publicly viewable. The production Algolia credentials can still be protected via the release
> process in the source repository.

### Commands
* `yarn start` build app for production and serve on `http://localhost:8080` *purpose is for startup on production server*
* `yarn dev` compile and start the app in development mode (hot-code reloading, error reporting, etc.)
* `yarn build` build app for production
* `yarn lint` lint the files for warnings and errors (automatically run when you make a Pull Request)
* `yarn lint:fix` lint the files for warnings and errors and try to automatically fix
* `yarn test:e2e` open the UAT tool, Cypress, to select test files to run in the browser **Requires app to be running**
* `yarn test:e2e:ci` run the UAT tests in headless browser mode (automatically run when you make a Pull Request) **Requires app to be running**

### Contributing and Pull Requests
1. We *highly* encourage [short, concise git commit messages](https://chris.beams.io/posts/git-commit/).
2. Ensure any eslint (including warnings) and cypress tests pass locally before creating your Pull Request.
3. After Pull Request creation, your branch must pass the eslint and UAT tests that run automatically.
4. Your Pull Request must be approved by at least one contributor.
5. After the tests pass, and it has been approved, you may request one of the contributors to merge it for you.

> Longer Contributing document on how to offer feedback, our standards, responsibilities, code of conduct, and
>enforcement can be found in [contributing guidelines](/CONTRIBUTING.md)

### Test Environment
 After developing locally and going through the normal Pull Request process to get your changes added, you should
 be able to see the updated code hosted on the test environment at [https://dev.pbbg.com/](https://dev.pbbg.com/).

## Licenses
Content is released under [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
