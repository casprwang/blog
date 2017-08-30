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
├── gatsby-config.js       
├── gatsby-node.js         
└── src/
    ├── components/        > react components
    ├── theme/             > styled components
    │   ├── containers/    > styling containers
    │   └── utils/         > styling functions
    ├── html.js            > DOM
    ├── images             > static images
    ├── layouts            > main wraper for all pages
    │   └── index.js
    ├── pages
    │   ├── index.js       > landing page index
    │   └── tags.js        > tag index page
    ├── scripts
    │   └── new.js         > script for creating new blog/pages
    └── templates
        ├── blog-post.js   > template for blog post
        └── tag-page.js    > template for tag page
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
