import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import mainBodyStyle from "assets/jss/material-kit-react/views/aboutPageSections/mainBodySection.jsx"
import { MDXRenderer } from "gatsby-plugin-mdx"

class blogMainBodySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
      <div style={{height: "120px"}} />
      <GridItem xs={12} sm={12} md={10} style={{textAlign: "left"}}>
        <div style={{height: "20px"}} />
        <ul>
          <MDXRenderer>{this.props.mdxData.body}</MDXRenderer> 
        </ul>
        <div style={{height: "20px"}} />
      </GridItem>
    </GridContainer>
    );
  }
}

export default withStyles(mainBodyStyle)(blogMainBodySection);
