---
title: Using Pascal's triangle for dynamic programming problem
date: '2018-01-10T17:12:39-05:00'
tags:
  - algorithm
  - dynamic programming
---
Dynamic programming might be the most interesting approach in computer science with a clean and elegant solution. The general idea is to find the mathematical relations(equations) between the input and output. With enough "dark magic", the solution could be extremely simple.

The following question is asked by an interviewer who’s specialized in algorithms.

> A kid can move towards three directions: up, left, right. Each move has the same length. The kid can't move down and can't move to his last position(eg. moving to the right then left is not allowed). How many unique ways by n moves the kid could have?


## The intuitive backtracking way, O(n!)
By the first glance, the question could be done by backtracking all the possible ways starting from position "0,0", and count the number of it. 

But at the same time, since backtracking needs to be done incrementally, in the worst case we have to store all the previous moves in the memory, which is highly inefficient. Also, the computing complexity of backtracking goes up to n factorial, with a pretty large memory space.

That being said, the dumb solution is obviously a less optimized solution. But we can certainly try some more consistent way by finding the pattern or pure math.

## Dynamic programming, O(n)

By being less dumb, we may notice that we don't really have to store all of the previews moves. Since we are just calculating number count, we could find a relation with previous ending spot and the next one, and just store the counting number without move records. The validating part could be avoid by not adding invalid counts from each step followed by a same pattern. 

#### Finding the DP relation equation
That being said, if we have a pattern function that links the counting numbers' relations with each other, then we could find a much smarter way to incrementally get the result. But the relation is not that obvious in this problem, and that's where I got stuck. Normally, a dynamic programming only need the relation between the previous and current position, but in this problem, the relation actually lies from the first position to the last position. 

#### TL;DR
Considering this question, for n moves, the kid could move at most up 10 times. But he doesn't have to be up 10 times, he could end up in 0 - 9 up times. So we may consider the kid have 10 cases divided by upper level. For upper 0 level, we say the kids didn't move up at all, for upper 1 level we say the kid moved up once. 

If you think about the relation by upper level, for each level the id went up, he could end up with lots of unique ways, but that's all related with the ways from the last level. 

On level n, for the position with x-axis of 0, the kid could have only one way coming right from the last level with x-axis of 0, for the position with x-axis of +1 or -1, the kid has two times of the ways coming from the level before the last level, and it keeps following the same pattern throughout the levels.

So, the final pattern is 

> F(n) = F(n-1) + 2F(n-2) + 2F(n-3) + ... + 2F(1) + 2

with F(n) for the total ways with n steps. 

By that equation, we could simply organize a simple array and keep track from move 0 to move n, and calculate the final result based on all the former results. The complexity from that would be linear, which is way better than n factorial.



## Mathematical Induction, O(1)
A Linear way is usually considered as a "good" solution for computing time. But if we could find the pure mathematical equation that takes n and simply puts the final result, that would be the fastest possible solution. 

### Draw and find the Pascal's triangle

If we are trying to find the pure math relations, we usually need to draw out the math and "feel" it.

![pascal's triangle](images/uploads/pascal.png)

In the triangle, the solid line stands for the first move, the dashed stands for the second, and the curled for the third. By connecting all of the ending positions from each move, we could find a larger triangle every time. And if you looked at the ending counting numbers from the left edge or right edge of the triangle, it actually goes like a [Pascal's triangle](https://www.wikiwand.com/en/Pascal%27s_triangle), from "1" to "1, 2 ,1", to "1, 3, 3, 1" to "1, 4, 6, 4, 1".

Following through the two Pascal's triangles, we could find the ultimate equation is

> F(n) = 2 ^ (n + 1) - 1

And by that, the computing time will always by the same time, which is constant time, the fastest way.



