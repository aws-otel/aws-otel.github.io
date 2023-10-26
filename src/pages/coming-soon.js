import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import ComingSoonPage from './comingSoonPage/comingSoonPage'
import {Helmet} from "react-helmet";

export default function ComingSoon() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Distro for OpenTelemetry</title>
      </Helmet>
      <ComingSoonPage />
    </div>
  );
}