# React Animated Show More

[![Build Status](https://travis-ci.org/tinacious/react-animated-show-more.svg?branch=master)](https://travis-ci.org/tinacious/react-animated-show-more) [![codecov](https://codecov.io/gh/tinacious/react-animated-show-more/branch/master/graph/badge.svg)](https://codecov.io/gh/tinacious/react-animated-show-more)

This is a simple, fully-customizable component that expands an area of text to show the rest of it.

Try out the [demo](https://tinacious.github.io/react-animated-show-more) for yourself.

![](react-animated-show-more-demo.gif)



## Features

- Supports custom toggle component, otherwise shows "Show more" or "Show less"
    - `toggle` (React component) – should implement prop `isOpen`
- Configurable properties
    - `height` (in pixels, default: `200`)
    - `speed` (in milliseconds, default: `300`)
    - `shadowColor` (any colour format, default: `#fff`)


## Peer dependencies

- React v16.8+ (uses hooks)


## Usage

#### Installation

With NPM:

    npm install --save react-showmore

With Yarn:

    yarn add react-showmore

The component wraps around your lengthy text section.

```jsx
import React from 'react';
import AnimatedShowMore from 'react-animated-show-more';

// ...

<AnimatedShowMore
  height={100}
  toggle={({ isOpen }) => isOpen ? 'Close!' : 'Open!' }
  speed={2000}
  shadowColor="#000">

  {/* Lots of stuff goes here */}
  <DemoText />

</AnimatedShowMore>
```


## Contributing

### How can I contribute?

- Report bugs in the issue queue
- Solve bugs in the issue queue
- Add features (check the issue queue for ideas)
- Write documentation

Feel free to make pull requests or issues to make this project better 👯
