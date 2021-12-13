/* @jsx jsx */
import { useState, useRef } from 'react'
import { jsx, css } from '@emotion/react'
import PropTypes from 'prop-types'

import TableOfContents from '../Docs/TOC'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Overlay from '../Overlay'
import { Container, Main, Children } from './styles'

import MyHeader from "../../../../components/Header/Header.jsx"
import HeaderLinks from "../../../../components/Header/HeaderLinks.jsx"
import Footer from "../../../../components/Footer/Footer"

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
}) {
  const contentRef = useRef(null)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div style={{backgroundColor: "white"}}>
      <MyHeader
        brand={require("assets/img/himalia-logo.png")}
        rightLinks={<HeaderLinks />}
        color="dark"
      />
      <Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
      <Container>
        <Sidebar isMenuOpen={isMenuOpen} />
        <Main>
          <Header handleMenuOpen={handleMenuOpen} />
          {title && (
            <h1
              css={css`
                display: none;

                @media (max-width: 1200px) {
                  display: block;
                }
              `}
            >
              {title}
            </h1>
          )}
          <Children ref={contentRef}>
            {title && (
              <h1
                css={css`
                  @media (max-width: 1200px) {
                    display: none;
                  }
                `}
              >
                {title}
              </h1>
            )}
            {children}
          </Children>
          <TableOfContents
            headings={headings}
            disableTOC={disableTOC}
            contentRef={contentRef}
          />
        </Main>
      </Container>
      <div style={{height: "110px"}}/>
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: '',
  headings: null,
};
