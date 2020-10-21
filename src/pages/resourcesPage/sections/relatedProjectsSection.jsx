import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import RelatedProjectsSectionStyle from "assets/jss/material-kit-react/views/resourcesPageSections/relatedProjectsStyle.jsx"
import ProjectWidget from "../../../components/ProjectWidget/ProjectWidget"
import YAMLData from "../../../content/SiteContent/resource-page.yaml"

class RelatedProjectsSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>Related Projects</h1>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            {YAMLData.projects.map((data, index) => {
              return (
                <GridItem xs={12} sm={12} md={4}>
                  <ProjectWidget
                      key={index}
                      title={data.title}
                      description={data.description}
                      link={data.link}
                  />
                </GridItem>
              )
            })}
          </GridContainer>
        </div>
    )
  }
}

export default withStyles(RelatedProjectsSectionStyle)(RelatedProjectsSection)
