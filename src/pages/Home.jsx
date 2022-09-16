import { useState } from 'react'
import '../styles/Home.css'
import Landing from '../components/home/Landing'
import Clients from '../components/home/Clients'
import Hero from '../components/home/Hero'


export default function Home(props) {
    return (
        <div className="Home" id='Home'>
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