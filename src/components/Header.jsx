import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Container from "~/components/Container"
import Text from "~/components/Text"

const Flex = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	a {
		color: #fff;
	}
`

const Header = ({ title, github, email }) => {
	return (
		<Container>
			<Flex>
				<h1>
					<Link href="/">{ title }</Link>
				</h1>
				<Text>
					<Link href={github}>Github</Link>
				</Text>
			</Flex>
			<Text small>{email}</Text>
		</Container>
	)
}

export default Header