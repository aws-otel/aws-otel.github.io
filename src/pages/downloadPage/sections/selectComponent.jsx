import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import {graphql, useStaticQuery} from "gatsby"
import selectComponentStyle from "../../../assets/jss/material-kit-react/views/downloadPageSections/selectComponentStyle"

const SelectComponent = (props) => {

  const { classes } = props
  const [version, setVersion] = React.useState('All Versions')

  const handleChange = (event) => {
    setVersion(event.target.value)
    props.handleVersionChangeFromParent(event.target.value)
  }

  const data = useStaticQuery(graphql`
    query {
      allDownloadsYaml {
        edges {
          node {
            version
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Version</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={version}
              onChange={handleChange}
          >
            <MenuItem value="All Versions">All Versions</MenuItem>
            {data.allDownloadsYaml.edges.map((obj, index) =>
                <MenuItem key={index} value={obj.node.version}>{obj.node.version}</MenuItem>
            )}
          </Select>
        </FormControl>
      </GridContainer>
    </div>
  )
}

export default withStyles(selectComponentStyle)(SelectComponent)