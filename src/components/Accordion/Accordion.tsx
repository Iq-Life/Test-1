import React from "react";

type AccordionPropsType= {
   titleValue: string
    collapsed : boolean
    onClick : (setAccordionCollapsed:boolean)=> void
}
type AccordionTitlePropsType= {
    title: string
    collapsed : boolean
    onClick : (collapsed:boolean)=> void
}


function Accordion(props:AccordionPropsType) {
        return <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.onClick}
                            collapsed={props.collapsed}/>
            {!props.collapsed === false && <AccordionBody/>}
        </div>
}

function AccordionTitle(props:AccordionTitlePropsType){
    return <><h3 onClick={() => {props.onClick(!props.collapsed)}}>-- {props.title} --</h3></>
}

function AccordionBody() {
    return<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}
export default Accordion;