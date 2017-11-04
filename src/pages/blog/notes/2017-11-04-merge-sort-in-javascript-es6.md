---
title: Merge sort in Javascript ES6
date: '2017-11-04T14:41:32-04:00'
tags:
  - algorithm
  - sorting
---
Using top-down pattern

```js
const mergeSort = array => {
  if (array.length < 2) {
    return array
  }

  const middle = ~~(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const array = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }
  return [...array, ...left, ...right]
}

```
