# NodeSecure domain-check
![version](https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&url=https://raw.githubusercontent.com/NodeSecure/domain-check/main/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/NodeSecure/domain-check/graphs/commit-activity)
[![OpenSSF
Scorecard](https://api.securityscorecards.dev/projects/github.com/NodeSecure/domain-check/badge?style=for-the-badge)](https://api.securityscorecards.dev/projects/github.com/NodeSecure/domain-check)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg?style=for-the-badge)](https://github.com/NodeSecure/domain-check/blob/main/LICENSE)
![build](https://img.shields.io/github/actions/workflow/status/NodeSecure/domain-check/main.yml?style=for-the-badge)

NodeSecure (npm) domain-check analysis package

## Requirements
- [Node.js](https://nodejs.org/en/) v16 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @nodesecure/domain-check
# or
$ yarn add @nodesecure/domain-check
```

## Usage example

```js
import { whois, resolveMxRecords } from '@nodesecure/domain-check';

const myDomain = 'google.com';

const domainExpirationDate = await whois(myDomain);
const mxRecords = await resolveMxRecords(myDomain);
```

## API

### whois(domain: string, server = "whois.iana.org"): string

### resolveMxRecords(domain: string): (Array<string> | { error: string, context: Error })
> An array of MX exchanges, or an object with error information for the given domain.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Kawacrepe"><img src="https://avatars.githubusercontent.com/u/40260517?v=4?s=100" width="100px;" alt="Vincent Dhennin"/><br /><sub><b>Vincent Dhennin</b></sub></a><br /><a href="https://github.com/NodeSecure/domain-check/commits?author=Kawacrepe" title="Code">💻</a> <a href="https://github.com/NodeSecure/domain-check/pulls?q=is%3Apr+reviewed-by%3AKawacrepe" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/NodeSecure/domain-check/commits?author=Kawacrepe" title="Documentation">📖</a> <a href="https://github.com/NodeSecure/domain-check/issues?q=author%3AKawacrepe" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt="Gentilhomme"/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/NodeSecure/domain-check/commits?author=fraxken" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fabnguess"><img src="https://avatars.githubusercontent.com/u/72697416?v=4?s=100" width="100px;" alt="Kouadio Fabrice Nguessan"/><br /><sub><b>Kouadio Fabrice Nguessan</b></sub></a><br /><a href="#maintenance-fabnguess" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zwOk9"><img src="https://avatars.githubusercontent.com/u/18079239?v=4?s=100" width="100px;" alt="zwOk9"/><br /><sub><b>zwOk9</b></sub></a><br /><a href="https://github.com/NodeSecure/domain-check/commits?author=zwOk9" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
