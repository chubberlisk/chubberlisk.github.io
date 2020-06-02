[![Build Status](https://travis-ci.com/chubberlisk/chubberlisk.github.io.svg?branch=release-v2)](https://travis-ci.com/chubberlisk/chubberlisk.github.io)

<br />
<p align="center">
  <a href="https://github.com/chubberlisk/chubberlisk.github.io">
    <img src="static/icons/icon-512x512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Wen Ting Wang</h3>

  <p align="center">
    A personal website for Wen Ting Wang (v2). Check out the new <a href="https://github.com/chubberlisk/chubberlisk">version (v3)</a>.
    <br />
    <br />
    <a href=https://chubberlisk.github.io/">View Site</a>
    ·
    <a href="https://github.com/chubberlisk/chubberlisk.github.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/chubberlisk/chubberlisk.github.io/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Branches](#branches)
- [Releases](#releases)
- [License](#license)

## About The Project

This is the personal website for Wen Ting Wang. Originally, it served as an informal CV and portfolio but currently a rebuild is underway.

### Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- yarn - see [installation guide](https://yarnpkg.com/en/docs/getting-started)

### Installation

1. Clone the repo

```sh
git clone https://github.com/chubberlisk/chubberlisk.github.io.git
```

2. Install packages in `chubberlisk.github.io` directory

```sh
yarn
```

## Usage

### Running the application

To run the application use the `develop` script:

```sh
yarn develop
```

Then visit [http:localhost:8000]().

### Running the tests

To run all tests (with linting):

```sh
yarn test
```

To run just the unit tests using [Jest](https://jestjs.io/):

```sh
yarn test:unit
```

To run just the end-to-end tests using [Cypress](https://www.cypress.io/):

```sh
yarn test:e2e
```

To interactively run the end-to-end tests:

```sh
yarn test:e2e:interactive
```

## Branches

### `master`

- Contains the production files for the Gatsby application.
- Used by GitHub Pages to host the personal website.

### `release`

- Contains all the files to build the production files.

## Releases

- [Semantic Versioning](https://semver.org/) will be followed.
- Each **major** release will have a codename which will begin with A until Z and be named after a Yu-Gi-Oh! card owned by _Seto Kaiba_.

## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.
