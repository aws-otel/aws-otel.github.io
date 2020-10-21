import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import Input from '@material-ui/core/Input'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActionArea from '@material-ui/core/CardActionArea'

const styles = {
  inputStyle: {
    width: "100%",
    background: "white",
    position: "relative",
    padding: "0 1.6rem",
    height: "3.2rem",
    fontSize: "1.8rem",
  },
  linkStyle: {
    textDecoration: "none",
    paddingLeft: "5px",
    color: "#425CC7",
    "&:hover": {
      color: "red"
    },
  },
  root: {
    textAlign: "left",
    margin: "10px 0",
    borderStyle: "none",
    boxShadow: "none",
  },
}

const baseUrl = 'https://aws-otel.github.io'

// Search component
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {

    return (
      <div>
        <Input type="text" placeholder="Search this site..." value={this.state.query} onChange={this.search} style={styles.inputStyle}/>

        <div style={{height: "30px"}} />

        {this.state.results.map(page => (
          <Card style={styles.root} key={page.id}>

            <CardActionArea>
              <Link to={page.path} style={{textDecoration: "none"}}>
                <CardContent style={{padding: "35px 25px"}}>

                  <Typography gutterBottom variant="h5" component="h2" style={{color: "#3257ec"}}>
                    {page.title}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" component="p">
                    {baseUrl}{page.path}
                  </Typography>
                  <div style={{height: "20px"}} />
                  <Typography variant="body1" color="textSecondary" component="p">
                    {page.description}
                  </Typography>

                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}

      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
    console.log(this.state.results)
  }
}

export default Search;