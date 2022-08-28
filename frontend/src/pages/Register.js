import styled from "styled-components"
import { mobile } from '../responsive';
import { useState } from "react"
import { addUser } from "../redux/apiCalls"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;

    
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  
`;


const Register = () => {
  
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()
    let navigate = useNavigate()
  
    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value }
      })
    }
    const handleClick = (e) =>{
      e.preventDefault();
      
      const user = { ...inputs };
            addUser(user, dispatch);
            navigate('/login')
    }
  

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                {/* <Input placeholder='name'/>
                <Input placeholder='last name'/> */}
                <Input 
                  type="text"
                  placeholder="username" 
                  name='username'
                  onChange={handleChange}
                  />
                  
                <Input
                  type="text"
                  placeholder='email'
                  name='email'
                  onChange={handleChange}
                  />
                <Input
                  type="password"
                  placeholder='password'
                  name='password'
                  onChange={handleChange}
                  />
                {/* <Input
                  placeholder='confirm password'
                  onChange={(e)=> setConPassword(e.target.value)}
                  /> */}
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                
                <Button onClick={handleClick}>CREATE</Button>
                <Button onClick={() =>navigate('/')}>HOME</Button>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register