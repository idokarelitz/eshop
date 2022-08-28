import './WidgetSm.css'
// import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods'

const WidgetSm = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    
    const getUsers = async ()=>{
      const res = await userRequest.get('users/?new=true')
      setUsers(res.data)
    }
    getUsers()
  }, [])
  

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(
        <li className="widgetSmListItem" key={user._id}>
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">{user.email}</span>
          </div>
          {/* <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button> */}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm