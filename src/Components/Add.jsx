import axios from "axios"
import { useForm } from "react-hook-form"



 function Add() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    
    axios.post("http://localhost:3000/users", data)
    reset()

  }




  return (
    <div className="inputs">
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })}  />
      {errors.name && <span>This field is required</span>}


      <input {...register("info", { required: true })} />
      {errors.info && <span>This field is required</span>}


      <input {...register("price", { required: true })} />
      {errors.price && <span>This field is required</span>}


      <input type="submit" />
    </form>
    </div>
  )
}

export default Add