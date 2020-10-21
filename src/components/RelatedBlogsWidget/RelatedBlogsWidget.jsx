import React from 'react'
import { Link } from "gatsby"
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import withStyles from "@material-ui/core/styles/withStyles"
import RelatedBlogsWidgetStyle from "../../assets/jss/material-kit-react/components/relatedBlogsWidgetStyle.jsx"

class RelatedBlogsWidget extends React.Component {

  render() {

    const { classes } = this.props

    return (
        <Card className={classes.root} >
          <CardActionArea style={{minHeight: "150px"}}>
            <Link to={this.props.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
              <CardContent style={{padding: "40px 50px"}}>
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
                  {this.props.title}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
    )
  }
}

export default withStyles(RelatedBlogsWidgetStyle)(RelatedBlogsWidget)