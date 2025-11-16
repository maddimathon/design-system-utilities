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