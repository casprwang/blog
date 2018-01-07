---
title: Making zshell load faster on start
date: '2018-01-07T18:06:49-05:00'
tags:
  - zsh
  - nvm
  - node
---
I spent two hours for shortening my zsh's awful time. After a quite bit of researching on both zshell and some related plugins, I found the command `zsh -xv` could verbosely log all the loading files during a start. And the monster that was jamming this part is nvm, the node virtual machine manager. 

Apparently, nvm needs to be loaded on every instance for referencing the commands and scripts, which is way more than other vm manager like rvm or pyenv. 

Though I found the reason, it was hard for me to uninstall nvm entrirely, since Node.js is now in a lot of my projects looking for a specific version controled by nvm. But as a terminal guy, who probably open 50 terminals a day, 3s each is not acceptable. 

My final solution is to alias the loading commands by a short macro, for whenever I need Node to execute.


The performance got boosted to 1s, which is way more comfortable to me.

