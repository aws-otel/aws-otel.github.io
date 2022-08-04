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

const GitHub = require("github-base")
const camelcaseKeys = require("camelcase-keys")

function octocatContributor() {
    // Using example provided by the docs https://docs.github.com/en/rest/repos/repos#list-repository-contributors
    const githubContributor = {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        gravatar_id: "",
        url: "https://github.com/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false,
        contributions: 32
      };

      return camelcaseKeys({...githubContributor, name: "octocat"})
}

exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest },
    options
) => {

    // Used in Development mode so that we don't try to hit the GitHub API
    if (options.useMockData) {
       actions.createNode({
        ...octocatContributor(),
        id: createNodeId(1),
        internal: {
            type: "GitHubContributor",
            contentDigest: createContentDigest('1')
        }
      });

      return
    }

    const github = new GitHub({token: options.token});

    const loginsSet = new Set()

    const responses = await Promise.all(options.repos.map((repo) => github.paged(`/repos/:${repo}/contributors`)));

    const contributors = responses.map((res) => res.pages.flat().map((page) => page.body).flat()).flat();

    const logins = contributors.map(node => node.login);
    logins.forEach((login) => loginsSet.add(login));

    const profiles = await Promise.all(
        [...loginsSet].map(login =>
            github.get(`/users/${login}`).then((res) => res.body)
        )
    );

    const loginToProfile = Object.fromEntries(profiles.map(profile => [profile.login, profile]));

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
