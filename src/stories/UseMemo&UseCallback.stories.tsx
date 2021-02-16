import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("sss")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Artem", "Pasha"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()];
        setUsers(newUsers)
    }
    return <>
        <button onClick={addUser}>add Sveta</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}

const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log("BooksSs")
    return <div>
        <button onClick={ ()=> props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "Js", "HTML"])

    const newArray = useMemo(() => {
        const newArray = books.filter(books => books.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [books])

    const memoizedAddBook = useMemo(()=> {
        return () => {
            const newBooks = [...books, "Angular" + new Date().getTime()];
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(()=> {
            const newBooks = [...books, "Angular" + new Date().getTime()];
            setBooks(newBooks)
    }, [books])

    return <>
        Разница между useCallback & useMemo
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}