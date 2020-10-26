# aws-otel.github.io

This repo contains the source code for the [AWS Distro for OpenTelemetry Website](https://aws-otel.github.io/). 

## Table of Contents
  - [License](#license)
  - [Development Setup](#development-setup)
  - [Making Changes to the Site](#making-changes-to-the-site)
  - [Project Structure](#project-structure)
  - [Attribution](#attribution)
  - [Useful Links](#useful-links)

## License

This code is licensed under the Apache 2.0 License.

## Development Setup

1. Clone this repository onto your local machine
2. [Download and Set up Gatsby Environment](https://www.gatsbyjs.com/tutorial/part-zero/)
3. Open up the project using your preferred code editor
4. Install the required node modules for this project
    ```
    npm install
    ```
5. [Generate a GitHub Personal Access Token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
6. Create a new file in the root called `.env.development` (See [Project Structure](#project-structure) for more information)
7. In the `.env.development` file, add the following line:
   ```
   GH_API_KEY=<INSERT YOUR ACCESS TOKEN>
   ```
8. Start up the Gatsby site
    ```
    gatsby build
    ```
9. Open http://localhost:8000 to check the site

## Making Changes to the Site

1. Create a new branch 
    ```
    git checkout -b <branch name>
    ```
2. Make your desired changes to the project!
3. Push your branch and your changes upstream
    ```
    git add .
    git commit -m "<Your Commit Message>"
    git push
    ```
4. [Create a pull request](https://github.com/aws-otel/aws-otel.github.io/compare) to merge your changes into the `main` branch
    > Note: When creating the pull request, the option that should be selected is `base:main` and `compare:<your branch>`

5. Stay tuned while our team reviews your changes and we will either give feedback and comments or we will merge them into the `main` branch and publish your changes

## Project Structure
    .
    ├── .github                 
    ├── node_modules            
    ├── public                  
    ├── src
    │    ├── @rocketseat
    │    ├── assets 
    │    ├── components
    │    ├── config
    │    ├── content
    │    ├── docs
    │    └── pages          
    ├── static                  
    ├── .env.development        
    ├── .gitignore              
    ├── gatsby-config.js        
    ├── package.json
    └── package-lock.json

| File/Directory      | Description                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------|
| `.github`           | GitHub actions workflow for deploying to GitHub pages                                                         |
| `node_modules`      | Automatically generated when doing `npm install` to install node packages used in this project                |
| `public`            | Assets that are copied into this folder by Gatsby                                                             |
| `src`               | The root folder for code                                                                                      |
| `static`            | Contains the favicon image                                                                                    |
| `.env.development`  | Contains environment variables for development environment                                                    |
| `.gitignore`        | File that specifies which files Git should ignore                                                             |
| `gatsby-config.js`  | Defines site's metadata, plugins, and other general configuration                                             |
| `package.json`      | Holds project metadata and used for managing the project's dependencies                                       |
| `package-lock.json` | Automatically generated for any operations where npm modifies either the node_modules tree, or `package.json` |
| `/src/@rocketseat`  | Files for [shadowing](https://www.gatsbyjs.com/docs/themes/shadowing/) Gatsby Rocket Docs Theme               |
| `/src/assets`       | Contains images and styling for the site                                                                      |
| `/src/components`   | Contains the React Components used throughout the site                                                        |
| `/src/config`       | Defines routing for technical documentation pages and side navigation bar                                     |
| `/src/content`      | Holds the site's static content using YAML format                                                             |
| `/src/docs`         | Holds the technical documentation pages content using MDX markdown                                            |
| `/src/pages`        | Files for each site page                                                                                      |


## Attribution
[gatsby-material-kit-react](https://www.gatsbyjs.com/starters/WebCu/gatsby-material-kit-react) is used under the [MIT License](https://github.com/WebCu/gatsby-material-kit-react/blob/master/LICENSE).

[gatsby-starter-rocket-docs](https://www.gatsbyjs.com/starters/Rocketseat/gatsby-starter-rocket-docs) is used under the [MIT License](https://github.com/Rocketseat/gatsby-starter-rocket-docs/blob/master/LICENSE).

## Useful Links
* [Filing an Issue](https://github.com/aws-observability/aws-otel-community/issues)
* [Reporting a Bug](https://github.com/aws-observability/aws-otel-community/issues)
* [Creating a new Pull Request](https://github.com/aws-otel/aws-otel.github.io/compare)
* [AWS Distro for OpenTelemetry Project Repos](https://github.com/aws-observability)
* [Join the Gitter Channel](https://gitter.im/aws-otel-distro/community)