export const supportedRuntimesConfig = {
  defaultTab: "java",
  tabs: {
    python: {
      label: 'Python',
      data: [
        { runtime: 'Python 3.10' },
        { runtime: 'Python 3.11' },
        { runtime: 'Python 3.12' },
        { runtime: 'Python 3.13' }
      ]
    },
    nodejs: {
      label: 'Node.js',
      data: [
        { runtime: 'Node.js 18.x' },
        { runtime: 'Node.js 20.x' },
        { runtime: 'Node.js 22.x' }
      ]
    },
    java: {
      label: 'Java',
      data: [
        { runtime: 'Java 11' },
        { runtime: 'Java 17' },
        { runtime: 'Java 21' }
      ]
    },
    dotnet: {
      label: '.NET',
      data: [
        { runtime: '.NET 8' }
      ]
    }
  },
  columns: [
    { key: 'runtime', label: 'Runtime' }
  ]
};
