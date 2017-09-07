---
title: About
date: "2016-05-06"
layout: page
---
Hello, my name is Song Wang.

I am a grad school student majored in Computer Science, living in ~~Beijing~~, ~~Chengdu~~ New York.

I code with Javascript, Go, Python, HTML, CSS.

I love open source, and I contributed over [2,000
times](https://github.com/wangsongiam) last year on Github.

I love to play with [leetcode](https://leetcode.com/wangsup/), [code wars](https://www.codewars.com/users/wangsup) for practicing a new language and
algorithms.

I configure and sync the [dotfile](https://github.com/wangsongiam/dotfiles) for my editors, terminals, apps, macros almost every day.

I am a fast typer ranked top 6% of the world with [2,500 matches](https://www.keyhero.com/profile/).

## About songwang.io
This site is my blog site, primarily for sharing my ideas and works. It is the 4th version, and its predecessor was built in 2016 with Jekyll. Yet, thanks to the help from GraphQL and Webpack3, this version is even faster in a more progressive way and performs pretty well in the browser.

![performance](ChromeAudits.png)
by Google's [lighthouse](https://developers.google.com/web/tools/lighthouse/)

Performance is the hardest one to reach full points. I tried my best with
injecting vanilla CSS or PostCSS with SCSS plugin, yet the best I could got from
them was 92 with 1.6s first meaningful page loading time. Then I realized that
injecting style sheet at the head of document was not the perfect way.

But thanks to the CSS-in-JS community, especially [styled
components](https://www.styled-components.com), which make modular elements
with in-tag styling for Reactjs. I made Chrome reads my site the happiest way.

![detail on performance](performance.png)

### Dependencies
To name a few Web technology I heavily used on this site:
* Webpack
* React.js
* GraphQL, Relay
* Gatsby.js
* Styled components
* Netlify-CMS

I started building this site back in June 2017, when Gatsby was in the alpha versions of 1.0, and Netlify-CMS was on the road to version 1. They were pretty buggy, but I still gave them a shot.

Although I experienced with React and Webpack before, It was a frustrating ordeal to work with the alpha version to me. I was frequently asking, reporting and fixing the problem as long as I can those days, yet still, failed uncountable times, sometimes couldn't figure how to make things work for days. But thanks to the community from both React and Gatsby, I was able to make my site work in my preferred way before the Beta version was released. It took over three weeks which is way more than I thought at the beginning, but it was a valuable learning experience, and I am happy with both my site and my contribution to the communities.

### Acknowledgments:
* [KyleAMathews](https://github.com/KyleAMathews) for actively responding to my questions and pull requests
* Siddharth Jain with his top-notch [blog site](https://yuppi.es/)
* Bill Xiong with his [showcase](https://xpchbill.github.io/blog/)
* [Tunghsiao Liu](https://github.com/sparanoid/almace-scaffolding) for the UI inspiration
* Ben jackson's [website](http://jxnblk.com/)
* Thijs Koerselman's [blog](https://www.vauxlab.com/work/vauxlab-2017/)
