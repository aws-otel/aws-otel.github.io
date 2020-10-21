import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import mainBodyStyle from "assets/jss/material-kit-react/views/announcementsPageSections/mainBodyStyle.jsx";
import AnnouncementsItems from "./announcementsItems";

class MainBodySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Announcements</h1>
              <AnnouncementsItems />
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(mainBodyStyle)(MainBodySection);
