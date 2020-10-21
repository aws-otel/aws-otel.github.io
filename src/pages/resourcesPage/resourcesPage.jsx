import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import ResourcesPageStyle from "assets/jss/material-kit-react/views/resourcesPage.jsx";
import RelatedProjectsSection from "./sections/relatedProjectsSection";
import RelatedBlogsSection from "./sections/relatedBlogsSection";

class ResourcesPage extends React.Component {
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
              <RelatedProjectsSection />
              <RelatedBlogsSection />
            </div>
          </div>

          <Footer />
        </div>
    );
  }
}

export default withStyles(ResourcesPageStyle)(ResourcesPage);
