import React,{useState} from 'react'
import './MenuTag.css'
export default function MenuTag({name,position,selectedTag,setParentState,data}){
    const [state,setState]=useState(0);
    const hoverOn=()=>{
        setState(2)
    }
    const hoverOff=()=>{
        setState(0)
    }
    const setPosition=()=>{
        if(position===6)
            return "last_tag"
        else
            return "nonlast_tag"
    }
    const isSelected=()=>{
        if(position===selectedTag)
            return "1"
        else
            return "0"
    }
    const setSelected=()=>{
        setParentState(position)
    }
    const renderList=()=>{
        if(data.length>0)
            return(
                data.map((item)=>{
                    return <div className="list_item">{item}</div>
                })
            )
    }
    return(
        <div className={setPosition()} onMouseEnter={hoverOn} onMouseLeave={hoverOff} onClick={setSelected}>
            <div className="tag_name">
                {name}
            </div>
            <div>
            <span className={`dot${isSelected()}${state}`}></span>
            </div>
            <div className={`list_data${state}`}>
                {renderList()}
            </div>
        </div>
    )
}