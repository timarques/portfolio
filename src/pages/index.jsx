import { Fragment } from "react"
import Head from "next/head"
import Landing from "~/components/Landing"
import { fetchGithubUserRepositories } from "~/helpers"

const getStaticProps = async () => {
    const repositories = await fetchGithubUserRepositories()
    return {
        props: { repositories },
        revalidate: 60 * 60 * 24 // one day
    }
}

const Home = ({ author: { name }, repositories }) => {
	return (
		<Fragment>
			<Head>
				<title>{ name } | Portfolio</title>
			</Head>
			<Landing repositories={repositories} />
		</Fragment>
	)
}

export {
	Home as default,
	getStaticProps
}