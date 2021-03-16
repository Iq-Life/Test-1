import React, {useEffect, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";

export default {
    title: 'useEffect demo'
} as Meta;

export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SimpleExample")

    useEffect(()=> {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
    useEffect(()=> {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])
    useEffect(()=> {
        console.log("useEffect first render and every counter render")
        document.title = counter.toString()
    }, [ counter ])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}> counter + </button>
        <div>{fake}
            <span><button onClick={() => setFake(fake + 1)}> fake + </button></span></div>
    </>
}

export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")

   const [counter, setCounter] = useState(1)

    useEffect(()=> {
        setInterval(()=> {
        setCounter(state => state+1)
        }, 1000)
    },[])

    return <>
        Hello, counter:
        <div>{counter}</div>
    </>
}