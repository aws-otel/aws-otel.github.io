import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import ContributorsStyle from "../../../assets/jss/material-kit-react/views/contributorsPageSections/contributorsStyle"

const names = []
const allCollaborators = []

function addCollaborators(nodeArray){
  nodeArray.map(node => {
    if(node.name !== null && !names.includes(node.name)){
      names.push(node.name)
      allCollaborators.push({
        name: node.name,
        avatarUrl: node.avatarUrl
      })
    }
  })
}
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
              repo1 {
                collaborators {
                  nodes {
                    avatarUrl
                    name
                  }
                }
              }
              repo2 {
                collaborators {
                  nodes {
                    avatarUrl
                    name
                  }
                }
              }
              repo3 {
                collaborators {
                  nodes {
                    avatarUrl
                    name
                  }
                }
              }
              repo4 {
                collaborators {
                  nodes {
                    avatarUrl
                    name
                  }
                }
              }
              repo5 {
                collaborators {
                  nodes {
                    avatarUrl
                    name
                  }
                }
              }
              repo6 {
                collaborators {
                  nodes {
                    avatarUrl
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  addCollaborators(data.allGithubData.edges[0].node.data.repo1.collaborators.nodes)
  addCollaborators(data.allGithubData.edges[0].node.data.repo2.collaborators.nodes)
  addCollaborators(data.allGithubData.edges[0].node.data.repo3.collaborators.nodes)
  addCollaborators(data.allGithubData.edges[0].node.data.repo4.collaborators.nodes)
  addCollaborators(data.allGithubData.edges[0].node.data.repo5.collaborators.nodes)
  addCollaborators(data.allGithubData.edges[0].node.data.repo6.collaborators.nodes)

  return (
    <div className={classes.section} style={{textAlign: "left"}}>
      {/*<h2 className={classes.title}>Special thanks to all our contributors</h2>*/}
      <div style={{height: "70px"}} />
      {/*<div>*/}
      {/*  <GridContainer>*/}
      {/*    {allCollaborators.map((node, index) =>*/}
      {/*      <GridItem xs={12} sm={12} md={4}>*/}
      {/*        <Card plain>*/}
      {/*          <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>*/}
      {/*            <img src={node.avatarUrl} alt="..." className={imageClasses} />*/}
      {/*          </GridItem>*/}
      {/*          <h4 className={classes.cardTitle}>*/}
      {/*            {node.name}*/}
      {/*          </h4>*/}
      {/*        </Card>*/}
      {/*      </GridItem>*/}
      {/*    )}*/}
      {/*  </GridContainer>*/}
      {/*</div>*/}
      <div style={{marginLeft: "4vw"}}>
        <img src="https://contributors-img.web.app/image?repo=aws-observability/aws-otel-test-framework" />
        <img src="https://contributors-img.web.app/image?repo=aws-observability/aws-otel-playground" />
      </div>
    </div>
  )
}

Contributors.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(ContributorsStyle)(Contributors)