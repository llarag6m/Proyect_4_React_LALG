import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UsersForm from './components/UserForm'
import { EMPTY_FORM_VALUES_USERS } from './shared/newUsersConst'
import UsersList from './components/UsersList'

const URL = "https://users-crud.academlo.tech/"

function App() {

  const [isUser, setIsUser] = useState(false)
  const [users, setUsers] = useState([])
  const [usersUpdate, setUsersUpdate] = useState(null)
 

  const getAllUsers = () =>{
    axios
    .get(URL + "users/")
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))
  }


  const createNewUsers = (newUsers, reset) =>{
    axios
    .post(URL + "users/", newUsers)
    .then(() => {
      getAllUsers()
      setIsUser(false)
      reset(EMPTY_FORM_VALUES_USERS)
    })
    .catch((err) => console.log(err))
  }

  const deleteUsers = (idUser) =>{
    axios
      .delete(URL + `users/${idUser}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUsers = (userUpdate, reset) =>{
    axios
    .patch(URL + `users/${usersUpdate.id}/`,userUpdate)
    .then(() => {
      getAllUsers(),
      setIsUser(false),
      reset(EMPTY_FORM_VALUES_USERS)
      setUsersUpdate(null)
    })
    .catch((err) => console.log(err))
  }



  const handleClickUpdateUsers = (user) =>{
    setIsUser(true)
    setUsersUpdate(user)

  }

  const handleClickOpenUser = () =>{
    setIsUser(true)
  }

  useEffect(() => {
    getAllUsers()

  }, [])
  

  return (
    <main className='bg-gray-500/70 h-full w-full min-h-screen'>
    <section className='flex justify-between flex-wrap gap-3 p-5 shadow-xl shadow-blue-300'>
      <h1 className='font-extrabold text-4xl'>(USERS)</h1>
      <button onClick={handleClickOpenUser } className="bg-blue-700 text-white p-2 rounded-lg">+ Create a new user</button>
     </section>
     <UsersForm 
     isUser = {isUser} 
     setIsUser = {setIsUser} 
     createNewUsers = {createNewUsers} 
     usersUpdate = {usersUpdate} 
     updateUsers = {updateUsers} 
     setUsersUpdate = {setUsersUpdate}/>

     <UsersList 
     users ={users} 
     deleteUsers = {deleteUsers} 
     handleClickUpdateUsers ={handleClickUpdateUsers}/>
    </main>
  )
}

export default App
