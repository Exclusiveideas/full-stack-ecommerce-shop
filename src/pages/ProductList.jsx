import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobile, medium } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const Title = styled.div`
  margin: 20px;
`;

const FilterCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${medium({ margin: "0px", fontSize: "16px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${medium({ padding: "5px" })}
  ${mobile({ margin: "10px 0px" })}
`;
  
const Option = styled.option``

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  console.log("cat => ",cat)

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  };

  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>{cat}</Title>
        <FilterCont>
            <Filter>
                <FilterText>Filter Products: </FilterText>
                <Select name="color" onChange={handleFilter}>
                    <Option disabled defaultValue>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="size" onChange={handleFilter}>
                    <Option disabled defaultValue>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest" defaultValue>Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterCont>
        <Products cat={cat} filters={filters} sort={sort} />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList