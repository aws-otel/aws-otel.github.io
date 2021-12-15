import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import GetInvolvedPageStyle from "assets/jss/material-kit-react/views/getInvolvedPage.jsx"
import MainBodySection from "./sections/mainBodySection.jsx"
import BackgroundImage from "assets/img/adot_bg.jpg"

class GetInvolvedPage extends React.Component {
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
          <Parallax small image={BackgroundImage}>
          </Parallax>

          <div className={classNames(classes.main, classes.mainRaised)} >
            <div className={classes.container}>
              <MainBodySection />
            </div>
          </div>

          <Footer />
        </div>
    );
  }
}

export default withStyles(GetInvolvedPageStyle)(GetInvolvedPage);
