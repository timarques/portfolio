import { Fragment } from "react"
import Head from "next/head"
import Container from "~/components/Container"
import Text from "~/components/Text"

const Error = ({ author }) => (
    <Fragment>
        <Head>
            <title>{author.name} | Not Found</title>
        </Head>
        <Container>
            <h2>Not Found</h2>
            <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
        </Container>
    </Fragment>
)

export default Error