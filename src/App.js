import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="l-app">
                <div className="l-app__sidebar">
                    <Sidebar />
                </div>
                <div className="l-app__recommended_videos">
                    <h3>Recommended</h3>
                </div>
            </div>
        </div>
    );
}

export default App;
