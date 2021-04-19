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

const Links = styled.div`
	a {
		margin-left: 0.5em;
	}
`

const Header = ({ title, github }) => {
	return (
		<Container>
			<Flex>
				<h1>
					<Link href="/">{ title }</Link>
				</h1>
				<Links as={Text}>
					<Link href="/">Portfolio</Link>
					<Link href="/contact">Contact</Link>
					<Link href={github}>Github</Link>
				</Links>
			</Flex>
		</Container>
	)
}

export default Header