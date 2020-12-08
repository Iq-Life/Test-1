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
const onItemClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={false}
    onClick={callback}
    items={[ {title:"Pasha", value:1}, {title:"Dimych", value:2},
        {title:"Anton", value:3}, {title:"Kirill", value:4} ]}
    click={onItemClickCallback}
/>
export const CollapsedMode = () => <Accordion
    titleValue={'Users'}
    collapsed={true}
    onClick={callback}
    items={[ {title:"Pasha", value:1}, {title:"Dimych", value:2},
        {title:"Anton", value:3}, {title:"Kirill", value:4} ]}
    click={onItemClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onClick={() => setValue(!value)}
        items={[ {title:"Pasha", value:1}, {title:"Dimych", value:2},
            {title:"Anton", value:3}, {title:"Kirill", value:4} ]}
        click={(id) => { alert(`user with ID${id} should be happy`)}}
    />
}