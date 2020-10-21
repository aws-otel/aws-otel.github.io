import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import mainBodyStyle from "assets/jss/material-kit-react/views/contributingPageSections/mainBodyStyle.jsx"
import YAMLData from "../../../content/SiteContent/contributing.yaml"

class MainBodySection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>{YAMLData.title}</h1>
            </GridItem>
            <div style={{height: "120px"}} />
            <GridItem xs={12} sm={12} md={10} style={{textAlign: "left"}}>
              <p className={classes.about}> {YAMLData.paragraph1} </p>
              <p className={classes.about}> {YAMLData.paragraph2} </p>
              <p className={classes.about}> {YAMLData.paragraph3} </p>
            </GridItem>
          </GridContainer>
        </div>
    )
  }
}

export default withStyles(mainBodyStyle)(MainBodySection)
