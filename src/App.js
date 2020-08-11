import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search"

function App() {
    return (
        <div className="App">
            <Header />
            <div className="l-app">
                <div className="l-app__sidebar">
                    <Sidebar />
                </div>
                <div className="l-app__content">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <RecommendedVideos />
                            </Route>
                            <Route path="/search/:query">
                                <Search />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
