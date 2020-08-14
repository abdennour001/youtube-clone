import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import { Provider, connect } from "react-redux";

// Redux store
import store from "./redux/store";

function App({ isOpened }) {

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="l-app">
                    <div className={`l-app__sidebar${isOpened ? "" : "-hidden"}`}>
                        <Sidebar />
                    </div>
                    <div className="l-app__content">
                        <Switch>
                            <Route path="/search">
                                <SearchPage />
                            </Route>
                            <Route exact path="/">
                                <RecommendedVideos />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default connect(state => ({ isOpened: state.menu.isOpened }))(App);
