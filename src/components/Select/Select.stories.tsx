import React, {useState} from "react";
import {Meta} from '@storybook/react/types-6-0';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const WithValue = () => {
    const [value,setValue] = useState('2')
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {title: "Penza", value: 1}, {title: "Moscow", value: 2},
                {title: "Kiev", value: 3}, {title: "Minsk", value: 4}
                ]}
        />
    </>
}
/*const BaseExample = () => {
    const [sel, setSel] = useState<boolean>(true)
    return <>
        <select>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
        <div >
        <Select
            onClick={() => setSel(!sel)}
            collapsed={false}
            value={'1'}
            items={[{title: "Penza", value: 1}, {title: "Moscow", value: 2},
                {title: "Kiev", value: 3}, {title: "Minsk", value: 4}]}
        /></div>
    </>
}*/
