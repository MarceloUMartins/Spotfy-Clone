import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';




const Logado = () => {
    const [isLogged, setIsLogged] = useState(true);
    const [toHome, setToHome] = useState(false);
    const Logout = () =>{
        localStorage.removeItem("user-logged-in")
        setToHome(true);
        
    }    

    if (toHome) {
        return (<Redirect to='/'/>);
      }

    return (
        <div className="container">
            <button onclick={Logout}>
                Logout
            </button>
        </div>
    )
}

export default Logado