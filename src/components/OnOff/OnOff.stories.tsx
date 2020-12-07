import React, {useState} from "react";
import {Meta} from '@storybook/react/types-6-0';
import UnOnOff from "../UncontrolledOnOff/UnOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff button',
    component: UnOnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action('clicked on or off')

export const onMode = () => <UnOnOff on={true} setOff={callback}/>
export const offMode = () => <UnOnOff on={false} setOff={callback}/>

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return <UnOnOff on={value} setOff={setValue}/>
}