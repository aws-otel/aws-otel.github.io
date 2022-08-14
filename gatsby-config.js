require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // pathPrefix: "/",
  siteMetadata: {
    title: 'AWS Open Distro for OpenTelemetry',
    siteTitle: `AWS Open Distro for OpenTelemetry`,
    defaultTitle: `AWS Open Distro for OpenTelemetry`,
    siteTitleShort: `AWS Distro OpenTelemetry`,
    siteDescription: `Technical documentation for AWS Open Distro for OpenTelemetry`,
    siteAuthor: `Amazon AWS Observability`,
    // siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#F5A880`,
    basePath: `/`,
    siteUrl: `https://www.aws-otel.github.io`,
  },
  plugins: [
    {
      resolve: require.resolve(`./src/plugins/contributorsPlugin`),
      options: {
        repos: [
          "aws-observability/aws-otel-collector",
          "aws-observability/aws-otel-java-instrumentation",
          "aws-observability/aws-otel-js",
          "aws-observability/aws-otel-community",
          "aws-observability/aws-otel-playground",
          "aws-observability/aws-otel-test-framework"
        ],
        token: process.env.GH_API_KEY,
      },
    },
    {
      resolve: require.resolve(`./src/plugins/websiteAnalyticsPlugin`),
      options: {
        // https://github.com/aws-observability/aws-rum-web/blob/main/docs/configuration.md
        applicationId: "9948254b-cc33-4c70-869d-2fd6615a914c",
        applicationVersion: "1.0.0",
        applicationRegion: "us-west-2",
        endpoint: "https://dataplane.rum.us-west-2.amazonaws.com",
        sessionSampleRate: 1,
        guestRoleArn: "arn:aws:iam::611364707713:role/SiteAnalyticsStack-AdotWebSiteAnalyticsAdotWebSite-1R6C5CIIDEABQ",
        identityPoolId: "us-west-2:426eefd0-dee5-4e37-b281-618a29de085e",
        telemetries: ["errors", "performance", "http"],
        allowCookies: false,
        enableXRay: false
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/Announcements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/BlogPosts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/Blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/Downloads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs/`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `description`, `path`, `html`, `searchIndex`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          Mdx: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            path: node => node.frontmatter.path,
            html: node => node.internal.content,
          },
          SiteContentYaml: {
            title: node => node.title,
            description: node => node.description,
            path: node => node.path,
            searchIndex: node => node.searchIndex,
          },
          BlogPostsYaml: {
            title: node => node.title,
            description: node => node.description,
            path: node => node.path,
            searchIndex: node => node.searchIndex,
          },
          AnnouncementsYaml: {
            title: node => node.title,
            description: node => node.description,
            path: node => node.path,
            searchIndex: node => node.searchIndex,
          }
        },
      },
    },
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        basePath: `/docs`,
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AWS Distro for OpenTelemetry`,
        short_name: `AWS Distro for OTel`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://aws-otel.github.io/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
