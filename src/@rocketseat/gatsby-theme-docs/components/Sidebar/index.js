import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
// import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';
import { sideBarData } from "../../../../config/sideBarData"

import {
    Container,
    // LogoContainer,
    List,
    Heading,
    Item,
    SubItem,
} from './styles';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';
import { Link } from "gatsby"
// import Logo from '../Logo';

function ListWithSubItems({ children, text, link }) {
    return (
        <>
            {/* <Heading><Link to={link} style={{"color": "black"}}>{text}</Link></Heading> */}
            <Heading>{text}</Heading>
            <SubItem>{children}</SubItem>
        </>
    );
}

function isExternalUrl(url) {
    return new RegExp('^((https?:)?//)', 'i').test(url);
}

export default function Sidebar({ isMenuOpen }) {
  //   const {
  //       site: {
  //           siteMetadata: { basePath },
  //       },
  //   } = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         basePath
  //       }
  //     }
  //   }
  // `);

    // const data = useSidebar();
    const data = sideBarData;
    // console.log(data)
    // console.log(sideBarData)

    function renderLink(link, label) {
        return isExternalUrl(link) ? (
            <ExternalLink link={link} label={label} />
        ) : (
            <InternalLink link={link} label={label} />
        );
    }

    return (
        <Container isMenuOpen={isMenuOpen}>
            {/*<LogoContainer>*/}
            {/*    <Link to="https://open-o11y.github.io/adot-site-gatsby/" aria-label="Go to home page">*/}
            {/*        <Logo aria-hidden="true" />*/}
            {/*    </Link>*/}
            {/*</LogoContainer>*/}
            <nav>
                <List>
                    {data.map(({ node: { label, link, items, id } }) => {
                        if (Array.isArray(items)) {
                            const subitems = items.map((item) => {
                                return (
                                    <Item key={item.link}>
                                        {renderLink(item.link, item.label)}
                                    </Item>
                                );
                            });

                            return (
                                <ListWithSubItems key={id} text={label} link={link}>
                                    {subitems}
                                </ListWithSubItems>
                            );
                        }

                        return <Item key={id}>{renderLink(link, label)}</Item>;
                    })}
                </List>
            </nav>
        </Container>
    );
}

ListWithSubItems.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.node,
    ]).isRequired,
    text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
};
