import { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = props => {
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [error, setError] = useState()

  const addUserHandler = event => {
    event.preventDefault()
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return
    }
    if (+ageInput < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).'
      })
      return
    }

    props.onAddUser(nameInput, ageInput)
    setNameInput('')
    setAgeInput('')
    console.log(nameInput, ageInput)
  }

  const errorHandler = () => {
    setError(null)
  }

  const userNameChangeHandler = event => {
    setNameInput(event.target.value)
  }
  const userAgeChangeHandler = event => {
    setAgeInput(event.target.value)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismissError={errorHandler}
        />
      )}
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
    </>
  )
}

export default AddUser
