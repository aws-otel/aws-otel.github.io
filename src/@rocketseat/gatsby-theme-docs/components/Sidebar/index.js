import React from 'react';
import PropTypes from 'prop-types';
import { sideBarData } from "../../../../config/sideBarData"

import {
    Container,
    List,
    Heading,
    Item,
    SubItem,
} from './styles';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

function ListWithSubItems({ children, text }) {
    return (
        <>
            <Heading>{text}</Heading>
            <SubItem>{children}</SubItem>
        </>
    );
}

function isExternalUrl(url) {
    return new RegExp('^((https?:)?//)', 'i').test(url);
}

export default function Sidebar({ isMenuOpen }) {

    const data = sideBarData;

    function renderLink(link, label) {
        return isExternalUrl(link) ? (
            <ExternalLink link={link} label={label} />
        ) : (
            <InternalLink link={link} label={label} />
        );
    }

    return (
        <Container isMenuOpen={isMenuOpen}>
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
