import React from 'react'
import Choice from "./Choice.jsx"
import Coursel from "./Coursel.jsx"
import HeroInstructor from './HeroInstructor'
function Home() {
  return (
    <div>
    <Coursel num={1}/>
    <Coursel num={2}/>
    <Choice/>
    <HeroInstructor/>
    </div>
  )
}

export default Home
