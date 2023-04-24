import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchApi = async() => {
  //     await fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setName(data)}
  //     )
  //   }
  //   fetchApi();
  // },[])

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res)
      setData(res.data)
      setLoading(false)
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])

  return (
    <div>
    {
      loading ? ('Loading') : (
        <div className='app'>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>{item.title}</li>
              )
            })}
          </ul>
        </div>
      )
    }
    </div>
  )
}

export default App  
