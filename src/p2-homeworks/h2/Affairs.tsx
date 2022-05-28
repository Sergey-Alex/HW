import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

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
            <div>
                {mappedAffairs}
            </div>
            <div className={s.filterBtn}>
                <button className={s.blue} onClick={() => setAll('all')}>All</button>
                <button className={s.red} onClick={() => setHigh('high')}>High</button>
                <button className={s.yellow} onClick={() => setMiddle('middle')}>Middle</button>
                <button className={s.green} onClick={() => setLow('low')}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
