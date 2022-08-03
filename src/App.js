/*import logo from './logo.svg';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1><u>Welcome to React Router!</u></h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about"><b>About</b></Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are you?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/"><b>Home </b></Link>
      </nav>
    </>
  );
}

/*

function Home(){
  return(
    <>
    <main>
      <h2>Welcome to the home page!</h2>
      <p>You can do this, I believe in you.</p>
    </main>
    <nav>
      <link to= "/about"></link>
    </nav>
    
    </>
  );
}
 function About(){
  return(
    <>
    <main>
      <h2> Who are you?</h2>
      <p>That feels like an existensial question, don't you think?</p>
    </main>
    <nav>
      <link to ="/">Home</link>
    </nav>
    </>
  );
 }
 */
 export default App;