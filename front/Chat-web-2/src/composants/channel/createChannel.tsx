import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";

const Channel = () => {
    
    const[name , setName] = useState('');
    
    const[type , setType] = useState('public');
    
    const hundleChangeName = (e : React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)};
    
    const hundleChangeType = (e : React.ChangeEvent<HTMLSelectElement>) => {setType(e.target.value)};
    
    const hundleSubmit = (e : React.FormEvent<HTMLFormElement>) => { e.preventDefault()

    };

    return(
        <form action="" onSubmit={hundleSubmit}>
            <p>Channel Name</p>
            <input type="text"  onChange={hundleChangeName} />
            <p>Type </p>
             <select value={type} onChange={hundleChangeType} name="" id="">
                <option value='public'>Public</option>
                <option value='private'>Private</option>
             </select>
             <p>Membres</p>
             <button type="submit">Create</button>
        </form>
    )

};
export default Channel ;