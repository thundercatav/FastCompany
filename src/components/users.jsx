import React,{useState} from "react";
import api from "../api";

const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll())
  const [number, setNumber] = useState(users.length)
  
    const handleDelete = (userId) => {
      setUsers(prevState => prevState.filter((prevState) => (prevState._id)!== userId))
      handleDecrement()
    }

    const renderPhrase = (number) => {
      return number !== 0 
      ? <h1><span className="badge bg-primary">{number} {handleNumWord(number, ['человек', 'человека', ])} тусанет с тобой сегодня </span></h1> 
      : <h1><span className="badge bg-danger"> Никто не тусанет с тобой сегодня </span></h1>
    } 

    const handleDecrement = () => {
      setNumber((prevState) => prevState - 1)
    }

    const handleNumWord = (number, words) => {
      number = Math.abs(number) % 100
      let num = number % 10
      if(number > 10 && number < 20) return words[0]
      if(num > 1 && num < 5) return words[1]
      if(num == 1) return words[0]
      return words[0]
    }

      const getBageClasses = (color) => {
      let classes = "badge m-1 "
      classes += `bg-${color}`
      return classes
    }

    return (

    <>
    {renderPhrase(number)}

    <table className="table table-striped">

    {users.length !==0 
      ? <thead>
      <tr className="table-primary">
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"></th>
      </tr>
    </thead>  
      : ""}
    <tbody>

         {users.map(user => (<tr key = {user._id}>
          <td>{user.name}</td>
          <td>
            {user.qualities.map(quality=>{
            return <span className ={getBageClasses(quality.color)} key = {quality._id}>
                        {quality.name + " "}
                   </span>})}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>Delete</button></td>

          </tr>))}

    </tbody>
  </table>
  </>
)}

export default Users