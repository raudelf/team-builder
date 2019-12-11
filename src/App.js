import React, { useState } from 'react';
import Form from './components/form';
import Cards from './components/Card';
import './App.css';

function App() {

  const [ member, setMember ] = useState([{
    number: 4,
    member: 'Raudel Flores',
    email: 'raudelf3@gmail.com',
    role: 'Software Engineer'
  }]);

  const addMember = m => {
    const newMemb = {
      number: Date.now(),
      member: m.member,
      email: m.email,
      role: m.role
    }

    const memberCollection = [...member, newMemb];
    setMember(memberCollection)
  }

  return (
    <div className='App'>
    <h1>Team Builder App</h1>
    <Form addMember={addMember}/>
    <Cards member={member}/>
    </div>
  );
}

export default App;
