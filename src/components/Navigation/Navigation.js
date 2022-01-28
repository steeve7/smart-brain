import React from 'react';

const Navigation = ({onRouteChange, isSignedin}) => {
    if(isSignedin) {
       return(
            <nav style={{display:'flex', justifyContent:'flex-end', cursor:'pointer'}}>
                <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3">Sign Out</p>
            </nav>
    );   
    }else{
        return(
            <nav style={{display:'flex', justifyContent:'flex-end', cursor:'pointer'}}>
                <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3">Signin</p>
                <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3">Register</p>
            </nav>
        );
    }
}


export default Navigation;