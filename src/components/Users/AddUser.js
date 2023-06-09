import { useState, useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = props => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = event => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).'
      })
      return
    }

    props.onAddUser(enteredName, enteredAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
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
          <input type='text' id='username' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input type='number' id='age' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
