import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import mainBodyStyle from "assets/jss/material-kit-react/views/getInvolvedPageSections/mainBodyStyle.jsx"
import YAMLData from "../../../content/SiteContent/get-involved.yaml"

class MainBodySection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>Get Involved</h1>
            </GridItem>
            <div style={{height: "120px"}} />
            <GridItem xs={12} sm={12} md={10} style={{textAlign: "left"}}>
              <p className={classes.about}> {YAMLData.paragraph1} </p>
              <p className={classes.about}> {YAMLData.paragraph2} </p>
              <p className={classes.about}> {YAMLData.paragraph3} </p>
              <ul>
                {YAMLData.list.map((data, index) => {
                  return <li key={`content_item_${index}`}>{data.item}</li>
                })}
              </ul>
              <p className={classes.about}>
                If you want to get in touch, contact us at: <span style={{fontWeight: "bold"}}>aws-distro-for-opentelemetry@amazon.com</span>
              </p>
              <h2 className={classes.about}> Additional Links </h2>
              <ul>
                <li><a href="https://gitter.im/aws-otel-distro/community" target="_blank"> Gitter </a></li>
                <li><a href="https://github.com/aws-observability/aws-otel-community/issues" target="_blank"> File an Issue </a></li>
                <li><a href="https://github.com/aws-observability/aws-otel-community/issues" target="_blank"> File a Pull Request </a></li>
                <li><a href="https://opentelemetry.io/community/" target="_blank"> OpenTelemetry Community </a></li>
                <li><a href="https://calendar.google.com/calendar/u/0/embed?src=google.com_b79e3e90j7bbsa2n2p5an5lf60@group.calendar.google.com" target="_blank"> OpenTelemetry SIG Meeting Calender </a></li>
              </ul>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(mainBodyStyle)(MainBodySection);
