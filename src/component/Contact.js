import React from 'react'
import ContactItem from './ContactItem'
import './Contact.css'
export default function Contact(){
    return(
        <div className="container_contact">
            <ContactItem title="hours" detail="Mon-Sat 8.00-18.00" icon={'time'}/>
            <ContactItem title="call" detail="+800 555 678" icon={"phone"}/>
            <ContactItem title="address" detail="Greenpoint, Brooklyn" icon={"address"}/>
        </div>
    )
}