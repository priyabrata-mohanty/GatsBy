import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default function queryTester({ data }) {
  console.log(data);
  return (
    <Layout>
      <h3>This page is quering all the pages created and its corresponding path </h3>
      <table>
        <thead>
          <tr>
            <th>
              page id
          </th>
            <th>
              page path
          </th>
          </tr>
        </thead>
        <tbody>
          {data.allSitePage.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.id}</td>
              <td>{node.path}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>

  )
}

export const query = graphql`
query {
  allSitePage {
    edges {
      node {
        id
        path
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}`