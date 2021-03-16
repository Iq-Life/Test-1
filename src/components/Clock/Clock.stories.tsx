import React, {useEffect, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Clock} from "./Clock"



export default {
    title: 'Clock demo',
    component: Clock,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

export const BaseExample = () => {
    return <Clock/>
}