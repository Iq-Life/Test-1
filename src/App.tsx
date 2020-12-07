import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {OnnOff} from "./components/OnOff/OnnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UnOnOff from "./components/UncontrolledOnOff/UnOnOff";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsTitleType = {
    title: string
}

function App() { //JSX

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOff] = useState<boolean>(false)

    const tasks1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "CSS", isDone: true},
    ];
    const tasks2: Array<TaskType> = [
        {id: 1, title: "Hello", isDone: false},
        {id: 2, title: "Hey!", isDone: true},
        {id: 3, title: "Yo!", isDone: true},
    ];


    return (
        <div className="App">

            <div>
                {/*<PageTitle title={"This is APP component"}/>
                <PageTitle title={"My friends"}/>*/}
                <h2>Article 1</h2>
                <Accordion titleValue={"My menu"}
                           collapsed={accordionCollapsed}
                           onClick={setAccordionCollapsed}/>
                <Rating value={ratingValue} onClick={setRatingValue}/>
                <h2>Article 2</h2>
                <UncontrolledAccordion titleValue={"UnMenu"}/>
                <UncontrolledRating value={0}/>
            </div>
            <div>
                <OnnOff onChange={setSwitchOff}/> {switchOn.toString()}
                <UnOnOff on={switchOn} setOff={setSwitchOff}/>
            </div>
        </div>
    );
}

function PageTitle(props: PropsTitleType) {
    return <h1>{props.title}</h1>
}

export default App;

