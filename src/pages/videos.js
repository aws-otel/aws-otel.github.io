import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import VideosPage from './videosPage/videospage.jsx'
import {Helmet} from "react-helmet";

export default function Videos() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Open Distro for OpenTelemetry</title>
      </Helmet>
      <VideosPage />
    </div>
  );
}