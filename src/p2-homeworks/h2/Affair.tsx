import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair({affair,deleteAffairCallback}: AffairPropsType) {

    const deleteCallback = (_id:number) => {
        deleteAffairCallback(_id)
    }

    const priorityClass = s.items + ' ' + s[affair.priority]

    return (
        <div>
            <div className={priorityClass}>
                <div>{affair.name}</div>
                <div>{affair.priority}</div>
            </div>
            <button className={s.removeBtn} onClick={() => deleteCallback(affair._id)}>❌</button>
        </div>

    )
}

export default Affair
