import React, { Fragment } from "react"
import Hero from "./Hero"
import Projects from "./Projects"

const Landing = ({ repositories, about }) => {
    return (
        <Fragment>
            <Hero about={about} />
            <Projects repositories={repositories} />
        </Fragment>
    )
}

export default Landing