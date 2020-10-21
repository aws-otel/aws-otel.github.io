import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import mainBodyStyle from "assets/jss/material-kit-react/views/blogPageSections/mainBodyStyle.jsx"
import BlogItems from "./blogItems"

class MainBodySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Blog Posts</h1>
              <BlogItems />
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(mainBodyStyle)(MainBodySection);
