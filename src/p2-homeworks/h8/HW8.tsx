import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import cls from './HW.module.css'

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div  className={cls.cls1} key={p._id}>
          <span> {p.name}</span><br/> <span>{p.age}</span>
        </div>
    ))



    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sort18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 'u18'}))

    return (
        <div  >
            {finalPeople}
            <div className={cls.cls2}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={sort18}>check 18</SuperButton></div>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW8
