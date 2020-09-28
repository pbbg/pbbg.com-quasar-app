# pbbg.com Website (pbbg.com)
The definitive website for Persistent Browser-Based Games.

### Install the dependencies
Dependencies are managed with the [Yarn package manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable).
You need to have a version of Yarn that is >= 1.21.1 installed on the host machine.

1. [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) this repository
2. Clone and `cd` into your new fork.
3. Create a new branch from `master` with `git checkout -b someNewFeatureOrBugfixBranch`
4. Install packages by running `yarn` command.

### Commands
* `yarn dev` build and start the app in development mode (hot-code reloading, error reporting, etc.)
* `yarn build` build the app for production
* `yarn lint` lint the files for warnings and errors (automatically run when you make a Pull Request)
* `yarn fix:lint` lint the files for warnings and errors and try to automatically fix
* `yarn test:e2e` open the UAT tool, Cypress, to select test files to run in the browser
* `yarn test:e2e:ci` run the UAT tests in headless browser mode (automatically run when you make a Pull Request)

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
