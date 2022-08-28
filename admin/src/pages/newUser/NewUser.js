import "./NewUser.css";
import { useState } from "react"
import { addUser } from "../../redux/apiCalls"
import { useDispatch } from "react-redux"

const NewUser = () => {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const handleClick = (e) =>{
    e.preventDefault();
    const user = { ...inputs };
          addUser(user, dispatch);
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john" 
            name='username'
            onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            name='email'
            onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password" 
            name='password'
            onChange={handleChange}/>
        </div>
        
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser