import React from 'react'

const Button = () =>{
    return (
        <div className='btns'>
            <div><button className='btn'><i class="fa-solid fa-arrows-rotate" style={{color: "#a6adb9"}}></i></button></div>
            <div>
                <button className='btn'>10</button>
                <button className='btn'>50</button>
                <button className='btn'>80</button>
                <button className='btn'>100</button>
            </div>
        </div>
    )
}
export default Button