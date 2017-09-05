#  [songwang.io](https://songwang.io)
Source code for the website about Song Wang at [songwang.io](https://songwang.io).

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
│  └── admin              > Netlify CMS
├── src
│  ├── components
│  ├── html.jsx           > React Entry Point
│  ├── images             > Image Uploads
│  ├── layouts/           > Global layout
│  ├── pages              > Pages
│  │  ├── about
│  │  ├── blog            > Posts
│  │  │  ├── blog/
│  │  │  ├── links/
│  │  │  └── notes/
│  │  ├── index.js        > Landing
│  │  ├── search.js       > Search
│  │  └── tags.js         > Tag
│  ├── templates
│  │  ├── blog-post.js    > Blog Template
│  │  └── tag-page.js     > Tag Page Template
│  └── theme              > Styled Components
│     ├── containers
│     └── utils
├── gatsby-node.js        > Nodes Manipulations
└── gatsby-config.js      > Gatsby Configuration
```

### Local Installation

```
git clone https://github.com/wangsongiam/songwang.io.git
cd songwang.io
npm i
npm run dev
```

### Acknowledgments
- almace-scaffolding
- bricolage.io
- yuppi.es
- xpchbill.github.io

## License
This repo is fully under [MIT Lincese](LICENSE), by that you can do almost
anything you want with it.
