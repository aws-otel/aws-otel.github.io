import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import whatsNewSectionStyle from "assets/jss/material-kit-react/views/homePageSections/whatsNewStyle.jsx";
import Announcements from "./announcements";
import BlogWidgets from "./blogWidgets";
import {Button} from "@material-ui/core";
import {Link} from "gatsby";

class WhatsNewSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>What's New</h2>
            </GridItem>
          </GridContainer>
          <div style={{height: "30px"}} />
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Link to="/announcements" className={classes.linkStyle}>
                  <Button variant="outlined" color="primary" className={classes.buttonStyle}> See all Announcements</Button>
                </Link>
                <h3> Latest Announcements </h3>
                <Announcements />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Link to="/blog" className={classes.linkStyle}>
                  <Button variant="outlined" color="primary" className={classes.buttonStyle}> See all Blog Posts</Button>
                </Link>
                <h3> Recent Blog Posts </h3>
                <BlogWidgets />
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

export default withStyles(whatsNewSectionStyle)(WhatsNewSection);
