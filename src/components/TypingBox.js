import React, { useState } from "react"
import Button from './Button'

let timer;


const TypingBox = () =>{
    let Diplaytext = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quasi, repellendus magnam facere vel blanditiis eveniet, et asperiores beatae maxime id maiores quo rerum at dolore quod voluptate? Praesentium, vitae porro? At repellendus facere quis natus nam esse ipsum, voluptatibus est possimus distinctio commodi iste, eius earum debitis quia iure illum hic! Sunt eaque quidem ducimus consectetur placeat optio libero earum, omnis consequuntur eius maxime vel id totam dicta accusantium praesentium adipisci doloribus? Molestiae repudiandae facere harum velit. Architecto maiores illo in id cumque alias blanditiis "
    let keychar = 0;
    
    const [time, setTim]  = useState(15);

    function startTimer(t){
       timer = setInterval(() => {
        if(t<=1){
            clearInterval(timer)
        }
            setTim(--t)
        }, 1000);
    }
     function setTime(t){
        if(timer){
            clearInterval(timer)
        }
        
        setTim(t);
        
        startTimer(t)
     }
9
    return (
        <div className="main">
            <div className="main-one">
            <div>
                <span className="time">{time}s</span>
            </div>
            <div className="timebtn">
                <button onClick={()=>setTime(15)} className="time">15s</button>
                <button onClick={()=>setTime(30)} className="time">30s</button>
                <button onClick={()=>setTime(60)} className="time">60s</button>
            </div>
            </div>
            <div className="main-two">
                {Diplaytext.split("").map((ele)=>(<span key={'char'+(keychar++)}>{ele}</span>))}
            </div>
        <Button/>
        </div>
    )
}
export default TypingBox