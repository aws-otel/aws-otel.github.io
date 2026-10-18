/*eslint-disable*/
import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <section className={classes.sectionTop}>
        <Link to="https://aws.amazon.com/otel/faqs/" className={classes.link} target="_blank" rel="noopener noreferrer"> FAQ </Link>
        <Link to="https://github.com/aws-observability/aws-otel-community/issues" className={classes.link} target="_blank" rel="noopener noreferrer"> Report an Issue </Link>
        <Link to="https://twitter.com/awsopen" className={classes.link} target="_blank" rel="noopener noreferrer"> Twitter </Link>
      </section>
      <section className={classes.sectionBottom}>
        <div>© 2020–2026 Amazon Web Services, Inc. or its affiliates. All rights reserved.</div>
      </section>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
