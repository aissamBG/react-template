import { Component } from 'react'
import Index from './components/index/Index'
import Home from './components/Home'
import Work from './components/Work'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Navbar />
          <Route path='/home' component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Profile} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
