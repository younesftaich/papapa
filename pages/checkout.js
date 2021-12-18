import React, { useEffect } from "react";
import Router from 'next/router'



function logout(props) {
    useEffect(() => {

        Router.push('https://thenetflytv.com/checkout')
      });
    return (
        <div>
            
        </div>
    );
}

export default logout;
