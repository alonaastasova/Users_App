import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.css'

export default function UserCard({id, image, name}) {

    const [showDelete, setShowDelete] = useState(false);
    const dispatch = useDispatch();


  return (
    <div 
    className={s.card}
    onMouseEnter={()=>setShowDelete(true)}
    onMouseLeave={()=>setShowDelete(false)}
    >
        {
          showDelete
          ? <button onClick={() => dispatch({type: 'USERS_DELETE', payload: id})}>&#10006;</button>
          : ''
        }
        <img src={image} alt="user" />
        <p>{name}</p>
    </div>
  )
}
