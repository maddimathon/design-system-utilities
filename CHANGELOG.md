---
title: Changelog
---

# Design System Utilities - Brand Kit Changelog

All notable changes to this project will be documented in this file after/on
each release.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to 
[Semantic Versioning](https://semver.org/spec/v2.0.0.html), i.e.:
> Given a version number `MAJOR`.`MINOR`.`PATCH`, increment the:
> - `MAJOR` version when you make incompatible changes
> - `MINOR` version when you add backwards-compatible functionality
> - `PATCH` version when you make backwards-compatible bug fixes


<!--CHANGELOG_NEW-->


## **0.1.0-alpha.9** — 2026-01-20

Have to make many test releases so it's the same instance of sass-embedded as
its dependents.

### Added
- Made scss mixin public - tokens-theme-individual-base-properties

### Fixed
- $designTokens !default overrides now merge recursively


## **0.1.0-alpha.8** — 2026-01-20

Updated utility-sass for more var-printing config.


## **0.1.0-alpha.7** — 2026-01-20

Mini scss fixes.


## **0.1.0-alpha.6** — 2026-01-20

### Added
- Config var - $mx_tokensAll_includeFontFace
- Testing $customPropertyPrefix config var from utility-sass

### Fixed
- Updated dependencies


## **0.1.0-alpha.5** — 2025-12-28

Updated build-utilities and utility-sass.


## **0.1.0-alpha.4** — 2025-12-27

Display and component improvements, plus a couple shade map generation fixes.

### Misc. Breaking
- Changed file structure in src/scss/_astro

### Added

#### Astro
- Added option to ShadeSwatchTable to generate colour target levels by using a
  colour map's JSON return (can separate base and accent targets)
- More options for the PageContent_Colour and ShadeSwatchTable components
- Added table of contents to colour & theme page content components

#### Scss
- New mixin - tokens-theme-iterator
- Added support for img, figure, and svg element selectors in styles & selectors


### Changed

#### Astro
- Misc. ShadeSwatchTable improvements

#### JS & Tokens
- Changed which colour names are automatically treated as base shades when
  completing colour maps
- Switched objectMap to tested version from scss-templater; added objectMapAsync

#### Scss
- Misc. style updates for preview pages


### Fixed

#### Astro
- Improved ShadeSwatchTable options & code
- Improved LoremIpsum and theme swatch display

#### JS & Tokens
- Fixed bug that didn't overwrite optional shade levels in input colour maps
- Fixed JSON output for contrast tests in colour objects
- Reviewed all files and tidied up

#### Scss
- Swatch style updates
- Fix to link button utilities that were broken by switch to `a[href]` selectors

#### Scripts & Build
- Updated dependencies
- Updated with utility-astro


## **0.1.0-alpha.3** — 2025-11-15

Improved theme swatches, logos.

### Added
- Added widget previews of alternate themes to default theme swatches
- Added option to override theme descriptions
- Added generic types so that logo & icon object slugs are recognized as their keys
- Added logo support mixin (with aspect-ratio setting like icons)
- Added scss aspect-ratio-string-to-list() function for icon & logo aspect ratio strings
- Added $mx_aspectRatio_includeFallback config var
- Added local aspect-ratio fallback mixin

### Changed
- Switched colour token toScss() to output the hsl value (was causing 
  inconsistency to convert from lch in the scss)

### Fixed
- Fixed theme swatch token inheritance
- Fixed missing 'link-icon' and 'link-ui' keys in 
  Tokens_Themes_Set_SingleMode.Data_RecursivePartial type


## **0.1.0-alpha.2** — 2025-11-03

Small astro component & style fixes.

### Removed
- $mx_tokensTheme_nestModeSelectors config var

### Added
- getLevelsInUse() function for themes

### Changed
- Updated dependencies


## **0.1.0-alpha.1** — 2025-10-30

Forgot to include the tsconfig file.


## **0.1.0-alpha** — 2025-10-30

A quick pre-release converting templates to scss-templater.  Version 0.1.0 won't
progress beyond alpha.