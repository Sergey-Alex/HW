import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    deleteAffairCallback: (_id: number) => void
    affairs: Array<AffairType>
    setFilter: (filter: FilterType) => void
}


function Affairs({affairs, deleteAffairCallback, setFilter}: AffairsPropsType) {

    const mappedAffairs = affairs.map((affair: AffairType) =>
        <Affair key={affair._id}
                affair={affair}
                deleteAffairCallback = {deleteAffairCallback} />)
    const setAll = (filter:FilterType) => {
        setFilter(filter)
    }
    const setHigh = (filter:FilterType) => {
        setFilter(filter)
    }
    const setMiddle = (filter: FilterType) => {
        setFilter(filter)
    }
    const setLow = (filter:FilterType) => {
        setFilter(filter)
    }

    return (
        <div>
            {mappedAffairs}

            <button onClick={() => setAll('all')}>All</button>
            <button onClick={() => setHigh('high')}>High</button>
            <button onClick={() => setMiddle('middle')}>Middle</button>
            <button onClick={() => setLow('low')}>Low</button>
        </div>
    )
}

export default Affairs
