import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs
    return affairs.filter(item => item.priority === filter)
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(item => item._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const deleteAffairCallback = (_id: number) => {
        return setAffairs(deleteAffair(affairs, _id))
    }

    const filteredAffairs = filterAffairs(affairs, filter)

    return (
        <div>
            <hr/>
            <Affairs
                affairs={filteredAffairs}
                deleteAffairCallback={deleteAffairCallback}
                setFilter = {setFilter}
            />
            <hr/>
        </div>
    )
}

export default HW2