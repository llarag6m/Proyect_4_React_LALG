import UsersCards from "./UsersCards"

const UsersList = ({users, deleteUsers ,handleClickUpdateUsers}) => {
 
  return (
    <section className="flex flex-wrap gap-10 p-10  border-black border-solid m-10 justify-center">
      {
        users.map((user) => <UsersCards key={user.id} user= {user} deleteUsers = {deleteUsers} handleClickUpdateUsers = {handleClickUpdateUsers}/>)
      }
    </section>
  )
}
export default UsersList