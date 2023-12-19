// App.js
import React from 'react';
import { Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from '../src/HomePageComponents/Header';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Header/>
  <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
  </Routes>
  </BrowserRouter>
  );
};

export default App;
