import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Categories.css';

const Search = () => {
    let key = localStorage.getItem("enter");
    console.log(key);
    const [data, setData] = useState([]);
  
  
    useEffect(() => {
      axios.get(`https://dummyjson.com/products/category/${key}`)
        .then((res) => setData(res.data.products));
    }, [key]);
  console.log(data)
    return (
      <div>
        <div className='homeDivC'>
          {data&&data.map((ele) => (
            <div key={ele.id} className='innerDivC'>
              <img
                src={ele.thumbnail}
                alt={ele.id}
              />
              <h3>{ele.title}</h3>
              <h5>{ele.description}</h5>
              <h5>{ele.price}</h5>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Search