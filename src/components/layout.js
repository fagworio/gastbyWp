
import React from "react"
import MainMenu from "../components/MainMenu"
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
 
const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </>
)

export default Layout
