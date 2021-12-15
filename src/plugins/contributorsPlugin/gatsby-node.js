// Copyright (c) Author: Patrick Arminio <patrick.arminio@gmail.com>
// Licensed under the MIT License (MIT), see https://github.com/patrick91/gatsby-source-github-contributors
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
// OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

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
