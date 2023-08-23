
const UsersCards = ({ user, deleteUsers, handleClickUpdateUsers }) => {
  return (
    <article className="p-2 border-[2px] border-solid border-gray-500 grid justify-self-center min-w-[320px] bg-gray-200 shadow-2xl shadow-blue-400">
      <ul className="grid grid-cols-1 gap-4 ">
        <strong>
          <li className="text-center text-lg font-serif  ">
            {user.first_name} {user.last_name}
          </li>
        </strong>
        {/*<li>Apellido: {user.last_name}</li>*/}
        <span className="text-gray-500/50 ">Mail</span>
        <li>{user.email}</li>
        {/*<li>Contraseña:{user.password}</li> */}
        <span className="text-gray-500/50">
        birthday
        </span>
        <li className="flex gap-2 ">
          <img  src="/icon/present.png" alt="" />{" "}
          <p>{user.birthday}</p>
        </li>
      </ul>

      <div className="flex justify-end gap-1 p-5">

        <button
          onClick={() => deleteUsers(user.id)}
          className="bg-red-600 text-white p-2 border-black border-[2px] rounded-lg">
          <img src="/icon/trash.png" alt="" />
        </button>

        <button
          onClick={() => handleClickUpdateUsers(user)}
          className="p-2 ml-2 border-black border-[2px] bg-white rounded-lg">
          <img src="/icon/edit.png" alt="" />
        </button>

      </div>
    </article>
  );
};
export default UsersCards;
