import axios from 'axios';
import React, { useState } from "react"

const Inscription = () => {
    const [name , setName ] = useState('');
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [confirmPass , setConfirmPass ] = useState('');
    const [bio , setBio ] = useState('');
    
    const hundleChangeName = (e : React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value)} ;
    
    const hundleChangeEmail = (e : React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value)} ;

    const hundleChangePassword = (e : React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value)} ;
    
    const hundleChangeConfirmPass = (e : React.ChangeEvent<HTMLInputElement>) => { setConfirmPass(e.target.value)} ;

    const hundleChangeBio = (e : React.ChangeEvent<HTMLInputElement>) => { setBio(e.target.value)} ;

    const hundleSubmit = (e : React.FormEvent<HTMLFormElement>) => { e.preventDefault() ;
        const userData = {
            name,
            email,
            password,
            confirmPass,
            bio,
        };

        if(password == confirmPass){
            axios.post('http://localhost:8080/users', {
                email : userData.email,
                password : userData.password,
                name : userData.name ,
                bio : userData.bio
            })
            .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.error(error);
              }); 
        }else{
            alert('verifie your password');
        }
        
        

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPass('');
        setBio('');
    
    } ; 

    return (
        <>
        <form onSubmit={hundleSubmit}>
            <p>Name</p>
            <input type="text" value={name} onChange={hundleChangeName} />
            <p>Email</p>
            <input type="email" name="" value={email} onChange={hundleChangeEmail} id="" />
            <p>Password</p>
            <input type="password" name="" value={password} onChange={hundleChangePassword} id="" />
            <p>Confirm password</p>
            <input type="password" name="" value={confirmPass} onChange={hundleChangeConfirmPass} id="" />
            <p>Bio</p>
            <input type="text" value={bio} onChange={hundleChangeBio} />
            <button type="submit"> Inscription </button>
        </form>
        </>
    );
};

export default Inscription ;