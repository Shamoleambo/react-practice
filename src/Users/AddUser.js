import { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './AddUser.module.css'

const AddUser = props => {
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')

  const addUserHandler = event => {
    event.preventDefault()
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      return
    }
    if (+ageInput < 1) {
      return
    }

    setNameInput('')
    setAgeInput('')
    console.log(nameInput, ageInput)
  }
  const userNameChangeHandler = event => {
    setNameInput(event.target.value)
  }
  const userAgeChangeHandler = event => {
    setAgeInput(event.target.value)
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>User Name</label>
        <input
          type='text'
          id='username'
          value={nameInput}
          onChange={userNameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          id='age'
          value={ageInput}
          onChange={userAgeChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
