import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
}
} as Meta;

const callback = action('clicked on or off')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>UnSync when change defaultValue when already rendered</div>