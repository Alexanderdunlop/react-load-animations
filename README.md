# react-load-animations

[![npm version](https://badge.fury.io/js/react-load-animations.svg)](https://badge.fury.io/js/react-load-animations)
[![Build Status](https://travis-ci.org/Alexanderdunlop/react-load-animations.svg?branch=master)](https://travis-ci.org/Alexanderdunlop/react-load-animations)
[![Coverage Status](https://coveralls.io/repos/github/Alexanderdunlop/react-load-animations/badge.svg?branch=master)](https://coveralls.io/github/Alexanderdunlop/react-load-animations?branch=master)

React loading animations using css. See [demo](https://alexanderdunlop.github.io/react-load-animations/)

## Installation

### npm

```sh
npm i react-load-animations
```

### yarn

```sh
yarn add react-load-animations
```

### unpkg

```html
<script src="https://unpkg.com/react-load-animations@latest/dist/bundle.umd.js"></script>
```

## Usage

```js
import React, { Component } from 'react'
import { Comet, Ellipsis, Ring, Ripple } from 'react-load-animations';

class App extends Component {
  render() {
    return (
      // Default size is 64px by 64px
      <Comet />

      // With props
      <Ellipsis width={100} />
      <Ring height={100} />
      <Ripple width={100} height={100} />
    )
  }
}
```

## Props
All components come with the following props
- Width(Int): Set load animation width (Default 64)
- Height(Int): Sets load animation height (Default 64)

## Examples

- [UMD via CDN](./examples/cdn)
- [Create-React-App](./examples/cra)
- [Server-Side Rendering](./examples/ssr)

## Copyright

Ellipsis, Ring, Ripple modified from [loading.io](https://loading.io)
