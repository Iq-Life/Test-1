import React from "react";

type RatingPropsType = {
    value: RatingValueType
    onClick:(value:RatingValueType)=>void
}
type StarPropsType = {
    selected: boolean
    onClick:(value:RatingValueType)=>void
    value: RatingValueType
}
export type RatingValueType = 0|1|2|3|4|5


export function Rating(props: RatingPropsType) {

    return (
        <div>
            <StarMemo selected={props.value > 0} onClick={props.onClick} value={1}/>
            <StarMemo selected={props.value > 1} onClick={props.onClick} value={2}/>
            <StarMemo selected={props.value > 2} onClick={props.onClick} value={3}/>
            <StarMemo selected={props.value > 3} onClick={props.onClick} value={4}/>
            <StarMemo selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}
export const StarMemo = React.memo(Star)
function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={() => {props.onClick(props.value)}}>
        { props.selected ? <b>star </b> : "star " }
    </span>
}