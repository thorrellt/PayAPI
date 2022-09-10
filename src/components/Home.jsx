import { useState } from 'react'
import '../styles/Home.css'
import Landing from './home/Landing'

export default function Home(props) {
    return (
        <div className="Home">
            <Landing windowWidth={props.windowWidth}/>
        </div>
    )
}