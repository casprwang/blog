#  [songwang.io](songwang.io)
Source code for the website about Song Wang at [songwang.io](songwang.io).

### Tech Stack
* [Gatsby.js](https://www.gatsbyjs.org/)
* [React.js](https://facebook.github.io/react/)
* [Graphql](http://graphql.org/) / [Relay](https://facebook.github.io/relay/)
* ~~[PostCSS](http://postcss.org/) / [Sass](http://sass-lang.com/)~~
* [Styled Components](https://www.styled-components.com/)
* [Netlify-CMS](https://www.netlifycms.org/)


### Tree View
```
.
├── static
│  ├── admin              > Netlify CMS files
├── src
│  ├── components
│  ├── html.jsx           > React Entry Point
│  ├── images             > image uploads
│  ├── layouts            > Global layout
│  │  ├── index.js
│  ├── pages
│  │  ├── 404.js
│  │  ├── about           > About Page
│  │  ├── blog            > All Posts
│  │  │  ├── blog
│  │  │  ├── links
│  │  │  └── notes
│  │  ├── cv              > Resume Page
│  │  ├── hire
│  │  ├── index.js        > Landing Page
│  │  ├── index.style.js
│  │  ├── search.js       > Search Page
│  │  ├── tags.js         > Tag Page
│  │  └── tags.style.js
│  ├── templates
│  │  ├── blog-post.js    > Blog Template
│  │  └── tag-page.js     > Tag Page Template
│  └── theme
│     ├── containers      > Style Components
│     ├── global.js       > Global Styles
│     ├── prism-coy.js    > Code Block Styles
│     ├── reset.js
│     ├── typography.js 
│     ├── utils
│     │  ├── media.js
│     │  └── offSet.js
│     └── variables.js    > Styling Variables
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── package-lock.json
├── package.json
├── post-build.coffee
└── yarn.lock
```

### Local Installation

```
git clone https://github.com/wangsongiam/songwang.io.git
cd songwang.io
npm i
npm run dev
```

### Inspired by 
- almace-scaffolding
- bricolage.io
- yuppi.es
- xpchbill.github.io

## License
This repo is fully under [MIT Lincese](LICENSE), by that you can do almost
anything you want with it.
