import React, {useState} from 'react';

type onOffType ={
    onChange : (on:boolean)=>void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props:onOffType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false )

    const onStyle = {
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: on ? "green" : "white",
        padding: "2px",
        display: "inline-block"
    }
    const offStyle = {
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: on ? "white" : "red",
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
        backgroundColor: on ? "green" : "red"
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className="bar">
            <div style={onStyle} onClick={onClicked}>
                On
            </div>
            <div style={offStyle} onClick={offClicked}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

