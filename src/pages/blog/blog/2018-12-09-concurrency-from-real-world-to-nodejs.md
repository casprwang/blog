---
title: Concurrency from real world to Node.js
date: '2018-12-09T19:21:51-08:00'
tags:
  - node
  - javascript
  - concurrency
---
Recently I got into an interesting conversation with a cool guy named Chris, where he asked if I can explain how Node.js works to some nontechnical people. I found it pretty interesting and also hard at the same time given that some of the abstractions I usually based on are probably not in the audience's knowledge. After some repercussion thoughts, I found one of the ways I could do is to start from the very basics of the design and the ways operating system handles tasks like people handling things from the real world. Following the thoughts with some lookups, I eventually learned a lot more designs from both Node.js and the Unix like operating systems. 

Here are my thoughts on explaining some common concurrent programming terminologies, eg. event loop, promise in Node.js.

## How concurrency works in the real world
For starters, it's quite important to know that almost all of the things in the real world, are already happening in a concurrent way.

Taking a very simple real-world example: every morning, I open my phone, order one cup of coffee and one sandwich before going to pick up, they both need about 4 mins to prepare. After 5 minutes, I get a message from the coffee shop: the manager texted me confirming the sandwich and coffee are all done by two different cooks already, I can pick up anytime I want. Time saved.

That's how easy concurrency happens in real life, it should be easy for any nontechnical person to understand. And to make it even simpler, we can abstract the participant groups by responsibilities, scheduler, and worker.

## The concept of scheduler and workers
It's simple for concurrency to happen because, for the most part, it's been done by just one scheduler, who schedule and keep an eye for the tasks, and some workers who do the job. You might argue that the scheduler could be unnecessary since the worker can directly reach back, but thing could happen and there has to be someone constantly checking the earlier task he delegated so that the tasks could be guaranteed to be reported back. In my case, the cook might get sick or anything making him unresponsive and never reach back. There has to be someone, at the very least, poke me back if one order never gets done for a long time. Which leads to another concept of timeout but I won't go further on that.


## The implementation of an operating system (Unix)
So how did the operating system implement the scheduler and worker concept into our system? And before we move to the terms from Unix system, let me provide some basic explanation of some Linux techniques that work in a Unix like system.

### Servers as workers
A server is where we do our tasks, it's like the kitchen for our cooks working on the sandwich and coffee. A Unix server can handle tasks like file system read/write, DNS lookup, HTTP get/response. 

### Socket to communicate
A socket is like a phone connection when it's connected between one cook in the kitchen and the manager from the front desk. The manager and the cook can talk with each other in either way. For this case, most of the case would be our scheduler checking every socket to see if anything has been done, the worker will then answer with the status at that moment.

### Looping and Polling to check workers' status
As mentioned earlier, the manager will be constantly calling into the workers through a socket and see if anything has been done yet. This technique could be done in some different ways in a different operating system, eg. epoll, kqueue, but the ultimate purposes are similar: keep looping and polling through all socket connections and let them check in with the current status. You can picture the manager asking the two workers, "Hey, have you done with the coffee?", "Not yet", "Hey, have you done with the sandwich?", "Not yet".


![epoll and kqueue](/../../../images/uploads/epoll.png)


## Concurrency in Node.js
Concurrency in Node.js is another abstraction based on synchronous programming while utilizing epoll/kqueue for asynchronous tasks.

![node runtime](/../../../images/uploads/node.png)


## Further explanation for some abstract terms
### Event loop
It's an abstraction wraps over epoll/kqueue, for semi-endlessly looping and pooling all events/sockets registered in the event queue. Whenever an event or a socket start giving "finished" sign, the event got polled by event loop and pushed to the following step with callback handler, which will either executed by V8 or pushed into Event Queue again for further concurrent follow up tasks.

### Callback event
One callback is an event handler attached with one specific event, this event is attached with the function that holds the callback. Whenever a worker finished a job, the worker let the event loop know by socket, the callback event then got triggered and the callback with results from the job got pushed into Javascript call stack. 

### Promise
It's a type of syntax sugar that wrap over callback function, a callback function tells what the following working needs to be done after finished. Promise makes those after-finished work chain-able and compose-able. 

### Async await
A syntax sugar wrap over Promises makes those functional/compose-able Promises working in procedural one stop at a time. 

