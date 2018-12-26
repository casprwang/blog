import React from 'react'
import Header from "components/Header"
import Layout from 'components/layout'
import SEO from 'components/seo'

export default () =>
  <Layout>
    <SEO title="404: Not Found" />
    <Header title="Page not found" subtitle="Try to be smarter next time" />
  </Layout>