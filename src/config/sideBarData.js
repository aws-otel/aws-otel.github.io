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
      label: "Downloads",
      items: null,
      link: "/download"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Performance Testing",
      items: null,
      link: "https://aws-observability.github.io/aws-otel-collector/benchmark/report"
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
        {label: "Java", link: "/docs/getting-started/java-sdk"},
        {label: "JavaScript", link: "/docs/getting-started/javascript-sdk"},
        {label: "Python", link: "/docs/getting-started/python-sdk"},
        {label: ".NET", link: "/docs/getting-started/dotnet-sdk"},
        {label: "EKS add-on", link: "/docs/getting-started/adot-eks-add-on"},
        {label: "Lambda", link: "/docs/getting-started/lambda"},
        {label: "Prometheus Configurations", link: "/docs/getting-started/advanced-prometheus-remote-write-configurations"},
        {label: "CloudWatch Container Insights", link: "/docs/getting-started/container-insights"},
        {label: "Android", link: "/docs/getting-started/android-sdk"},
        {label: "Swift", link: "/docs/getting-started/swift-sdk"},

      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "Setup",
      items: [
        {label: "ECS", link: "/docs/setup/ecs"},
        {label: "EC2", link: "/docs/setup/ec2"},
        {label: "EKS", link: "/docs/getting-started/adot-eks-add-on"},
        {label: "On-Premises", link: "/docs/setup/on-premises"},
      ],
      link: "/docs/null"
    }
  },
  {
    node: {
      id: nextId(),
      label: "ADOT Collector Components",
      items: [
        {label: "Confmap Providers", link: "/docs/components/confmap-providers"},
        {label: "ECS Container Metrics Receiver", link: "/docs/components/ecs-metrics-receiver"},
        {label: "Processors", link: "/docs/components/processors"},
      ],
      link: "/docs/null"
    }
  }
]
