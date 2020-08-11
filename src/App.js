import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="l-app">
                    <div className="l-app__sidebar">
                        <Sidebar />
                    </div>
                    <div className="l-app__content">
                        <Switch>
                            <Route exact path="/">
                                <RecommendedVideos />
                            </Route>
                            <Route path="/search/:query">
                                <SearchPage />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
