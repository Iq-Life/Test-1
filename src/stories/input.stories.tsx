import React, {ChangeEvent, useRef, useState} from "react";
import {Meta} from '@storybook/react/types-6-0';


export default {
    title: 'Input',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const UncontrolledInput = () => <input/>;

export const ControlledInputWithFixedValue = () => <input value={"Ti-ti-kaKa"}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <>
        <input onChange={onChange}/> - {value}
    </>;
};

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}> save</button>
        - actual value : {value}
    </>
}

export const GetIdValueOfUncontrolledInput = () => {//Нарушение принципов React
    const [value, setValue] = useState("");
    const save = () => {
        const el = document.getElementById("inputId") as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input id={"inputId"}/>
        <button onClick={save}> save</button>
        actual value : {value}
    </>
};

