---
title: Astro Template
---

# Astro Template

{@include ./desc.docs.md}

Forwards the package's [config](../../config/index.docs.md),
[tokens](../../tokens/index.docs.md), and [library](../../lib/index.docs.md).


## General Use

Optionally, in a configuration file, `config.scss`:

```scss
@forward 'pkg:@maddimathon/design-system-utilities/templates/docs/config' with (
    ...
);
```

Optionally, in a tokens file, `tokens.scss`:

```scss
@forward 'pkg:@maddimathon/design-system-utilities/templates/docs/tokens' with (
    ...
);
```

In your main stylesheet, `index.scss`:

```scss
@forward 'config'; // if applicable
@forward 'tokens'; // if applicable

@forward 'pkg:@maddimathon/design-system-utilities/templates/docs';

// your styles
```

In your partials, `*/*.scss`:

```scss
@use 'config'; // if applicable
@use 'tokens'; // if applicable

@use 'pkg:@maddimathon/design-system-utilities/templates/docs' as lib;

// your styles
```