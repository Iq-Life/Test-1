import React, {useState} from 'react';
import './OnOff.css'

type OnOffType ={
    on: boolean
    setOff: (on:boolean) => void
}

function UnOnOff(props:OnOffType) {

    const onStyle = {
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: props.on ? "green" : "white",
        padding: "2px",
        display: "inline-block"
    }
    const offStyle = {
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: props.on ? "white" : "red",
        padding: "2px",
        display: "inline-block",
        marginLeft: "2px"

    }
    const indicatorStyle = {
        border: "1px solid black",
        display: "inline-block",
        width: "15px",
        height: "15px",
        borderRadius: "10px",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div className="bar">
            <div style={onStyle} onClick={
                () => {props.setOff(true)}
            }>On
            </div>
            <div style={offStyle}
                 onClick={() => {props.setOff (false)}
            }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UnOnOff;

