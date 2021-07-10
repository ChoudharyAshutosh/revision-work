import React from 'react'
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import './ContactItem.css'
export default function ContactItem({title,detail,icon}){
    const renderImage=(icon)=>{
        var size=window.innerWidth<700?{fontSize:60}:{}
        switch(icon){
            case "time" : return <AccessTimeOutlinedIcon style={size} fontSize="large" className="time"/>
            case "phone" : return <PhoneOutlinedIcon style={size} fontSize="large" className="phone"/>
            case "address" : return <LocationOnOutlinedIcon style={size} fontSize="large" className="address"/>
            default : return
        }
    }
    return(
        <div className="item">
            <div>
                {renderImage(icon)}
            </div>
            <div className="item_data">
                <div className="title">
                    {title}
                </div>
                <div className="detail">
                    {detail}
                </div>
            </div>
        </div>
    )
}