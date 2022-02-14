import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import withStyles from "@material-ui/core/styles/withStyles"
import BlogWidget from "../../../components/BlogWidget/BlogWidget"

const styles = {
};

const BlogWidgets = (props) => {

  // const { classes } = props;

  const data = useStaticQuery(graphql`
    query {
      allBlogPostsYaml {
        edges {
          node {
            blogs {
              title
              author
              date
              link
              body
            }
          }
        }
      }
    }
  `)

  return (
      <div>
        {data.allBlogPostsYaml.edges[0].node.blogs.map((blog, index) =>
            <BlogWidget
                key={index}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                body={blog.body}
                link={blog.link}
            />
        )}
      </div>
  )
}

BlogWidgets.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(BlogWidgets);