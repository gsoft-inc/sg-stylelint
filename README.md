# sg-stylelint

Sharegate shared [stylelint](https://stylelint.io/) config.

## Installation

Install the recommended stylelint configuration packages.

With NPM:

```bash
npm i -D stylelint @sharegate/stylelint-config-recommended
```

Then, create a file called `stylelint.config.js` at the root of your project and add the following configurations:

```javascript
module.exports = {
    extends: "@sharegate/stylelint-config-recommended"
};
```

### VSCode

Install the [stylelint extension for VSCode](https://github.com/shinnn/vscode-stylelint). The extension will provide Just In Time linting while typing in VSCode.

To enable stylelint autofix **on save**, add the following configuration to your VSCode project settings:

```javascript
{
    "editor.formatOnSave": true,
    "json.format.enable": false,
    "prettier.stylelintIntegration": true /* If you use prettier */
}
```

## Maintainers

The following documentation is only for the maintainers of this repository.

### Installation

Clone the repository:

```bash
git clone https://github.com/gsoft-inc/sg-stylelint.git
```

Then, install the dependencies with Yarn:

```bash
yarn install
```

### Release

**Process**

Updates of this configuration package should batch multiple changes. Most of stylelint rules are stylistics and doesn't have an impact on the success of a project. On the other hand, frequent changes of those rules might cause friction and be a burden for the teams.

Adding a new rule or updating an existing one can generate a lot of modifications to the code of an existing project. To ensure that the authors of the projects who consume those configuration packages understand the impact of updating a package, every release of a package **should be a major increment to the version number**.

Every release should also contain a **release notes** that includes the new or updated rules and how to disabled / revert them manually in the consumer project when possible.

**Do the actual release**

Before you release, make sure you have **write access** for all the NPM packages that will be published and that you are [logged in to NPM](https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line).

To release, open a terminal at the root project of the workspace and execute the following:

```bash
yarn release
```

## License

Copyright © 2019, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
