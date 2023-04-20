import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);

    useEffect(()=> {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res.data);
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        })
    },[])


  return (
    <div>
      {data ? (
        <ul>
          {
            data.map((item) => {
              return (
                <>
                <li key={item.id}>{item.name}</li>
                <li key={item.idx}>{item.phone}</li>
                </>
              )
            })
          }
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
