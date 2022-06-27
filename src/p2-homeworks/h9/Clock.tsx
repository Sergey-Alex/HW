import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import cls from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            let date = new Date()
            let hour = date.getHours()
            let minutes = date.getMinutes()
            let sec = date.getSeconds()
            setDate(date)
        }, 1000)
        setTimerId(id)

    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    return (
        <div className={cls.tooltip}>
            <div
                onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                {date.getHours() + ':' + date.getMinutes() + ':' + (+date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())}
            </div>

            {show && (
                <span className={cls.tooltiptext}>
                    {date.getDate() + '/' + (+date.getMonth() + 1) + '/' + date.getFullYear()}
                    <br/>
                </span>

            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
