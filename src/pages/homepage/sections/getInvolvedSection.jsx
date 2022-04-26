import React from "react";
import { Link } from 'gatsby'
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import getInvolvedStyle from "../../../assets/jss/material-kit-react/views/homePageSections/getInolvedStyle.jsx"
import YAMLData from "../../../content/SiteContent/home-page.yaml"

class GetInvolvedSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>{YAMLData.getInvolvedSection.heading}</h2>
              <p className={classes.description}> {YAMLData.getInvolvedSection.subtitle} </p>
            </GridItem>
          </GridContainer>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3} />
              <GridItem xs={12} sm={12} md={2} className={classes.gridItem}>
                <Link to="/get-involved" className={classes.linkStyle}>
                  <Button variant="outlined" color="primary" className={classes.buttonStyle}>
                    Join
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={12} md={2} className={classes.gridItem}>
                <Link to="/download" className={classes.linkStyle}>
                  <Button variant="outlined" color="primary" className={classes.buttonStyle}>
                    Download
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={12} md={3} />
            </GridContainer>
          </div>
        </div>
    );
  }
}

export default withStyles(getInvolvedStyle)(GetInvolvedSection);
