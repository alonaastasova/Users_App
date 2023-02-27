import React from 'react'
import FemContainer from '../FemContainer'
import Form from '../Form'
import MaleContainer from '../MaleContainer'

export default function UserContainer() {
  return (
    <div>
        <Form />
        <MaleContainer />
        <FemContainer />
    </div>
  )
}