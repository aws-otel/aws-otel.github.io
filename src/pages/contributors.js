import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import ContributorsPage from "./contributorsPage/contributorsPage";
import {Helmet} from "react-helmet";

export default function Contributors() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Open Distro for OpenTelemetry</title>
      </Helmet>
      <ContributorsPage />
    </div>
  );
}