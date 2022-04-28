# structured-aim42
[![Build](https://github.com/scope42/structured-aim42/actions/workflows/build.yml/badge.svg)](https://github.com/scope42/structured-aim42/actions/workflows/build.yml)
[![Up to date?](https://github.com/scope42/structured-aim42/actions/workflows/check-for-updates.yml/badge.svg)](https://github.com/scope42/structured-aim42/actions/workflows/check-for-updates.yml)
[![npm](https://img.shields.io/npm/v/@scope42/structured-aim42)](https://www.npmjs.com/package/@scope42/structured-aim42)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat)](https://github.com/semantic-release/semantic-release)

This is a structured version of the [aim42 Method Reference](https://aim42.github.io/). It takes the [original AsciiDoc sources](https://github.com/aim42/aim42) and extracts the structural information from them. This yields a tree of sections enriched with meta-data. The leaf nodes are available as rendered HTML.

This library makes it convenient to re-distribute aim42 content (**see [LICENSE](https://github.com/scope42/structured-aim42/blob/main/LICENSE.md)**) programatically. It is kept is sync with the original repository.

## Usage

Install using your preferred package manager. Example:
```
npm install @scope42/structured-aim42
```

Import the `aim42` document object and use it to explore the structure of the Method Reference. Example:
```js
import { aim42 } from '@scope42/structured-aim42'

console.log("Top-Level Sections:")

for (const child of aim42.children) {
  if (child.type === "section") {
    console.log(`- ${child.titlePlain}`);
  }
}
```
[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/structured-aim42-example-6pyjun?file=/src/index.ts)

structured-aim42 comes with native TypeScript support. For usage with plain JS, use [src/types.ts](https://github.com/scope42/structured-aim42/blob/main/src/types.ts) as documentation for exported data structures.

## Tree Shaking

This library is very large because it cotains the whole content of the Method Reference multiple times. Make sure to use a build setup that enables tree shaking.

Each section is available as a module. This way, you can very precisely import what you need. Example:

```js
import { howDoesAim42Work } from '@scope42/structured-aim42/lib/introduction/how-does-aim42-work'
```

Additionally, there is an atomic content module for each section. Use this if you need the whole HTML content of a specific section instead of the inner structure. Example:

```js
import { howDoesAim42WorkAtomic } from '@scope42/structured-aim42/lib/introduction/how-does-aim42-work/atomic'
```

## Resources

Images and CSS provided in the `resources` directory of the packge so you can serve them in a privacy-friendly way. To do this, you usually need to copy them from `node_modules/@scope42/structured-aim42/resources` to your application. Note that you may need to modify the image `src` attributes of the HTML exported by this library to make it work.

Also note that the CSS file, provided as is, contains an externally loaded Google font which you may want to remove for privacy reasons.

## License

structured-aim42 is published under the [Creative Commons Attributions Sharealike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/).

This project distributes content from the [aim42 Method Reference](https://aim42.github.io/) by [Gernot Starke](https://www.gernotstarke.de/) and [community contributors](https://github.com/aim42/aim42/graphs/contributors), used under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).

Attribution to this project is appreciated but not required. In any case, attribute the original authors.
