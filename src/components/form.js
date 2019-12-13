import React, { useState } from 'react';

const Form = ({ addMember }) => {

const [ newMember, setNewMember] = useState({
    member: '',
    email: '',
    role: '',
    number: ''
})

const changes = (event) => {
    console.log(event.target.value);
    setNewMember({...newMember, [event.target.name]: event.target.value})
}

const submitForm = event => {
event.preventDefault();
addMember(newMember);
setNewMember({member: '', email: '', role: ''})
}

return (
    <form onSubmit={submitForm}>
        <label htmlFor='full-name'>Name</label>
        <input
        id='full-name' 
        type='text'
        name='member'
        placeholder='Full Name'
        onChange={changes}
        value={newMember.member}
        />
        <label htmlFor='role'>Role</label>
        <input 
        id='role'
        type='text'
        name='role'
        placeholder='Your Role'
        onChange={changes}
        value={newMember.role}
        />
        <label htmlFor='email'>Email</label>
        <input 
        id='email'
        type='text'
        name='email'
        placeholder= 'Enter Email'
        onChange={changes}
        value={newMember.email}
        />
        <button type='submit'>Add Member</button>
    </form>
)
}

export default Form;