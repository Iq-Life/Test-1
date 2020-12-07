import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import React, {useState} from "react";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action('accordion mode change event faired')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onClick={callback}/>
export const CollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onClick={() => setValue(!value)}/>
}