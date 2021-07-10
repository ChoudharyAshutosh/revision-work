import React,{useState} from 'react'
import MenuTag from './MenuTag'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Menu.css";
export default function Menu(){
    const [state,setState]=useState(1)
    const data=['school program','single program','schedule','workshop','worhshopd and events','get quote']
    return(
        <div className="menu_container">
            <div className="menu_tags_container">
                <MenuTag name="Home" position={1} selectedTag={state} setParentState={setState} data={""}/>
                <MenuTag name="About" position={2} selectedTag={state} setParentState={setState} data={""}/>
                <MenuTag name="Programs" position={3} selectedTag={state} setParentState={setState} data={data}/>
                <MenuTag name="Blog" position={4} selectedTag={state} setParentState={setState} data={""}/>
                <MenuTag name="Shop" position={5} selectedTag={state} setParentState={setState} data={""}/>
                <MenuTag name="Elements" position={6} selectedTag={state} setParentState={setState} data={""}/>
            </div>
            <div className="social_media_container">
                <FacebookIcon fontSize="small" className="nonlast_icon"/>
                <TwitterIcon fontSize="small" className="nonlast_icon"/>
                <YouTubeIcon fontSize="small" className="nonlast_icon"/>
                <InstagramIcon fontSize="small" className="last_icon"/>
            </div>
            <div className="mobile_menu_look">
                <div className="mobile_menu_container">
                    home
                </div>
                <div>
                  <i className="down"></i>
                </div>
            </div>
            <div className="mobile_menu_look">
                <div className="mobile_menu_container">
                    shady
                </div>
                <div>
                    <i className="down"></i>
                </div>
            </div>
            <div className="mobile_menu_link">
                music
            </div>
            <div className="mobile_menu_link">
                contemporary ballet
            </div>
            <div className="mobile_menu_link">
                jazz ballet
            </div>
            <div className="mobile_menu_link_bottom">
                acting
            </div>
        </div>
    )
}