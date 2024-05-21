import axios from "axios"
import { useEffect, useState } from "react"
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

  const [data, setData] = useState([])
  useEffect(() => {

    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setData(data))
  }, [data])

  const deleteBtn = (id) => {

    axios.delete(`http://localhost:3000/users/${id}`)
  }


  return (

    <div className="inputs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Name
          <input {...register("name", { required: true })} /> <br />
          {errors.name && <span>This field is required</span>}</label>


        <label htmlFor="">
          Info
          <input {...register("info", { required: true })} /> <br />
          {errors.info && <span>This field is required</span>}
        </label>


        <label htmlFor="">Price
          <input {...register("price", { required: true })} /> <br />
          {errors.price && <span>This field is required</span>}</label>



        <input type="submit" />
      </form>


      <table border={"2"}>
        <thead>
          <th>Name</th>
          <th>Info</th>
          <th>Price</th>
          <th>DELETE</th>
        </thead>
        <tbody>
          {
            data.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.info}</td>
                  <td>{item.price}</td>
                  <td><button onClick={() => deleteBtn(item.id)}>DELETE</button></td>
                </tr>

              )
            })
          }

        </tbody>

      </table>
    </div>
  )
}

export default Add