import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const PortfolioItemsWrapper = styled.div`
  display:flex;
  justify-content: center;
`
const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  margin: 16px;
`
const PortfolioImage = styled.img`
  max-width: 100%;
`


const PortfolioItems = () => {
  return (
    <StaticQuery query={graphql`
    {
      portfolioItems: allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            content
            excerpt
            slug
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `} render={props => (
    <PortfolioItemsWrapper>
      {props.portfolioItems.edges.map(item => (
        <PortfolioItem key={item.node.id}>
        <h2>{item.node.title}</h2>
      <PortfolioImage src={item.node.featured_media.source_url} 
            alt={item.node.title}
            title={item.node.title} />
        <div dangerouslySetInnerHTML={{__html: item.node.excerpt}} />
        <Link to={`/portfolio/${item.node.slug}`} >
          Read More
        </Link>
      </PortfolioItem>
      ))}
    </PortfolioItemsWrapper> )} />
  )
}

export default PortfolioItems