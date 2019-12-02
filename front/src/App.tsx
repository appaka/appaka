import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Tasks from "./components/tasks";
import Stories from "./components/stories";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/stories" component={Stories} />
      </Router>
    </>
  );
};

export default App;
