import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import useWindowScroll from 'react-use/lib/useWindowScroll';
import useWindowSize from 'react-use/lib/useWindowSize';

// import slug from '../../../util/slug';

import { Wrapper, Container } from './styles';

function slug(string) {
  return string
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s/g, '-') // Replace each space with -
    .replace(
      /[^\w\-\u00b4\u00C0-\u00C3\u00c7\u00C9-\u00CA\u00CD\u00D3-\u00D5\u00DA\u00E0-\u00E3\u00E7\u00E9-\u00EA\u00ED\u00F3-\u00F5\u00FA]+/g,
      '',
    ); // Removes all chars that aren't words, -, ´ or some latin characters (À Á Â Ã Ç É Ê Í Ó Ô Õ Ú à á â ã ç é ê í ó ô õ ú)
}

export default function TableOfContents({ headings, disableTOC, contentRef }) {
  const { y } = useWindowScroll();
  const theme = useTheme();
  const { width, height } = useWindowSize();
  const [offsets, setOffsets] = useState([]);

  const isMobile = width <= 1200;

  useEffect(() => {
    if (!isMobile || disableTOC) {
      const allHeadings = contentRef.current?.querySelectorAll(`h2, h3`);

      setOffsets(
        allHeadings &&
          Array.from(allHeadings)
            .map((heading) => {
              const anchor = heading.querySelector(`a`);
              if (!anchor) return {};

              return {
                id: heading.id,
                offset: heading.offsetTop + anchor.offsetTop,
              };
            })
            .filter(Boolean),
      );
    }
  }, [width, height, contentRef, isMobile, disableTOC]);

  const activeHeading = useMemo(() => {
    if (!isMobile || disableTOC) {
      const windowOffset = height / 2;
      const scrollTop = y + windowOffset;

      if (offsets) {
        for (let i = offsets.length - 1; i >= 0; i -= 1) {
          const { id, offset } = offsets[i];
          if (scrollTop >= offset) {
            return id;
          }
        }
      }
    }
  }, [offsets, height, y, isMobile, disableTOC]);

  if (!disableTOC) {
    return (
      <Wrapper>
        <Container>
          <h2>On this page</h2>
          <nav>
            <ul>
              {headings
                .filter((heading) => heading.depth === 2 || heading.depth === 3)
                .map((heading) => {
                  const headingSlug = slug(heading.value);

                  return (
                    <li
                      key={heading.value}
                      style={{
                        marginLeft: heading.depth === 3 ? `8px` : null,
                      }}
                    >
                      <a
                        href={`#${headingSlug}`}
                        style={{
                          color:
                            activeHeading === headingSlug
                              ? theme.colors.primary
                              : theme.colors.text,
                        }}
                      >
                        {heading.value}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </Container>
      </Wrapper>
    );
  }

  return <Wrapper />;
}

TableOfContents.propTypes = {
  headings: PropTypes.array,
  disableTOC: PropTypes.bool.isRequired,
  contentRef: PropTypes.shape({ current: PropTypes.object }),
};

TableOfContents.defaultProps = {
  headings: null,
};
