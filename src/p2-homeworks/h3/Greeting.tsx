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

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={event => {if (event.key === 'Enter') addUser()}}
                className={error && s.error}/>
            <hr/>
                <div className={s.someClass}>
                    <span>{error}</span>
                </div>

            <button  onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
