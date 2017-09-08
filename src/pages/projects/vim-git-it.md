---
author: Song Wang
title: Vim git it
date: '2017-05-08T10:33:08-04:00'
description: Do git things by one command asynchronously
color: 'HSLA(133, 100%, 24%, 1.00)'
tags:
  - vim
  - vim plug
  - neovim
  - plugin
  - package
---

```vim
Plug 'wangsongiam/vim-git-it'
```

## Source
[Vim-git-it](https://github.com/wangsongiam/vim-git-it)

## Motivation
Vim git it is a plugin to simplify the git commands and makes it possible to push/commit with a message by one shortcut.

Vim and Git are my favorite tools, they both made my life a lot easier and less worrisome. But when they combined without another terminal pane, it feels a little bit verbose. The legendary [vim-fugitive](https://github.com/tpope/vim-fugitive) made my life easier, but I still found 90% of the time I simply need `git add .`, `git commit -m`, and `git push`. I could type them separately but seeing that I am a 20 times per day pusher, a combined and simplified for those commands seems a time saver.

## Logic
The idea behind this plugin is pretty simple: combine three shell commands, take arguments and join them together as a message string and put it into the git commands flow, then bind it with a Vim shortcut. 

## Vim script
Before this plugin, I only use some simple Vim scripts in my Dotfiles. Learning Vim script was an exciting thing for me.
For a simple logic like this, I could finish it with another language I am familiar with quickly, but Vim is something I want to check out. And as it turned out, it was not that complicated, at least for this plugin. I finished the just with a single liner code for each function or command. What surprised me is that Vim’s syntax is pretty elegant for taking arguments. 
