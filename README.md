<h1>
  <a rel="noopener noreferrer" href="https://songwang.io" target="__blank">songwang.io</a>
</h1>

Source code for the website about Song Wang at <span><a rel="noopener noreferrer" href="https://songwang.io" target="__blank">songwang.io</a></span>

### Tech Stack
* [Gatsby.js](https://www.gatsbyjs.org/)
* [React.js](https://facebook.github.io/react/)
* [Redux](https://redux.js.org/)
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
│  └── theme              > Styled Components
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
MIT © [Song Wang](https://songwang.io)
