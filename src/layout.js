import React from 'react'
import Navbar from './navbar'
import Jumbotron from './jumbotron'
import Cards2 from './cards2'
import Footer from './footer'

function Layout() {
  const home = 'Home'
  const about = 'About'
  const services = 'Services'
  const contact = 'Contact'

  return (
    <>
    < Navbar home={home} about={about} services={services} contact={contact} />
    <div className='container'>
    < Jumbotron />
    < Cards2 />
    </div>
    < Footer />
    </>
  )
}

export default Layout
