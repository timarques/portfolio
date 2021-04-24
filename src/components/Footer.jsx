import React from "react"
import styled from "styled-components"
import Container from "~/components/Container"
import Text from "~/components/Text"
import footerIllustration from "root/assets/footer.svg"

const Wrapper = styled.div`
    padding: 28rem 0 0 0;
    background-image: url(${footerIllustration});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;

    @media (max-width: 1960px) {
        padding: 14rem 0 0;
    }
`

const Flex = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 680px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`

const Details = styled.div`
    padding: 1rem 0;
    h2, a, span {
        color: #212121;
    }
`

const Links = styled(Text)`
    a {
        color: #212121;
    }
`

const Title = styled.h2`
    margin-bottom: 1rem;
`

const Footer = ({ github, name }) => (
    <Wrapper>
        <Flex>
            <Details>
                <Title>{name}'s Portfolio</Title>
                <span>© All rights are reserved | {new Date().getFullYear()}</span>
            </Details>
            <Links small>
                <a href={github} target="_blank">Github</a>
            </Links>
        </Flex>
    </Wrapper>
)

export default Footer
