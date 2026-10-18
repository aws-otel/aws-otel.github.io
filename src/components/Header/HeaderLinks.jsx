/*eslint-disable*/
import React from "react"
import { Link } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { CloudDownload } from "@material-ui/icons"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import DescriptionIcon from '@material-ui/icons/Description'
import CodeIcon from '@material-ui/icons/Code'
import HomeIcon from '@material-ui/icons/Home'
import Button from "components/CustomButtons/Button.jsx"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.buttonLink}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <HomeIcon className={classes.icons} /> Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/blog" className={classes.buttonLink}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <LibraryBooksIcon className={classes.icons} /> Blog
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/docs/introduction" className={classes.buttonLink}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <DescriptionIcon className={classes.icons} /> Documentation
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="https://github.com/aws-observability" className={classes.buttonLink} target="_blank" rel="noopener noreferrer">
          <Button
            href=""
            color="transparent"
            className={classes.navLink}
          >
            <CodeIcon className={classes.icons} /> Code on GitHub
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/download" className={classes.buttonLink}>
          <Button
            href=""
            color="primary"
            style={{color: "black"}}
          >
            <CloudDownload className={classes.icons} /> Download
          </Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
