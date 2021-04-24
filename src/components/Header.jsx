import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Container from "~/components/Container"

const Flex = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	a {
		color: #fff;
	}
`

const Header = ({ name }) => (
	<Container>
		<Flex>
			<h1>
				<Link href="/">{`${name}'s Portfolio`}</Link>
			</h1>
		</Flex>
	</Container>
)

export default Header