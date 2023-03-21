import Card from '../UI/Card'
import styles from './AddUser.module.css'

const AddUser = props => {
  const addUserHandler = event => {
    event.preventDefault()
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>User Name</label>
        <input type='text' id='username' />
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser
