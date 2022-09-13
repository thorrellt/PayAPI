import { useState } from 'react'
import '../styles/Home.css'
import Landing from './home/Landing'
import Clients from './home/Clients'
import Hero from './home/Hero'

export default function Home(props) {
    return (
        <div className="Home">
            <Landing
                windowWidth={props.windowWidth}
            />
            <Clients
                windowWidth={props.windowWidth}
            />
            <Hero
                windowWidth={props.windowWidth}
            />

        </div>
    )
}