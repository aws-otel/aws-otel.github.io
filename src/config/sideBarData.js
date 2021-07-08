import nextId from "react-id-generator"

export const sideBarData = [
  {
    node: {
      id: nextId(),
      label: "Introduction",
      items: null,
      link: "/docs/introduction"
    }
  },
  // {
  //   node: {
  //     id: nextId(),
  //     label: "Version History",
  //     items: null,
  //     link: "/docs/version-history"
  //   }
  // },
  {
    node: {
      id: nextId(),
      label: "Releases",
      items: null,
      link: "/docs/releases"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Downloads",
      items: null,
      link: "/download"
    }
  },
  // {
  //   node: {
  //     id: nextId(),
  //     label: "Compatibility",
  //     items: null,
  //     link: "/docs/compatibility"
  //   }
  // },
  {
    node: {
      id: nextId(),
      label: "Getting started",
      items: [
        {label: "Collector", link: "/docs/getting-started/collector"},
        {label: "Go", link: "/docs/getting-started/go-sdk"},
        {label: "Java", link: "/docs/getting-started/java-sdk"},
        {label: "JavaScript", link: "/docs/getting-started/javascript-sdk"},
        {label: "Python", link: "/docs/getting-started/python-sdk"},
        {label: ".NET", link: "/docs/getting-started/dotnet-sdk"},
        {label: "Lambda", link: "/docs/getting-started/lambda"},
        {label: "Prometheus (AMP)", link: "/docs/getting-started/prometheus-remote-write-exporter"},
        {label: "Prometheus Configurations", link: "/docs/getting-started/advanced-prometheus-remote-write-configurations"},
        {label: "CloudWatch Metrics", link: "/docs/getting-started/cloudwatch-metrics"},
        {label: "CloudWatch Container Insights", link: "/docs/getting-started/container-insights"},
        {label: "X-Ray", link: "/docs/getting-started/x-ray"},
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Setup",
      items: [
        {label: "Permissions", link: "/docs/setup/permissions"},
        {label: "Docker Images", link: "/docs/setup/docker-images"},
        {label: "ECS", link: "/docs/setup/ecs"},
        {label: "EC2", link: "/docs/setup/ec2"},
        {label: "EKS", link: "/docs/setup/eks"},
        {label: "On-Premises", link: "/docs/setup/on-premises"},
        {label: "Debian", link: "/docs/setup/build-collector-as-debian"},
        {label: "RPM", link: "/docs/setup/build-collector-as-rpm"},
        {label: "MS-Windows", link: "/docs/setup/build-collector-on-windows"},
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Components",
      items: [
        {label: "OTLP Exporters", link: "/docs/components/otlp-exporter"},
        {label: "Prometheus Exporters", link: "/docs/components/prometheus-exporters"},
        {label: "CloudWatch EMF Exporter", link: "/docs/getting-started/cloudwatch-metrics#cloudwatch-emf-exporter-awsemf"},
        {label: "X-Ray Exporter", link: "/docs/getting-started/x-ray#configuring-the-aws-x-ray-exporter"},
        {label: "Logging Exporter", link: "/docs/components/misc-exporters#logging-exporter"},
        {label: "File Exporter", link: "/docs/components/misc-exporters#file-exporter"},
        {label: "ECS Container Metrics Receiver", link: "/docs/components/ecs-metrics-receiver"},
        {label: "X-Ray Receiver", link: "/docs/components/x-ray-receiver"},
        {label: "StatsD Receiver", link: "/docs/components/statsd-receiver"},
        {label: "Jaeger Receiver", link: "/docs/components/jaeger-zipkin-receiver#jaeger-receiver"},
        {label: "Zipkin Receiver", link: "/docs/components/jaeger-zipkin-receiver#zipkin-receiver"},
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Partners",
      items: [
        {label: "Datadog", link: "/docs/partners/datadog"},
        {label: "Dynatrace", link: "/docs/partners/dynatrace"},
        {label: "New Relic", link: "/docs/partners/new-relic"},
        {label: "Splunk", link: "/docs/partners/splunk"},
        {label: "Logz.io", link: "/docs/partners/logzio"},
     ],
     link: "/docs/null"
   }
 },
  {
    node: {
      id: nextId(),
      label: "Know Your Data",
      items: [
        {label: "Traces", link: "https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/overview.md"},
        {label: "Metrics", link: "https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/overview.md"}
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Other",
      items: [
        {label: "FAQ", link: "https://aws.amazon.com/otel/faqs/"},
        {label: "Glossary", link: "https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/glossary.md"},
        {label: "Resources", link: "/resources"},
      ],
      link: "/docs/null"
    }
  }
]
