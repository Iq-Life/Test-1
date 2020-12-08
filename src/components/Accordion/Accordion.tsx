import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (setAccordionCollapsed: boolean) => void
    items: ItemType[]
    click: (value:any) => void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={props.onClick}
                        collapsed={props.collapsed}
        />
        {!props.collapsed === false && <AccordionBody items={props.items} click={props.click}/>}
    </div>
}

export type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <>
        <h3 onClick={() => {props.onClick(!props.collapsed)}}>-- {props.title} --</h3>
    </>
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    click: (value:any) => void
}
export type ItemType = {
    title: string
    value: any
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>{props.items.map((i, index) => <li
                onClick={() => {props.click(i.value)}}
                key={index}>{i.title}</li>)}
    </ul>
}