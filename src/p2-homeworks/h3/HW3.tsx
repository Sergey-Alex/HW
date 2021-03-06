import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";


export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        const newArr: Array<UserType> = [{_id: v1(), name: name}, ...users]
        setUsers(newArr)

    }

    return (
        <div>
            <hr/>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
