import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

class VideosSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <p>Unboxing AWS Distro for OpenTelemetry</p>
              <iframe width="500" height="281" src="https://www.youtube.com/embed/tnlJeb0rTkw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <p>AWS What's Next on Twitch</p>
              <iframe width="500" height="281" src="https://player.twitch.tv/?video=786737025&parent=aws-otel.github.io" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <p>Capturing Trace Data with the AWS Distro for OpenTelemetry</p>
              <iframe width="500" height="281" src="https://www.youtube.com/embed/837NtV0McOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <p>Instrumenting AWS Lambda with the AWS Distro for OpenTelemetry</p>
              <iframe width="500" height="281" src="https://youtu.be/Ty_AToJW5Fc?t=67" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </GridItem>
          </GridContainer>
        </div>
    )
  }
}

export default VideosSection
