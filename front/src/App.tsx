import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Layout from "./layout";
import Home from "./components/home";
import Tasks from "./components/tasks";
import Stories from "./components/stories";
import StoryForm from "./components/stories/StoryForm";
import Login from "./components/Login";
import BordPage from "./components/board";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Route exact path="/" component={Login} />
          <Route path="/tasks" component={Tasks} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/story/:id" component={StoryForm} />
          <Route exact path="/story" component={StoryForm} />
          <Route exact path="/board" component={BordPage} />
        </Layout>
      </Router>
    </>
  );
};

export default App;
