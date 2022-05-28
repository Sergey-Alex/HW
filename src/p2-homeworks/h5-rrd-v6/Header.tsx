import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import './Header.css'

const activeLinkStyle = ({isActive}: any) => isActive ? 'activeLink' : ''

function Header() {

    return (
        <div className='slide'>
            <NavLink to={'/'} className={activeLinkStyle}/>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? 'activeLink' : ''}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? 'activeLink' : ''}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? 'activeLink' : ''}>junior-plus</NavLink>
        </div>
    )
}

export default Header
