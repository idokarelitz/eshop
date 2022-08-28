import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: 'column' })};
color:white;

`
// left side
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
font-weight: bold;

`
const RedName = styled.span`
color: red;
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`

// center
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: 'none' })};
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

// right side
const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: 'black' })};
`
const ContactItem = styled.div`
margin: 20px;
display: flex;
align-items: center;

`
const Payment = styled.img`
width: 75%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>HIGH<RedName><em>TECH</em></RedName>ME</Logo>
            <Desc>Socially responsible production We're investing in programs to offset all carbon emissions.</Desc>
            <SocialContainer>
                <SocialIcon color='#3B5999'>
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color='#E4405F'>
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color='#55ACEE'>
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color='#E60023'>
                    <LinkedInIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Kids Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AddLocationAltIcon style={{marginRight:"10px"}}/> 6 Tech , Tel-aviv 334455
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +792544444444
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> ido@ido.com
        </ContactItem>
        <ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </ContactItem>
        
        </Right>
    </Container>
  )
}

export default Footer