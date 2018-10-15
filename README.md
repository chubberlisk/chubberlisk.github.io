# Personal Website for Wen Ting Wang

A personal website for this Ting, acts as an informal CV and portfolio.

- To track **progress**, view the [GitHub Project](https://github.com/chubberlisk/chubberlisk.github.io/projects/2).
- To view current **deployment**, visit https://wentingwang.co.uk.

## Branches

### `master`
- Contains the production files for the Angular application.
- Used by GitHub Pages to host personal website.

### `release`
- Contains all the files to build the production files.
- Completed features are added to this branch from their own.

### `feature/*`
- A new feature is created under their own branch using the following naming
  convention: `feature/<feature-name>`.
- A feature branch is created from the `release` branch.
- Once the feature is completed, a pull request must be made to add to the
  `release` branch.

## Releases
- [Semantic Versioning](https://semver.org/) will be followed.
- Each **major** release will have a codename which will begin with A until Z and be named after a Yu-Gi-Oh! card owned by _Seto Kaiba_.
