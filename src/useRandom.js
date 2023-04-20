import {useState, useEffect} from 'react'

function useRandom() {
    const[title, setTitle] = useState("")

    useEffect(() => {
        const fetchApi = async () => {
          await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => (res.json()))
            .then(data => {
              console.log(data)
              setTitle(data)
            })
        }
        fetchApi()
      }, [])

    return title;
}

export default useRandom
