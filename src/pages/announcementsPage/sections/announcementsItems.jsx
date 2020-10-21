import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import AnnouncementWidget from "../../../components/AnnouncementWidget/AnnouncementWidget";

const styles = {
};

const AnnouncementsItems = (props) => {

  const { classes } = props;

  const data = useStaticQuery(graphql`
    query {
      allAnnouncementsYaml {
        edges {
          node {
            announcements {
              title
              date
              blurb
              link
            }
          }
        }
      }
    }
  `)

  return (
      <div>
        {data.allAnnouncementsYaml.edges[0].node.announcements.map((announcement,index) =>
            <AnnouncementWidget
                key={index}
                title={announcement.title}
                date={announcement.date}
                blurb={announcement.blurb}
                link={announcement.link}
            />
        )}
      </div>
  )
}

AnnouncementsItems.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(AnnouncementsItems);