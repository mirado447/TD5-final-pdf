
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const SingUp = () => {
 const [email , setEmail] = useState('');
 const [password , setPassword] = useState('');
 const router = useRouter();

 const hundleChangeEmail = (e: React.ChangeEvent<HTMLInputElement> ) => {setEmail(e.target.value)} ;
 const hundleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value);}
 const hundleSubmit = ( e : any) => {e.preventDefault() ;
 const local = localStorage.getItem('userData')
 
 /**
  * if(typeof local !== undefined){
  if(local ){
    const data = JSON.parse(local) ;
    if(data && data.email === email && data.password === password){
      router.push('/home') 
    } else alert("Informations incorrect");
    
    setEmail('');
    setPassword('');
  
  };
  }
  */

   axios.post('http://localhost:8080/users/login', {
    email : email , 
    password : password 
  })
  .then(response => {
    router.push('/home')
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); 

  

}   

 return (
      <>
        <form onSubmit={hundleSubmit}>
          <h2>Login form</h2>
          <p>email</p>
          <input type="text"value={email} onChange={hundleChangeEmail} />
          <p>password</p>
          <input type="password" value={password} onChange={hundleChangePassword}/>
          <button type="submit">connexion</button>
        </form>
      </>
);
};
export default SingUp; 