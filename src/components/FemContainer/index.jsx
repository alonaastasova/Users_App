import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard';
import s from './style.module.css'

export default function FemContainer() {

    const users = useSelector(store => store);

    const usersFemale = users.filter(({gender}) => gender === 'Female');

  return (
    <div className={s.main}>
        <div>
            <p className={s.header}>Women</p>
        </div>
        <div className={s.container}>
            {
                usersFemale.length === 0 ?
                <p className={s.info}>No users</p> :
                usersFemale.map(user => <UserCard key={user.id} {...user} />)
            }
        </div>
    </div>
  )
}
