import React from 'react'
import { Link } from "gatsby"
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import withStyles from "@material-ui/core/styles/withStyles"
import ProjectWidgetStyle from "../../assets/jss/material-kit-react/components/projectWidgetStyle.jsx"

class ProjectWidget extends React.Component {

  render() {

    const { classes, ...rest } = this.props

    return (
        <Card className={classes.root} >
          <CardActionArea style={{minHeight: "320px"}}>
            <Link to={this.props.link} target="_blank" style={{textDecoration: "none"}}>
              <CardContent style={{padding: "40px 50px"}}>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  {this.props.description}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
    )
  }
}

export default withStyles(ProjectWidgetStyle)(ProjectWidget)