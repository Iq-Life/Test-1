import React, {useState, KeyboardEvent, useEffect} from "react";
import ss from './Select.module.css'

export type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChange: (value: any) => void
}

export type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {

    const [selActive, setSelActive] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(props.value);//выделиние сторки наводя мышкой

    const selectedItem = props.items.find((i) => i.value === props.value);
    const hoveredItem = props.items.find((i) => i.value === hoveredElement);

    useEffect(() => {
        setHoveredElement(props.value);
    }, [props.value])

    const onClickItems = () => setSelActive(!selActive);

    const itemClicked = (value: any) => {
        props.onChange(value);
        onClickItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape"){
            setSelActive(false)
        }
    }

    return <>
        <div className={ss.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={ss.main} onClick={onClickItems}>{selectedItem && selectedItem.title}</span>
            {selActive &&
            <div className={ss.items}>
                {props.items.map((i) => <div
                    onMouseEnter={() => {
                        setHoveredElement(i.value)
                    }}
                    className={ss.item + " " + (hoveredItem === i ? ss.selected : "")}
                    key={i.value}
                    onClick={() => itemClicked(i.value)}>{i.title}</div>)}
            </div>
            }
        </div>
    </>;
}

/*
export type SelectPropsType = {
    value: any
    items: ItemType[]
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

export type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {
    const [selActive, setSelActive] = useState<boolean>(false)
    return (
        <div className={ss.select + "" + (selActive ? ss.active : "")}>
            <SelectTitle
                value={props.value}
                items={props.items}
                onTitleClick={props.onClick}
                collapsed={props.collapsed}
            />
            {!props.collapsed === true && <SelectBody value={props.value} items={props.items}/>}
        </div>
    )
}

export type SelectTitlePropsType = {
    onTitleClick: (collapsed: boolean) => void
    collapsed: boolean
    items: ItemType[]
    value: any
}

export function SelectTitle(props: SelectTitlePropsType) {
    const selectedItem = props.items.find((i) => props.value === props.value)
    return <h3 onClick={() => {
        props.onTitleClick(!props.collapsed)
    }}>{selectedItem && selectedItem.title}</h3>
}

export type SelectBodyPropsType = {
    value: any
    items: ItemType[]
}

export function SelectBody(props: SelectBodyPropsType) {
    return <div className={ss.item}>{props.items.map((i) => <div key={i.value}>{i.title}</div>)}</div>
}
*/
