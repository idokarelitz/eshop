
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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
};


  

// const Container = styled.div`
// height: 30vh;
// background: #000000;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to bottom, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// color:white;
// `
// const Title = styled.h1`
// font-size: 70px;
// margin-bottom: 20px;
// `
// const SubTitle = styled.h3`
// font-size: 50px;
// margin-bottom: 20px;
// `
// const SubTitle2 = styled.h5`
// font-size: 30px;
// margin-bottom: 20px;
// `
// const Desc = styled.div`
// font-size: 24px;
// font-weight: 300;
// margin-bottom: 20px;
// ${mobile({ textAlign: 'center' })};
// `



const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>ABOUT</Button>
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
    </div>
  )
}

export default About