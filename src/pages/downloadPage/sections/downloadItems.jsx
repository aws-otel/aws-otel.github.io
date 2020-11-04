import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import DownloadItem from "../../../components/DownloadItem/DownloadItem";
import downloadItemStyle from "../../../assets/jss/material-kit-react/views/downloadPageSections/downloadItems";

const DownloadItems = (props) => {

  const { classes } = props;

  const data = useStaticQuery(graphql`
    query {
      allDownloadsYaml {
        edges {
          node {
            version
            releaseDate
            license
            releaseNotesLink
            documentationLink
            downloadLink
          }
        }
      }
    }
  `)

  if(props.version === 'All Downloads'){
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            {data.allDownloadsYaml.edges.map((downloadItem, index) =>
                <DownloadItem key={index}
                    version={downloadItem.node.version}
                    releaseDate={downloadItem.node.releaseDate}
                    license={downloadItem.node.license}
                    releaseNotes={downloadItem.node.releaseNotesLink}
                    documentation={downloadItem.node.documentationLink}
                    downloadLink={downloadItem.node.downloadLink}
                    // dockerHub={downloadItem.node.dockerHubDownloadLink}
                    // RPM={downloadItem.node.RPMDownloadLink}
                    // debian={downloadItem.node.debianDownloadLink}
                    // tarball={downloadItem.node.tarballDownloadLink}
                />
            )}
          </GridItem>
        </GridContainer>
        <div style={{height: "100px"}} />
      </div>
    )
  }else{
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              {data.allDownloadsYaml.edges.map((downloadItem, index) => {
                if(downloadItem.node.version === props.version) {
                  return <DownloadItem key={index}
                                       version={downloadItem.node.version}
                                       releaseDate={downloadItem.node.releaseDate}
                                       license={downloadItem.node.license}
                                       releaseNotes={downloadItem.node.releaseNotesLink}
                                       documentation={downloadItem.node.documentationLink}
                                       downloadLink={downloadItem.node.downloadLink}
                                       // dockerHub={downloadItem.node.dockerHubDownloadLink}
                                       // RPM={downloadItem.node.RPMDownloadLink}
                                       // debian={downloadItem.node.debianDownloadLink}
                                       // tarball={downloadItem.node.tarballDownloadLink}
                  />
                }
              })}
            </GridItem>
          </GridContainer>
          <div style={{height: "100px"}} />
        </div>
    )
  }

}

DownloadItems.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(downloadItemStyle)(DownloadItems);