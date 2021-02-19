import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import mainBodyStyle from "assets/jss/material-kit-react/views/codeOfConductPageSections/mainBodyStyle.jsx";
import YAMLData from "../../../content/SiteContent/code-of-conduct.yaml"

class MainBodySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>{YAMLData.pageConentTitle}</h1>
            </GridItem>
            <div style={{height: "120px"}} />
            <GridItem xs={12} sm={12} md={10} style={{textAlign: "left"}}>
              <p className={classes.about}> {YAMLData.pageIntro} </p>
              <h3 className={classes.about}> {YAMLData.sectionOneTitle} </h3>
              <ul>
                {YAMLData.sectionOneContent.map((data, index) => {
                  return <li key={`content_item_${index}`}><p className={classes.about}>{data.item}</p></li>
                })}
              </ul>
              <h3 className={classes.about}> {YAMLData.sectionTwoTitle} </h3>
              <p> {YAMLData.sectionTwoDescription} </p>
              <ul>
                {YAMLData.sectionTwoContent.map((data, index) => {
                  return <li key={`content_item_${index}`}><p className={classes.about}>{data.item}</p></li>
                })}
              </ul>
              <h3 className={classes.about}> {YAMLData.sectionThreeTitle} </h3>
              <p> {YAMLData.sectionThreeDescription} </p>
              <h3 className={classes.about}> {YAMLData.sectionFourTitle} </h3>
              <p> {YAMLData.sectionFourDescription} </p>
              <h3 className={classes.about}> Additional Links </h3>
              <ul>
                <li><a href="https://github.com/todogroup/opencodeofconduct/" target="_blank" rel="noopener noreferrer"> <p className={classes.about}>Template</p> </a></li>
                <li><a href="https://todogroup.org/" target="_blank" rel="noopener noreferrer"> <p className={classes.about}>TODO Group</p></a></li>
                <li><a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct/" target="_blank" rel="noopener noreferrer"> <p className={classes.about}>Contributor Covenant Version 1.4</p> </a></li>
              </ul>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(mainBodyStyle)(MainBodySection);
