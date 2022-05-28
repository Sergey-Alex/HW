import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair({affair,deleteAffairCallback}: AffairPropsType) {

    const deleteCallback = (_id:number) => {
        deleteAffairCallback(_id)

    }

    return (
        <div>
            <div>
                <div>{affair.name}</div>
                <div>{affair.priority}</div>
            </div>
            <button onClick={() => deleteCallback(affair._id)}>X</button>
        </div>

    )
}

export default Affair
