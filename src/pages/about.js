import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import AboutPage from "./aboutPage/aboutPage";
import {Helmet} from "react-helmet";

export default function ComingSoon() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Open Distro for OpenTelemetry</title>
      </Helmet>
      <AboutPage />
    </div>
  );
}