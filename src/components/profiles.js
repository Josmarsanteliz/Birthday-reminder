import React from 'react';

export default function Profiles(props) {

    const {img,name,age} = props.profile;
    return (
    <div className='card'>
        <header>
    <img src={img} alt='profile'/>
    </header> 
    <aside>
    <h3>{name}</h3>
    <h4>{age}</h4>
    </aside>
    </div>
    )
}