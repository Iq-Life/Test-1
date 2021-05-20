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
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component render")

    useEffect(()=> {
        console.log("Effect occurred: " + counter)
        return ()=>{
            console.log("Reset effect: " + counter)
        }
    },[counter])

    const increase = () => ( setCounter(counter + 1))
    return <>
        Hello, counter:
        <div>{counter}</div>
        <button onClick={increase}> [o~0]</button>
    </>
}
export const KeysTrackerExample = () => {
    const [text, setText] = useState(' ')

    console.log("Component render with " + text)

    useEffect(()=> {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText((state)=> state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    },[])

    return <>
        Typed text:
        <div>{text}</div>
    </>
}