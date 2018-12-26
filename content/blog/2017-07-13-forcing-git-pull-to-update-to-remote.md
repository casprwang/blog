---
title: Forcing git pull to update to remote
date: '2017-07-13T22:35:41-04:00'
tags:
  - git
  - github
---
If you have some messy local thing, but you want to get rid of them and update with a remote branch, and you try to do `git pull` you would get 
```
error: Your local changes to the following files would be overwritten by merge:

```
Now, what you want is to update your local branch to the unchanged `HEAD` branch, which would have no conflict with your remote branch.

```
$ git reset --hard HEAD
$ git pull
```
And done.

