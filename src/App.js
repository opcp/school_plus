import React from 'react'
import Navbar from './components/Navbar'
import Map from './components/Map'
import Search_bar from './components/Search_bar'
import Swipe from './components/Swipe'
import Hot_School from './components/Hot_School'
import Hot_Country from './components/Hot_Country'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Map />
      <Search_bar />
      <Swipe />
      <Hot_School />
      <Hot_Country />
      <Footer />
    </>
  )
}

export default App
