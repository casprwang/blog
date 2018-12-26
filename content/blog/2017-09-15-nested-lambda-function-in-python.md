---
title: Nested lambda function in python
date: '2017-09-15T09:34:20-04:00'
tags:
  - python
  - functional programming
  - lambda
---
```python
import random

matric = [[0]*10 for i in range(10)]

output = map(lambda x: map(lambda y: random.randrange(10), x), matric)

print (output)
```

output: 
```
[[4, 0, 5, 7, 2, 5, 0, 0, 9, 5], [0, 7, 7, 6, 5, 6, 2, 5, 1, 8], [8, 0, 2, 8, 9, 0, 2, 1, 4, 8], [7, 6, 7, 4, 8, 0, 2, 8, 5, 9], [5, 6, 9, 2, 0, 2, 0, 8, 5, 0], [7, 2, 9, 6, 7, 9, 2, 0, 1, 8], [0, 4, 6, 8, 8, 4, 1, 9, 0, 5], [0, 9, 5, 1, 1, 2, 8, 6, 4, 7], [8, 1,3, 0, 1, 4, 1, 6, 2, 2], [2, 4, 5, 0, 1, 5, 1, 3, 3, 5]]
```
