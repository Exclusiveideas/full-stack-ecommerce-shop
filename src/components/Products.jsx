import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { publicReq } from '../axios';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;


const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      try {
        const res = await publicReq.get( cat ?`/products?category=${cat}` 
        : "/products"
        );
        setProducts(res.data);
      } catch(err) {
        console.log("error fetching products");
      }
    }
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(([key, value]) =>
         item[key].includes(value)
      ))
    )
  }, [cat, filters, products]);
  
  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if(sort === "asc"){
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort]);
  

  return (
    <Container>
        { cat ? filteredProducts.map((item, i) => (
            <Product key={`${item.id}+${i}`} item={item} />
        )): products?.slice(0, 8)
              .map((item, i) =>  <Product key={`${item.id}+${i}`} item={item} />)}
    </Container>
  )
}

export default Products