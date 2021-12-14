import {useState} from "react";
import url from "../../api/api";
import { Link, useHistory } from 'react-router-dom'
import NavBar from "../NavBar/NavBar";
import picture from '../../register.jpg';
import classes from './NewUser.module.css'
import newuserpic from '../../newuser.jpg'


function NewUser() {

  let history = useHistory();


    const [user, setUser] = useState({
      UserName: '',
      UserPassword: '',
      UserEmail: ''
    })
  
    function handleChange(e){
      const {name, value} = e.target
      setUser({
        ...user,
        [name] : value
      })
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      console.log(user)
      fetch(`${url}/adduser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      })
      .then( ()=>  history.push("/") )

        ;
    }

    return (
      <div> 
         <NavBar image={picture}/>
        <div className={classes.container}>
                <ol>How it works
                  <li>Enter your information</li>
                  <li>Click "Submit"</li>
                  <li>You will be automatically redirected to the Log In page
                  </li>
                  <li>Add items to your inventory</li>
                </ol>
         
          <form onSubmit={handleSubmit}>    
                <input className={classes.nu_input} required type="text" name="UserName" placeholder="Name" onChange={(e)=>handleChange(e)} value={user.UserName}></input>

                <input className={classes.nu_input} required type="password" name="UserPassword" placeholder="Password" onChange={(e)=>handleChange(e)} value={user.UserPassword}></input>

                <input className={classes.nu_input} required type="email" name="UserEmail" placeholder="E-mail" onChange={(e)=>handleChange(e)} value={user.UserEmail}></input> 

                <input className={classes.nu_input} type='submit'></input>

              </form>
              <img className={classes.userimage} src={newuserpic} alt="mannequins"/>
            </div>

            </div>
          );
        }
       
        export default NewUser;
        
  