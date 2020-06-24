import React from 'react'
import { MenuSVG } from '../reusables/styledsvg'
import './style.scss'

const Index = () => {
    return (
        <div className='navbar'>
            <p>A</p>
            <MenuSVG className='menu_icon' />
            <button className='how_it_works'>How it works</button>
        </div>
    )
}
export default Index;