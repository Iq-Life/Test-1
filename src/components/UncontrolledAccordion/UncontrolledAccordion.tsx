import React, {useReducer} from "react";
import reducer, {TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType= {
   titleValue: string
}

type AccordionTitlePropsType= {
    title: string
    onClick: () => void
}

function UncontrolledAccordion(props:AccordionPropsType) {

    let [collapsed,dispatch] = useReducer(reducer, { collapsed: true })

        return <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_COLLAPSED})}}/>
            {!collapsed && <AccordionBody/>}
        </div>
}

function AccordionTitle(props:AccordionTitlePropsType){
    return <h3 onClick={ () => {props.onClick()} }>-- {props.title} --</h3>
}

function AccordionBody() {
    return<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}
export default UncontrolledAccordion;