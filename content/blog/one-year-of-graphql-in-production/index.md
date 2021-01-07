---
title: One year of GraphQL in production
date: 2020-02-06T17:07:13-08:00
tags: []
---
2019 has become an interesting year since I commit to GraphQL in production. I am proud that many applications has been working smoothly, with aggregated micro-services stiched to a single Graph. Here are some reflections.

## Good foundation

This year I attended the GraphQL Summit, and I was amazed seeing all the major endorsers and backers in the industry: startups, unicorns, big names, even some old school banking companies are in the party now. GraphQL's future is promising.

## Implementation is buggy but tolerable

So far, Apollo and Graphene stand out from all the implementers, and it's been used by the majority. But even with great talents and backers, it's still very challenging to get stable. We've experienced different types of pain points through the development process. It's up and running well but needs improvements for sure.

## Engineering a large graph is not trivial

The specification envisions a well-structured endpoint that comes with many benefits. But after one part of the graph up and running, it gets much harder when stitching up. It requires multiple building blocks with well thought out layers, service discovery, databases with suited aggregation mechanism and queries, carefully crafted caching layers, etc.

## Fast-changing practices

The frontend world has been fast-evolving, and it exhibits little sign of slowing down. To keep up the "best practice," we would need frequent refactors, adopting new APIs from Javascript, Typescript, React, Vue, Node.js, Apollo Server and Client, code generators, even editor plugins. There are always better ways to do things, and the community adopts them quite aggressively.

## Some uncertainties

\- Relay vs. Apollo

\- edges and nodes or not

\- Versioning

\- Monitoring and Observability 

## Future

\- Better support from major languages, Java, Go, etc., even the most popular implementations in Node.js and Python, can be improved. 

\- HTTP 2 multiplexing

\- Streaming

\- Reliable Pub and Sub model.