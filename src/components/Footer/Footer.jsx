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
        <div className={classes.col}>
          <h3>About</h3>
          <div> <Link to="/about" className={classes.link}> AWS Distro for OpenTelemetry </Link></div>
          {/*<div> <Link to="/coming-soon" className={classes.link}> Components </Link></div>*/}
          <div> <Link to="https://github.com/orgs/aws-observability/projects/4" target={"_blank"} className={classes.link} rel="noopener noreferrer"> Roadmap </Link></div>
          <div> <Link to="https://opentelemetry.io/" target={"_blank"} className={classes.link} rel="noopener noreferrer"> About OpenTelemetry </Link></div>
        </div>
        <div className={classes.col}>
          <h3>Community</h3>
          <div> <Link to="/get-involved" className={classes.link}> Get Involved </Link></div>
          <div> <Link to="/contributing" className={classes.link}> Contributing </Link></div>
          <div> <Link to="/contributors" className={classes.link}> Contributors </Link></div>
          <div> <Link to="/code-of-conduct" className={classes.link}> Code of Conduct </Link></div>
          <div> <Link to="https://gitter.im/aws-otel-distro/community" className={classes.link} target="_blank" rel="noopener noreferrer"> Gitter </Link></div>
          <div> <Link to="/blog" className={classes.link}> Blog Posts </Link></div>
          <div> <Link to="https://aws.amazon.com/otel/faqs/" className={classes.link} target="_blank" rel="noopener noreferrer"> FAQ </Link></div>
          <div> <Link to="/resources" className={classes.link} target="_blank" rel="noopener noreferrer"> Resources </Link></div>
        </div>
        <div className={classes.col}>
          <h3>Discover</h3>
          <div> <Link to="/docs/introduction" className={classes.link}> Documentation </Link></div>
          <div> <Link to="https://github.com/aws-observability" className={classes.link} target="_blank" rel="noopener noreferrer"> Code on GitHub </Link></div>
          <div> <Link to="/download" className={classes.link}> Download </Link></div>
        </div>
        <div className={classes.col}>
          <h3>Stay Connected</h3>
          <div> <Link to="https://twitter.com/awsopen" className={classes.link} target="_blank" rel="noopener noreferrer"> Twitter </Link></div>
          <div> <Link to="https://github.com/aws-observability/aws-otel-community" className={classes.link} target="_blank" rel="noopener noreferrer"> GitHub Community </Link></div>
          <div> <Link to="https://gitter.im/aws-otel-distro/community" className={classes.link} target="_blank" rel="noopener noreferrer"> Gitter </Link></div>
          {/*<div> <Link to="https://groups.io/g/aws-otel-distro-announce" className={classes.link} target="_blank"> Groups.io </Link></div>*/}
        </div>
        <div className={classes.col}>
          <h3>Other</h3>
          <div> <Link to="https://github.com/aws-observability/aws-otel-community/issues" className={classes.link} target="_blank" rel="noopener noreferrer"> Report a Bug </Link></div>
          <div> <Link to="https://github.com/aws-observability/aws-otel-community/issues" className={classes.link} target="_blank" rel="noopener noreferrer"> File an Issue </Link></div>
        </div>
      </section>
      <section className={classes.sectionBottom}>
        <div>© 2020–2021 Amazon Web Services, Inc. or its affiliates. All rights reserved.</div>
      </section>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
