import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EMPTY_FORM_VALUES_USERS } from "../shared/newUsersConst";
import { mandatoryInputs } from "../services/usersName";
import { mandatoryInputsPass } from "../services/usersPassword";
import { mandatoryInputsEmail } from "../services/usersEmail";
import { Toaster, toast } from "sonner";


const UsersForm = ({isUser, createNewUsers, usersUpdate, updateUsers, setIsUser, setUsersUpdate}) => {

 const {register, handleSubmit, reset, formState: {errors}} = useForm()

 const submit = (data) => {
  if (usersUpdate) {
    updateUsers(data, reset)
    toast('EDITED USER')
  }else{

  createNewUsers(data, reset)
  toast('USER CREATED')
  }
}
console.log(errors)

const handleClickCloseUser = () =>{
  setIsUser(false)
  reset(EMPTY_FORM_VALUES_USERS)
  setUsersUpdate(null)
}



useEffect(() => {
    if(usersUpdate){
      reset(usersUpdate)
    }
    
  }, [usersUpdate])
  

  return (
    <section className={`fixed bg-black/70 top-0 bottom-0 left-0 right-0 flex items-center justify-center transition-opacity ${isUser ? "visible opacity-100" : "invisible opacity-0"}`}>
      <form onSubmit={handleSubmit(submit)} action="button" className="bg-white grid gap-8 p-[40px] relative min-w-[20%]">

        <button type="button" onClick={handleClickCloseUser}  className="font-extrabold absolute top-6 right-6" >X</button>
        <h1 className="font-bold text-2xl">{usersUpdate ? "Edit user" : "New User"} </h1>

        <div className="grid gap-2">
          <label htmlFor="first_name">Name</label>
          <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1" id="first_name" type="text" placeholder="Name" {...register("first_name", mandatoryInputs)}/> {errors.first_name && <p className="text-red-600 text-xs">{errors.first_name.message}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="last_name">last name</label>
          <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1" id="last_name" type="text" placeholder="Last Name" {...register("last_name", mandatoryInputs)}/> {errors.first_name && <p className="text-red-600 text-xs">{errors.first_name.message}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email">Eamil</label>
          <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1" id="email" type="email" placeholder="email" {...register("email", mandatoryInputsEmail)}/> {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="password">Password</label>
          <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1" id="password" type="password" placeholder="password" {...register("password", mandatoryInputsPass) }/> {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="birthday">birthday</label>
          <input className ="outline-none border-[2px] border-gray-300 rounded-md py-1" id="birthday" type="date" {...register("birthday")}/>
        </div>
        <Toaster className=""  position="top-center" />
        <button className="bg-blue-700 text-white p-3">{usersUpdate ? "Save user" : "Add new user" }</button>
      </form>
    </section>
  );
};
export default UsersForm;
