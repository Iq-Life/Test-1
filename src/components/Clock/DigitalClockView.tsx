import React from "react";
import {ClockViewPropsType} from "./Clock";

export const gwt2digitsString = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{gwt2digitsString(date.getHours())} : </span>
        <span>{gwt2digitsString(date.getMinutes())} : </span>
        <span>{gwt2digitsString(date.getSeconds())}</span>
    </>
}