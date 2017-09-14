---
author: Song Wang
title: Dotfiles
date: '2017-09-02T01:22:48-04:00'
description: the configurations of my workstation
color: 'HSLA(133, 100%, 24%, 1.00)'
tags:
  - vim
  - neovim
  - tmux
  - zshell
  - hammerspoon
  - iTerm
---

Source: [github.com/wangsongiam/dotfiles](https://github.com/wangsongiam/dotfiles)

## Motivation
As you might not know, I was very serious about coding the moment I started. I did a quite amount of work on the basics like English and typing to make sure I am well suited to start coding. And as for the computer and editors, I will be using every day as a programmer, I definitely would love to spend lots of my time tweaking it, and here comes the Dotfiles you are looking at.

## Timeline
### Beginning with Vimrc
It was about the time I started coding, around May 2016, the same time I was comfortable with typing and English(a big deal). I made my very first git commit to my [Dotfile](https://github.com/wangsongiam/dotfiles/commit/96cd0a801bea0faab31eae63dba9171b84169ac4)(a vimrc file for Vim) on my MacBook Air after watching [this talk](https://www.youtube.com/watch?v=5r6yzFEXajQ&t=2858s) on youtube. 

```vim
" ~/.vimrc

" Mapping
let mapleader = "\<Space>"
nnoremap <leader>w :wa<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>o :NERDTreeToggle<CR>
nnoremap <leader>y :sy on<CR>

" Interface
syntax on
set relativenumber
set t_Co=256
colorscheme darkerdesert
set laststatus =2

" Bundle Begins
set nocompatible              " be iMproved, required
filetype off                  " required
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'flazz/vim-colorschemes'
Plugin 'scrooloose/nerdTree'
" Plugin 'vim-airline/vim-airline'
call vundle#end()            " required
" Bundle ends 
```

Frankly speaking, I had no idea what that is when I was doing it, I was following the instructions in the talk and typed that out. But I did notice that I changed the color scheme, and I was super happy then. 


### Tmux joined the party
20 days after my first Vimrc, after some acknowledgments from googling and replays from the same video, I initialized my `.tmux.conf` in [this commit](https://github.com/wangsongiam/dotfiles/commit/3903851e3b4f9f644aec2586554538a1bde4f76c). 

```
unbind C-b
set -g prefix C-a

#gogogo
# remember source code
# tmux souce-file ~/.tmux.conf
```
Again, had no idea what that actually is other than the commentary from youtube in my head(Nah, I could know `#` stands for comments, I was a genius XD).
### Karabiner and starting to remap keyboard
Around June 2016, I watched a few Vim talks from `Thoughtbot`’s  [Youtube channel](https://www.youtube.com/user/ThoughtbotVideo)(they got lots of awesome vim talk by the way), and one of the first things the speaker mentioned to do before Vimming, was changing the `caps lock` key to `escape` key. And I followed it with Karabiner, that was the first keyboard remap and it certainly paid off thanks to Karabiner and Thoughtbot. 

### Frist swag with a demo gif
I’m not a showy person but in July 2016, I was pretty comfortable with Vim and Tmux, and I was really happy with it, so I started to show off my terminal and editor in the Readme in this [commit](https://github.com/wangsongiam/dotfiles/tree/fb420a41d2178b58b7952f04ff95cf0c4714c77b) with a gif like this:
![](https://cloud.githubusercontent.com/assets/19645990/16610534/5f89bac0-438e-11e6-866f-342825f8ffd8.gif)
That was a Tmux navigation demo with some splitting. What worth mentioning is that I was excited enough to spend a whole day capturing that gif in a Starbucks.
### Atom kicked in
Atom was a cool editor and a big deal in 2016 and absorbed a huge community which caught my interests. In the mean time, I was stuck on some vim configuration and pissed about some Plugins’ compatibilities, bugs. I couldn’t help jumping into Atom. And I got to say Atom was great(and it still is), in a lot of ways, like plugins(especially the Vim mode), UIs and of course the community. I started to use Atom all time and quit Vim.

### A short detour in VScode
It was about the time I started working on my master’s Degree in the US. VScode came in, and as software trends to be, the new one was cooler and faster. In September 2016, even the community couldn’t compare with Atom, VScode was pretty popular in my team. I spent a few month on it then, even without a good configurable Vim plugin. 
### Jumping back to Atom for React
After finished the first semester in grad school. I started focusing on React development. And at the time of Dec 2016, two years after react landed, React was still not that well supported in editors. Take Vim as an example, I couldn’t even comment correctly for JSX styled commenting with any plugin, and I had to write my scripts to accomplish that basic functionality, so as some other features in VScode. Yet Atom, as a more matured editor with probably the biggest community at that time, had most the tools/plugins I needed, and the Vim plug was unbelievably awesome. So I jumped back and restarted configuring Atom.
### Back to Neovim
If you asked me to name one major reason to get back to Vim, I would say the performance on multitasking with Tmux, and that’s the top priority on my workflow. I would never say Vim is the best on UI(even for me it is), Plugins, nor compatibilities/extensibility. But it might be the simplest and cleanest one and lives inside of terminal for Tmux, and by that, I can do a big mount of multitasking there. I’m the kind of guy who loves to leave one piece of works and turning to something else and then move back, or multi-tasking if you will. I can not find another editor lives inside of terminals, and capable of running thirty or forty windows at the same time without being laggy. But Vim can. 
So even it was an ordeal to accomplish some basic functionalities like autocompletion, snippets, or even coloring, Vim makes things simpler and allows me to dive into more complicated tasks easier. And just like the current stage of programming field, where technologies are booming with new languages, frameworks, tools emerging every year or even every week, I need the thing to make complicated things simpler so I can keep multitasking on every single task without too much distraction. Vim made me willing to pay the trade off, and I spent about a month in winter(Jan 2017), fixed most the trivial yet annoying side of Neovim and tmux, and got back.
### Advancing with iTerm
to be written
### Advancing with Hammerspoon
to be written 


## Current Stage
