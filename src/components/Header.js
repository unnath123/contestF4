import React, { useState } from 'react'

const Header = () =>{
    return (
        <div className='header'>
            <div className="header-one">
                <h1>TYPECAT</h1>
                <i class="fa-regular fa-keyboard" style={{color: "#e7eaee"}}></i>
            </div>
            <div>
            <i class="fa-solid fa-user" style={{color: "#e5e7eb"}}></i>
            </div>
        </div>
    )
}

export default Header