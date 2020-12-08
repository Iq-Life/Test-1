import React, {ChangeEvent, useRef, useState} from "react";
import {Meta} from '@storybook/react/types-6-0';

export default {
    title: 'Input',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const UncontrolledInput = () => <input/>;

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <input value={parentValue} onChange={onChange}/>
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2");

    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };

    return <select value={parentValue} onChange={onChange}>
        <option value={"1"}>none</option>
        <option value={"2"}>Penza</option>
        <option value={"3"}>Moscow</option>
        <option value={"4"}>Kiev</option>
        <option value={"5"}>Minsk</option>
    </select>;
};

export const ControlledInputWithFixedValue = () => <input value={"Ti-ti-kaKa"}/>;

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
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    };
    return <>
        <input ref={inputRef}/>;
        <button onClick={save}> save</button>;
        - actual value : {value}
    </>;
};

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
};//Нарушение принципов React

