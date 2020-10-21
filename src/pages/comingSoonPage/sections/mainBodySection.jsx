import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import mainBodyStyle from "assets/jss/material-kit-react/views/comingSoonPageSections/mainBodyStyle.jsx"

class MainBodySection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>This Page is Coming Soon</h1>
              <p className={classes.about}>
                Sorry! This page is still currently undergoing development. Stay tuned!
              </p>
            </GridItem>
          </GridContainer>
        </div>
    )
  }
}

export default withStyles(mainBodyStyle)(MainBodySection)
