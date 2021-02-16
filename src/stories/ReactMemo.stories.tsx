import React, {useState} from "react";
import {Meta} from "@storybook/react/types-6-0";
export default {
    title: 'React.memo demo'
} as Meta;

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
console.log("sss")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Artem", "Pasha"])
      return <>
          <button onClick={()=> setCounter(counter + 1)}>+</button>
          <NewMessagesCounter count={counter}/>
          <Users users={users} />
          </>
        }