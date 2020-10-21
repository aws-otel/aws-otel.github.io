import React from 'react';
import { Link } from "gatsby"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import blogWidgetStyle from "../../assets/jss/material-kit-react/components/blogWidgetStyle";

class BlogWidget extends React.Component {

  render() {

    const { classes, ...rest } = this.props;

    return (
        <Card className={classes.root}>
          <CardActionArea>
            <div style={{height: "20px"}} />
            <CardContent>
              <Link to={this.props.link} style={{textDecoration: "none"}} target="_blank">
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                  {this.props.author}, {this.props.date}
                </Typography>
                <div style={{height: "20px"}} />
                <Typography variant="body1" color="textSecondary" component="p">
                  {this.props.body}
                </Typography>
              </Link>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={this.props.link} style={{textDecoration: "none"}} target="_blank">
              <Button size="small" color="primary">
                Read More
              </Button>
            </Link>
          </CardActions>
        </Card>
    );
  }
}

export default withStyles(blogWidgetStyle)(BlogWidget);