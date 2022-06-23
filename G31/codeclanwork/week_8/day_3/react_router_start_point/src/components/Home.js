import React from "react";
import { useParams } from 'react-router-dom'

const Home = () => {

  const params = useParams();

  console.log(params);
  
  return (
  
  <div>
    <h4>Home</h4>
    <p>Welcome to our magical homepage</p>
    <p> This is page {params.id}</p>
  </div>
)};

export default Home;
