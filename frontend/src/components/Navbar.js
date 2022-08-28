import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { persistor } from '../redux/store'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ad1457',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:'white',
  textAlign:'center',
};

// main navbar container+wrapper
const Container = styled.div`
height: 60px;
${mobile({ height: '50px' })};
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: '10px 10px' })};
`
// left side(language, search)
const Left = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex: 1;
`
const Language = styled.span`
font-size: 16px;
cursor: pointer;
${mobile({ fontSize: '10px' })};
color: white;
`
// const SearchContainer = styled.div`
// /* border: 0.5px solid lightgrey; */
// display: flex;
// align-items: center;
// margin-left: 25px;
// padding: 5px;
// ${mobile({ marginRight: '10px' })};
// `
// const Input = styled.input`
// border: none;
// ${mobile({ width: "50px" })};
// `
// center(logo)
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: '20px' })};
color: white;

`
const RedName = styled.span`
color: red;
`

// right side login
const Right = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: flex-end;
${mobile({ flex:2, justifyContent: "center" })}
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin: 0px 5px;
color: white;
${mobile({ fontSize: '12px', marginLeft:'10px' })};
`



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector((state) => state.user.currentUser)
    function refreshPage() {
        window.location.reload(false);
      }

  return (
    <>
    <Container>
        <Wrapper>
            <Left>
              <Link to='/master' style={{ textDecoration: "none" }}>
                <Language>DESIGN A SHIRT</Language>
                </Link>
                <Button onClick={handleOpen} style={{color:'white', fontSize:'14px'}}>ABOUT</Button>
                {/* <SearchContainer>
                    <Input placeholder='search'/>
                    <SearchIcon style={{color:'gray', fontSize:16}} />
                </SearchContainer> */}
            </Left>
            <Center>
                <Link to='/' style={{ textDecoration: "none" }}>
                <Logo>HIGH<RedName><em>TECH</em></RedName>ME</Logo>
                </Link>
            </Center>
            <Right>
            {user ?
            (<Button onClick={() => {
                persistor.purge();
                refreshPage()
              }}>
                <MenuItem >LOGOUT</MenuItem>
                </Button>)
                :(<Link to="/login" style={{ color: "black", textDecoration: "none" }}>
                    <MenuItem>SIGN IN</MenuItem>
                </Link>)}
                <Link to='/cart'>
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary" style={{marginRight:'10px'}}>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        CLASS PROJECT<br/>
        MERN STACK E-COMMERCE<br/>
        This project utilizes:
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        MongoDB: Database<br/><br/>
        Express.js and Node.js: Api<br/><br/>
        React.js: Frontend<br/><br/>
        Firebase: Image storage<br/><br/>
        Jwt: Authentication
      </Typography>
    </Box>
  </Modal>
  </>
  )
}

export default Navbar