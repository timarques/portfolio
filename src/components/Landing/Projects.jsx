import React from "react"
import styled from "styled-components"
import Container from "~/components/Container"
import { Card, CardContent, CardFooter } from "~/components/Card"
import Star from "~/components/Icons/Star"
import Fork from "~/components/Icons/Fork"

const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 8fr;
    gap: 1.2rem 1.2rem;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`

const ProjectWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

    h4 {
        color: #fff;
    }

    p {
        color: #c7c7c7;
    }
`

const Stats = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        &:first-child {
            margin-right: 0.5rem;
        }

        img {
            margin: 0;
        }

        svg path {
            fill: #fff;
        }

        span {
            color: #fff;
            margin-left: 0.5rem;
        }
    }
`

const Languages = styled.div`
    opacity: 0.5;
    font-size: 14px;
`

const Project = (repository) => (
    <ProjectWrapper
        key={repository.id} 
        as="a" 
        href={repository.url} 
        target="_blank" 
        rel="noopener noreferrer"
    >
        <Card theme="dark">
            <CardContent>
                <h4>{repository.name}</h4>
                <p>{repository.description}</p>
            </CardContent>
            <CardFooter>
                <Stats>
                    <div>
                        <Star color="#fff" />
                        <span>{repository.stars}</span>
                    </div>
                    <div>
                        <Fork color="#fff" />
                        <span>{repository.forks}</span>
                    </div>
                </Stats>
                <Stats>
                    <Languages>
                        {repository.languages.map(({name, id}) => (
                            <span key={id}>{name}</span>
                        ))}
                    </Languages>
                </Stats>
            </CardFooter>
        </Card>
    </ProjectWrapper>
)

const Projects = ({ repositories }) => (
    <Container id="projects">
        <Grid>{ repositories.map(Project) }</Grid>
    </Container>
)

export default Projects