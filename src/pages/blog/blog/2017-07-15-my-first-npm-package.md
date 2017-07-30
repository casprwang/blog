---
title: 'My first NPM package '
date: '2017-07-15T00:26:31-04:00'
tags:
  - npm
  - javascript
  - package
  - coding
---
I spend a few hours uploaded my first NPM modules, [chinese-year](https://github.com/wangsongiam/chinese-year), which returns the Chinese zodiac animals' list, or, the name of a particular year. It's a super simple package, but it's the first NPM module I published. More on that, it has test cases I wrote with `jest`, and `Travis.ci` implementation. 

## Install
```
npm install --save chinese-year
```

## Usage
```js
const chineseYear = require('chinese-year')
chineseYear.years
//=> ['Rat', 'Ox', ...]

chineseYear.getAnimal(2000)
//=> 'Dragon'
```

## API
.getAnimal(year: number):string
.year:array
get zodiac animal name of a year number

