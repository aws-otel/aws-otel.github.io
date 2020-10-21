import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import PersonIcon from '@material-ui/icons/Person'
import CodeIcon from '@material-ui/icons/Code'
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import InfoArea from "components/InfoArea/InfoArea.jsx"
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
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                    title={YAMLData.infoSection.leftHeading}
                    description={YAMLData.infoSection.benefits}
                    icon={ThumbUpIcon}
                    iconColor="success"
                    vertical
                    link="https://aws.amazon.com/otel/"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                    title={YAMLData.infoSection.middleHeading}
                    description={YAMLData.infoSection.useCases}
                    icon={PersonIcon}
                    iconColor="black"
                    vertical
                    link="https://aws.amazon.com/otel/"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                    title={YAMLData.infoSection.rightHeading}
                    description={YAMLData.infoSection.openSource}
                    icon={CodeIcon}
                    iconColor="info"
                    vertical
                    link="https://opentelemetry.io/"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
    )
  }
}

export default withStyles(infoSectionStyle)(InfoSection)
