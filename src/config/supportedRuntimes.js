export const supportedRuntimesConfig = {
  defaultTab: "java",
  tabs: {
    python: {
      label: 'Python',
      data: [
        { runtime: 'Python 3.10', architectures: 'x86_64, arm64' },
        { runtime: 'Python 3.11', architectures: 'x86_64, arm64' },
        { runtime: 'Python 3.12', architectures: 'x86_64, arm64' },
        { runtime: 'Python 3.13', architectures: 'x86_64, arm64' },
        { runtime: 'Python 3.14', architectures: 'x86_64, arm64' }
      ]
    },
    nodejs: {
      label: 'Node.js',
      data: [
        { runtime: 'Node.js 22.x', architectures: 'x86_64, arm64' },
        { runtime: 'Node.js 24.x', architectures: 'x86_64, arm64' }
      ]
    },
    java: {
      label: 'Java',
      data: [
        { runtime: 'Java 11', architectures: 'x86_64, arm64' },
        { runtime: 'Java 17', architectures: 'x86_64, arm64' },
        { runtime: 'Java 21', architectures: 'x86_64, arm64' },
        { runtime: 'Java 25', architectures: 'x86_64, arm64' }
      ]
    },
    dotnet: {
      label: '.NET',
      data: [
        { runtime: '.NET 8', architectures: 'x86_64' },
        { runtime: '.NET 10', architectures: 'x86_64' }
      ]
    }
  },
  columns: [
    { key: 'runtime', label: 'Runtime' },
    { key: 'architectures', label: 'Architectures' }
  ]
};
