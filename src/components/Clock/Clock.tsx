import React, {useEffect, useState} from "react";

type PropsType ={

}

export const Clock: React.FC<PropsType> = () => {
    const [clock, setClock] = useState (new Date())

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setClock(new Date())
        },1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])
const gwt2digitsString = (num : number) => num < 10 ? "0" + num : num
    return<div>
        <span>{gwt2digitsString(clock.getHours())} : </span>
        <span>{gwt2digitsString(clock.getMinutes())} : </span>
        <span>{gwt2digitsString(clock.getSeconds())}</span>
    </div>
}