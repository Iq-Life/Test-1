import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Clock} from "./Clock"


export default {
    title: 'Clock demo',
    component: Clock,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const BaseAnalogExample = () => {
    return <Clock mode={"analog"}/>
}
export const BaseDigitalExample = () => {
    return <Clock mode={"digital"}/>
}