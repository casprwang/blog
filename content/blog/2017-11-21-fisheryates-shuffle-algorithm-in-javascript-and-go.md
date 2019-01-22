---
title: Fisher–Yates shuffle algorithm in Javascript and Go
date: '2017-11-21T20:06:45-05:00'
tags:
  - javascript
  - go
  - algorithm
---
 Fisher-Yates shuffle algorithm is a classic shuffling algorithm with great performance and mathematical correctness. Here is two implementation in Javascript and Go.

### Javascript
```js
// time: O(n)   space: O(n)
function shuffle(arr) {
  const len = arr.length
  const shuffled = new Array(len)

  let i = 0
  let ran
  const end = len - 1

  while (i <= end) {
    ran = ~~(Math.random() * (i + 1))

    if (ran !== i) {
      shuffled[i] = shuffled[ran]
    }

    shuffled[ran] = arr[i]

    i++
  }

  return shuffled
}

// time: O(n)   space: O(1)
function shuffleInPlace(arr) {
  const len = arr.length

  let ran
  let i = 0
  const end = len - 1

  while (i <= end) {
    ran = ~~(Math.random() * (i + 1))

    ;[arr[ran], arr[i]] = [arr[i], arr[ran]]

    i++
  }

  return arr
}

```

### Go

```go
package play

import (
        "math/rand"
        "time"
)

func Shuffle(arr []int) []int {
        len := len(arr)
        shuffled := make([]int, len)

        var ran int

        for i := 0; i < len; i++ {

                rand.Seed(time.Now().UnixNano())
                ran = rand.Intn(i + 1)

                if ran != i {
                        shuffled[i] = shuffled[ran]
                }

                shuffled[ran] = arr[i]
        }

        return shuffled
}

```

### Acknowledgements:

* [leetcode: shuffle-an-array](https://leetcode.com/problems/shuffle-an-array/)
* [Fisher-Yates shuffle](https://www.wikiwand.com/en/Fisher%E2%80%93Yates_shuffle)
* [hanzichi's solution](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Shuffle%20an%20Array/shuffle-an-array.js)

