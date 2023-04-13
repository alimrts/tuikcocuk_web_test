import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import "./App.css";


const App = () => {
  return (
    // <div   style={{ backgroundImage: "url(/images/bgImage1.png)",
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // width: '100vw',
    // height: '120vh'}}>
   
    <div className='bg'>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tuik-cocuk-hakkinda" component={About} />
        <Route exact path="/icerik" component={Service} />
        <Route exact path="/tuik-hakkinda" component={Contact} />
        <Redirect to="/" />
        <Home />
      </Switch>
      {/* <Footer /> */}
    </div>
   
  )
}

export default App
