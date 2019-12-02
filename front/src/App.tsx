import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import Layout from "./layout";
import Home from "./components/home";
import Tasks from "./components/tasks";
import Stories from "./components/stories";

const App: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <Router>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route path="/tasks" component={Tasks}/>
                    <Route path="/stories" component={Stories}/>
                </Layout>
            </Router>
        </>
    );
};

export default App;
