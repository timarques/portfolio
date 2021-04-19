import React, { Fragment } from "react"
import Head from "next/head"
import NextApp from "next/app"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import { fetchGithubUser } from "~/helpers"
import "~/assets/app.scss"

class App extends NextApp {

	static async getInitialProps(context) {
		const [
			initialProps,
			user
		] = await Promise.all([
			super.getInitialProps(context),
			fetchGithubUser()
		])
		return {
			initialProps,
			author: {
				avatar: process.env.DATA_AVATAR || user.avatarUrl,
				name: process.env.DATA_NAME || user.name,
				about: process.env.DATA_ABOUT || user.bio,
				email: process.env.DATA_EMAIL || user.email,
				github: process.env.DATA_GITHUB || user.url,
			}
		} 
	}

	render() {
		const { avatar, name, about, github, email } = this.props.author
		return (
			<Fragment>
				<Head>
					<link rel="icon" href={avatar} />
					<meta name="author" content={name} />
					<meta name="description" content={about} />
				</Head>
				<Header title={name} github={github} email={email} />
				<this.props.Component author={this.props.author} {...this.props.pageProps} />
				<Footer title={name} />
			</Fragment>
		)
	}

}

export default App
