import React from 'react'
import Menu from './Menu'
import Contact from './Contact'
import './Header.css'
export default function Header(){
//    alert(window.innerWidth)
    const height=window.innerWidth>700?{height:'fit-content'}:{height:window.screen.height}
    return(
        <div className="container_header" style={height}>
            <div className="mobile_view" style={height}>
                <div>
                    <Contact/>
                </div>
                <div>
                    <Menu/>
                </div>
            </div>
            <div className="close">
                &#10540;
            </div>
        </div>
    )
}