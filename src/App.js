import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="l-app">
                <div className="l-app__sidebar">
                    <Sidebar />
                </div>
                <div className="l-app__recommended_videos">
                    <RecommendedVideos />
                </div>
            </div>
        </div>
    );
}

export default App;
