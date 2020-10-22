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
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#F5A880`,
    basePath: `/`,
    siteUrl: `https://www.aws-otel.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_KEY || "none",
      }
    },
    // {
    //   resolve: `gatsby-source-github-api`,
    //   options: {
    //     token: process.env.GH_API_KEY,
    //     variables: {},
    //     graphQLQuery: `
    //       query {
    //         repo1: repository(owner: "open-o11y", name: "opentelemetry-js") {
    //           collaborators {
    //             nodes {
    //               name
    //               avatarUrl
    //             }
    //           }
    //         }
    //         repo2: repository(owner: "open-o11y", name: "opentelemetry-go-contrib") {
    //           collaborators {
    //             nodes {
    //               name
    //               avatarUrl
    //             }
    //           }
    //         }
    //         repo3: repository(owner: "open-o11y", name: "opentelemetry-python") {
    //           collaborators {
    //             nodes {
    //               name
    //               avatarUrl
    //             }
    //           }
    //         }
    //         repo4: repository(owner: "open-o11y", name: "opentelemetry-java") {
    //           collaborators {
    //             nodes {
    //               name
    //               avatarUrl
    //             }
    //           }
    //         }
    //         repo5: repository(owner: "aws-observability", name: "aws-otel-test-framework") {
    //           collaborators {
    //             nodes {
    //               name
    //               avatarUrl
    //             }
    //           }
    //         }
    //         repo6: repository(owner: "aws-observability", name: "aws-otel-playground") {
    //           collaborators {
    //             nodes {
    //               name
    //               avatarUrl
    //             }
    //           }
    //         }
    //       }
    //     `
    //   },
    // },
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
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
