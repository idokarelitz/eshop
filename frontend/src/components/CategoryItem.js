import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import './border.css'

const Container = styled.div`
flex: 1;
margin: 10px;
height: 50vh;
width: 50px;
position: relative;
background-color: black;
${mobile({ width:'95%' })};
`
const Image = styled.img`
width: 400px;
height: 400px;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
color: black;
margin-bottom: 20px;
text-align: center;
${mobile({ fontSize:'20px' })};
`
const Border = styled.div`

    display: block;
    top: -50%;
    left: -50%;
    z-index: -9;
    height: 100%;
    width: 100%;
    
    overflow: hidden;
    background: linear-gradient(to right, #000 20%, #000 40%, #18b2dd 50%, #ECD08C 55%, #15cbd4 70%, #000 100%);
    background-size: 200% auto;
    
    animation: shine 8s linear infinite;
`
// const Button = styled.button`
// border: none;
// padding: 10px;
// background-color: white;
// color: gray;
// cursor: pointer;
// font-weight: 600;
// `

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Border>
      <Title>{item.title}</Title>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            {/* <Title>{item.title}</Title>
            <Button>SHOP NOW</Button> */}
        </Info>
      </Link>
      </Border>
    </Container>
  )
}

export default CategoryItem