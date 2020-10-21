import React from "react"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import HomePage from "./homepage/homepage";

export default function Home() {
    return (
        <HomePage
            title="AWS Distro for OpenTelemetry"
            subtitle="Secure, production-ready open source distribution with predictable performance"
        />
    );
}