---
author: Song Wang
title: Word metrics
date: '2017-09-12T01:22:48-04:00'
description: simplify and anylize an article
color: '#DBC258'
tags:
  - npm
  - nodejs
  - javascript
  - package
---

```
npm i word-metrics
```

### Usage

```js
const wordCount = require('word-count')

const simplifiedWords = wordCount.simplify('Hello! My name is Song Wang 1 2 3, I am creeeeeazy #@$@!% n\n\n\t\t\t')
simplifiedWords
//=> 'hello my name is song wang 1 2 3 i am creeeeeazy n'

wordCount.createMetrics(simplifiedWords)
//=> 
  {
    totalLetters: 50,
    totalWords: 13,
    uniqueWords: 13,
    longWords: 1,
    averageWordLength: 2.923076923076923,
    wordOccurrences:
     { '1': 1,
       '2': 1,
       '3': 1,
       hello: 1,
       my: 1,
       name: 1,
       is: 1,
       song: 1,
       wang: 1,
       i: 1,
       am: 1,
       creeeeeazy: 1,
       n: 1 } 
   }
```

## Source
* [Github](https://github.com/wangsongiam/word-metrics)
* [NPM](https://www.npmjs.com/package/word-metrics)
