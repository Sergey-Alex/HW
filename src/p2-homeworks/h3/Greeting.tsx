import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {

    const inputStyle = s.inputStyle + `${error && s.error}`

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={event => {if (event.key === 'Enter') addUser()}}
                className={inputStyle}/>

                <div className={s.someClass}>
                    <span>{error}</span>
                </div>
            <div>
                <button className={s.btnStyle} onClick={addUser} disabled={!name}>add</button>
                <span className={s.numCount}>{totalUsers}</span>
            </div>

        </div>
    )
}

export default Greeting
