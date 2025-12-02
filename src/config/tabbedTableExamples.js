// Example configurations showing the flexibility of TabbedTable component

// Example 1: AWS Services Pricing (3+ columns)
export const awsServicesConfig = {
  defaultTab: "compute",
  tabs: {
    compute: {
      label: 'Compute Services',
      data: [
        { service: 'EC2 t3.micro', region: 'us-east-1', price: '$0.0104/hour', features: 'General Purpose' },
        { service: 'EC2 t3.small', region: 'us-east-1', price: '$0.0208/hour', features: 'General Purpose' },
        { service: 'Lambda', region: 'us-east-1', price: '$0.20/1M requests', features: 'Serverless' },
        { service: 'Fargate', region: 'us-east-1', price: '$0.04048/vCPU/hour', features: 'Container' }
      ]
    },
    storage: {
      label: 'Storage Services',
      data: [
        { service: 'S3 Standard', region: 'us-east-1', price: '$0.023/GB/month', features: 'Object Storage' },
        { service: 'EBS gp3', region: 'us-east-1', price: '$0.08/GB/month', features: 'Block Storage' },
        { service: 'EFS Standard', region: 'us-east-1', price: '$0.30/GB/month', features: 'File Storage' }
      ]
    }
  },
  columns: [
    { key: 'service', label: 'Service', isBold: true },
    { key: 'region', label: 'Region' },
    { key: 'price', label: 'Price', isCode: true },
    { key: 'features', label: 'Features' }
  ]
};

// Example 2: Software Versions with Links (custom rendering)
export const softwareVersionsConfig = {
  defaultTab: "production",
  tabs: {
    production: {
      label: 'Production',
      data: [
        { name: 'Node.js', version: '18.17.0', status: 'stable', docs: 'https://nodejs.org/docs/' },
        { name: 'React', version: '18.2.0', status: 'stable', docs: 'https://react.dev/' },
        { name: 'Next.js', version: '13.4.7', status: 'stable', docs: 'https://nextjs.org/docs' }
      ]
    },
    staging: {
      label: 'Staging',
      data: [
        { name: 'Node.js', version: '20.5.0', status: 'testing', docs: 'https://nodejs.org/docs/' },
        { name: 'React', version: '18.3.0-beta', status: 'testing', docs: 'https://react.dev/' },
        { name: 'Next.js', version: '14.0.0-canary', status: 'testing', docs: 'https://nextjs.org/docs' }
      ]
    }
  },
  columns: [
    { key: 'name', label: 'Software', isBold: true },
    {
      key: 'version',
      label: 'Version',
      isCode: true,
      style: { fontWeight: 'bold' }
    },
    {
      key: 'status',
      label: 'Status',
      style: (value) => ({
        color: value === 'stable' ? '#28a745' : '#ffc107',
        fontWeight: 'bold'
      })
    },
    {
      key: 'docs',
      label: 'Documentation',
      isLink: true,
      href: (value) => value,
      render: () => 'View Docs'
    }
  ]
};

// Example 3: Team Directory (object format with custom transform)
export const teamDirectoryConfig = {
  defaultTab: "engineering",
  displayNames: {
    "john.doe": "John Doe",
    "jane.smith": "Jane Smith",
    "bob.wilson": "Bob Wilson"
  },
  tabs: {
    engineering: {
      label: 'Engineering',
      data: {
        "john.doe": "john.doe@company.com",
        "jane.smith": "jane.smith@company.com"
      },
      dataTransform: (tabData, config) => {
        return Object.entries(tabData.data).map(([key, email]) => ({
          name: config.displayNames[key] || key,
          email: email,
          department: 'Engineering',
          location: 'Remote'
        }));
      }
    },
    design: {
      label: 'Design',
      data: {
        "bob.wilson": "bob.wilson@company.com"
      },
      dataTransform: (tabData, config) => {
        return Object.entries(tabData.data).map(([key, email]) => ({
          name: config.displayNames[key] || key,
          email: email,
          department: 'Design',
          location: 'San Francisco'
        }));
      }
    }
  },
  columns: [
    { key: 'name', label: 'Name', isBold: true },
    { key: 'email', label: 'Email', isCode: true },
    { key: 'department', label: 'Department' },
    { key: 'location', label: 'Location' }
  ]
};

// Example 4: API Endpoints (5 columns with custom formatting)
export const apiEndpointsConfig = {
  defaultTab: "v1",
  tabs: {
    v1: {
      label: 'API v1.0',
      data: [
        {
          endpoint: '/api/v1/users',
          method: 'GET',
          auth: 'Bearer Token',
          description: 'List all users',
          rateLimit: '100/min'
        },
        {
          endpoint: '/api/v1/users/{id}',
          method: 'GET',
          auth: 'Bearer Token',
          description: 'Get user by ID',
          rateLimit: '100/min'
        },
        {
          endpoint: '/api/v1/users',
          method: 'POST',
          auth: 'Bearer Token',
          description: 'Create new user',
          rateLimit: '10/min'
        }
      ]
    },
    v2: {
      label: 'API v2.0',
      data: [
        {
          endpoint: '/api/v2/users',
          method: 'GET',
          auth: 'API Key',
          description: 'List users with pagination',
          rateLimit: '1000/min'
        },
        {
          endpoint: '/api/v2/users/{id}',
          method: 'PATCH',
          auth: 'API Key',
          description: 'Update user partially',
          rateLimit: '50/min'
        }
      ]
    }
  },
  columns: [
    {
      key: 'endpoint',
      label: 'Endpoint',
      isCode: true,
      width: '25%'
    },
    {
      key: 'method',
      label: 'Method',
      style: (value) => ({
        backgroundColor:
          value === 'GET' ? '#d4edda' :
          value === 'POST' ? '#fff3cd' :
          value === 'PATCH' ? '#cce5ff' :
          '#f8d7da',
        padding: '4px 8px',
        borderRadius: '4px',
        fontWeight: 'bold',
        textAlign: 'center'
      })
    },
    { key: 'auth', label: 'Authentication' },
    { key: 'description', label: 'Description' },
    { key: 'rateLimit', label: 'Rate Limit', isCode: true }
  ]
};

// Updated Lambda Layer ARNs config (backward compatible)
export const lambdaLayerArnsConfig = {
  defaultTab: "python",
  regionDisplayNames: {
    "us-east-1": "US East (N. Virginia)",
    "us-east-2": "US East (Ohio)",
    "us-west-1": "US West (N. California)",
    "us-west-2": "US West (Oregon)",
    // ... add more as needed
  },
  tabs: {
    python: {
      label: 'Python',
      arns: {
        "us-east-1": "arn:aws:lambda:us-east-1:615299751070:layer:AWSOpenTelemetryDistroPython:16",
        "us-east-2": "arn:aws:lambda:us-east-2:615299751070:layer:AWSOpenTelemetryDistroPython:13"
        // ... more regions
      }
    }
    // ... more runtimes
  },
  columns: [
    { key: 'region', label: 'Region' },
    { key: 'arn', label: 'ARN', isCode: true }
  ]
};
