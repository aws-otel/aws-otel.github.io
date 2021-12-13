// Copyright (c) Author: Patrick Arminio <patrick.arminio@gmail.com>
// Licensed under the MIT License (MIT), see
// https://github.com/patrick91/gatsby-source-github-contributors

const GitHub = require ("github-base")
const camelcaseKeys = require ( "camelcase-keys")

exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest },
    options
) => {
    const github = new GitHub(options);

    const contributors = (await github
        .paged(`/repos/:${options.repo}/contributors`, options, null)
        .then((res) => res.pages))
        .flat()
        .map((page) => page.body)
        .flat();
    const logins = contributors.map(node => node.login);

    const profiles = await Promise.all(
        logins.map(login =>
            github.get(`/users/${login}`, options).then((res) => res.body)
        )
    );

    const loginToProfile = Object.fromEntries(
        profiles.map(profile => [profile.login, profile])
    );

    contributors.forEach(node => {
        const profile = loginToProfile[node.login];

        return actions.createNode({
            ...camelcaseKeys(node),
            name: profile.name,
            url: profile.blog || profile.html_url,
            id: createNodeId(node.id),
            internal: {
                type: "GitHubContributor",
                contentDigest: createContentDigest('' + node.id)
            }
        });
    });
};
