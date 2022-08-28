import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'

import Footer from '../components/Footer'
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div`
background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

color:white;
`

const Title = styled.h1`
margin: 20px;

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({ margin: '0px 30px', display:'flex', flexDirection:'column' })};
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ fontSize:'18px' })};
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin:'10px 0px' })};
`
const Option = styled.option``

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')

    const handleFilters = (e) =>{
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name] : value
        })
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option disabled>
                    Color
                    </Option>
                    <Option>WHITE</Option>
                    <Option>BLACK</Option>
                    <Option>RED</Option>
                    <Option>BLUE</Option>
                    <Option>GREEN</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option disabled>
                    Size
                    </Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value='newest'>Newest</Option>
                    <Option value='asc'>Price (asc)</Option>
                    <Option value='desc'>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        
        <Footer />
    </Container>
  )
}

export default ProductList