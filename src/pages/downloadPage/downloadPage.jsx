import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import DownloadPageStyle from "../../assets/jss/material-kit-react/views/downloadPage.jsx"
import DownloadItems from "./sections/downloadItems"
import SelectComponent from "./sections/selectComponent"

class DownloadPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      version: "All Downloads"
    };
  }

  handleVersionChange = (version) => {
    console.log(version)
    this.setState({ version: version })
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
        <div className={classes.coloredBackground}>
          <Header
              brand="LOGO"
              rightLinks={<HeaderLinks />}
              fixed
              color="transparent"
              changeColorOnScroll={{
                height: 50,
                color: "dark"
              }}
              {...rest}
          />
          <Parallax small image={require("assets/img/himalia_bg.jpg")}>
          </Parallax>

          <div className={classNames(classes.main, classes.mainRaised)} >
            <div className={classes.container}>
              <SelectComponent handleVersionChangeFromParent={this.handleVersionChange} />
              <DownloadItems version={this.state.version}/>
            </div>
          </div>

          <Footer />
        </div>
    );
  }
}

export default withStyles(DownloadPageStyle)(DownloadPage);
