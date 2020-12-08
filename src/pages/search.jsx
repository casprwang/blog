import React, { useState, useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import SearchFormContainer from 'theme/containers/SearchFormContainer';
import SearchResultContainer from 'theme/containers/SearchResultContainer';
import Layout from 'components/Layout';


// currying term with page node
const filterFunc = term => ({ node }) => (node.frontmatter.tags
  && node.frontmatter.tags.every(tag => tag.toLowerCase().includes(term.toLowerCase())))
  || node.frontmatter.title.toLowerCase().includes(term.toLowerCase())
  || node.excerpt.toLowerCase().includes(term.toLowerCase())
  || !term;


const handleEnter = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
};

const Search = ({ data }) => {
  const [term, setTerm] = useState('');
  const inputRef = useRef();
  const pages = data.allMarkdownRemark.edges;

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <Layout>
      <SearchFormContainer>
        <input
          type="text"
          placeholder="search here"
          onChange={e => setTerm(e.target.value)}
          onKeyDown={handleEnter}
          ref={inputRef}
        />
      </SearchFormContainer>
      <div>
        {pages
          .filter(filterFunc(term))
          .slice(0, 10)
          .map(({ node }) => (
            <SearchResultContainer key={node.id}>
              <h2>
                <Link to={node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>{node.excerpt}</p>
            </SearchResultContainer>
          ))
        }
      </div>
    </Layout>
  );
};

Search.defaultProps = {
  data: {
    allMarkdownRemark: {
      edges: [],
    },
  },
};


export default Search;

// eslint-disable-next-line
export const searchpageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: true } } }
    ) {
        edges {
          node {
            id
            excerpt
            timeToRead
            internal {
              content
          }
          headings {
            value
          }
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
