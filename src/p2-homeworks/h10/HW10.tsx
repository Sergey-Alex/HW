import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import spinner from '../../assets/Spinner.svg'

function HW10() {

    const dispatch = useDispatch()
   const isLoading = useSelector<AppStateType, boolean>(state => state.loading.isLoading)


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        },1000)


    };

    return (
        <div>
            <hr/>
            homeworks 10

            { isLoading
                ? (
                    <img style={{height: '50px'}} src={spinner} alt='preloader'/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
