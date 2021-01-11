---
title: MongoDB is monotonic by default
date: 2020-03-11T10:19:17-08:00
---
In a distributed environment, conflicting operations from multiple instances could be fired at the same time. If the receiver service doesn't have a mutex(lock) for resources, unexpected behavior can happen. 

This is a concern I had when I started using MongoDB, but apparently, Mongo is monotonic by default. Also, if you turn on "majority" for reads, it would be casual consistent. No need to implement a shared lock on MongoDB for instances.