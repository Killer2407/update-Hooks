// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [data, setData] = useState([]);


//     useEffect(()=> {
//       axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//           setData(res.data);
//           console.log(data)
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//         return () => {
//           console.log('Object ')
//         }
//     }, [])


//   return (
//     <div>
//       {data ? (
//         <ul>
//           {
//             data.map((item) => {
//               return (
//                 <>
//                 <li key={item.id}>{item.name}</li>
//                 <li key={item.idx}>{item.phone}</li>
//                 </>
//               )
//             })
//           }
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0); 

//   const increment = () => {
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(count - 1)
//   }

//   return (
//     <div>
//       <p>The count is: {count}</p>
//       <button onClick={increment}> + </button>
//       <button onClick={decrement}> - </button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Product from './Product'

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Product name="Amazon Echo" description="Your AI Assistant" price={59.99} />
      <Product name="Amazon Echo" description="Your AI Assistant" price={59.99} />
      <Product name="Amazon Echo" description="Your AI Assistant" price={59.99} />
      <Product name="Amazon Echo" description="Your AI Assistant" price={59.99} />
    </div>
  )
}

export default App
