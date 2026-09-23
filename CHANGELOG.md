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


## **0.1.0-beta.1** — 2026-09-23

### Added
- New pseudo-selector: %hide-if-empty
- New config vars:
    - $button_selector_icon
    - $button_selector_logo


## **0.1.0-beta.0** — 2026-09-20

Streamlined token types, thome theme & css style tokens, improved scss config &
token vars, more scss output configuration, more ts utilities for using tokens,
and dependency updates.

### Removed
- Removed deprecated types and functions
- Removed Zod schemas (not used)
- Removed smaller-4 as a default font size token
- Removed $internal_supressCredit_sass config var
- Removed config vars:
    - $mx_tokensTheme_nestActiveThemeSelectors
- Removed active-theme-selector--[...] pseudo selectors in favour of
  config.$mx_activeTheme_extraSelectors map with theme slug keys

### Moved & Renamed
- Restructured token types, classes (incl. type params) for better maintainability
- TS token utilities renamed:
    - ColourContrastTest → ColourUtilities.ContrastTest
    - ColourLevels → ColourUtilities.Levels.Required
    - ColourLevels_Extended → ColourUtilities.Levels.Optional
    - ColourUtilities.getDarkLevel → ColourUtilities.Levels.toDark
    - ColourUtilities.LevelConverter → ColourUtilities.Levels.converter
    - Tokens.ColourLevels → ColourUtilities.Levels.Required
    - Tokens.ColourLevels_Extended → ColourUtilities.Levels.Optional
- Renamed scss template 'globals' → 'global'
- Renamed config vars (for more consistency in their impacts/casing):
    - $checkpointLevel → $template_debug_checkpointsLevel
    - $mx_tokensAll_includeFontFace → $mx_tokens_print_fontFace
    - $mx_tokensTheme_unifyActiveThemeSelectors → $mx_tokensTheme_unifyActiveTheme
    - $print_alertBlocks → map.get( $template_styles, alerts )
    - $print_astro_settingsMenu → map.get( $template_styles, siteSettingsMenu )
    - $print_astro_settingsMenu_fontOverrides → $template_print_siteSettingsMenu_fontOverrides
    - $print_docs → $template_docs
    - $print_icons → map.get( $template_styles, icons )
    - $template_button_inlineIcons → $include_button_inlineIcons
    - $template_link_inlineIcons → $include_link_inlineIcons
- Removed 'style-' prefix from css style token custom props in css
- Merged template config vars $template_include_buttons and
  $template_include_headings into $template_styles map (from utility-sass)
- Moved Compile.buildTokens() from build stage to global function buildTokens()
- Moved modules & template config directories to `src/config/` directory

#### Moved to Dependencies
- Moved to utility-typescript:
    - functions: 
        - makeNumber()
        - makeNumberAsync()
        - objectFlatten()
        - objectKeySort()
        - objectKeySortAsync()
        - objectMap()
        - objectMapAsync()
    - types: RecursiveRecord
- Moved to utility-sass:
    - ColourUtilities.CssColours

### Misc. Breaking
- Changed Tokens.typography.familyOverrides from an array to a string-keyed object
- Changed field theme tokens to input
- Renamed theme token from link-ui to link-decoration
- Switched link tokens to be a nested object (link all similar tokens)
- Changed AbstractTokens type param
- Updated to utility-typescript@2.0.0-beta.2, which includes breaking changes
- Updated to utility-sass@0.1.0-beta, which includes breaking changes
- Switched to using reset by default instead of normalize

### Added
- New theme tokens:
    - link-outline
    - readonly inputs
    - more background options (for alts without creating whole new theme sets)
    - custom icon-size tokens
- New css style token sets:
    - alert blocks (replaced custom token values)
    - basic subheading support
    - disabled and inline buttons
    - hr
    - icons (replaced custom token values)
    - subtitle
    - toggle blocks
    - toggle nav menu
    - widgets
- New white & black colour tokens (in a '$' property of tokens.colour) for
  better high-contrast modes
- New icons to defaults: attachment, alarm, alert, barricade, biography, book,
  celebration, code, computer, confetti, contact, discussion, download, draft,
  group, hidden, hub, link, location, lock, note, paperclip, person, pinned,
  private, quote, reading, signpost, stopwatch, timer, toolbox, traffic-cone,
  unlock, wrench
- New `_meta` prop in Tokens_Themes.JsonReturn and Tokens_Themes_Set.JsonReturn
  with information about common keys & levels in use
- New added icon font generation in BuildUtilities.buildTokens
- Added a variety of demo stylesheets to the templates (mostly to ensure
  consistent output)

#### Added to Astro
- Astro utility functions:
    - getColourValue()
    - getBaseColourObject()
    - getMapColourObject()
    - textColorLevel()
- Astro components:
    - PageContent_ThemeDynamic
    - ShadeSwatchAllLists
- New footer-text slot in Page layout to add to a text container div

#### Added to Scss
- Debug checkpoints added from utility-sass update
- New scss config function: config-get-template-styles()
- New scss config vars:
    - $fn_clampHighContrastBorderWidth_max
    - $fn_clampHighContrastBorderWidth_min
    - $fn_marginSoftValue_roundToPixelFactor
    - $fn_marginValue_roundToPixelFactor
    - $fn_pseudoIconsUseFont
    - $heading_fontSize_useRelative
    - $include_colourValues_hsl
    - $include_colourValues_rgb
    - $mx_activeTheme_extraSelectors
    - $mx_activeTheme_nestExtraSpecific_includeExtraSelectors
    - $mx_activeTheme_nestExtraSpecific_includePseudoSelector
    - $mx_tokens_fontFace_asBase64
    - $mx_tokens_print_borderRadius
    - $mx_tokens_print_colour
    - $mx_tokens_print_fontFamily
    - $mx_tokens_print_style
    - $mx_tokens_print_theme
    - $mx_tokens_print_transition
    - $mx_tokens_print_trTime
    - $mx_tokens_print_zIndex
    - $mx_tokens_printAll
    - $mx_tokensColour_presetOpacities_include
    - $mx_tokensTheme_activeTheme_nestExtraSpecific
    - $mx_tokensTheme_includeDefault
    - $mx_tokensTheme_includeForcedColorAlternatives
    - $mx_tokensTheme_includeQuery
    - $mx_tokensTheme_nestActiveTheme
    - $regex_themeTokenGreyVariations
    - $regex_themeTokenGreyVariations_flags
    - $regex_themeTokenSetChildrenOnly
    - $regex_themeTokenSetChildrenOnly_flags
    - $regex_tokenFlowMargins
    - $regex_tokenFlowMargins_flags
    - $subheading_fontSize_useRelative
    - $themes__nestedFlat_tokenValues_warnIfNoFunction
- New scss token vars:
    - $button_fileSelector_variation_default
    - $button_inline_variation_default
    - $button_variation_default
    - $button_variation_reset
    - $button_variation_secondary
    - $colour_presetOpacities
    - $colour_presetOpacities_includeFromTheme
    - $themesMeta_buttonVariations
    - $themesMeta_buttonVariations_extra
- New scss functions:
    - active-theme-simple-selectors()
    - clamp-high-contrast-border-width()
    - flow-margin-class-to-style-token()
    - get-active-theme-flat()
    - get-active-theme()
    - selector-all-background-variations()
    - style-token-exists()
    - theme-token-exists()
    - var-flow-margin-from-class()
    - var-flow-margin-from-token()
- New scss mixins:
    - active-theme
    - first-child-no-top-margin
    - font-family-icons
    - last-child-no-bottom-margin
    - props-icon-spacing
    - set-flow-margins
    - snippet-alert-block-colours
    - snippet-button-colour-single-state
    - snippet-button-disabled
    - snippet-fieldset
    - snippet-legend
    - snippet-pre
    - snippet-search-form
    - snippet-support-code
    - snippet-support-dl-list
    - snippet-support-lists
    - snippet-support-sidebar-widgets
    - snippet-support-skip-links
    - snippet-support-tables
    - snippet-unstyled-heading
    - snippet-widget-block
    - theme-set-color
- Utility/pseudo classes:
    - background-[…] (for background theme tokens)
    - if-viewport-max-width-[…] (for breakpoints)
    - if-viewport-min-width-[…] (for breakpoints)
    - margins-flow
    - margins-flow-firm
    - margins-flow-large
    - margins-flow-small
    - max-width-[…] (for width tokens, plus utilities for common values)
    - min-width-[…] (for width tokens, plus utilities for common values)
    - overflow-block-auto
    - overflow-inline-auto
    - text-align-center
    - text-align-end
    - text-align-start
    - text-transform-lowercase
    - text-transform-uppercase
    - uppercase-emphasis (applies text-transform-uppercase but inherits font weight - to use e.g., on a <strong> element for better accessibility)
- New scss template functions:
    - get-extend-selectors-layout-globals()
    - get-extend-selectors-layout-utils()
- Updated with utility-sass 0.1.0-beta.0, including:
    - extend-selectors-* mixins now have $additional_optional param for
      always-optional selectors
    - extend-selectors-generic mixin is now public (was _extend-selectors)
- add-[slug]-icon, add-[slug]-icon-after, add-[slug]-icon-before utility classes

#### Added to TS
- TS methods:
    - AbstractTokens.newError()
- TS utility functions:
    - BuildUtilities.defineSassCompilerOpts()
    - BuildUtilities.getBrandConstants.[…]
    - ColourUtilities.Async.[…] (async versions of existing utilities)
    - ColourUtilities.Levels.augmentor()
    - ColourUtilities.ShadeMaps
    - ColourUtilities.toList()
    - ColourUtilities.toList.hsl()
    - ColourUtilities.toList.lch()
    - ColourUtilities.toList.rgb()
    - getColourCSS()
    - getDataFromClrSlug()
    - getFontSizeCSS()
    - getThemeTokenColourSlug()
    - objectKeySort_Tokens()
    - objectKeySortAsync_Tokens()
    - themeSlugToCSS()
- TS types:
    - ColourUtilities.Levels.Any
    - TokenTypes.Colour.AnyLevel

### Changed
- Changed param from $lh to $lineHeight in mixins - snippet-button, snippet-input, snippet-label
- Background levels now have an object option for input
- Changed var-theme function fallback to look for forced-colors fallback by default
- Made border-width and stroke-relative values larger in high-contrast modes
  (via local token function & mixin overrides)
- Added "white" and "black" as valid options for various levels in colour/theme
  classes and utilities
- Added $version param to scss functions - theme-token-exists(), theme-token-value()
- Added $raw param to scss function - style-value()
- Updated scss config & templates with utility-sass 0.1.0-beta.0 & utility-astro 0.1.0-beta.0
- Improved internal errors classes

### Fixed
- Fixed bug in writing logo files during included compile stage
- Minor logo & icon token improvements
- A couple exported build script improvements
- Huge fix to compile times via custom function in compiler to parse
  asynchronously - 10-60x faster!
    - BuildUtilities.defineSassCompilerOpts to add compiler functions to
      build-utilities config
- Updates to the Tokens_Themes_Set.SingleMode.Build.data - now accepts and
  parses overrides internally, allowing overwritten values to ripple through to
  the unset default values appropriately
- Improved theme preview component
- Improved sass mixins theme-set-color and tokens-theme-individual-base-properties
- Improvements to tokens-theme definition of outline colours (for better active theme nesting)
- Updated Atkinson Hyperlegible font to Atkinson Hyperlegible Next (with variable)
- Added monospace fonts to accessible overrides (dyslexic & hyperlegible)
- Fixed letter spacing for the open dyslexic font override


## All **0.1.0-alpha** Releases — 2025-10-30 to 2026-01-20


### **0.1.0-alpha.12** — 2026-01-20

Minor scss updates.


### **0.1.0-alpha.11** — 2026-01-20

Minor scss fixes. Updated utility-sass.


### **0.1.0-alpha.10** — 2026-01-20

Minor fix to $designTokens !default overrides now merge recursively.


### **0.1.0-alpha.9** — 2026-01-20

Have to make many test releases so it's the same instance of sass-embedded as
its dependents.

### Added
- Made scss mixin public - tokens-theme-individual-base-properties

### Fixed
- $designTokens !default overrides now merge recursively


### **0.1.0-alpha.8** — 2026-01-20

Updated utility-sass for more var-printing config.


### **0.1.0-alpha.7** — 2026-01-20

Mini scss fixes.


### **0.1.0-alpha.6** — 2026-01-20

### Added
- Config var - $mx_tokensAll_includeFontFace
- Testing $customPropertyPrefix config var from utility-sass

### Fixed
- Updated dependencies


### **0.1.0-alpha.5** — 2025-12-28

Updated build-utilities and utility-sass.


### **0.1.0-alpha.4** — 2025-12-27

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


### **0.1.0-alpha.3** — 2025-11-15

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
  Tokens_Themes_Set.SingleMode.Data_RecursivePartial type


### **0.1.0-alpha.2** — 2025-11-03

Small astro component & style fixes.

### Removed
- $mx_tokensTheme_nestModeSelectors config var

### Added
- getLevelsInUse() function for themes

### Changed
- Updated dependencies


### **0.1.0-alpha.1** — 2025-10-30

Forgot to include the tsconfig file.


### **0.1.0-alpha** — 2025-10-30

A quick pre-release converting templates to scss-templater.  Version 0.1.0 won't
progress beyond alpha.