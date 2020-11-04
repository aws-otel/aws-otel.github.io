import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import AnnouncementWidget from "../../../components/AnnouncementWidget/AnnouncementWidget";

const styles = {
};

const Announcements = (props) => {

  // const { classes } = props;
  const numAnnouncementsToShow = 3

  const data = useStaticQuery(graphql`
    query {
      allAnnouncementsYaml(limit: 3) {
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

  const newData = data.allAnnouncementsYaml.edges[0].node.announcements.slice(0, numAnnouncementsToShow)

  return (
      <div>
        {newData.map((announcement, index) =>
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

Announcements.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(Announcements)