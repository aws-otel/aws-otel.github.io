import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from "@material-ui/core/styles/withStyles"
import downloadItemStyle from "../../assets/jss/material-kit-react/components/downloadItemStyle"

class DownloadItem extends React.Component {

  render() {

    const { classes, ...rest } = this.props

    return (
        <Card className={classes.root}>
          <div style={{height: "20px"}} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.version}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Release Date: {this.props.releaseDate}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              License: {this.props.license}
            </Typography>
            <div style={{height: "10px"}}/>

            <Button size="small" color="primary" style={{marginLeft: "-10px", display: "block"}}>
              <a href={this.props.releaseNotes} style={{textDecoration: "none", color: "#3f51b5"}} target="_blank">
                Release Notes
              </a>
            </Button>

            <Button size="small" color="primary" style={{marginLeft: "-10px", display: "block"}}>
              <a href={this.props.documentation} style={{textDecoration: "none", color: "#3f51b5"}} target="_blank">
                Documentation
              </a>
            </Button>

          </CardContent>
          <CardContent>
            <a href={this.props.dockerHub} style={{textDecoration: "none"}} target="_blank">
              <Button size="small" color="primary" variant="outlined" className={classes.button}>
                Download Now
              </Button>
            </a>
            {/*<a href={this.props.RPM} style={{textDecoration: "none"}} target="_blank">*/}
            {/*  <Button size="small" color="primary" variant="outlined" className={classes.button}>*/}
            {/*    RPM*/}
            {/*  </Button>*/}
            {/*</a>*/}
            {/*<a href={this.props.debian} style={{textDecoration: "none"}} target="_blank">*/}
            {/*  <Button size="small" color="primary" variant="outlined" className={classes.button}>*/}
            {/*    Debian*/}
            {/*  </Button>*/}
            {/*</a>*/}
            {/*<a href={this.props.tarball} style={{textDecoration: "none"}} target="_blank">*/}
            {/*  <Button size="small" color="primary" variant="outlined" className={classes.button}>*/}
            {/*    Tarball*/}
            {/*  </Button>*/}
            {/*</a>*/}
          </CardContent>
        </Card>
    )
  }
}

export default withStyles(downloadItemStyle)(DownloadItem)