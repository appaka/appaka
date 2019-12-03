import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Layout from "./layout";
import Home from "./components/home";
import Tasks from "./components/tasks";
import Stories from "./components/stories";
import StoryForm from "./components/stories/StoryForm";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/story/:id" component={StoryForm} />
          <Route exact path="/story" component={StoryForm} />
        </Layout>
      </Router>
    </>
  );
};

export default App;
