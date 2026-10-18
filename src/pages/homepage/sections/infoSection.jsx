import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "@material-ui/core/Button"
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
          <Button
              variant="outlined"
              color="primary"
              href={YAMLData.infoSection.learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
          >
            {YAMLData.infoSection.learnMoreText}
          </Button>
        </div>
    )
  }
}

export default withStyles(infoSectionStyle)(InfoSection)
