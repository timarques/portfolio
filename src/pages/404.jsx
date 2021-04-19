import { Fragment } from "react"
import Head from "next/head"
import Container from "~/components/Container"

const Error = ({ author }) => (
    <Fragment>
        <Head>
            <title>{author.name} | Not Found</title>
        </Head>
        <Container>
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
    </Fragment>
)

export default Error