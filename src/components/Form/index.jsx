import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.css'

export default function Form() {

    const dispatch = useDispatch();
    
    const submit = event => {
        event.preventDefault();
        const {name, image, gender} = event.target;

        const userNew = {id: Date.now(), name: name.value, image: image.value, gender: gender.value};

        dispatch({type: 'USERS_ADD', payload: userNew})

        name.value = '';
        image.value = '';
        gender.value = '';
    }

  return (
    <form onSubmit={submit} className={s.form}>
        <input type="text" name='name' placeholder='Name'/>
        <input type="text" name='image'placeholder='Image link'/>
        <input list='gender' name='gender' placeholder='Gender'/>
        <datalist id='gender'>
            <option value="Male" />
            <option value="Female" />
        </datalist>
        <button>Submit</button>
    </form>
  )
}
