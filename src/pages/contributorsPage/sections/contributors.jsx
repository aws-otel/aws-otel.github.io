import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import ContributorsStyle from "../../../assets/jss/material-kit-react/views/contributorsPageSections/contributorsStyle"

const Contributors = (props) => {

  const { classes } = props
  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
  )

  const data = useStaticQuery(graphql`
    query {
      allGithubData {
        edges {
          node {
            data {
              organization {
                membersWithRole {
                  edges {
                    node {
                      name
                      avatarUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Special thanks to all our contributors</h2>
      <div style={{height: "70px"}} />

      <div>
        <GridContainer>
          {data.allGithubData.edges[0].node.data.organization.membersWithRole.edges.map((obj, index) =>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={obj.node.avatarUrl} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {obj.node.name}
                  </h4>
                </Card>
              </GridItem>
          )}
        </GridContainer>
      </div>
    </div>
  )
}

Contributors.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(ContributorsStyle)(Contributors)