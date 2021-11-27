import {useState} from "react";


function NewUser() {

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
      fetch("http://localhost:3330/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      })
        ;
    }

    return (
        <div className="App"
          style={{
            width:"300px",
            margin:"20px auto auto auto",
            border:"1px black solid",
            borderRadius: '25px'
          }}
        >
          <h1>Create a User</h1>
          <form onSubmit={handleSubmit}
            style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              gap:'10px',
              margin:"10px auto 10px auto"
            }}
          >    
                <input type="text" name="UserName" onChange={(e)=>handleChange(e)} value={user.UserName}></input>
                <input type="text" name="UserPassword" onChange={(e)=>handleChange(e)} value={user.UserPassword}></input>
                <input type="text" name="UserEmail" onChange={(e)=>handleChange(e)} value={user.UserEmail}></input> 
                <input type='submit'></input>
              </form>
            </div>
          );
        }
        
        export default NewUser;
        
  