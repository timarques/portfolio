import styled from "styled-components"

const Text = styled.div`
    margin-bottom: 0;
    font-size: ${props => props.small ? "14" : "20"}pt;
    font-weight: normal;
    line-height: 1.3;
    color: #f0f0f0;
`

export default Text