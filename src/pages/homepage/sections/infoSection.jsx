import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import TipBox from "components/TipBox/TipBox.jsx"
import infoSectionStyle from "assets/jss/material-kit-react/views/homePageSections/infoStyle.jsx"
import YAMLData from "../../../content/SiteContent/home-page.yaml"

class InfoSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>{YAMLData.infoSection.heading}</h2>
              <p className={classes.description}> {YAMLData.infoSection.introduction} </p>
            </GridItem>
          </GridContainer>
          <div style={{textAlign: "left"}}>
            <TipBox
                textContent={YAMLData.infoSection.callout}
                buttonText={YAMLData.infoSection.learnMoreText}
                hyperlink={YAMLData.infoSection.learnMoreLink}
            />
          </div>
        </div>
    )
  }
}

export default withStyles(infoSectionStyle)(InfoSection)
