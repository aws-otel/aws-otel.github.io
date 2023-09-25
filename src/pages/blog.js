import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import BlogPage from "./blog/blogPage";
import {Helmet} from "react-helmet";

export default function ComingSoon() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AWS Distro for OpenTelemetry</title>
      </Helmet>
      <BlogPage />
    </div>
  );
}