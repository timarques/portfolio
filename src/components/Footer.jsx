import React from "react"
import styled from "styled-components"
import Container from "~/components/Container"
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

const Flex = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @media (max-width: 680px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`

const Details = styled.div`
    h2, a, span {
        color: #212121;
    }

    @media (max-width: 680px) {
        margin-bottom: 2rem;
    }
`

const Footer = ({ title }) => (
    <Wrapper>
        <Flex as={ Container }>
            <Details>
                <h2>{ title }</h2>
                <span>© All rights are reserved | {new Date().getFullYear()}</span>
            </Details>
        </Flex>
    </Wrapper>
)

export default Footer
