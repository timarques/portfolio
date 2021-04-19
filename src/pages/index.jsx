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

const Home = ({ author: { name, about }, repositories }) => {
	return (
		<Fragment>
			<Head>
				<title>{ name } | { about }</title>
			</Head>
			<Landing 
				repositories={repositories}
				name={name}
				about={about}
			/>
		</Fragment>
	)
}

export {
	Home as default,
	getStaticProps
}