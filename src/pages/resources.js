import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0"
import 'typeface-roboto'
import 'typeface-roboto-slab'
import ResourcesPage from "./resourcesPage/resourcesPage"
import {Helmet} from "react-helmet";

export default function Resources() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Open Distro for OpenTelemetry</title>
      </Helmet>
      <ResourcesPage />
    </div>
  );
}