import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div`
height: 30px;
background-color: #999fcb;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
${mobile({ marginTop: '30px' })};
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over $50
    </Container>
  )
}

export default Announcement