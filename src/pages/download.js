import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import DownloadPage from "./downloadPage/downloadPage";
import {Helmet} from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Open Distro for OpenTelemetry</title>
      </Helmet>
      <DownloadPage />
    </div>
  );
}