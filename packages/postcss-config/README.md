<br>

<div align="center">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-light-mode-only.png#gh-light-mode-only">
<img width="456" src="https://raw.githubusercontent.com/wayofdev/next-starter-tpl/master/assets/logo.gh-dark-mode-only.png#gh-dark-mode-only">
</div>


<br>

<br>

<div align="center">
<a href="https://actions-badge.atrox.dev/wayofdev/npm-shareable-configs/goto"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fwayofdev%2Fnext-starter-tpl%2Fbadge&style=flat-square"/></a>
<a href="https://www.npmjs.com/package/@wayofdev/postcss-config"><img alt="GitHub package.json version" src="https://img.shields.io/npm/v/@wayofdev/postcss-config?style=flat-square"></a>
<a href="https://www.npmjs.com/package/@wayofdev/postcss-config?activeTab=versions"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@wayofdev/postcss-config?style=flat-square"></a>
<a href="LICENSE.md"><img src="https://img.shields.io/github/license/wayofdev/npm-shareable-configs.svg?style=flat-square&color=blue" alt="Software License"/></a>
</div>
<br>

# Shareable PostCSS Config

## 📄 About

Shareable configuration for [PostCSS](https://postcss.org/) — a tool for transforming CSS with JavaScript.

The package provides a set of plugins and settings that can be easily shared and reused across different projects, reducing the amount of boilerplate code needed to set up PostCSS in each project.

### → Purpose

Simplify the process of setting up PostCSS in a project by providing a pre-configured set of plugins and settings.

This package can be useful for developers who want to:

- Use PostCSS in their project but don't want to spend time configuring it from scratch
- Share PostCSS configuration across multiple projects
- Avoid maintaining and updating PostCSS configuration in every project manually

- Take advantage of preconfigured optimizations and plugins, such as:
  - [autoprefixer](https://github.com/postcss/autoprefixer) — adds vendor prefixes to CSS properties
  - [cssnano](https://cssnano.co) — minifies CSS files and removes unnecessary code
  - [postcss-preset-env](https://github.com/csstools/postcss-plugins) — enables the use of future CSS features and converts them into compatible CSS code for current browsers.
  - [postcss-import](https://github.com/postcss/postcss-import), which allows you to use `@import` statements in your CSS files, making it easy to split your code into multiple files and organize your CSS
  - [postcss-100vh-fix](https://github.com/postcss/postcss-100vh-fix) — fixes the issue where the height of an element with `100vh` is taller than the viewport in some mobile browsers
  - [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes) — fixes various flexbox bugs in older versions of Safari and IE
  - [tailwindcss — utility-first CSS framework for rapidly building custom user interfaces
  - [tailwindcss/nesting — adds support for nested rules in Tailwind CSS
  - [postcss-reporter](https://github.com/postcss/postcss-reporter) — logs PostCSS messages to the console with a clean and concise format

Developers can streamline the process of using PostCSS in their project and ensure a consistent configuration across different projects.

<br>

## 💿 Installation

To use this configuration, you'll need to install `@wayofdev/postcss-config` as a development dependency in your project. You can do this by running the following command:

```bash
pnpm add -D \
	postcss \
	@wayofdev/postcss-config \
	postcss-100vh-fix \
	postcss-flexbugs-fixes \
	postcss-import \
	postcss-preset-env \
	postcss-reporter
```

If you're working in a monorepository and want to add the package to a specific app, you can use the `--filter` flag to add it only to that app. For example:

```bash
pnpm --filter=[app-dir-name] add -D \
	postcss \
	@wayofdev/postcss-config \
	postcss-100vh-fix \
	postcss-flexbugs-fixes \
	postcss-import \
	postcss-preset-env \
	postcss-reporter
```

Replace `[app-dir-name]` with the name of the directory of the app where you want to install the package.

<br>

## 💻 Usage

To use the `@wayofdev/postcss-config` package in your project, follow these steps:

1. Create a file called `postcss.config.js` in the root folder of your project.
2. Add the following code to the `postcss.config.js` file:

```js
module.exports = require('@wayofdev/postcss-config')
```

If you're using a monorepository, your project structure might look like this:

```bash
.
└── apps
    ├── docs    # example nextra app
    └── web     # example nextjs app
        ├── postcss.config.js
        ├── ... (other app files)
└── packages    # shared packages
```

### → Extending the Configuration

To extend the `@wayofdev/postcss-config` configuration, create a new `postcss.config.js` file with the following code:

```js
module.exports = {
  plugins: [
    ...require('@wayofdev/postcss-config').plugins,
    require('autoprefixer')
  ]
}
```

In this code, you're extending the `plugins` array of the existing configuration by first including the plugins in the original configuration using `...require('@wayofdev/postcss-config').plugins` and then adding `autoprefixer` as a new plugin.

<br>

## 🤝 License

[![Licence](https://img.shields.io/github/license/wayofdev/npm-shareable-configs?style=for-the-badge&color=blue)](./LICENSE)

<br>

## 🧱 Credits and Useful Resources

Based on:

- [shareable-configs](https://github.com/waldronmatt/shareable-configs) from [waldronmatt](https://github.com/waldronmatt)

<br>

## 🙆🏼‍♂️ Author Information

This repository was created in **2023** by [lotyp / wayofdev](https://github.com/wayofdev).

<br>

## 🙌 Want to Contribute?

Thank you for considering contributing to the wayofdev community!
We are open to all kinds of contributions. If you want to:

- 🤔 Suggest a feature
- 🐛 Report an issue
- 📖 Improve documentation
- 👨‍💻 Contribute to the code

You are more than welcome. Before contributing, kindly check our [guidelines](https://next-starter-tpl-docs.wayof.dev/contribution).

