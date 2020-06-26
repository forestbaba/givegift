import React from 'react'
import './style.scss'
import grayimage from './gray-scale.png'

const index = () => {
    return (
        <div className='container'>
            <div className='left'>
                <h2>Keep Loved Ones Happy</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                <button>Create your birthday list</button>
            </div>
            <div className='right'>
                <div className='overlay'></div>
                <img src={grayimage} className='cover' />


            </div>
        </div>
    )
}
export default index;