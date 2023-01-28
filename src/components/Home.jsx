import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const data = useRef();
    const [array, setArray] = useState([]);
    const [val, setVal] = useState('');
    const navigate = useNavigate();
     const Click = (e)=>{
        setVal(data);
        localStorage.setItem('val', e);
        navigate('/categories');
     }
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/categories`).then(res=>setArray(res.data))
    },[])
    console.log(array);

  return (
    <div className='homeDiv'>{array.map((ele)=>{
       return <div  onClick={()=>Click(ele)} className = 'innerDiv' key={ele.id}><h3 ref = {data}>{ele}</h3></div>
    })}</div>
  )
}

export default Home