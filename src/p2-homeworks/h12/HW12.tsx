import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {AppStateType} from "../h10/bll/store";


const themes = ['dark', 'red', 'some'];

function HW12() {

    let themePageColor = useSelector<AppStateType, string>(state => state.theme.themeColor)
    const dispatch = useDispatch()

    const  onChangeCallbackSelect = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }
    const  onChangeCallbackRadio = (e: string) => {
        dispatch(changeThemeC(e))
    }


    return (
        <div className={s[`${themePageColor}`]}>
            <hr/>
            <span className={s[`${themePageColor}+-text`]}>
            </span>
            <SuperSelect onChange={onChangeCallbackSelect} options={themes}/>
            <hr/>
            <SuperRadio onChangeOption={onChangeCallbackRadio} value={themePageColor}  options={themes}/>
        </div>
    );
}

export default HW12;
