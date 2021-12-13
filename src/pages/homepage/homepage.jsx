import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import homepageStyle from "assets/jss/material-kit-react/views/homePage.jsx"
import InfoSection from "./sections/infoSection"
import GetInvolvedSection from "./sections/getInvolvedSection"
import WhatsNewSection from "./sections/whatsNewSection"
import HowItWorksSection from "./sections/howItWorksSection"
import {Link} from "gatsby";
import BackgroundImage from "assets/img/himalia_bg.jpg";

class HomePage extends React.Component {

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.coloredBackground}>
                <Header
                    brand={require("assets/img/himalia-logo.png")}
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 100,
                        color: "dark"
                    }}
                    {...rest}
                />
              <Parallax image={BackgroundImage}>
                <div className={classes.container}>
                  <GridContainer>
                    <GridItem>
                      <h1 className={classes.title} style={{color: "white"}}>{this.props.title}</h1>
                      <h4 style={{color: "white"}}>
                        {this.props.subtitle}
                      </h4>
                      <br />
                      <Link to="/download" style={{textDecoration: "none"}}>
                        <Button
                            color="primary"
                            size="lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "black"}}
                        >
                          Download Now
                        </Button>
                      </Link>
                    </GridItem>
                  </GridContainer>
                </div>
              </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                      <div style={{height: "40px"}} />
                      <InfoSection />
                      <HowItWorksSection />
                      <WhatsNewSection />
                      <GetInvolvedSection />
                      <div style={{height: "80px"}} />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default withStyles(homepageStyle)(HomePage);
