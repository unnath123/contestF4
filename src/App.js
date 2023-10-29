import React from "react";
import Header from '../src/components/Header'
import Main from '../src/components/TypingBox'
import style from '../src/style.css'
import TypingBox from "../src/components/TypingBox";

const App = () =>{
    return (
        <div className="appDiv">
            <Header/>
            <TypingBox />

        </div>
    )
}
export default App