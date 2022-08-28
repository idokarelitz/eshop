import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive';
import shirt from '../assets/tshirttop.png'
import { useState } from 'react'
import bitFlower from '../assets/bit-flowers.png'
import pdragon from '../assets/pdragon.png'
import mouse from '../assets/mouse.png'
import floppy from '../assets/floppy.png'

const Container = styled.div`
background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color: white;
position: relative;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding:'10px', flexDirection:'column' })};
`;

const ImgContainer = styled.div`
  /* background-color:red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height:500px;
  width:500px;
  ${mobile({ width:'90vw', height:'50vh' })};
`;

const Image = styled.img`
  height:500px;
  width:500px;
  ${mobile({ width:'90vw', height:'50vh' })};
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 0px 50px;
  ${mobile({ padding:'10px' })};
`;



const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width:'100%' })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;





const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width:'100%' })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const Pic = styled.img`
max-width: 150px;
cursor: pointer;
`
const ImagePic= styled.img`
max-width: 150px;
position: absolute;
margin-bottom: 130px;
${mobile({ width:'110px', marginTop:'30px' })};
`;


const Master = () => {
  const [color, setColor] = useState('white')
  const [size, setSize] = useState('M')
  const [picture, setPicture] = useState(null)
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }
  console.log(size)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer style={{backgroundColor:color}}>
        
          <Image src={shirt} />
          <ImagePic src={picture} /> 
          
          
        </ImgContainer >
        <InfoContainer>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <Button onClick={()=>setColor('gray')} color={'gray'} style={{backgroundColor:'gray'}}></Button>
              <Button onClick={()=>setColor('white')} color={'white'} style={{backgroundColor:'white'}}></Button>
              <Button onClick={()=>setColor('#1872da')} color={'#1872da'} style={{backgroundColor:'#1872da'}}></Button>
              <Button onClick={()=>setColor('#56e38f')} color={'#56e38f'} style={{backgroundColor:'#56e38f'}}></Button>
              <Button onClick={()=>setColor('#8f0808')} color={'#8f0808'} style={{backgroundColor:'#8f0808'}}></Button>
            
            </Filter>
          </FilterContainer>
          <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                
                  <FilterSizeOption >S</FilterSizeOption>
                  <FilterSizeOption >M</FilterSizeOption>
                  <FilterSizeOption >L</FilterSizeOption>
                  <FilterSizeOption >XL</FilterSizeOption>
                 
              </FilterSize>
            </Filter>
            <br/>
          <AddContainer>
          <AmountContainer>
              <RemoveIcon style={{cursor: 'pointer'}}
              onClick={()=> handleQuantity('dec')}/>
              <Amount>{quantity}</Amount>
              <AddIcon style={{cursor: 'pointer'}}
              onClick={()=> handleQuantity('inc')}/>
            </AmountContainer>
          
            
          </AddContainer>
          <br/>
            <Button onClick={()=>{<h1>NOT READY</h1>}} >ADD TO CART</Button>
            <br/><br/>
            <Pic onClick={()=>setPicture(bitFlower)} src={bitFlower}/>
            <Pic onClick={()=>setPicture(pdragon)} src={pdragon}/>
            <Pic onClick={()=>setPicture(mouse)} src={mouse}/>
            <Pic onClick={()=>setPicture(floppy)} src={floppy}/>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Master;