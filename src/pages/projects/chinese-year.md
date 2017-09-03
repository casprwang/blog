---
author: Song Wang
title: Chinese years
date: '2017-09-02T01:27:47-04:00'
description: a simple npm package
tags:
  - npm
  - nodejs
  - javascript
  - package
---
a simple NPM package to tell you what Chinese zodiac name in a certain year.
## Source
* [Github](https://github.com/wangsongiam/chinese-year)
* [NPM](https://www.npmjs.com/package/chinese-year)

## Inspiration
I created this repo out of a heat of the moment, especially after seeing this [repo](https://github.com/sindresorhus/pokemon), which only stored a few JSON data with some simple API representing logics. The message was clear; I could make an elegant somehow useful package in NPM myself. 

## About the API
The logic was straightforward; I had 12 animals’ name stored in an object and then created two functions: one for exporting all the data in the object; one for getting a name every zodiacal period(12 years). If not, throw an error. 

## Testing
I use Jest for testing, and again, the logic is simple, since the results only have 13 possible outputs. Also, I have Travis.ci continuous testing implemented.
