import React from "react"
import styled from "styled-components"
import Container from "~/components/Container"
import Text from "~/components/Text"

const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: #fff;

		@media (max-width: 960px) {
			mix-blend-mode: difference;
		}

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}
`

const Hero = ({ about }) => (
	<Container>
		<Details>
			<Text>{about}</Text>
		</Details>
	</Container>
)

export default Hero