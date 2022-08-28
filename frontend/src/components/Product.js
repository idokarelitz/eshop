import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';


const Info = styled.div`
opacity: 0;
width: 300px;
height: 300px;
position: absolute;
margin-top: 27px;
/* top: 0;
left: 0; */
background-color: rgba(255, 99, 71,0.2);
border-radius: 50%;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Logo = styled.h1`
position: absolute;
top:0;
color: white;
`

const Container = styled.div`
flex: 1;
margin: 5px;
margin-top: 50px;
min-width: 280px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;



position: relative;

&:hover ${Info}{
opacity: 1;
}
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`

const Image = styled.img`
width: 300px;
height: 300px;
border-radius: 50%;
z-index: 2;
margin-top: 30px;

`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    background-color: #20b7c4;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container>
        <Logo>{item.title}</Logo>
        <Circle />
        <Image src={item.img} />
        <Info>
             {/* <Icon>
                 <ShoppingCartOutlinedIcon style={{color:'black'}}/> 
             </Icon>   */}
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlinedIcon style={{color:'black'}}/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon style={{color:'black'}} />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product