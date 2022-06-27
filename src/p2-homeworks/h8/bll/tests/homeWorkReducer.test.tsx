import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType>

beforeEach(() => {

    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('should sort initial state up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})


    expect(initialState.length).toEqual(newState.length)
    console.log(newState)
    expect(newState[0].age).toBe(3)
    expect(newState[0].name).toBe('Кот')



})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    console.log(newState)
    expect(initialState.length).toEqual(newState.length)
    expect(newState[0].age).toBe(66)
    expect(newState[0].name).toBe('Александр')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.length).toBe(4)



})
