import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Search from "./search"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <div style={{padding: "70px 0", textAlign: "center"}}>
        <Search searchIndex={data.siteSearchIndex.index} />
      </div>
    )}
  />
)

export default Header