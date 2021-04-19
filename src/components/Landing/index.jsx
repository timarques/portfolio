import React, { Fragment } from "react"
import Hero from "./Hero"
import Projects from "./Projects"

const Landing = ({ repositories, about, position }) => {
    return (
        <Fragment>
            <Hero about={about} position={position} />
            <Projects repositories={repositories} />
        </Fragment>
    )
}

export default Landing