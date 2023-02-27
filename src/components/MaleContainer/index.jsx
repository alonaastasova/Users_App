import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard';
import s from './style.module.css'

export default function MaleContainer() {

    const users = useSelector(store => store);

    const usersMale = users.filter(({gender}) => gender === 'Male');

  return (
    <div className={s.main}>
        <div>
            <p className={s.header}>Men</p>
        </div>
        <div className={s.container}>
            {
                usersMale.length === 0 ?
                <p className={s.info}>No users</p> :
                usersMale.map(user => <UserCard key={user.id} {...user} />)
            }
        </div>
    </div>
  )
}
