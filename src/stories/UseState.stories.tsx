import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: 'useState demo'
} as Meta;

function generateData() {
    console.log("generateData")
    return 1
}

export const Example1 = () => {
    console.log("Example1")
//    const initValue = useMemo (generateData, [])

    const [counter, setCounter] = useState(generateData)

    return <>
    <button onClick={()=> setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}