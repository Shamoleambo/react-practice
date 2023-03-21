import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (name, age) => {
    setUsersList(prevState => [
      ...prevState,
      { name, age, id: Math.ceil(Math.random() * 100) }
    ])
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  )
}

export default App
