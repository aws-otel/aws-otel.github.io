import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import RelatedBlogsSectionStyle from "assets/jss/material-kit-react/views/resourcesPageSections/relatedBlogsStyle.jsx"
import RelatedBlogsWidget from "../../../components/RelatedBlogsWidget/RelatedBlogsWidget"
import YAMLData from "../../../content/SiteContent/resource-page.yaml"

class RelatedBlogsSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>Related Blogs</h1>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            {YAMLData.blogs.map((data, index) => {
              return (
                  <GridItem xs={12} sm={12} md={4}>
                    <RelatedBlogsWidget
                        key={index}
                        title={data.title}
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

export default withStyles(RelatedBlogsSectionStyle)(RelatedBlogsSection)
