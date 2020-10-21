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
        <div style={{margin: "50px 0"}}>
          <CardActionArea>
            <Card className={classes.root} >
                <Link to={this.props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                  <CardContent style={{padding: "40px 50px"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.props.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                      {this.props.description}
                    </Typography>
                  </CardContent>
                </Link>
            </Card>
          </CardActionArea>
        </div>
    )
  }
}

export default withStyles(ProjectWidgetStyle)(ProjectWidget)