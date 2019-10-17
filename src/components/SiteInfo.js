import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: auto 0;
`
const SiteTitle = styled.div`
font-weight: bold;
`

const SiteInfo = () =>  (
  <StaticQuery query={graphql`
  {
    metadata: allWordpressSiteMetadata {
      edges {
        node {
          name
          description
        }
      }
    }
  }
  `} render={ props => (
    <SiteInfoWrapper>
      <SiteTitle>
        { props.metadata.edges[0].node.name }
      </SiteTitle>
      <div>
        { props.metadata.edges[0].node.description }
      </div>
    </SiteInfoWrapper>
  )} />
    
  )

export default SiteInfo
