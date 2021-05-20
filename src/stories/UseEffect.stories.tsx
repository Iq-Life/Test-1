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

export const SetIntervalExample = () => {
    console.log("SetTimeoutExample")

   const [counter, setCounter] = useState(1)

    useEffect(()=> {
        const intervalCount = setInterval(()=> {
        setCounter(state => state+1)
        }, 1000)
        return ()=>{
            clearInterval(intervalCount)
        }
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
export const SetTimeoutExample = () => {
    const [text, setText] = useState(' ')

    console.log("Component render with " + text)

    useEffect(()=> {
        const timeoutId = setTimeout (()=> {
            console.log("TIMEOUT EXPIRED")
            setText('3 seconds passed')
        }, 3000 )
        return () => {
            clearTimeout(timeoutId)
        }
    },[text])

    return <>
        Typed text:
        <div>{text}</div>
    </>
}