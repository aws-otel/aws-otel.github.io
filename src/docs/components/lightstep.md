---
title: 'Connecting to Lightstep with the AWS Collector'
description:
    Lightstep's easy-to-use distributed tracing provides complete system visibility and context at scale.
path: '/docs/components/lightstep'
---

Lightstep supports OpenTelemetry natively, via OTLP. If you’re already set up
with OpenTelemetry on AWS, then getting data into Lightstep only requires an
edit to the YAML config file for the Collector.

## Requirements

To connect to Lightstep, you will need the following:

* A lightstep account. If you don't already have one, you can create a free
  account [here](https://app.lightstep.com/signup/developer?signup_source=awsdoc).
* An access token for your Lightstep project. This can be found in project settings (the gear icon in the sidebar).

## Collector Configuration

* Configure the Collector to export **OTLP**.
* Set the OTLP endpoint to point to Lightstep.
  * **Public endpoint:** ingest.lightstep.com:443
  * **Private satellites:** the address of your satellite load balancer.
* Add your Lightstep access token as an OTLP header.
  * **Header name:** "lightstep-access-token"

## Example

```yaml
# Lightstep collector configuration
exporters:
  otlp:
     # NOTE: if you are using private satellites, replace this public
     # endpoint with the address of your satellite load balancer.
    endpoint: ingest.lightstep.com:443
     # Your access token can be found in the project settings page
    headers: {"lightstep-access-token":"<YOUR_ACCESS_TOKEN>"}
```
