import React, {useState} from "react";
import {Meta} from '@storybook/react/types-6-0';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action('clicked on or off')

export const onMode = () => <OnOff on={true} setOff={callback}/>
export const offMode = () => <OnOff on={false} setOff={callback}/>

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return <OnOff on={value} setOff={setValue}/>
}