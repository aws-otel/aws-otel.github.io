import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import howItWorksStyle from "../../../assets/jss/material-kit-react/views/homePageSections/howItWorksStyle.jsx"
import diagram from "../../../assets/img/product-diagram.png"

class HowItWorksSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>How it Works</h2>
            </GridItem>
            <div style={{height: "100px"}} />
            <GridItem xs={12} sm={12} md={12}>
              <img src={diagram} alt="Logo"/>
            </GridItem>
          </GridContainer>
        </div>
    )
  }
}

export default withStyles(howItWorksStyle)(HowItWorksSection)
