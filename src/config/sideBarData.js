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
        {label: "Java SDK", link: "/docs/getting-started/java-sdk"},
        {label: "JavaScript SDK", link: "/docs/getting-started/javascript-sdk"},
        {label: "Python SDK", link: "/docs/getting-started/python-sdk"},
        {label: "Using AWS X-Ray Tracing", link: "/docs/getting-started/aws-xray"},
        {label: "Using CloudWatch Metrics", link: "/docs/getting-started/cloudwatch-metrics"},
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
        {label: "For ECS", link: "/docs/setup/ecs"},
        {label: "For EC2", link: "/docs/setup/ec2"},
        {label: "For EKS", link: "/docs/setup/eks"},
        {label: "On-Premises", link: "/docs/setup/on-premises"},
        {label: "Build Collector on MS-Windows", link: "/docs/setup/build-collector-on-windows"},
        {label: "Build Collector as RPM", link: "/docs/setup/build-collector-as-rpm"},
        {label: "Build Collector as Debian", link: "/docs/setup/build-collector-as-debian"},
        {label: "Python Lambda", link: "/docs/setup/lambda"}
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Components",
      items: [
        {label: "ECS Container Metrics Receiver", link: "/docs/components/ecs-metrics-receiver"},
        {label: "X-Ray Receiver", link: "/docs/components/x-ray-receiver"},
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