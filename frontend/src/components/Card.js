import React from 'react'
import {Link} from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './card.css'

const Card = ({item}) => {
  return (
    <div className="container">
        <Link to={`/product/${item._id}`}>
        <div className="box">
          <div className="imgBx">
            <img src={item.img} alt={item.title}/>
          </div>
          <div className="content">
            <div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
        </Link>
          </div>
  )
}

export default Card