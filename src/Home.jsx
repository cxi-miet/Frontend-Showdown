import React from 'react'
import Header from './component/Header'
import Timeline from './component/Timeline'
import Prizes from './component/Prizes'
import Rules from './component/Rules'
import AboutUs from './component/AboutUs'
import Faq from './component/Faq';
import Register from './component/Register'

function Home() {
  return (
    <div>
        <Header/>
        <Timeline/>
        <Prizes/>
        <Rules/>
        <Register/>
        <AboutUs/>
        {/* <Faq/> */}
    </div>
  )
}

export default Home