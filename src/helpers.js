import { graphql } from "@octokit/graphql"

const fetchGithubUserRepositories = async () => {
    const response = await graphql(`
        {
            viewer {
                repositories(
                    first: 12, 
                    privacy: PUBLIC, 
                    orderBy: {
                        field: STARGAZERS, 
                        direction: DESC
                    }
                ) {
                    edges {
                        node {
                            id
                            name
                            url
                            description
                            stargazers {
                                totalCount
                            }
                            forkCount
                            languages(first: 3) {
                                nodes {
                                    id
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    `, {
        headers: {
            authorization: "token " + process.env.GITHUB_TOKEN 
        }
    })
    return response.viewer.repositories.edges.map(({node}) => {
        node.languages = node.languages.nodes
        node.stars = node.stargazers.totalCount
        node.forks = node.forkCount
        delete node.forkCount
        delete node.stargazers
        return node
    })
}

const fetchGithubUser = async () => {
    const response = await graphql(`
        {
            viewer {
                id,
                avatarUrl,
                bio,
                email,
                name,
                url
            } 
        }     
    `, {
        headers: {
            authorization: "token " + process.env.GITHUB_TOKEN
        }
    })
    return response.viewer
}

export {
    fetchGithubUser,
    fetchGithubUserRepositories
}