import { Fragment } from "react"
import Head from "next/head"
import Container from "~/components/Container"
import Text from "~/components/Text"

const Contact = ({ author }) => (
    <Fragment>
        <Head>
            <title>{author.name} | Contact</title>
        </Head>
        <Container>
            <h2>Contact</h2>
            <Text marginTop="1rem">
                Feel free to send an email to <a href="mailto:tyimarques@gmail.com" target="_blank">{author.email}</a>
            </Text>
        </Container>
    </Fragment>
)

export default Contact