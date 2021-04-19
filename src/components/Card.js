import styled from 'styled-components';

const Card = styled.div`
    padding: 1rem;
    background: #181717;
    height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CardContent = styled.div`
    padding: 1rem 0;
    h4 {
        margin: 0 0 1rem;
    }
    p {
        margin-bottom: 0;
    }
`

const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export {
    Card,
    CardContent,
    CardFooter
}