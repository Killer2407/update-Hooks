import React, { useState } from 'react'

function App() {
  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName] = useState('')

  const generateName = (e) => {
    e.preventDefault();
  }
  
  
  return (
    <div>
      <form>
        <input placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
        <button onClick={generateName}> Generate Name </button>
      </form>

    </div>
  )
}

export default App
