import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const callback = action('accordion mode change event faired')

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Menu"}/>
}
