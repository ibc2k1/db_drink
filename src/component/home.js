import React, {useContext} from 'react'
import {MyContext} from '../contexts/myContext'

// Importing the Login & Register Componet
import Login from './login'
import Register from './register'

function Home(){
    var array =[0,1,2];
    console.log("test"+array[0]);

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;
    
    // If user Logged in
    if(isAuth)
    {        
        return(
            <div className="userInfo">
                <h1>welcome!!</h1>
                <h2>Hi, {theUser.name}</h2>
                <div className="_email"><span>{theUser.email}</span></div>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
    
}

export default Home;