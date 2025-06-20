---
title: Sass Exports
---
<!-- @since ___PKG_VERSION___ -->

# Sass

This library exports some scss utilities that are not auto-documented. They are,
however, documented in the code itself.

## How to Use

It’s best to `@forward` the library’s sass into a partial that is then `@use`d
in other files.

```scss
// ./_utils.scss
@forward 'pkg:@maddimathon/design-system-utilities' with (
    // $example: value,
);
```

```scss
// ./main.scss
@use 'utils';

body {
    --test: #{utils.example-function( 'hello' )};
}
```