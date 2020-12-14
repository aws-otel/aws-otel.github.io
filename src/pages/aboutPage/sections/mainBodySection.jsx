import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import mainBodyStyle from "assets/jss/material-kit-react/views/aboutPageSections/mainBodySection.jsx"
import YAMLData from "../../../content/SiteContent/about-page.yaml"

class MainBodySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>{YAMLData.title}</h1>
            </GridItem>
            <div style={{height: "120px"}} />
            <GridItem xs={12} sm={12} md={10} style={{textAlign: "left"}}>
              <p className={classes.about}> {YAMLData.intro} </p>
              <div style={{height: "20px"}} />
              <p className={classes.about}> With AWS Distro for OpenTelemetry, you can: </p>
              <ul>
                {YAMLData.features.map((data, index) => {
                  return <li key={`content_item_${index}`}><p className={classes.about}>{data.item}</p></li>
                })}
              </ul>
              <div style={{height: "20px"}} />
              <p className={classes.about}> {YAMLData.blurb} </p>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(mainBodyStyle)(MainBodySection);
