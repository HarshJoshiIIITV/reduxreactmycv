import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Academics from './components/Academics';
import Cv from './components/Cv';
import Post from './components/Post';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/cv" component={Cv} />
          <Route path="/academics" component={Academics} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
          </Switch>
      </div>
      </BrowserRouter>
    );
}
}

export default App;
